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
    const imageOffset = window.innerWidth > 768 ? 4 : 1.5;
    const windowWidth = window.innerWidth;
    const remWidth =
        document.body.clientWidth /
        parseInt(
            window.getComputedStyle(document.documentElement).fontSize,
            10
        );

    let imageWidth;
    let imageHeight;

    if (windowWidth > 768) {
        imageWidth = 25;
        imageHeight = 21;
    } else {
        imageWidth = remWidth * 0.65;
        imageHeight = remWidth * 0.65 * 0.7;
    }

    function changeTransition(el: HTMLElement) {
        el.style.setProperty('transition', 'ease-in-out 0.4s');
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
                        <Link
                            to={image.url}
                            target="blank"
                            key={ind}
                            className="img-container__link"
                        >
                            <img
                                src={image.img}
                                alt={`${name} ${ind}`}
                                loading="lazy"
                                style={{
                                    top: `${ind * imageOffset}rem`,
                                    left: `${ind * imageOffset}rem`,
                                }}
                                className="portfolio-slide__img"
                                onMouseOut={(e) =>
                                    changeTransition(
                                        e.target as HTMLImageElement
                                    )
                                }
                                onMouseOver={(e) =>
                                    changeTransition(
                                        e.target as HTMLImageElement
                                    )
                                }
                                onFocus={(e) => {
                                    changeTransition(
                                        e.target as HTMLImageElement
                                    );
                                }}
                                onBlur={(e) =>
                                    changeTransition(
                                        e.target as HTMLImageElement
                                    )
                                }
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
