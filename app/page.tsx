import Hero from "@/components/sections/hero";
import IntegrationsBanner from "@/components/sections/integrations-banner";
import Testimonials from "@/components/sections/testimonials";
import VideoTestimonials from "@/components/sections/video-testimonials";
import Method from "@/components/sections/method";
import Journey from "@/components/sections/journey";
import Marketplaces from "@/components/sections/marketplaces";
import Pricing from "@/components/sections/pricing";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <IntegrationsBanner />
      <VideoTestimonials />
      <Testimonials />
      <Method />
      <Journey />
      <Marketplaces />
      <Pricing />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
