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
    title_en?: string;
    description?: string;
    description_en?: string;
    terms?: string[];
    terms_en?: string[];
    category?: string;
    category_en?: string;
    location?: string;
    location_en?: string;
    organizer: Organizer;
    imageUrl: string;
    bannerUrl?: string;
    time?: string;
    socials?: SocialMedia[];
    googleMapsLink?: string;
    talents?: Talent[];
    facilities?: string[];
}

export interface Banner {
    id: string | number;
    imageUrl: string;
}