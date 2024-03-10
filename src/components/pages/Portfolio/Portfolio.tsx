import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Navigation,
    Keyboard,
    A11y,
    EffectCoverflow,
    Parallax,
} from 'swiper/modules';
import { PORTFOLIO } from '@utils/constants';
import { PortfolioSlide } from './blocks/PortfolioSlide';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/a11y';
import 'swiper/scss/parallax';
import 'swiper/scss/effect-coverflow';

export function Portfolio() {
    return (
        <main className="portfolio-bg">
            <Swiper
                className="portfolio-swiper"
                grabCursor
                modules={[
                    Navigation,
                    Parallax,
                    EffectCoverflow,
                    Keyboard,
                    A11y,
                ]}
                spaceBetween={50}
                slidesPerView={1}
                speed={600}
                navigation
                parallax
                keyboard
                a11y={{
                    prevSlideMessage: 'Previous slide',
                    nextSlideMessage: 'Next slide',
                }}
                effect="coverflow"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    data-swiper-parallax="-33%"
                />
                <div className="wrapper">
                    {PORTFOLIO.map((el) => (
                        <SwiperSlide
                            className="portfolio-slide__container"
                            key={el.name}
                        >
                            <PortfolioSlide props={el} />
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </main>
    );
}
