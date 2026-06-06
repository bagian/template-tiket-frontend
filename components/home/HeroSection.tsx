'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { dummyBanners } from '@/data/dummyEvents';

export default function HeroSection() {
    // Duplicate banners to ensure loop mode has enough slides (6 slides total)
    // This resolves the Swiper Loop Warning and enables autoplay to function correctly on load.
    const displayBanners = [...dummyBanners, ...dummyBanners];

    return (
        <div className="w-full pt-10 pb-2 bg-transparent relative group">
            <div className="w-full mx-auto relative">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={12}
                    slidesPerView={1}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.20,
                        },
                        640: {
                            slidesPerView: 1.15,
                        }
                    }}
                    centeredSlides={true}
                    loop={true}
                    grabCursor={true}
                    simulateTouch={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        clickable: false,
                        el: '.hero-pagination',
                    }}
                    navigation={{
                        prevEl: '.hero-prev-btn',
                        nextEl: '.hero-next-btn',
                    }}
                    className="pb-10 overflow-visible"
                >
                    {displayBanners.map((banner, index) => (
                        <SwiperSlide key={`${banner.id}-${index}`} className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300">
                            <div className="relative w-full h-[100px] sm:h-[200px] md:h-[150px] lg:h-[400px] xl:h-[500px] bg-gray-100 select-none">
                                <Image
                                    src={banner.imageUrl}
                                    alt={`Banner ${banner.id}`}
                                    quality={100}
                                    fill
                                    priority={index === 0}
                                    className="object-cover pointer-events-none rounded-2xl"
                                    draggable={false}
                                />
                            </div>
                        </SwiperSlide>
                    ))}

                    {/* Left/Right Navigation Buttons (INSIDE Swiper tag for guaranteed binding, fades in on hover) */}
                    <button
                        className="hero-prev-btn absolute left-2 sm:left-[7.5%] top-[45%] -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-700 shadow-lg border border-gray-100 rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto hover:scale-105 active:scale-95 cursor-pointer"
                        aria-label="Previous banner"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        className="hero-next-btn absolute right-2 sm:right-[7.5%] top-[45%] -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-700 shadow-lg border border-gray-100 rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto hover:scale-105 active:scale-95 cursor-pointer"
                        aria-label="Next banner"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </Swiper>

                {/* Centered Pagination Wrapper */}
                <div className="hero-pagination flex justify-center items-center gap-0 mt-2 z-20 select-none"></div>
            </div>
        </div>
    );
}