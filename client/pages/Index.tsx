import HeroSection from "../components/HeroSection";
import CarCategories from "../components/CarCategories";
import FeaturedCars from "../components/FeaturedCars";
import WhyApex from "../components/WhyApex";
import CallToAction from "../components/CallToAction";

export default function Index() {
  return (
    <main>
      <HeroSection />
      <CarCategories />
      <FeaturedCars />
      <WhyApex />
      <CallToAction />
    </main>
  );
}
