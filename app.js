/* ============================================
   Taiwan A2 Mandarin — Core App Logic
   ============================================ */

/* ------------------------------
   Screen Management
   ------------------------------ */

const screens = {
    onboarding: document.getElementById("onboarding"),
    study: document.getElementById("studyScreen"),
    menu: document.getElementById("menuScreen"),
    progress: document.getElementById("progressScreen"),
    deck: document.getElementById("deckScreen"),
    import: document.getElementById("importScreen"),
    export: document.getElementById("exportScreen"),
    reset: document.getElementById("resetScreen")
};

function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.add("hidden"));
    screens[name].classList.remove("hidden");
}

/* ------------------------------
   Navigation Overlay
   ------------------------------ */

const navOverlay = document.getElementById("navOverlay");

function openNav() {
    navOverlay.classList.remove("hidden");
}

function closeNav() {
    navOverlay.classList.add("hidden");
}

/* ------------------------------
   Modal System
   ------------------------------ */

const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const modalClose = document.getElementById("modalClose");

function showModal(text) {
    modalText.textContent = text;
    modal.classList.remove("hidden");
}

modalClose.addEventListener("click", () => {
    modal.classList.add("hidden");
});

/* ------------------------------
   Loading Spinner
   ------------------------------ */

const spinner = document.getElementById("loadingSpinner");

function showSpinner() {
    spinner.classList.remove("hidden");
}

function hideSpinner() {
    spinner.classList.add("hidden");
}

/* Persistent Storage (IndexedDB)
   ------------------------------ */

async function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("TaiwanA2MandarinDB", 1);

        request.onupgradeneeded = () => {
            const db = request.result;
            if (!db.objectStoreNames.contains("progressStore")) {
                db.createObjectStore("progressStore");
            }
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

async function saveProgress(data) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction("progressStore", "readwrite");
        tx.objectStore("progressStore").put(data, "taiwanA2Progress");
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => reject(tx.error);
    });
}

async function loadProgress() {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction("progressStore", "readonly");
        const request = tx.objectStore("progressStore").get("taiwanA2Progress");

        request.onsuccess = () => resolve(request.result || null);
        request.onerror = () => reject(request.error);
    });
}


/* ------------------------------
   Global State
   ------------------------------ */

let progress = loadProgress() || {
    items: {},          // per‑item SRS data
    reviews: 0,         // total reviews
    correct: 0,         // correct answers
    daily: {},          // daily review counts
    trouble: {}         // items with low performance
};

let currentItem = null;
let sessionQueue = [];
let sessionIndex = 0;

/* ------------------------------
   Utility Functions
   ------------------------------ */

function todayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
}

function incrementDaily() {
    const key = todayKey();
    if (!progress.daily[key]) progress.daily[key] = 0;
    progress.daily[key]++;
}

/* ------------------------------
   Event Bindings — Navigation
   ------------------------------ */

document.getElementById("goToMenu").addEventListener("click", openNav);

document.getElementById("navClose").addEventListener("click", closeNav);

document.getElementById("navStudy").addEventListener("click", () => {
    closeNav();
    startStudySession();
});

document.getElementById("navProgress").addEventListener("click", () => {
    closeNav();
    loadProgressScreen();
    showScreen("progress");
});

document.getElementById("navDeck").addEventListener("click", () => {
    closeNav();
    loadDeckScreen();
    showScreen("deck");
});

document.getElementById("navImport").addEventListener("click", () => {
    closeNav();
    showScreen("import");
});

document.getElementById("navExport").addEventListener("click", () => {
    closeNav();
    showScreen("export");
});

document.getElementById("navReset").addEventListener("click", () => {
    closeNav();
    showScreen("reset");
});

document.getElementById("openSettings").addEventListener("click", () => {
    showScreen("settingsScreen");
});

document.getElementById("menuContinueBtn").addEventListener("click", () => {
    startStudySession();
    showScreen("studyScreen");
});


/* ------------------------------
   Menu → Settings Navigation
   ------------------------------ */

