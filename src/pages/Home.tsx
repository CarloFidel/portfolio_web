import { HeroSection } from "../components/home/HeroSection";
import { FormSection } from "../components/home/FormSection";
import { SelectedWorksSection } from "../components/home/SelectedWorksSection";
import { AboutSection } from "../components/home/AboutSection";
import { VideoSection } from "../components/home/VideoSection";
import { MEDIA_PATHS } from "../constants/assets.constants";


const Home = () => {
  return (
    <>
      <HeroSection />
      {/* <StatsSection /> */}
      <VideoSection
        headerTitle="Scoring"
        videoUrl={MEDIA_PATHS.VIDEO_LANDING}
        footerText="Trail of Light — Berlin International Film Scoring Competition 2024."
      />
      <SelectedWorksSection />
      <AboutSection />
      {/* <MiscellaneousSection /> */}
      <VideoSection
        headerTitle="ORCHESTRAL"
        videoUrl={MEDIA_PATHS.VIDEO_BRATISLAVA}
        footerText="Bratislava Symphonic Orchestra."
      />
      <FormSection />
    </>

  );
};

export default Home;
