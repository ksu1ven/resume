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

interface CatBananaProps {
    isCatAnimated: boolean;
}

export function CatBanana({ isCatAnimated }: CatBananaProps) {
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

    useEffect(() => {
        if (!imageOffsetLeft && !imageOffsetTop && imageRef.current) {
            setImageOffsetLeft(imageRef.current?.getBoundingClientRect().x);
            setImageOffsetTop(imageRef.current?.getBoundingClientRect().y);
        }
    }, [imageOffsetLeft, imageOffsetTop]);

    useEffect(() => {
        if (isCatAnimated && cursorPosition) {
            x.set(cursorPosition.left);
            y.set(cursorPosition.top);
            if (happySongRef.current) {
                happySongRef.current.muted = false;
                happySongRef.current.play();
            }
        } else {
            x.set(0);
            y.set(0);
            if (happySongRef.current) {
                happySongRef.current.currentTime = 0;
                happySongRef.current.pause();
            }
        }
    }, [cursorPosition, isCatAnimated, x, y]);

    useEffect(() => {
        const newCursor = isCatAnimated
            ? `url(${cursorPosition.cursorDirection.X === 'left' ? mouseCursorLeft : mouseCursorRight}), pointer`
            : 'auto';

        document.body.style.cursor = newCursor;

        document.querySelectorAll('*').forEach((el) => {
            if (el instanceof HTMLElement && isCatAnimated)
                el.style.setProperty('cursor', newCursor);
            else if (el instanceof HTMLElement)
                el.style.removeProperty('cursor');
        });
    }, [isCatAnimated, cursorPosition.cursorDirection.X]);

    return (
        <div className="cat-container">
            <AnimatePresence>
                <motion.img
                    ref={imageRef}
                    className="cat-container__cat-banana__img"
                    src={
                        isCatAnimated
                            ? cursorPosition &&
                              cursorPosition.cursorDirection.X === 'left'
                                ? catBananaLeft
                                : catBananaRight
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
                        className="cat-container__cat-catch__img"
                        initial={{ x: catX.get(), y: catY.get(), opacity: 0 }}
                        animate={{ x: catX.get(), y: catY.get(), opacity: 1 }}
                    />
                )}
            </AnimatePresence>
            <audio src={happySong} ref={happySongRef} muted />
            {/* {document.readyState === 'complete' && (
                <>
                    <link rel="preload" as="image" href={catBananaLeft} />
                    <link rel="preload" as="image" href={catBananaRight} />
                    <link rel="preload" as="image" href={mouseCursorLeft} />
                    <link rel="preload" as="image" href={mouseCursorRight} />
                </>
            )} */}
        </div>
    );
}
