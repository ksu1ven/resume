import { Link } from 'react-router-dom';
import { PortfolioItem } from '@utils/types';

interface PortfolioSlideProps {
    props: PortfolioItem;
}

export function PortfolioSlide({
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
    const imageOffset = 4;

    return (
        <div className="portfolio-slide">
            <div className="portfolio-slide__img-container">
                <div
                    className="portfolio-slide__img-container_inner"
                    style={{
                        width: `${25 + (images.length - 1) * imageOffset}rem`,
                        height: `${21 + (images.length - 1) * imageOffset}rem`,
                    }}
                >
                    {images.map((img, ind) => (
                        <img
                            src={img}
                            alt={`${name} ${ind}`}
                            style={{
                                top: `${ind * imageOffset}rem`,
                                left: `${ind * imageOffset}rem`,
                            }}
                            data-swiper-parallax={-1000 * (ind + 1)}
                            key={ind}
                        />
                    ))}
                </div>
            </div>
            <div className="portfolio-slide__content">
                <h1 data-swiper-parallax="-1000">{name}</h1>
                <h2 data-swiper-parallax="-900">{type} проект</h2>
                <Link to={deploy} data-swiper-parallax="-750">
                    Деплой
                </Link>
                <Link to={repo} data-swiper-parallax="-650">
                    Репозиторий
                </Link>
                <h3 data-swiper-parallax="-500">Стек: {stack}</h3>
                {type === 'Командный' && (
                    <h4 data-swiper-parallax="-300">
                        Зона ответственности: {responsibility}
                    </h4>
                )}
                <p data-swiper-parallax="-100">{description}</p>
            </div>
        </div>
    );
}
