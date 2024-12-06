import { useState } from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE, MONTHES } from '@utils/constants';

export function Experience() {
    const [animationEndCounter, setAnimationEndCounter] = useState(0);

    window.addEventListener('resize', () => {
        document.querySelectorAll('.item').forEach((item, index, array) => {
            item.setAttribute(
                'style',
                `border-radius: 0.2rem; opacity: 1; transform: translateX(${window.innerWidth >= 768 ? `${(index / (array.length - 1)) * 25}%` : 0})`
            );
        });
    });

    return (
        <main className="experience-bg">
            <ul className="wrapper experience">
                {EXPERIENCE.map((item, ind, array) => (
                    <motion.li
                        key={ind}
                        className="item"
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
                                Приобретённые навыки: {item.description}
                            </p>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </main>
    );
}
