// Simple IndexedDB wrapper for persistent progress storage
const DB_NAME = "TaiwanA2MandarinDB";
const STORE_NAME = "progressStore";

function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);

        request.onupgradeneeded = () => {
            const db = request.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

export async function saveProgress(data) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, "readwrite");
        tx.objectStore(STORE_NAME).put(data, "taiwanA2Progress");
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => reject(tx.error);
    });
}

export async function loadProgress() {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, "readonly");
        const request = tx.objectStore(STORE_NAME).get("taiwanA2Progress");

        request.onsuccess = () => {
            resolve(request.result || null);
        };
        request.onerror = () => reject(request.error);
    });
}
