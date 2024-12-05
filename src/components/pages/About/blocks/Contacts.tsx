import { CONTACTS, PROFESSIONAL_CONTACTS } from '@utils/constants';
import { ContactsList } from './ContactsList';

export function Contacts() {
    return (
        <>
            <div className="personal-info__right-block">
                <h1 className="personal-info__title">
                    Привет! Я КотОксана, <br />
                    Frontend разработчик.
                </h1>
                <div className="contacts">
                    <h2 className="contacts__subtitle">Мои контакты</h2>
                    <ContactsList list={CONTACTS} />
                </div>
            </div>
            <ContactsList
                list={PROFESSIONAL_CONTACTS}
                customClass="contacts-list_professional"
            />
        </>
    );
}