document.getElementById("menuSettingsBtn").addEventListener("click", () => {
    showScreen("settingsScreen");
});

document.getElementById("settingsBackBtn").addEventListener("click", () => {
    showScreen("menu");
});

document.querySelectorAll("#bottomNav .nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.dataset.target;
        showScreen(target);
    });
});


/* ============================================
   Spaced Repetition Engine
   ============================================ */

/* ------------------------------
   SRS Interval Table
   ------------------------------ */

const intervals = {
    again: 0,          // review immediately
    hard: 6 * 60 * 60, // 6 hours
    good: 24 * 60 * 60, // 1 day
    easy: 3 * 24 * 60 * 60 // 3 days
};

/* ------------------------------
   Initialize Item Progress
   ------------------------------ */

function ensureItemProgress(id) {
    if (!progress.items[id]) {
        progress.items[id] = {
            lastReview: 0,
            nextDue: 0,
            interval: 0,
            correct: 0,
            wrong: 0
        };
    }
}

/* ------------------------------
   Build Study Session
   ------------------------------ */

function buildSessionQueue() {
    const now = Date.now() / 1000;

    const dueItems = data.filter(item => {
        ensureItemProgress(item.id);
        return progress.items[item.id].nextDue <= now;
    });

    // Shuffle for variety
    for (let i = dueItems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [dueItems[i], dueItems[j]] = [dueItems[j], dueItems[i]];
    }

    sessionQueue = dueItems;
    sessionIndex = 0;
}

/* ------------------------------
   Start Study Session
   ------------------------------ */

function startStudySession() {
    buildSessionQueue();

    if (sessionQueue.length === 0) {
        showModal("No items are due right now. Try again later!");
        return;
    }

    showScreen("study");
    loadNextItem();
}

/* ------------------------------
   Load Next Item
   ------------------------------ */

function loadNextItem() {
    if (sessionIndex >= sessionQueue.length) {
        showModal("Session complete! Great job.");
        showScreen("menu");
        return;
    }

    currentItem = sessionQueue[sessionIndex];

    // Reset UI
    document.getElementById("targetWord").textContent = currentItem.traditional;
    document.getElementById("exampleSentence").textContent = currentItem.example;
    document.getElementById("clueBox").classList.add("hidden");
    document.getElementById("answerBox").classList.add("hidden");
    document.getElementById("ratingButtons").classList.add("hidden");

    document.getElementById("clueBox").textContent = currentItem.clue;
    document.getElementById("pinyin").textContent = currentItem.pinyin;
    document.getElementById("meaning").textContent = currentItem.english;
    document.getElementById("sentenceReveal").textContent = currentItem.example;
    document.getElementById("translation").textContent = currentItem.translation;

    document.getElementById("sessionInfo").textContent =
        `Item ${sessionIndex + 1} of ${sessionQueue.length}`;
}

/* ------------------------------
   Clue + Reveal Buttons
   ------------------------------ */

document.getElementById("clueBtn").addEventListener("click", () => {
    document.getElementById("clueBox").classList.remove("hidden");
});

document.getElementById("revealBtn").addEventListener("click", () => {
    document.getElementById("answerBox").classList.remove("hidden");
    document.getElementById("ratingButtons").classList.remove("hidden");
});

/* ------------------------------
   Rating Handler
   ------------------------------ */

document.querySelectorAll(".rate-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const rating = btn.dataset.rating;
        applyRating(rating);
    });
});

/* ------------------------------
   Apply SRS Rating
   ------------------------------ */

