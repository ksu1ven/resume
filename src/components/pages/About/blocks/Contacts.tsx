import { Link } from 'react-router-dom';
import { CONTACTS, PROFESSIONAL_CONTACTS } from '@utils/constants';

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
                    {CONTACTS.map((contact) => (
                        <li className="contacts__item" key={contact.alt}>
                            <Link
                                to={contact.to}
                                className="contacts__item__link text-animation"
                            >
                                <img
                                    src={contact.src}
                                    alt={contact.alt}
                                    className="icon contacts__item__icon"
                                />
                                {contact.innerHtml}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export function ProfessionalContacts() {
    return (
        <ul className="contacts__list_professional">
            {PROFESSIONAL_CONTACTS.map((contact) => (
                <li className="contacts__item" key={contact.alt}>
                    <Link
                        to={contact.to}
                        className="contacts__item__link text-animation"
                    >
                        <img
                            src={contact.src}
                            alt={contact.alt}
                            className="icon contacts__item__icon"
                        />
                        {contact.innerHtml}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
