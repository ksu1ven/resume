import { useState } from 'react';
import { CatBanana } from './blocks/CatBanana';
import { Pagination } from './blocks/Pagination';

export function Header() {
    const [isCatAnimated, setIsCatAnimated] = useState(false);
    const [gameIsLoading, setGameLoading] = useState(true);
    const [catWasClicked, setCatWasClicked] = useState(false);

    function handleClick() {
        setCatWasClicked(true);
    }

    function handleMouseEvent(type: 'over' | 'out') {
        if (gameIsLoading) return;
        if (type === 'over') {
            setIsCatAnimated(false);
            setCatWasClicked(false);
        } else if (type === 'out' && catWasClicked) {
            setIsCatAnimated(true);
        }
    }

    return (
        <header className="header">
            <div className="wrapper game">
                <CatBanana
                    isCatAnimated={isCatAnimated}
                    setGameLoading={setGameLoading}
                />
                <p className="game__description" role="heading" aria-level={2}>
                    {gameIsLoading
                        ? 'Игра загружается...'
                        : isCatAnimated
                          ? 'Спрячь мышку обратно в домик.'
                          : 'Поиграй с котом-бананом. Нажми на домик, чтобы начать.'}
                </p>

                <button
                    aria-label="House"
                    type="button"
                    className="game__button icon"
                    onClick={handleClick}
                    onMouseOver={() => handleMouseEvent('over')}
                    onMouseOut={() => handleMouseEvent('out')}
                    onFocus={() => handleMouseEvent('over')}
                    onBlur={() => handleMouseEvent('out')}
                />
            </div>

            <div className="wrapper pagination">
                <Pagination />
            </div>
        </header>
    );
}
