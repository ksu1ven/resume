import { useEffect, useState } from 'react';
import mouseCursor from '@assets/images/favourite-icon.png';
import { CatBanana } from './CatBanana';

export function Header() {
    let catWasClicked = false;
    const [isCatAnimated, setIsCatAnimated] = useState(false);

    useEffect(() => {
        const newCursor = isCatAnimated
            ? `url(${mouseCursor}), pointer`
            : 'auto';

        document.body.style.cursor = newCursor;
    }, [isCatAnimated]);

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
        <header>
            <div className="game wrapper">
                <CatBanana isCatAnimated={isCatAnimated} />
                <h2 className="game__rules">
                    Поиграй с котом-бананом. Нажми на домик, чтобы начать
                </h2>
                <button
                    type="button"
                    className="house"
                    onClick={handleClick}
                    onKeyDown={handleClick}
                    onMouseOut={handleMouseOut}
                    onBlur={handleMouseOut}
                    onMouseOver={handleMouseOver}
                    onFocus={handleMouseOver}
                >
                    House
                </button>
            </div>
            <nav className="pagination">Pagination</nav>
        </header>
    );
}
