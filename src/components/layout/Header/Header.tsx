import { useState } from 'react';
import { CatBanana } from './blocks/CatBanana';
import { Pagination } from './blocks/Pagination';

export function Header() {
    let catWasClicked = false;
    const [isCatAnimated, setIsCatAnimated] = useState(false);

    function handleClick() {
        catWasClicked = true;
    }

    function handleMouseOver() {
        setIsCatAnimated(false);
    }

    function handleMouseOut() {
        if (catWasClicked) setIsCatAnimated(true);
    }

    return (
        <header className="header">
            <section className="wrapper game">
                <CatBanana isCatAnimated={isCatAnimated} />
                <h2 className="game__rules">
                    Поиграй с котом-бананом. Нажми на домик, чтобы начать
                </h2>
                <button
                    aria-label="House"
                    type="button"
                    className="house"
                    onClick={handleClick}
                    onKeyDown={handleClick}
                    onMouseOut={handleMouseOut}
                    onBlur={handleMouseOut}
                    onMouseOver={handleMouseOver}
                    onFocus={handleMouseOver}
                />
            </section>

            <div className="pagination-bg">
                <Pagination />
            </div>
        </header>
    );
}
