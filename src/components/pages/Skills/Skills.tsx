import { useState, useRef, useEffect } from 'react';
import skillsCat from '@assets/videos/skills-cat.webm';
import talkingCloudLeft from '@assets/icons/talking-cloud-right.png';

export function Skills() {
    const [isVideoPlaying, setVideoPlaying] = useState(false);
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
            setCatSpeech('HTML CSS SASS');
        }, 900);
        timersId.current[1] = setTimeout(() => {
            setCatSpeech('JavaScript TypeScript');
        }, 3700);
        timersId.current[2] = setTimeout(() => {
            setCatSpeech('React Redux Next.js');
        }, 6700);
        timersId.current[3] = setTimeout(() => {
            setCatSpeech('Jest Vitest');
        }, 9200);
        timersId.current[4] = setTimeout(() => {
            setCatSpeech('Webpack Vite');
        }, 12000);
        timersId.current[5] = setTimeout(() => {
            setCatSpeech('Git');
        }, 15000);
    }

    useEffect(() => {
        if (isVideoPlaying) cloudRef.current?.classList.add('cloud-move');
        else cloudRef.current?.classList.remove('cloud-move');
    }, [isVideoPlaying]);

    return (
        <>
            <main className="skills-bg">
                <section className="wrapper skills">
                    <div
                        className="skills-cat__speech"
                        role="presentation"
                        onClick={handleSpeak}
                        onKeyDown={handleSpeak}
                    >
                        {isVideoPlaying && (
                            <div
                                className="cat-speech cat-speech_skills"
                                ref={cloudRef}
                            >
                                {catSpeech}
                            </div>
                        )}
                        <video
                            src={skillsCat}
                            className="skills-cat__video"
                            ref={videoRef}
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
                    </div>
                </section>
            </main>
            <link rel="preload" as="image" href={talkingCloudLeft} />
        </>
    );
}
