interface StudyBlockProps {
    direction: 'left' | 'right';
    id: string;
    text: {
        institution: string;
        year: number;
        course: string;
        position?: string;
    };
}

export function EducationBlock({
    direction,
    id,
    text: { institution, year, course, position },
}: StudyBlockProps) {
    return (
        <div
            className={`block education-block education-block_${direction}`}
            id={id}
        >
            <div
                className={`block-inner education-block_inner education-block_${direction}_inner`}
            >
                <h3 className="education-block__title">{institution}</h3>
                <h4 className="education-block__subtitle">{course}</h4>
                {position && <p>{position}</p>}
                <p>{year}</p>
            </div>
        </div>
    );
}
