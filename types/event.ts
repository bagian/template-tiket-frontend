export interface Organizer {
    name: string;
    logo: string;
}

export interface EventTicket {
    id: string;
    title: string;
    date: string;
    price: number;
    imageUrl: string;
    organizer: Organizer;
}

export interface Banner {
    id: string | number;
    imageUrl: string;
}