function applyRating(rating) {
    const now = Date.now() / 1000;
    const p = progress.items[currentItem.id];

    if (rating === "again") {
        p.wrong++;
        p.interval = intervals.again;
        p.nextDue = now + p.interval;

        // Mark trouble words
        progress.trouble[currentItem.id] = {
            chinese: currentItem.traditional,
            pinyin: currentItem.pinyin,
            english: currentItem.english,
            wrong: p.wrong,
            interval: p.interval
        };

    } else {
        p.correct++;
        p.interval = intervals[rating];
        p.nextDue = now + p.interval;

        // Remove from trouble list if improving
        if (progress.trouble[currentItem.id] && p.correct > p.wrong) {
            delete progress.trouble[currentItem.id];
        }
    }

    p.lastReview = now;
    progress.reviews++;
    if (rating !== "again") progress.correct++;

    incrementDaily();
    saveProgress(progress);

    sessionIndex++;
    loadNextItem();
}
/* ============================================
   Progress Dashboard
   ============================================ */

/* ------------------------------
   Load Progress Screen
   ------------------------------ */

function loadProgressScreen() {
    const total = data.length;
    const seen = Object.keys(progress.items).length;
    const mastered = Object.values(progress.items).filter(p => p.interval >= intervals.easy).length;

    const now = Date.now() / 1000;
    const due = data.filter(item => {
        ensureItemProgress(item.id);
        return progress.items[item.id].nextDue <= now;
    }).length;

    const accuracy = progress.reviews === 0
        ? 0
        : Math.round((progress.correct / progress.reviews) * 100);

    document.getElementById("statTotal").textContent = total;
    document.getElementById("statSeen").textContent = seen;
    document.getElementById("statMastered").textContent = mastered;
    document.getElementById("statDue").textContent = due;
    document.getElementById("statReviews").textContent = progress.reviews;
    document.getElementById("statAccuracy").textContent = accuracy;

    loadDailyTable();
    loadTroubleWords();
}

/* ------------------------------
   Daily Activity Table
   ------------------------------ */

function loadDailyTable() {
    const table = document.getElementById("dailyTable");
    table.innerHTML = "";

    const today = new Date();
    const rows = [];

    for (let i = 13; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(today.getDate() - i);

        const key = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
        const count = progress.daily[key] || 0;

        rows.push(`<tr>
            <td>${key}</td>
            <td>${count}</td>
        </tr>`);
    }

    table.innerHTML = rows.join("");
}

/* ------------------------------
   Trouble Words
   ------------------------------ */

function loadTroubleWords() {
    const container = document.getElementById("troubleList");
    container.innerHTML = "";

    const template = document.getElementById("troubleItemTemplate");

    Object.values(progress.trouble).forEach(item => {
        const clone = template.content.cloneNode(true);

        clone.querySelector(".trouble-chinese").textContent = item.chinese;
        clone.querySelector(".trouble-pinyin").textContent = item.pinyin;
        clone.querySelector(".trouble-english").textContent = item.english;
        clone.querySelector(".trouble-rate").textContent = `Wrong: ${item.wrong}`;
        clone.querySelector(".trouble-interval").textContent = `Interval: ${item.interval / 3600}h`;

        container.appendChild(clone);
    });
}

/* ------------------------------
   Progress Back Button
   ------------------------------ */

document.getElementById("progressBack").addEventListener("click", () => {
    showScreen("menu");
});
/* ============================================
   Deck Search + Import/Export + Reset
   ============================================ */

/* ------------------------------
   Deck Screen
   ------------------------------ */

function loadDeckScreen() {
    const list = document.getElementById("deckList");
    list.innerHTML = "";

    const template = document.getElementById("deckItemTemplate");

    data.forEach(item => {
        const clone = template.content.cloneNode(true);

        clone.querySelector(".deck-chinese").textContent = item.traditional;
        clone.querySelector(".deck-pinyin").textContent = item.pinyin;
        clone.querySelector(".deck-english").textContent = item.english;

        ensureItemProgress(item.id);
        const p = progress.items[item.id];

        const status = p.interval >= intervals.easy
            ? "Mastered"
            : p.interval > 0
                ? "Learning"
                : "Not started";

        clone.querySelector(".deck-status").textContent = status;

        list.appendChild(clone);
    });
}

/* ------------------------------
   Deck Search Filter
   ------------------------------ */

