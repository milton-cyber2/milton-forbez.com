import SiteLayout from "@/components/feature/SiteLayout";
import Hero from "./components/Hero";
import StoryGrid from "./components/StoryGrid";
import FeaturedStory from "./components/FeaturedStory";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import FinalCta from "./components/FinalCta";

export default function Transformations() {
  return (
    <SiteLayout>
      <Hero />
      <StoryGrid />
      <FeaturedStory />
      <Stats />
      <Testimonials />
      <FinalCta />
    </SiteLayout>
  );
}