'use client';
import { dummyNearbyEvents } from '@/data/dummyEvents';
import EventCard from '../ui/EventCard';
import { ArrowRight } from 'lucide-react';

export default function NearbyEvents() {
    // Show only the first 3 events initially or show all 6 in a clean grid
    // Let's show 6 events in a grid layout (3 columns on lg, 2 on sm/md, 1 on xs)
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 select-none">
            <div className="flex flex-col mb-8">
                <h2 className="text-xl font-bold text-gray-900 font-sans">Event Terdekat Untukmu</h2>
                <p className="text-sm text-gray-500 mt-1">Temukan petualangan seru yang berlangsung di sekitarmu dalam waktu dekat</p>
            </div>

            {/* Grid layout containing nearby events */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {dummyNearbyEvents.map((event) => (
                    <div
                        key={event.id}
                        className="transform transition-transform duration-300 hover:scale-[1.015]"
                    >
                        <EventCard event={event} />
                    </div>
                ))}
            </div>

            {/* "Lihat Event Lainnya" Button Wrapper */}
            <div className="flex justify-center mt-10">
                <button
                    onClick={() => {
                        // Action for future navigation or loading more events
                        console.log('Navigate to all events page');
                    }}
                    className="flex items-center gap-2 border-2 border-blue-600/80 text-blue-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 px-8 py-3 rounded-full text-sm font-extrabold shadow-sm transition-all duration-300 hover:shadow active:scale-95 cursor-pointer"
                >
                    <span>Lihat Event Lainnya</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
            </div>
        </section>
    );
}
