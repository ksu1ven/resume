import { useState } from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE, MONTHES } from '@utils/constants';

export function Experience() {
    const [animationEndCounter, setAnimationEndCounter] = useState(0);

    function getDateReadableFormat(dateFrom: Date, dateTo: Date | string) {
        const dateFromReadable = `${MONTHES[dateFrom.getMonth()]} ${dateFrom.getFullYear()}`;
        const dateToReadable =
            dateTo instanceof Date
                ? `${MONTHES[dateTo.getMonth()]} ${dateTo.getFullYear()}`
                : dateTo;

        return `${dateFromReadable} - ${dateToReadable}`;
    }

    window.addEventListener('resize', () => {
        document
            .querySelectorAll('.experience-item')
            .forEach((item, index, array) => {
                item.setAttribute(
                    'style',
                    `border-radius: 0.2rem; opacity: 1; transform: translateX(${window.innerWidth >= 768 ? `${(index / (array.length - 1)) * 25}%` : 0})`
                );
            });
    });

    return (
        <main className="experience">
            <ul className="wrapper experience__list">
                {EXPERIENCE.map((item, ind, array) => (
                    <motion.li
                        key={ind}
                        className="experience-item"
                        initial={{
                            x: '-50%',
                            borderRadius:
                                window.innerWidth >= 768 ? '50px' : '10px',
                            opacity: 0,
                        }}
                        whileInView={
                            window.innerWidth >= 768
                                ? {
                                      x: `${(ind / (array.length - 1)) * 25}%`,
                                      borderRadius: '0.2rem',
                                      opacity: 1,
                                  }
                                : {
                                      x: 0,
                                      borderRadius: '0.2rem',
                                      opacity: 1,
                                  }
                        }
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.5,
                            delay: (ind - animationEndCounter) * 0.2,
                        }}
                        onAnimationComplete={() => {
                            setAnimationEndCounter((prev) => prev + 1);
                        }}
                    >
                        <img
                            src={item.img}
                            alt={item.profession}
                            className="experience-item__img"
                        />

                        <div className="experience-item__details">
                            <h3 className="experience-item__profession">
                                {item.profession}
                            </h3>

                            <h4 className="experience-item__company">
                                {item.company}, г. {item.city}
                            </h4>

                            <time className="experience-item__date">
                                {getDateReadableFormat(
                                    item.dateFrom,
                                    item.dateTo
                                )}
                            </time>

                            <p className="experience-item__description">
                                {item.skills
                                    ? `Приобретённые навыки: ${item.skills}`
                                    : item.description}
                            </p>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </main>
    );
}
