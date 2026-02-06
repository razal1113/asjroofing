import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <CTASection />
    </>
  );
}
