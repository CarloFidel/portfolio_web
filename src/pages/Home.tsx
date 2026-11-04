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
      <VideoSection videoUrl={MEDIA_PATHS.VIDEO_LANDING} />
      <SelectedWorksSection />
      <AboutSection />
      {/* <MiscellaneousSection /> */}
      <VideoSection videoUrl={MEDIA_PATHS.VIDEO_SONGWRIGTER} />
      <FormSection />
    </>

  );
};

export default Home;
