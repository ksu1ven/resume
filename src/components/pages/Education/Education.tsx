import { EDUCATION } from '@utils/constants';
import { EducationBlock } from './blocks/EducationBlock';
import { Arrow } from './blocks/Arrow';
import { EducationCats } from './blocks/EducationCats';

export function Education() {
    return (
        <main className="education-bg">
            <div className="wrapper education">
                <section className="education-path">
                    {EDUCATION.map((item, ind, arr) => (
                        <>
                            <EducationBlock
                                direction={ind % 2 === 0 ? 'left' : 'right'}
                                text={item}
                                id={`block-${ind + 1}`}
                                key={item.institution}
                            />
                            {ind + 1 !== arr.length && (
                                <Arrow
                                    direction={ind % 2 !== 0 ? 'left' : 'right'}
                                    id={`arrow-${ind + 1}`}
                                    key={ind}
                                />
                            )}
                        </>
                    ))}
                </section>

                <EducationCats />
            </div>
        </main>
    );
}
