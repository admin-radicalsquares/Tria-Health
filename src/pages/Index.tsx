import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import MediaReel from "@/components/landing/MediaReel";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import ImpactMetrics from "@/components/landing/ImpactMetrics";
import Testimonial from "@/components/landing/Testimonial";
import Founder from "@/components/landing/Founder";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      <Navbar />
      <MediaReel />
      <Hero />
      <Problem />
      <Solution />
      <ImpactMetrics />
      <Testimonial />
      <Founder />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
