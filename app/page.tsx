import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesPreview from "@/components/FeaturesPreview";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import SecuritySection from "@/components/SecuritySection";
import MoreReasons from "@/components/MoreReasons";
import Testimonials from "@/components/Testimonials";
import PricingPreview from "@/components/PricingPreview";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#161332] text-slate-200 overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturesPreview />
      <HowItWorks />
      <UseCases />
      <SecuritySection />
      <MoreReasons />
      <Testimonials />
      <PricingPreview />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
