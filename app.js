// Collective Purchasing Mobile & Web Application MVP ("CollabBuy") — Interactive Engine

// --- EXPANDED 60-PRODUCT LOCALIZED DATABASE ---
const PRODUCTS = [
  // --- ELECTRONICS (Электроника) ---
  {
    id: "elec-1",
    title: "Механическая клавиатура Keychron Q1 V2 (Customized)",
    description: "Алюминиевый корпус, переключатели Gateron G Pro Brown с заводской смазкой, горячая замена (Hot-swap), полная совместимость с macOS/Windows. Спарсено с AliExpress.",
    category: "electronics",
    donor: "aliexpress",
    donorLabel: "AliExpress",
    priceSolo: 48000,
    priceGroup: 33600,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=600&auto=format&fit=crop",
    poolCollected: 8,
    poolTotal: 10,
    timeLeft: "00:45:12",
    avatars: ["👨‍💻", "👩‍🎨", "🤖", "👾", "🦊", "🐼", "🐻", "🐝"],
    chatHistory: [
      { sender: "Нурлан", text: "Ребята, еще 2 человека и клавиатура уйдет по цене 33 600 ₸ вместо 48 000!", time: "11:30" },
      { sender: "Мария", text: "Кто-нибудь заказывал такую же? Как свичи по звуку?", time: "11:32" },
      { sender: "Артур", text: "@Мария Браун свичи тихие, тактильные, для офиса и кодинга — пушка. Заводская смазка отличная.", time: "11:33" }
    ],
    botReplies: ["О, супер, вижу кто-то еще зашел в пул!", "Ребята, клавиатура реально хорошая, на Kaspi она в два раза дороже стоит.", "Свитчи смазанные, люфта нет. Ждем выкупа!"]
  },
  {
    id: "elec-2",
    title: "Игровой монитор LG UltraGear 27GP850-B IPS",
    description: "27 дюймов, Nano IPS, разрешение Quad HD 2560x1440, частота обновления 165 Гц (разгон до 180 Гц), время отклика 1 мс, поддержка G-Sync. Спарсено с Ozon.",
    category: "electronics",
    donor: "ozon",
    donorLabel: "Ozon",
    priceSolo: 195000,
    priceGroup: 136500,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=600&auto=format&fit=crop",
    poolCollected: 6,
    poolTotal: 10,
    timeLeft: "03:15:22",
    avatars: ["🖥️", "🎮", "👾", "🦊", "🐼", "🐻"],
    chatHistory: [
      { sender: "Тимур", text: "Монитор шикарный. 180 герц выдает без проблем.", time: "09:30" },
      { sender: "Марат", text: "Битых пикселей нет? Кто проверял?", time: "09:40" }
    ],
    botReplies: ["У меня такой же, цвета сочные, контраст для IPS отличный.", "На Kaspi он дороже 200 тысяч стоит. Здесь цена супер.", "Еще 4 человека и отправляем!"]
  },
  {
    id: "elec-3",
    title: "Портативная консоль ASUS ROG Ally Z1 Extreme",
    description: "7-дюймовый сенсорный экран Full HD 120 Гц, процессор AMD Ryzen Z1 Extreme, 16 ГБ LPDDR5, 512 ГБ PCIe 4.0 NVMe M.2 SSD, Windows 11. Спарсено с Kaspi.",
    category: "electronics",
    donor: "kaspi",
    donorLabel: "Kaspi",
    priceSolo: 245000,
    priceGroup: 196000,
    discountPercent: 20,
    img: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=600&auto=format&fit=crop",
    poolCollected: 7,
    poolTotal: 8,
    timeLeft: "01:12:44",
    avatars: ["🎮", "🦾", "🔋", "🌤️", "🥇", "👾", "🐼"],
    chatHistory: [
      { sender: "Арсен", text: "Один человек остался! Давайте доберем до опта!", time: "11:02" },
      { sender: "Игорь", text: "Z1 Extreme тащит все игры, это не обычная Z1.", time: "11:15" }
    ],
    botReplies: ["Добавился, закрываем пул!", "Отличная портативка, жду доставки в Алматы.", "Выкупаем!"]
  },
  {
    id: "elec-4",
    title: "SSD-накопитель Samsung 990 Pro 2TB NVMe M.2",
    description: "Скорость чтения до 7450 МБ/с, скорость записи до 6900 МБ/с, интерфейс PCIe Gen 4.0 x4, кэш-память LPDDR4 2 ГБ. Идеально для PS5 и ПК. Спарсено с AliExpress.",
    category: "electronics",
    donor: "aliexpress",
    donorLabel: "AliExpress",
    priceSolo: 85000,
    priceGroup: 59500,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1618532158724-bdf77a3f4e2f?q=80&w=600&auto=format&fit=crop",
    poolCollected: 4,
    poolTotal: 6,
    timeLeft: "09:44:00",
    avatars: ["💾", "⚙️", "💡", "🔌"],
    chatHistory: [],
    botReplies: ["Брал такой на 1TB, скорость как в паспорте. Беру второй на 2TB.", "2 человека осталось, заказываем."]
  },
  {
    id: "elec-5",
    title: "Студийный микрофон Shure MV7 USB/XLR Black",
    description: "Гибридный динамический микрофон для подкастов, стримов и записи вокала. Сенсорная панель управления, софт ShurePlus MOTIV. Спарсено с Ozon.",
    category: "electronics",
    donor: "ozon",
    donorLabel: "Ozon",
    priceSolo: 125000,
    priceGroup: 87500,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop",
    poolCollected: 3,
    poolTotal: 5,
    timeLeft: "11:22:15",
    avatars: ["🎙️", "🎧", "👾"],
    chatHistory: [],
    botReplies: ["Кардиоида отличная, посторонние шумы не ловит.", "С подставкой идет в комплекте?"]
  },
  {
    id: "elec-6",
    title: "Игровая мышь Razer DeathAdder V3 Pro Black",
    description: "Сверхлегкий эргономичный дизайн 63г, оптический сенсор Focus Pro 30K, оптические переключатели мыши Gen-3, беспроводная связь HyperSpeed. Спарсено с Wildberries.",
    category: "electronics",
    donor: "wildberries",
    donorLabel: "Wildberries",
    priceSolo: 65000,
    priceGroup: 48750,
    discountPercent: 25,
    img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=600&auto=format&fit=crop",
    poolCollected: 5,
    poolTotal: 8,
    timeLeft: "06:12:30",
    avatars: ["🖱️", "👾", "🐻", "🐝", "🐯"],
    chatHistory: [],
    botReplies: ["Форма идеальная под ладонный хват.", "Вес неощутимый, сенсор сорвать невозможно.", "Добавился в пул."]
  },
  {
    id: "elec-7",
    title: "Беспроводная гарнитура SteelSeries Arctis Nova 7",
    description: "Акустическая система Nova, одновременное подключение по 2.4 ГГц и Bluetooth, 38 часов автономной работы, микрофон ClearCast Gen 2. Спарсено с Kaspi.",
    category: "electronics",
    donor: "kaspi",
    donorLabel: "Kaspi",
    priceSolo: 92000,
    priceGroup: 73600,
    discountPercent: 20,
    img: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=600&auto=format&fit=crop",
    poolCollected: 2,
    poolTotal: 4,
    timeLeft: "14:15:00",
    avatars: ["🎧", "🎮"],
    chatHistory: [],
    botReplies: [" Nova 7 сидят шикарно, уши не потеют.", "Для шутеров позиционирование звука топовое."]
  },
  {
    id: "elec-8",
    title: "Кастомная клавиатура Epomaker TH80 Pro SE",
    description: "75% раскладка, механические свичи Epomaker Wisteria, прокладка Gasket, RGB-подсветка, подключение по проводу, 2.4G и Bluetooth. Спарсено с AliExpress.",
    category: "electronics",
    donor: "aliexpress",
    donorLabel: "AliExpress",
    priceSolo: 35000,
    priceGroup: 24500,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=600&auto=format&fit=crop",
    poolCollected: 8,
    poolTotal: 10,
    timeLeft: "02:11:00",
    avatars: ["⌨️", "🔧", "💡", "🔌", "🐼", "🦊", "🐻", "🦁"],
    chatHistory: [],
    botReplies: ["Звук клавиш прямо из коробки отличный, глухой тайпинг.", "Цвет SE выглядит очень стильно."]
  },
  {
    id: "elec-9",
    title: "Эргономичная мышь Logitech MX Master 3S Graphite",
    description: "Электромагнитная прокрутка MagSpeed, бесшумные клики, сенсор 8000 DPI, работа на стекле, поддержка управления несколькими ПК Flow. Спарсено с Ozon.",
    category: "electronics",
    donor: "ozon",
    donorLabel: "Ozon",
    priceSolo: 58000,
    priceGroup: 43500,
    discountPercent: 25,
    img: "https://images.unsplash.com/photo-1625842268584-8f329044697c?q=80&w=600&auto=format&fit=crop",
    poolCollected: 4,
    poolTotal: 6,
    timeLeft: "05:12:10",
    avatars: ["🖱️", "💼", "👨‍💻", "🦉"],
    chatHistory: [],
    botReplies: ["Для работы с кодом и монтажа видео лучшая мышь.", "Заряд держит месяца два."]
  },
  {
    id: "elec-10",
    title: "Видеокарта Gigabyte GeForce RTX 4060 EAGLE OC 8G",
    description: "Система охлаждения WINDFORCE, 3 вентилятора 80 мм, RGB Fusion, защитная металлическая бэкплейт, трассировка лучей DLSS 3. Спарсено с Kaspi.",
    category: "electronics",
    donor: "kaspi",
    donorLabel: "Kaspi",
    priceSolo: 185000,
    priceGroup: 148000,
    discountPercent: 20,
    img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=600&auto=format&fit=crop",
    poolCollected: 3,
    poolTotal: 5,
    timeLeft: "04:15:00",
    avatars: ["🎮", "🦾", "⚙️"],
    chatHistory: [],
    botReplies: ["Холодная карта, в Full HD тянет всё.", "Влезет в компактный корпус, длина небольшая."]
  },

  // --- GADGETS (Гаджеты) ---
  {
    id: "gadg-1",
    title: "Беспроводные ANC Наушники Sony WH-CH720N Blue",
    description: "Технология Dual Noise Sensor (активное шумоподавление), до 35 часов автономной работы. Интеграция с Ozon. Гарантия официального дистрибьютора.",
    category: "gadgets",
    donor: "ozon",
    donorLabel: "Ozon",
    priceSolo: 52000,
    priceGroup: 39000,
    discountPercent: 25,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
    poolCollected: 5,
    poolTotal: 8,
    timeLeft: "04:12:08",
    avatars: ["🦁", "🎒", "👒", "👓", "🦄"],
    chatHistory: [
      { sender: "Тимур", text: "Всем привет! Собираем на уши от Sony. Скидка 25% — это очень выгодно.", time: "10:15" },
      { sender: "Алина", text: "А они оригинальные? С Ozon часто реплики приходят.", time: "10:20" }
    ],
    botReplies: ["Кто-нибудь слушал их вживую? Басы нормальные?", "Да, за эту цену звук отличный, шумоподавление хорошо режет гул улицы."]
  },
  {
    id: "gadg-2",
    title: "Умные часы Amazfit Active Midnight Black",
    description: "1.75-дюймовый AMOLED-дисплей, Bluetooth-звонки, GPS-навигация, ИИ-тренер Zepp Aura, мониторинг здоровья 24/7. Спарсено с Kaspi.",
    category: "gadgets",
    donor: "kaspi",
    donorLabel: "Kaspi",
    priceSolo: 38000,
    priceGroup: 28500,
    discountPercent: 25,
    img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=600&auto=format&fit=crop",
    poolCollected: 7,
    poolTotal: 10,
    timeLeft: "02:11:45",
    avatars: ["🏃‍♂️", "⌚", "🔋", "🦾", "🏋️‍♀️", "🌤️", "🥇"],
    chatHistory: [
      { sender: "Аскар", text: "Amazfit по оптовой цене — супер. В Kaspi без группы они 38 тыс стоят.", time: "10:11" }
    ],
    botReplies: ["Часы отличные, тренировки считывают точно.", "Вибрация мощная у них?", "Еще 3 человека и выкупаем!"]
  },
  {
    id: "gadg-3",
    title: "Внешний аккумулятор Anker 737 Power Bank (PowerCore 24K)",
    description: "Емкость 24 000 мАч, выходная мощность 140 Вт PD 3.1, интеллектуальный цветной дисплей, зарядка 3 устройств одновременно. Спарсено с AliExpress.",
    category: "gadgets",
    donor: "aliexpress",
    donorLabel: "AliExpress",
    priceSolo: 62000,
    priceGroup: 46500,
    discountPercent: 25,
    img: "https://images.unsplash.com/photo-1609592424109-dd9892f1b17c?q=80&w=600&auto=format&fit=crop",
    poolCollected: 4,
    poolTotal: 5,
    timeLeft: "07:11:00",
    avatars: ["🔋", "⚡", "💡", "🔌"],
    chatHistory: [],
    botReplies: ["Заряжает Macbook Pro без проблем.", "Экран очень информативный, показывает износ батареи."]
  },
  {
    id: "gadg-4",
    title: "Фитнес-браслет Xiaomi Smart Band 8 Graphite Black",
    description: "1.62-дюймовый AMOLED-экран, частота обновления 60 Гц, более 150 спортивных режимов, до 16 дней автономной работы. Спарсено с Wildberries.",
    category: "gadgets",
    donor: "wildberries",
    donorLabel: "Wildberries",
    priceSolo: 18000,
    priceGroup: 13500,
    discountPercent: 25,
    img: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=600&auto=format&fit=crop",
    poolCollected: 8,
    poolTotal: 10,
    timeLeft: "01:15:33",
    avatars: ["🏃‍♂️", "⌚", "🐼", "🐻", "🐝", "🐯", "🦁", "🎒"],
    chatHistory: [],
    botReplies: ["С ремешком-клипсой на кроссовки очень удобно бегать.", "За эту цену просто топ."]
  },
  {
    id: "gadg-5",
    title: "Беспроводные наушники Nothing Ear (2) White",
    description: "Персонализированное активное шумоподавление, 24-битный звук высокого разрешения, двойное подключение, пыле- и влагозащита IP54. Спарсено с Ozon.",
    category: "gadgets",
    donor: "ozon",
    donorLabel: "Ozon",
    priceSolo: 68000,
    priceGroup: 51000,
    discountPercent: 25,
    img: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?q=80&w=600&auto=format&fit=crop",
    poolCollected: 3,
    poolTotal: 5,
    timeLeft: "11:42:00",
    avatars: ["🎧", "🦄", "🦁"],
    chatHistory: [],
    botReplies: ["Прозрачный дизайн вживую бомба.", "Звук чистый, басы глубокие."]
  },
  {
    id: "gadg-6",
    title: "Поисковый трекер Apple AirTag (4-Pack)",
    description: "Набор из 4 умных брелоков для поиска ключей, багажа и других вещей через локатор Find My. Защита IP67. Спарсено с Kaspi.",
    category: "gadgets",
    donor: "kaspi",
    donorLabel: "Kaspi",
    priceSolo: 55000,
    priceGroup: 44000,
    discountPercent: 20,
    img: "https://images.unsplash.com/photo-1629470989180-244e47b00b86?q=80&w=600&auto=format&fit=crop",
    poolCollected: 6,
    poolTotal: 8,
    timeLeft: "03:45:00",
    avatars: ["🔑", "🎒", "🦊", "🤖", "🎨", "🦁"],
    chatHistory: [],
    botReplies: ["Для путешествий незаменимая вещь.", "Батарейки хватает на год."]
  },
  {
    id: "gadg-7",
    title: "Зарядное устройство Baseus 100W GaN Fast Charger",
    description: "Технология GaN5, 4 порта (2 USB-C, 2 USB-A), поддержка протоколов QC/PD, кабель 100W Type-C в комплекте. Спарсено с AliExpress.",
    category: "gadgets",
    donor: "aliexpress",
    donorLabel: "AliExpress",
    priceSolo: 18000,
    priceGroup: 13500,
    discountPercent: 25,
    img: "https://images.unsplash.com/photo-1622445262465-2481c8575326?q=80&w=600&auto=format&fit=crop",
    poolCollected: 4,
    poolTotal: 6,
    timeLeft: "08:12:00",
    avatars: ["⚡", "🔌", "🔋", "🦾"],
    chatHistory: [],
    botReplies: ["Маленький, а заряжает ноут и телефон одновременно.", "Качественный блок."]
  },
  {
    id: "gadg-8",
    title: "Портативная колонка JBL Flip 6 Black",
    description: "Двухполосная акустическая система, защита от воды и пыли IP67, до 12 часов автономной работы, функция PartyBoost. Спарсено с Wildberries.",
    category: "gadgets",
    donor: "wildberries",
    donorLabel: "Wildberries",
    priceSolo: 48000,
    priceGroup: 36000,
    discountPercent: 25,
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=600&auto=format&fit=crop",
    poolCollected: 3,
    poolTotal: 5,
    timeLeft: "10:15:00",
    avatars: ["🔊", "🏕️", "🦊"],
    chatHistory: [],
    botReplies: ["Басс сочный для такого размера.", "Оригинал, приложение JBL Portable видит."]
  },
  {
    id: "gadg-9",
    title: "Электронная книга Kindle Paperwhite 2024 (16GB)",
    description: "6.8-дюймовый экран Paperwhite с плотностью пикселей 300 ppi, регулируемая теплая подсветка, влагозащита IPX8, разъем USB-C. Спарсено с Ozon.",
    category: "gadgets",
    donor: "ozon",
    donorLabel: "Ozon",
    priceSolo: 82000,
    priceGroup: 65600,
    discountPercent: 20,
    img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop",
    poolCollected: 2,
    poolTotal: 4,
    timeLeft: "15:00:00",
    avatars: ["📚", "👓"],
    chatHistory: [],
    botReplies: ["Экран стал контрастнее по сравнению со старой версией.", "Читать перед сном одно удовольствие."]
  },
  {
    id: "gadg-10",
    title: "Умный трекер осанки Lumo Lift",
    description: "Биосенсор осанки, вибросигнал при сутулости, шагомер, синхронизация с iOS/Android, крепление на магните. Спарсено с AliExpress.",
    category: "gadgets",
    donor: "aliexpress",
    donorLabel: "AliExpress",
    priceSolo: 24000,
    priceGroup: 18000,
    discountPercent: 25,
    img: "https://images.unsplash.com/photo-1558089687-f282ffcbd1d5?q=80&w=600&auto=format&fit=crop",
    poolCollected: 5,
    poolTotal: 8,
    timeLeft: "06:40:00",
    avatars: ["🕴️", "🔋", "🦾", "🏋️‍♀️", "🌤️"],
    chatHistory: [],
    botReplies: ["Помогает держать спину ровно при сидячей работе."]
  },

  // --- DIY ---
  {
    id: "diy-1",
    title: "Умный паяльник TS101 Mini Smart Station",
    description: "Программируемый микроконтроллерный паяльник с OLED экраном, питанием по USB-C (PD 65W) и регулировкой температуры от 50°C до 400°C. Спарсено с AliExpress.",
    category: "diy",
    donor: "aliexpress",
    donorLabel: "AliExpress",
    priceSolo: 19800,
    priceGroup: 13860,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop",
    poolCollected: 4,
    poolTotal: 6,
    timeLeft: "08:32:55",
    avatars: ["🔧", "⚙️", "💡", "🔌"],
    chatHistory: [
      { sender: "Дмитрий", text: "Собираю пул на TS101. Легендарный паяльник.", time: "09:02" },
      { sender: "Арман", text: "Реально работает от повербанка?", time: "09:15" }
    ],
    botReplies: ["Взял такой месяц назад, сейчас беру брату на подарок.", "Давайте добьем пул, 2 человека осталось!"]
  },
  {
    id: "diy-2",
    title: "Стартовый набор Freenove Ultimate Kit для Arduino",
    description: "Более 300 компонентов, включая плату Arduino Uno R3, макетную плату, серводвигатель, LCD-экран, датчики и подробное руководство. Спарсено с AliExpress.",
    category: "diy",
    donor: "aliexpress",
    donorLabel: "AliExpress",
    priceSolo: 15000,
    priceGroup: 10500,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=600&auto=format&fit=crop",
    poolCollected: 5,
    poolTotal: 6,
    timeLeft: "02:15:00",
    avatars: ["🤖", "🔬", "🛠️", "💡", "📡"],
    chatHistory: [],
    botReplies: ["Для новичков в робототехнике лучший набор.", "Все датчики рабочие, макетная плата качественная."]
  },
  {
    id: "diy-3",
    title: "Микрокомпьютер Raspberry Pi 4 Model B (4GB RAM)",
    description: "Четырехъядерный процессор Cortex-A72 64-bit 1.5 ГГц, поддержка двух дисплеев 4K, Wi-Fi 2.4/5 ГГц, Bluetooth 5.0, Gigabit Ethernet. Спарсено с AliExpress.",
    category: "diy",
    donor: "aliexpress",
    donorLabel: "AliExpress",
    priceSolo: 42000,
    priceGroup: 29400,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1602524810785-760344f1343f?q=80&w=600&auto=format&fit=crop",
    poolCollected: 6,
    poolTotal: 10,
    timeLeft: "04:10:00",
    avatars: ["💻", "⚙️", "🔧", "🔌", "💡", "🤖"],
    chatHistory: [],
    botReplies: ["Собрал на нем домашний медиасервер Plex, тянет отлично.", "Греется прилично, нужно охлаждение."]
  },
  {
    id: "diy-4",
    title: "Портативный осциллограф FNIRSI-1014D",
    description: "Двухканальный осциллограф, полоса пропускания 100 МГц, частота дискретизации 1 Гвыб/с, встроенный генератор сигналов DDS. Спарсено с AliExpress.",
    category: "diy",
    donor: "aliexpress",
    donorLabel: "AliExpress",
    priceSolo: 78000,
    priceGroup: 54600,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    poolCollected: 2,
    poolTotal: 4,
    timeLeft: "12:11:00",
    avatars: ["📊", "🔧"],
    chatHistory: [],
    botReplies: ["Для домашней лаборатории за свои деньги топ.", "Интерфейс простой, разобрался быстро."]
  },
  {
    id: "diy-5",
    title: "Модуль ESP32-WROOM-32D DevKitC (5-Pack)",
    description: "Плата разработчика с поддержкой Wi-Fi и Bluetooth, чип ESP32, микросхема CP2102 для прошивки через USB. Набор из 5 штук. Спарсено с AliExpress.",
    category: "diy",
    donor: "aliexpress",
    donorLabel: "AliExpress",
    priceSolo: 12000,
    priceGroup: 8400,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=600&auto=format&fit=crop",
    poolCollected: 7,
    poolTotal: 10,
    timeLeft: "05:44:00",
    avatars: ["📡", "💡", "👾", "🤖", "🔧", "🔋", "🦾"],
    chatHistory: [],
    botReplies: ["Идеально для датчиков Умного Дома ESPHome.", "Прошивается без проблем."]
  },
  {
    id: "diy-6",
    title: "Фен паяльный портативный SUGON 8620DX",
    description: "Профессиональная термовоздушная станция, мощность 1000 Вт, расход воздуха до 200 л/мин, ЖК-дисплей, 4 ячейки памяти. Спарсено с Ozon.",
    category: "diy",
    donor: "ozon",
    donorLabel: "Ozon",
    priceSolo: 110000,
    priceGroup: 82500,
    discountPercent: 25,
    img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=600&auto=format&fit=crop",
    poolCollected: 1,
    poolTotal: 3,
    timeLeft: "22:15:00",
    avatars: ["🔥"],
    chatHistory: [],
    botReplies: ["Проф инструмент, нагрев мгновенный."]
  },
  {
    id: "diy-7",
    title: "Умный паяльник Pinecil V2 Pine64 USB-C",
    description: "Портативный мини-паяльник с поддержкой RISC-V ОС, автоматическим переходом в сон, питанием QC3.0/PD. Спарсено с AliExpress.",
    category: "diy",
    donor: "aliexpress",
    donorLabel: "AliExpress",
    priceSolo: 21000,
    priceGroup: 15750,
    discountPercent: 25,
    img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop",
    poolCollected: 6,
    poolTotal: 8,
    timeLeft: "06:12:00",
    avatars: ["🔥", "⚡", "🦾", "🔧", "⚙️", "💡"],
    chatHistory: [],
    botReplies: ["Pinecil v2 лучше чем ts100 за счет RISC-V.", "Разогрев моментальный."]
  },
  {
    id: "diy-8",
    title: "Плата управления 3D-принтером BIGTREETECH SKR Mini E3 V3",
    description: "Тихая 32-битная материнская плата с драйверами шаговых двигателей TMC2209. Для принтеров Creality Ender 3. Спарсено с AliExpress.",
    category: "diy",
    donor: "aliexpress",
    donorLabel: "AliExpress",
    priceSolo: 22000,
    priceGroup: 16500,
    discountPercent: 25,
    img: "https://images.unsplash.com/photo-1631553127988-294715560938?q=80&w=600&auto=format&fit=crop",
    poolCollected: 2,
    poolTotal: 4,
    timeLeft: "11:20:00",
    avatars: ["🖨️", "⚙️"],
    chatHistory: [],
    botReplies: ["Принтер стал работать абсолютно бесшумно."]
  },
  {
    id: "diy-9",
    title: "Цифровой мультиметр умный FNIRSI S1",
    description: "Автоматический выбор диапазонов, цветной ЖК-дисплей с подсветкой, измерение емкости, диодов, температуры, NCV тест. Спарсено с Ozon.",
    category: "diy",
    donor: "ozon",
    donorLabel: "Ozon",
    priceSolo: 14000,
    priceGroup: 10500,
    discountPercent: 25,
    img: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=600&auto=format&fit=crop",
    poolCollected: 4,
    poolTotal: 5,
    timeLeft: "09:30:00",
    avatars: ["📟", "💡", "🔌", "🔧"],
    chatHistory: [],
    botReplies: ["Стильный, тонкий как телефон.", "Автоматический режим работает четко."]
  },
  {
    id: "diy-10",
    title: "Набор сервоприводов SG90 Micro Servo (10-Pack)",
    description: "Шестеренчатый микросервопривод 9г, крутящий момент 1.6 кг/см, рабочий угол 180 градусов. В комплекте 10 штук. Спарсено с AliExpress.",
    category: "diy",
    donor: "aliexpress",
    donorLabel: "AliExpress",
    priceSolo: 8000,
    priceGroup: 5600,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop",
    poolCollected: 5,
    poolTotal: 8,
    timeLeft: "04:50:00",
    avatars: ["⚙️", "🦾", "👾", "🤖", "🔧"],
    chatHistory: [],
    botReplies: ["Для авиамоделей и Arduino проектов стандарт."]
  },

  // --- CLOTHING ---
  {
    id: "clot-1",
    title: "Слинг-рюкзак Cyber Techwear Tactical Shield",
    description: "Влагозащитная тактическая сумка-кобура со светоотражающими вставками, отсеками под планшет и аксессуары. Спарсено с Wildberries.",
    category: "clothing",
    donor: "wildberries",
    donorLabel: "Wildberries",
    priceSolo: 14000,
    priceGroup: 9800,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop",
    poolCollected: 2,
    poolTotal: 5,
    timeLeft: "12:15:30",
    avatars: ["🥷", "⚡"],
    chatHistory: [
      { sender: "Алишер", text: "Кто заказывал одежду techwear? Как качество швов?", time: "08:12" }
    ],
    botReplies: ["Для города рюкзак отличный, очень компактный.", "Добавился в группу, ждем сбор остальных."]
  },
  {
    id: "clot-2",
    title: "Брюки карго Techwear Водонепроницаемые",
    description: "Износостойкая ткань рипстоп с тефлоновым покрытием, анатомический крой, множество карманов на молниях. Спарсено с Wildberries.",
    category: "clothing",
    donor: "wildberries",
    donorLabel: "Wildberries",
    priceSolo: 22000,
    priceGroup: 15400,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=600&auto=format&fit=crop",
    poolCollected: 3,
    poolTotal: 6,
    timeLeft: "08:22:00",
    avatars: ["👖", "🥷", "👟"],
    chatHistory: [],
    botReplies: ["Вода реально скатывается, на осень идеальные штаны.", "Размерная сетка правильная."]
  },
  {
    id: "clot-3",
    title: "Анорак куртка мембранная Techwear Black Shield",
    description: "Ветрозащитная ветровка анорак, трехслойная мембрана 10000/10000, проклеенные швы, японские молнии YKK. Спарсено с Wildberries.",
    category: "clothing",
    donor: "wildberries",
    donorLabel: "Wildberries",
    priceSolo: 38000,
    priceGroup: 26600,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=600&auto=format&fit=crop",
    poolCollected: 4,
    poolTotal: 6,
    timeLeft: "05:11:00",
    avatars: ["🥷", "🧥", "🌧️", "⚡"],
    chatHistory: [],
    botReplies: ["Очень футуристично выглядит.", "Мембрана дышит, в сильный дождь сухой."]
  },
  {
    id: "clot-4",
    title: "Сумка нагрудная тактическая Collab Chest Bag v2",
    description: "Крепится на грудь, модульная система MOLLE, водозащитный полиэстер 900D. Спарсено с Wildberries.",
    category: "clothing",
    donor: "wildberries",
    donorLabel: "Wildberries",
    priceSolo: 9000,
    priceGroup: 6300,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=600&auto=format&fit=crop",
    poolCollected: 4,
    poolTotal: 5,
    timeLeft: "09:30:00",
    avatars: ["🎒", "🕶️", "🥷", "🐼"],
    chatHistory: [],
    botReplies: ["Удобно для велосипеда и самоката, все под рукой."]
  },
  {
    id: "clot-5",
    title: "Кроссовки футуристические Cyber High-Top Sneakers",
    description: "Амортизирующая подошва сложной геометрической формы, дышащий верх Primeknit, быстрая шнуровка. Спарсено с Wildberries.",
    category: "clothing",
    donor: "wildberries",
    donorLabel: "Wildberries",
    priceSolo: 28000,
    priceGroup: 19600,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop",
    poolCollected: 5,
    poolTotal: 8,
    timeLeft: "11:20:00",
    avatars: ["👟", "⚡", "🦁", "🐼", "🐻"],
    chatHistory: [],
    botReplies: ["Внешний вид собирает взгляды.", "Удобные, мягкие при ходьбе."]
  },
  {
    id: "clot-6",
    title: "Светоотражающая ветровка Cyber Reflective Jacket",
    description: "Полностью рефлективная ткань, светящаяся в темноте при попадании лучей света. Спарсено с Ozon.",
    category: "clothing",
    donor: "ozon",
    donorLabel: "Ozon",
    priceSolo: 25000,
    priceGroup: 18750,
    discountPercent: 25,
    img: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=600&auto=format&fit=crop",
    poolCollected: 2,
    poolTotal: 4,
    timeLeft: "14:10:00",
    avatars: ["🧥", "✨"],
    chatHistory: [],
    botReplies: ["Ночью светится невероятно ярко.", "Для вечерних прогулок топ."]
  },
  {
    id: "clot-7",
    title: "Ботинки треккинговые водонепроницаемые Collab Boot X",
    description: "Мембрана Gore-Tex, подошва Vibram с отличным сцеплением, защитный резиновый рант. Спарсено с Kaspi.",
    category: "clothing",
    donor: "kaspi",
    donorLabel: "Kaspi",
    priceSolo: 56000,
    priceGroup: 44800,
    discountPercent: 20,
    img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=600&auto=format&fit=crop",
    poolCollected: 3,
    poolTotal: 5,
    timeLeft: "06:15:00",
    avatars: ["🥾", "🏔️", "🏕️"],
    chatHistory: [],
    botReplies: ["Для походов в горы Алматы идеальные ботинки.", "Ногу держат прочно."]
  },
  {
    id: "clot-8",
    title: "Толстовка Techwear флисовая с высоким горлом",
    description: "Теплый флис плотностью 300 г/м², встроенная балаклава в капюшон, нагрудные карманы. Спарсено с Wildberries.",
    category: "clothing",
    donor: "wildberries",
    donorLabel: "Wildberries",
    priceSolo: 18000,
    priceGroup: 12600,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=600&auto=format&fit=crop",
    poolCollected: 7,
    poolTotal: 10,
    timeLeft: "02:40:00",
    avatars: ["🧥", "🔥", "🐻", "🐝", "🐯", "🦁", "🎒"],
    chatHistory: [],
    botReplies: ["Очень теплая, заменяет шарф.", "Капюшон глубокий."]
  },
  {
    id: "clot-9",
    title: "Кошелек алюминиевый с RFID защитой",
    description: "Вмещает до 6 карт, механизм быстрого выдвижения карт по клику. Спарсено с Kaspi.",
    category: "clothing",
    donor: "kaspi",
    donorLabel: "Kaspi",
    priceSolo: 8000,
    priceGroup: 6400,
    discountPercent: 20,
    img: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=600&auto=format&fit=crop",
    poolCollected: 4,
    poolTotal: 5,
    timeLeft: "08:15:00",
    avatars: ["💳", "💼", "🦊", "🤖"],
    chatHistory: [],
    botReplies: ["Компактный картхолдер.", "Карты вылетают веером, удобно."]
  },
  {
    id: "clot-10",
    title: "Сумка кросс-боди водонепроницаемая через плечо",
    description: "Прочный нейлон Cordura, японские молнии, регулируемый ремень. Спарсено с Wildberries.",
    category: "clothing",
    donor: "wildberries",
    donorLabel: "Wildberries",
    priceSolo: 11000,
    priceGroup: 7700,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=600&auto=format&fit=crop",
    poolCollected: 5,
    poolTotal: 8,
    timeLeft: "04:30:00",
    avatars: ["🎒", "🥷", "🐼", "🦊", "🐻"],
    chatHistory: [],
    botReplies: ["Для ключей, документов и телефона самое то."]
  },

  // --- AUTO ---
  {
    id: "auto-1",
    title: "Видеорегистратор 70mai Dash Cam Pro Plus+ A500S",
    description: "Разрешение 2.7K 1944P, встроенный GPS и ADAS, ночная съемка 3D DNR, круглосуточное наблюдение за парковкой. Спарсено с AliExpress.",
    category: "auto",
    donor: "aliexpress",
    donorLabel: "AliExpress",
    priceSolo: 35000,
    priceGroup: 26250,
    discountPercent: 25,
    img: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600&auto=format&fit=crop",
    poolCollected: 6,
    poolTotal: 8,
    timeLeft: "05:10:00",
    avatars: ["🚗", "🎥", "🔋", "🦾", "🦊", "🐼"],
    chatHistory: [],
    botReplies: ["Картинка ночью отличная, номера машин читаются.", "Сзади камеру подключали?"]
  },
  {
    id: "auto-2",
    title: "Автомобильный сканер OBD2 Ancel AD310",
    description: "Диагностический автосканер ошибок двигателя на русском языке, совместим со всеми бензиновыми и дизельными авто. Спарсено с AliExpress.",
    category: "auto",
    donor: "aliexpress",
    donorLabel: "AliExpress",
    priceSolo: 12000,
    priceGroup: 8400,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=600&auto=format&fit=crop",
    poolCollected: 3,
    poolTotal: 5,
    timeLeft: "09:44:00",
    avatars: ["🛠️", "🚗", "⚙️"],
    chatHistory: [],
    botReplies: ["Спас от ненужной поездки на СТО, стер ошибку лямбды.", "Быстро сканирует."]
  },
  {
    id: "auto-3",
    title: "Портативный компрессор Xiaomi Mijia Air Compressor 2",
    description: "Быстрая накачка шин, встроенный аккумулятор, предустановленные режимы давления, функция автостопа при достижении давления. Спарсено с Kaspi.",
    category: "auto",
    donor: "kaspi",
    donorLabel: "Kaspi",
    priceSolo: 22000,
    priceGroup: 16500,
    discountPercent: 25,
    img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop",
    poolCollected: 8,
    poolTotal: 10,
    timeLeft: "01:40:00",
    avatars: ["🚗", "🚴", "🐼", "🐻", "🐝", "🐯", "🦁", "🎒"],
    chatHistory: [],
    botReplies: ["Накачивает колесо R16 за 5 минут.", "Заряжается от Type-C."]
  },
  {
    id: "auto-4",
    title: "Магнитный держатель Baseus MagSafe",
    description: "Крепление в дефлектор автомобиля, 16 мощных магнитов NdFeB, вращение на 360 градусов. Для iPhone 12-15. Спарсено с AliExpress.",
    category: "auto",
    donor: "aliexpress",
    donorLabel: "AliExpress",
    priceSolo: 7000,
    priceGroup: 4900,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=600&auto=format&fit=crop",
    poolCollected: 4,
    poolTotal: 5,
    timeLeft: "08:12:00",
    avatars: ["📱", "🚗", "⚡", "🔌"],
    chatHistory: [],
    botReplies: ["Телефон держит на кочках намертво.", "Качество пластика хорошее."]
  },
  {
    id: "auto-5",
    title: "Набор светодиодных ламп H7 Led Car Bulbs",
    description: "Мощность 80W, яркость 16000LM, белый свет 6000K, активное охлаждение вентилятором. Комплект 2 шт. Спарсено с Wildberries.",
    category: "auto",
    donor: "wildberries",
    donorLabel: "Wildberries",
    priceSolo: 15000,
    priceGroup: 10500,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=600&auto=format&fit=crop",
    poolCollected: 2,
    poolTotal: 4,
    timeLeft: "11:20:00",
    avatars: ["💡", "🚗"],
    chatHistory: [],
    botReplies: ["Светят очень ярко, СТГ четкая.", "Ошибок на бортовике нет."]
  },
  {
    id: "auto-6",
    title: "Органайзер в багажник из экокожи Premium",
    description: "Складной саквояж из экокожи с крышкой, прочные перегородки, липучки на дне для фиксации в багажнике. Спарсено с Wildberries.",
    category: "auto",
    donor: "wildberries",
    donorLabel: "Wildberries",
    priceSolo: 14000,
    priceGroup: 9800,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop",
    poolCollected: 5,
    poolTotal: 6,
    timeLeft: "07:15:00",
    avatars: ["💼", "🚗", "🦊", "🤖", "🐼"],
    chatHistory: [],
    botReplies: ["Багажник стал выглядеть аккуратно.", "Материал качественный, строчка ровная."]
  },
  {
    id: "auto-7",
    title: "Автомобильное зарядное устройство Baseus 120W",
    description: "В прикуриватель, порты USB-C + USB-A, поддержка быстрой зарядки PPS/PD/QC для ноутбуков и smartphones. Спарсено с AliExpress.",
    category: "auto",
    donor: "aliexpress",
    donorLabel: "AliExpress",
    priceSolo: 10000,
    priceGroup: 7000,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1504215680048-db150047974b?q=80&w=600&auto=format&fit=crop",
    poolCollected: 3,
    poolTotal: 5,
    timeLeft: "09:30:00",
    avatars: ["🔌", "🚗", "⚡"],
    chatHistory: [],
    botReplies: ["Быстрая зарядка идет на Самсунг и Айфон."]
  },
  {
    id: "auto-8",
    title: "Портативный автопылесос Baseus A2 Cleaner",
    description: "Сила всасывания 5000Па, беспроводной, тройной фильтр, насадка 2-в-1 для труднодоступных мест. Спарсено с Ozon.",
    category: "auto",
    donor: "ozon",
    donorLabel: "Ozon",
    priceSolo: 16000,
    priceGroup: 12000,
    discountPercent: 25,
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600&auto=format&fit=crop",
    poolCollected: 4,
    poolTotal: 6,
    timeLeft: "05:50:00",
    avatars: ["🧹", "🚗", "🦊", "🐾"],
    chatHistory: [],
    botReplies: ["Крошки с сидений убирает отлично.", "Компактный, лежит в подстаканнике."]
  },
  {
    id: "auto-9",
    title: "Проекционный дисплей на стекло HUD OBD2",
    description: "Выводит скорость, обороты, температуру ОЖ и напряжение на лобовое стекло, предупреждение о превышении. Спарсено с AliExpress.",
    category: "auto",
    donor: "aliexpress",
    donorLabel: "AliExpress",
    priceSolo: 15000,
    priceGroup: 10500,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=600&auto=format&fit=crop",
    poolCollected: 2,
    poolTotal: 4,
    timeLeft: "12:40:00",
    avatars: ["📊", "🚗"],
    chatHistory: [],
    botReplies: ["Не нужно отвлекаться от дороги, скорость перед глазами."]
  },
  {
    id: "auto-10",
    title: "Bluetooth FM трансмиттер Baseus",
    description: "Проигрывание музыки с USB-флешки или телефона, Hands-Free звонки, зарядные порты QC3.0. Спарсено с Wildberries.",
    category: "auto",
    donor: "wildberries",
    donorLabel: "Wildberries",
    priceSolo: 8000,
    priceGroup: 5600,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop",
    poolCollected: 6,
    poolTotal: 8,
    timeLeft: "03:15:00",
    avatars: ["📻", "🚗", "👾", "🤖", "🔧", "🔋"],
    chatHistory: [],
    botReplies: ["Музыка играет без помех, коннектится быстро."]
  },

  // --- COSMETICS ---
  {
    id: "cosm-1",
    title: "Очищающая пенка Shiseido Men Face Cleanser",
    description: "Высокоэффективное очищающее средство для мужской кожи, убирает загрязнения и кожный жир, увлажняет. Спарсено с Ozon.",
    category: "cosmetics",
    donor: "ozon",
    donorLabel: "Ozon",
    priceSolo: 18000,
    priceGroup: 13500,
    discountPercent: 25,
    img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop",
    poolCollected: 4,
    poolTotal: 5,
    timeLeft: "08:15:00",
    avatars: ["🧼", "🧔", "🦊", "🐼"],
    chatHistory: [],
    botReplies: ["После умывания кожа мягкая, не сушит.", "Расход минимальный, хватает надолго."]
  },
  {
    id: "cosm-2",
    title: "Умная щеточка для лица Foreo Luna 4 Men",
    description: "Силиконовая щеточка для глубокого очищения кожи лица и массажа, передает пульсации T-Sonic. Спарсено с Ozon.",
    category: "cosmetics",
    donor: "ozon",
    donorLabel: "Ozon",
    priceSolo: 98000,
    priceGroup: 78400,
    discountPercent: 20,
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop",
    poolCollected: 2,
    poolTotal: 4,
    timeLeft: "11:22:00",
    avatars: ["🧼", "🧔"],
    chatHistory: [],
    botReplies: ["Черные точки убирает отлично.", "Зарядку держит вечно."]
  },
  {
    id: "cosm-3",
    title: "Сыворотка с ретинолом The Ordinary Retinol 1%",
    description: "Безводный раствор 1% чистого ретинола в сквалане, борется с признаками старения кожи, выравнивает тон. Спарсено с Wildberries.",
    category: "cosmetics",
    donor: "wildberries",
    donorLabel: "Wildberries",
    priceSolo: 9000,
    priceGroup: 6300,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop",
    poolCollected: 8,
    poolTotal: 10,
    timeLeft: "02:15:00",
    avatars: ["🧴", "✨", "🐼", "🐻", "🐝", "🐯", "🦁", "🎒"],
    chatHistory: [],
    botReplies: ["Оригинал, шелушения после использования минимальные.", "Кожа лица стала ровнее."]
  },
  {
    id: "cosm-4",
    title: "Интенсивный увлажняющий крем Clinique",
    description: "Гель-крем с авторепликацией влаги на 100 часов, содержит гиалуроновую кислоту и алоэ. Спарсено с Wildberries.",
    category: "cosmetics",
    donor: "wildberries",
    donorLabel: "Wildberries",
    priceSolo: 19000,
    priceGroup: 13300,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=600&auto=format&fit=crop",
    poolCollected: 5,
    poolTotal: 8,
    timeLeft: "05:12:00",
    avatars: ["🧴", "🐼", "🦊", "🐻", "🦁"],
    chatHistory: [],
    botReplies: ["Легкая текстура, быстро впитывается.", "Отлично увлажняет."]
  },
  {
    id: "cosm-5",
    title: "Очищающий гель CeraVe Hydrating Cleanser 473ml",
    description: "Для нормальной и сухой кожи лица и тела, содержит 3 церамида и гиалуроновую кислоту. Спарсено с Kaspi.",
    category: "cosmetics",
    donor: "kaspi",
    donorLabel: "Kaspi",
    priceSolo: 11000,
    priceGroup: 8800,
    discountPercent: 20,
    img: "https://images.unsplash.com/photo-1608248597481-496100c8c836?q=80&w=600&auto=format&fit=crop",
    poolCollected: 4,
    poolTotal: 5,
    timeLeft: "09:30:00",
    avatars: ["🧼", "🧴", "🦊", "🤖"],
    chatHistory: [],
    botReplies: ["Базовая умывалка, дерматологи рекомендуют."]
  },
  {
    id: "cosm-6",
    title: "Мужской угольный скраб L'Oreal Men Expert",
    description: "Скраб против черных точек с черным углем и отшелушивающими микрочастицами. Спарсено с Wildberries.",
    category: "cosmetics",
    donor: "wildberries",
    donorLabel: "Wildberries",
    priceSolo: 6000,
    priceGroup: 4200,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=600&auto=format&fit=crop",
    poolCollected: 3,
    poolTotal: 5,
    timeLeft: "06:12:00",
    avatars: ["🧼", "🧔", "👾"],
    chatHistory: [],
    botReplies: ["Хорошо очищает поры.", "Лицо после него свежее."]
  },
  {
    id: "cosm-7",
    title: "Набор корейских тканевых масок (10 шт.)",
    description: "10 увлажняющих и питательных тканевых масок с экстрактами алоэ, коллагена, зеленого чая. Спарсено с Ozon.",
    category: "cosmetics",
    donor: "ozon",
    donorLabel: "Ozon",
    priceSolo: 7000,
    priceGroup: 5250,
    discountPercent: 25,
    img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop",
    poolCollected: 6,
    poolTotal: 8,
    timeLeft: "04:15:00",
    avatars: ["✨", "🎭", "🦊", "🐼", "🐨", "🦁"],
    chatHistory: [],
    botReplies: ["Каждая маска хорошо пропитана сывороткой.", "Отличный набор на неделю."]
  },
  {
    id: "cosm-8",
    title: "Бальзам для губ Hydro-Glow (3-Pack)",
    description: "Защитный гигиенический бальзам для губ, масло ши и витамин Е. Комплект из 3 штук. Спарсено с Wildberries.",
    category: "cosmetics",
    donor: "wildberries",
    donorLabel: "Wildberries",
    priceSolo: 4000,
    priceGroup: 2800,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=600&auto=format&fit=crop",
    poolCollected: 2,
    poolTotal: 5,
    timeLeft: "12:10:00",
    avatars: ["💄", "✨"],
    chatHistory: [],
    botReplies: ["Спасает губы от обветривания зимой.", "Приятный легкий запах."]
  },
  {
    id: "cosm-9",
    title: "Ультразвуковой массажер для кожи вокруг глаз",
    description: "Микротоковый лифтинг-массажер, термомассаж 42°C, синий/красный спектр света. Спарсено с AliExpress.",
    category: "cosmetics",
    donor: "aliexpress",
    donorLabel: "AliExpress",
    priceSolo: 15000,
    priceGroup: 10500,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1614859324967-bdf461f5769c?q=80&w=600&auto=format&fit=crop",
    poolCollected: 4,
    poolTotal: 6,
    timeLeft: "08:11:00",
    avatars: ["✨", "⚡", "🦾", "👾"],
    chatHistory: [],
    botReplies: ["Отеки под глазами убирает за 5 минут утром.", "Удобная USB зарядка."]
  },
  {
    id: "cosm-10",
    title: "Масло для бороды Premium Beard Oil",
    description: "Аргановое масло, масло жожоба и кедра, смягчает щетину, способствует росту бороды. Спарсено с Wildberries.",
    category: "cosmetics",
    donor: "wildberries",
    donorLabel: "Wildberries",
    priceSolo: 9000,
    priceGroup: 6300,
    discountPercent: 30,
    img: "https://images.unsplash.com/photo-1626015276904-7b961c024d27?q=80&w=600&auto=format&fit=crop",
    poolCollected: 5,
    poolTotal: 8,
    timeLeft: "05:15:00",
    avatars: ["🧔", "🧴", "🐼", "🦊", "🐻"],
    chatHistory: [],
    botReplies: ["Борода становится мягкой и послушной.", "Запах дерева классный."]
  }
];

