import { useState, useEffect } from 'react';
import { CursorProps } from './types';

export function useCursorPosition(isAnimated: boolean) {
    const [position, setPosition] = useState<CursorProps>({
        left: 0,
        top: 0,
        cursorDirection: {
            X: 'left',
            Y: 'top',
        },
    });

    useEffect(() => {
        function handleWindowMouseMove(e: MouseEvent) {
            setPosition((state) => {
                const cursorDirectionX =
                    state.left - e.pageX > 0 ? 'left' : 'right';
                const cursorDirectionY =
                    state.top - e.pageY > 0 ? 'top' : 'bottom';

                return {
                    ...state,
                    left: e.pageX,
                    top: e.pageY,
                    cursorDirection: {
                        X: cursorDirectionX,
                        Y: cursorDirectionY,
                    },
                };
            });
        }

        if (isAnimated)
            window.addEventListener('mousemove', handleWindowMouseMove);
        else window.removeEventListener('mousemove', handleWindowMouseMove);
        return () =>
            window.removeEventListener('mousemove', handleWindowMouseMove);
    }, [isAnimated]);

    return position;
}
