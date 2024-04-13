export type CursorProps = {
    left: number;
    top: number;
    cursorDirection: { X: 'left' | 'right'; Y: 'top' | 'bottom' };
};

export type PaginationItem = {
    path: string;
    name: string;
};

export type CurrentPageProps = {
    prev: PaginationItem | null;
    current: PaginationItem;
    next: PaginationItem | null;
};

export type ContactsItem = {
    src: string;
    alt: string;
    to: string;
    innerHtml: string;
};

export type EducationItem = {
    institution: string;
    year: number;
    course: string;
    position?: string;
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

export type ExperienceItem = {
    img: string;
    profession: string;
    company: string;
    city: string;
    dateFrom: Date;
    dateTo: Date;
    description: string;
};
