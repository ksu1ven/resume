import { Link } from 'react-router-dom';
import { ContactsItem } from '@utils/types';

interface ContactsListProps {
    list: ContactsItem[];
    customClass?: string;
}

export function ContactsList({ list, customClass }: ContactsListProps) {
    return (
        <ul className={`contacts-list ${customClass || ''}`}>
            {list.map((contact) => (
                <li className="contacts-list__item" key={contact.alt}>
                    <Link to={contact.to} className="contacts-list__link">
                        <img
                            src={contact.src}
                            alt={contact.alt}
                            className="contacts-list__icon icon"
                        />

                        <span className="contacts-list__text contacts-list__text_initial">
                            {contact.innerHtml}
                        </span>

                        <span className="contacts-list__text contacts-list__text_animated text-animation">
                            {contact.innerHtml}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
