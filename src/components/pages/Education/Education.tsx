import { EducationBlock } from './blocks/EducationBlock';
import { Arrow } from './blocks/Arrow';
import { EducationCats } from './blocks/EducationCats';

export function Education() {
    return (
        <main className="education-bg">
            <div className="wrapper">
                <div className="education">
                    <section className="education-path">
                        <EducationBlock
                            direction="left"
                            text={{
                                institution:
                                    'Белорусский государственный экономический университет',
                                year: 2016,
                                course: 'Финансы и кредит',
                            }}
                            id="block-1"
                        />
                        <Arrow direction="right" id="arrow-1" />
                        <EducationBlock
                            direction="right"
                            text={{
                                institution: 'The Rolling Scopes School',
                                year: 2023,
                                course: 'JavaScript/Front-end',
                                position: 'Позиция - 78 из 1379',
                            }}
                            id="block-2"
                        />
                        <Arrow direction="left" id="arrow-2" />
                        <EducationBlock
                            direction="left"
                            text={{
                                institution: 'The Rolling Scopes School',
                                year: 2024,
                                course: 'React',
                                position: 'Позиция - 5 из 1077',
                            }}
                            id="block-3"
                        />
                        <Arrow direction="right" id="arrow-3" />
                        <EducationBlock
                            direction="right"
                            text={{
                                institution: 'The Rolling Scopes School',
                                year: 2024,
                                course: 'Node JS',
                                position: 'В процессе обучения',
                            }}
                            id="block-4"
                        />
                    </section>

                    <EducationCats />
                </div>
            </div>
        </main>
    );
}
