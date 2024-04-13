import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import errorCat from '@assets/images/error-cat.png';

export function Error() {
    useEffect(() => {
        (document.querySelector('#root') as HTMLElement).style.setProperty(
            'display',
            'block'
        );
    }, []);

    return (
        <main className="error-bg">
            <section className="wrapper error">
                <h1 className="error__h1">Вы свернули куда-то не туда :( </h1>
                <Link to="/" className="btn error__link">
                    Главная
                </Link>
                <img
                    className="error__img"
                    src={errorCat}
                    alt="Error Page Cat"
                />
            </section>
        </main>
    );
}
