import { useEffect, useRef, useState } from 'react';
import {
    motion,
    useTransform,
    useMotionValue,
    AnimationDefinition,
    AnimatePresence,
} from 'framer-motion';
import { useCursorPosition } from '@utils/useCursorPosition';
import catBananaLeft from '@assets/images/cat-banana-left.gif';
import catBananaRight from '@assets/images/cat-banana-right.gif';
import catBananaRightMin from '@assets/images/cat-banana-right-min.png';
import mouseCursorLeft from '@assets/images/mouse-left.png';
import mouseCursorRight from '@assets/images/mouse-right.png';
import catEatsMouse from '@assets/images/cat-eats-mouse.png';
import happySong from '@assets/music/bananacat - original sound.mp3';
import { useImagesLoaded } from '@utils/useImagesLoaded';

interface CatBananaProps {
    isCatAnimated: boolean;
    setGameLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CatBanana({ isCatAnimated, setGameLoading }: CatBananaProps) {
    const cursorPosition = useCursorPosition(isCatAnimated);

    const [animationEnd, setAnimationEnd] = useState(false);
    const catCurrentPositionRef = useRef<AnimationDefinition>({ x: 0, y: 0 });
    const happySongRef = useRef<HTMLAudioElement>(null);

    const { clientWidth } = document.body;
    const { clientHeight } = document.body;
    const imageRef = useRef<HTMLImageElement>(null);
    const imageWidth = imageRef.current?.width || 0;
    const imageHeigth = imageRef.current?.height || 0;
    const [imageOffsetLeft, setImageOffsetLeft] = useState(0);
    const [imageOffsetTop, setImageOffsetTop] = useState(0);
    const x = useMotionValue(0);
    const catX = useTransform(
        x,
        [imageWidth / 2, clientWidth - imageWidth / 2],
        [-imageOffsetLeft, clientWidth - imageOffsetLeft - imageWidth]
    );

    const y = useMotionValue(0);
    const catY = useTransform(
        y,
        [imageHeigth / 2, clientHeight - imageHeigth / 2],
        [-imageOffsetTop, clientHeight - imageOffsetTop - imageHeigth]
    );
    const preloadersStart = useImagesLoaded();

    let preloadedImages = 0;

    function catBananaPreload() {
        preloadedImages += 1;
        if (preloadedImages === 5) setGameLoading(false);
    }

    useEffect(() => {
        if (!imageOffsetLeft && !imageOffsetTop && imageRef.current) {
            setImageOffsetLeft(imageRef.current?.getBoundingClientRect().x);
            setImageOffsetTop(imageRef.current?.getBoundingClientRect().y);
        }
    }, [imageOffsetLeft, imageOffsetTop]);

    useEffect(() => {
        const rootElements = document
            .querySelector('#root')
            ?.querySelectorAll('*');

        if (isCatAnimated && cursorPosition) {
            const newCursor = `url(${cursorPosition.cursorDirection.X === 'left' ? mouseCursorLeft : mouseCursorRight}), pointer`;

            rootElements?.forEach((el) => {
                if (el instanceof HTMLElement)
                    el.style.setProperty('cursor', newCursor);
            });

            x.set(cursorPosition.left);
            y.set(cursorPosition.top);
            if (happySongRef.current) {
                happySongRef.current.muted = false;
                happySongRef.current.play();
            }
        } else if (!isCatAnimated) {
            rootElements?.forEach((el) => {
                if (el instanceof HTMLElement)
                    el.style.removeProperty('cursor');
            });
            x.set(0);
            y.set(0);
            if (happySongRef.current) {
                happySongRef.current.currentTime = 0;
                happySongRef.current.pause();
            }
        }
    }, [cursorPosition, isCatAnimated, x, y]);

    return (
        <div className="cat-container">
            <AnimatePresence>
                <motion.img
                    ref={imageRef}
                    className="cat-container__img_banana"
                    src={
                        isCatAnimated
                            ? cursorPosition &&
                              cursorPosition.cursorDirection.X === 'left'
                                ? catBananaLeft
                                : catBananaRight
                            : preloadersStart
                              ? catBananaRight
                              : catBananaRightMin
                    }
                    alt="catBanana"
                    animate={
                        isCatAnimated
                            ? { x: catX.get(), y: catY.get() }
                            : { x: 0, y: 0 }
                    }
                    style={animationEnd ? { visibility: 'hidden' } : {}}
                    transition={{ duration: 0.4 }}
                    onAnimationStart={() => setAnimationEnd(false)}
                    onAnimationComplete={(e) => {
                        catCurrentPositionRef.current = e;
                        setTimeout(() => {
                            if (
                                isCatAnimated &&
                                JSON.stringify(e) ===
                                    JSON.stringify(
                                        catCurrentPositionRef.current
                                    )
                            ) {
                                setAnimationEnd(true);
                            }
                        }, 200);
                    }}
                />

                {animationEnd && (
                    <motion.img
                        src={catEatsMouse}
                        alt="Cat eats mouse"
                        key="cat-catch"
                        className="cat-container__img_catch"
                        initial={{ x: catX.get(), y: catY.get(), opacity: 0 }}
                        animate={{ x: catX.get(), y: catY.get(), opacity: 1 }}
                    />
                )}
            </AnimatePresence>

            <audio src={happySong} ref={happySongRef} muted />

            {preloadersStart && (
                <script onLoad={catBananaPreload}>
                    <link rel="preload" as="image" href={catBananaLeft} />
                    <link rel="preload" as="image" href={catBananaRight} />
                    <link rel="preload" as="image" href={mouseCursorLeft} />
                    <link rel="preload" as="image" href={mouseCursorRight} />
                    <link rel="preload" as="image" href={catEatsMouse} />
                </script>
            )}
        </div>
    );
}
