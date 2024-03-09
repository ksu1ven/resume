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
            className={`education__block education__block_${direction}`}
            id={id}
        >
            <div
                className={`education__block_inner education__block_${direction}_inner`}
            >
                <h2 className="education__block__institution">{institution}</h2>
                <h3>{course}</h3>
                {position && <h3>{position}</h3>}
                <h3>{year}</h3>
            </div>
        </div>
    );
}
