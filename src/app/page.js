import HeroSection from "@/components/layout/hero-section";
import DestinationSection from "@/components/layout/destination-section";
import SpecialOffer from "@/components/layout/special-offer";
import OurBlog from "@/components/layout/our-blog";
import TripPlanners from "@/components/layout/trip-planners";
import DestinationGallery from "@/components/layout/destination-gallery";

export default function App() {
  return (
    <>
      <HeroSection />
      <DestinationSection />
      <SpecialOffer />
      <OurBlog />
      <TripPlanners />
      <DestinationGallery />
    </>
  );
}
