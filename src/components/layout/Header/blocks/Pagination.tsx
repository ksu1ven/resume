import { useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { PAGES } from '@utils/constants';
import { CurrentPageProps } from '@utils/types';

export function Pagination() {
    const path = useLocation().pathname.slice(1);
    const currentIndex = useRef(PAGES.findIndex((el) => el.path === path));
    const [currentPage, setCurrentPage] = useState<CurrentPageProps>({
        current: PAGES[currentIndex.current],
        prev: PAGES[currentIndex.current - 1],
        next: PAGES[currentIndex.current + 1],
    });
    const navigate = useNavigate();

    function handleChangePage(direction: 'next' | 'prev') {
        if (direction === 'next') currentIndex.current += 1;
        else currentIndex.current -= 1;

        setCurrentPage({
            current: PAGES[currentIndex.current],
            prev: PAGES[currentIndex.current - 1],
            next: PAGES[currentIndex.current + 1],
        });
        navigate(PAGES[currentIndex.current].path);
    }

    return (
        <nav className="wrapper pagination">
            <button
                type="button"
                className="btn-arrow pagination__arrow"
                disabled={!currentPage.prev}
                onClick={() => handleChangePage('prev')}
                onKeyDown={() => handleChangePage('prev')}
            >
                ❮
            </button>
            <ul className="pagination__list">
                {currentPage.prev && (
                    <li className="btn pagination__item pagination__item_prev">
                        <Link
                            to={currentPage.prev.path}
                            onClick={() => {
                                handleChangePage('prev');
                            }}
                        >
                            {currentPage.prev.name}
                        </Link>
                    </li>
                )}
                <li className="pagination__item pagination__item_current">
                    {currentPage.current.name}
                </li>
                {currentPage.next && (
                    <li className="btn pagination__item pagination__item_next">
                        <Link
                            to={currentPage.next.path}
                            onClick={() => {
                                handleChangePage('next');
                            }}
                        >
                            {currentPage.next.name}
                        </Link>
                    </li>
                )}
            </ul>
            <button
                type="button"
                className="btn-arrow pagination__arrow"
                disabled={!currentPage.next}
                onClick={() => handleChangePage('next')}
                onKeyDown={() => handleChangePage('next')}
            >
                ❯
            </button>
        </nav>
    );
}
