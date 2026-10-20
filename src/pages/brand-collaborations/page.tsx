import SiteLayout from "@/components/feature/SiteLayout";
import HeroSection from "./components/HeroSection";
import CampaignShowcase from "./components/CampaignShowcase";
import Capabilities from "./components/Capabilities";
import Partners from "./components/Partners";
import ModellingSection from "./components/ModellingSection";
import InquiryForm from "./components/InquiryForm";

export default function BrandCollaborations() {
  return (
    <SiteLayout>
      <HeroSection />
      <CampaignShowcase />
      <Capabilities />
      <Partners />
      <ModellingSection />
      <InquiryForm />
    </SiteLayout>
  );
}