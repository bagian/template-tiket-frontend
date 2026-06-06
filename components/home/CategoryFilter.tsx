'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const categories = ['Semua', 'Konser', 'Standup', 'Olahraga', 'Teater', 'Seminar'];

export default function CategoryFilter() {
    return (
        <div className="py-4 px-4 sm:px-8">
            <Swiper
                spaceBetween={12}
                slidesPerView="auto"
                className="w-full"
            >
                {categories.map((cat, idx) => (
                    <SwiperSlide key={cat} style={{ width: 'auto' }}>
                        <button
                            className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-semibold border transition ${idx === 0
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-blue-600 hover:text-blue-600'
                                }`}
                        >
                            {cat}
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}