// --- STATE MANAGER ---
const state = {
  user: {
    authenticated: false,
    points: 2000,
    activeBoosts: [],
    gender: "male",
    age: 23,
    city: "Алматы",
    budget: 60000,
    interests: ["electronics", "gadgets"]
  },
  activePage: "screen-onboarding",
  selectedProductId: null,
  activePool: null, // joined pool reference
  currentCategoryFilter: "all",
  searchQuery: "",
  layoutMode: "mobile", // "mobile" or "desktop"
  chatTimer: null,
  countdownTimer: null,
  selectedShipping: "air",
  shippingCost: 2800,
  
  // Investor & Order History State
  orderHistory: [
    { id: "CB-4122-KZ", title: "Беспроводные ANC Наушники Sony WH-CH720N Blue", date: "02.06.2026", cost: 39000, saving: 13000, market: "Ozon", status: "delivered", category: "gadgets" },
    { id: "CB-2104-KZ", title: "Умный паяльник TS101 Mini Smart Station", date: "15.05.2026", cost: 13860, saving: 5940, market: "AliExpress", status: "delivered", category: "diy" }
  ],
  
  // Alert Banner Sim States
  alertSimTimer1: null,
  alertSimTimer2: null
};

// --- DOM ELEMENTS REFERENCE ---
const elements = {
  statusTime: document.getElementById("status-time"),
  phoneWrapper: document.getElementById("phone-wrapper"),
  btnEsimStart: document.getElementById("btn-esim-start"),
  authLoader: document.getElementById("auth-loader"),
  authStatusText: document.getElementById("auth-status-text"),
  splashView: document.getElementById("splash-view"),
  wizardView: document.getElementById("wizard-view"),
  btnSubmitProfile: document.getElementById("btn-submit-profile"),
  
  // Registration sliders
  budgetValueText: document.getElementById("budget-value-text"),
  wizardBudgetSlider: document.getElementById("wizard-budget-slider"),
  
  // Layout switcher buttons
  btnModeMobile: document.getElementById("btn-mode-mobile"),
  btnModeDesktop: document.getElementById("btn-mode-desktop"),

  // Feed elements
  feedCityLabel: document.querySelector(".user-city-name-val"),
  headerPointsVal: document.getElementById("header-points-val"), // desktop & mobile
  feedAiGrid: document.getElementById("feed-ai-matched-grid"),
  feedLocalList: document.getElementById("feed-local-list"),
  heroBanner: document.getElementById("hero-banner"),
  localSectionTitle: document.getElementById("local-section-title"),
  desktopSearchInput: document.getElementById("desktop-search-input"),
  catTabs: document.querySelectorAll(".cat-tab"),

  // Sidebar controls
  sidebarBudgetText: document.getElementById("sidebar-budget-text"),
  sidebarBudgetSlider: document.getElementById("sidebar-budget-slider"),
  sidebarChips: document.getElementById("sidebar-chips"),
  sidebarPromoCabin: document.getElementById("sidebar-promo-cabin"),
  sidebarSavingVal: document.getElementById("sidebar-saving-val"),

  // Navigations
  bottomNavbar: document.getElementById("app-bottom-navbar"),
  navItems: document.querySelectorAll(".nav-item"),
  navItemInvestor: document.getElementById("nav-item-investor"),
  headerProfileMenu: document.getElementById("header-profile-menu"),
  
  // Details elements
  btnDetailBack: document.getElementById("btn-detail-back"),
  btnDetailShare: document.getElementById("btn-detail-share"),
  detailMainImg: document.getElementById("detail-main-img"),
  detailMarketBadge: document.getElementById("detail-market-badge"),
  detailProductTitle: document.getElementById("detail-product-title"),
  detailProductDesc: document.getElementById("detail-product-desc"),
  detailSavingsBadge: document.getElementById("detail-savings-badge"),
  detailTierFill: document.getElementById("detail-tier-fill"),
  detailTierHelper: document.getElementById("detail-tier-helper"),
  detailAlonePrice: document.getElementById("detail-alone-price"),
  detailGroupPrice: document.getElementById("detail-group-price"),
  btnBuyAloneAction: document.getElementById("btn-buy-alone-action"),
  btnBuyGroupAction: document.getElementById("btn-buy-group-action"),
  detailRecList: document.getElementById("detail-rec-list"),

  // Cart/Chat elements
  cartEmptyState: document.getElementById("cart-empty-state"),
  cartContentWrapper: document.getElementById("cart-content-wrapper"),
  cartPoolCard: document.getElementById("cart-pool-card"),
  cartChatSection: document.getElementById("cart-chat-section"),
  cartPoolImg: document.getElementById("cart-pool-img"),
  cartPoolMarket: document.getElementById("cart-pool-market"),
  cartPoolTitle: document.getElementById("cart-pool-title"),
  cartPoolGroupPrice: document.getElementById("cart-pool-group-price"),
  cartPoolOldPrice: document.getElementById("cart-pool-old-price"),
  cartPoolCountdown: document.getElementById("cart-pool-countdown"),
  cartPoolCollected: document.getElementById("cart-pool-collected"),
  cartPoolTotal: document.getElementById("cart-pool-total"),
  cartPoolProgressFill: document.getElementById("cart-pool-progress-fill"),
  btnShareGroupBuy: document.getElementById("btn-share-group-buy"),
  chatOnlineCount: document.getElementById("chat-online-count"),
  chatMessagesBox: document.getElementById("chat-messages-box"),
  chatMsgInput: document.getElementById("chat-msg-input"),
  btnSendChat: document.getElementById("btn-send-chat"),
  btnCartToFeed: document.getElementById("btn-cart-to-feed"),
  btnOpenCheckout: document.getElementById("btn-open-checkout"),

  // Checkout modal drawer
  checkoutOverlay: document.getElementById("checkout-overlay"),
  checkoutDrawer: document.getElementById("checkout-drawer"),
  btnCloseCheckout: document.getElementById("btn-close-checkout"),
  checkoutCityLabel: document.getElementById("checkout-city-label"),
  checkoutName: document.getElementById("checkout-name"),
  checkoutAddress: document.getElementById("checkout-address"),
  shippingCards: document.querySelectorAll(".shipping-method-card"),
  breakdownSoloPrice: document.getElementById("breakdown-solo-price"),
  breakdownDiscount: document.getElementById("breakdown-discount"),
  breakdownShippingCost: document.getElementById("breakdown-shipping-cost"),
  breakdownTotalPrice: document.getElementById("breakdown-total-price"),
  btnProcessPayment: document.getElementById("btn-process-payment"),
  payTypeBtns: document.querySelectorAll(".payment-selector button"),

  // Success view
  checkoutSuccessView: document.getElementById("checkout-success-view"),
  successShippingType: document.getElementById("success-shipping-type"),
  successTotalPaid: document.getElementById("success-total-paid"),
  btnSuccessClose: document.getElementById("btn-success-close"),

  // In-App Alert banner
  alertBanner: document.getElementById("app-alert-banner"),
  alertDesc: document.getElementById("alert-banner-desc"),
  btnCloseAlert: document.getElementById("btn-close-alert"),

  // Investor screen DOMs
  cabinTotalSaved: document.getElementById("cabin-total-saved"),
  cabinOrdersCount: document.getElementById("cabin-orders-count"),
  cabinActivePools: document.getElementById("cabin-active-pools"),
  cabinGraphsList: document.getElementById("cabin-graphs-list"),
  cabinHistoryList: document.getElementById("cabin-history-list"),

  // Toast
  toastNotify: document.getElementById("toast-notify"),
  toastText: document.getElementById("toast-text"),

  // Interactive canvas
  interactiveCanvas: document.getElementById("interactive-canvas")
};

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initClock();
  initLayoutSwitcher();
  initOnboardingHandlers();
  initNavigationHandlers();
  initProductDetailHandlers();
  initCartChatHandlers();
  initCheckoutHandlers();
  initRippleEffect();
  
  // Start Canvas animation
  initInteractiveCanvas();
});

