import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Parallax } from 'swiper/modules';
import { PORTFOLIO } from '@utils/constants';
import { Project } from './blocks/Project';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/parallax';
import 'swiper/scss/effect-coverflow';

export function Portfolio() {
    return (
        <main className="portfolio">
            <Swiper
                className="portfolio-swiper"
                modules={[Navigation, Parallax, EffectCoverflow]}
                spaceBetween={60}
                slidesPerView={1}
                speed={600}
                navigation
                observer
                parallax
                effect="coverflow"
                coverflowEffect={{
                    slideShadows: false,
                    rotate: window.innerWidth > 576 ? 30 : 20,
                }}
            >
                <div
                    slot="container-start"
                    className="portfolio-swiper__parallax-bg"
                    data-swiper-parallax="-33%"
                />

                {PORTFOLIO.map((el) => (
                    <SwiperSlide className="portfolio-slide" key={el.name}>
                        <div className="wrapper portfolio-slide__wrapper">
                            <Project props={el} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </main>
    );
}
