'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const larisEvents = [
    {
        title: "Rituals – Nadin Amizah",
        title_en: "Rituals – Nadin Amizah",
        imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        slug: "rituals-nadin-amizah",
    },
    {
        title: "Jogja Rockphonic (Standing)",
        title_en: "Jogja Rockphonic (Standing)",
        imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        slug: "jogja-rockphonic-standing",
    },
    {
        title: "Partilibur 2026",
        title_en: "Partilibur 2026",
        imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        slug: "partilibur-2026",
    },
    {
        title: "SongList Festival",
        title_en: "SongList Festival",
        imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        slug: "songlist-festival",
    }
];

export default function EventLaris() {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);

    // Duplicate array to ensure loop mode works smoothly
    const displayEvents = [...larisEvents, ...larisEvents];

    return (
        <section className="bg-gradient-to-br from-[#0e1d5e] via-[#152C8C] to-[#0e1d5e] py-16 relative overflow-hidden select-none">
            {/* Dotted Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-0 sm:px-0 lg:px-8 text-center">
                <span className="inline-block text-[10px] font-black tracking-widest text-blue-400 uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20 mb-3">
                    BEST SELLER
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">Laris Manis</h2>
                <p className="text-blue-200/70 text-xs md:text-sm mt-2 max-w-md mx-auto mb-10">
                    Kumpulan event-event terlaris yang paling diminati saat ini. Jangan sampai kehabisan tiket!
                </p>

                {/* Swiper Slider Wrapper */}
                <div className="w-full py-4">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.25,
                                spaceBetween: 16,
                            },
                            640: {
                                slidesPerView: 1.6,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2.2,
                                spaceBetween: 24,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 28,
                            }
                        }}
                        onSlideChange={(swiper) => {
                            setActiveIndex(swiper.realIndex % larisEvents.length);
                        }}
                        className="py-10 overflow-visible"
                    >
                        {displayEvents.map((event, index) => (
                            <SwiperSlide key={`${event.slug}-${index}`} className="py-4">
                                {({ isActive }) => (
                                    <Link href={`/event/${event.slug}`} className="block focus:outline-none">
                                        <div
                                            className={`relative aspect-[21/9] sm:aspect-[16/7] md:aspect-[16/8] rounded-2xl overflow-hidden border transition-all duration-500 ease-out cursor-pointer group/card ${isActive
                                                ? 'scale-105 shadow-[0_20px_40px_rgba(0,0,0,0.4)] border-white/20'
                                                : 'scale-90 opacity-40 hover:opacity-60 border-white/5 shadow-md'
                                                }`}
                                        >
                                            {/* Image */}
                                            <Image
                                                src={event.imageUrl}
                                                alt={t(event.title, event.title_en)}
                                                fill
                                                sizes="(max-w-7xl) 100vw"
                                                priority={index === 0}
                                                className="object-cover group-hover/card:scale-105 transition-transform duration-700 pointer-events-none"
                                            />
                                        </div>
                                    </Link>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* Displaying active slide title at the bottom */}
                <div className="h-10 mt-2 flex items-center justify-center">
                    <Link href={`/event/${larisEvents[activeIndex].slug}`} className="text-white text-base md:text-lg font-extrabold hover:text-blue-400 transition-colors flex items-center gap-1.5 cursor-pointer">
                        <span>{t(larisEvents[activeIndex].title, larisEvents[activeIndex].title_en)}</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}