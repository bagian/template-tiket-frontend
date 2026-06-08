'use client';
import { dummyEvents } from '@/data/dummyEvents';
import EventCard from '../ui/EventCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function EventList() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
            <h2 className="text-xl font-bold text-gray-900 mb-6 font-sans">Rekomendasi Event</h2>

            <div className="relative">
                {/* Custom Left Arrow Button */}
                <button
                    className="event-prev-btn absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-700 shadow-md border border-gray-100 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-0 disabled:pointer-events-none"
                    aria-label="Previous events"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                {/* Swiper Slider */}
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: '.event-prev-btn',
                        nextEl: '.event-next-btn',
                    }}
                    slidesPerView={1.2}
                    spaceBetween={16}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 12,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 12,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 12,
                        }
                    }}
                    grabCursor={true}
                    loop={true}
                    simulateTouch={true}
                    className="pb-8 pt-2 !px-1"
                >
                    {dummyEvents.map((event) => (
                        <SwiperSlide key={event.id} className="h-auto">
                            <EventCard event={event} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Right Arrow Button */}
                <button
                    className="event-next-btn absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-700 shadow-md border border-gray-100 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-0 disabled:pointer-events-none"
                    aria-label="Next events"
                >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
            </div>
        </div>
    );
}