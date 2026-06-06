'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();

    // Hide Footer on the login page
    if (pathname === '/login') {
        return null;
    }

    return (
        <div className="pb-20 md:pb-0 bg-[#152C8C] mt-20">
            <div className="bg-[#152C8C] px-6 z-20">
                <footer className="flex max-w-7xl mx-auto pt-10 lg:pt-20 pb-6 flex-col gap-4">
                    <div className="flex flex-col lg:flex-row justify-between gap-10">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl font-black text-white tracking-wider">
                                Arta
                            </h2>
                            <h1 className="text-xs md:text-base text-white font-semibold">Your Professional Ticketing Partner</h1>
                        </div>
                        <div className="grid z-20 text-sm grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
                            <div className="flex flex-col gap-2">
                                <h1 className="font-semibold text-white mb-2">Tentang Kami</h1>
                                <Link className="text-white hover:underline" href="#">Tentang Kami</Link>
                                <Link className="text-white hover:underline" href="#">Our Journey</Link>
                                <Link className="text-white hover:underline" href="#">Hubungi Kami</Link>
                                <Link className="text-white hover:underline" href="#">Biaya</Link>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className="font-semibold text-white mb-2">Informasi</h1>
                                <Link className="text-white hover:underline" href="#">Syarat & Ketentuan</Link>
                                <Link className="text-white hover:underline" href="#">Kebijakan Privasi & Pemrosesan Data</Link>
                                <Link className="text-white hover:underline" href="#">FAQ</Link>
                                <Link className="text-white hover:underline" href="#">Tiket Gelang</Link>
                                <Link className="text-white hover:underline" href="#">Validasi Tiket</Link>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className="font-semibold text-white mb-2">Kategori Event</h1>
                                <button className="text-left text-white hover:underline">Musik</button>
                                <button className="text-left text-white hover:underline">Pameran</button>
                                <button className="text-left text-white hover:underline">Wahana</button>
                                <button className="text-left text-white hover:underline">Olahraga</button>
                                <button className="text-left text-white hover:underline">Semua Kategori</button>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4 border-white/20" />
                    <div className="flex flex-col-reverse items-center md:items-start justify-between md:flex-row gap-4">
                        <h2 className="text-sm text-white">© 2026 Tiketku. Hak Cipta Dilindungi.</h2>
                        <div className="flex gap-4">
                            {/* Dummy Social Icons */}
                            <Link href="#" className="text-white hover:text-gray-300">WA</Link>
                            <Link href="#" className="text-white hover:text-gray-300">IG</Link>
                            <Link href="#" className="text-white hover:text-gray-300">TT</Link>
                            <Link href="#" className="text-white hover:text-gray-300">X</Link>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