// --- HELPER FUNCTIONS ---
function initClock() {
  const updateClock = () => {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    elements.statusTime.textContent = `${hours}:${minutes}`;
  };
  updateClock();
  setInterval(updateClock, 30000);
}

function showToast(text) {
  elements.toastText.textContent = text;
  elements.toastNotify.classList.add("show");
  setTimeout(() => {
    elements.toastNotify.classList.remove("show");
  }, 2500);
}

function formatPrice(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₸";
}

// Ripple & Click scale feedbacks
function initRippleEffect() {
  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest(".animated-btn");
    if (!btn) return;

    // Create ripple circle element
    const ripple = document.createElement("span");
    ripple.className = "btn-ripple";

    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;

    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    btn.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 500);
  });
}

// --- DUAL LAYOUT TOGGLE LOGIC ---
function initLayoutSwitcher() {
  const switchLayout = (mode) => {
    state.layoutMode = mode;
    if (mode === "desktop") {
      elements.phoneWrapper.className = "mode-desktop";
      elements.btnModeDesktop.classList.add("active");
      elements.btnModeMobile.classList.remove("active");
    } else {
      elements.phoneWrapper.className = "mode-mobile";
      elements.btnModeMobile.classList.add("active");
      elements.btnModeDesktop.classList.remove("active");
    }
    
    // Rerender feed to adjust grids
    if (state.user.authenticated) {
      renderFeed();
    }
  };

  elements.btnModeMobile.addEventListener("click", () => switchLayout("mobile"));
  elements.btnModeDesktop.addEventListener("click", () => switchLayout("desktop"));
}

