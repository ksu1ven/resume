import odysseyCatalog from '@assets/images/odyssey-catalog.jpg';
import odysseyCart from '@assets/images/odyssey-cart.jpg';
import odysseyLogin from '@assets/images/odyssey-login.jpg';
import graphQl from '@assets/images/graphql.jpg';
import minesweeper from '@assets/images/minesweeper.jpg';
import perfumeCatalog from '@assets/images/perfume-store.jpg';
import perfumeCart from '@assets/images/perfume-store-cart.jpg';
import perfumeOrder from '@assets/images/perfume-store-order.jpg';
import selectors from '@assets/images/selectors.jpg';
import shelter from '@assets/images/shelter.jpg';
import shelterPets from '@assets/images/shelter-pets.jpg';
import catAccountant from '@assets/images/cat-accountant.png';
import catBarista from '@assets/images/cat-barista.png';
import catCasier from '@assets/images/cat-cashier.png';
import { ExperienceItem, PaginationItem, PortfolioItem } from './types';

export const PORTFOLIO: PortfolioItem[] = [
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
        name: 'Интернет-магазин парфюмерии',
        images: [
            {
                img: perfumeCart,
                url: 'https://ksu1ven.github.io/online-store/',
            },
            {
                img: perfumeOrder,
                url: 'https://ksu1ven.github.io/online-store/',
            },
            {
                img: perfumeCatalog,
                url: 'https://ksu1ven.github.io/online-store/',
            },
        ],
        deploy: 'https://ksu1ven.github.io/online-store/',
        repo: 'https://github.com/ksu1ven/online-store',
        stack: 'Vanilla JS, Webpack',
        description:
            'Интернет-магазин парфюмерии с возможностью фильтрации, сортировки и поиска по названию аромата. В корзине можно манипулировать количеством аромата, а также применять промокоды. Форма для заполнения деталей заказа с валидацией полей. ',
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
        img: catAccountant,
        profession: 'бухгалтер',
        company: 'Технокласс',
        city: 'Минск',
        dateFrom: new Date(2020, 6),
        dateTo: new Date(2024, 2),
        description:
            'Учёт входящих и исходящих ТТН, топлива, кассовые операции, банковские операции, БСО, составление прайсов по импортируемым товарам, прочие.',
    },
    {
        img: catBarista,
        profession: 'владелец / бариста',
        company: 'ИП Яхимович Н.А. (FoxyCoffee)',
        city: 'Брест',
        dateFrom: new Date(2019, 5),
        dateTo: new Date(2020, 5),
        description:
            'Приготовление кофе, бухгалтерский учёт,предоставление отчётности в налоговую инспекцию, ФСЗН, Белгосстрах.',
    },
    {
        img: catCasier,
        profession: 'кассир',
        company: 'БНБ-Банк',
        city: 'Минск',
        dateFrom: new Date(2016, 1),
        dateTo: new Date(2018, 6),
        description:
            'Обмен валют, проведение платежей, выдача и пополнение депозитов.',
    },
];

export const MONTHES = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
];

export const PAGES: PaginationItem[] = [
    { path: '', name: 'Обо мне' },
    { path: 'education', name: 'Образование' },
    { path: 'portfolio', name: 'Портфолио' },
    { path: 'skills', name: 'Навыки' },
    { path: 'experience', name: 'Опыт работы' },
    { path: 'bye-bye', name: 'Пока-пока!' },
];
