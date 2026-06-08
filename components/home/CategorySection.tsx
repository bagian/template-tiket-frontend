'use client';
import { Music, Palette, Sparkles, Trophy, Clapperboard, BookOpen } from 'lucide-react';

const categories = [
    {
        name: 'Musik',
        icon: Music,
        gradient: 'from-pink-50 to-rose-50 hover:from-pink-100 hover:to-rose-100',
        iconBg: 'bg-rose-500 text-white',
        description: 'Konser, festival, & gig musik',
        count: '12 Event'
    },
    {
        name: 'Pameran',
        icon: Palette,
        gradient: 'from-purple-50 to-indigo-50 hover:from-purple-100 hover:to-indigo-100',
        iconBg: 'bg-indigo-500 text-white',
        description: 'Seni, budaya, & galeri foto',
        count: '8 Event'
    },
    {
        name: 'Wahana',
        icon: Sparkles,
        gradient: 'from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100',
        iconBg: 'bg-orange-500 text-white',
        description: 'Taman bermain & rekreasi',
        count: '5 Event'
    },
    {
        name: 'Olahraga',
        icon: Trophy,
        gradient: 'from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100',
        iconBg: 'bg-emerald-500 text-white',
        description: 'Turnamen, lari, & kompetisi',
        count: '6 Event'
    },
    {
        name: 'Teater',
        icon: Clapperboard,
        gradient: 'from-cyan-50 to-blue-50 hover:from-cyan-100 hover:to-blue-100',
        iconBg: 'bg-cyan-500 text-white',
        description: 'Drama, musikal, & standup',
        count: '4 Event'
    },
    {
        name: 'Seminar',
        icon: BookOpen,
        gradient: 'from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100',
        iconBg: 'bg-blue-600 text-white',
        description: 'Workshop, kelas, & webinar',
        count: '10 Event'
    }
];

export default function CategorySection() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 select-none">
            <div className="flex flex-col mb-8">
                <h2 className="text-xl font-bold text-gray-900 font-sans">Kategori Event</h2>
                <p className="text-sm text-gray-500 mt-1">Cari berbagai pilihan event menarik berdasarkan kategori favoritmu</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                {categories.map((cat) => {
                    const IconComponent = cat.icon;
                    return (
                        <div
                            key={cat.name}
                            className={`group relative flex flex-col justify-between p-5 rounded-2xl border border-gray-100 bg-gradient-to-br ${cat.gradient} cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md active:scale-98`}
                        >
                            {/* Icon Wrapper */}
                            <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${cat.iconBg} shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                                <IconComponent className="w-5.5 h-5.5" />
                            </div>

                            {/* Label & Meta */}
                            <div className="mt-8">
                                <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                                    {cat.name}
                                </h3>
                                <p className="text-[11px] text-gray-400 mt-1 line-clamp-1 group-hover:text-gray-500 transition-colors">
                                    {cat.description}
                                </p>
                            </div>

                            {/* Count Badge */}
                            <span className="absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/70 text-gray-600 border border-gray-100 group-hover:bg-white transition-colors">
                                {cat.count}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
