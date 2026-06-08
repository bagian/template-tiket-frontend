import HeroSection from '@/components/home/HeroSection';
import CategorySection from '@/components/home/CategorySection';
import EventList from '@/components/home/EventList';
import NearbyEvents from '@/components/home/NearbyEvents';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <EventList />
      <NearbyEvents />

      {/* Section Laris Manis */}
      <section className="bg-gradient-to-br from-[#2b2b73] to-[#3a3ab8] py-16 relative overflow-hidden">
        {/* Background Pattern (Opsional: garis-garis diagonal tipis) */}
        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#fff_10px,#fff_11px)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Laris Manis</h2>
          <p className="text-blue-100 text-sm md:text-base mb-10">
            Kumpulan event-event laris manis di Artatix yang mungkin kamu sukai
          </p>

          {/* Banner Horizontal Layout */}
          <div className="flex gap-4 overflow-x-auto justify-start md:justify-center hide-scrollbar snap-x pb-4">
            <div className="w-[300px] h-[120px] md:w-[350px] md:h-[150px] bg-yellow-600 rounded-2xl shrink-0 snap-center shadow-lg border border-white/10 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400')] bg-cover bg-center"></div>
            </div>
            <div className="w-[300px] h-[120px] md:w-[350px] md:h-[150px] bg-purple-600 rounded-2xl shrink-0 snap-center shadow-lg border border-white/10 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-2xl">Sae Men Fest</div>
            </div>
            <div className="w-[300px] h-[120px] md:w-[350px] md:h-[150px] bg-red-400 rounded-2xl shrink-0 snap-center shadow-lg border border-white/10 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center text-white font-bold text-xl">ARS LONGA</div>
            </div>
          </div>

          <h3 className="text-white text-lg font-bold mt-6">Saemen Fest 2026</h3>
        </div>
      </section>
    </div>
  );
}