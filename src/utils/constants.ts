import monziMain from '@assets/images/portfolio images/monzi-main.jpg';
import monziConstructor from '@assets/images/portfolio images/monzi-collection.jpg';
import monziFavourite from '@assets/images/portfolio images/monzi-favourite.jpg';
import berocMain from '@assets/images/portfolio images/beroc-main.jpg';
import berocTeam from '@assets/images/portfolio images/beroc-team.jpg';
import figurrenWeltAbout from '@assets/images/portfolio images/figurenwelt-about.jpg';
import figurrenWeltBestSellers from '@assets/images/portfolio images/figurenwelt-bestsellers.jpg';
import figurrenWeltLightsabbels from '@assets/images/portfolio images/figurenwelt-lightsabels.jpg';
import america1 from '@assets/images/portfolio images/america-1.jpg';
import america2 from '@assets/images/portfolio images/america-2.jpg';
import america3 from '@assets/images/portfolio images/america-3.jpg';
import odysseyCatalog from '@assets/images/portfolio images/odyssey-catalog.jpg';
import odysseyCart from '@assets/images/portfolio images/odyssey-cart.jpg';
import odysseyLogin from '@assets/images/portfolio images/odyssey-login.jpg';
import graphQl from '@assets/images/portfolio images/graphql.jpg';
import minesweeper from '@assets/images/portfolio images/minesweeper.jpg';
import selectors from '@assets/images/portfolio images/selectors.jpg';
import shelter from '@assets/images/portfolio images/shelter.jpg';
import shelterPets from '@assets/images/portfolio images/shelter-pets.jpg';
import catProgrammer from '@assets/images/cat-programmer.jpg';
import catAccountant from '@assets/images/cat-accountant.jpg';
import catBarista from '@assets/images/cat-barista.jpg';
import catCasier from '@assets/images/cat-cashier.jpg';
import phoneIcon from '@assets/icons/phone.png';
import mailIcon from '@assets/icons/mail.png';
import telegramIcon from '@assets/icons/telegram.png';
import githubIcon from '@assets/icons/github.png';
import linkedinIcon from '@assets/icons/linkedin.png';

import {
    ContactsItem,
    EducationItem,
    ExperienceItem,
    PaginationItem,
    PortfolioItem,
} from './types';

export const MONTHES = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
];

export const PAGES: PaginationItem[] = [
    { path: '', name: 'Обо мне' },
    { path: 'experience', name: 'Опыт работы' },
    { path: 'education', name: 'Образование' },
    { path: 'portfolio', name: 'Портфолио' },
    { path: 'skills', name: 'Навыки' },
    { path: 'bye-bye', name: 'Пока-пока!' },
];

export const CONTACTS: ContactsItem[] = [
    {
        src: phoneIcon,
        alt: 'Phone icon',
        to: 'tel:+375296255321',
        innerHtml: '+375(29) 625-53-21',
    },
    {
        src: mailIcon,
        alt: 'Mail icon',
        to: 'mailto:ksu1ven@mail.ru',
        innerHtml: 'ksu1ven@mail.ru',
    },
    {
        src: telegramIcon,
        alt: 'Telegram icon',
        to: 'https://t.me/ksu1ven',
        innerHtml: 'https://t.me/ksu1ven',
    },
];

export const PROFESSIONAL_CONTACTS: ContactsItem[] = [
    {
        src: githubIcon,
        alt: 'Github icon',
        to: 'https://github.com/ksu1ven',
        innerHtml: 'GitHub',
    },
    {
        src: linkedinIcon,
        alt: 'LinkedIn icon',
        to: 'https://www.linkedin.com/in/%D0%BEksana-yakhimovich-a70873297/',
        innerHtml: 'LinkedIn',
    },
];

export const EDUCATION: EducationItem[] = [
    {
        institution: 'Белорусский государственный экономический университет',
        year: 2016,
        course: 'Финансы и кредит',
    },
    {
        institution: 'The Rolling Scopes School',
        year: 2023,
        course: 'JavaScript/Front-end',
        position: 'Позиция - 78 из 1379',
    },
    {
        institution: 'The Rolling Scopes School',
        year: 2024,
        course: 'React',
        position: 'Позиция - 5 из 1077',
    },
    {
        institution: 'The Rolling Scopes School',
        year: 2025,
        course: 'Node JS, AWS',
        position: 'В планах на изучение',
    },
];