// --- ROUTER ---
function navigateTo(pageId) {
  const activePage = document.querySelector(".page.active");
  if (activePage) {
    activePage.classList.remove("active");
  }
  
  if (pageId !== "screen-cart") {
    clearInterval(state.chatTimer);
  }

  // Toggle onboarding header visibility search/profile widgets
  const desktopHeader = document.getElementById("app-desktop-header");
  if (desktopHeader) {
    if (state.user.authenticated) {
      desktopHeader.classList.remove("onboarding-active");
    } else {
      desktopHeader.classList.add("onboarding-active");
    }
  }

  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add("active");
    state.activePage = pageId;
    document.querySelector(".app-container").scrollTop = 0;
    
    if (pageId === "screen-feed") {
      renderFeed();
    } else if (pageId === "screen-cart") {
      renderCart();
      if (state.activePool) {
        startChatSimulation();
        startAlertSimulation(); // Simulated other users joining pool countdown
      }
    } else if (pageId === "screen-investor") {
      renderInvestorCabin();
    }
  }

  elements.navItems.forEach(item => {
    if (item.getAttribute("data-target") === pageId) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// --- CANVAS INTERACTIVE BACKGROUND LOGIC ---
function initInteractiveCanvas() {
  const canvas = elements.interactiveCanvas;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let particles = [];
  const mouse = { x: null, y: null, targetX: null, targetY: null, radius: 160 };

  // Adjust particle count depending on window width
  const getParticleCount = () => {
    return window.innerWidth < 600 ? 30 : 70;
  };

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
  };

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1; // size between 1 and 3px
      this.speedX = (Math.random() - 0.5) * 0.8; // slow movement
      this.speedY = (Math.random() - 0.5) * 0.8;
      this.baseSpeedX = this.speedX;
      this.baseSpeedY = this.speedY;
    }

    update() {
      // Float movement
      this.x += this.speedX;
      this.y += this.speedY;

      // Bounce off screen bounds
      if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
      if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;

      // Mouse Proximity Attraction logic
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          // Calculate attraction vector
          const force = (mouse.radius - dist) / mouse.radius; // stronger force near center
          this.speedX += (dx / dist) * force * 0.05;
          this.speedY += (dy / dist) * force * 0.05;

          // Limit speed inside attraction field
          const maxAttractSpeed = 1.8;
          const speed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);
          if (speed > maxAttractSpeed) {
            this.speedX = (this.speedX / speed) * maxAttractSpeed;
            this.speedY = (this.speedY / speed) * maxAttractSpeed;
          }
        } else {
          // Return to base speed slowly when outside mouse radius
          this.speedX += (this.baseSpeedX - this.speedX) * 0.02;
          this.speedY += (this.baseSpeedY - this.speedY) * 0.02;
        }
      }
    }

    draw() {
      ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
      // Highlight slightly if within mouse radius
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          ctx.fillStyle = `rgba(255, 230, 0, ${0.3 + (1 - dist / mouse.radius) * 0.4})`;
        }
      }
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    const count = getParticleCount();
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  // Linear connections STRICTLY limited to mouse radius
  function drawConnections() {
    if (mouse.x === null || mouse.y === null) return;

    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      const dx1 = mouse.x - p1.x;
      const dy1 = mouse.y - p1.y;
      const dist1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);

      // Check if node is inside mouse radius
      if (dist1 < mouse.radius) {
        // Draw line from mouse to this particle
        const mouseOpacity = (1 - dist1 / mouse.radius) * 0.15;
        ctx.strokeStyle = `rgba(255, 230, 0, ${mouseOpacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.stroke();

        // Draw connections to other particles that are also inside mouse radius
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx2 = mouse.x - p2.x;
          const dy2 = mouse.y - p2.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (dist2 < mouse.radius) {
            const pdx = p1.x - p2.x;
            const pdy = p1.y - p2.y;
            const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

            if (pdist < 90) { // connect close points
              const connectOpacity = (1 - pdist / 90) * (1 - dist1 / mouse.radius) * 0.12;
              ctx.strokeStyle = `rgba(255, 255, 255, ${connectOpacity})`;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Interpolate mouse targets for ultra smooth lines tracking
    if (mouse.targetX !== null && mouse.targetY !== null) {
      if (mouse.x === null) {
        mouse.x = mouse.targetX;
        mouse.y = mouse.targetY;
      } else {
        mouse.x += (mouse.targetX - mouse.x) * 0.15;
        mouse.y += (mouse.targetY - mouse.y) * 0.15;
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    drawConnections();
    requestAnimationFrame(animate);
  }

  // Track events on the window directly
  window.addEventListener("mousemove", (e) => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
  });

  window.addEventListener("mouseleave", () => {
    mouse.targetX = null;
    mouse.targetY = null;
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  animate();
}

// --- SCREEN 1: SPLASH & ONBOARDING ---
function initOnboardingHandlers() {
  elements.btnEsimStart.addEventListener("click", () => {
    elements.btnEsimStart.style.display = "none";
    elements.authLoader.style.display = "flex";
    
    const statuses = [
      "Считывание ключей eSIM чипа...",
      "Установка туннеля TLS 1.3...",
      "Проверка подписи в сети оператора...",
      "Вход успешно верифицирован!"
    ];
    
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < statuses.length) {
        elements.authStatusText.textContent = statuses[currentStep];
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          elements.splashView.style.display = "none";
          elements.wizardView.style.display = "flex";
        }, 500);
      }
    }, 600);
  });

  const genderBtns = document.querySelectorAll("#wizard-view .segmented-btn");
  genderBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      genderBtns.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      state.user.gender = e.target.getAttribute("data-gender");
    });
  });

  const chips = document.querySelectorAll("#wizard-view .interest-chip");
  chips.forEach(chip => {
    chip.addEventListener("click", (e) => {
      e.target.classList.toggle("active");
      const tag = e.target.getAttribute("data-tag");
      
      if (e.target.classList.contains("active")) {
        if (!state.user.interests.includes(tag)) {
          state.user.interests.push(tag);
        }
      } else {
        state.user.interests = state.user.interests.filter(t => t !== tag);
      }
    });
  });

  elements.wizardBudgetSlider.addEventListener("input", (e) => {
    const val = parseInt(e.target.value);
    state.user.budget = val;
    elements.budgetValueText.textContent = formatPrice(val);
    if (elements.sidebarBudgetSlider) {
      elements.sidebarBudgetSlider.value = val;
      elements.sidebarBudgetText.textContent = formatPrice(val);
    }
  });

  elements.btnSubmitProfile.addEventListener("click", () => {
    state.user.age = parseInt(document.getElementById("wizard-age").value) || 23;
    state.user.city = document.getElementById("wizard-city").value;
    state.user.authenticated = true;
    
    document.querySelectorAll(".user-city-name-val").forEach(el => el.textContent = state.user.city);
    elements.localSectionTitle.textContent = `Популярно в городе ${state.user.city}`;
    elements.checkoutCityLabel.textContent = state.user.city;
    
    if (elements.sidebarBudgetSlider && elements.sidebarBudgetText) {
      elements.sidebarBudgetSlider.value = state.user.budget;
      elements.sidebarBudgetText.textContent = formatPrice(state.user.budget);
    }

    renderSidebarChips();
    updatePointsDisplay();
    elements.bottomNavbar.classList.add("visible");
    navigateTo("screen-feed");
    showToast("Профиль настроен! Активирован Smart Match.");
  });
}

function renderSidebarChips() {
  if (!elements.sidebarChips) return;
  elements.sidebarChips.innerHTML = "";
  
  const tagsList = [
    { label: "Электроника", id: "electronics" },
    { label: "Гаджеты", id: "gadgets" },
    { label: "DIY-компоненты", id: "diy" },
    { label: "Одежда", id: "clothing" },
    { label: "Автотовары", id: "auto" },
    { label: "Косметика", id: "cosmetics" }
  ];

  tagsList.forEach(item => {
    const chip = document.createElement("div");
    chip.className = `interest-chip animated-btn ${state.user.interests.includes(item.id) ? "active" : ""}`;
    chip.textContent = item.label;
    chip.setAttribute("data-tag", item.id);
    
    chip.addEventListener("click", (e) => {
      e.target.classList.toggle("active");
      const tag = item.id;
      if (e.target.classList.contains("active")) {
        if (!state.user.interests.includes(tag)) state.user.interests.push(tag);
      } else {
        state.user.interests = state.user.interests.filter(t => t !== tag);
      }
      renderFeed();
    });
    elements.sidebarChips.appendChild(chip);
  });
}

// --- SCREEN 2: MAIN FEED & RECOMMENDATIONS ---
function getMatchedProducts() {
  return PRODUCTS.map(prod => {
    let score = 0;
    if (state.user.interests.includes(prod.category)) score += 30;
    if (prod.priceGroup <= state.user.budget) score += 20;
    else {
      const budgetRatio = prod.priceGroup / state.user.budget;
      if (budgetRatio <= 1.25) score += 5;
      else score -= 20;
    }
    if (state.user.city === "Алматы" && prod.donor === "kaspi") score += 5;
    return { prod, score };
  })
  .sort((a, b) => b.score - a.score)
  .map(item => item.prod);
}

// --- HOT DEALS AI RECOMMENDATION CAROUSEL ---
function getHotDeals() {
  // Filter products that match user's interests AND are near completion
  let list = PRODUCTS.filter(p => {
    const isInterest = state.user.interests.includes(p.category);
    const isNearCompletion = (p.poolCollected / p.poolTotal) >= 0.70;
    return isInterest && isNearCompletion;
  });

  // Pad with other near-completion items if needed
  if (list.length < 3) {
    const otherCompleted = PRODUCTS.filter(p => !list.includes(p) && (p.poolCollected / p.poolTotal) >= 0.70);
    list = list.concat(otherCompleted);
  }

  // Pad with other interest items if still needed
  if (list.length < 3) {
    const otherInterest = PRODUCTS.filter(p => !list.includes(p) && state.user.interests.includes(p.category));
    list = list.concat(otherInterest);
  }

  // Sort by completion percentage descending, limit to 4
  return list.sort((a, b) => {
    const pctA = a.poolCollected / a.poolTotal;
    const pctB = b.poolCollected / b.poolTotal;
    return pctB - pctA;
  }).slice(0, 4);
}

function renderHotDeals() {
  const container = document.getElementById("hot-deals-carousel");
  if (!container) return;
  container.innerHTML = "";

  const hotDeals = getHotDeals();
  hotDeals.forEach(prod => {
    const card = document.createElement("div");
    card.className = "hot-deal-card animated-btn";
    card.setAttribute("data-id", prod.id);

    const percent = Math.round((prod.poolCollected / prod.poolTotal) * 100);

    const ratingVal = ((prod.title.length % 5) * 0.1 + 4.5).toFixed(1);

    card.innerHTML = `
      <div class="hot-deal-image-wrap">
        <img src="${prod.img}" alt="${prod.title}">
        <div class="hot-deal-badge">🔥 Горячий</div>
      </div>
      <div class="hot-deal-content">
        <div>
          <div class="hot-deal-market">${prod.donorLabel} • ★ ${ratingVal}</div>
          <h4 class="hot-deal-title">${prod.title}</h4>
        </div>
        <div>
          <div class="hot-deal-price-row">
            <span class="hot-deal-price-group">${formatPrice(prod.priceGroup)}</span>
            <span class="hot-deal-price-solo">${formatPrice(prod.priceSolo)}</span>
          </div>
          <div class="hot-deal-progress-container">
            <div class="hot-deal-progress-lbl">
              <span>Собрано: <span>${prod.poolCollected}/${prod.poolTotal}</span></span>
              <span>-${prod.discountPercent}%</span>
            </div>
            <div class="pool-progress-bar-bg" style="height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden;">
              <div class="pool-progress-bar-fill" style="width: ${percent}%; height: 100%; background: var(--accent-yellow); box-shadow: 0 0 5px var(--accent-yellow);"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      openProductDetails(prod.id);
    });

    container.appendChild(card);
  });
}

