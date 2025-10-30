import { Photo } from './blocks/Photo';
import { Contacts } from './blocks/Contacts';

export function About() {
    return (
        <main className="about">
            <section className="personal-info">
                <div className="wrapper personal-info__wrapper">
                    <Photo />

                    <Contacts />
                </div>
            </section>

            <section className="description">
                <div className="wrapper description__wrapper">
                    <h2 className="description__title">Немного обо мне</h2>

                    <ul className="description__list">
                        <li>
                            💻 Имею коммерческий опыт написания
                            интернет-магазинов, телеграм-ботов, мессенджеров на
                            WebSocket, различных веб-сайтов и приложений.
                        </li>

                        <li>
                            🧠 Умею писать код на различном стеке — от Vue
                            (текущий любимый стек) и React до PHP/WordPress.
                            Знакома с THREE.js и Phaser.
                        </li>

                        <li>
                            🚀 Фронт-лид текущей команды — самостоятельно решаю
                            все задачи, даже те, в которых GPT предлагает
                            неработающие решения.
                        </li>

                        <li>
                            🧩 Решала задачи: вёрстка под все устройства,
                            интеграция бэка через axios и Swagger, реал-тайм чат
                            на WebSocket, платежи Telegram, эквайринг
                            CloudPayments с сохранением карт и токенизацией,
                            интернационализация (i18n), подключение
                            TON-кошелька, запуск игр Unity в Web, карты Leaflet
                            и Yandex, диаграммы Chart.js, слайдеры на Swiper,
                            имитация браузерного зума с логикой границ и др.
                        </li>

                        <li>
                            👩‍🏫 Опыт менторинга Junior-специалиста на текущем
                            месте работы.
                        </li>

                        <li>
                            📱 Тестирую на двух устройствах — iPhone и Android,
                            разбираюсь в их специфичных багах без привлечения
                            других членов команды.
                        </li>

                        <li>
                            💼 Работаю как самозанятая для зарубежных компаний —
                            вы не платите за меня налоги.
                        </li>

                        <li>
                            🌱 Причина поиска нового места работы — отсутствие
                            новых проектов (и, соответственно, финансовых
                            возможностей) у компаний. До программирования
                            проработала в одной компании 3.5 года. Хочу найти
                            такую же “свою” компанию, в которой будет приятно
                            расти и вносить вклад в её развитие. 💚
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
