'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, Home, Compass, Info, Phone, Ticket, User } from 'lucide-react';

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('home');

    // Scroll Lock: Prevent background page from scrolling when mobile menu drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Hide Navbar on the login page (placed after all hook calls to comply with React Rules of Hooks)
    if (pathname === '/login') {
        return null;
    }

    return (
        <header className="w-full select-none z-50 sticky top-0">
            {/* Top Bar Kecil (Navy Gelap - Hidden on Mobile) */}
            <div className="bg-[#0a0a24] border-b border-white/5 hidden md:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-end gap-6 text-[11px] font-semibold text-white/70">
                    <Link href="#" className="hover:text-white transition-colors duration-200">Our Journey</Link>
                    <Link href="#" className="hover:text-white transition-colors duration-200">Biaya</Link>
                    <Link href="#" className="hover:text-white transition-colors duration-200">Tiket Gelang</Link>
                    <Link href="#" className="hover:text-white transition-colors duration-200">FAQ</Link>
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
                                Beranda
                            </Link>
                            <Link href="#" className="text-white/80 hover:text-white px-5 py-1.5 rounded-full transition-colors duration-200">
                                Jelajah
                            </Link>
                            <Link href="#" className="text-white/80 hover:text-white px-5 py-1.5 rounded-full transition-colors duration-200">
                                Tentang
                            </Link>
                            <Link href="#" className="text-white/80 hover:text-white px-5 py-1.5 rounded-full transition-colors duration-200">
                                Hubungi Kami
                            </Link>
                        </div>

                        {/* Actions Kanan */}
                        <div className="flex items-center gap-2.5 sm:gap-3">
                            {/* ID Language Button (Pill Capsule, Solid Blue bg-[#213FC0]) */}
                            <button className="flex items-center gap-2 bg-[#213FC0] hover:bg-[#1D37A8] h-10 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer">
                                <span className="inline-flex w-4 h-4 rounded-full overflow-hidden border border-white/20 relative shrink-0">
                                    <span className="absolute inset-x-0 top-0 bg-[#FF0000] h-1/2"></span>
                                    <span className="absolute inset-x-0 bottom-0 bg-[#FFFFFF] h-1/2"></span>
                                </span>
                                ID
                            </button>

                            {/* Search Button (Circle, Solid Blue bg-[#213FC0]) */}
                            <button className="bg-[#213FC0] hover:bg-[#1D37A8] rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center w-10 h-10" aria-label="Search">
                                <Search className="w-5 h-5 text-white" />
                            </button>

                            {/* Login Button (Hidden on Mobile, Visible on Desktop) */}
                            <Link href="/login" className="hidden md:block bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-bold px-5 py-2 rounded-full transition-all duration-200 shadow-sm">
                                Masuk
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

            {/* Mobile Responsive Drawer Overlay (Full screen with smooth slide transition from the right) */}
            <div
                className={`fixed inset-y-0 right-0 w-full h-full bg-white z-50 flex flex-col md:hidden transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0 pointer-events-auto visible' : 'translate-x-full pointer-events-none invisible'}`}
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
                        <span className="text-xl font-black tracking-wider text-white">Artatix</span>
                    </div>

                    {/* Close button (Polos, no circle background, matches screenshot 2) */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 text-white hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center"
                        aria-label="Close menu"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Drawer Body (White background, interactive menu, matches screenshot 2) */}
                <div className="flex-grow overflow-y-auto px-6 py-6 bg-white flex flex-col">
                    {/* Header Title & Subtitle */}
                    <h2 className="text-2xl font-bold text-gray-900">Masuk</h2>
                    <p className="text-sm text-gray-500 mt-1">Silakan masuk untuk melanjutkan ke akun Anda.</p>

                    {/* Large Action Button */}
                    <Link
                        href="/login"
                        onClick={() => setIsOpen(false)}
                        className="block w-full bg-[#213FC0] hover:bg-[#1D37A8] text-white text-center py-3.5 rounded-xl text-sm font-bold shadow-md transition-all mt-5"
                    >
                        Masuk
                    </Link>

                    {/* Divider Line */}
                    <hr className="border-gray-100 my-6" />

                    {/* Vertical Interactive Menu List with Pastel Icon Containers */}
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
                            <span className="text-base font-semibold text-gray-800">Beranda</span>
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
                            <span className="text-base font-semibold text-gray-800">Jelajah</span>
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
                            <span className="text-base font-semibold text-gray-800">Tentang</span>
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
                            <span className="text-base font-semibold text-gray-800">Hubungi Kami</span>
                        </Link>
                    </div>

                    {/* Divider Line */}
                    <hr className="border-gray-100 my-6" />

                    {/* Secondary Plain Links (Our Journey, Biaya, etc.) */}
                    <div className="flex flex-col gap-4 pl-2 font-semibold text-sm text-gray-800 mb-6">
                        <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-[#213FC0] transition-colors">
                            Our Journey
                        </Link>
                        <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-[#213FC0] transition-colors">
                            Biaya
                        </Link>
                        <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-[#213FC0] transition-colors">
                            Tiket Gelang
                        </Link>
                        <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-[#213FC0] transition-colors">
                            FAQ
                        </Link>
                    </div>
                </div>
            </div>

            {/* Floating Bottom Navigation Bar (Visible on Mobile Only, matches new screenshot) */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] bg-[#213FC0] shadow-[0_8px_30px_rgba(0,0,0,0.25)] rounded-full px-2 py-2 flex items-center justify-between z-50 md:hidden border border-white/10">
                {/* Home / Beranda Tab */}
                {activeTab === 'home' ? (
                    <button
                        onClick={() => setActiveTab('home')}
                        className="flex items-center gap-2 bg-white text-[#152C8C] px-4 py-3.5 rounded-full font-bold text-xs transition-all duration-300 shadow-sm cursor-pointer"
                    >
                        <Home className="w-4 h-4 text-[#152C8C]" />
                        <span>Beranda</span>
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
                        <span>Jelajah</span>
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
                        <span>Tiket</span>
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
                        <span>Profil</span>
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
        </header>
    );
}