/* eslint-disable react/no-unknown-property */
import { useState, useRef, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import skillsCat from '@assets/videos/skills-cat.webm';
import talkingCloudLeft from '@assets/icons/talking-cloud-right.png';

export function Skills() {
    const [isVideoPlaying, setVideoPlaying] = useState(false);
    const [isVideoCanPlay, setVideoCanPlay] = useState(false);
    const [videoPlayedTimes, setVideoPlayedTimes] = useState(0);
    const [catSpeech, setCatSpeech] = useState('');
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const cloudRef = useRef<HTMLDivElement | null>(null);
    const timersId = useRef<ReturnType<typeof setTimeout>[] | null[]>([
        null,
        null,
        null,
        null,
        null,
        null,
    ]);

    function handleSpeak() {
        setVideoPlaying(!isVideoPlaying);

        if (!isVideoPlaying && videoRef.current) {
            videoRef.current.play();
        } else if (videoRef.current && cloudRef.current) {
            timersId.current.forEach((el) => {
                if (el) clearTimeout(el);
            });
            setCatSpeech('');
            setVideoPlayedTimes(0);
            videoRef.current.currentTime = 0;
            videoRef.current.pause();
            return;
        }

        timersId.current[0] = setTimeout(() => {
            setCatSpeech('HTML CSS SСSS');
        }, 900);
        timersId.current[1] = setTimeout(() => {
            setCatSpeech('JavaScript TypeScript PHP');
        }, 3700);
        timersId.current[2] = setTimeout(() => {
            setCatSpeech('React Redux Next.js Vue Pinia');
        }, 6700);
        timersId.current[3] = setTimeout(() => {
            setCatSpeech('WordPress Shopify');
        }, 9200);
        timersId.current[4] = setTimeout(() => {
            setCatSpeech('Jest Vitest THREE.js');
        }, 12000);
        timersId.current[5] = setTimeout(() => {
            setCatSpeech('Git');
        }, 15000);
    }

    useEffect(() => {
        if (isVideoPlaying) cloudRef.current?.classList.add('cloud-move');
        else cloudRef.current?.classList.remove('cloud-move');
    }, [isVideoPlaying]);

    const catVariants: Variants = {
        offscreen: {
            y: '0%',
        },
        onscreen: {
            y: ['500%', '0%'],
            transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 1.2,
                ease: 'easeInOut',
                times: [0.7, 0.5],
            },
        },
    };

    return (
        <>
            <main className="skills">
                <div className="wrapper skills__wrapper">
                    <motion.div
                        className="skills-cat"
                        role="presentation"
                        onClick={handleSpeak}
                        onKeyDown={handleSpeak}
                        initial="offscreen"
                        whileInView={isVideoCanPlay ? 'onscreen' : 'offscreen'}
                        viewport={{ once: true }}
                        variants={catVariants}
                    >
                        {isVideoPlaying && (
                            <div className="skills-cat__speech" ref={cloudRef}>
                                {catSpeech}
                            </div>
                        )}

                        <video
                            src={skillsCat}
                            className="skills-cat__video"
                            ref={videoRef}
                            onCanPlay={() => setVideoCanPlay(true)}
                            onEnded={(e) => {
                                if (videoPlayedTimes < 1) {
                                    setVideoPlayedTimes((times) => times + 1);
                                    videoRef.current?.play();
                                } else {
                                    (e.target as HTMLVideoElement).currentTime =
                                        0;
                                    setVideoPlayedTimes(0);
                                    setVideoPlaying(false);
                                    setCatSpeech('');
                                }
                            }}
                        />
                    </motion.div>
                </div>
            </main>

            <link
                className="preload"
                rel="preload"
                as="image"
                href={talkingCloudLeft}
            />
        </>
    );
}
