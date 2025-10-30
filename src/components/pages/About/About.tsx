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
                        <li className="description__item">
                            Имею коммерческий опыт написания интернет-магазинов,
                            телеграм-ботов, мессенджеров на WebSocket, различных
                            веб-сайтов и приложений.
                        </li>

                        <li className="description__item">
                            Умею писать код на различном стеке, от Vue (текущий
                            любимый стек) и React до PHP/WordPress. Знакома с
                            THREE.js и Phaser.
                        </li>

                        <li className="description__item">
                            Являясь фронт-лидом текущей команды, самостоятельно
                            решаю все задачи, даже те, в которых GPT предлагает
                            неработающие решения.
                        </li>

                        <li className="description__item">
                            Задачи, которые решала: вёрстка под все устройства,
                            интеграция бэка с использованием axios, Swagger,
                            логика реал-тайм чата на WebSocket, платежи
                            Telegram, эквайринг CloudPayments с сохранением карт
                            и платежами через токен и криптограмму,
                            интернационализация через i18n, подключение TON
                            кошелька, запуск игр на Unity в Web, карты Leaflet и
                            Yandex, диаграммы Chart.js, различные слайдеры на
                            Swiper, имитация браузерного зума с логикой границ и
                            др.
                        </li>

                        <li className="description__item">
                            Есть опыт менторинга Junior-специалиста на текущем
                            месте работы.
                        </li>

                        <li className="description__item">
                            Имею два девайса на Iphone и Android, разбираюсь в
                            специфичных для них багах, не дёргая других членов
                            команды.
                        </li>

                        <li className="description__item">
                            Для компаний не из Беларуси работаю как самозанятая,
                            вы не платите за меня налоги.
                        </li>

                        <li className="description__item">
                            Причина поиска нового места работы в обоих случаях -
                            отсутствие новых проектов (и, соответственно,
                            сокращение финансовых возможностей) у компаний. До
                            программирования проработала в одной компании 3.5
                            года, сейчас хочу найти такую же &quot;свою&quot;
                            компанию, из которой не захочется уходить и
                            захочется вносить свой вклад в её рост.
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
