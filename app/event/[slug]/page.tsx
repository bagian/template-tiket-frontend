'use client';
import { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { dummyEvents, dummyNearbyEvents } from '@/data/dummyEvents';
import { 
    CalendarDays, 
    MapPin, 
    ChevronLeft, 
    Ticket, 
    ShieldAlert, 
    Users, 
    Landmark, 
    ChevronRight, 
    ExternalLink,
    Utensils, 
    Coffee, 
    Car, 
    Bus, 
    Heart, 
    Wifi, 
    Lock, 
    Camera, 
    Star, 
    Sparkles 
} from 'lucide-react';

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

const Tiktok = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

function getFacilityIcon(name: string) {
    const n = name.toLowerCase();
    if (n.includes('kuliner') || n.includes('food') || n.includes('bazaar') || n.includes('makan') || n.includes('cafe') || n.includes('resto') || n.includes('bazar') || n.includes('culinary')) {
        return Utensils;
    }
    if (n.includes('drink') || n.includes('minum') || n.includes('coffee') || n.includes('kopi')) {
        return Coffee;
    }
    if (n.includes('parkir') || n.includes('parking') || n.includes('mobil') || n.includes('motor')) {
        return Car;
    }
    if (n.includes('shuttle') || n.includes('bus') || n.includes('transport')) {
        return Bus;
    }
    if (n.includes('medis') || n.includes('p3k') || n.includes('ambulans') || n.includes('ambulance') || n.includes('fisioterapi') || n.includes('medical') || n.includes('klinik') || n.includes('sehat') || n.includes('keamanan') || n.includes('aman')) {
        return Heart;
    }
    if (n.includes('wifi') || n.includes('internet') || n.includes('charger') || n.includes('charging') || n.includes('elektronik') || n.includes('ac')) {
        return Wifi;
    }
    if (n.includes('loker') || n.includes('penyimpanan') || n.includes('lock') || n.includes('lounge') || n.includes('vip') || n.includes('duduk') || n.includes('kursi')) {
        return Lock;
    }
    if (n.includes('foto') || n.includes('camera') || n.includes('view') || n.includes('pemandangan')) {
        return Camera;
    }
    if (n.includes('toilet') || n.includes('wc') || n.includes('restroom')) {
        return Sparkles;
    }
    if (n.includes('merchandise') || n.includes('toko') || n.includes('shop') || n.includes('souvenir') || n.includes('buku') || n.includes('guide') || n.includes('audio') || n.includes('sertifikat')) {
        return Star;
    }
    return Landmark;
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

type TabType = 'deskripsi' | 'syarat' | 'talent' | 'fasilitas';

export default function EventDetailPage({ params }: PageProps) {
    const { slug } = use(params);
    const [activeTab, setActiveTab] = useState<TabType>('deskripsi');

    // Find the event in mock data
    const allEvents = [...dummyEvents, ...dummyNearbyEvents];
    const event = allEvents.find((e) => e.slug === slug);

    // If event not found
    if (!event) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
                    <ShieldAlert className="w-8 h-8" />
                </div>
                <h1 className="text-xl font-bold text-gray-900 mb-2">Event Tidak Ditemukan</h1>
                <p className="text-sm text-gray-500 mb-6 max-w-sm">Maaf, event yang Anda cari tidak dapat ditemukan atau telah berakhir.</p>
                <Link href="/" className="bg-[#213FC0] hover:bg-[#1D37A8] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all">
                    Kembali ke Beranda
                </Link>
            </div>
        );
    }

    const tabsList = [
        { id: 'deskripsi' as TabType, label: 'Deskripsi', icon: Ticket },
        { id: 'syarat' as TabType, label: 'Syarat & Ketentuan', icon: ShieldAlert },
        { id: 'talent' as TabType, label: 'Talent', icon: Users },
        { id: 'fasilitas' as TabType, label: 'Fasilitas', icon: Landmark }
    ];

    return (
        <main className="min-h-screen bg-gray-50/50 pb-28 lg:pb-12 select-none">
            {/* Mobile Header Banner Image (Visible only on mobile/tablet) - At the very top, full width, borderless */}
            <div className="lg:hidden relative w-full aspect-video sm:h-[400px] bg-gray-100 shrink-0">
                <Image
                    src={event.bannerUrl || event.imageUrl}
                    alt={event.title}
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* Top Navigation / Breadcrumbs (Scrollable on mobile) */}
            <div className="bg-white border-b border-gray-100 py-3.5 sticky top-16 md:top-24 z-30 shadow-xs">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
                    <div className="flex-1 flex items-center gap-2 text-xs font-semibold text-gray-500 overflow-x-auto whitespace-nowrap hide-scrollbar min-w-0">
                        <Link href="/" className="hover:text-blue-600 transition-colors shrink-0">Beranda</Link>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        <span className="text-gray-400 shrink-0">Event</span>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        <span className="text-gray-400 shrink-0">{event.category || 'General'}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        <span className="text-gray-900 shrink-0">{event.title}</span>
                    </div>
                    <Link href="/" className="flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-blue-600 transition-colors shrink-0">
                        <ChevronLeft className="w-4 h-4" />
                        Kembali
                    </Link>
                </div>
            </div>

            {/* Mobile Event Details (Visible only on mobile/tablet) */}
            <div className="lg:hidden w-full bg-white border-b border-gray-100 flex flex-col">
                {/* Event Details Content */}
                <div className="px-4 sm:px-6 py-6 flex flex-col gap-4">
                    {/* Category Tag */}
                    <div>
                        <span className="inline-block text-[11px] font-extrabold px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600">
                            {event.category || 'General'}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-xl sm:text-2xl font-black text-gray-900 leading-snug">{event.title}</h1>

                    {/* Detail Acara Heading */}
                    <div className="mt-2">
                        <h3 className="text-sm sm:text-base font-extrabold text-gray-900">Detail Acara</h3>
                        <div className="flex flex-col gap-3.5 mt-3">
                            {/* Date */}
                            <div className="flex items-center gap-3">
                                <CalendarDays className="w-5 h-5 text-blue-500 shrink-0" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-gray-400 font-bold uppercase">Tanggal Acara</span>
                                    <span className="text-xs sm:text-sm font-bold text-gray-700">{event.date}</span>
                                </div>
                            </div>
                            {/* Time */}
                            {event.time && (
                                <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-blue-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-gray-400 font-bold uppercase">Waktu Acara</span>
                                        <span className="text-xs sm:text-sm font-bold text-gray-700">{event.time}</span>
                                    </div>
                                </div>
                            )}
                            {/* Location */}
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-gray-400 font-bold uppercase">Lokasi</span>
                                    {event.googleMapsLink ? (
                                        <a
                                            href={event.googleMapsLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs sm:text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors leading-relaxed"
                                        >
                                            {event.location || 'Yogyakarta'}
                                        </a>
                                    ) : (
                                        <span className="text-xs sm:text-sm font-bold text-gray-700 leading-relaxed">{event.location || 'Yogyakarta'}</span>
                                    )}
                                    {event.googleMapsLink && (
                                        <a
                                            href={event.googleMapsLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-800 transition-colors mt-1"
                                        >
                                            <span>Lihat Di Google Maps</span>
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Penyelenggara */}
                    <div className="border-t border-gray-100 pt-4 flex flex-col gap-2">
                        <h4 className="text-xs text-gray-400 font-bold uppercase tracking-wider">Penyelenggara</h4>
                        <div className="flex items-center gap-2.5">
                            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-100 bg-gray-50 shrink-0">
                                <Image
                                    src={event.organizer.logo}
                                    alt={event.organizer.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-xs sm:text-sm font-bold text-gray-800">{event.organizer.name}</span>
                        </div>
                    </div>

                    {/* Media Sosial */}
                    {event.socials && event.socials.length > 0 && (
                        <div className="border-t border-gray-100 pt-4 flex flex-col gap-2.5">
                            <h4 className="text-xs text-gray-400 font-bold uppercase tracking-wider">Media Sosial</h4>
                            <div className="flex flex-wrap gap-2.5">
                                {event.socials.map((soc, idx) => {
                                    const Icon = soc.platform === 'instagram' ? Instagram : Tiktok;
                                    return (
                                        <a
                                            key={idx}
                                            href={soc.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-[#F0F2FD] hover:bg-[#E2E6FB] text-[#213FC0] font-bold text-xs px-4 py-2 rounded-2xl shadow-xs transition-all cursor-pointer"
                                        >
                                            <div className="w-5 h-5 rounded-full bg-[#213FC0] text-white flex items-center justify-center shrink-0">
                                                <Icon className="w-3 h-3" />
                                            </div>
                                            <span>{soc.platform === 'instagram' ? 'Instagram' : 'TikTok'}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Main Layout Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* LEFT COLUMN: Event Content & Tabs Toggle */}
                    <div className="lg:col-span-2 flex flex-col gap-6 min-w-0">
                        {/* Tab Headers */}
                        <div className="w-full max-w-full bg-white p-2 rounded-2xl border border-gray-200/60 shadow-xs flex items-center gap-1 overflow-x-auto hide-scrollbar">
                            {tabsList.map((t) => {
                                const TabIcon = t.icon;
                                const isSelected = activeTab === t.id;
                                return (
                                    <button
                                        key={t.id}
                                        onClick={() => setActiveTab(t.id)}
                                        className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${isSelected
                                            ? 'bg-[#213FC0] text-white shadow-sm'
                                            : 'text-gray-600 hover:text-[#213FC0] hover:bg-gray-50'
                                            }`}
                                    >
                                        <TabIcon className="w-4 h-4" />
                                        <span>{t.label}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Tab Contents Area */}
                        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/60 shadow-xs min-h-[350px]">
                            {/* 1. DESKRIPSI */}
                            {activeTab === 'deskripsi' && (
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold text-gray-900">Deskripsi Event</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                                        {event.description || 'Tidak ada deskripsi untuk event ini.'}
                                    </p>
                                </div>
                            )}

                            {/* 2. SYARAT & KETENTUAN */}
                            {activeTab === 'syarat' && (
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold text-gray-900">Syarat & Ketentuan</h3>
                                    {event.terms && event.terms.length > 0 ? (
                                        <ol className="list-decimal pl-5 space-y-2.5">
                                            {event.terms.map((term, index) => (
                                                <li key={index} className="text-sm text-gray-600 leading-relaxed pl-1">
                                                    {term}
                                                </li>
                                            ))}
                                        </ol>
                                    ) : (
                                        <p className="text-sm text-gray-600">Tidak ada syarat & ketentuan khusus untuk event ini.</p>
                                    )}
                                </div>
                            )}

                            {/* 3. TALENT / LINEUP */}
                            {activeTab === 'talent' && (
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold text-gray-900">Lineup / Talent</h3>
                                    {event.talents && event.talents.length > 0 ? (
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                            {event.talents.map((t, index) => (
                                                <div key={index} className="bg-gray-50/50 p-4 rounded-2xl border border-gray-100 flex flex-col items-center text-center shadow-xs">
                                                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm mb-3">
                                                        <Image
                                                            src={t.imageUrl}
                                                            alt={t.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <h4 className="text-sm font-bold text-gray-900 truncate w-full">{t.name}</h4>
                                                    <p className="text-[10px] font-semibold text-blue-600 mt-0.5">{t.role}</p>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-sm text-gray-600">Tidak ada informasi talent untuk event ini.</p>
                                    )}
                                </div>
                            )}

                            {/* 4. FASILITAS */}
                            {activeTab === 'fasilitas' && (
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold text-gray-900">Fasilitas Event</h3>
                                    {event.facilities && event.facilities.length > 0 ? (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                             {event.facilities.map((fac, index) => {
                                                 const FacilityIcon = getFacilityIcon(fac);
                                                 return (
                                                     <div key={index} className="flex items-center gap-3 bg-gray-50/50 p-3 rounded-xl border border-gray-100">
                                                         <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                                             <FacilityIcon className="w-4 h-4" />
                                                         </div>
                                                         <span className="text-sm font-semibold text-gray-700">{fac}</span>
                                                     </div>
                                                 );
                                             })}
                                        </div>
                                    ) : (
                                        <p className="text-sm text-gray-600">Tidak ada fasilitas khusus yang tertera.</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Sticky Event Detail & Checkout Sidebar (Desktop only) */}
                    <div className="hidden lg:block lg:col-span-1">
                        <div className="lg:sticky lg:top-40 bg-white rounded-3xl border border-gray-200/60 shadow-md p-5 flex flex-col gap-5">
                            {/* Banner Image */}
                            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-sm shrink-0">
                                <Image
                                    src={event.bannerUrl || event.imageUrl}
                                    alt={event.title}
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>

                            {/* Organizer Info */}
                            <div className="flex items-center gap-2.5">
                                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-100 bg-gray-50 shrink-0">
                                    <Image
                                        src={event.organizer.logo}
                                        alt={event.organizer.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Diselenggarakan Oleh</span>
                                    <span className="text-xs font-bold text-gray-800">{event.organizer.name}</span>
                                </div>
                            </div>

                            {/* Event Title */}
                            <div>
                                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 mb-2">
                                    {event.category || 'General'}
                                </span>
                                <h1 className="text-lg font-bold text-gray-900 leading-snug">{event.title}</h1>
                            </div>

                            {/* Date & Location */}
                            <div className="flex flex-col gap-3 py-2 border-y border-dashed border-gray-100">
                                {/* Date */}
                                <div className="flex items-center gap-3 text-sm">
                                    <CalendarDays className="w-5 h-5 text-blue-500 shrink-0" />
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400 font-semibold">Tanggal Acara</span>
                                        <span className="font-bold text-gray-700 text-xs sm:text-sm">{event.date}</span>
                                    </div>
                                </div>
                                {/* Time */}
                                {event.time && (
                                    <div className="flex items-center gap-3 text-sm">
                                        <svg className="w-5 h-5 text-blue-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                        <div className="flex flex-col">
                                            <span className="text-xs text-gray-400 font-semibold">Waktu Acara</span>
                                            <span className="font-bold text-gray-700 text-xs sm:text-sm">{event.time}</span>
                                        </div>
                                    </div>
                                )}
                                {/* Location */}
                                <div className="flex items-start gap-3 text-sm">
                                    <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400 font-semibold">Lokasi</span>
                                        {event.googleMapsLink ? (
                                            <a
                                                href={event.googleMapsLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-bold text-gray-700 hover:text-blue-600 text-xs sm:text-sm leading-relaxed transition-colors duration-200"
                                            >
                                                {event.location || 'Yogyakarta'}
                                            </a>
                                        ) : (
                                            <span className="font-bold text-gray-700 text-xs sm:text-sm leading-relaxed">{event.location || 'Yogyakarta'}</span>
                                        )}
                                        {event.googleMapsLink && (
                                            <a
                                                href={event.googleMapsLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-800 transition-colors mt-1.5"
                                            >
                                                <span>Lihat Di Google Maps</span>
                                                <ExternalLink className="w-3 h-3" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Media Sosial */}
                            {event.socials && event.socials.length > 0 && (
                                <div className="flex flex-col gap-2.5 py-1">
                                    <span className="text-xs text-gray-400 font-semibold">Media Sosial</span>
                                    <div className="flex flex-wrap gap-2">
                                        {event.socials.map((soc, idx) => {
                                            const Icon = soc.platform === 'instagram' ? Instagram : Tiktok;
                                            return (
                                                <a
                                                    key={idx}
                                                    href={soc.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 bg-[#F0F2FD] hover:bg-[#E2E6FB] text-[#213FC0] font-bold text-xs px-3.5 py-2 rounded-2xl shadow-xs transition-all cursor-pointer"
                                                >
                                                    <div className="w-5 h-5 rounded-full bg-[#213FC0] text-white flex items-center justify-center shrink-0">
                                                        <Icon className="w-2.5 h-2.5" />
                                                    </div>
                                                    <span>{soc.platform === 'instagram' ? 'Instagram' : 'TikTok'}</span>
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* Ticket Price & Buy Button */}
                            <div className="flex flex-col gap-4 mt-1">
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-400 font-semibold">Harga Tiket Mulai Dari</span>
                                    <span className="text-2xl font-black text-gray-900 mt-0.5">
                                        Rp{event.price.toLocaleString('id-ID')}
                                    </span>
                                </div>
                                <button className="w-full bg-[#213FC0] hover:bg-[#1D37A8] text-white text-center py-4 rounded-2xl text-sm font-extrabold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all active:scale-98 cursor-pointer">
                                    Beli Tiket Sekarang
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* FLOATING BOTTOM BAR (Visible on Mobile/Tablet Only) - Positioned at bottom-0 with clear spacing */}
            <div className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200/80 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] pt-4 pb-7 px-6 flex items-center justify-between z-40 lg:hidden transition-all duration-300">
                <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Harga Mulai Dari</span>
                    <span className="text-lg font-black text-gray-900">
                        Rp{event.price.toLocaleString('id-ID')}
                    </span>
                </div>
                <button className="bg-[#213FC0] hover:bg-[#1D37A8] text-white px-7 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold shadow-md active:scale-95 transition-all cursor-pointer">
                    Beli Tiket
                </button>
            </div>
        </main>
    );
}
