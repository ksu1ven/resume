import { Photo } from './blocks/Photo';
import { Contacts, ProfessionalContacts } from './blocks/Contacts';

export function About() {
    return (
        <main className="about">
            <section className="personal-info">
                <div className="wrapper">
                    <div className="personal-info__block">
                        <Photo />
                        <Contacts />
                    </div>
                    <ProfessionalContacts />
                </div>
            </section>
            <section className="description">
                <div className="wrapper">
                    <h2>Немного обо мне</h2>
                    Имею опыт написания интернет-магазинов, различных сайтов и
                    приложений. В будущем планирую изучать в том числе backend
                    (Node.js), а также технологии, требуемые на проекте. Есть
                    опыт работы в команде, не боюсь быть тимлидом и брать
                    ответственность за решения. Трудоголик, способна совмещать
                    работу и доп. обучение 6 дней в неделю. Перфекционист,
                    любитель математики в школе и программист с большими
                    амбициями
                </div>
            </section>
        </main>
    );
}
