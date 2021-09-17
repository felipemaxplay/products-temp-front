export class Page {
    content!: [];
    pageable!: Pageable;
    totalPages!: number;
    totalElements!: number;
    last!: boolean;
    number!: number;
    size!: number;
    numberOfElements!: number;
    sort!: Sort;
    first!: boolean;
    empty!: boolean;
}

export interface Pageable {
    sort: Sort;
    pageSize: number;
    pageNumber: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
}

export interface Sort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}
