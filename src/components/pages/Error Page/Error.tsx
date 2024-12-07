import { Link } from 'react-router-dom';
import errorCat from '@assets/images/error-cat.png';

export function Error() {
    return (
        <main className="error">
            <div className="wrapper error__wrapper">
                <h1 className="error__title">Вы свернули куда-то не туда :(</h1>

                <Link to="/" className="btn error__link">
                    Главная
                </Link>

                <img
                    className="error__img"
                    src={errorCat}
                    alt="Error Page Cat"
                />
            </div>
        </main>
    );
}
