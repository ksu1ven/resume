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
        <div className={`education-block education-block_${direction}`} id={id}>
            <div
                className={`education-block_inner education-block_${direction}_inner`}
            >
                <h2 className="education-block__institution">{institution}</h2>
                <h3>{course}</h3>
                {position && <h3>{position}</h3>}
                <h3>{year}</h3>
            </div>
        </div>
    );
}
