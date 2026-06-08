'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ID' | 'EN';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string, keyEn?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
    ID: {
        // Navbar & Footer
        home: "Beranda",
        explore: "Jelajah",
        about: "Tentang",
        contact: "Hubungi Kami",
        login: "Masuk",
        our_journey: "Our Journey",
        biaya: "Biaya",
        gelang: "Tiket Gelang",
        FAQ: "FAQ",
        tickets: "Tiket",
        profile: "Profil",
        copyright: "© 2026 Artix. Hak Cipta Dilindungi.",
        // Homepage
        explore_city: "Jelajahi Event di Kotamu",
        see_all: "Lihat Semua",
        event_category: "Kategori Event",
        category_desc: "Cari berbagai pilihan event menarik berdasarkan kategori favoritmu",
        recommendation: "Rekomendasi Event",
        recommendation_desc: "Cari event seru yang akan berlangsung dalam waktu dekat",
        nearby_events: "Event Terdekat",
        nearby_desc: "Temukan event menarik di sekitar lokasimu saat ini",
        laris_title: "Laris Manis",
        laris_desc: "Kumpulan event-event terlaris yang paling diminati saat ini. Jangan sampai kehabisan tiket!",
        best_seller: "BEST SELLER",
        // Details Page
        description: "Deskripsi",
        terms: "Syarat & Ketentuan",
        talent: "Talent",
        facilities: "Fasilitas",
        details: "Detail Acara",
        price: "Harga Tiket",
        maps: "Lihat Di Google Maps",
        buy: "Beli Tiket",
        date: "Tanggal",
        time: "Waktu",
        location: "Lokasi",
        share: "Bagikan Event",
        facilities_title: "Fasilitas Event",
        // Search Dropdown
        search_placeholder: "Cari event...",
        search_trending: "Banyak Dicari",
        search_popular: "Event Terpopuler",
        search_no_results: "Tidak ada event yang ditemukan.",
        search_typing: "Ketik untuk mencari event...",
    },
    EN: {
        // Navbar & Footer
        home: "Home",
        explore: "Explore",
        about: "About",
        contact: "Contact Us",
        login: "Login",
        our_journey: "Our Journey",
        biaya: "Fees",
        gelang: "Wristbands",
        FAQ: "FAQ",
        tickets: "Tickets",
        profile: "Profile",
        copyright: "© 2026 Artix. All Rights Reserved.",
        // Homepage
        explore_city: "Explore Events in Your City",
        see_all: "See All",
        event_category: "Event Categories",
        category_desc: "Find various exciting event options based on your favorite category",
        recommendation: "Recommended Events",
        recommendation_desc: "Find exciting events taking place soon",
        nearby_events: "Nearby Events",
        nearby_desc: "Find exciting events near your current location",
        laris_title: "Best Sellers",
        laris_desc: "Collection of our best-selling events. Don't miss out on tickets!",
        best_seller: "BEST SELLER",
        // Details Page
        description: "Description",
        terms: "Terms & Conditions",
        talent: "Talents",
        facilities: "Facilities",
        details: "Event Details",
        price: "Ticket Price",
        maps: "View on Google Maps",
        buy: "Buy Tickets",
        date: "Date",
        time: "Time",
        location: "Location",
        share: "Share Event",
        facilities_title: "Event Facilities",
        // Search Dropdown
        search_placeholder: "Search events...",
        search_trending: "Trending Searches",
        search_popular: "Popular Events",
        search_no_results: "No events found.",
        search_typing: "Type to search events...",
    },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>('ID');

    useEffect(() => {
        const savedLang = localStorage.getItem('preferredLanguage') as Language;
        if (savedLang === 'ID' || savedLang === 'EN') {
            setLanguageState(savedLang);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('preferredLanguage', lang);
    };

    const t = (key: string, keyEn?: string): string => {
        return language === 'EN' && keyEn ? keyEn : (translations[language][key] ?? key);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
