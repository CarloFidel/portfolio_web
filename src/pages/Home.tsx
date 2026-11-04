import { HeroSection } from "../components/home/HeroSection";
import { StatsSection } from "../components/home/StatsSection";
import { FormSection } from "../components/home/FormSection";
import { SelectedWorksSection } from "../components/home/SelectedWorksSection";
import { AboutSection } from "../components/home/AboutSection";
import { MiscellaneousSection } from "../components/home/MiscellaneousSection";
import { VideoSection } from "../components/home/VideoSection";


const Home = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <SelectedWorksSection />
      <VideoSection />
      <AboutSection />
      <MiscellaneousSection />
      <FormSection />
    </>

  );
};

export default Home;