function renderFeed() {
  elements.feedAiGrid.innerHTML = "";
  elements.feedLocalList.innerHTML = "";

  // Render personalized hot deals carousel
  renderHotDeals();

  const sortedList = getMatchedProducts();

  let filteredList = sortedList;
  if (state.currentCategoryFilter !== "all") {
    filteredList = sortedList.filter(p => p.category === state.currentCategoryFilter);
  }

  if (state.searchQuery) {
    const query = state.searchQuery.toLowerCase();
    filteredList = filteredList.filter(p => p.title.toLowerCase().includes(query) || p.description.toLowerCase().includes(query));
  }

  const matchedSlice = filteredList.slice(0, 10);
  if (matchedSlice.length === 0) {
    elements.feedAiGrid.innerHTML = `<div style="grid-column: 1/-1; padding: 24px 0; text-align: center; color: var(--text-gray);">Нет товаров, соответствующих фильтрам. Попробуйте увеличить бюджет.</div>`;
  } else {
    matchedSlice.forEach(p => {
      elements.feedAiGrid.appendChild(createProductCard(p));
    });
  }

  const popularFeedList = PRODUCTS.filter(p => !matchedSlice.includes(p));
  const popularFiltered = state.currentCategoryFilter === "all" 
    ? popularFeedList 
    : popularFeedList.filter(p => p.category === state.currentCategoryFilter);

  popularFiltered.slice(0, 10).forEach(p => {
    elements.feedLocalList.appendChild(createProductCard(p));
  });

  // Update sidebar teaser widget
  let totalSavedVal = 0;
  state.orderHistory.forEach(item => totalSavedVal += item.saving);
  elements.sidebarSavingVal.textContent = formatPrice(totalSavedVal);
}

