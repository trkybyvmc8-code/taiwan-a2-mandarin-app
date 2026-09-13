/* ============================================
   Taiwan A2 Mandarin Vocabulary Deck
   Traditional Chinese • Pinyin • English
   Example Sentence • Translation • Clue
   ============================================ */

const data = [

    {
        id: 1,
        traditional: "你好",
        pinyin: "nǐ hǎo",
        english: "hello",
        example: "你好，我叫小王。",
        translation: "Hello, my name is Xiao Wang.",
        clue: "Basic greeting"
    },

    {
        id: 2,
        traditional: "謝謝",
        pinyin: "xièxie",
        english: "thank you",
        example: "謝謝你的幫忙。",
        translation: "Thank you for your help.",
        clue: "Polite phrase"
    },

    {
        id: 3,
        traditional: "請",
        pinyin: "qǐng",
        english: "please",
        example: "請坐。",
        translation: "Please sit.",
        clue: "Used to make requests"
    },

    {
        id: 4,
        traditional: "對不起",
        pinyin: "duìbuqǐ",
        english: "sorry",
        example: "對不起，我來晚了。",
        translation: "Sorry, I came late.",
        clue: "Apology"
    },

    {
        id: 5,
        traditional: "沒關係",
        pinyin: "méi guānxi",
        english: "it's okay",
        example: "沒關係，我不介意。",
        translation: "It's okay, I don't mind.",
        clue: "Response to apology"
    },

    {
        id: 6,
        traditional: "再見",
        pinyin: "zàijiàn",
        english: "goodbye",
        example: "我先走了，再見！",
        translation: "I’m heading off, goodbye!",
        clue: "Farewell phrase"
    },

    {
        id: 7,
        traditional: "是",
        pinyin: "shì",
        english: "to be / yes",
        example: "他是老師。",
        translation: "He is a teacher.",
        clue: "Basic verb"
    },

    {
        id: 8,
        traditional: "不是",
        pinyin: "bú shì",
        english: "not / no",
        example: "我不是學生。",
        translation: "I am not a student.",
        clue: "Negation"
    },

    {
        id: 9,
        traditional: "有",
        pinyin: "yǒu",
        english: "to have",
        example: "我有一台手機。",
        translation: "I have a mobile phone.",
        clue: "Possession"
    },

    {
        id: 10,
        traditional: "沒有",
        pinyin: "méiyǒu",
        english: "do not have",
        example: "我沒有時間。",
        translation: "I don’t have time.",
        clue: "Negation of 'have'"
    },

    {
        id: 11,
        traditional: "要",
        pinyin: "yào",
        english: "to want",
        example: "你要喝水嗎？",
        translation: "Do you want to drink water?",
        clue: "Expressing desire"
    },

    {
        id: 12,
        traditional: "不要",
        pinyin: "bú yào",
        english: "don’t want",
        example: "我不要吃飯。",
        translation: "I don’t want to eat.",
        clue: "Negative desire"
    },

    {
        id: 13,
        traditional: "可以",
        pinyin: "kěyǐ",
        english: "can / may",
        example: "我可以進來嗎？",
        translation: "May I come in?",
        clue: "Permission"
    },

    {
        id: 14,
        traditional: "不能",
        pinyin: "bù néng",
        english: "cannot",
        example: "這裡不能抽菸。",
        translation: "You cannot smoke here.",
        clue: "Prohibition"
    },

    {
        id: 15,
        traditional: "知道",
        pinyin: "zhīdào",
        english: "to know",
        example: "我知道這件事。",
        translation: "I know about this matter.",
        clue: "Knowledge"
    },

    {
        id: 16,
        traditional: "不知道",
        pinyin: "bù zhīdào",
        english: "don’t know",
        example: "我不知道他去哪裡。",
        translation: "I don’t know where he went.",
        clue: "Opposite of 'know'"
    },

    {
        id: 17,
        traditional: "喜歡",
        pinyin: "xǐhuān",
        english: "to like",
        example: "我喜歡喝咖啡。",
        translation: "I like drinking coffee.",
        clue: "Preference"
    },

    {
        id: 18,
        traditional: "不喜歡",
        pinyin: "bù xǐhuān",
        english: "don’t like",
        example: "他不喜歡運動。",
        translation: "He doesn’t like exercising.",
        clue: "Negative preference"
    },

    {
        id: 19,
        traditional: "吃",
        pinyin: "chī",
        english: "to eat",
        example: "我在吃早餐。",
        translation: "I am eating breakfast.",
        clue: "Basic verb"
    },

    {
        id: 20,
        traditional: "喝",
        pinyin: "hē",
        english: "to drink",
        example: "他喜歡喝茶。",
        translation: "He likes drinking tea.",
        clue: "Basic verb"
    },

    {
        id: 21,
        traditional: "買",
        pinyin: "mǎi",
        english: "to buy",
        example: "我想買衣服。",
        translation: "I want to buy clothes.",
        clue: "Shopping"
    },

    {
        id: 22,
        traditional: "賣",
        pinyin: "mài",
        english: "to sell",
        example: "他在賣水果。",
        translation: "He is selling fruit.",
        clue: "Opposite of buy"
    },

    {
        id: 23,
        traditional: "看",
        pinyin: "kàn",
        english: "to look / to watch",
        example: "我在看電視。",
        translation: "I am watching TV.",
        clue: "Visual action"
    },

    {
        id: 24,
        traditional: "聽",
        pinyin: "tīng",
        english: "to listen",
        example: "請聽我說。",
        translation: "Please listen to me.",
        clue: "Audio action"
    },

    {
        id: 25,
        traditional: "說",
        pinyin: "shuō",
        english: "to speak",
        example: "他說中文說得很好。",
        translation: "He speaks Chinese very well.",
        clue: "Speaking"
    },

    {
        id: 26,
        traditional: "寫",
        pinyin: "xiě",
        english: "to write",
        example: "我在寫作業。",
        translation: "I am writing homework.",
        clue: "Writing"
    },

    {
        id: 27,
        traditional: "做",
        pinyin: "zuò",
        english: "to do / to make",
        example: "你在做什麼？",
        translation: "What are you doing?",
        clue: "General action"
    },

    {
        id: 28,
        traditional: "去",
        pinyin: "qù",
        english: "to go",
        example: "我明天要去台北。",
        translation: "I will go to Taipei tomorrow.",
        clue: "Movement"
    },

    {
        id: 29,
        traditional: "來",
        pinyin: "lái",
        english: "to come",
        example: "他要來我家。",
        translation: "He will come to my house.",
        clue: "Movement"
    },

    {
        id: 30,
        traditional: "回家",
        pinyin: "huí jiā",
        english: "to go home",
        example: "我下班後回家。",
        translation: "I go home after work.",
        clue: "Daily routine"
    },

    {
        id: 31,
        traditional: "上班",
        pinyin: "shàngbān",
        english: "to go to work",
        example: "我八點上班。",
        translation: "I start work at 8.",
        clue: "Work routine"
    },

    {
        id: 32,
        traditional: "下班",
        pinyin: "xiàbān",
        english: "to finish work",
        example: "我六點下班。",
        translation: "I finish work at 6.",
        clue: "Work routine"
    },

    {
        id: 33,
        traditional: "上課",
        pinyin: "shàngkè",
        english: "to attend class",
        example: "我每天早上上課。",
        translation: "I attend class every morning.",
        clue: "School routine"
    },

    {
        id: 34,
        traditional: "下課",
        pinyin: "xiàkè",
        english: "class ends",
        example: "我們三點下課。",
        translation: "We finish class at 3.",
        clue: "School routine"
    },

    {
        id: 35,
        traditional: "睡覺",
        pinyin: "shuìjiào",
        english: "to sleep",
        example: "我晚上十一點睡覺。",
        translation: "I sleep at 11 p.m.",
        clue: "Daily routine"
    },

    {
        id: 36,
        traditional: "起床",
        pinyin: "qǐchuáng",
        english: "to get up",
        example: "我早上七點起床。",
        translation: "I get up at 7 a.m.",
        clue: "Daily routine"
    },

    {
        id: 37,
        traditional: "洗澡",
        pinyin: "xǐzǎo",
        english: "to take a shower",
        example: "我每天洗澡。",
        translation: "I shower every day.",
        clue: "Daily routine"
    },

    {
        id: 38,
        traditional: "吃飯",
        pinyin: "chīfàn",
        english: "to eat a meal",
        example: "我們一起吃飯吧。",
        translation: "Let’s eat together.",
        clue: "Daily routine"
    },

    {
        id: 39,
        traditional: "工作",
        pinyin: "gōngzuò",
        english: "work / job",
        example: "我的工作很忙。",
        translation: "My job is very busy.",
        clue: "Noun"
    },

    {
        id: 40,
        traditional: "學生",
        pinyin: "xuéshēng",
        english: "student",
        example: "他是大學生。",
        translation: "He is a university student.",
        clue: "Person"
    },
    {
        id: 41,
        traditional: "老師",
        pinyin: "lǎoshī",
        english: "teacher",
        example: "我的老師很親切。",
        translation: "My teacher is very kind.",
        clue: "Person"
    },

    {
        id: 42,
        traditional: "朋友",
        pinyin: "péngyou",
        english: "friend",
        example: "他是我的好朋友。",
        translation: "He is my good friend.",
        clue: "Relationship"
    },

    {
        id: 43,
        traditional: "家人",
        pinyin: "jiārén",
        english: "family members",
        example: "我週末要跟家人吃飯。",
        translation: "I will eat with my family this weekend.",
        clue: "Family"
    },

    {
        id: 44,
        traditional: "爸爸",
        pinyin: "bàba",
        english: "father",
        example: "我爸爸在公司上班。",
        translation: "My father works at a company.",
        clue: "Family"
    },

    {
        id: 45,
        traditional: "媽媽",
        pinyin: "māma",
        english: "mother",
        example: "我媽媽喜歡做菜。",
        translation: "My mother likes cooking.",
        clue: "Family"
    },

    {
        id: 46,
        traditional: "哥哥",
        pinyin: "gēge",
        english: "older brother",
        example: "我哥哥住在台中。",
        translation: "My older brother lives in Taichung.",
        clue: "Family"
    },

    {
        id: 47,
        traditional: "姐姐",
        pinyin: "jiějie",
        english: "older sister",
        example: "我姐姐很會唱歌。",
        translation: "My older sister is good at singing.",
        clue: "Family"
    },

    {
        id: 48,
        traditional: "弟弟",
        pinyin: "dìdi",
        english: "younger brother",
        example: "我弟弟今年十歲。",
        translation: "My younger brother is ten years old.",
        clue: "Family"
    },

    {
        id: 49,
        traditional: "妹妹",
        pinyin: "mèimei",
        english: "younger sister",
        example: "我妹妹很可愛。",
        translation: "My younger sister is very cute.",
        clue: "Family"
    },

    {
        id: 50,
        traditional: "孩子",
        pinyin: "háizi",
        english: "child",
        example: "那個孩子在公園玩。",
        translation: "That child is playing in the park.",
        clue: "Person"
    },

    {
        id: 51,
        traditional: "男生",
        pinyin: "nánshēng",
        english: "boy",
        example: "那個男生是新同學。",
        translation: "That boy is a new classmate.",
        clue: "Gender"
    },

    {
        id: 52,
        traditional: "女生",
        pinyin: "nǚshēng",
        english: "girl",
        example: "那個女生很安靜。",
        translation: "That girl is very quiet.",
        clue: "Gender"
    },

    {
        id: 53,
        traditional: "同學",
        pinyin: "tóngxué",
        english: "classmate",
        example: "我跟同學一起讀書。",
        translation: "I study together with my classmates.",
        clue: "School"
    },

    {
        id: 54,
        traditional: "同事",
        pinyin: "tóngshì",
        english: "coworker",
        example: "我同事很熱心。",
        translation: "My coworker is very helpful.",
        clue: "Work"
    },

    {
        id: 55,
        traditional: "醫生",
        pinyin: "yīshēng",
        english: "doctor",
        example: "醫生說我要多休息。",
        translation: "The doctor said I need more rest.",
        clue: "Profession"
    },

    {
        id: 56,
        traditional: "護士",
        pinyin: "hùshì",
        english: "nurse",
        example: "護士幫我量體溫。",
        translation: "The nurse helped me take my temperature.",
        clue: "Profession"
    },

    {
        id: 57,
        traditional: "司機",
        pinyin: "sījī",
        english: "driver",
        example: "司機開車很小心。",
        translation: "The driver drives very carefully.",
        clue: "Profession"
    },

    {
        id: 58,
        traditional: "老闆",
        pinyin: "lǎobǎn",
        english: "boss",
        example: "老闆今天不在公司。",
        translation: "The boss is not at the company today.",
        clue: "Work"
    },

    {
        id: 59,
        traditional: "客人",
        pinyin: "kèrén",
        english: "customer / guest",
        example: "店裡有很多客人。",
        translation: "There are many customers in the shop.",
        clue: "Business"
    },

    {
        id: 60,
        traditional: "學生證",
        pinyin: "xuéshēngzhèng",
        english: "student ID",
        example: "請出示學生證。",
        translation: "Please show your student ID.",
        clue: "School item"
    },

    {
        id: 61,
        traditional: "手機",
        pinyin: "shǒujī",
        english: "mobile phone",
        example: "我的手機沒電了。",
        translation: "My phone has no battery.",
        clue: "Common object"
    },

    {
        id: 62,
        traditional: "電腦",
        pinyin: "diànnǎo",
        english: "computer",
        example: "我用電腦工作。",
        translation: "I use a computer for work.",
        clue: "Technology"
    },

    {
        id: 63,
        traditional: "桌子",
        pinyin: "zhuōzi",
        english: "table",
        example: "桌子上有一本書。",
        translation: "There is a book on the table.",
        clue: "Furniture"
    },

    {
        id: 64,
        traditional: "椅子",
        pinyin: "yǐzi",
        english: "chair",
        example: "請坐在椅子上。",
        translation: "Please sit on the chair.",
        clue: "Furniture"
    },

    {
        id: 65,
        traditional: "書",
        pinyin: "shū",
        english: "book",
        example: "我在看一本書。",
        translation: "I am reading a book.",
        clue: "Object"
    },

    {
        id: 66,
        traditional: "筆",
        pinyin: "bǐ",
        english: "pen",
        example: "我忘記帶筆。",
        translation: "I forgot to bring a pen.",
        clue: "Stationery"
    },

    {
        id: 67,
        traditional: "紙",
        pinyin: "zhǐ",
        english: "paper",
        example: "請給我一張紙。",
        translation: "Please give me a piece of paper.",
        clue: "Stationery"
    },

    {
        id: 68,
        traditional: "包包",
        pinyin: "bāobāo",
        english: "bag",
        example: "我的包包很重。",
        translation: "My bag is very heavy.",
        clue: "Object"
    },

    {
        id: 69,
        traditional: "衣服",
        pinyin: "yīfu",
        english: "clothes",
        example: "我想買新衣服。",
        translation: "I want to buy new clothes.",
        clue: "Shopping"
    },

    {
        id: 70,
        traditional: "褲子",
        pinyin: "kùzi",
        english: "pants",
        example: "這條褲子很好看。",
        translation: "These pants look nice.",
        clue: "Clothing"
    },

    {
        id: 71,
        traditional: "鞋子",
        pinyin: "xiézi",
        english: "shoes",
        example: "你的鞋子在哪裡買的？",
        translation: "Where did you buy your shoes?",
        clue: "Clothing"
    },

    {
        id: 72,
        traditional: "帽子",
        pinyin: "màozi",
        english: "hat",
        example: "他戴了一頂帽子。",
        translation: "He is wearing a hat.",
        clue: "Clothing"
    },

    {
        id: 73,
        traditional: "外套",
        pinyin: "wàitào",
        english: "coat / jacket",
        example: "今天很冷，要穿外套。",
        translation: "It’s cold today, you should wear a jacket.",
        clue: "Clothing"
    },

    {
        id: 74,
        traditional: "雨衣",
        pinyin: "yǔyī",
        english: "raincoat",
        example: "下雨了，穿雨衣吧。",
        translation: "It’s raining, wear a raincoat.",
        clue: "Weather gear"
    },

    {
        id: 75,
        traditional: "傘",
        pinyin: "sǎn",
        english: "umbrella",
        example: "記得帶傘。",
        translation: "Remember to bring an umbrella.",
        clue: "Weather gear"
    },

    {
        id: 76,
        traditional: "錢",
        pinyin: "qián",
        english: "money",
        example: "我今天沒帶錢。",
        translation: "I didn’t bring money today.",
        clue: "Shopping"
    },

    {
        id: 77,
        traditional: "信用卡",
        pinyin: "xìnyòngkǎ",
        english: "credit card",
        example: "我用信用卡付錢。",
        translation: "I pay with a credit card.",
        clue: "Payment"
    },

    {
        id: 78,
        traditional: "現金",
        pinyin: "xiànjīn",
        english: "cash",
        example: "這家店只收現金。",
        translation: "This store only accepts cash.",
        clue: "Payment"
    },

    {
        id: 79,
        traditional: "零錢",
        pinyin: "língqián",
        english: "change / coins",
        example: "我沒有零錢。",
        translation: "I don’t have any coins.",
        clue: "Payment"
    },

    {
        id: 80,
        traditional: "價錢",
        pinyin: "jiàqián",
        english: "price",
        example: "這個價錢太高了。",
        translation: "This price is too high.",
        clue: "Shopping"
    },
    {
        id: 81,
        traditional: "便宜",
        pinyin: "piányí",
        english: "cheap",
        example: "這件衣服很便宜。",
        translation: "This piece of clothing is very cheap.",
        clue: "Describing price"
    },

    {
        id: 82,
        traditional: "貴",
        pinyin: "guì",
        english: "expensive",
        example: "這家餐廳有點貴。",
        translation: "This restaurant is a bit expensive.",
        clue: "Describing price"
    },

    {
        id: 83,
        traditional: "多少錢",
        pinyin: "duōshǎo qián",
        english: "how much (money)",
        example: "這個多少錢？",
        translation: "How much is this?",
        clue: "Shopping question"
    },

    {
        id: 84,
        traditional: "打折",
        pinyin: "dǎzhé",
        english: "discount",
        example: "今天打八折。",
        translation: "Today is 20% off.",
        clue: "Shopping"
    },

    {
        id: 85,
        traditional: "超市",
        pinyin: "chāoshì",
        english: "supermarket",
        example: "我去超市買東西。",
        translation: "I’m going to the supermarket to buy things.",
        clue: "Place"
    },

    {
        id: 86,
        traditional: "市場",
        pinyin: "shìchǎng",
        english: "market",
        example: "市場裡有很多水果。",
        translation: "There are many fruits in the market.",
        clue: "Place"
    },

    {
        id: 87,
        traditional: "便利商店",
        pinyin: "biànlì shāngdiàn",
        english: "convenience store",
        example: "台灣的便利商店很方便。",
        translation: "Convenience stores in Taiwan are very convenient.",
        clue: "Place"
    },

    {
        id: 88,
        traditional: "餐廳",
        pinyin: "cāntīng",
        english: "restaurant",
        example: "我們在餐廳吃飯。",
        translation: "We are eating at a restaurant.",
        clue: "Place"
    },

    {
        id: 89,
        traditional: "咖啡店",
        pinyin: "kāfēi diàn",
        english: "coffee shop",
        example: "我常去咖啡店讀書。",
        translation: "I often go to coffee shops to study.",
        clue: "Place"
    },

    {
        id: 90,
        traditional: "麵店",
        pinyin: "miàndiàn",
        english: "noodle shop",
        example: "這家麵店很好吃。",
        translation: "This noodle shop is delicious.",
        clue: "Place"
    },

    {
        id: 91,
        traditional: "飯店",
        pinyin: "fàndiàn",
        english: "hotel",
        example: "我們住在台北的飯店。",
        translation: "We are staying at a hotel in Taipei.",
        clue: "Place"
    },

    {
        id: 92,
        traditional: "銀行",
        pinyin: "yínháng",
        english: "bank",
        example: "我去銀行領錢。",
        translation: "I’m going to the bank to withdraw money.",
        clue: "Place"
    },

    {
        id: 93,
        traditional: "郵局",
        pinyin: "yóujú",
        english: "post office",
        example: "我去郵局寄信。",
        translation: "I’m going to the post office to send a letter.",
        clue: "Place"
    },

    {
        id: 94,
        traditional: "醫院",
        pinyin: "yīyuàn",
        english: "hospital",
        example: "他在醫院看醫生。",
        translation: "He is seeing a doctor at the hospital.",
        clue: "Place"
    },

    {
        id: 95,
        traditional: "藥局",
        pinyin: "yàojú",
        english: "pharmacy",
        example: "我去藥局買藥。",
        translation: "I’m going to the pharmacy to buy medicine.",
        clue: "Place"
    },

    {
        id: 96,
        traditional: "公園",
        pinyin: "gōngyuán",
        english: "park",
        example: "孩子在公園玩。",
        translation: "Children are playing in the park.",
        clue: "Place"
    },

    {
        id: 97,
        traditional: "學校",
        pinyin: "xuéxiào",
        english: "school",
        example: "我在學校上課。",
        translation: "I attend class at school.",
        clue: "Place"
    },

    {
        id: 98,
        traditional: "公司",
        pinyin: "gōngsī",
        english: "company",
        example: "我在科技公司工作。",
        translation: "I work at a tech company.",
        clue: "Place"
    },

    {
        id: 99,
        traditional: "車站",
        pinyin: "chēzhàn",
        english: "station",
        example: "我們在車站等公車。",
        translation: "We are waiting for the bus at the station.",
        clue: "Transport"
    },

    {
        id: 100,
        traditional: "捷運",
        pinyin: "jiéyùn",
        english: "MRT / subway",
        example: "台北的捷運很方便。",
        translation: "Taipei’s MRT is very convenient.",
        clue: "Transport"
    },

    {
        id: 101,
        traditional: "公車",
        pinyin: "gōngchē",
        english: "bus",
        example: "我每天坐公車上班。",
        translation: "I take the bus to work every day.",
        clue: "Transport"
    },

    {
        id: 102,
        traditional: "計程車",
        pinyin: "jìchéngchē",
        english: "taxi",
        example: "我們坐計程車去機場。",
        translation: "We take a taxi to the airport.",
        clue: "Transport"
    },

    {
        id: 103,
        traditional: "機車",
        pinyin: "jīchē",
        english: "scooter",
        example: "台灣有很多機車。",
        translation: "There are many scooters in Taiwan.",
        clue: "Transport"
    },

    {
        id: 104,
        traditional: "腳踏車",
        pinyin: "jiǎotàchē",
        english: "bicycle",
        example: "我騎腳踏車去學校。",
        translation: "I ride a bicycle to school.",
        clue: "Transport"
    },

    {
        id: 105,
        traditional: "走路",
        pinyin: "zǒulù",
        english: "to walk",
        example: "我走路去便利商店。",
        translation: "I walk to the convenience store.",
        clue: "Movement"
    },

    {
        id: 106,
        traditional: "開車",
        pinyin: "kāichē",
        english: "to drive",
        example: "他開車上班。",
        translation: "He drives to work.",
        clue: "Movement"
    },

    {
        id: 107,
        traditional: "停車",
        pinyin: "tíngchē",
        english: "to park",
        example: "這裡不能停車。",
        translation: "You cannot park here.",
        clue: "Transport rule"
    },

    {
        id: 108,
        traditional: "地圖",
        pinyin: "dìtú",
        english: "map",
        example: "我用地圖找路。",
        translation: "I use a map to find the way.",
        clue: "Navigation"
    },

    {
        id: 109,
        traditional: "方向",
        pinyin: "fāngxiàng",
        english: "direction",
        example: "你知道方向嗎？",
        translation: "Do you know the direction?",
        clue: "Navigation"
    },

    {
        id: 110,
        traditional: "左邊",
        pinyin: "zuǒbiān",
        english: "left side",
        example: "銀行在左邊。",
        translation: "The bank is on the left.",
        clue: "Direction"
    },

    {
        id: 111,
        traditional: "右邊",
        pinyin: "yòubiān",
        english: "right side",
        example: "便利商店在右邊。",
        translation: "The convenience store is on the right.",
        clue: "Direction"
    },

    {
        id: 112,
        traditional: "前面",
        pinyin: "qiánmiàn",
        english: "front",
        example: "車站在前面。",
        translation: "The station is in front.",
        clue: "Direction"
    },

    {
        id: 113,
        traditional: "後面",
        pinyin: "hòumiàn",
        english: "behind",
        example: "公園在後面。",
        translation: "The park is behind.",
        clue: "Direction"
    },

    {
        id: 114,
        traditional: "旁邊",
        pinyin: "pángbiān",
        english: "next to",
        example: "學校在我家旁邊。",
        translation: "The school is next to my house.",
        clue: "Direction"
    },

    {
        id: 115,
        traditional: "附近",
        pinyin: "fùjìn",
        english: "nearby",
        example: "附近有超市嗎？",
        translation: "Is there a supermarket nearby?",
        clue: "Location"
    },

    {
        id: 116,
        traditional: "遠",
        pinyin: "yuǎn",
        english: "far",
        example: "那個地方很遠。",
        translation: "That place is far.",
        clue: "Distance"
    },

    {
        id: 117,
        traditional: "近",
        pinyin: "jìn",
        english: "near",
        example: "我家離公司很近。",
        translation: "My home is very close to my company.",
        clue: "Distance"
    },

    {
        id: 118,
        traditional: "上面",
        pinyin: "shàngmiàn",
        english: "on top / above",
        example: "桌子上面有手機。",
        translation: "There is a phone on the table.",
        clue: "Location"
    },

    {
        id: 119,
        traditional: "下面",
        pinyin: "xiàmiàn",
        english: "under / below",
        example: "桌子下面有一隻貓。",
        translation: "There is a cat under the table.",
        clue: "Location"
    },

    {
        id: 120,
        traditional: "裡面",
        pinyin: "lǐmiàn",
        english: "inside",
        example: "包包裡面有錢。",
        translation: "There is money inside the bag.",
        clue: "Location"
    },
    {
        id: 121,
        traditional: "外面",
        pinyin: "wàimiàn",
        english: "outside",
        example: "外面在下雨。",
        translation: "It’s raining outside.",
        clue: "Location"
    },

    {
        id: 122,
        traditional: "中間",
        pinyin: "zhōngjiān",
        english: "middle",
        example: "他坐在中間。",
        translation: "He sits in the middle.",
        clue: "Location"
    },

    {
        id: 123,
        traditional: "地方",
        pinyin: "dìfāng",
        english: "place",
        example: "這個地方很漂亮。",
        translation: "This place is beautiful.",
        clue: "General noun"
    },

    {
        id: 124,
        traditional: "房間",
        pinyin: "fángjiān",
        english: "room",
        example: "我的房間很乾淨。",
        translation: "My room is very clean.",
        clue: "Home"
    },

    {
        id: 125,
        traditional: "廚房",
        pinyin: "chúfáng",
        english: "kitchen",
        example: "我在廚房做飯。",
        translation: "I am cooking in the kitchen.",
        clue: "Home"
    },

    {
        id: 126,
        traditional: "客廳",
        pinyin: "kètīng",
        english: "living room",
        example: "我們在客廳看電視。",
        translation: "We are watching TV in the living room.",
        clue: "Home"
    },

    {
        id: 127,
        traditional: "浴室",
        pinyin: "yùshì",
        english: "bathroom",
        example: "浴室在右邊。",
        translation: "The bathroom is on the right.",
        clue: "Home"
    },

    {
        id: 128,
        traditional: "門",
        pinyin: "mén",
        english: "door",
        example: "請把門關上。",
        translation: "Please close the door.",
        clue: "Object"
    },

    {
        id: 129,
        traditional: "窗戶",
        pinyin: "chuānghù",
        english: "window",
        example: "窗戶打開了。",
        translation: "The window is open.",
        clue: "Object"
    },

    {
        id: 130,
        traditional: "燈",
        pinyin: "dēng",
        english: "light / lamp",
        example: "請把燈打開。",
        translation: "Please turn on the light.",
        clue: "Home"
    },

    {
        id: 131,
        traditional: "冰箱",
        pinyin: "bīngxiāng",
        english: "refrigerator",
        example: "冰箱裡有牛奶。",
        translation: "There is milk in the refrigerator.",
        clue: "Appliance"
    },

    {
        id: 132,
        traditional: "洗衣機",
        pinyin: "xǐyījī",
        english: "washing machine",
        example: "我用洗衣機洗衣服。",
        translation: "I use the washing machine to wash clothes.",
        clue: "Appliance"
    },

    {
        id: 133,
        traditional: "電視",
        pinyin: "diànshì",
        english: "television",
        example: "他在看電視。",
        translation: "He is watching TV.",
        clue: "Appliance"
    },

    {
        id: 134,
        traditional: "空調",
        pinyin: "kōngtiáo",
        english: "air conditioner",
        example: "夏天要開空調。",
        translation: "You need to turn on the air conditioner in summer.",
        clue: "Appliance"
    },

    {
        id: 135,
        traditional: "熱",
        pinyin: "rè",
        english: "hot",
        example: "今天很熱。",
        translation: "It’s very hot today.",
        clue: "Weather"
    },

    {
        id: 136,
        traditional: "冷",
        pinyin: "lěng",
        english: "cold",
        example: "外面很冷。",
        translation: "It’s cold outside.",
        clue: "Weather"
    },

    {
        id: 137,
        traditional: "下雨",
        pinyin: "xiàyǔ",
        english: "to rain",
        example: "下午會下雨。",
        translation: "It will rain in the afternoon.",
        clue: "Weather"
    },

    {
        id: 138,
        traditional: "晴天",
        pinyin: "qíngtiān",
        english: "sunny day",
        example: "今天是晴天。",
        translation: "Today is a sunny day.",
        clue: "Weather"
    },

    {
        id: 139,
        traditional: "陰天",
        pinyin: "yīntiān",
        english: "cloudy day",
        example: "今天是陰天。",
        translation: "Today is cloudy.",
        clue: "Weather"
    },

    {
        id: 140,
        traditional: "颱風",
        pinyin: "táifēng",
        english: "typhoon",
        example: "颱風要來了。",
        translation: "A typhoon is coming.",
        clue: "Taiwan weather"
    },

    {
        id: 141,
        traditional: "水果",
        pinyin: "shuǐguǒ",
        english: "fruit",
        example: "我喜歡吃水果。",
        translation: "I like eating fruit.",
        clue: "Food"
    },

    {
        id: 142,
        traditional: "蔬菜",
        pinyin: "shūcài",
        english: "vegetables",
        example: "多吃蔬菜對身體好。",
        translation: "Eating more vegetables is good for your health.",
        clue: "Food"
    },

    {
        id: 143,
        traditional: "肉",
        pinyin: "ròu",
        english: "meat",
        example: "他不吃肉。",
        translation: "He doesn’t eat meat.",
        clue: "Food"
    },

    {
        id: 144,
        traditional: "雞肉",
        pinyin: "jīròu",
        english: "chicken",
        example: "我喜歡吃雞肉。",
        translation: "I like eating chicken.",
        clue: "Food"
    },

    {
        id: 145,
        traditional: "豬肉",
        pinyin: "zhūròu",
        english: "pork",
        example: "台灣的豬肉很好吃。",
        translation: "Taiwan’s pork is delicious.",
        clue: "Food"
    },

    {
        id: 146,
        traditional: "牛肉",
        pinyin: "niúròu",
        english: "beef",
        example: "牛肉麵是台灣有名的食物。",
        translation: "Beef noodles are a famous Taiwanese food.",
        clue: "Food"
    },

    {
        id: 147,
        traditional: "魚",
        pinyin: "yú",
        english: "fish",
        example: "我不常吃魚。",
        translation: "I don’t often eat fish.",
        clue: "Food"
    },

    {
        id: 148,
        traditional: "蛋",
        pinyin: "dàn",
        english: "egg",
        example: "我早餐吃蛋。",
        translation: "I eat eggs for breakfast.",
        clue: "Food"
    },

    {
        id: 149,
        traditional: "牛奶",
        pinyin: "niúnǎi",
        english: "milk",
        example: "我每天喝牛奶。",
        translation: "I drink milk every day.",
        clue: "Drink"
    },

    {
        id: 150,
        traditional: "水",
        pinyin: "shuǐ",
        english: "water",
        example: "請給我一杯水。",
        translation: "Please give me a glass of water.",
        clue: "Drink"
    },

    {
        id: 151,
        traditional: "茶",
        pinyin: "chá",
        english: "tea",
        example: "台灣的茶很好喝。",
        translation: "Taiwanese tea is very good.",
        clue: "Drink"
    },

    {
        id: 152,
        traditional: "咖啡",
        pinyin: "kāfēi",
        english: "coffee",
        example: "我每天喝咖啡。",
        translation: "I drink coffee every day.",
        clue: "Drink"
    },

    {
        id: 153,
        traditional: "果汁",
        pinyin: "guǒzhī",
        english: "juice",
        example: "我喜歡喝果汁。",
        translation: "I like drinking juice.",
        clue: "Drink"
    },

    {
        id: 154,
        traditional: "麵",
        pinyin: "miàn",
        english: "noodles",
        example: "我午餐吃麵。",
        translation: "I eat noodles for lunch.",
        clue: "Food"
    },

    {
        id: 155,
        traditional: "飯",
        pinyin: "fàn",
        english: "rice / meal",
        example: "我喜歡吃飯。",
        translation: "I like eating rice.",
        clue: "Food"
    },

    {
        id: 156,
        traditional: "麵包",
        pinyin: "miànbāo",
        english: "bread",
        example: "我早餐吃麵包。",
        translation: "I eat bread for breakfast.",
        clue: "Food"
    },

    {
        id: 157,
        traditional: "蛋糕",
        pinyin: "dàngāo",
        english: "cake",
        example: "這個蛋糕很好吃。",
        translation: "This cake is delicious.",
        clue: "Food"
    },

    {
        id: 158,
        traditional: "餅乾",
        pinyin: "bǐnggān",
        english: "cookies",
        example: "我喜歡吃餅乾。",
        translation: "I like eating cookies.",
        clue: "Snack"
    },

    {
        id: 159,
        traditional: "糖",
        pinyin: "táng",
        english: "candy / sugar",
        example: "不要吃太多糖。",
        translation: "Don’t eat too much sugar.",
        clue: "Food"
    },

    {
        id: 160,
        traditional: "鹽",
        pinyin: "yán",
        english: "salt",
        example: "這道菜太鹹了。",
        translation: "This dish is too salty.",
        clue: "Cooking"
    },
    {
        id: 161,
        traditional: "甜",
        pinyin: "tián",
        english: "sweet",
        example: "這個蛋糕很甜。",
        translation: "This cake is very sweet.",
        clue: "Taste"
    },

    {
        id: 162,
        traditional: "酸",
        pinyin: "suān",
        english: "sour",
        example: "這杯果汁有點酸。",
        translation: "This juice is a bit sour.",
        clue: "Taste"
    },

    {
        id: 163,
        traditional: "苦",
        pinyin: "kǔ",
        english: "bitter",
        example: "這個藥很苦。",
        translation: "This medicine is very bitter.",
        clue: "Taste"
    },

    {
        id: 164,
        traditional: "辣",
        pinyin: "là",
        english: "spicy",
        example: "台灣人喜歡吃辣。",
        translation: "Taiwanese people like spicy food.",
        clue: "Taste"
    },

    {
        id: 165,
        traditional: "鹹",
        pinyin: "xián",
        english: "salty",
        example: "這碗湯太鹹了。",
        translation: "This bowl of soup is too salty.",
        clue: "Taste"
    },

    {
        id: 166,
        traditional: "好吃",
        pinyin: "hǎochī",
        english: "delicious (food)",
        example: "這家餐廳的菜很好吃。",
        translation: "The food at this restaurant is delicious.",
        clue: "Food compliment"
    },

    {
        id: 167,
        traditional: "難吃",
        pinyin: "nánchī",
        english: "bad-tasting",
        example: "這個菜有點難吃。",
        translation: "This dish tastes a bit bad.",
        clue: "Food complaint"
    },

    {
        id: 168,
        traditional: "好喝",
        pinyin: "hǎohē",
        english: "delicious (drink)",
        example: "這杯奶茶很好喝。",
        translation: "This milk tea is delicious.",
        clue: "Drink compliment"
    },

    {
        id: 169,
        traditional: "難喝",
        pinyin: "nánhē",
        english: "bad-tasting (drink)",
        example: "這杯咖啡有點難喝。",
        translation: "This coffee tastes a bit bad.",
        clue: "Drink complaint"
    },

    {
        id: 170,
        traditional: "餓",
        pinyin: "è",
        english: "hungry",
        example: "我很餓，想吃東西。",
        translation: "I’m very hungry and want to eat something.",
        clue: "Feeling"
    },

    {
        id: 171,
        traditional: "飽",
        pinyin: "bǎo",
        english: "full (after eating)",
        example: "我吃飽了。",
        translation: "I’m full.",
        clue: "Feeling"
    },

    {
        id: 172,
        traditional: "渴",
        pinyin: "kě",
        english: "thirsty",
        example: "我有點渴，想喝水。",
        translation: "I’m a bit thirsty and want to drink water.",
        clue: "Feeling"
    },

    {
        id: 173,
        traditional: "早餐",
        pinyin: "zǎocān",
        english: "breakfast",
        example: "我每天吃早餐。",
        translation: "I eat breakfast every day.",
        clue: "Meal"
    },

    {
        id: 174,
        traditional: "午餐",
        pinyin: "wǔcān",
        english: "lunch",
        example: "我們一起吃午餐。",
        translation: "We eat lunch together.",
        clue: "Meal"
    },

    {
        id: 175,
        traditional: "晚餐",
        pinyin: "wǎncān",
        english: "dinner",
        example: "我晚餐吃麵。",
        translation: "I eat noodles for dinner.",
        clue: "Meal"
    },

    {
        id: 176,
        traditional: "餐點",
        pinyin: "cāndiǎn",
        english: "meal / dish",
        example: "請問你要點什麼餐點？",
        translation: "What meal would you like to order?",
        clue: "Restaurant"
    },

    {
        id: 177,
        traditional: "菜單",
        pinyin: "càidān",
        english: "menu",
        example: "請給我菜單。",
        translation: "Please give me the menu.",
        clue: "Restaurant"
    },

    {
        id: 178,
        traditional: "點餐",
        pinyin: "diǎncān",
        english: "to order food",
        example: "我們先點餐吧。",
        translation: "Let’s order food first.",
        clue: "Restaurant"
    },

    {
        id: 179,
        traditional: "外帶",
        pinyin: "wàidài",
        english: "takeout",
        example: "我要外帶。",
        translation: "I want takeout.",
        clue: "Restaurant"
    },

    {
        id: 180,
        traditional: "內用",
        pinyin: "nèiyòng",
        english: "dine-in",
        example: "請問內用還是外帶？",
        translation: "Dine-in or takeout?",
        clue: "Restaurant"
    },

    {
        id: 181,
        traditional: "服務員",
        pinyin: "fúwùyuán",
        english: "waiter / waitress",
        example: "服務員很熱情。",
        translation: "The waiter is very friendly.",
        clue: "Restaurant staff"
    },

    {
        id: 182,
        traditional: "結帳",
        pinyin: "jiézhàng",
        english: "to pay the bill",
        example: "我們要結帳了。",
        translation: "We want to pay the bill.",
        clue: "Restaurant"
    },

    {
        id: 183,
        traditional: "排隊",
        pinyin: "páiduì",
        english: "to line up",
        example: "這家店要排隊。",
        translation: "You need to line up at this store.",
        clue: "Common Taiwan experience"
    },

    {
        id: 184,
        traditional: "等",
        pinyin: "děng",
        english: "to wait",
        example: "請等一下。",
        translation: "Please wait a moment.",
        clue: "Basic verb"
    },

    {
        id: 185,
        traditional: "快",
        pinyin: "kuài",
        english: "fast",
        example: "他走得很快。",
        translation: "He walks very fast.",
        clue: "Speed"
    },

    {
        id: 186,
        traditional: "慢",
        pinyin: "màn",
        english: "slow",
        example: "請慢一點說。",
        translation: "Please speak a bit slower.",
        clue: "Speed"
    },

    {
        id: 187,
        traditional: "熱鬧",
        pinyin: "rènào",
        english: "lively / bustling",
        example: "夜市很熱鬧。",
        translation: "The night market is lively.",
        clue: "Taiwan culture"
    },

    {
        id: 188,
        traditional: "安靜",
        pinyin: "ānjìng",
        english: "quiet",
        example: "圖書館很安靜。",
        translation: "The library is quiet.",
        clue: "Environment"
    },

    {
        id: 189,
        traditional: "乾淨",
        pinyin: "gānjìng",
        english: "clean",
        example: "房間很乾淨。",
        translation: "The room is clean.",
        clue: "Description"
    },

    {
        id: 190,
        traditional: "髒",
        pinyin: "zāng",
        english: "dirty",
        example: "桌子有點髒。",
        translation: "The table is a bit dirty.",
        clue: "Description"
    },

    {
        id: 191,
        traditional: "方便",
        pinyin: "fāngbiàn",
        english: "convenient",
        example: "住在市中心很方便。",
        translation: "Living in the city center is very convenient.",
        clue: "Description"
    },

    {
        id: 192,
        traditional: "麻煩",
        pinyin: "máfan",
        english: "troublesome",
        example: "這件事有點麻煩。",
        translation: "This matter is a bit troublesome.",
        clue: "Description"
    },

    {
        id: 193,
        traditional: "簡單",
        pinyin: "jiǎndān",
        english: "simple",
        example: "這個問題很簡單。",
        translation: "This question is simple.",
        clue: "Description"
    },

    {
        id: 194,
        traditional: "複雜",
        pinyin: "fùzá",
        english: "complicated",
        example: "這件事很複雜。",
        translation: "This matter is complicated.",
        clue: "Description"
    },

    {
        id: 195,
        traditional: "健康",
        pinyin: "jiànkāng",
        english: "healthy",
        example: "多運動對健康很好。",
        translation: "Exercising more is good for your health.",
        clue: "Health"
    },

    {
        id: 196,
        traditional: "生病",
        pinyin: "shēngbìng",
        english: "to get sick",
        example: "他生病了，不能上班。",
        translation: "He is sick and cannot go to work.",
        clue: "Health"
    },

    {
        id: 197,
        traditional: "發燒",
        pinyin: "fāshāo",
        english: "to have a fever",
        example: "我有點發燒。",
        translation: "I have a slight fever.",
        clue: "Health"
    },

    {
        id: 198,
        traditional: "咳嗽",
        pinyin: "késòu",
        english: "to cough",
        example: "他咳嗽得很厲害。",
        translation: "He is coughing badly.",
        clue: "Health"
    },

    {
        id: 199,
        traditional: "感冒",
        pinyin: "gǎnmào",
        english: "cold (illness)",
        example: "我感冒了。",
        translation: "I caught a cold.",
        clue: "Health"
    },

    {
        id: 200,
        traditional: "頭痛",
        pinyin: "tóutòng",
        english: "headache",
        example: "我頭痛，想休息。",
        translation: "I have a headache and want to rest.",
        clue: "Health"
    },
    {
        id: 201,
        traditional: "肚子痛",
        pinyin: "dùzi tòng",
        english: "stomachache",
        example: "我肚子痛，不想吃東西。",
        translation: "I have a stomachache and don’t want to eat.",
        clue: "Health"
    },

    {
        id: 202,
        traditional: "牙痛",
        pinyin: "yátòng",
        english: "toothache",
        example: "他牙痛，要去看牙醫。",
        translation: "He has a toothache and needs to see a dentist.",
        clue: "Health"
    },

    {
        id: 203,
        traditional: "生病請假",
        pinyin: "shēngbìng qǐngjià",
        english: "sick leave",
        example: "我生病請假一天。",
        translation: "I took one day of sick leave.",
        clue: "Work/Health"
    },

    {
        id: 204,
        traditional: "藥",
        pinyin: "yào",
        english: "medicine",
        example: "醫生給我藥。",
        translation: "The doctor gave me medicine.",
        clue: "Health"
    },

    {
        id: 205,
        traditional: "量體溫",
        pinyin: "liáng tǐwēn",
        english: "to take temperature",
        example: "護士幫我量體溫。",
        translation: "The nurse helped me take my temperature.",
        clue: "Health"
    },

    {
        id: 206,
        traditional: "身體",
        pinyin: "shēntǐ",
        english: "body",
        example: "身體不舒服要休息。",
        translation: "If your body feels unwell, you should rest.",
        clue: "Health"
    },

    {
        id: 207,
        traditional: "頭",
        pinyin: "tóu",
        english: "head",
        example: "我的頭有點痛。",
        translation: "My head hurts a little.",
        clue: "Body part"
    },

    {
        id: 208,
        traditional: "眼睛",
        pinyin: "yǎnjīng",
        english: "eyes",
        example: "我的眼睛很累。",
        translation: "My eyes are tired.",
        clue: "Body part"
    },

    {
        id: 209,
        traditional: "耳朵",
        pinyin: "ěrduo",
        english: "ears",
        example: "我的耳朵不舒服。",
        translation: "My ears feel uncomfortable.",
        clue: "Body part"
    },

    {
        id: 210,
        traditional: "鼻子",
        pinyin: "bízi",
        english: "nose",
        example: "我鼻子過敏。",
        translation: "My nose is allergic.",
        clue: "Body part"
    },

    {
        id: 211,
        traditional: "嘴巴",
        pinyin: "zuǐbā",
        english: "mouth",
        example: "嘴巴痛，吃東西很難。",
        translation: "My mouth hurts, eating is difficult.",
        clue: "Body part"
    },

    {
        id: 212,
        traditional: "手",
        pinyin: "shǒu",
        english: "hand",
        example: "我的手受傷了。",
        translation: "My hand is injured.",
        clue: "Body part"
    },

    {
        id: 213,
        traditional: "腳",
        pinyin: "jiǎo",
        english: "foot",
        example: "他腳痛，不能走路。",
        translation: "His foot hurts, he can’t walk.",
        clue: "Body part"
    },

    {
        id: 214,
        traditional: "背",
        pinyin: "bèi",
        english: "back",
        example: "我背很酸。",
        translation: "My back is sore.",
        clue: "Body part"
    },

    {
        id: 215,
        traditional: "肚子",
        pinyin: "dùzi",
        english: "stomach",
        example: "肚子餓了嗎？",
        translation: "Are you hungry?",
        clue: "Body part"
    },

    {
        id: 216,
        traditional: "健康檢查",
        pinyin: "jiànkāng jiǎnchá",
        english: "health check",
        example: "我每年做健康檢查。",
        translation: "I do a health check every year.",
        clue: "Health"
    },

    {
        id: 217,
        traditional: "運動",
        pinyin: "yùndòng",
        english: "exercise / sports",
        example: "我每天運動三十分鐘。",
        translation: "I exercise for 30 minutes every day.",
        clue: "Health"
    },

    {
        id: 218,
        traditional: "跑步",
        pinyin: "pǎobù",
        english: "to run",
        example: "我在公園跑步。",
        translation: "I run in the park.",
        clue: "Exercise"
    },

    {
        id: 219,
        traditional: "游泳",
        pinyin: "yóuyǒng",
        english: "to swim",
        example: "我喜歡游泳。",
        translation: "I like swimming.",
        clue: "Exercise"
    },

    {
        id: 220,
        traditional: "打球",
        pinyin: "dǎqiú",
        english: "to play ball",
        example: "他週末打球。",
        translation: "He plays ball on weekends.",
        clue: "Exercise"
    },

    {
        id: 221,
        traditional: "散步",
        pinyin: "sànbù",
        english: "to take a walk",
        example: "我們在河邊散步。",
        translation: "We are taking a walk by the river.",
        clue: "Exercise"
    },

    {
        id: 222,
        traditional: "健身房",
        pinyin: "jiànshēnfáng",
        english: "gym",
        example: "我在健身房運動。",
        translation: "I exercise at the gym.",
        clue: "Place"
    },

    {
        id: 223,
        traditional: "舒服",
        pinyin: "shūfu",
        english: "comfortable",
        example: "這張椅子很舒服。",
        translation: "This chair is very comfortable.",
        clue: "Feeling"
    },

    {
        id: 224,
        traditional: "不舒服",
        pinyin: "bù shūfu",
        english: "uncomfortable / unwell",
        example: "我今天有點不舒服。",
        translation: "I feel a bit unwell today.",
        clue: "Feeling"
    },

    {
        id: 225,
        traditional: "開心",
        pinyin: "kāixīn",
        english: "happy",
        example: "我今天很開心。",
        translation: "I’m very happy today.",
        clue: "Emotion"
    },

    {
        id: 226,
        traditional: "難過",
        pinyin: "nánguò",
        english: "sad",
        example: "他看起來很難過。",
        translation: "He looks very sad.",
        clue: "Emotion"
    },

    {
        id: 227,
        traditional: "生氣",
        pinyin: "shēngqì",
        english: "angry",
        example: "他生氣了，不想說話。",
        translation: "He is angry and doesn’t want to talk.",
        clue: "Emotion"
    },

    {
        id: 228,
        traditional: "緊張",
        pinyin: "jǐnzhāng",
        english: "nervous",
        example: "考試前我很緊張。",
        translation: "I am nervous before exams.",
        clue: "Emotion"
    },

    {
        id: 229,
        traditional: "害怕",
        pinyin: "hàipà",
        english: "afraid",
        example: "他害怕看牙醫。",
        translation: "He is afraid of seeing the dentist.",
        clue: "Emotion"
    },

    {
        id: 230,
        traditional: "累",
        pinyin: "lèi",
        english: "tired",
        example: "我今天很累。",
        translation: "I’m very tired today.",
        clue: "Feeling"
    },

    {
        id: 231,
        traditional: "興奮",
        pinyin: "xīngfèn",
        english: "excited",
        example: "他對新工作很興奮。",
        translation: "He is excited about his new job.",
        clue: "Emotion"
    },

    {
        id: 232,
        traditional: "擔心",
        pinyin: "dānxīn",
        english: "worried",
        example: "媽媽很擔心你。",
        translation: "Mom is very worried about you.",
        clue: "Emotion"
    },

    {
        id: 233,
        traditional: "放鬆",
        pinyin: "fàngsōng",
        english: "to relax",
        example: "週末我想放鬆一下。",
        translation: "I want to relax a bit this weekend.",
        clue: "Emotion"
    },

    {
        id: 234,
        traditional: "忙",
        pinyin: "máng",
        english: "busy",
        example: "我最近很忙。",
        translation: "I’ve been very busy recently.",
        clue: "Description"
    },

    {
        id: 235,
        traditional: "累死了",
        pinyin: "lèi sǐ le",
        english: "exhausted",
        example: "我今天累死了。",
        translation: "I’m exhausted today.",
        clue: "Feeling"
    },

    {
        id: 236,
        traditional: "有趣",
        pinyin: "yǒuqù",
        english: "interesting",
        example: "這本書很有趣。",
        translation: "This book is very interesting.",
        clue: "Description"
    },

    {
        id: 237,
        traditional: "無聊",
        pinyin: "wúliáo",
        english: "boring",
        example: "這堂課有點無聊。",
        translation: "This class is a bit boring.",
        clue: "Description"
    },

    {
        id: 238,
        traditional: "重要",
        pinyin: "zhòngyào",
        english: "important",
        example: "這件事很重要。",
        translation: "This matter is important.",
        clue: "Description"
    },

    {
        id: 239,
        traditional: "需要",
        pinyin: "xūyào",
        english: "to need",
        example: "我需要你的幫忙。",
        translation: "I need your help.",
        clue: "Basic verb"
    },

    {
        id: 240,
        traditional: "覺得",
        pinyin: "juéde",
        english: "to feel / to think",
        example: "我覺得這部電影很好看。",
        translation: "I think this movie is very good.",
        clue: "Opinion"
    },
    {
        id: 241,
        traditional: "退貨",
        pinyin: "tuìhuò",
        english: "to return an item",
        example: "這件衣服太小了，我要退貨。",
        translation: "This piece of clothing is too small, I want to return it.",
        clue: "Shopping"
    },

    {
        id: 242,
        traditional: "希望",
        pinyin: "xīwàng",
        english: "to hope",
        example: "我希望明天不要下雨。",
        translation: "I hope it doesn’t rain tomorrow.",
        clue: "Emotion"
    },

    {
        id: 243,
        traditional: "相信",
        pinyin: "xiāngxìn",
        english: "to believe",
        example: "我相信你可以做到。",
        translation: "I believe you can do it.",
        clue: "Opinion"
    },

    {
        id: 244,
        traditional: "記得",
        pinyin: "jìde",
        english: "to remember",
        example: "請記得帶傘。",
        translation: "Please remember to bring an umbrella.",
        clue: "Memory"
    },

    {
        id: 245,
        traditional: "忘記",
        pinyin: "wàngjì",
        english: "to forget",
        example: "我忘記帶手機。",
        translation: "I forgot to bring my phone.",
        clue: "Memory"
    },

    {
        id: 246,
        traditional: "了解",
        pinyin: "liǎojiě",
        english: "to understand",
        example: "我了解你的意思。",
        translation: "I understand what you mean.",
        clue: "Understanding"
    },

    {
        id: 247,
        traditional: "明白",
        pinyin: "míngbái",
        english: "to understand / to realize",
        example: "我明白了。",
        translation: "I understand now.",
        clue: "Understanding"
    },

    {
        id: 248,
        traditional: "幫忙",
        pinyin: "bāngmáng",
        english: "to help",
        example: "你可以幫忙我嗎？",
        translation: "Can you help me?",
        clue: "Assistance"
    },

    {
        id: 249,
        traditional: "試試看",
        pinyin: "shìshì kàn",
        english: "to try",
        example: "你可以試試看。",
        translation: "You can give it a try.",
        clue: "Attempt"
    },

    {
        id: 250,
        traditional: "決定",
        pinyin: "juédìng",
        english: "to decide",
        example: "我還沒決定要不要去。",
        translation: "I haven’t decided whether to go.",
        clue: "Decision"
    },

    {
        id: 251,
        traditional: "準備",
        pinyin: "zhǔnbèi",
        english: "to prepare",
        example: "我在準備晚餐。",
        translation: "I am preparing dinner.",
        clue: "Action"
    },

    {
        id: 252,
        traditional: "開始",
        pinyin: "kāishǐ",
        english: "to start",
        example: "我們開始上課吧。",
        translation: "Let’s start the class.",
        clue: "Action"
    },

    {
        id: 253,
        traditional: "結束",
        pinyin: "jiéshù",
        english: "to finish / to end",
        example: "會議結束了。",
        translation: "The meeting has ended.",
        clue: "Action"
    },

    {
        id: 254,
        traditional: "習慣",
        pinyin: "xíguàn",
        english: "to be used to / habit",
        example: "我習慣早起。",
        translation: "I am used to waking up early.",
        clue: "Routine"
    },

    {
        id: 255,
        traditional: "努力",
        pinyin: "nǔlì",
        english: "to work hard",
        example: "他很努力學中文。",
        translation: "He works hard learning Chinese.",
        clue: "Study"
    },

    {
        id: 256,
        traditional: "練習",
        pinyin: "liànxí",
        english: "to practice",
        example: "我每天練習說中文。",
        translation: "I practice speaking Chinese every day.",
        clue: "Study"
    },

    {
        id: 257,
        traditional: "回答",
        pinyin: "huídá",
        english: "to answer",
        example: "請回答我的問題。",
        translation: "Please answer my question.",
        clue: "Communication"
    },

    {
        id: 258,
        traditional: "問",
        pinyin: "wèn",
        english: "to ask",
        example: "我可以問你一個問題嗎？",
        translation: "Can I ask you a question?",
        clue: "Communication"
    },

    {
        id: 259,
        traditional: "聊天",
        pinyin: "liáotiān",
        english: "to chat",
        example: "我們常常聊天。",
        translation: "We often chat.",
        clue: "Social"
    },

    {
        id: 260,
        traditional: "打電話",
        pinyin: "dǎ diànhuà",
        english: "to make a phone call",
        example: "我打電話給你。",
        translation: "I’ll call you.",
        clue: "Communication"
    },

    {
        id: 261,
        traditional: "發訊息",
        pinyin: "fā xùnxí",
        english: "to send a message",
        example: "我發訊息給你。",
        translation: "I sent you a message.",
        clue: "Communication"
    },

    {
        id: 262,
        traditional: "通知",
        pinyin: "tōngzhī",
        english: "to notify",
        example: "老師通知我們明天不上課。",
        translation: "The teacher notified us that there is no class tomorrow.",
        clue: "Communication"
    },

    {
        id: 263,
        traditional: "參加",
        pinyin: "cānjiā",
        english: "to participate",
        example: "我參加中文課。",
        translation: "I attend Chinese class.",
        clue: "Activity"
    },

    {
        id: 264,
        traditional: "安排",
        pinyin: "ānpái",
        english: "to arrange",
        example: "我安排明天的行程。",
        translation: "I arranged tomorrow’s schedule.",
        clue: "Planning"
    },

    {
        id: 265,
        traditional: "改變",
        pinyin: "gǎibiàn",
        english: "to change",
        example: "我想改變生活習慣。",
        translation: "I want to change my lifestyle habits.",
        clue: "Action"
    },

    {
        id: 266,
        traditional: "選擇",
        pinyin: "xuǎnzé",
        english: "to choose",
        example: "你可以選擇你喜歡的。",
        translation: "You can choose the one you like.",
        clue: "Decision"
    },

    {
        id: 267,
        traditional: "同意",
        pinyin: "tóngyì",
        english: "to agree",
        example: "我同意你的想法。",
        translation: "I agree with your idea.",
        clue: "Opinion"
    },

    {
        id: 268,
        traditional: "不同意",
        pinyin: "bù tóngyì",
        english: "to disagree",
        example: "我不同意這個計畫。",
        translation: "I disagree with this plan.",
        clue: "Opinion"
    },

    {
        id: 269,
        traditional: "匯率",
        pinyin: "huìlǜ",
        english: "exchange rate",
        example: "今天的匯率不太好。",
        translation: "Today's exchange rate isn't very good.",
        clue: "Finance"
    },

    {
        id: 270,
        traditional: "必須",
        pinyin: "bìxū",
        english: "must",
        example: "你必須準時到。",
        translation: "You must arrive on time.",
        clue: "Requirement"
    },

    {
        id: 271,
        traditional: "應該",
        pinyin: "yīnggāi",
        english: "should",
        example: "你應該多喝水。",
        translation: "You should drink more water.",
        clue: "Advice"
    },

    {
        id: 272,
        traditional: "可能",
        pinyin: "kěnéng",
        english: "maybe / possible",
        example: "他可能不來。",
        translation: "He might not come.",
        clue: "Possibility"
    },

    {
        id: 273,
        traditional: "一定",
        pinyin: "yídìng",
        english: "definitely",
        example: "你一定可以做到。",
        translation: "You can definitely do it.",
        clue: "Certainty"
    },

    {
        id: 274,
        traditional: "比較",
        pinyin: "bǐjiào",
        english: "comparatively / relatively",
        example: "今天比較冷。",
        translation: "Today is relatively cold.",
        clue: "Comparison"
    },

    {
        id: 275,
        traditional: "更",
        pinyin: "gèng",
        english: "even more",
        example: "他更喜歡喝茶。",
        translation: "He likes drinking tea even more.",
        clue: "Comparison"
    },

    {
        id: 276,
        traditional: "最",
        pinyin: "zuì",
        english: "most",
        example: "我最喜歡夏天。",
        translation: "I like summer the most.",
        clue: "Superlative"
    },

    {
        id: 277,
        traditional: "一起",
        pinyin: "yìqǐ",
        english: "together",
        example: "我們一起去吃飯。",
        translation: "We are going to eat together.",
        clue: "Social"
    },

    {
        id: 278,
        traditional: "自己",
        pinyin: "zìjǐ",
        english: "oneself",
        example: "我自己可以做。",
        translation: "I can do it myself.",
        clue: "Pronoun"
    },

    {
        id: 279,
        traditional: "別人",
        pinyin: "biérén",
        english: "other people",
        example: "不要影響別人。",
        translation: "Don’t disturb other people.",
        clue: "Pronoun"
    },

    {
        id: 280,
        traditional: "大家",
        pinyin: "dàjiā",
        english: "everyone",
        example: "大家都在等你。",
        translation: "Everyone is waiting for you.",
        clue: "Pronoun"
    },
    {
        id: 281,
        traditional: "時間",
        pinyin: "shíjiān",
        english: "time",
        example: "你有時間嗎？",
        translation: "Do you have time?",
        clue: "General noun"
    },

    {
        id: 282,
        traditional: "現在",
        pinyin: "xiànzài",
        english: "now",
        example: "我現在在上課。",
        translation: "I am in class right now.",
        clue: "Time"
    },

    {
        id: 283,
        traditional: "等一下",
        pinyin: "děng yíxià",
        english: "wait a moment / later",
        example: "等一下再說。",
        translation: "Let’s talk later.",
        clue: "Time"
    },

    {
        id: 284,
        traditional: "早上",
        pinyin: "zǎoshang",
        english: "morning",
        example: "我早上七點起床。",
        translation: "I get up at 7 in the morning.",
        clue: "Time of day"
    },

    {
        id: 285,
        traditional: "中午",
        pinyin: "zhōngwǔ",
        english: "noon",
        example: "我們中午吃飯。",
        translation: "We eat lunch at noon.",
        clue: "Time of day"
    },

    {
        id: 286,
        traditional: "下午",
        pinyin: "xiàwǔ",
        english: "afternoon",
        example: "我下午要開會。",
        translation: "I have a meeting in the afternoon.",
        clue: "Time of day"
    },

    {
        id: 287,
        traditional: "晚上",
        pinyin: "wǎnshang",
        english: "evening",
        example: "我晚上運動。",
        translation: "I exercise in the evening.",
        clue: "Time of day"
    },

    {
        id: 288,
        traditional: "半夜",
        pinyin: "bànyè",
        english: "midnight",
        example: "他半夜還在工作。",
        translation: "He is still working at midnight.",
        clue: "Time of day"
    },

    {
        id: 289,
        traditional: "今天",
        pinyin: "jīntiān",
        english: "today",
        example: "我今天很忙。",
        translation: "I’m very busy today.",
        clue: "Date"
    },

    {
        id: 290,
        traditional: "明天",
        pinyin: "míngtiān",
        english: "tomorrow",
        example: "我們明天見。",
        translation: "We’ll meet tomorrow.",
        clue: "Date"
    },

    {
        id: 291,
        traditional: "昨天",
        pinyin: "zuótiān",
        english: "yesterday",
        example: "我昨天去台北。",
        translation: "I went to Taipei yesterday.",
        clue: "Date"
    },

    {
        id: 292,
        traditional: "後天",
        pinyin: "hòutiān",
        english: "the day after tomorrow",
        example: "後天我有考試。",
        translation: "I have an exam the day after tomorrow.",
        clue: "Date"
    },

    {
        id: 293,
        traditional: "前天",
        pinyin: "qiántiān",
        english: "the day before yesterday",
        example: "我前天生病了。",
        translation: "I was sick the day before yesterday.",
        clue: "Date"
    },

    {
        id: 294,
        traditional: "週末",
        pinyin: "zhōumò",
        english: "weekend",
        example: "我週末要去旅行。",
        translation: "I’m going traveling this weekend.",
        clue: "Time"
    },

    {
        id: 295,
        traditional: "星期",
        pinyin: "xīngqí",
        english: "week",
        example: "我每星期上三次課。",
        translation: "I attend class three times a week.",
        clue: "Time"
    },

    {
        id: 296,
        traditional: "月份",
        pinyin: "yuèfèn",
        english: "month",
        example: "這個月份很忙。",
        translation: "This month is very busy.",
        clue: "Time"
    },

    {
        id: 297,
        traditional: "年",
        pinyin: "nián",
        english: "year",
        example: "今年我想學更多中文。",
        translation: "This year I want to learn more Chinese.",
        clue: "Time"
    },

    {
        id: 298,
        traditional: "生日",
        pinyin: "shēngrì",
        english: "birthday",
        example: "今天是我的生日。",
        translation: "Today is my birthday.",
        clue: "Event"
    },

    {
        id: 299,
        traditional: "假期",
        pinyin: "jiàqī",
        english: "holiday / vacation",
        example: "我假期要去日本。",
        translation: "I’m going to Japan during the holiday.",
        clue: "Event"
    },

    {
        id: 300,
        traditional: "常常",
        pinyin: "chángcháng",
        english: "often",
        example: "我常常去那家咖啡店。",
        translation: "I often go to that coffee shop.",
        clue: "Frequency"
    },

    {
        id: 301,
        traditional: "有時候",
        pinyin: "yǒu shíhou",
        english: "sometimes",
        example: "我有時候會忘記帶鑰匙。",
        translation: "Sometimes I forget to bring my keys.",
        clue: "Frequency"
    },

    {
        id: 302,
        traditional: "不常",
        pinyin: "bù cháng",
        english: "not often",
        example: "我不常看電影。",
        translation: "I don’t often watch movies.",
        clue: "Frequency"
    },

    {
        id: 303,
        traditional: "從來不",
        pinyin: "cónglái bù",
        english: "never",
        example: "他從來不喝酒。",
        translation: "He never drinks alcohol.",
        clue: "Frequency"
    },

    {
        id: 304,
        traditional: "已經",
        pinyin: "yǐjīng",
        english: "already",
        example: "我已經吃過了。",
        translation: "I already ate.",
        clue: "Grammar"
    },

    {
        id: 305,
        traditional: "還沒",
        pinyin: "háiméi",
        english: "not yet",
        example: "我還沒準備好。",
        translation: "I’m not ready yet.",
        clue: "Grammar"
    },

    {
        id: 306,
        traditional: "正在",
        pinyin: "zhèngzài",
        english: "in the middle of (doing)",
        example: "我正在看書。",
        translation: "I’m reading a book.",
        clue: "Grammar"
    },

    {
        id: 307,
        traditional: "剛剛",
        pinyin: "gānggāng",
        english: "just now",
        example: "他剛剛離開。",
        translation: "He just left.",
        clue: "Time"
    },

    {
        id: 308,
        traditional: "馬上",
        pinyin: "mǎshàng",
        english: "immediately",
        example: "我馬上回來。",
        translation: "I’ll be back immediately.",
        clue: "Time"
    },

    {
        id: 309,
        traditional: "久",
        pinyin: "jiǔ",
        english: "long (time)",
        example: "我等了很久。",
        translation: "I waited for a long time.",
        clue: "Time"
    },

    {
        id: 310,
        traditional: "快要",
        pinyin: "kuàiyào",
        english: "about to",
        example: "雨快要下了。",
        translation: "It’s about to rain.",
        clue: "Time"
    },

    {
        id: 311,
        traditional: "剛",
        pinyin: "gāng",
        english: "just",
        example: "我剛到家。",
        translation: "I just got home.",
        clue: "Time"
    },

    {
        id: 312,
        traditional: "以前",
        pinyin: "yǐqián",
        english: "before / previously",
        example: "我以前住在台中。",
        translation: "I used to live in Taichung.",
        clue: "Time"
    },

    {
        id: 313,
        traditional: "以後",
        pinyin: "yǐhòu",
        english: "after / later",
        example: "以後我想學日文。",
        translation: "Later I want to learn Japanese.",
        clue: "Time"
    },

    {
        id: 314,
        traditional: "最近",
        pinyin: "zuìjìn",
        english: "recently",
        example: "我最近很忙。",
        translation: "I’ve been very busy recently.",
        clue: "Time"
    },

    {
        id: 315,
        traditional: "將來",
        pinyin: "jiānglái",
        english: "in the future",
        example: "我將來想住在台灣。",
        translation: "I want to live in Taiwan in the future.",
        clue: "Time"
    },
    {
        id: 316,
        traditional: "地點",
        pinyin: "dìdiǎn",
        english: "location",
        example: "請告訴我集合的地點。",
        translation: "Please tell me the meeting location.",
        clue: "General noun"
    },

    {
        id: 317,
        traditional: "地址",
        pinyin: "dìzhǐ",
        english: "address",
        example: "請把你的地址寫下來。",
        translation: "Please write down your address.",
        clue: "Location"
    },

    {
        id: 318,
        traditional: "地區",
        pinyin: "dìqū",
        english: "area / region",
        example: "這個地區很安靜。",
        translation: "This area is very quiet.",
        clue: "Location"
    },

    {
        id: 319,
        traditional: "城市",
        pinyin: "chéngshì",
        english: "city",
        example: "台北是一個很方便的城市。",
        translation: "Taipei is a very convenient city.",
        clue: "Place"
    },

    {
        id: 320,
        traditional: "鄉下",
        pinyin: "xiāngxià",
        english: "countryside",
        example: "我喜歡鄉下的風景。",
        translation: "I like the scenery in the countryside.",
        clue: "Place"
    },

    {
        id: 321,
        traditional: "風景",
        pinyin: "fēngjǐng",
        english: "scenery",
        example: "這裡的風景很漂亮。",
        translation: "The scenery here is beautiful.",
        clue: "Nature"
    },

    {
        id: 322,
        traditional: "空氣",
        pinyin: "kōngqì",
        english: "air",
        example: "山上的空氣很好。",
        translation: "The air in the mountains is very good.",
        clue: "Environment"
    },

    {
        id: 323,
        traditional: "天氣",
        pinyin: "tiānqì",
        english: "weather",
        example: "今天的天氣很好。",
        translation: "The weather is nice today.",
        clue: "Weather"
    },

    {
        id: 324,
        traditional: "溫度",
        pinyin: "wēndù",
        english: "temperature",
        example: "今天的溫度很高。",
        translation: "The temperature is high today.",
        clue: "Weather"
    },

    {
        id: 325,
        traditional: "下雪",
        pinyin: "xiàxuě",
        english: "to snow",
        example: "山上在下雪。",
        translation: "It’s snowing in the mountains.",
        clue: "Weather"
    },

    {
        id: 326,
        traditional: "刮風",
        pinyin: "guāfēng",
        english: "to be windy",
        example: "今天刮風，小心一點。",
        translation: "It’s windy today, be careful.",
        clue: "Weather"
    },

    {
        id: 327,
        traditional: "下雨天",
        pinyin: "xiàyǔ tiān",
        english: "rainy day",
        example: "下雨天要帶傘。",
        translation: "Bring an umbrella on rainy days.",
        clue: "Weather"
    },

    {
        id: 328,
        traditional: "密碼",
        pinyin: "mìmǎ",
        english: "password",
        example: "我忘記手機密碼了。",
        translation: "I forgot my phone password.",
        clue: "Technology"
    },

    {
        id: 329,
        traditional: "雲",
        pinyin: "yún",
        english: "cloud",
        example: "天空有很多雲。",
        translation: "There are many clouds in the sky.",
        clue: "Nature"
    },

    {
        id: 330,
        traditional: "天空",
        pinyin: "tiānkōng",
        english: "sky",
        example: "天空很藍。",
        translation: "The sky is very blue.",
        clue: "Nature"
    },

    {
        id: 331,
        traditional: "太陽",
        pinyin: "tàiyáng",
        english: "sun",
        example: "今天太陽很大。",
        translation: "The sun is strong today.",
        clue: "Nature"
    },

    {
        id: 332,
        traditional: "月亮",
        pinyin: "yuèliàng",
        english: "moon",
        example: "月亮很亮。",
        translation: "The moon is bright.",
        clue: "Nature"
    },

    {
        id: 333,
        traditional: "星星",
        pinyin: "xīngxing",
        english: "stars",
        example: "晚上可以看到很多星星。",
        translation: "You can see many stars at night.",
        clue: "Nature"
    },

    {
        id: 334,
        traditional: "海",
        pinyin: "hǎi",
        english: "sea",
        example: "我喜歡去海邊散步。",
        translation: "I like walking by the sea.",
        clue: "Nature"
    },

    {
        id: 335,
        traditional: "河",
        pinyin: "hé",
        english: "river",
        example: "河邊很安靜。",
        translation: "The riverside is quiet.",
        clue: "Nature"
    },

    {
        id: 336,
        traditional: "山",
        pinyin: "shān",
        english: "mountain",
        example: "台灣有很多山。",
        translation: "Taiwan has many mountains.",
        clue: "Nature"
    },

    {
        id: 337,
        traditional: "森林",
        pinyin: "sēnlín",
        english: "forest",
        example: "森林裡很涼快。",
        translation: "It’s cool inside the forest.",
        clue: "Nature"
    },

    {
        id: 338,
        traditional: "動物",
        pinyin: "dòngwù",
        english: "animal",
        example: "我喜歡看動物。",
        translation: "I like watching animals.",
        clue: "Nature"
    },

    {
        id: 339,
        traditional: "植物",
        pinyin: "zhíwù",
        english: "plant",
        example: "植物需要陽光。",
        translation: "Plants need sunlight.",
        clue: "Nature"
    },

    {
        id: 340,
        traditional: "旅行",
        pinyin: "lǚxíng",
        english: "to travel",
        example: "我喜歡旅行。",
        translation: "I like traveling.",
        clue: "Travel"
    },

    {
        id: 341,
        traditional: "旅館",
        pinyin: "lǚguǎn",
        english: "hotel / inn",
        example: "我們住在旅館。",
        translation: "We are staying at a hotel.",
        clue: "Travel"
    },

    {
        id: 342,
        traditional: "行李",
        pinyin: "xínglǐ",
        english: "luggage",
        example: "我的行李很重。",
        translation: "My luggage is heavy.",
        clue: "Travel"
    },

    {
        id: 343,
        traditional: "護照",
        pinyin: "hùzhào",
        english: "passport",
        example: "出國要帶護照。",
        translation: "You need to bring your passport when traveling abroad.",
        clue: "Travel"
    },

    {
        id: 344,
        traditional: "機票",
        pinyin: "jīpiào",
        english: "plane ticket",
        example: "我買了機票。",
        translation: "I bought a plane ticket.",
        clue: "Travel"
    },

    {
        id: 345,
        traditional: "機場",
        pinyin: "jīchǎng",
        english: "airport",
        example: "我們在機場等朋友。",
        translation: "We are waiting for our friend at the airport.",
        clue: "Travel"
    },

    {
        id: 346,
        traditional: "出發",
        pinyin: "chūfā",
        english: "to depart",
        example: "我們早上出發。",
        translation: "We depart in the morning.",
        clue: "Travel"
    },

    {
        id: 347,
        traditional: "到達",
        pinyin: "dàodá",
        english: "to arrive",
        example: "我們下午到達台北。",
        translation: "We arrive in Taipei in the afternoon.",
        clue: "Travel"
    },

    {
        id: 348,
        traditional: "地鐵",
        pinyin: "dìtiě",
        english: "subway (general)",
        example: "很多城市都有地鐵。",
        translation: "Many cities have subways.",
        clue: "Transport"
    },

    {
        id: 349,
        traditional: "火車",
        pinyin: "huǒchē",
        english: "train",
        example: "我坐火車去高雄。",
        translation: "I take the train to Kaohsiung.",
        clue: "Transport"
    },

    {
        id: 350,
        traditional: "高鐵",
        pinyin: "gāotiě",
        english: "high‑speed rail",
        example: "高鐵很快也很方便。",
        translation: "The high‑speed rail is fast and convenient.",
        clue: "Transport"
    },
    {
        id: 351,
        traditional: "轉車",
        pinyin: "zhuǎnchē",
        english: "to transfer (transport)",
        example: "到台北車站要轉車。",
        translation: "You need to transfer at Taipei Main Station.",
        clue: "Transport"
    },

    {
        id: 352,
        traditional: "月台",
        pinyin: "yuètái",
        english: "platform",
        example: "請到三號月台等車。",
        translation: "Please wait at platform number three.",
        clue: "Transport"
    },

    {
        id: 353,
        traditional: "路線",
        pinyin: "lùxiàn",
        english: "route",
        example: "這條路線比較快。",
        translation: "This route is faster.",
        clue: "Transport"
    },

    {
        id: 354,
        traditional: "交通",
        pinyin: "jiāotōng",
        english: "traffic / transportation",
        example: "這裡的交通很方便。",
        translation: "Transportation here is very convenient.",
        clue: "Transport"
    },

    {
        id: 355,
        traditional: "塞車",
        pinyin: "sāichē",
        english: "traffic jam",
        example: "下班時間常常塞車。",
        translation: "There are often traffic jams during rush hour.",
        clue: "Transport"
    },

    {
        id: 356,
        traditional: "插座",
        pinyin: "chāzuò",
        english: "electrical outlet",
        example: "這個房間沒有插座。",
        translation: "This room doesn't have an outlet.",
        clue: "Object"
    },

    {
        id: 357,
        traditional: "導航",
        pinyin: "dǎoháng",
        english: "GPS / navigation",
        example: "我用手機導航。",
        translation: "I use my phone’s GPS.",
        clue: "Navigation"
    },

    {
        id: 358,
        traditional: "充電器",
        pinyin: "chōngdiànqì",
        english: "charger",
        example: "我忘記帶手機充電器了。",
        translation: "I forgot to bring my phone charger.",
        clue: "Technology"
    },

    {
        id: 359,
        traditional: "直走",
        pinyin: "zhí zǒu",
        english: "go straight",
        example: "直走就到了。",
        translation: "Go straight and you’ll arrive.",
        clue: "Direction"
    },

    {
        id: 360,
        traditional: "左轉",
        pinyin: "zuǒ zhuǎn",
        english: "turn left",
        example: "前面左轉。",
        translation: "Turn left ahead.",
        clue: "Direction"
    },

    {
        id: 361,
        traditional: "右轉",
        pinyin: "yòu zhuǎn",
        english: "turn right",
        example: "看到便利商店右轉。",
        translation: "Turn right when you see the convenience store.",
        clue: "Direction"
    },

    {
        id: 362,
        traditional: "過馬路",
        pinyin: "guò mǎlù",
        english: "to cross the street",
        example: "請小心過馬路。",
        translation: "Be careful crossing the street.",
        clue: "Direction"
    },

    {
        id: 363,
        traditional: "紅綠燈",
        pinyin: "hónglǜdēng",
        english: "traffic light",
        example: "紅綠燈壞了。",
        translation: "The traffic light is broken.",
        clue: "Transport"
    },

    {
        id: 364,
        traditional: "路口",
        pinyin: "lùkǒu",
        english: "intersection",
        example: "在下一個路口右轉。",
        translation: "Turn right at the next intersection.",
        clue: "Direction"
    },

    {
        id: 365,
        traditional: "巷子",
        pinyin: "xiàngzi",
        english: "alley",
        example: "我家在巷子裡。",
        translation: "My house is in an alley.",
        clue: "Location"
    },

    {
        id: 366,
        traditional: "馬路",
        pinyin: "mǎlù",
        english: "road",
        example: "這條馬路很寬。",
        translation: "This road is very wide.",
        clue: "Location"
    },

    {
        id: 367,
        traditional: "街",
        pinyin: "jiē",
        english: "street",
        example: "這條街很熱鬧。",
        translation: "This street is lively.",
        clue: "Location"
    },

    {
        id: 368,
        traditional: "夜市",
        pinyin: "yèshì",
        english: "night market",
        example: "夜市有很多好吃的。",
        translation: "The night market has lots of delicious food.",
        clue: "Taiwan culture"
    },

    {
        id: 369,
        traditional: "百貨公司",
        pinyin: "bǎihuò gōngsī",
        english: "department store",
        example: "我們去百貨公司逛街。",
        translation: "We are going shopping at the department store.",
        clue: "Shopping"
    },

    {
        id: 370,
        traditional: "商店",
        pinyin: "shāngdiàn",
        english: "shop",
        example: "這家商店很便宜。",
        translation: "This shop is cheap.",
        clue: "Shopping"
    },

    {
        id: 371,
        traditional: "店員",
        pinyin: "diànyuán",
        english: "store clerk",
        example: "店員很熱心。",
        translation: "The store clerk is very helpful.",
        clue: "Shopping"
    },

    {
        id: 372,
        traditional: "商品",
        pinyin: "shāngpǐn",
        english: "product",
        example: "這個商品很受歡迎。",
        translation: "This product is very popular.",
        clue: "Shopping"
    },

    {
        id: 373,
        traditional: "試穿",
        pinyin: "shìchuān",
        english: "to try on (clothes)",
        example: "你可以試穿看看。",
        translation: "You can try it on.",
        clue: "Shopping"
    },

    {
        id: 374,
        traditional: "尺寸",
        pinyin: "chǐcùn",
        english: "size",
        example: "這件衣服尺寸太大。",
        translation: "This clothing size is too big.",
        clue: "Shopping"
    },

    {
        id: 375,
        traditional: "顏色",
        pinyin: "yánsè",
        english: "color",
        example: "你喜歡什麼顏色？",
        translation: "What color do you like?",
        clue: "Description"
    },

    {
        id: 376,
        traditional: "樣子",
        pinyin: "yàngzi",
        english: "style / appearance",
        example: "這件衣服的樣子很好看。",
        translation: "The style of this clothing looks nice.",
        clue: "Shopping"
    },

    {
        id: 377,
        traditional: "便當",
        pinyin: "biàndāng",
        english: "lunchbox",
        example: "我買了一個便當。",
        translation: "I bought a lunchbox.",
        clue: "Food"
    },

    {
        id: 378,
        traditional: "飲料",
        pinyin: "yǐnliào",
        english: "drink / beverage",
        example: "你想喝什麼飲料？",
        translation: "What drink would you like?",
        clue: "Food"
    },

    {
        id: 379,
        traditional: "甜點",
        pinyin: "tiándiǎn",
        english: "dessert",
        example: "我喜歡吃甜點。",
        translation: "I like eating desserts.",
        clue: "Food"
    },

    {
        id: 380,
        traditional: "冰淇淋",
        pinyin: "bīngqílín",
        english: "ice cream",
        example: "夏天我常吃冰淇淋。",
        translation: "I often eat ice cream in summer.",
        clue: "Food"
    },

    {
        id: 381,
        traditional: "湯",
        pinyin: "tāng",
        english: "soup",
        example: "這碗湯很好喝。",
        translation: "This soup is delicious.",
        clue: "Food"
    },

    {
        id: 382,
        traditional: "沙拉",
        pinyin: "shālā",
        english: "salad",
        example: "我午餐吃沙拉。",
        translation: "I eat salad for lunch.",
        clue: "Food"
    },

    {
        id: 383,
        traditional: "水果店",
        pinyin: "shuǐguǒ diàn",
        english: "fruit shop",
        example: "我去水果店買香蕉。",
        translation: "I went to the fruit shop to buy bananas.",
        clue: "Shopping"
    },

    {
        id: 384,
        traditional: "菜市場",
        pinyin: "cài shìchǎng",
        english: "vegetable market",
        example: "菜市場很熱鬧。",
        translation: "The vegetable market is lively.",
        clue: "Shopping"
    },

    {
        id: 385,
        traditional: "超商",
        pinyin: "chāoshāng",
        english: "convenience store (short)",
        example: "台灣的超商很方便。",
        translation: "Convenience stores in Taiwan are very convenient.",
        clue: "Shopping"
    },

    {
        id: 386,
        traditional: "外送",
        pinyin: "wàisòng",
        english: "delivery (food)",
        example: "我叫外送。",
        translation: "I ordered delivery.",
        clue: "Food"
    },

    {
        id: 387,
        traditional: "外賣",
        pinyin: "wàimài",
        english: "takeout",
        example: "我買外賣回家吃。",
        translation: "I bought takeout to eat at home.",
        clue: "Food"
    },

    {
        id: 388,
        traditional: "打包",
        pinyin: "dǎbāo",
        english: "to pack leftovers",
        example: "這些可以幫我打包嗎？",
        translation: "Can you pack these leftovers for me?",
        clue: "Restaurant"
    },

    {
        id: 389,
        traditional: "服務",
        pinyin: "fúwù",
        english: "service",
        example: "這家店的服務很好。",
        translation: "The service at this store is very good.",
        clue: "Restaurant"
    },

    {
        id: 390,
        traditional: "品質",
        pinyin: "pǐnzhì",
        english: "quality",
        example: "這個商品的品質很好。",
        translation: "The quality of this product is very good.",
        clue: "Shopping"
    },
    {
        id: 391,
        traditional: "廟",
        pinyin: "miào",
        english: "temple",
        example: "這附近有一間很有名的廟。",
        translation: "There's a famous temple nearby.",
        clue: "Place"
    },

    {
        id: 392,
        traditional: "加油站",
        pinyin: "jiāyóuzhàn",
        english: "gas station",
        example: "摩托車快沒油了，我們去加油站。",
        translation: "The motorcycle is almost out of gas, let's go to the gas station.",
        clue: "Place"
    },

    {
        id: 393,
        traditional: "停電",
        pinyin: "tíngdiàn",
        english: "power outage",
        example: "昨天晚上停電了。",
        translation: "There was a power outage last night.",
        clue: "Daily life"
    },

    {
        id: 394,
        traditional: "加班",
        pinyin: "jiābān",
        english: "to work overtime",
        example: "我今天要加班。",
        translation: "I need to work overtime today.",
        clue: "Work"
    },

    {
        id: 395,
        traditional: "開會",
        pinyin: "kāihuì",
        english: "to have a meeting",
        example: "我們下午開會。",
        translation: "We have a meeting in the afternoon.",
        clue: "Work"
    },

    {
        id: 396,
        traditional: "報告",
        pinyin: "bàogào",
        english: "report / presentation",
        example: "我明天要做報告。",
        translation: "I need to give a presentation tomorrow.",
        clue: "Work/School"
    },

    {
        id: 397,
        traditional: "資料",
        pinyin: "zīliào",
        english: "information / data",
        example: "請把資料寄給我。",
        translation: "Please send me the information.",
        clue: "Work"
    },

    {
        id: 398,
        traditional: "文件",
        pinyin: "wénjiàn",
        english: "document",
        example: "我找不到那份文件。",
        translation: "I can’t find that document.",
        clue: "Work"
    },

    {
        id: 399,
        traditional: "計畫",
        pinyin: "jìhuà",
        english: "plan",
        example: "我們有新的計畫。",
        translation: "We have a new plan.",
        clue: "Work"
    },

    {
        id: 400,
        traditional: "專案",
        pinyin: "zhuān'àn",
        english: "project",
        example: "這個專案很重要。",
        translation: "This project is very important.",
        clue: "Work"
    },

    {
        id: 401,
        traditional: "鄰居",
        pinyin: "línjū",
        english: "neighbor",
        example: "我的鄰居很友善。",
        translation: "My neighbor is very friendly.",
        clue: "People"
    },

    {
        id: 402,
        traditional: "教室",
        pinyin: "jiàoshì",
        english: "classroom",
        example: "教室裡有很多學生。",
        translation: "There are many students in the classroom.",
        clue: "School"
    },

    {
        id: 403,
        traditional: "拜拜",
        pinyin: "bàibài",
        english: "to worship / pray",
        example: "過年的時候我們會去廟裡拜拜。",
        translation: "During Chinese New Year we go pray at the temple.",
        clue: "Culture"
    },

    {
        id: 404,
        traditional: "紅包",
        pinyin: "hóngbāo",
        english: "red envelope",
        example: "過年的時候長輩會給紅包。",
        translation: "During Chinese New Year, elders give red envelopes.",
        clue: "Culture"
    },

    {
        id: 405,
        traditional: "作業",
        pinyin: "zuòyè",
        english: "homework",
        example: "我還沒做作業。",
        translation: "I haven’t done my homework yet.",
        clue: "School"
    },

    {
        id: 406,
        traditional: "考試",
        pinyin: "kǎoshì",
        english: "exam",
        example: "我明天有考試。",
        translation: "I have an exam tomorrow.",
        clue: "School"
    },

    {
        id: 407,
        traditional: "成績",
        pinyin: "chéngjī",
        english: "grades",
        example: "我的成績進步了。",
        translation: "My grades improved.",
        clue: "School"
    },

    {
        id: 408,
        traditional: "學費",
        pinyin: "xuéfèi",
        english: "tuition",
        example: "學費有點貴。",
        translation: "Tuition is a bit expensive.",
        clue: "School"
    },

    {
        id: 409,
        traditional: "語言",
        pinyin: "yǔyán",
        english: "language",
        example: "我想學更多語言。",
        translation: "I want to learn more languages.",
        clue: "School"
    },

    {
        id: 410,
        traditional: "中文",
        pinyin: "zhōngwén",
        english: "Chinese (language)",
        example: "我在學中文。",
        translation: "I am learning Chinese.",
        clue: "Language"
    },

    {
        id: 411,
        traditional: "英文",
        pinyin: "yīngwén",
        english: "English (language)",
        example: "他英文說得很好。",
        translation: "He speaks English very well.",
        clue: "Language"
    },

    {
        id: 412,
        traditional: "翻譯",
        pinyin: "fānyì",
        english: "to translate",
        example: "請幫我翻譯這句話。",
        translation: "Please help me translate this sentence.",
        clue: "Language"
    },

    {
        id: 413,
        traditional: "客服",
        pinyin: "kèfú",
        english: "customer service",
        example: "有問題可以打電話給客服。",
        translation: "If you have a problem, you can call customer service.",
        clue: "Shopping"
    },

    {
        id: 414,
        traditional: "筆記",
        pinyin: "bǐjì",
        english: "notes",
        example: "我在做筆記。",
        translation: "I am taking notes.",
        clue: "School"
    },

    {
        id: 415,
        traditional: "過年",
        pinyin: "guònián",
        english: "Chinese New Year",
        example: "我們全家過年都會團聚。",
        translation: "Our whole family gets together for Chinese New Year.",
        clue: "Holiday"
    },

    {
        id: 416,
        traditional: "中秋節",
        pinyin: "Zhōngqiūjié",
        english: "Mid-Autumn Festival",
        example: "中秋節我們會烤肉、賞月。",
        translation: "During the Mid-Autumn Festival we barbecue and admire the moon.",
        clue: "Holiday"
    },

    {
        id: 417,
        traditional: "平板",
        pinyin: "píngbǎn",
        english: "tablet",
        example: "我用平板看影片。",
        translation: "I use a tablet to watch videos.",
        clue: "Technology"
    },

    {
        id: 418,
        traditional: "網路",
        pinyin: "wǎnglù",
        english: "internet",
        example: "這裡的網路很慢。",
        translation: "The internet here is very slow.",
        clue: "Technology"
    },

    {
        id: 419,
        traditional: "訊息",
        pinyin: "xùnxí",
        english: "message",
        example: "我收到你的訊息了。",
        translation: "I received your message.",
        clue: "Communication"
    },

    {
        id: 420,
        traditional: "電子郵件",
        pinyin: "diànzǐ yóujiàn",
        english: "email",
        example: "我寄電子郵件給你。",
        translation: "I sent you an email.",
        clue: "Communication"
    },

    {
        id: 421,
        traditional: "電話",
        pinyin: "diànhuà",
        english: "phone / call",
        example: "我打電話給媽媽。",
        translation: "I called my mom.",
        clue: "Communication"
    },

    {
        id: 422,
        traditional: "影片",
        pinyin: "yǐngpiàn",
        english: "video",
        example: "我在看影片。",
        translation: "I’m watching a video.",
        clue: "Media"
    },

    {
        id: 423,
        traditional: "照片",
        pinyin: "zhàopiàn",
        english: "photo",
        example: "這張照片很好看。",
        translation: "This photo looks great.",
        clue: "Media"
    },

    {
        id: 424,
        traditional: "音樂",
        pinyin: "yīnyuè",
        english: "music",
        example: "我喜歡聽音樂。",
        translation: "I like listening to music.",
        clue: "Media"
    },

    {
        id: 425,
        traditional: "電影",
        pinyin: "diànyǐng",
        english: "movie",
        example: "這部電影很好看。",
        translation: "This movie is very good.",
        clue: "Media"
    },

    {
        id: 426,
        traditional: "電視節目",
        pinyin: "diànshì jiémù",
        english: "TV show",
        example: "我在看電視節目。",
        translation: "I’m watching a TV show.",
        clue: "Media"
    },

    {
        id: 427,
        traditional: "新聞",
        pinyin: "xīnwén",
        english: "news",
        example: "我每天看新聞。",
        translation: "I watch the news every day.",
        clue: "Media"
    },

    {
        id: 428,
        traditional: "故事",
        pinyin: "gùshì",
        english: "story",
        example: "這個故事很有趣。",
        translation: "This story is very interesting.",
        clue: "Media"
    },

    {
        id: 429,
        traditional: "小說",
        pinyin: "xiǎoshuō",
        english: "novel",
        example: "我喜歡看小說。",
        translation: "I like reading novels.",
        clue: "Media"
    },

    {
        id: 430,
        traditional: "雜誌",
        pinyin: "zázhì",
        english: "magazine",
        example: "我買了一本雜誌。",
        translation: "I bought a magazine.",
        clue: "Media"
    },

    {
        id: 431,
        traditional: "報紙",
        pinyin: "bàozhǐ",
        english: "newspaper",
        example: "我在看報紙。",
        translation: "I’m reading the newspaper.",
        clue: "Media"
    },

    {
        id: 432,
        traditional: "信",
        pinyin: "xìn",
        english: "letter",
        example: "我收到一封信。",
        translation: "I received a letter.",
        clue: "Communication"
    },

    {
        id: 433,
        traditional: "包裹",
        pinyin: "bāoguǒ",
        english: "package",
        example: "我有一個包裹要領。",
        translation: "I have a package to pick up.",
        clue: "Delivery"
    },

    {
        id: 434,
        traditional: "房東",
        pinyin: "fángdōng",
        english: "landlord",
        example: "房東人很好。",
        translation: "The landlord is very nice.",
        clue: "Housing"
    },

    {
        id: 435,
        traditional: "房租",
        pinyin: "fángzū",
        english: "rent",
        example: "這個月的房租還沒付。",
        translation: "This month's rent hasn't been paid yet.",
        clue: "Housing"
    },

    {
        id: 436,
        traditional: "提款機",
        pinyin: "tíkuǎnjī",
        english: "ATM",
        example: "我在提款機領錢。",
        translation: "I’m withdrawing money at the ATM.",
        clue: "Finance"
    },

    {
        id: 437,
        traditional: "珍珠奶茶",
        pinyin: "zhēnzhū nǎichá",
        english: "bubble tea",
        example: "我最喜歡喝珍珠奶茶。",
        translation: "I like drinking bubble tea the most.",
        clue: "Food"
    },

    {
        id: 438,
        traditional: "泡麵",
        pinyin: "pàomiàn",
        english: "instant noodles",
        example: "半夜肚子餓，我常常煮泡麵。",
        translation: "When I'm hungry at midnight, I often make instant noodles.",
        clue: "Food"
    },

    {
        id: 439,
        traditional: "悠閒",
        pinyin: "yōuxián",
        english: "leisurely / relaxed",
        example: "週末的下午很悠閒。",
        translation: "Weekend afternoons are very relaxing.",
        clue: "Description"
    },

    {
        id: 440,
        traditional: "價格",
        pinyin: "jiàgé",
        english: "price",
        example: "這個價格太高了。",
        translation: "This price is too high.",
        clue: "Shopping"
    },

    {
        id: 441,
        traditional: "大樓",
        pinyin: "dàlóu",
        english: "building",
        example: "這棟大樓有二十層樓。",
        translation: "This building has twenty floors.",
        clue: "Place"
    },

    {
        id: 442,
        traditional: "電梯",
        pinyin: "diàntī",
        english: "elevator",
        example: "電梯壞了，我們走樓梯吧。",
        translation: "The elevator is broken, let's take the stairs.",
        clue: "Object"
    },

    {
        id: 443,
        traditional: "樓梯",
        pinyin: "lóutī",
        english: "stairs",
        example: "我每天爬樓梯運動。",
        translation: "I climb the stairs every day for exercise.",
        clue: "Object"
    },

    {
        id: 444,
        traditional: "收據",
        pinyin: "shōujù",
        english: "receipt",
        example: "請給我收據。",
        translation: "Please give me a receipt.",
        clue: "Shopping"
    },

    {
        id: 445,
        traditional: "發票",
        pinyin: "fāpiào",
        english: "invoice",
        example: "台灣的發票可以對獎。",
        translation: "Taiwan receipts can be used for the lottery.",
        clue: "Taiwan culture"
    },

    {
        id: 446,
        traditional: "洗手",
        pinyin: "xǐshǒu",
        english: "to wash hands",
        example: "吃飯前要洗手。",
        translation: "You should wash your hands before eating.",
        clue: "Daily routine"
    },

    {
        id: 447,
        traditional: "洗臉",
        pinyin: "xǐliǎn",
        english: "to wash face",
        example: "我早上洗臉。",
        translation: "I wash my face in the morning.",
        clue: "Daily routine"
    },

    {
        id: 448,
        traditional: "刷牙",
        pinyin: "shuāyá",
        english: "to brush teeth",
        example: "睡前要刷牙。",
        translation: "Brush your teeth before sleeping.",
        clue: "Daily routine"
    },

    {
        id: 449,
        traditional: "颱風假",
        pinyin: "táifēngjià",
        english: "typhoon day off",
        example: "明天可能會放颱風假。",
        translation: "We might get a typhoon day off tomorrow.",
        clue: "Weather"
    },

    {
        id: 450,
        traditional: "打掃",
        pinyin: "dǎsǎo",
        english: "to clean",
        example: "我週末打掃房間。",
        translation: "I clean my room on weekends.",
        clue: "Home"
    },

    {
        id: 451,
        traditional: "整理",
        pinyin: "zhěnglǐ",
        english: "to tidy / to organize",
        example: "我在整理桌子。",
        translation: "I’m tidying the table.",
        clue: "Home"
    },

    {
        id: 452,
        traditional: "換",
        pinyin: "huàn",
        english: "to change / to replace",
        example: "我要換衣服。",
        translation: "I need to change clothes.",
        clue: "Daily routine"
    },

    {
        id: 453,
        traditional: "穿",
        pinyin: "chuān",
        english: "to wear",
        example: "我穿外套。",
        translation: "I’m wearing a jacket.",
        clue: "Clothing"
    },

    {
        id: 454,
        traditional: "戴",
        pinyin: "dài",
        english: "to wear (accessories)",
        example: "他戴帽子。",
        translation: "He is wearing a hat.",
        clue: "Clothing"
    },

    {
        id: 455,
        traditional: "脫",
        pinyin: "tuō",
        english: "to take off (clothes)",
        example: "請脫鞋。",
        translation: "Please take off your shoes.",
        clue: "Clothing"
    },

    {
        id: 456,
        traditional: "關",
        pinyin: "guān",
        english: "to close / to turn off",
        example: "請把燈關掉。",
        translation: "Please turn off the light.",
        clue: "Home"
    },

    {
        id: 457,
        traditional: "開",
        pinyin: "kāi",
        english: "to open / to turn on",
        example: "請把門打開。",
        translation: "Please open the door.",
        clue: "Home"
    },

    {
        id: 458,
        traditional: "借",
        pinyin: "jiè",
        english: "to borrow",
        example: "我可以借你的筆嗎？",
        translation: "Can I borrow your pen?",
        clue: "Action"
    },

    {
        id: 459,
        traditional: "還",
        pinyin: "huán",
        english: "to return (something borrowed)",
        example: "我明天還你。",
        translation: "I’ll return it to you tomorrow.",
        clue: "Action"
    },

    {
        id: 460,
        traditional: "丟",
        pinyin: "diū",
        english: "to lose / to throw away",
        example: "我把手機丟了。",
        translation: "I lost my phone.",
        clue: "Action"
    },

    {
        id: 461,
        traditional: "找到",
        pinyin: "zhǎodào",
        english: "to find",
        example: "我找到鑰匙了。",
        translation: "I found my keys.",
        clue: "Action"
    },

    {
        id: 462,
        traditional: "準時",
        pinyin: "zhǔnshí",
        english: "on time",
        example: "請準時到。",
        translation: "Please arrive on time.",
        clue: "Time"
    },

    {
        id: 463,
        traditional: "遲到",
        pinyin: "chídào",
        english: "to be late",
        example: "我今天遲到了。",
        translation: "I was late today.",
        clue: "Time"
    },

    {
        id: 464,
        traditional: "早",
        pinyin: "zǎo",
        english: "early",
        example: "你來得很早。",
        translation: "You came very early.",
        clue: "Time"
    },

    {
        id: 465,
        traditional: "晚",
        pinyin: "wǎn",
        english: "late",
        example: "他回家很晚。",
        translation: "He came home very late.",
        clue: "Time"
    },

    {
        id: 466,
        traditional: "突然",
        pinyin: "tūrán",
        english: "suddenly",
        example: "他突然生病了。",
        translation: "He suddenly got sick.",
        clue: "Time"
    },

    {
        id: 467,
        traditional: "一直",
        pinyin: "yìzhí",
        english: "continuously / always",
        example: "他一直在工作。",
        translation: "He has been working continuously.",
        clue: "Grammar"
    },

    {
        id: 468,
        traditional: "自拍",
        pinyin: "zìpāi",
        english: "to take a selfie",
        example: "我們在夜市自拍了很多照片。",
        translation: "We took a lot of selfies at the night market.",
        clue: "Technology"
    },

    {
        id: 469,
        traditional: "直播",
        pinyin: "zhíbò",
        english: "live stream",
        example: "他每天晚上都會直播。",
        translation: "He live streams every night.",
        clue: "Technology"
    },

    {
        id: 470,
        traditional: "如果",
        pinyin: "rúguǒ",
        english: "if",
        example: "如果下雨，我就不去。",
        translation: "If it rains, I won’t go.",
        clue: "Grammar"
    },

    {
        id: 471,
        traditional: "因為",
        pinyin: "yīnwèi",
        english: "because",
        example: "我因為生病不能去。",
        translation: "I can’t go because I’m sick.",
        clue: "Grammar"
    },

    {
        id: 472,
        traditional: "所以",
        pinyin: "suǒyǐ",
        english: "so / therefore",
        example: "下雨了，所以我不出門。",
        translation: "It’s raining, so I’m not going out.",
        clue: "Grammar"
    },

    {
        id: 473,
        traditional: "或者",
        pinyin: "huòzhě",
        english: "or (statement)",
        example: "你可以喝茶或者咖啡。",
        translation: "You can drink tea or coffee.",
        clue: "Grammar"
    },

    {
        id: 474,
        traditional: "還是",
        pinyin: "háishì",
        english: "or (question)",
        example: "你要茶還是咖啡？",
        translation: "Do you want tea or coffee?",
        clue: "Grammar"
    },

    {
        id: 475,
        traditional: "除了",
        pinyin: "chúle",
        english: "besides / except",
        example: "除了中文，我還學英文。",
        translation: "Besides Chinese, I also learn English.",
        clue: "Grammar"
    },

    {
        id: 476,
        traditional: "例如",
        pinyin: "lìrú",
        english: "for example",
        example: "我喜歡運動，例如跑步。",
        translation: "I like sports, for example running.",
        clue: "Grammar"
    },

    {
        id: 477,
        traditional: "隱形眼鏡",
        pinyin: "yǐnxíng yǎnjìng",
        english: "contact lenses",
        example: "我戴隱形眼鏡不戴眼鏡。",
        translation: "I wear contact lenses instead of glasses.",
        clue: "Object"
    },

    {
        id: 478,
        traditional: "掛號",
        pinyin: "guàhào",
        english: "to register (at a clinic)",
        example: "我先去掛號才能看醫生。",
        translation: "I need to register first before I can see the doctor.",
        clue: "Health"
    },

    {
        id: 479,
        traditional: "打針",
        pinyin: "dǎzhēn",
        english: "to get an injection",
        example: "護士幫我打針。",
        translation: "The nurse gave me an injection.",
        clue: "Health"
    },

    {
        id: 480,
        traditional: "過敏",
        pinyin: "guòmǐn",
        english: "allergy",
        example: "我對花生過敏。",
        translation: "I'm allergic to peanuts.",
        clue: "Health"
    },

    {
        id: 481,
        traditional: "保險",
        pinyin: "bǎoxiǎn",
        english: "insurance",
        example: "我有買健康保險。",
        translation: "I have health insurance.",
        clue: "Finance"
    },

    {
        id: 482,
        traditional: "悠遊卡",
        pinyin: "yōuyóukǎ",
        english: "EasyCard (transit card)",
        example: "我用悠遊卡搭捷運。",
        translation: "I use an EasyCard to take the MRT.",
        clue: "Transportation"
    },

    {
        id: 483,
        traditional: "摩托車",
        pinyin: "mótuōchē",
        english: "motorcycle",
        example: "台灣人常騎摩托車上班。",
        translation: "Taiwanese people often ride motorcycles to work.",
        clue: "Transportation"
    },

    {
        id: 484,
        traditional: "時差",
        pinyin: "shíchā",
        english: "jet lag / time difference",
        example: "我剛下飛機，還有時差。",
        translation: "I just got off the plane and still have jet lag.",
        clue: "Travel"
    },

    {
        id: 485,
        traditional: "下載",
        pinyin: "xiàzài",
        english: "to download",
        example: "我在下載一個新的應用程式。",
        translation: "I'm downloading a new app.",
        clue: "Technology"
    },

    {
        id: 486,
        traditional: "上傳",
        pinyin: "shàngchuán",
        english: "to upload",
        example: "我把照片上傳到網路上。",
        translation: "I uploaded the photos online.",
        clue: "Technology"
    },

    {
        id: 487,
        traditional: "觀光",
        pinyin: "guānguāng",
        english: "sightseeing",
        example: "很多人來台灣觀光。",
        translation: "Many people come to Taiwan for sightseeing.",
        clue: "Travel"
    },

    {
        id: 488,
        traditional: "景點",
        pinyin: "jǐngdiǎn",
        english: "tourist attraction",
        example: "九份是很有名的景點。",
        translation: "Jiufen is a very famous tourist attraction.",
        clue: "Travel"
    },

    {
        id: 489,
        traditional: "有用",
        pinyin: "yǒuyòng",
        english: "useful",
        example: "這個資訊很有用。",
        translation: "This information is very useful.",
        clue: "Description"
    },

    {
        id: 490,
        traditional: "沒用",
        pinyin: "méiyòng",
        english: "useless",
        example: "這個方法沒用。",
        translation: "This method is useless.",
        clue: "Description"
    },

    {
        id: 491,
        traditional: "伴手禮",
        pinyin: "bànshǒulǐ",
        english: "souvenir gift",
        example: "我買了鳳梨酥當伴手禮。",
        translation: "I bought pineapple cakes as a souvenir gift.",
        clue: "Travel"
    },

    {
        id: 492,
        traditional: "簽證",
        pinyin: "qiānzhèng",
        english: "visa",
        example: "去有些國家需要簽證。",
        translation: "You need a visa to go to some countries.",
        clue: "Travel"
    },

    {
        id: 493,
        traditional: "登機",
        pinyin: "dēngjī",
        english: "to board a plane",
        example: "我們準備要登機了。",
        translation: "We're getting ready to board the plane.",
        clue: "Travel"
    },

    {
        id: 494,
        traditional: "行李箱",
        pinyin: "xínglixiāng",
        english: "suitcase",
        example: "我的行李箱太重了。",
        translation: "My suitcase is too heavy.",
        clue: "Travel"
    },

    {
        id: 495,
        traditional: "宵夜",
        pinyin: "xiāoyè",
        english: "late-night snack",
        example: "台灣人很喜歡吃宵夜。",
        translation: "Taiwanese people love eating late-night snacks.",
        clue: "Food"
    }
    ];