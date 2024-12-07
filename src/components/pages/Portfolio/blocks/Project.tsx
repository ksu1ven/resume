import { Link } from 'react-router-dom';
import { PortfolioItem } from '@utils/types';

interface PortfolioSlideProps {
    props: PortfolioItem;
}

export function Project({
    props: {
        name,
        images,
        deploy,
        repo,
        stack,
        description,
        type,
        responsibility,
    },
}: PortfolioSlideProps) {
    return (
        <div className="project">
            <div className="project__img-container">
                {images.map((image, ind) => (
                    <Link
                        to={image.url}
                        target="blank"
                        key={ind}
                        className="project__img-link"
                    >
                        <img
                            src={image.img}
                            alt={`${name} ${ind}`}
                            loading="lazy"
                            className="project__img"
                            data-swiper-parallax={-1000 * (ind + 1)}
                        />
                    </Link>
                ))}
            </div>

            <div className="project__content">
                <h3 data-swiper-parallax="-1000" className="project__name">
                    {name}
                </h3>

                {type && (
                    <h4 data-swiper-parallax="-900" className="project__type">
                        {type} проект
                    </h4>
                )}

                {deploy && (
                    <Link
                        to={deploy}
                        data-swiper-parallax="-750"
                        className="project__link"
                    >
                        Сайт
                    </Link>
                )}

                {repo && (
                    <Link
                        to={repo}
                        data-swiper-parallax="-650"
                        className="project__link"
                    >
                        Репозиторий
                    </Link>
                )}

                <h4 data-swiper-parallax="-500" className="project__stack">
                    Стек: {stack}
                </h4>

                {type === 'Командный' && (
                    <h4 data-swiper-parallax="-300">
                        Зона ответственности: {responsibility}
                    </h4>
                )}

                <p data-swiper-parallax="-100" className="project__description">
                    {description}
                </p>
            </div>
        </div>
    );
}
