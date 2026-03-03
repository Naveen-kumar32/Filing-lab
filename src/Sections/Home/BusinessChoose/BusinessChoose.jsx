import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import BusinessChooseStyle from "./BusinessChoose.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import whyChoose1 from "../../../assets/images/why-choose-us/1.svg";
import whyChoose2 from "../../../assets/images/why-choose-us/2.svg";
import whyChoose3 from "../../../assets/images/why-choose-us/3.svg";
import whyChoose4 from "../../../assets/images/why-choose-us/4.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const BusinessChoose = () => {
  const sliderForRef = useRef(null);
  const sliderNavRef = useRef(null);

  const [settingsFor, setSettingsFor] = useState({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    asNavFor: sliderNavRef.current,
    ref: sliderForRef,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  const [settingsNav, setSettingsNav] = useState({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: sliderForRef.current,
    dots: false,
    autoplay: true,
    autoplaySpeed: 6000,
    centerMode: false,
    focusOnSelect: true,
    ref: sliderNavRef,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  useEffect(() => {
    setSettingsFor((prevSettings) => ({
      ...prevSettings,
      asNavFor: sliderNavRef.current,
    }));
    setSettingsNav((prevSettings) => ({
      ...prevSettings,
      asNavFor: sliderForRef.current,
    }));
  }, []);

  return (
    <BusinessChooseStyle className="why-choose-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ScrollAnimate delay={200}>
            <SectionTitle
              title="Reliable Support for Every Business and Compliance Need"
              subtitle="Why Choose us"
              alignment="center"
              parentClass="z-index-3"
              titleStyle={{
                fontSize: "32px",
                lineHeight: "45px"
              }}
              subtitleStyle={{
                color: "#ff6b00"
              }}
            />
            </ScrollAnimate>
          </div>
        </div>
      </div>
      <div className="why-choose-parent">
        <div className="overlay-left" />
        <div className="overlay-right" />
        <ScrollAnimate delay={200}>
        <div className="why-choose-container container">
          <div className="container">
            <div className="why-choose-tab">
              <Slider
                {...settingsNav}
                className="tab-buttons why-chose-slider-nav"
              >
                <button className="tab-btn">
                  <span>01.</span> <span className="text" style={{color:"orange"}}>Accuracy & Compliance</span>
                </button>
                <button className="tab-btn">
                  <span>02.</span> <span className="text" style={{color:"orange"}}>Timely Delivery</span>
                </button>
                <button className="tab-btn">
                  <span>03.</span> <span className="text" style={{color:"orange"}}>Expert Guidance</span>
                </button>
                <button className="tab-btn">
                  <span>04.</span> <span className="text" style={{color:"orange"}}>Transparent Process</span>
                </button>
              </Slider>
              <progress max={100} value={0} />
            </div>
          </div>

          <Slider {...settingsFor} className="convert-visitors-slider-for why-chose-slider">
            <div className="section">
              <div className="tab-body">
                <div className="tab-body-img">
                  <img src={whyChoose1} alt="img" />
                </div>
                <div className="tab-body-text">
                  <h2>No compromise on accuracy and </h2>
                  <h2>compliance</h2>
                  <p>
                   At Filing Lab, every filing is handled with careful review
and attention to detail. We follow current Indian laws and
regulations to ensure your registrations, tax filings, and
compliances are completed correctly and without errors.
                  </p>
                  <ul className="list">
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>Multi-level review before submission</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>Compliance aligned with latest regulations</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>Reduced risk of notices and penalties</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="tab-body">
                <div className="tab-body-img">
                  <img src={whyChoose2} alt="img" />
                </div>
                <div className="tab-body-text">
                  <h2>On-time filings without</h2>
                  <h2>last-minute stress</h2>
                  <p>
                    We follow structured timelines and internal tracking to
ensure all filings are completed well before due dates. Our
process helps businesses avoid delays, penalties, and
compliance gaps.
                  </p>
                  <ul className="list">
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>Proactive due-date tracking</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>Timely reminders and updates</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>No last-minute rush</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="tab-body">
                <div className="tab-body-img">
                  <img src={whyChoose3} alt="img" />
                </div>
                <div className="tab-body-text">
                  <h2>Guidance you can clearly</h2>
                  <h2>understand</h2>
                  <p>
                    Our team explains requirements in plain English, helping
you understand what is needed and why. We keep
communication simple so you can make informed
decisions with confidence.
                  </p>
                  <ul className="list">
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>Clear explanations without legal jargon</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>Dedicated support team</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>Practical, business-focused advice</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="tab-body">
                <div className="tab-body-img">
                  <img src={whyChoose4} alt="img" />
                </div>
                <div className="tab-body-text">
                  <h2>Simple and transparent service</h2>
                  <h2>process</h2>
                  <p>
                    With Filing Lab, you always know what stage your service
is in. We follow a clear process from document collection
to final submission, keeping you informed throughout.
                  </p>
                  <ul className="list">
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>Clear process flow</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>Regular status updates</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>No hidden steps or confusion</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        </ScrollAnimate>
      </div>
    </BusinessChooseStyle>
  );
};

export default BusinessChoose;