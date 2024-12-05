import React from 'react';
import { EDUCATION } from '@utils/constants';
import { EducationBlock } from './blocks/EducationBlock';
import { EducationArrow } from './blocks/EducationArrow';
import { EducationCats } from './blocks/EducationCats';

export function Education() {
    return (
        <main className="education">
            <div className="wrapper education__wrapper">
                <div className="education-path">
                    {EDUCATION.map((item, ind, arr) => (
                        <React.Fragment key={item.course}>
                            <EducationBlock
                                direction={ind % 2 === 0 ? 'left' : 'right'}
                                text={item}
                                id={`block-${ind + 1}`}
                            />
                            {ind + 1 !== arr.length && (
                                <EducationArrow
                                    direction={ind % 2 !== 0 ? 'left' : 'right'}
                                    id={`arrow-${ind + 1}`}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>

                <EducationCats />
            </div>
        </main>
    );
}
