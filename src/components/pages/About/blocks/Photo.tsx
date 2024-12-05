import { motion } from 'framer-motion';
import photo from '@assets/images/photo.png';

export function Photo() {
    function getCorrectAnimation(block: 'inner' | 'outer') {
        return {
            scale:
                block === 'inner' ? [1, 1.2, 1.2, 1, 1] : [1, 0.9, 0.9, 1, 1],
            rotate:
                block === 'inner'
                    ? ['25deg', '25deg', 90, 90, '25deg']
                    : ['-5deg', '-5deg', 175, 175, '-25deg'],

            borderRadius: ['0.2rem', '0.2rem', '20%', '20%', '0.2rem'],
        };
    }

    const transition = {
        duration: 2,
        delay: 2,
        ease: 'easeInOut',
        times: [0, 0.2, 0.3, 0.8, 1],
        repeat: 0,
    };

    return (
        <motion.div
            className="photo-container"
            animate={getCorrectAnimation('outer')}
            transition={transition}
        >
            <motion.div
                className="photo-container_inner"
                animate={getCorrectAnimation('inner')}
                transition={transition}
            >
                <img
                    src={photo}
                    alt="CatOksana"
                    className="photo-container__img"
                />
            </motion.div>
        </motion.div>
    );
}
