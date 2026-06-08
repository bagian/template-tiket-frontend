export interface Organizer {
    name: string;
    logo: string;
}

export interface Talent {
    name: string;
    role: string;
    imageUrl: string;
}

export interface SocialMedia {
    platform: 'instagram' | 'tiktok' | 'twitter' | 'facebook';
    username: string;
    link: string;
}

export interface EventTicket {
    id: string;
    slug: string;
    title: string;
    date: string;
    price: number;
    imageUrl: string;
    organizer: Organizer;
    category?: string;
    location?: string;
    description?: string;
    terms?: string[];
    talents?: Talent[];
    facilities?: string[];
    bannerUrl?: string;
    time?: string;
    socials?: SocialMedia[];
    googleMapsLink?: string;
}

export interface Banner {
    id: string | number;
    imageUrl: string;
}