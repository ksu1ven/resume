import { EXPERIENCE, MONTHES } from '@utils/constants';

export function Experience() {
    return (
        <main className="experience-bg">
            <div className="wrapper">
                <ul className="experience">
                    {EXPERIENCE.map((item, ind) => (
                        <li
                            key={ind}
                            className="experience__item"
                            style={
                                window.innerWidth >= 768
                                    ? { marginLeft: `${ind * 5}rem` }
                                    : {}
                            }
                        >
                            <img
                                src={item.img}
                                alt={item.profession}
                                className="item__img"
                            />
                            <div className="item__details">
                                <h2 className="item__profession">
                                    {item.profession}
                                </h2>
                                <h3 className="item__company">
                                    {item.company}, г. {item.city}
                                </h3>

                                <h4 className="item__date">
                                    {`${MONTHES[item.dateFrom.getMonth()]} ${item.dateFrom.getFullYear()} -
                                            ${MONTHES[item.dateTo.getMonth()]} ${item.dateTo.getFullYear()}`}
                                </h4>
                                <p className="item__description">
                                    {item.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
