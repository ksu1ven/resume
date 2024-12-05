import { motion } from 'framer-motion';
import arrowIcon from '@assets/icons/arrow.png';

interface StudyBlockProps {
    direction: 'left' | 'right';
    id: string;
}

export function EducationArrow({ direction, id }: StudyBlockProps) {
    return (
        <motion.div
            className={`education-arrow education-arrow_${direction}`}
            id={id}
        >
            <img src={arrowIcon} alt="arrow" className="education-arrow__img" />
        </motion.div>
    );
}
