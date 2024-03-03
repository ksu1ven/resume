import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Navigation,
    EffectFlip,
    Keyboard,
    Mousewheel,
    A11y,
} from 'swiper/modules';
import certificateJs from '@assets/images/certificate-js.png';
import certificateReact from '@assets/images/certificate-react.png';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/a11y';
import 'swiper/scss/effect-flip';

interface CertificatesSwiperProps {
    activeSlide: string;
}

export function CertificatesSwiper({ activeSlide }: CertificatesSwiperProps) {
    return (
        <div className="wrapper">
            <Swiper
                className="certificates-swiper"
                grabCursor
                initialSlide={activeSlide === 'js' ? 0 : 1}
                modules={[Navigation, EffectFlip, Keyboard, Mousewheel, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                keyboard
                mousewheel
                a11y={{
                    prevSlideMessage: 'Previous slide',
                    nextSlideMessage: 'Next slide',
                }}
                effect="flip"
                flipEffect={{
                    limitRotation: true,
                    slideShadows: false,
                }}
                speed={800}
                onSwiper={() => {
                    document.body.style.overflow = 'hidden';
                }}
                onDestroy={() => {
                    document.body.style.overflow = 'auto';
                }}
            >
                <SwiperSlide className="certificates-slide">
                    <img
                        className="certificates-slide__img"
                        src={certificateJs}
                        alt="JS certificate"
                    />
                </SwiperSlide>
                <SwiperSlide className="certificates-slide">
                    <img
                        className="certificates-slide__img"
                        src={certificateReact}
                        alt="React certificate"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
