'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic
        console.log('Login submitted:', { email, password });
    };

    return (
        <div className="min-h-screen w-full flex bg-white select-none">

            {/* Sisi Kiri: Visual Banner (Hidden on Mobile/Tablet, Visible on lg screens) */}
            <div className="hidden lg:flex lg:w-1/2 relative h-screen sticky top-0 overflow-hidden bg-slate-900">
                {/* Background Image (Concert Crowd from Unsplash) */}
                <img
                    src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80"
                    alt="Concert Crowd"
                    className="absolute inset-0 w-full h-full object-cover opacity-65 scale-105 animate-[pulse_8s_infinite_alternate]"
                />

                {/* Gradient Overlay for Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a24]/90 via-[#0a0a24]/40 to-[#0a0a24]/20" />

                {/* Welcome Content */}
                <div className="relative z-10 flex flex-col justify-between p-16 w-full h-full text-white">
                    {/* Top Section: Branding */}
                    <div className="flex items-center gap-3">
                        <svg className="w-8 h-8 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 20c1.5-4.5 3.5-11 7-14 3.5 3 5.5 9.5 7 14" />
                            <path d="M8 15c2.5-1 5.5-2 7.5-4" />
                            <path d="M12 11h3.5V14.5" />
                        </svg>
                        <span className="text-2xl font-black tracking-wider">Armanex</span>
                    </div>

                    {/* Middle/Bottom Section: Catchy Tagline */}
                    <div className="max-w-md">
                        <h1 className="text-4xl font-extrabold tracking-tight leading-tight">
                            Temukan Pengalaman Konser Terbaik Anda
                        </h1>
                        <p className="text-white/80 mt-4 text-sm leading-relaxed">
                            Beli tiket konser, pameran, festival, dan olahraga terpopuler dengan mudah, aman, dan tanpa repot. Pilihan terlengkap hanya di genggaman Anda.
                        </p>

                        {/* Micro Dots Decorative */}
                        <div className="flex gap-2 mt-8">
                            <span className="w-6 h-1.5 rounded-full bg-[#3b82f6]"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
                        </div>
                    </div>

                    {/* Footer Info */}
                    <div className="text-xs text-white/50">
                        &copy; 2026 Artatix. Hak Cipta Dilindungi.
                    </div>
                </div>
            </div>

            {/* Sisi Kanan: Form Login (All Devices) */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-16 lg:px-24 py-12 relative min-h-screen">

                {/* Back to Home Button */}
                <Link
                    href="/"
                    className="absolute top-6 left-6 sm:left-12 lg:left-24 flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-[#213FC0] transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Kembali ke Beranda</span>
                </Link>

                {/* Form Wrapper */}
                <div className="w-full max-w-md mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                        {/* Mobile Logo Only */}
                        <div className="flex items-center gap-2 lg:hidden mb-6">
                            <svg className="w-7 h-7 text-[#213FC0] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 20c1.5-4.5 3.5-11 7-14 3.5 3 5.5 9.5 7 14" />
                                <path d="M8 15c2.5-1 5.5-2 7.5-4" />
                                <path d="M12 11h3.5V14.5" />
                            </svg>
                            <span className="text-xl font-black tracking-wider text-[#152C8C]">Artatix</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                            Selamat Datang Kembali
                        </h2>
                        <p className="text-sm text-gray-500 mt-2">
                            Silakan masuk untuk melanjutkan transaksi dan memesan tiket Anda.
                        </p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Input Email */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold text-gray-700 tracking-wide">
                                EMAIL / USERNAME
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                    <Mail className="w-4 h-4" />
                                </span>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="nama@email.com"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#213FC0] focus:bg-white text-gray-900 placeholder-gray-400 transition-all font-medium"
                                />
                            </div>
                        </div>

                        {/* Input Password */}
                        <div className="flex flex-col gap-1.5">
                            <div className="flex justify-between items-center">
                                <label className="text-xs font-bold text-gray-700 tracking-wide">
                                    KATA SANDI
                                </label>
                            </div>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                    <Lock className="w-4 h-4" />
                                </span>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Masukkan kata sandi Anda"
                                    className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#213FC0] focus:bg-white text-gray-900 placeholder-gray-400 transition-all font-medium"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password Links */}
                        <div className="flex items-center justify-between text-xs sm:text-sm pt-1">
                            <label className="flex items-center gap-2 text-gray-600 font-semibold cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 border-gray-300 rounded text-[#213FC0] focus:ring-[#213FC0] accent-[#213FC0]"
                                />
                                <span>Ingat saya</span>
                            </label>
                            <Link href="#" className="font-bold text-[#213FC0] hover:text-[#1D37A8] transition-colors">
                                Lupa Kata Sandi?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#213FC0] hover:bg-[#1D37A8] text-white text-center py-3.5 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer mt-2"
                        >
                            Masuk
                        </button>
                    </form>

                    {/* Divider "Atau masuk dengan" */}
                    <div className="relative my-7">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-3 text-gray-400 font-bold tracking-wider">
                                Atau masuk dengan
                            </span>
                        </div>
                    </div>

                    {/* Google Login Option */}
                    <button
                        type="button"
                        onClick={() => console.log('Google login clicked')}
                        className="flex items-center justify-center gap-3 w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-bold py-3.5 rounded-xl shadow-sm hover:shadow transition-all duration-200 cursor-pointer text-sm"
                    >
                        {/* Google Icon SVG */}
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                        </svg>
                        <span>Masuk dengan Google</span>
                    </button>

                    {/* Footer register link */}
                    <p className="text-sm text-gray-500 mt-8 text-center">
                        Belum punya akun?{' '}
                        <Link href="#" className="font-bold text-[#213FC0] hover:text-[#1D37A8] transition-colors">
                            Daftar Sekarang
                        </Link>
                    </p>
                </div>
            </div>

        </div>
    );
}
