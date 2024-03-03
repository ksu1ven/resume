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
import { PortfolioItem } from './types';

export const portfolio: PortfolioItem[] = [
    {
        name: 'Интернет-магазин космотуров Space Odyssey[4165]',
        images: [odysseyLogin, odysseyCart, odysseyCatalog],
        deploy: 'https://odyssey4165.vercel.app/',
        repo: 'https://github.com/itzaur/eCommerce-Application',
        stack: 'React, Redux, SDK Commercetools, Vite, Vitest',
        description:
            'Разработка приложения Space Odyssey[4165] (электронная коммерция) с использованием React. Мы предлагаем незабываемые впечатления и неизведанные эмоции, а наши сувениры станут прекрасным напоминанием об этом. Вы сможете посетить места, о которых не мечтали даже в самых смелых фантазиях.',
        type: 'Командный',
        responsibility:
            'Страница "Логин", "Каталог", "Корзина", роутинг и большинство запросов на сервер CommerceTools',
    },
    {
        name: 'Игровая площадка/IDE для запросов GraphiQL',
        images: [graphQl],
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
        images: [minesweeper],
        deploy: 'https://rolling-scopes-school.github.io/ksu1ven-JSFE2023Q1/minesweeper/',
        repo: 'https://github.com/rolling-scopes-school/ksu1ven-JSFE2023Q1/tree/minesweeper',
        stack: 'Vanilla JS, Webpack',
        description:
            'Целью игры является открытие всех ячеек, не содержащих мины. Игрок открывает ячейки, стараясь не открыть ячейку с миной. Открыв ячейку с миной, он проигрывает. Мины расставляются после первого хода, поэтому проиграть на первом же ходу невозможно. Есть возможность выбирать размер поля и количество мин, а также результаты последних 10 игр сохраняются в таблице рекордов.',
        type: 'Индивидуальный',
    },
    {
        name: 'Интернет-магазин парфюмерии',
        images: [perfumeCart, perfumeOrder, perfumeCatalog],
        deploy: 'https://ksu1ven.github.io/online-store/',
        repo: 'https://github.com/ksu1ven/online-store',
        stack: 'Vanilla JS, Webpack',
        description:
            'Интернет-магазин парфюмерии с возможностью фильтрации, сортировки и поиска по названию аромата. В корзине можно манипулировать количеством аромата, а также применять промокоды. Форма для заполнения деталей заказа с валидацией полей. ',
        type: 'Индивидуальный',
    },
    {
        name: 'Тренажёр CSS-Селекторов',
        images: [selectors],
        deploy: 'https://rolling-scopes-school.github.io/ksu1ven-JSFE2023Q1/rss-css-selectors/',
        repo: 'https://github.com/rolling-scopes-school/ksu1ven-JSFE2023Q1/tree/RSS-CSS-Selectors',
        stack: 'Vanilla JS, Webpack',
        description:
            'Тренажёр позволяет в игровой форме понять принцип написания селекторов. Справа находится блок с описанием уровня, после прочтения которого необходимо вписать селектор в поле ввода.  Изображение с едой и редактор кода в левой секции синхронизированы при наведении. При верном ответе котик кушает и и игрок переходит на следующий уровень.',
        type: 'Индивидуальный',
    },
    {
        name: 'Сайт приюта для животных',
        images: [shelterPets, shelter],
        deploy: 'https://rolling-scopes-school.github.io/ksu1ven-JSFE2023Q1/shelter/dist/',
        repo: 'https://github.com/rolling-scopes-school/ksu1ven-JSFE2023Q1/tree/shelter',
        stack: 'Vanilla JS, Webpack',
        description:
            'Perfect Pixel вёрстка по макету из Figma. Из сложностей - карусель и пагинация с рандомными питомцами из списка всех, при этом на экране повторяющихся питомцев нет.',
        type: 'Индивидуальный',
    },
];