export const PORTFOLIO: PortfolioItem[] = [
    {
        name: 'Мобильное веб-приложение Monzi',
        images: [
            { img: monziMain, url: 'https://monzi.io/scene' },
            {
                img: monziConstructor,
                url: 'https://monzi.io/scene/constructor',
            },
            {
                img: monziFavourite,
                url: 'https://monzi.io/scene/favourite',
            },
        ],
        deploy: 'https://monzi.io/',
        stack: 'Vue, Pinia, THREE.js, Vite',
        description:
            'Разработка мобильного приложения Monzi с использованием Vue и 3D. В приложении можно выбирать персонажей в конструкторе, покупать и продавать их, обмениваться с другими игроками. Персонажа можно улучшать, покупая ему анимации. Энергию для покупки анимации можно заработать, тапая по экрану своего персонажа.',
        type: 'Командный',
        responsibility:
            'Страница "Конструктор", "Избранное", "Логин", "Регистрация", часть "Главной", большинство попапов, PWA, 3D персонаж (с помощью тимлида)',
    },
    {
        name: 'Сайт экономической организации Beroc',
        images: [
            { img: berocMain, url: 'https://beroc.e2qr.com/' },
            {
                img: berocTeam,
                url: 'https://beroc.e2qr.com/',
            },
        ],
        deploy: 'https://beroc.e2qr.com/',
        stack: 'PHP, WordPress',
        description:
            'Разработка веб-сайта для экономической организации на WordPress. Работа с плагинами ACF, Ninja Forms, Polilang, Cyr-To-Lat, Yoast.',
        type: 'Командный',
        responsibility: 'Примерно треть секций всего сайта.',
    },
    {
        name: 'Интернет-магазин игрушек Figurrenwelt',
        images: [
            { img: figurrenWeltAbout, url: '' },
            {
                img: figurrenWeltBestSellers,
                url: '',
            },
            {
                img: figurrenWeltLightsabbels,
                url: '',
            },
        ],
        stack: 'Shopify, THREE.js',
        description:
            'Разработка немецкого интернет-магазина игрушек на Shopify. На сайте используется огромное количество 3D, анимаций и прочих визуальных эффектов. Сайт в процессе разработки, ссылки на продакш на данный момент нет.',
        type: 'Командный',
        responsibility:
            'Секции "Content", "Bestsellers", "Lightsabels", "Choose Side" на вторичках, cекции "Video", "About" на главной.',
    },
    {
        name: 'Поддержка существующих американских проектов',
        images: [
            { img: america1, url: 'https://pluggedinatl.com/' },
            {
                img: america2,
                url: 'https://flatcreekbaptist.org/',
            },
            {
                img: america3,
                url: 'https://govavia.com/',
            },
        ],
        stack: 'PHP, WordPress',
        description:
            'Поддержка существующих американских проектов на WordPress (не только изображённых на фото). Работа с темами, плагинами ACF, Carbon Fields, Ninja Forms, Yoast,. Исправление нюансов вёрстки, ошибок PHP и плагинов в консоли. Переход на другую версию node и Webpack.',
    },
    {
        name: 'Интернет-магазин космотуров Space Odyssey[4165]',
        images: [
            { img: odysseyLogin, url: 'https://odyssey4165.vercel.app/login' },
            { img: odysseyCart, url: 'https://odyssey4165.vercel.app/cart' },
            {
                img: odysseyCatalog,
                url: 'https://odyssey4165.vercel.app/store',
            },
        ],
        deploy: 'https://odyssey4165.vercel.app/',
        repo: 'https://github.com/itzaur/eCommerce-Application',
        stack: 'React, Redux Toolkit, RTK Query, SDK CommerceTools, Vite, Vitest',
        description:
            'Разработка приложения Space Odyssey[4165] (электронная коммерция) с использованием React. Мы предлагаем незабываемые впечатления и неизведанные эмоции, а наши сувениры станут прекрасным напоминанием об этом. Вы сможете посетить места, о которых не мечтали даже в самых смелых фантазиях.',
        type: 'Командный',
        responsibility:
            'Страница "Логин", "Каталог", "Корзина", роутинг и большинство запросов на сервер CommerceTools',
    },
    {
        name: 'Игровая площадка/IDE для запросов GraphiQL',
        images: [
            { img: graphQl, url: 'https://graphql-rsschool-app.netlify.app/' },
        ],
        deploy: 'https://graphql-rsschool-app.netlify.app/',
        repo: 'https://github.com/AndreiZaretski/graphiql-app',
        stack: 'React, GraphiQl, Vite, Vitest',
        description:
            'GraphiQL — это игровая площадка/IDE для запросов GraphiQL. Для работы вы можете использовать любой API, поддерживающий CORS. Есть возможность просмотреть документацию для построения запроса для заданной API. Добавлены возможности авторизации и аутентификации, обеспечивающие доступ к инструменту только авторизованным пользователям.',
        type: 'Командный',
        responsibility:
            'Страница "Главная": раздел запросов /ответов, prettify для запроса, проводник документации',
    },
    {
        name: 'Игра "Сапёр"',
        images: [
            {
                img: minesweeper,
                url: 'https://rolling-scopes-school.github.io/ksu1ven-JSFE2023Q1/minesweeper/',
            },
        ],
        deploy: 'https://rolling-scopes-school.github.io/ksu1ven-JSFE2023Q1/minesweeper/',
        repo: 'https://github.com/rolling-scopes-school/ksu1ven-JSFE2023Q1/tree/minesweeper',
        stack: 'Vanilla JS, Webpack',
        description:
            'Целью игры является открытие всех ячеек, не содержащих мины. Игрок открывает ячейки, стараясь не открыть ячейку с миной. Открыв ячейку с миной, он проигрывает. Мины расставляются после первого хода, поэтому проиграть на первом же ходу невозможно. Есть возможность выбирать размер поля и количество мин, а также результаты последних 10 игр сохраняются в таблице рекордов.',
        type: 'Индивидуальный',
    },
    {
        name: 'Тренажёр CSS-Селекторов',
        images: [
            {
                img: selectors,
                url: 'https://rolling-scopes-school.github.io/ksu1ven-JSFE2023Q1/rss-css-selectors/',
            },
        ],
        deploy: 'https://rolling-scopes-school.github.io/ksu1ven-JSFE2023Q1/rss-css-selectors/',
        repo: 'https://github.com/rolling-scopes-school/ksu1ven-JSFE2023Q1/tree/RSS-CSS-Selectors',
        stack: 'Vanilla JS, Webpack',
        description:
            'Тренажёр позволяет в игровой форме понять принцип написания селекторов. Справа находится блок с описанием уровня, после прочтения которого необходимо вписать селектор в поле ввода.  Изображение с едой и редактор кода в левой секции синхронизированы при наведении. При верном ответе котик кушает и и игрок переходит на следующий уровень.',
        type: 'Индивидуальный',
    },
    {
        name: 'Сайт приюта для животных',
        images: [
            {
                img: shelterPets,
                url: 'https://rolling-scopes-school.github.io/ksu1ven-JSFE2023Q1/shelter/dist/our-pets.html',
            },
            {
                img: shelter,
                url: 'https://rolling-scopes-school.github.io/ksu1ven-JSFE2023Q1/shelter/dist/',
            },
        ],
        deploy: 'https://rolling-scopes-school.github.io/ksu1ven-JSFE2023Q1/shelter/dist/',
        repo: 'https://github.com/rolling-scopes-school/ksu1ven-JSFE2023Q1/tree/shelter',
        stack: 'Vanilla JS, Webpack',
        description:
            'Perfect Pixel вёрстка по макету из Figma. Из сложностей - карусель и пагинация с рандомными питомцами из списка всех, при этом на экране повторяющихся питомцев нет.',
        type: 'Индивидуальный',
    },
];