function createProductCard(prod) {
  const card = document.createElement("div");
  card.className = "product-card animated-btn";
  card.setAttribute("data-id", prod.id);

  const percent = Math.round((prod.poolCollected / prod.poolTotal) * 100);

  let avatarHTML = "";
  prod.avatars.slice(0, 3).forEach(av => {
    avatarHTML += `<div class="pool-avatar-circle">${av}</div>`;
  });
  if (prod.avatars.length > 3) {
    avatarHTML += `<div class="pool-avatar-circle">+${prod.avatars.length - 3}</div>`;
  }

  const ratingVal = ((prod.title.length % 5) * 0.1 + 4.5).toFixed(1);

  card.innerHTML = `
    <div class="card-top-bar">
      <span class="market-badge ${prod.donor}">${prod.donorLabel}</span>
      <span class="card-rating-badge">★ ${ratingVal}</span>
    </div>
    <div class="card-image-wrap">
      <img src="${prod.img}" alt="${prod.title}">
    </div>
    <div class="card-info">
      <h4 class="card-product-title">${prod.title}</h4>
      <p class="card-product-desc">${prod.description}</p>
      <div class="card-price-row">
        <span class="price-group">${formatPrice(prod.priceGroup)}</span>
        <span class="price-individual">${formatPrice(prod.priceSolo)}</span>
      </div>
      <div class="card-pool-container">
        <div class="pool-status-label">
          <span>Собрано: ${prod.poolCollected}/${prod.poolTotal}</span>
          <span>-${prod.discountPercent}%</span>
        </div>
        <div class="pool-progress-bar-bg">
          <div class="pool-progress-bar-fill" style="width: ${percent}%;"></div>
        </div>
        <div class="pool-avatars-row">
          ${avatarHTML}
        </div>
      </div>
    </div>
  `;

  card.addEventListener("click", () => {
    openProductDetails(prod.id);
  });

  return card;
}

function initNavigationHandlers() {
  // Brand logo click to go to feed
  const logo = document.getElementById("desktop-logo");
  if (logo) {
    logo.addEventListener("click", () => {
      if (state.user.authenticated) {
        navigateTo("screen-feed");
      }
    });
  }

  // Cabin back button click
  const cabinBack = document.getElementById("btn-cabin-back");
  if (cabinBack) {
    cabinBack.addEventListener("click", () => {
      navigateTo("screen-feed");
    });
  }

  // Cabin sub-tab switcher for Analytics vs Boost Shop
  const cabinTabBtns = document.querySelectorAll(".cabin-tab-btn");
  cabinTabBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      cabinTabBtns.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      
      const targetTab = e.target.getAttribute("data-tab");
      const analyticsSec = document.getElementById("cabin-section-analytics");
      const boostsSec = document.getElementById("cabin-section-boosts");
      
      if (targetTab === "boosts") {
        analyticsSec.style.display = "none";
        boostsSec.style.display = "block";
        renderBoostShop();
      } else {
        analyticsSec.style.display = "block";
        boostsSec.style.display = "none";
      }
    });
  });

  elements.catTabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      elements.catTabs.forEach(t => t.classList.remove("active"));
      e.target.classList.add("active");
      state.currentCategoryFilter = e.target.getAttribute("data-cat");
      renderFeed();
    });
  });

  elements.desktopSearchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value.trim();
    renderFeed();
  });

  elements.sidebarBudgetSlider.addEventListener("input", (e) => {
    const val = parseInt(e.target.value);
    state.user.budget = val;
    elements.sidebarBudgetText.textContent = formatPrice(val);
    elements.wizardBudgetSlider.value = val;
    elements.budgetValueText.textContent = formatPrice(val);
    renderFeed();
  });

  elements.sidebarPromoCabin.addEventListener("click", () => {
    navigateTo("screen-investor");
  });

  elements.headerProfileMenu.addEventListener("click", () => {
    navigateTo("screen-investor");
  });

  elements.navItems.forEach(item => {
    item.addEventListener("click", (e) => {
      if (!state.user.authenticated) return;
      const target = e.currentTarget.getAttribute("data-target");
      navigateTo(target);
    });
  });

  if (elements.heroBanner) {
    elements.heroBanner.addEventListener("click", () => {
      openProductDetails("elec-1");
    });
  }

  elements.btnCloseAlert.addEventListener("click", (e) => {
    e.stopPropagation();
    hideAlertBanner();
  });
}

