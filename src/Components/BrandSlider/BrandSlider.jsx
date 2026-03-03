import BrandSliderStyleWrapper from "./BrandSlider.style";
// import SliderImg1 from "../../assets/images/brands/bisways.png";
import SliderImg2 from "../../assets/images/brands/bitrix.png";
import SliderImg3 from "../../assets/images/brands/paybooks.png";
import SliderImg4 from "../../assets/images/brands/quickbooks.png";
import SliderImg5 from "../../assets/images/brands/saasu.png";
import SliderImg6 from "../../assets/images/brands/tally.png";
// import SliderImg7 from "../../assets/images/brands/tsheets.png";
import SliderImg8 from "../../assets/images/brands/zoho.png";
// import SliderImg9 from "../../assets/images/brands/riota.png";
import ScrollAnimate from "../ScrollAnimate";

const BrandSlider = ({ titleClass, sliderClass }) => {
  const brandImages = [
    // SliderImg1,
    SliderImg2,
    SliderImg3,
    SliderImg4,
    SliderImg5,
    SliderImg6,
    // SliderImg7,
    SliderImg8,
    // SliderImg9,
    // SliderImg1,
    SliderImg2,
    SliderImg3,
    SliderImg4,
    SliderImg5,
    SliderImg6,
    // SliderImg7,
    SliderImg8,
    // SliderImg9,
  ];

  return (
    <BrandSliderStyleWrapper className="brands-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ScrollAnimate delay={200}>
              <div className={titleClass}>
                <h2 style={{color:"#ff6b00"}}>Trusted by Businesses Nationwide</h2>
              </div>
            </ScrollAnimate>
            <ScrollAnimate delay={200}>
              <div className={`brands-slider ${sliderClass}`}>
                <div className="brands-slider-container">
                  {brandImages.map((src, index) => (
                    <div key={index} className="slider-item">
                      <img src={src} alt={`slider-img-${index}`} />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </BrandSliderStyleWrapper>
  );
};

export default BrandSlider;
