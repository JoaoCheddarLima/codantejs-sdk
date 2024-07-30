export interface Links {
    first: string;
    last: string;
    prev: string;
    next: string;
}

export interface Meta {
    current_page: number;
    from: number;
    last_page: number;
    links?: string[];
    path: string;
    per_page: number;
    to: number;
    total: number;
}