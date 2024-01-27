import IndexButtons from '../components/LandingPage/IndexButtons/IndexButton.tsx';
import Stack from 'react-bootstrap/Stack';
import HeroBanner from '../assets/LandingPage(2).png';
import '../index.css';

function Index() {

  return (
    <>
    <div className="index-hero-container">
      {/* Hero Image and Text */}
      <div className="hero-section">
        <img src={HeroBanner} alt="Background" className="hero-image" />
        <div className="index-hero-text-block">
          <Stack gap={3}>
            <h1>Plateful</h1>
            <p> With 14 accessible locations across both VCU campuses, <strong>free food</strong> is never far away. </p>
            <p id="indexFillerText">
               We pride ourselves on keeping our pantries restocked daily, ensuring you have fresh options whenever you need them.
            </p>
            <h3>Browse. Select. Eat. Repeat.</h3>
          </Stack>
        </div>
      </div>
      <IndexButtons />
    </div>
    </>
  );
}

export default Index;
