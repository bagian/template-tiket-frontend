'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const cities = [
    {
        name: "DKI Jakarta",
        image: "/landmarks/jakarta.png",
        accent: "from-orange-400 to-red-500",
        href: "/?city=jakarta"
    },
    {
        name: "Kota Denpasar",
        image: "/landmarks/bali.png",
        accent: "from-cyan-400 to-blue-500",
        href: "/?city=bali"
    },
    {
        name: "Bandung",
        image: "/landmarks/bandung.png",
        accent: "from-indigo-400 to-blue-600",
        href: "/?city=bandung"
    },
    {
        name: "Surabaya",
        image: "/landmarks/surabaya.png",
        accent: "from-emerald-400 to-green-500",
        href: "/?city=surabaya"
    },
    {
        name: "Kuala Lumpur",
        image: "/landmarks/kuala_lumpur.png",
        accent: "from-pink-400 to-rose-500",
        href: "/?city=kuala_lumpur"
    }
];

export default function CityExplore() {
    const { t } = useLanguage();
    return (
        <section className="py-12 select-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Title with Link */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                        <h2 className="text-xl font-bold text-gray-900 font-sans">
                            {t('explore_city')}
                        </h2>
                    </div>
                    <Link
                        href="#"
                        className="text-xs sm:text-sm font-normal text-[#213FC0] hover:text-[#1d37a8] hover:underline flex items-center gap-1 transition-colors"
                    >
                        <span>{t('see_all')}</span>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </Link>
                </div>

                {/* Cards Container (Horizontal Scroll on Mobile, Grid on Tablet/Desktop) */}
                <div className="flex md:grid lg:grid md:grid-cols-3 lg:grid-cols-5 gap-3 overflow-x-auto md:overflow-visible lg:overflow-visible pt-8 pb-6 -mt-8 -mb-2 hide-scrollbar snap-x touch-pan-x">
                    {cities.map((city, idx) => (
                        <div key={idx} className="relative w-[280px] sm:w-[310px] md:w-full lg:w-full h-[115px] sm:h-[125px] shrink-0 snap-center group">
                            {/* Color Accent Bar (Positioned behind the card with shorter width) */}
                            <div className={`absolute -bottom-[3px] left-[6%] right-[6%] h-[8px] bg-gradient-to-r rounded-b-xl ${city.accent} z-0 opacity-90 transition-all duration-300 group-hover:h-[10px] group-hover:-bottom-[4px] group-hover:opacity-100`}></div>

                            {/* The Card Link Container (Sitting on top of the accent bar) */}
                            <Link
                                href={city.href}
                                className="absolute inset-0 rounded-2xl border border-gray-100/80 bg-white shadow-xs hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between z-10 cursor-pointer"
                            >
                                {/* Inner Content Grid */}
                                <div className="flex-1 flex justify-between items-stretch p-4 pl-5 relative">
                                    {/* Left Side: Text and Arrow */}
                                    <div className="flex flex-col justify-between items-start py-0.5 z-20">
                                        <h3 className="font-extrabold text-sm sm:text-base text-gray-800 tracking-tight leading-snug group-hover:text-[#213FC0] transition-colors">
                                            {city.name}
                                        </h3>
                                        {/* Diagonal Arrow Icon */}
                                        <div className="w-7 h-7 rounded-full bg-blue-50/50 text-[#213FC0] flex items-center justify-center group-hover:bg-[#213FC0] group-hover:text-white transition-all duration-300">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                                <polyline points="7 7 17 7 17 17"></polyline>
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Right Side: Absolute Pop-out Landmark Image */}
                                    <div className="absolute right-2 bottom-[4px] w-[100px] sm:w-[115px] h-[115px] sm:h-[135px] pointer-events-none select-none z-10">
                                        <Image
                                            src={city.image}
                                            alt={city.name}
                                            fill
                                            sizes="(max-w-768px) 100px, 115px"
                                            className="object-contain object-right-bottom group-hover:scale-125 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
