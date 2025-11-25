// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Tab System for Weapons
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Show corresponding content
        const tabId = button.getAttribute('data-tab');
        const targetContent = document.getElementById(tabId);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});

// CTA Button Functionality
document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('#lore').scrollIntoView({
        behavior: 'smooth'
    });
});

// Modal System
const modalOverlay = document.getElementById('modal-overlay');
const modalBody = document.querySelector('.modal-body');
const modalClose = document.querySelector('.modal-close');

// Данные для модальных окон
const modalData = {
    'great-will': {
        title: 'Великая Воля',
        image: 'images/great-will.avif',
        content: `
            <p>Великая Воля - это божественная сила, которая управляет законами мира Элден Риг. Она создала Эрдтри и установила Золотой Порядок, который регулирует жизнь и смерть в Междуземье.</p>
            <div class="modal-stats">
                <h4>Ключевые аспекты:</h4>
                <ul>
                    <li>Создатель Эрдтри и Золотого Порядка</li>
                    <li>Управляет божественными законами</li>
                    <li>Имеет множество посланников и слуг</li>
                    <li>Конфликтует с Внешними богами</li>
                </ul>
            </div>
        `
    },
    'shattering-war': {
        title: 'Война Сокрушения',
        image: 'images/shattering-war.jpg',
        content: `
            <p>Война Сокрушения - это великий конфликт, который разразился после разрушения Элден Риг. Дети Марики, известные как Владыки Полукровки, начали войну за осколки Великой Воли.</p>
            <div class="modal-stats">
                <h4>Основные события:</h4>
                <ul>
                    <li>Разрушение Элден Риг</li>
                    <li>Битва между Владыками Полукровки</li>
                    <li>Падение божественного порядка</li>
                    <li>Появление Великих Руин</li>
                </ul>
            </div>
        `
    },
    'demigods': {
        title: 'Владыки Полукровки',
        image: 'images/demigods.jpg',
        content: `
            <p>Владыки Полукровки - это дети Королевы Марики и Лорда Радагона, которые унаследовали части Элден Риг. Каждый из них обладает уникальной Великой Руной и управляет своей территорией в Междуземье.</p>
            <div class="modal-stats">
                <h4>Известные Владыки:</h4>
                <ul>
                    <li>Годрик Отрекшийся - замок Штормвейл</li>
                    <li>Радан - Звездная Ярость</li>
                    <li>Реннала - Королева Полной Луны</li>
                    <li>Рикард - Проклятый</li>
                </ul>
            </div>
        `
    },
    'melina': {
        title: 'Мелина',
        image: 'images/melina.jpg',
        content: `
            <p>Мелина - таинственная спутница, которая предлагает помощь Потустороннику в его путешествии. Она появляется из ниоткуда и обладает знаниями о Междуземье, которых нет у других.</p>
            <div class="modal-stats">
                <h4>Особенности:</h4>
                <ul>
                    <li>Таинственное происхождение</li>
                    <li>Владеет магией превращения</li>
                    <li>Знает секреты Ситдаров</li>
                    <li>Имеет собственную скрытую цель</li>
                </ul>
            </div>
        `
    },
    'godrick': {
        title: 'Годрик Отрекшийся',
        image: 'images/godrick.jpg',
        content: `
            <p>Годрик Отрекшийся - один из Владык Полукровки, правящий замком Штормвейл. Известен своей одержимостью силой и практикой "прививки" - присоединения чужих конечностей к своему телу.</p>
            <div class="modal-stats">
                <h4>Характеристики:</h4>
                <ul>
                    <li>Владыка замка Штормвейл</li>
                    <li>Практикует прививку</li>
                    <li>Одержим силой и наследием</li>
                    <li>Слабейший из Владык Полукровки</li>
                </ul>
            </div>
        `
    },
    'radahn': {
        title: 'Радан - Звездная Ярость',
        image: 'images/radahn.jpg',
        content: `
            <p>Генерал Радан, известный как Звездная Ярость - один из самых могущественных Владык Полукровки. Он остановил движение звезд своей силой гравитационной магии и сражается в вечной битве в Пустошах Целеиды.</p>
            <div class="modal-stats">
                <h4>Способности:</h4>
                <ul>
                    <li>Мастер гравитационной магии</li>
                    <li>Остановил движение звезд</li>
                    <li>Величайший воин Междуземья</li>
                    <li>Сражается верхом на своем коне Леонарде</li>
                </ul>
            </div>
        `
    },
    'bloody-spear': {
        title: 'Кровавое Копье Могилы',
        image: 'images/bloody-spear.png',
        content: `
            <p>Кровавое Копье Могилы - древнее оружие, способное вызывать кровотечение у врагов. Его проклятая природа делает его особенно эффективным против живых существ.</p>
            <div class="modal-stats">
                <h4>Характеристики оружия:</h4>
                <ul>
                    <li>Тип: Копье</li>
                    <li>Урон: Физический + Кровотечение</li>
                    <li>Требования: Сила 16, Ловкость 19</li>
                    <li>Особое умение: Кровавый удар</li>
                </ul>
            </div>
        `
    },
    'moonveil': {
        title: 'Лунный Клинок',
        image: 'images/lightning-swor.png',
        content: `
            <p>Лунный Клинок - магический катана, способный испускать волны лунной энергии. Это оружие особенно эффективно для персонажей, развивающих интеллект и ловкость.</p>
            <div class="modal-stats">
                <h4>Характеристики оружия:</h4>
                <ul>
                    <li>Тип: Катана</li>
                    <li>Урон: Физический + Магический</li>
                    <li>Требования: Сила 12, Ловкость 18, Интеллект 23</li>
                    <li>Особое умение: Лунная волна</li>
                </ul>
            </div>
        `
    },
    'comet-azur': {
        title: 'Комета Азура',
        image: 'images/comet-azur.jpg',
        content: `
            <p>Комета Азура - легендарное заклинание глазурианских магов, испускающее мощный луч магической энергии. При правильном использовании может уничтожить даже самых сильных врагов.</p>
            <div class="modal-stats">
                <h4>Характеристики заклинания:</h4>
                <ul>
                    <li>Тип: Заклинание глазурианских магов</li>
                    <li>Урон: Магический</li>
                    <li>Требования: Интеллект 60</li>
                    <li>Слоты памяти: 3</li>
                </ul>
            </div>
        `
    },
    'erdtree-shield': {
        title: 'Щит Эрдтри',
        image: 'images/erdtree-shield.webp',
        content: `
            <p>Щит Эрдтри - легендарный щит, созданный из древесины священного дерева. Обладает высоким сопротивлением ко всем типам урона и особыми защитными свойствами.</p>
            <div class="modal-stats">
                <h4>Характеристики щита:</h4>
                <ul>
                    <li>Тип: Большой щит</li>
                    <li>Защита: 100% физического урона</li>
                    <li>Требования: Сила 30</li>
                    <li>Особое умение: Барьер Золотого Порядка</li>
                </ul>
            </div>
        `
    }
};

