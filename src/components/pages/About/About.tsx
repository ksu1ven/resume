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
                        веб-сайтов и приложений. Моим преимуществом является
                        умение писать код на различном стеке, от Reacta и Vue до
                        PHP (WordPress). Могу даже развернуть на сайте несложную
                        3D сцену на THREE.js.
                        <br />
                        <br />В кратчайшие сроки cпособна разобраться с любым
                        инструментом, с которым работает Ваша компания. Имею
                        достаточный опыт командной разработки, хорошо знакома с
                        Git. Перфекционист, любитель математики в школе и
                        программист с большими амбициями.
                    </p>
                </div>
            </section>
        </main>
    );
}
