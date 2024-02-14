import photo from '@assets/images/photo.png';

export function About() {
    return (
        <main className="about">
            <section className="contacts">
                <div className="photo-container">
                    <div className="photo-container_inner">
                        <img src={photo} alt="CatOksana" className="photo" />
                    </div>
                </div>

                <div className="contacts__content">
                    <h1>Привет! Я КотОксана, JavaScript разработчик.</h1>
                    <div className="contacts__block">
                        <h2>Мои контакты</h2>
                        <ul>
                            <li>Телефон</li>
                            <li>Eмайл</li>
                            <li>Телеграмм</li>
                            <li>Github</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="description">
                Имею опыт написания интернет-магазинов, различных сайтов и
                приложений. В будущем планирую изучать в том числе backend
                (Node.js), а также технологии, требуемые на проекте. Есть опыт
                работы в команде, не боюсь быть тимлидом и брать ответственность
                за решения. Трудоголик, способна совмещать работу и доп.
                обучение 6 дней в неделю. Перфекционист, любитель математики в
                школе и программист с большими амбициями
            </section>
        </main>
    );
}
