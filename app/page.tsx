import HeroSection from '@/components/home/HeroSection';
import CategorySection from '@/components/home/CategorySection';
import CityExplore from '@/components/home/CityExplore';
// import EventLaris from '@/components/home/EventLaris';
import EventList from '@/components/home/EventList';
import NearbyEvents from '@/components/home/NearbyEvents';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      {/* <EventLaris /> */}
      <EventList />
      <CityExplore />
      <NearbyEvents />
    </div>
  );
}