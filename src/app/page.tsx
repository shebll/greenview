import { Footer } from "@/components/layout/Footer";
import { FooterCta } from "@/components/layout/FooterCta";
import { Header } from "@/components/layout/Header";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { InquiryForm } from "@/components/sections/InquiryForm";
import { LocationSection } from "@/components/sections/LocationSection";
import { MediaSection } from "@/components/sections/MediaSection";
import { ProjectHero } from "@/components/sections/ProjectHero";
import { ProjectMetadata } from "@/components/sections/ProjectMetadata";
import { ProjectNavigation } from "@/components/sections/ProjectNavigation";
import { ProjectOverview } from "@/components/sections/ProjectOverview";
import { Picture } from "@/components/shared/Picture";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        {/* White rounded "sheet" that overlaps the hero banner */}
        <div className="relative -mt-10 overflow-x-clip rounded-t-sheet bg-white py-20">
          <ProjectHero />
          <ProjectMetadata />
          <ProjectOverview />
          <FeaturesGrid />
          <MediaSection />
          <LocationSection />
          <InquiryForm />
          <ProjectNavigation />
        </div>
      </main>
      <div className="bg-dark relative">
        <Picture
          src="/images/hero/footer.jpeg"
          alt=""
          tone="dark"
          label="Footer background"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-overlay" aria-hidden="true" />

        <FooterCta />
        <Footer />
      </div>
    </>
  );
}
