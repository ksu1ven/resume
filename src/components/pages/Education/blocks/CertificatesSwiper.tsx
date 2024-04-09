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
    setSwiperVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CertificatesSwiper({
    activeSlide,
    setSwiperVisible,
}: CertificatesSwiperProps) {
    return (
        <Swiper
            className="wrapper certificates-swiper"
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
            <button
                type="button"
                onClick={() => setSwiperVisible(false)}
                onKeyDown={() => setSwiperVisible(false)}
                className="swiper-close"
                aria-label="close swiper"
            />
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
    );
}