// --- SCREEN 3: PRODUCT DETAIL PAGE ---
function initProductDetailHandlers() {
  elements.btnDetailBack.addEventListener("click", () => {
    navigateTo("screen-feed");
  });

  elements.btnDetailShare.addEventListener("click", () => {
    const url = `https://collabbuy.kz/pool/join?id=${state.selectedProductId}`;
    navigator.clipboard.writeText(url).then(() => {
      showToast("Ссылка скопирована!");
    });
  });

  elements.btnBuyAloneAction.addEventListener("click", () => {
    const prod = PRODUCTS.find(p => p.id === state.selectedProductId);
    if (!prod) return;
    openCheckout(prod, false); // buy alone
  });

  elements.btnBuyGroupAction.addEventListener("click", () => {
    const prod = PRODUCTS.find(p => p.id === state.selectedProductId);
    if (!prod) return;
    
    state.activePool = {
      ...prod,
      poolCollected: Math.min(prod.poolCollected + 1, prod.poolTotal)
    };
    navigateTo("screen-cart");
    showToast("Вы добавлены в группу сбора!");
  });
}

function openProductDetails(productId) {
  state.selectedProductId = productId;
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  elements.detailMainImg.src = prod.img;
  elements.detailProductTitle.textContent = prod.title;
  elements.detailProductDesc.textContent = prod.description;

  // Render product detail rating
  const ratingVal = ((prod.title.length % 5) * 0.1 + 4.5).toFixed(1);
  const reviewsCount = prod.title.length * 3 + 12;
  const ratingRow = document.getElementById("detail-rating-row");
  if (ratingRow) {
    ratingRow.innerHTML = `
      <span class="detail-rating-stars">★ ★ ★ ★ ★</span>
      <span class="detail-rating-val">${ratingVal}</span>
      <span class="detail-reviews-count">(${reviewsCount} отзывов)</span>
    `;
  }
  elements.detailAlonePrice.textContent = formatPrice(prod.priceSolo);
  elements.detailGroupPrice.textContent = formatPrice(prod.priceGroup);
  elements.detailMarketBadge.className = `market-badge ${prod.donor}`;
  elements.detailMarketBadge.textContent = prod.donorLabel;

  elements.detailSavingsBadge.textContent = `Сэкономь ${prod.discountPercent}%`;

  const total = prod.poolCollected;
  const target = prod.poolTotal;
  const fill = document.getElementById("detail-tier-fill");
  const helper = document.getElementById("detail-tier-helper");

  if (total >= target) {
    fill.style.width = "100%";
    helper.innerHTML = `Пул <span>полностью укомплектован</span>! Оформите выкуп по оптовой цене.`;
  } else if (total >= 7) {
    fill.style.width = "70%";
    helper.innerHTML = `В пуле уже <span>${total} участников</span>. Нужен еще <span>${target - total} человек</span> до скидки ${prod.discountPercent}%!`;
  } else {
    fill.style.width = "20%";
    helper.innerHTML = `В пуле уже <span>${total} участников</span>. Нужно еще <span>${7 - total} человек</span> до скидки ${Math.round(prod.discountPercent * 0.7)}%!`;
  }

  elements.detailRecList.innerHTML = "";
  const filteredRecs = PRODUCTS.filter(p => p.id !== productId && p.category === prod.category);
  const finalRecs = filteredRecs.length > 0 ? filteredRecs : PRODUCTS.filter(p => p.id !== productId);
  
  finalRecs.slice(0, 4).forEach(item => {
    elements.detailRecList.appendChild(createProductCard(item));
  });

  navigateTo("screen-detail");
}

// --- SCREEN 4: CART & LIVE ROOM (CHAT) ---
function initCartChatHandlers() {
  elements.btnCartToFeed.addEventListener("click", () => navigateTo("screen-feed"));

  elements.btnShareGroupBuy.addEventListener("click", () => {
    if (state.activePool) {
      const url = `https://collabbuy.kz/pool/join?id=${state.activePool.id}`;
      navigator.clipboard.writeText(url).then(() => showToast("Приглашение в пул скопировано!"));
    }
  });

  elements.btnSendChat.addEventListener("click", sendUserChatMessage);
  elements.chatMsgInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendUserChatMessage();
  });

  elements.btnOpenCheckout.addEventListener("click", () => {
    if (state.activePool) {
      openCheckout(state.activePool, true); // buy grouped
    }
  });
}

function renderCart() {
  if (!state.activePool) {
    elements.cartEmptyState.style.display = "flex";
    elements.cartContentWrapper.style.display = "none";
  } else {
    elements.cartEmptyState.style.display = "none";
    elements.cartContentWrapper.style.display = "grid";

    const pool = state.activePool;
    elements.cartPoolImg.src = pool.img;
    elements.cartPoolTitle.textContent = pool.title;
    elements.cartPoolGroupPrice.textContent = formatPrice(pool.priceGroup);
    elements.cartPoolOldPrice.textContent = formatPrice(pool.priceSolo);
    elements.cartPoolCollected.textContent = pool.poolCollected;
    elements.cartPoolTotal.textContent = pool.poolTotal;
    elements.cartPoolMarket.className = `pool-card-market ${pool.donor}`;
    elements.cartPoolMarket.textContent = pool.donorLabel;

    const fillPercent = Math.round((pool.poolCollected / pool.poolTotal) * 100);
    elements.cartPoolProgressFill.style.width = `${fillPercent}%`;
    elements.chatOnlineCount.textContent = `${pool.poolCollected} в сети`;

    elements.chatMessagesBox.innerHTML = "";
    pool.chatHistory.forEach(msg => {
      appendChatMessage(msg.sender, msg.text, msg.sender === "Вы", getMockAvatar(msg.sender));
    });
    
    elements.chatMessagesBox.scrollTop = elements.chatMessagesBox.scrollHeight;
    startCountdown();
  }
}

function getMockAvatar(name) {
  if (name === "Вы") return "👨‍💻";
  const index = Math.abs(name.charCodeAt(0)) % 10;
  const list = ["🦊", "🐼", "🐨", "🦁", "🐙", "🦖", "🦄", "🦉", "🐝", "🐥"];
  return list[index] || "👤";
}

function appendChatMessage(sender, text, isOutgoing, avatar) {
  const wrap = document.createElement("div");
  wrap.className = `chat-bubble-wrap ${isOutgoing ? "outgoing" : "incoming"}`;

  const now = new Date();
  const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

  wrap.innerHTML = `
    <div class="chat-sender-avatar">${avatar}</div>
    <div class="chat-message-content">
      <span class="chat-sender-name">${sender}</span>
      <div class="chat-bubble">
        ${text}
      </div>
      <span class="chat-message-time">${time}</span>
    </div>
  `;

  elements.chatMessagesBox.appendChild(wrap);
  elements.chatMessagesBox.scrollTo({
    top: elements.chatMessagesBox.scrollHeight,
    behavior: "smooth"
  });
}

function sendUserChatMessage() {
  const val = elements.chatMsgInput.value.trim();
  if (!val) return;

  appendChatMessage("Вы", val, true, "👨‍💻");
  elements.chatMsgInput.value = "";

  setTimeout(() => {
    if (!state.activePool) return;
    const senders = ["Артур", "Карина", "Мария", "Нурлан"];
    const randomSender = senders[Math.floor(Math.random() * senders.length)];
    
    const answers = [
      "Тоже согласен, ждем отправки.",
      "Надеюсь доедет быстро авиапочтой.",
      "В Алматы пункт выдачи бесплатный, я туда заказал.",
      "Да, CollabBuy страхует посылку, так что без риска.",
      "Цена огонь! На Wildberries в полтора раза дороже."
    ];
    const text = answers[Math.floor(Math.random() * answers.length)];
    appendChatMessage(randomSender, text, false, getMockAvatar(randomSender));
  }, 1500);
}

function startChatSimulation() {
  clearInterval(state.chatTimer);
  state.chatTimer = setInterval(() => {
    if (!state.activePool) return;
    
    const list = ["Нурлан", "Мария", "Артур", "Карина", "Аскар", "Султан", "Алина"];
    const randomSender = list[Math.floor(Math.random() * list.length)];
    const text = state.activePool.botReplies[Math.floor(Math.random() * state.activePool.botReplies.length)];
    
    appendChatMessage(randomSender, text, false, getMockAvatar(randomSender));
  }, 10000);
}

// Simulated other users joining pool countdown
function startAlertSimulation() {
  clearTimeout(state.alertSimTimer1);
  clearTimeout(state.alertSimTimer2);

  if (!state.activePool) return;
  const pool = state.activePool;

  // Let's assume the pool is Keychron Q1 V2 (currently 8/10 or similar collected)
  // We simulate a user joining after 10 seconds:
  state.alertSimTimer1 = setTimeout(() => {
    if (!state.activePool || state.activePool.id !== pool.id) return;
    state.activePool.poolCollected = Math.min(state.activePool.poolCollected + 1, state.activePool.poolTotal);
    renderCart();
    
    const senders = ["Рустам", "Асель", "Амир"];
    const randomUser = senders[Math.floor(Math.random() * senders.length)];
    appendChatMessage(randomUser, "Привет всем! Тоже вступил в пул, сколько нас теперь?", false, getMockAvatar(randomUser));
    
    // Simulate final user joining to complete pool after another 8 seconds
    state.alertSimTimer2 = setTimeout(() => {
      if (!state.activePool || state.activePool.id !== pool.id) return;
      state.activePool.poolCollected = state.activePool.poolTotal; // 100% full
      renderCart();
      
      appendChatMessage("Система CollabBuy", "🎉 Поздравляем! Минимальная партия сбора собрана. Пул зафиксирован по оптовой цене!", false, "🤖");
      
      // Fire top alert banner notification
      triggerAlertBanner(pool);
    }, 8000);

  }, 10000);
}

function triggerAlertBanner(pool) {
  elements.alertDesc.textContent = `Сбор на клавиатуру «${pool.title}» укомплектован! Заказ выкуплен со скидкой ${pool.discountPercent}%.`;
  elements.alertBanner.classList.add("show");
  
  // Auto-hide after 8 seconds
  setTimeout(() => {
    hideAlertBanner();
  }, 8000);
}

function hideAlertBanner() {
  elements.alertBanner.classList.remove("show");
}

function startCountdown() {
  clearInterval(state.countdownTimer);
  let timer = [2, 41, 15];
  state.countdownTimer = setInterval(() => {
    timer[2]--;
    if (timer[2] < 0) {
      timer[2] = 59;
      timer[1]--;
      if (timer[1] < 0) {
        timer[1] = 59;
        timer[0]--;
        if (timer[0] < 0) {
          clearInterval(state.countdownTimer);
          elements.cartPoolCountdown.textContent = "Пул завершен!";
          return;
        }
      }
    }
    elements.cartPoolCountdown.textContent = `До выкупа: ${timer[0].toString().padStart(2, '0')}:${timer[1].toString().padStart(2, '0')}:${timer[2].toString().padStart(2, '0')}`;
  }, 1000);
}

// --- CHECKOUT FLOW & PAYMENT ---
function initCheckoutHandlers() {
  elements.btnCloseCheckout.addEventListener("click", closeCheckout);
  
  elements.shippingCards.forEach(card => {
    card.addEventListener("click", (e) => {
      elements.shippingCards.forEach(c => c.classList.remove("active"));
      const target = e.currentTarget;
      target.classList.add("active");
      
      state.selectedShipping = target.getAttribute("data-shipping");
      state.shippingCost = parseInt(target.getAttribute("data-cost"));
      
      updateCheckoutBreakdown();
    });
  });

  elements.payTypeBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      elements.payTypeBtns.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
    });
  });

  elements.btnProcessPayment.addEventListener("click", () => {
    const address = elements.checkoutAddress.value.trim();
    if (!address) {
      showToast("Укажите адрес доставки!");
      return;
    }

    elements.btnProcessPayment.textContent = "Верификация eSIM ID...";
    elements.btnProcessPayment.disabled = true;

    setTimeout(() => {
      elements.btnProcessPayment.textContent = "Резервирование Escrow...";
      setTimeout(() => {
        elements.checkoutSuccessView.classList.add("active");
        elements.successShippingType.textContent = document.querySelector(".shipping-method-card.active .shipping-name").textContent;
        elements.successTotalPaid.textContent = elements.breakdownTotalPrice.textContent;
        
        // Add checkout product to Order History List
        addActiveProductToHistory();

        // Points earning logic (Flat 100 Б per purchase)
        const pointsEarned = 100;
        const multiplier = state.user.activeBoosts.includes("boost-5") ? 2 : 1;
        const finalPoints = pointsEarned * multiplier;
        state.user.points += finalPoints;

        // Update success view description to show points earned
        const pDesc = document.querySelector(".checkout-success-view p");
        if (pDesc) {
          if (multiplier === 2) {
            pDesc.innerHTML = `Пул заблокирован. Сделка подтверждена по протоколу eSIM ID Security. Средства зарезервированы на транзитном счете (Safe Escrow) до доставки.<br><br><strong style="color: var(--accent-yellow);">⚡ +${finalPoints} Б начислено (Удвоено бустом Кибер-Самурай!)</strong>`;
          } else {
            pDesc.innerHTML = `Пул заблокирован. Сделка подтверждена по протоколу eSIM ID Security. Средства зарезервированы на транзитном счете (Safe Escrow) до доставки.<br><br><strong style="color: var(--accent-yellow);">⚡ +${finalPoints} Б начислено за покупку!</strong>`;
          }
        }

        updatePointsDisplay();
        
        showToast("Оплата успешно заблокирована!");
      }, 1000);
    }, 1200);
  });

  elements.btnSuccessClose.addEventListener("click", () => {
    elements.checkoutSuccessView.classList.remove("active");
    closeCheckout();
    
    // Clear pool joined state
    state.activePool = null;
    navigateTo("screen-feed");
  });
}

