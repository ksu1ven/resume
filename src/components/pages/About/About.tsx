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

                    <p>
                        Имею опыт написания интернет-магазинов, различных
                        веб-сайтов и приложений. Хочу углубить свой опыт в
                        серверных технологиях (Node.js), и других инструментах,
                        необходимых для успеха проекта. Есть опыт работы в
                        команде, не боюсь быть тимлидом и брать ответственность
                        за решения. Трудоголик, способна совмещать работу и
                        дополнительное обучение 6 дней в неделю. Перфекционист,
                        любитель математики в школе и программист с большими
                        амбициями.
                    </p>
                </div>
            </section>
        </main>
    );
}
