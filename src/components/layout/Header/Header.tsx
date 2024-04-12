import { useState } from 'react';
import { CatBanana } from './blocks/CatBanana';
import { Pagination } from './blocks/Pagination';

export function Header() {
    let catWasClicked = false;
    const [isCatAnimated, setIsCatAnimated] = useState(false);
    const [gameIsLoading, setGameLoading] = useState(true);

    function handleClick() {
        catWasClicked = true;
    }

    function handleMouseOver() {
        if (!gameIsLoading) setIsCatAnimated(false);
    }

    function handleMouseOut() {
        if (catWasClicked && !gameIsLoading) setIsCatAnimated(true);
    }

    return (
        <header className="header">
            {window.matchMedia('(hover: hover)').matches && (
                <section className="wrapper game">
                    <CatBanana
                        isCatAnimated={isCatAnimated}
                        setGameLoading={setGameLoading}
                    />
                    <h2 className="game__rules">
                        {gameIsLoading
                            ? 'Игра загружается...'
                            : isCatAnimated
                              ? 'Спрячь мышку отбратно в домик. '
                              : 'Поиграй с котом-бананом. Нажми на домик, чтобы начать.'}
                    </h2>
                    <button
                        aria-label="House"
                        type="button"
                        className="icon house"
                        onClick={handleClick}
                        onKeyDown={handleClick}
                        onMouseOut={handleMouseOut}
                        onBlur={handleMouseOut}
                        onMouseOver={handleMouseOver}
                        onFocus={handleMouseOver}
                    />
                </section>
            )}

            <div className="pagination-bg">
                <Pagination />
            </div>
        </header>
    );
}
