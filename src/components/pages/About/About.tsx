import { Photo } from './blocks/Photo';
import { Contacts, ProfessionalContacts } from './blocks/Contacts';

export function About() {
    return (
        <main className="about">
            <section className="personal-info-bg">
                <div className="wrapper">
                    <div className="personal-info">
                        <Photo />
                        <Contacts />
                    </div>
                    <ProfessionalContacts />
                </div>
            </section>
            <section className="description">
                <div className="wrapper">
                    <h2 className="description__h2">Немного обо мне</h2>
                    Имею опыт написания интернет-магазинов, различных веб-сайтов
                    и приложений. Хочу углубить свой опыт в серверных
                    технологиях (Node.js), и других инструментах, необходимых
                    для успеха проекта. Есть опыт работы в команде, не боюсь
                    быть тимлидом и брать ответственность за решения.
                    Трудоголик, способна совмещать работу и дополнительное
                    обучение 6 дней в неделю. Перфекционист, любитель математики
                    в школе и программист с большими амбициями.
                </div>
            </section>
        </main>
    );
}
