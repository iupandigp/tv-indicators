import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import TradingCharts from "@/components/sections/trading-charts";
import VideoDemo from "@/components/sections/video-demo";
import Pricing from "@/components/sections/pricing";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <TradingCharts />
      <VideoDemo />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
}