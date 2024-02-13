import { useEffect, useState } from 'react';
import { CatBanana } from './CatBanana';
import mouseCursor from '../../../assets/images/favourite-icon.png';

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
            <h1>Header</h1>
            <div className="game">
                <CatBanana isCatAnimated={isCatAnimated} />
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
        </header>
    );
}
