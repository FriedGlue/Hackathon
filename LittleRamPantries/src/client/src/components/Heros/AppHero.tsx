import Stack from "react-bootstrap/Stack";
import HeroBanner from "../../assets/HeroBanner.png"
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <img src={HeroBanner} alt="Background" className="hero-image" />
      <div className="hero-text-block">
        <Stack gap={3}>
          <h2>Favorites at Your Fingertips</h2>
          <p id="heroFillerText">
            With 14 accessible locations across both VCU campuses, <strong> free food </strong>is never far away. We pride ourselves on keeping our pantries restocked daily, ensuring you have fresh options whenever you need them.
          </p>
          <p>
            Spot a pantry you love? Simply click the star to favorite it, making it easier to find next time you're nearby.
          </p>
          <h3>Browse. Select. Eat. Repeat.</h3>
        </Stack>
      </div>
    </div>
  );
}

export default Hero;
