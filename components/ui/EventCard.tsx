'use client';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, MapPin } from 'lucide-react';
import { EventTicket } from '@/types/event';
import { useLanguage } from '@/context/LanguageContext';

export default function EventCard({ event }: { event: EventTicket }) {
  const { t } = useLanguage();
  return (
    <Link href={`/event/${event.slug}`} className="block h-full">
      <div className="bg-white rounded-2xl border border-gray-200 hover:bg-white/30 hover:border-blue-600/30 transition duration-300 flex flex-col h-full cursor-pointer select-none overflow-hidden">
        {/* Image Banner */}
        <div className="relative h-40 w-full shrink-0 bg-gray-200/30">
          <Image
            src={event.imageUrl}
            alt={t(event.title, event.title_en)}
            fill
            className="object-cover p-2 rounded-[18px]"
            draggable={false}
          />
        </div>
        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-sm font-semibold text-gray-900 mb-2.5 line-clamp-2 min-h-[40px] leading-snug">
            {t(event.title, event.title_en)}
          </h3>
          <div className="flex flex-col gap-1.5 text-xs text-gray-500 mb-3">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-blue-500 shrink-0" />
              <span className="font-semibold text-gray-600">{event.date}</span>
            </div>
            {event.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span className="font-semibold text-gray-600 truncate">
                  {t(event.location, event.location_en)}
                </span>
              </div>
            )}
          </div>
          <div className="text-base font-extrabold text-gray-900 mb-3" suppressHydrationWarning>
            Rp{event.price.toLocaleString('id-ID')}
          </div>
          <div className="mt-auto pt-3 border-t border-dashed border-gray-200 flex items-center gap-2">
            <div className="relative w-6 h-6 shrink-0 rounded-full overflow-hidden bg-gray-100">
              <Image
                src={event.organizer.logo}
                alt={event.organizer.name}
                fill
                className="object-cover"
                draggable={false}
              />
            </div>
            <span className="text-[11px] text-gray-600 font-bold truncate min-w-0">
              {event.organizer.name}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}