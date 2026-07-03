import "../../../css/hero.css";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import ScrollIndicator from "../../common/ScrollIndicator";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-split">
        <div className="hero-left-panel">
          <div className="hero-glow" />
          <HeroContent />
        </div>
        <div className="hero-right-panel">
          <HeroImage />
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
