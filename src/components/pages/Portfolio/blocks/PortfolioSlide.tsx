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
    const imageOffset = window.innerWidth > 576 ? 4 : 1.5;
    let imageWidth;
    let imageHeight;

    if (window.innerWidth > 768) {
        imageWidth = 25;
        imageHeight = 21;
    } else if (window.innerWidth > 576) {
        imageWidth = 18;
        imageHeight = 15;
    } else {
        imageWidth = 11;
        imageHeight = 8;
    }
    return (
        <div className="portfolio-slide">
            <div className="img-container">
                <div
                    className="img-container_inner"
                    style={{
                        width: `${imageWidth + (images.length - 1) * imageOffset}rem`,
                        height: `${imageHeight + (images.length - 1) * imageOffset}rem`,
                    }}
                >
                    {images.map((image, ind) => (
                        <Link to={image.url} target="blank" key={ind}>
                            <img
                                src={image.img}
                                alt={`${name} ${ind}`}
                                style={{
                                    top: `${ind * imageOffset}rem`,
                                    left: `${ind * imageOffset}rem`,
                                }}
                                className="portfolio-slide__img"
                                data-swiper-parallax={-1000 * (ind + 1)}
                            />
                        </Link>
                    ))}
                </div>
            </div>
            <div className="portfolio-slide__content">
                <h1
                    data-swiper-parallax="-1000"
                    className="portfolio-slide__name"
                >
                    {name}
                </h1>
                <h2
                    data-swiper-parallax="-900"
                    className="portfolio-slide__type"
                >
                    {type} проект
                </h2>
                <Link
                    to={deploy}
                    data-swiper-parallax="-750"
                    className="portfolio-slide__link"
                >
                    Деплой
                </Link>
                <Link
                    to={repo}
                    data-swiper-parallax="-650"
                    className="portfolio-slide__link"
                >
                    Репозиторий
                </Link>
                <h3
                    data-swiper-parallax="-500"
                    className="portfolio-slide__stack"
                >
                    Стек: {stack}
                </h3>
                {type === 'Командный' && (
                    <h4 data-swiper-parallax="-300">
                        Зона ответственности: {responsibility}
                    </h4>
                )}
                <p
                    data-swiper-parallax="-100"
                    className="portfolio-slide__description"
                >
                    {description}
                </p>
            </div>
        </div>
    );
}
