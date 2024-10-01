"use client"
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import 'react-multi-carousel/lib/styles.css'; 
import HeroSection from "@/components/layout/hero-section";
import DestinationSection from "@/components/layout/destination-section";
import SpecialOffer from "@/components/layout/special-offer";
import OurBlog from "@/components/layout/our-blog";
import TripPlanners from "@/components/layout/trip-planners";
import DestinationGallery from "@/components/layout/destination-gallery";
import TravelerExperiences from '@/components/layout/traveler-experience';
import Footer from "@/components/layout/footer";

export default function App() {
  
  useEffect(() => {
    AOS.init();
    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <>
      <HeroSection />
      <DestinationSection />
      <SpecialOffer />
      <OurBlog />
      <TripPlanners />
      <DestinationGallery />
      <TravelerExperiences />
      <Footer />
    </>
  );
}
