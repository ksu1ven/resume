import { motion } from 'framer-motion';
import { EXPERIENCE, MONTHES } from '@utils/constants';

export function Experience() {
    return (
        <main className="experience-bg">
            <ul className="wrapper experience">
                {EXPERIENCE.map((item, ind) => (
                    <motion.li
                        key={ind}
                        className="experience__item"
                        style={
                            window.innerWidth >= 768
                                ? { marginLeft: `${ind * 5}rem` }
                                : {}
                        }
                        initial={{
                            x: '-100%',
                            borderRadius: '50px',
                            scaleX: 0,
                        }}
                        animate={
                            window.innerWidth >= 768
                                ? {
                                      marginLeft: `${ind * 5}rem`,
                                      x: 0,
                                      borderRadius: '0.2rem',
                                      scaleX: 1,
                                  }
                                : {}
                        }
                        transition={{
                            duration: 0.5,
                            delay: (ind + 1) * 0.2,
                        }}
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
                    </motion.li>
                ))}
            </ul>
        </main>
    );
}
