import SiteLayout from "@/components/feature/SiteLayout";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import AboutIntro from "./components/AboutIntro";
import AwardsCredentials from "./components/AwardsCredentials";
import BrandCollabTeaser from "./components/BrandCollabTeaser";
import ServicesGrid from "./components/ServicesGrid";
import HyroxSpotlight from "./components/HyroxSpotlight";
import SchedulePreview from "./components/SchedulePreview";
import TransformationsPreview from "./components/TransformationsPreview";
import Testimonials from "./components/Testimonials";
import BlogPreview from "./components/BlogPreview";
import CtaSection from "./components/CtaSection";
import MarqueeStrip from "./components/MarqueeStrip";
import FinalSection from "@/components/feature/FinalSection";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <MarqueeStrip />
      <StatsBar />
      <AboutIntro />
      <AwardsCredentials />
      <BrandCollabTeaser />
      <ServicesGrid />
      <HyroxSpotlight />
      <SchedulePreview />
      <TransformationsPreview />
      <Testimonials />
      <BlogPreview />
      <CtaSection />
      <FinalSection />
    </SiteLayout>
  );
}