// Обработчики для кнопок "Узнать больше"
document.querySelectorAll('.card-button').forEach(button => {
    button.addEventListener('click', (e) => {
        const modalId = e.target.getAttribute('data-modal');
        if (modalData[modalId]) {
            openModal(modalId);
        }
    });
});

// Функция открытия модального окна
function openModal(modalId) {
    const data = modalData[modalId];
    modalBody.innerHTML = `
        <h2 class="modal-title">${data.title}</h2>
        <img src="${data.image}" alt="${data.title}" class="modal-image">
        <div class="modal-text">${data.content}</div>
    `;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Закрытие модального окна
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Закрытие по ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Map System (добавьте в script.js)
function initMaps() {
    // Переключение между картами
    const mapNavBtns = document.querySelectorAll('.map-nav-btn');
    const mapImages = document.querySelectorAll('.map-image');
    
    mapNavBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const mapId = btn.getAttribute('data-map');
            
            // Убираем активный класс у всех кнопок и карт
            mapNavBtns.forEach(b => b.classList.remove('active'));
            mapImages.forEach(m => m.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке и карте
            btn.classList.add('active');
            document.getElementById(`map-${mapId}`).classList.add('active');
        });
    });
    
    // Маркеры на карте
    const markers = document.querySelectorAll('.map-marker');
    markers.forEach(marker => {
        marker.addEventListener('click', () => {
            const location = marker.getAttribute('data-location');
            showLocationInfo(location);
        });
    });
    
    // Быстрая навигация
    const quickNavBtns = document.querySelectorAll('.quick-nav-btn');
    quickNavBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const location = btn.getAttribute('data-location');
            highlightLocation(location);
        });
    });
}

