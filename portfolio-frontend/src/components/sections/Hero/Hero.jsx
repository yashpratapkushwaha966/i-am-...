import "../../../css/hero.css";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroBackground from "../../common/HeroBackground";
import ScrollIndicator from "../../common/ScrollIndicator";

const Hero = () => {
  return (
    <section className="hero" id="home">

    <HeroBackground />

    <div className="container hero-container">

        <HeroContent />

        <HeroImage />

    </div>
<ScrollIndicator />
</section>

  );
};

export default Hero;