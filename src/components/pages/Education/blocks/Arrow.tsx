import { motion } from 'framer-motion';
import arrowIcon from '@assets/icons/arrow.png';

interface StudyBlockProps {
    direction: 'left' | 'right';
    id: string;
}

export function Arrow({ direction, id }: StudyBlockProps) {
    return (
        <motion.div className={`arrow arrow_${direction}`} id={id}>
            <img src={arrowIcon} alt="arrow" className="arrow__img" />
        </motion.div>
    );
}
