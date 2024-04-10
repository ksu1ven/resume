import { motion } from 'framer-motion';
import photo from '@assets/images/photo.png';

export function Photo() {
    const rotateDegreeOuter = '-5deg';
    const rotateDegreeInner = '25deg';
    const borderRadius = '0.2rem';

    function getCorrectAnimation(block: 'inner' | 'outer') {
        return {
            scale:
                block === 'inner' ? [1, 1.2, 1.2, 1, 1] : [1, 0.9, 0.9, 1, 1],
            rotate:
                block === 'inner'
                    ? [
                          rotateDegreeInner,
                          rotateDegreeInner,
                          90,
                          90,
                          rotateDegreeInner,
                      ]
                    : [
                          rotateDegreeOuter,
                          rotateDegreeOuter,
                          175,
                          175,
                          rotateDegreeOuter,
                      ],

            borderRadius: [
                borderRadius,
                borderRadius,
                '20%',
                '20%',
                borderRadius,
            ],
        };
    }

    const transition = {
        duration: 2,
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
                <img src={photo} alt="CatOksana" className="photo" />
            </motion.div>
            <link rel="preload" as="image" href={photo} />
        </motion.div>
    );
}
