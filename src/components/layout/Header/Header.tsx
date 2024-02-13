import { useEffect, useState } from 'react';
import { CatBanana } from './CatBanana';
import mouseCursor from '../../../assets/images/favourite-icon.png';

export function Header() {
    const [isCatAnimated, setIsCatAnimated] = useState(false);

    useEffect(() => {
        const newCursor = isCatAnimated
            ? `url(${mouseCursor}), pointer`
            : 'auto';

        document.body.style.cursor = newCursor;
    }, [isCatAnimated]);

    return (
        <header>
            <h1>Header</h1>

            <div className="game">
                <CatBanana isCatAnimated={isCatAnimated} />
                <div
                    className="house"
                    onMouseOver={() => setIsCatAnimated(!isCatAnimated)}
                    onFocus={() => setIsCatAnimated(!isCatAnimated)}
                >
                    House
                </div>
            </div>
        </header>
    );
}
