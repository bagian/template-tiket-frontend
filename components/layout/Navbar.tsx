'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, Home, Compass, Info, Phone, Ticket, User } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { dummyEvents, dummyNearbyEvents } from '@/data/dummyEvents';

export default function Navbar() {
    const pathname = usePathname();
    const { language, setLanguage, t } = useLanguage();
    
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('home');
    const [langDropdownOpen, setLangDropdownOpen] = useState(false);
    
    // Search Overlay States
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);

    // Merge all events for searching
    const allEvents = [...dummyEvents, ...dummyNearbyEvents];
    // Filter the 4 default popular events by ID ('p1' to 'p4')
    const popularEvents = allEvents.filter(event => ['p1', 'p2', 'p3', 'p4'].includes(event.id));

    // Scroll Lock & ESC key handlers
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSearchOpen(false);
            }
        };

        if (isOpen || searchOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        if (searchOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, searchOpen]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setSearchQuery(val);
        if (val.trim() === '') {
            setSearchResults([]);
        } else {
            const filtered = allEvents.filter(event =>
                event.title?.toLowerCase().includes(val.toLowerCase()) ||
                event.title_en?.toLowerCase().includes(val.toLowerCase()) ||
                event.location?.toLowerCase().includes(val.toLowerCase()) ||
                event.location_en?.toLowerCase().includes(val.toLowerCase()) ||
                event.category?.toLowerCase().includes(val.toLowerCase()) ||
                event.category_en?.toLowerCase().includes(val.toLowerCase())
            );
            setSearchResults(filtered);
        }
    };

    const handleTrendingClick = (term: string) => {
        setSearchQuery(term);
        const filtered = allEvents.filter(event =>
                event.title?.toLowerCase().includes(term.toLowerCase()) ||
                event.title_en?.toLowerCase().includes(term.toLowerCase()) ||
                event.location?.toLowerCase().includes(term.toLowerCase()) ||
                event.location_en?.toLowerCase().includes(term.toLowerCase()) ||
                event.category?.toLowerCase().includes(term.toLowerCase()) ||
                event.category_en?.toLowerCase().includes(term.toLowerCase())
            );
        setSearchResults(filtered);
    };

    const handleEventClick = () => {
        setSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
    };

    // Hide Navbar on the login page
    if (pathname === '/login') {
        return null;
    }

    return (
        <header className="w-full select-none z-50 sticky top-0">
            {/* Top Bar Kecil (Navy Gelap - Hidden on Mobile) */}
            <div className="bg-[#0a0a24] border-b border-white/5 hidden md:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-end gap-6 text-[11px] font-semibold text-white/70">
                    <Link href="#" className="hover:text-white transition-colors duration-200">{t('our_journey')}</Link>
                    <Link href="#" className="hover:text-white transition-colors duration-200">{t('biaya')}</Link>
                    <Link href="#" className="hover:text-white transition-colors duration-200">{t('gelang')}</Link>
                    <Link href="#" className="hover:text-white transition-colors duration-200">{t('FAQ')}</Link>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="bg-[#152C8C] text-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">

                        {/* Logo Artatix dengan Outline A (Official Style) */}
                        <div className="flex items-center gap-2">
                            <svg className="w-6 h-6 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 20c1.5-4.5 3.5-11 7-14 3.5 3 5.5 9.5 7 14" />
                                <path d="M8 15c2.5-1 5.5-2 7.5-4" />
                                <path d="M12 11h3.5V14.5" />
                            </svg>
                            <Link href="/" className="text-xl font-black tracking-wider hover:opacity-90 transition-opacity">
                                Artix
                            </Link>
                        </div>

                        {/* Menu Tengah (Pill Container - Hidden on Mobile) */}
                        <div className="hidden md:flex items-center bg-black/20 border border-white/5 rounded-full p-1 text-sm font-semibold">
                            <Link href="/" className="bg-[#3b82f6] text-white px-5 py-1.5 rounded-full transition-all duration-200 shadow-sm">
                                {t('home')}
                            </Link>
                            <Link href="#" className="text-white/80 hover:text-white px-5 py-1.5 rounded-full transition-colors duration-200">
                                {t('explore')}
                            </Link>
                            <Link href="#" className="text-white/80 hover:text-white px-5 py-1.5 rounded-full transition-colors duration-200">
                                {t('about')}
                            </Link>
                            <Link href="#" className="text-white/80 hover:text-white px-5 py-1.5 rounded-full transition-colors duration-200">
                                {t('contact')}
                            </Link>
                        </div>

                        {/* Actions Kanan */}
                        <div className="flex items-center gap-2.5 sm:gap-3">
                            {/* Language Selector Dropdown */}
                            <div className="relative">
                                <button 
                                    onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                                    className="flex items-center gap-2 bg-[#213FC0] hover:bg-[#1D37A8] h-10 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer focus:outline-none"
                                >
                                    {language === 'ID' ? (
                                        <>
                                            <span className="inline-flex w-4 h-4 rounded-full overflow-hidden border border-white/20 relative shrink-0">
                                                <span className="absolute inset-x-0 top-0 bg-[#FF0000] h-1/2"></span>
                                                <span className="absolute inset-x-0 bottom-0 bg-[#FFFFFF] h-1/2"></span>
                                            </span>
                                            ID
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-4 h-4 rounded-full overflow-hidden shrink-0 border border-white/20" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="60" height="30" fill="#012169"/>
                                                <path d="M0 0L60 30M60 0L0 30" stroke="#FFF" strokeWidth="6"/>
                                                <path d="M0 0L60 30M60 0L0 30" stroke="#C8102E" strokeWidth="4"/>
                                                <path d="M30 0V30M0 15H60" stroke="#FFF" strokeWidth="10"/>
                                                <path d="M30 0V30M0 15H60" stroke="#C8102E" strokeWidth="6"/>
                                            </svg>
                                            EN
                                        </>
                                    )}
                                    <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                {langDropdownOpen && (
                                    <>
                                        <div className="fixed inset-0 z-30" onClick={() => setLangDropdownOpen(false)}></div>
                                        <div className="absolute right-0 top-full mt-2 w-36 bg-white rounded-2xl border border-gray-100 shadow-xl py-2 z-40 animate-in fade-in slide-in-from-top-2 duration-200">
                                            <button 
                                                onClick={() => {
                                                    setLanguage('ID');
                                                    setLangDropdownOpen(false);
                                                }}
                                                className={`w-full flex items-center gap-3 px-4 py-2.5 text-xs font-bold text-gray-700 hover:bg-gray-50 cursor-pointer ${language === 'ID' ? 'text-blue-600 bg-blue-50/40' : ''}`}
                                            >
                                                <span className="inline-flex w-4 h-4 rounded-full overflow-hidden border border-gray-200 relative shrink-0">
                                                    <span className="absolute inset-x-0 top-0 bg-[#FF0000] h-1/2"></span>
                                                    <span className="absolute inset-x-0 bottom-0 bg-[#FFFFFF] h-1/2"></span>
                                                </span>
                                                Bahasa (ID)
                                            </button>
                                            <button 
                                                onClick={() => {
                                                    setLanguage('EN');
                                                    setLangDropdownOpen(false);
                                                }}
                                                className={`w-full flex items-center gap-3 px-4 py-2.5 text-xs font-bold text-gray-700 hover:bg-gray-50 cursor-pointer ${language === 'EN' ? 'text-blue-600 bg-blue-50/40' : ''}`}
                                            >
                                                <svg className="w-4 h-4 rounded-full overflow-hidden shrink-0 border border-gray-200" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="60" height="30" fill="#012169"/>
                                                    <path d="M0 0L60 30M60 0L0 30" stroke="#FFF" strokeWidth="6"/>
                                                    <path d="M0 0L60 30M60 0L0 30" stroke="#C8102E" strokeWidth="4"/>
                                                    <path d="M30 0V30M0 15H60" stroke="#FFF" strokeWidth="10"/>
                                                    <path d="M30 0V30M0 15H60" stroke="#C8102E" strokeWidth="6"/>
                                                </svg>
                                                English (EN)
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Search Button (Circle, Solid Blue bg-[#213FC0]) */}
                            <button 
                                onClick={() => setSearchOpen(true)}
                                className="bg-[#213FC0] hover:bg-[#1D37A8] rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center w-10 h-10" 
                                aria-label="Search"
                            >
                                <Search className="w-5 h-5 text-white" />
                            </button>

                            {/* Login Button (Hidden on Mobile, Visible on Desktop) */}
                            <Link href="/login" className="hidden md:block bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-bold px-5 py-2 rounded-full transition-all duration-200 shadow-sm">
                                {t('login')}
                            </Link>

                            {/* Hamburger Menu (Circle, Solid Blue bg-[#213FC0], Visible on Mobile Only) */}
                            <button
                                onClick={() => setIsOpen(true)}
                                className="md:hidden bg-[#213FC0] hover:bg-[#1D37A8] rounded-full transition-colors duration-200 text-white cursor-pointer flex items-center justify-center w-10 h-10"
                                aria-label="Open menu"
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer Navigation Menu */}
            <div
                className={`fixed inset-y-0 right-0 w-full h-full bg-white z-50 flex flex-col md:hidden transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-full opacity-0 pointer-events-none'}`}
            >
                {/* Drawer Header (Navy Blue) */}
                <div className="bg-[#152C8C] text-white h-16 px-6 flex justify-between items-center shrink-0 shadow-md">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <svg className="w-6 h-6 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 20c1.5-4.5 3.5-11 7-14 3.5 3 5.5 9.5 7 14" />
                            <path d="M8 15c2.5-1 5.5-2 7.5-4" />
                            <path d="M12 11h3.5V14.5" />
                        </svg>
                        <span className="text-xl font-black tracking-wider text-white">Artix</span>
                    </div>

                    {/* Close button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 text-white hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center"
                        aria-label="Close menu"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Drawer Body */}
                <div className="flex-grow overflow-y-auto px-6 py-6 bg-white flex flex-col">
                    {/* Header Title & Subtitle */}
                    <h2 className="text-2xl font-bold text-gray-900">{t('login')}</h2>
                    <p className="text-sm text-gray-500 mt-1">Silakan masuk untuk melanjutkan ke akun Anda.</p>

                    {/* Large Action Button */}
                    <Link
                        href="/login"
                        onClick={() => setIsOpen(false)}
                        className="block w-full bg-[#213FC0] hover:bg-[#1D37A8] text-white text-center py-3.5 rounded-xl text-sm font-bold shadow-md transition-all mt-5"
                    >
                        {t('login')}
                    </Link>

                    {/* Divider Line */}
                    <hr className="border-gray-100 my-6" />

                    {/* Vertical Interactive Menu List */}
                    <div className="flex flex-col gap-2">
                        {/* Beranda Link */}
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-4 py-3 hover:bg-gray-50 rounded-xl px-2 transition-all"
                        >
                            <div className="w-10 h-10 rounded-xl bg-[#F0F2FD] text-[#213FC0] flex items-center justify-center shrink-0">
                                <Home className="w-5 h-5" />
                            </div>
                            <span className="text-base font-semibold text-gray-800">{t('home')}</span>
                        </Link>

                        {/* Jelajah Link */}
                        <Link
                            href="#"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-4 py-3 hover:bg-gray-50 rounded-xl px-2 transition-all"
                        >
                            <div className="w-10 h-10 rounded-xl bg-[#F0F2FD] text-[#213FC0] flex items-center justify-center shrink-0">
                                <Compass className="w-5 h-5" />
                            </div>
                            <span className="text-base font-semibold text-gray-800">{t('explore')}</span>
                        </Link>

                        {/* Tentang Link */}
                        <Link
                            href="#"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-4 py-3 hover:bg-gray-50 rounded-xl px-2 transition-all"
                        >
                            <div className="w-10 h-10 rounded-xl bg-[#F0F2FD] text-[#213FC0] flex items-center justify-center shrink-0">
                                <Info className="w-5 h-5" />
                            </div>
                            <span className="text-base font-semibold text-gray-800">{t('about')}</span>
                        </Link>

                        {/* Hubungi Kami Link */}
                        <Link
                            href="#"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-4 py-3 hover:bg-gray-50 rounded-xl px-2 transition-all"
                        >
                            <div className="w-10 h-10 rounded-xl bg-[#F0F2FD] text-[#213FC0] flex items-center justify-center shrink-0">
                                <Phone className="w-5 h-5" />
                            </div>
                            <span className="text-base font-semibold text-gray-800">{t('contact')}</span>
                        </Link>
                    </div>

                    {/* Divider Line */}
                    <hr className="border-gray-100 my-6" />

                    {/* Secondary Plain Links */}
                    <div className="flex flex-col gap-4 pl-2 font-semibold text-sm text-gray-800 mb-6">
                        <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-[#213FC0] transition-colors">
                            {t('our_journey')}
                        </Link>
                        <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-[#213FC0] transition-colors">
                            {t('biaya')}
                        </Link>
                        <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-[#213FC0] transition-colors">
                            {t('gelang')}
                        </Link>
                        <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-[#213FC0] transition-colors">
                            {t('FAQ')}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Floating Bottom Navigation Bar */}
            <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] bg-[#213FC0] shadow-[0_8px_30px_rgba(0,0,0,0.25)] rounded-full px-2 py-2 items-center justify-between md:hidden border border-white/10 transition-all duration-300 ease-in-out ${pathname?.startsWith('/event/') ? 'hidden pointer-events-none' : 'flex'} ${isOpen ? 'opacity-0 translate-y-20 pointer-events-none z-40' : 'opacity-100 translate-y-0 z-50'}`}>
                {/* Home / Beranda Tab */}
                {activeTab === 'home' ? (
                    <button
                        onClick={() => setActiveTab('home')}
                        className="flex items-center gap-2 bg-white text-[#152C8C] px-4 py-3.5 rounded-full font-bold text-xs transition-all duration-300 shadow-sm cursor-pointer"
                    >
                        <Home className="w-4 h-4 text-[#152C8C]" />
                        <span>{t('home')}</span>
                    </button>
                ) : (
                    <button
                        onClick={() => setActiveTab('home')}
                        className="p-3 text-white/80 hover:text-white transition-colors duration-200"
                        aria-label="Home"
                    >
                        <Home className="w-5 h-5" />
                    </button>
                )}

                {/* Explore / Jelajah Tab */}
                {activeTab === 'explore' ? (
                    <button
                        onClick={() => setActiveTab('explore')}
                        className="flex items-center gap-2 bg-white text-[#152C8C] px-4 py-3.5 rounded-full font-bold text-xs transition-all duration-300 shadow-sm cursor-pointer"
                    >
                        <Compass className="w-4 h-4 text-[#152C8C]" />
                        <span>{t('explore')}</span>
                    </button>
                ) : (
                    <button
                        onClick={() => setActiveTab('explore')}
                        className="p-3 text-white/80 hover:text-white transition-colors duration-200"
                        aria-label="Explore"
                    >
                        <Compass className="w-5 h-5" />
                    </button>
                )}

                {/* Ticket Tab */}
                {activeTab === 'tickets' ? (
                    <button
                        onClick={() => setActiveTab('tickets')}
                        className="flex items-center gap-2 bg-white text-[#152C8C] px-4 py-3.5 rounded-full font-bold text-xs transition-all duration-300 shadow-sm cursor-pointer"
                    >
                        <Ticket className="w-4 h-4 text-[#152C8C]" />
                        <span>{t('tickets')}</span>
                    </button>
                ) : (
                    <button
                        onClick={() => setActiveTab('tickets')}
                        className="p-3 text-white/80 hover:text-white transition-colors duration-200"
                        aria-label="Tickets"
                    >
                        <Ticket className="w-5 h-5" />
                    </button>
                )}

                {/* Profile Tab */}
                {activeTab === 'profile' ? (
                    <button
                        onClick={() => setActiveTab('profile')}
                        className="flex items-center gap-2 bg-white text-[#152C8C] px-4 py-3.5 rounded-full font-bold text-xs transition-all duration-300 shadow-sm cursor-pointer"
                    >
                        <User className="w-4 h-4 text-[#152C8C]" />
                        <span>{t('profile')}</span>
                    </button>
                ) : (
                    <button
                        onClick={() => setActiveTab('profile')}
                        className="p-3 text-white/80 hover:text-white transition-colors duration-200"
                        aria-label="Profile"
                    >
                        <User className="w-5 h-5" />
                    </button>
                )}
            </div>

            {/* Search Overlay Modal */}
            {searchOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-start justify-center pt-24 px-4 sm:px-6">
                    {/* Click outside to close */}
                    <div className="fixed inset-0 -z-10" onClick={() => setSearchOpen(false)}></div>
                    
                    {/* Search Dialog Card */}
                    <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 flex flex-col gap-6 animate-in zoom-in-95 duration-200">
                        {/* Search Bar Input */}
                        <div className="flex items-stretch border-2 border-[#152C8C] rounded-2xl overflow-hidden focus-within:ring-4 focus-within:ring-blue-100 transition-all bg-gray-50/50">
                            <input 
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="Cari event Raisa Live in Concert"
                                className="flex-1 px-5 py-4 text-base text-gray-900 placeholder-gray-400 bg-transparent border-none focus:outline-none font-medium"
                                autoFocus
                            />
                            <button 
                                className="bg-[#152C8C] text-white px-6 hover:bg-[#0e1d5e] transition-colors flex items-center justify-center cursor-pointer shrink-0" 
                                aria-label="Search"
                            >
                                <Search className="w-5 h-5 text-white" />
                            </button>
                        </div>
                        
                        {/* Banyak Dicari (Trending Searches) */}
                        <div>
                            <h3 className="font-extrabold text-[#152C8C] text-base mb-3 flex items-center gap-1.5">
                                <svg className="w-4 h-4 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                    <polyline points="17 6 23 6 23 12"></polyline>
                                </svg>
                                {t('search_trending')}
                            </h3>
                            <div className="flex flex-wrap gap-2.5">
                                {["KARD 2026", "BBF 2026", "JGTC 2026", "Pestapora 2026", "Elfa's Singers Concert"].map((term) => (
                                    <button 
                                        key={term}
                                        onClick={() => handleTrendingClick(term)}
                                        className="bg-[#f0f2fd] hover:bg-[#e1e5fa] text-[#213FC0] px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                                    >
                                        <svg className="w-3.5 h-3.5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                            <polyline points="17 6 23 6 23 12"></polyline>
                                        </svg>
                                        {term}
                                    </button>
                                ))}
                            </div>
                        </div>
                        
   <div className="w-full">
  <h3 className="font-extrabold text-[#152C8C] text-base mb-3">
    {searchQuery.trim() === '' ? t('search_popular') : t('explore')}
  </h3>
  <div className="border border-gray-100 rounded-2xl overflow-hidden max-h-[300px] overflow-y-auto hide-scrollbar">
    {searchQuery.trim() === '' ? (
      // Default Popular Events
      popularEvents.length > 0 ? (
        popularEvents.map((event) => (
          <Link
            key={event.id}
            href={`/event/${event.slug}`}
            onClick={handleEventClick}
            className="flex items-center gap-4 p-4 hover:bg-gray-50 border-b border-gray-100/50 last:border-none cursor-pointer transition-colors"
          >
            <div className="relative w-20 sm:w-24 h-12 rounded-lg overflow-hidden bg-gray-100 shrink-0">
              <Image src={event.imageUrl} alt={event.title} fill sizes="96px" className="object-cover" />
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-0.5">
              <h4 className="font-extrabold text-xs sm:text-sm text-gray-900 truncate">
                {t(event.title, event.title_en)}
              </h4>
              <p className="text-[10px] sm:text-xs font-semibold text-gray-400">
                {t(event.location ?? '', event.location_en)}
              </p>
            </div>
          </Link>
        ))
      ) : (
        <div className="p-6 text-center text-sm font-semibold text-gray-400">
          {t('search_no_results')}
        </div>
      )
    ) : (
      // Search Results
      searchResults.length > 0 ? (
        searchResults.map((event) => (
          <Link
            key={event.id}
            href={`/event/${event.slug}`}
            onClick={handleEventClick}
            className="flex items-center gap-4 p-4 hover:bg-gray-50 border-b border-gray-100/50 last:border-none cursor-pointer transition-colors"
          >
            <div className="relative w-20 sm:w-24 h-12 rounded-lg overflow-hidden bg-gray-100 shrink-0">
              <Image src={event.imageUrl} alt={event.title} fill sizes="96px" className="object-cover" />
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-0.5">
              <h4 className="font-extrabold text-xs sm:text-sm text-gray-900 truncate">
                {t(event.title, event.title_en)}
              </h4>
              <p className="text-[10px] sm:text-xs font-semibold text-gray-400">
                {t(event.location ?? '', event.location_en)}
              </p>
            </div>
          </Link>
        ))
      ) : (
        <div className="p-8 text-center text-sm font-semibold text-gray-400">
          {t('search_no_results')}
        </div>
      )
    )}
  </div>
</div>
                        
                        {/* Close Action Indicator */}
                        <div className="flex justify-between items-center text-[10px] sm:text-xs font-semibold text-gray-400 border-t border-gray-100/50 pt-4">
                            <span>Tekan ESC atau Klik luar untuk menutup</span>
                            <button 
                                onClick={() => setSearchOpen(false)}
                                className="text-[#152C8C] hover:underline font-extrabold cursor-pointer"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}