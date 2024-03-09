export type CursorProps = {
    left: number;
    top: number;
    cursorDirection: { X: 'left' | 'right'; Y: 'top' | 'bottom' };
};

export type PortfolioItem = {
    name: string;
    images: { img: string; url: string }[];
    stack: string;
    deploy: string;
    repo: string;
    description: string;
    type: 'Командный' | 'Индивидуальный';
    responsibility?: string;
};
