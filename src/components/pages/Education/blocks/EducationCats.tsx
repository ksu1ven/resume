import { useState, useRef } from 'react';
import talkingCats from '@assets/videos/education-cats.mp4';
import certificateJs from '@assets/images/certificate-js.png';
import certificateReact from '@assets/images/certificate-react.png';
import talkingCloudLeft from '@assets/icons/talking-cloud-left.png';
import talkingCloudRight from '@assets/icons/talking-cloud-right.png';
import certificateSwiperBg from '@assets/images/swiper-certificates.jpg';
import { CertificatesSwiper } from './CertificatesSwiper';

export function EducationCats() {
    const [isVideoPlaying, setVideoPlaying] = useState(false);
    const [isSwiperVisible, setSwiperVisible] = useState(false);

    const [catHRSpeech, setCatHRSpeech] = useState('');
    const [catMeSpeech, setCatMeSpeech] = useState('');
    const [catMeCertificate, setCatMeCertificate] = useState<
        'js' | 'react' | null
    >(null);

    const videoRef = useRef<HTMLVideoElement>(null);
    const isVideoCanPlayRef = useRef(false);
    const timersId = useRef<ReturnType<typeof setTimeout>[] | null[]>([
        null,
        null,
        null,
        null,
    ]);

    function handleTalk() {
        setVideoPlaying(!isVideoPlaying);

        if (!isVideoPlaying && videoRef.current && isVideoCanPlayRef.current) {
            videoRef.current.play();
        } else if (videoRef.current) {
            setCatHRSpeech('');
            setCatMeSpeech('');
            timersId.current.forEach((el) => {
                if (el) clearTimeout(el);
            });
            videoRef.current.currentTime = 0;
            videoRef.current.pause();
            return;
        }
        setCatHRSpeech('Котик, чем докажешь, что знаешь JavaScript?');
        timersId.current[0] = setTimeout(() => {
            setCatHRSpeech('');
            setCatMeCertificate('js');
            setCatMeSpeech('У меня есть серьёзная бумажка. Воть!');
        }, 2500);
        timersId.current[1] = setTimeout(() => {
            setCatMeSpeech('');
            setCatHRSpeech('Этого мало. Нужен фреймворк.');
        }, 4200);
        timersId.current[2] = setTimeout(() => {
            setCatHRSpeech('');
            setCatMeCertificate('react');
            setCatMeSpeech('Воть бумажка на React.');
        }, 8400);
        timersId.current[3] = setTimeout(() => {
            setCatMeCertificate(null);
            setCatMeSpeech('И на Node JS скоро будет.');
        }, 10000);
    }

    function handleClickOverlay(el: HTMLElement) {
        if (el.classList.contains('swiper__overlay')) setSwiperVisible(false);
    }

    return (
        <>
            <div
                className="education-cats"
                onClick={handleTalk}
                onKeyDown={handleTalk}
                role="presentation"
            >
                <div className="education-cats__laptop">
                    <div className="cat-speech" role="presentation">
                        {catHRSpeech && (
                            <div className="cat-speech__cloud cat-speech__cloud_hr">
                                {catHRSpeech}
                            </div>
                        )}
                        {catMeSpeech && (
                            <div className="cat-speech__cloud cat-speech__cloud_me">
                                {catMeSpeech}
                                {catMeCertificate && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setVideoPlaying(false);
                                            setSwiperVisible(true);
                                        }}
                                    >
                                        <img
                                            className="cat-speech__certificate"
                                            src={
                                                catMeCertificate === 'js'
                                                    ? certificateJs
                                                    : certificateReact
                                            }
                                            alt={`${catMeCertificate} certificate`}
                                        />
                                    </button>
                                )}
                            </div>
                        )}
                        <div />
                    </div>

                    <video
                        ref={videoRef}
                        src={talkingCats}
                        className="education-cats__video"
                        preload="auto"
                        onCanPlay={() => {
                            isVideoCanPlayRef.current = true;
                        }}
                        onEnded={() => {
                            setVideoPlaying(false);
                            setCatHRSpeech('');
                            setCatMeSpeech('');
                        }}
                    />
                </div>
                <p className="education-cats__description">
                    Нажмите на котиков, они покажут мои сертификаты. <br />
                    Подробнее рассмотреть сертификаты вы можете кликнув на них.
                </p>
            </div>
            {isSwiperVisible && catMeCertificate && (
                <div
                    className="swiper__overlay"
                    onClick={(e) => handleClickOverlay(e.target as HTMLElement)}
                    onKeyDown={(e) =>
                        handleClickOverlay(e.target as HTMLElement)
                    }
                    role="presentation"
                >
                    <CertificatesSwiper
                        activeSlide={catMeCertificate}
                        setSwiperVisible={setSwiperVisible}
                    />
                </div>
            )}

            <link rel="preload" as="image" href={certificateReact} />
            <link rel="preload" as="image" href={certificateJs} />
            <link rel="preload" as="image" href={talkingCloudLeft} />
            <link rel="preload" as="image" href={talkingCloudRight} />
            <link rel="preload" as="image" href={certificateSwiperBg} />
        </>
    );
}
