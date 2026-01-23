import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import ContextSection from "@/components/ContextSection";
import AboutGrunerSection from "@/components/AboutGrunerSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProcessSection from "@/components/ProcessSection";
import MediaMentionsSection from "@/components/MediaMentionsSection";
import ProjectsMapSection from "@/components/ProjectsMapSection";
import TeamSection from "@/components/TeamSection";
import AwardsSection from "@/components/AwardsSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Branded Page Loader */}
      <PageLoader />
      
      <Header />
      <main>
        {/* 1. Hero Slider */}
        <HeroSection />
        
        {/* Trusted By Partner Logos */}
        <TrustedBySection />
        
        {/* 2. Problem Statement (India's Waste Problem) - Light bg */}
        <ContextSection />
        
        {/* 3. About Gruner - Alternating: Light/subtle bg */}
        <AboutGrunerSection />
        
        {/* 4. Our Expertise (Solutions) - Dark section for contrast */}
        <div className="bg-foreground">
          <SolutionsSection />
        </div>
        
        {/* 5. How it Works - Light bg */}
        <ProcessSection />
        
        {/* Media Mentions Strip */}
        <MediaMentionsSection />
        
        {/* 6. Upcoming Bio-CNG Plants Across India - Dark section */}
        <div className="bg-foreground">
          <ProjectsMapSection />
        </div>
        
        {/* 7. Our Leadership - Light bg */}
        <TeamSection />
        
        {/* 8. Recognition & Certifications - Subtle muted bg */}
        <div className="bg-muted/30">
          <AwardsSection />
        </div>
        
        {/* 9. Get in Touch - Light bg */}
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
