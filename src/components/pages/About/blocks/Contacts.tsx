import { Link } from 'react-router-dom';
import phoneIcon from '@assets/icons/phone.png';
import mailIcon from '@assets/icons/mail.png';
import telegramIcon from '@assets/icons/telegram.png';
import githubIcon from '@assets/icons/github.png';
import RSIcon from '@assets/icons/rs-logo.jpg';

export function Contacts() {
    return (
        <div className="contacts">
            <h1 className="greeting">
                Привет! Я КотОксана, <br />
                Frontend разработчик.
            </h1>
            <div className="contacts__block">
                <h2 className="contacts__h2">Мои контакты</h2>
                <ul className="contacts__list">
                    <li className="contacts__item">
                        <img
                            src={phoneIcon}
                            alt="Phone icon"
                            className="contacts__item__icon"
                        />
                        <Link
                            to="tel:+375291219346"
                            className="contacts__item__link"
                        >
                            +375(29) 121-93-46
                        </Link>
                    </li>
                    <li className="contacts__item">
                        <img
                            src={mailIcon}
                            alt="Mail icon"
                            className="contacts__item__icon"
                        />
                        <Link
                            to="mailto:ksu1ven@mail.ru"
                            className="contacts__item__link"
                        >
                            ksu1ven@mail.ru
                        </Link>
                    </li>
                    <li className="contacts__item">
                        <img
                            src={telegramIcon}
                            alt="Telegram icon"
                            className="contacts__item__icon"
                        />
                        <Link
                            to="https://t.me/ksu1ven"
                            className="contacts__item__link"
                        >
                            https://t.me/ksu1ven
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export function ProfessionalContacts() {
    return (
        <ul className="contacts__list_professional">
            <li className="contacts__item">
                <img
                    src={githubIcon}
                    alt="Github icon"
                    className="contacts__item__icon"
                />
                <Link
                    to="https://github.com/ksu1ven"
                    className="contacts__item__link"
                >
                    GitHub
                </Link>
            </li>
            <li className="contacts__item">
                <img
                    src={RSIcon}
                    alt="RS School icon"
                    className="contacts__item__icon"
                />
                <Link
                    to="https://app.rs.school/cv/3adc8c9f-82d7-4588-adae-79ed41ed4c51"
                    className="contacts__item__link"
                >
                    RS School CV
                </Link>
            </li>
        </ul>
    );
}