function openCheckout(product, isGroupBuy) {
  elements.checkoutCityLabel.textContent = state.user.city;
  elements.checkoutAddress.value = `г. ${state.user.city}, ул. Толе би, 59, кв. 12`;
  
  let soloPrice = product.priceSolo;
  let discount = isGroupBuy ? (product.priceSolo - product.priceGroup) : 0;
  
  // Real Boost Discount Calculation
  let boostDiscount = 0;
  let boostAppliedLabel = "";

  if (product.category === "auto" && state.user.activeBoosts.includes("boost-4") && !isGroupBuy) {
    // "Одинокий путник": Buy auto item individually at group price
    soloPrice = product.priceGroup;
    boostAppliedLabel = "«Одинокий путник» (Опт. цена)";
  }

  const basePriceForBoost = isGroupBuy ? product.priceGroup : soloPrice;

  if (product.category === "diy" && state.user.activeBoosts.includes("boost-1")) {
    // "Код Леонардо": -15% additional discount on DIY
    boostDiscount = Math.round(basePriceForBoost * 0.15);
    boostAppliedLabel = "«Код Леонардо» (-15%)";
  } else if (product.category === "cosmetics" && state.user.activeBoosts.includes("boost-2")) {
    // "Эликсир Молодости": -15% additional discount on Cosmetics
    boostDiscount = Math.round(basePriceForBoost * 0.15);
    boostAppliedLabel = "«Эликсир Молодости» (-15%)";
  } else if (product.category === "clothing" && state.user.activeBoosts.includes("boost-3")) {
    // "Встречают по одежке": -10% additional discount on Clothing
    boostDiscount = Math.round(basePriceForBoost * 0.10);
    boostAppliedLabel = "«Встречают по одежке» (-10%)";
  } else if (product.category === "electronics" && state.user.activeBoosts.includes("boost-5")) {
    // "Кибер-Самурай": -5% additional discount on Electronics
    boostDiscount = Math.round(basePriceForBoost * 0.05);
    boostAppliedLabel = "«Кибер-Самурай» (-5%)";
  } else if (product.category === "gadgets" && state.user.activeBoosts.includes("boost-6")) {
    // "Кибер-Коннект": -10% additional discount on Gadgets
    boostDiscount = Math.round(basePriceForBoost * 0.10);
    boostAppliedLabel = "«Кибер-Коннект» (-10%)";
  }

  const finalDiscount = discount + boostDiscount;
  
  elements.breakdownSoloPrice.setAttribute("data-price", soloPrice);
  elements.breakdownDiscount.setAttribute("data-discount", finalDiscount);
  
  updateCheckoutBreakdown();
  elements.checkoutOverlay.classList.add("active");

  // Customize checkout discount label to indicate active boost
  const discountRow = document.querySelector(".price-breakdown-row.discount-row");
  if (discountRow) {
    const labelSpan = discountRow.querySelector("span:first-child");
    if (boostAppliedLabel) {
      labelSpan.innerHTML = `Скидка + Буст ${boostAppliedLabel}:`;
    } else {
      labelSpan.innerHTML = `Скидка коллективного пула:`;
    }
  }
}

function closeCheckout() {
  elements.checkoutOverlay.classList.remove("active");
  elements.btnProcessPayment.disabled = false;
  elements.btnProcessPayment.textContent = "Подтвердить оплату через eSIM ID";
}

function updateCheckoutBreakdown() {
  const solo = parseInt(elements.breakdownSoloPrice.getAttribute("data-price"));
  const discount = parseInt(elements.breakdownDiscount.getAttribute("data-discount"));
  const shipping = state.shippingCost;
  const total = solo - discount + shipping;

  elements.breakdownSoloPrice.textContent = formatPrice(solo);
  elements.breakdownDiscount.textContent = `-${formatPrice(discount)}`;
  elements.breakdownShippingCost.textContent = shipping === 0 ? "Бесплатно" : formatPrice(shipping);
  elements.breakdownTotalPrice.textContent = formatPrice(total);
}

function addActiveProductToHistory() {
  // Check if group buy or individual
  const discount = parseInt(elements.breakdownDiscount.getAttribute("data-discount"));
  const isGroup = discount > 0;
  const product = isGroup ? state.activePool : PRODUCTS.find(p => p.id === state.selectedProductId);
  
  if (!product) return;

  const cost = isGroup ? product.priceGroup : product.priceSolo;
  const saving = isGroup ? (product.priceSolo - product.priceGroup) : 0;

  const now = new Date();
  const dateStr = `${now.getDate().toString().padStart(2, '0')}.${(now.getMonth()+1).toString().padStart(2, '0')}.${now.getFullYear()}`;

  const newOrder = {
    id: `CB-${Math.floor(Math.random() * 9000 + 1000)}-KZ`,
    title: product.title,
    date: dateStr,
    cost: cost,
    saving: saving,
    market: product.donorLabel,
    status: isGroup ? "awaiting" : "shipped", // awaiting group final / shipped individually
    category: product.category
  };

  state.orderHistory.unshift(newOrder); // Add to top of list
  
  // Refresh sidebar saving teaser
  renderFeed();
}

// --- SCREEN 5: INVESTOR CABIN & ORDER HISTORY LOGIC ---
function renderInvestorCabin() {
  let totalSaved = 0;
  let activePoolsCount = state.activePool ? 1 : 0;
  let categorySavings = {
    electronics: 0,
    gadgets: 0,
    diy: 0,
    clothing: 0,
    auto: 0,
    cosmetics: 0
  };

  // Compile totals
  state.orderHistory.forEach(order => {
    totalSaved += order.saving;
    if (categorySavings[order.category] !== undefined) {
      categorySavings[order.category] += order.saving;
    }
  });

  // Include active pool potential savings if user joined but not checked out yet
  if (state.activePool) {
    const pool = state.activePool;
    const poolSaving = pool.priceSolo - pool.priceGroup;
    // Category mapping
    if (categorySavings[pool.category] !== undefined) {
      categorySavings[pool.category] += poolSaving;
    }
  }

  // Set DOM statistics
  elements.cabinTotalSaved.textContent = formatPrice(totalSaved);
  elements.cabinOrdersCount.textContent = state.orderHistory.length;
  elements.cabinActivePools.textContent = activePoolsCount;

  // Render CSS graphs breakdown
  elements.cabinGraphsList.innerHTML = "";
  
  const categoryLabels = {
    electronics: "Электроника",
    gadgets: "Гаджеты",
    diy: "DIY-компоненты",
    clothing: "Одежда",
    auto: "Автотовары",
    cosmetics: "Косметика"
  };

  // Find max category value to scale progress bar percentages
  let maxSaving = 0;
  Object.keys(categorySavings).forEach(key => {
    if (categorySavings[key] > maxSaving) maxSaving = categorySavings[key];
  });
  if (maxSaving === 0) maxSaving = 10000; // prevent division by zero

  Object.keys(categorySavings).forEach(cat => {
    const saving = categorySavings[cat];
    const label = categoryLabels[cat] || cat;
    
    // Scale width percentage
    const percentWidth = Math.round((saving / maxSaving) * 100);

    const row = document.createElement("div");
    row.className = "cabin-graph-row";
    row.innerHTML = `
      <div class="cabin-graph-lbl-row">
        <span>${label}</span>
        <span style="color: var(--accent-yellow); font-weight: 800;">${formatPrice(saving)}</span>
      </div>
      <div class="cabin-graph-bar-bg">
        <div class="cabin-graph-bar-fill" style="width: 0%;"></div>
      </div>
    `;

    elements.cabinGraphsList.appendChild(row);

    // Trigger width transition in next paint tick
    setTimeout(() => {
      const fill = row.querySelector(".cabin-graph-bar-fill");
      if (fill) fill.style.width = `${percentWidth}%`;
    }, 100);
  });

  // Render order history list
  elements.cabinHistoryList.innerHTML = "";
  if (state.orderHistory.length === 0) {
    elements.cabinHistoryList.innerHTML = `<div style="text-align: center; color: var(--text-gray); padding: 20px 0;">У вас еще нет совершенных заказов.</div>`;
  } else {
    state.orderHistory.forEach(order => {
      const item = document.createElement("div");
      item.className = "history-order-item";
      
      let badgeClass = "awaiting";
      let badgeLabel = "В сборе";
      
      if (order.status === "delivered") {
        badgeClass = "delivered";
        badgeLabel = "Доставлен";
      } else if (order.status === "shipped") {
        badgeClass = "shipped";
        badgeLabel = "В пути";
      }

      item.innerHTML = `
        <div class="history-item-left">
          <span class="history-item-title">${order.title}</span>
          <span class="history-item-meta">${order.date} • С маркетплейса ${order.market} • ${order.id}</span>
        </div>
        <div class="history-item-right">
          <span class="history-item-price">${formatPrice(order.cost)}</span>
          <span class="history-item-badge ${badgeClass}">${badgeLabel}</span>
        </div>
      `;

      elements.cabinHistoryList.appendChild(item);
    });
  }
}

// --- BOOST SYSTEM & POINTS HUB MECHANICAL LOGIC ---
const BOOSTS = [
  { id: "boost-1", title: "Код Леонардо", desc: "-15% доп. скидка на DIY-компоненты в групповой покупке.", cost: 300, color: "orange" },
  { id: "boost-2", title: "Эликсир Молодости", desc: "-15% доп. скидка на категорию Косметика в групповом пуле.", cost: 400, color: "grey" },
  { id: "boost-3", title: "Встречают по одежке", desc: "Скидка 10% на любую одежду в групповой покупке.", cost: 250, color: "peach" },
  { id: "boost-4", title: "Одинокий путник", desc: "Позволяет купить 1 автотовар индивидуально по цене группы.", cost: 600, color: "white" },
  { id: "boost-5", title: "Кибер-Самурай", desc: "Доп. скидка 5% на электронику + удвоение баллов за покупку.", cost: 350, color: "blue" },
  { id: "boost-6", title: "Кибер-Коннект", desc: "-10% дополнительной скидки на любые Гаджеты в пуле.", cost: 800, color: "green" }
];

function updatePointsDisplay() {
  if (elements.headerPointsVal) {
    elements.headerPointsVal.textContent = state.user.points;
  }
  const bUserPoints = document.getElementById("boost-user-points");
  if (bUserPoints) {
    bUserPoints.textContent = `${state.user.points} Б`;
  }
}

function renderBoostShop() {
  const grid = document.getElementById("boosts-grid");
  if (!grid) return;
  grid.innerHTML = "";

  BOOSTS.forEach(boost => {
    const card = document.createElement("div");
    const isActive = state.user.activeBoosts.includes(boost.id);
    card.className = `boost-card boost-${boost.color} ${isActive ? "active-boost" : ""}`;
    card.setAttribute("data-id", boost.id);

    card.innerHTML = `
      <div>
        <h4 class="boost-card-title">${boost.title}</h4>
        <p class="boost-card-desc">${boost.desc}</p>
      </div>
      <button class="btn-boost-buy animated-btn">
        ${isActive ? "Куплено / Активен" : `Купить за ${boost.cost} Б`}
      </button>
    `;

    const buyBtn = card.querySelector(".btn-boost-buy");
    if (buyBtn && !isActive) {
      buyBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        buyBoost(boost.id, boost.cost, boost.title);
      });
    }

    grid.appendChild(card);
  });
}

function buyBoost(id, cost, title) {
  if (state.user.points >= cost) {
    state.user.points -= cost;
    state.user.activeBoosts.push(id);
    updatePointsDisplay();
    renderBoostShop();
    showToast(`Буст «${title}» успешно активирован!`);
  } else {
    showToast("Недостаточно баллов Collab!");
  }
}