export const EXPERIENCE: ExperienceItem[] = [
    {
        img: catProgrammer,
        profession: 'Frontend разработчик',
        company: 'Egorov Agency',
        city: 'Минск',
        dateFrom: new Date(2024, 5),
        dateTo: 'Настоящее время',
        description:
            'Разработка веб-приложений на Vue, PHP(Wordpress) с нуля, поддержка существующих американских проектов на WordPress (исправление нюансов вёрстки, ошибок PHP и плагинов в консоли, разработка новых секций и т.д.).',
    },
    {
        img: catAccountant,
        profession: 'бухгалтер',
        company: 'Технокласс',
        city: 'Минск',
        dateFrom: new Date(2020, 6),
        dateTo: new Date(2024, 2),
        skills: 'аналитические навыки, внимание к деталям, решение проблем, технические способности, внимание к соблюдению требований и стремление к непрерывному обучению.',
    },
    {
        img: catBarista,
        profession: 'владелец / бариста',
        company: 'ИП Яхимович Н.А. (FoxyCoffee)',
        city: 'Брест',
        dateFrom: new Date(2019, 5),
        dateTo: new Date(2020, 5),
        skills: 'лидерская позиция, самостоятельность в принятии решений, управление взаимоотношениями с клиентами, креативность и управление временем.',
    },
    {
        img: catCasier,
        profession: 'кассир',
        company: 'БНБ-Банк',
        city: 'Минск',
        dateFrom: new Date(2016, 1),
        dateTo: new Date(2018, 6),
        skills: 'концентрация внимания, стрессоустойчивость и умение считать.',
    },
];