document.getElementById("deckSearch").addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase();
    const list = document.getElementById("deckList");
    list.innerHTML = "";

    const template = document.getElementById("deckItemTemplate");

    data.forEach(item => {
        const haystack = `${item.traditional} ${item.pinyin} ${item.english}`.toLowerCase();
        if (!haystack.includes(q)) return;

        const clone = template.content.cloneNode(true);

        clone.querySelector(".deck-chinese").textContent = item.traditional;
        clone.querySelector(".deck-pinyin").textContent = item.pinyin;
        clone.querySelector(".deck-english").textContent = item.english;

        ensureItemProgress(item.id);
        const p = progress.items[item.id];

        const status = p.interval >= intervals.easy
            ? "Mastered"
            : p.interval > 0
                ? "Learning"
                : "Not started";

        clone.querySelector(".deck-status").textContent = status;

        list.appendChild(clone);
    });
});

/* ------------------------------
   Import Progress
   ------------------------------ */

document.getElementById("importBtn").addEventListener("click", () => {
    const fileInput = document.getElementById("importFile");
    const file = fileInput.files[0];

    if (!file) {
        showModal("Please select a file first.");
        return;
    }

    const reader = new FileReader();

    reader.onload = () => {
        try {
            const imported = JSON.parse(reader.result);
            progress = imported;
            saveProgress(progress);
            showModal("Progress imported successfully!");
        } catch {
            showModal("Invalid file format.");
        }
    };

    reader.readAsText(file);
});

/* ------------------------------
   Export Progress
   ------------------------------ */

document.getElementById("exportConfirmBtn").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(progress)], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.getElementById("downloadLink");
    link.href = url;
    link.download = "taiwanA2Progress.json";
    link.click();

    URL.revokeObjectURL(url);
});

/* ------------------------------
   Reset Progress
   ------------------------------ */

document.getElementById("confirmReset").addEventListener("click", () => {
    progress = {
        items: {},
        reviews: 0,
        correct: 0,
        daily: {},
        trouble: {}
    };
    saveProgress(progress);
    showModal("Progress reset.");
    showScreen("menu");
});
/* ============================================
   Onboarding + Menu + Final Glue Logic
   ============================================ */

/* ------------------------------
   Onboarding
   ------------------------------ */

document.getElementById("startOnboardingBtn").addEventListener("click", () => {
    showScreen("menu");
});

/* ------------------------------
   Menu Buttons
   ------------------------------ */

document.getElementById("menuStudyBtn").addEventListener("click", () => {
    startStudySession();
    showScreen("studyScreen");
});

document.getElementById("menuContinueBtn").addEventListener("click", () => {
    startStudySession();
    showScreen("studyScreen");
});

document.getElementById("menuDeckBtn").addEventListener("click", () => {
    loadDeckScreen();
    showScreen("deckScreen");
});

document.getElementById("menuProgressBtn").addEventListener("click", () => {
    loadProgressScreen();
    showScreen("progressScreen");
});

document.getElementById("menuTroubleBtn").addEventListener("click", () => {
    showScreen("troubleScreen");
});

document.getElementById("menuSettingsBtn").addEventListener("click", () => {
    showScreen("settingsScreen");
});


/* ------------------------------
   Deck Back Button
   ------------------------------ */

document.getElementById("deckBack").addEventListener("click", () => {
    showScreen("menu");
});

/* ------------------------------
   Import Back Button
   ------------------------------ */

document.getElementById("importBack").addEventListener("click", () => {
    showScreen("menu");
});

/* ------------------------------
   Export Back Button
   ------------------------------ */

document.getElementById("exportBack").addEventListener("click", () => {
    showScreen("menu");
});

/* ------------------------------
   Reset Back Button
   ------------------------------ */

document.getElementById("resetBack").addEventListener("click", () => {
    showScreen("menu");
});

/* ------------------------------
   Initial Load
   ------------------------------ */

showScreen("onboarding");

/* ------------------------------
   PWA — Service Worker Registration
   ------------------------------ */

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}

