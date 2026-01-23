import PageLayout from "@/components/PageLayout";
import AboutHero from "@/components/about/AboutHero";
import VisionMissionSection from "@/components/about/VisionMissionSection";
import ImpactStatsSection from "@/components/about/ImpactStatsSection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import WhyChooseSection from "@/components/about/WhyChooseSection";
import LeadershipSection from "@/components/about/LeadershipSection";

const About = () => {
  return (
    <PageLayout>
      <AboutHero />
      <VisionMissionSection />
      <ImpactStatsSection />
      <CoreValuesSection />
      <WhyChooseSection />
      <LeadershipSection />
    </PageLayout>
  );
};

export default About;
