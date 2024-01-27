import Stack from "react-bootstrap/Stack";
import HeroBanner from "../../../assets/HeroBanner.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <img src={HeroBanner} alt="Background" className="hero-image" />
      <div className="hero-text-block">
        <Stack gap={3}>
          <h2>Slogan</h2>
          <p id="heroFillerText">
            pitch pitch pitch
          </p>
          <p>
            Spot a pantry you love? Simply click the star to favorite it, making it easier to find next time you're nearby.
          </p>
          <h3>action word!</h3>
        </Stack>
      </div>
    </div>
  );
}

export default Hero;
