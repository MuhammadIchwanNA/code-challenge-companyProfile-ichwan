import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import AboutSection from "@/app/components/AboutSection";
import ServicesSection from "./components/Services";
import TestimonialsSection from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