function showLocationInfo(location) {
    const locationData = {
        'stormveil': {
            title: 'Замок Штормвейл',
            image: 'images/stormveil-castle.jpg',
            content: `
                <p>Замок Штормвейл - крепость Годрика Отрекшегося, одного из Владык Полукровки. Расположен в Лимгрейве.</p>
                <div class="modal-stats">
                    <h4>Ключевые особенности:</h4>
                    <ul>
                        <li>🏰 Логово Годрика Отрекшегося</li>
                        <li>⚔️ Множество рыцарей и стражей</li>
                        <li>🔑 Секретные проходы и обходные пути</li>
                        <li>💎 Богатая добыча и уникальные предметы</li>
                    </ul>
                </div>
            `
        },
        'academy': {
            title: 'Академия Рая Лукарии',
            image: 'images/raya-lucaria.jpg',
            content: `
                <p>Великая академия магии, где правит Реннала, Королева Полной Луны.</p>
                <div class="modal-stats">
                    <h4>Особенности:</h4>
                    <ul>
                        <li>🔮 Центр магических знаний</li>
                        <li>🌙 Обитель Ренналы</li>
                        <li>📚 Множество заклинаний и свитков</li>
                        <li>🏛️ Величественная архитектура</li>
                    </ul>
                </div>
            `
        },
        'radahn': {
            title: 'Битва с Раданом',
            image: 'images/radahn-battle.jpg',
            content: `
                <p>Эпическая битва с Генералом Раданом, известным как Звездная Ярость.</p>
                <div class="modal-stats">
                    <h4>Особенности битвы:</h4>
                    <ul>
                        <li>⭐ Использование гравитационной магии</li>
                        <li>🎯 Можно призвать множество NPC-помощников</li>
                        <li>🏇 Битва верхом на лошади</li>
                        <li>⚡ Одна из самых зрелищных битв в игре</li>
                    </ul>
                </div>
            `
        },
        'capital': {
            title: 'Лейнделл, Столица',
            image: 'images/leyndell.jpg',
            content: `
                <p>Величественная столица Междуземья, где решается судьба Элден Лорда.</p>
                <div class="modal-stats">
                    <h4>Ключевые локации:</h4>
                    <ul>
                        <li>👑 Королевский дворец</li>
                        <li>🌳 Эрдтри в центре города</li>
                        <li>⚔️ Множество сильных противников</li>
                        <li>💎 Богатейшая добыча в игре</li>
                    </ul>
                </div>
            `
        }
    };
    
    if (locationData[location]) {
        openModal('location-' + location);
        
        // Динамически заполняем модальное окно
        const data = locationData[location];
        const modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = `
            <h2 class="modal-title">${data.title}</h2>
            <img src="${data.image}" alt="${data.title}" class="modal-image">
            <div class="modal-text">${data.content}</div>
        `;
    }
}

function highlightLocation(location) {
    // Переключаемся на общую карту
    document.querySelectorAll('.map-nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.map-image').forEach(map => map.classList.remove('active'));
    
    document.querySelector('[data-map="overworld"]').classList.add('active');
    document.getElementById('map-overworld').classList.add('active');
    
    // Подсвечиваем маркер
    const marker = document.querySelector(`[data-location="${location}"]`);
    if (marker) {
        marker.style.animation = 'pulse 0.5s 3';
        setTimeout(() => {
            marker.style.animation = '';
        }, 1500);
    }
}

// Инициализация карт при загрузке
document.addEventListener('DOMContentLoaded', initMaps);