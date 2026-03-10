import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import BusinessChooseStyle from "./BusinessChoose.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import whyChoose1 from "../../../assets/images/why-choose-us/1.svg";
import whyChoose2 from "../../../assets/images/why-choose-us/2.svg";
import whyChoose3 from "../../../assets/images/why-choose-us/3.svg";
import whyChoose4 from "../../../assets/images/why-choose-us/4.svg";
import checkmark6 from "../../../assets/images/checkmark/6.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const TABS = [
  { num: "01.", label: "Accuracy & Compliance" },
  { num: "02.", label: "Timely Delivery" },
  { num: "03.", label: "Expert Guidance" },
  { num: "04.", label: "Transparent Process" },
];
const AUTOPLAY_DURATION = 6000;

const BusinessChoose = () => {
  const sliderForRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const intervalRef = useRef(null);

  const startAutoplay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveTab((prev) => {
        const next = (prev + 1) % TABS.length;
        sliderForRef.current?.slickGoTo(next);
        return next;
      });
    }, AUTOPLAY_DURATION);
  };

  useEffect(() => {
    startAutoplay();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleTabClick = (i) => {
    setActiveTab(i);
    sliderForRef.current?.slickGoTo(i);
    startAutoplay();
  };

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    infinite: true,
  };

  return (
    <BusinessChooseStyle className="why-choose-section" id="business-choose">
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
                color: "#ed740a"
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
              <div className="tab-buttons why-chose-slider-nav">
                {TABS.map((tab, i) => (
                  <button
                    key={i}
                    className={`tab-btn${activeTab === i ? " slick-current" : ""}`}
                    onClick={() => handleTabClick(i)}
                  >
                    <span>{tab.num}</span>{" "}
                    <span className="text" style={{ color: "#ed740a" }}>{tab.label}</span>
                    {activeTab === i && (
                      <span key={activeTab} className="tab-progress-line" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Slider {...settingsFor} ref={sliderForRef} className="convert-visitors-slider-for why-chose-slider">
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
                        <img src={checkmark6} alt="✔" className="check-icon" />
                        <p>Multi-level review before submission</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <img src={checkmark6} alt="✔" className="check-icon" />
                        <p>Compliance aligned with latest regulations</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <img src={checkmark6} alt="✔" className="check-icon" />
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
                        <img src={checkmark6} alt="✔" className="check-icon" />
                        <p>Proactive due-date tracking</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <img src={checkmark6} alt="✔" className="check-icon" />
                        <p>Timely reminders and updates</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <img src={checkmark6} alt="✔" className="check-icon" />
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
                        <img src={checkmark6} alt="✔" className="check-icon" />
                        <p>Clear explanations without legal jargon</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <img src={checkmark6} alt="✔" className="check-icon" />
                        <p>Dedicated support team</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <img src={checkmark6} alt="✔" className="check-icon" />
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
                        <img src={checkmark6} alt="✔" className="check-icon" />
                        <p>Clear process flow</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <img src={checkmark6} alt="✔" className="check-icon" />
                        <p>Regular status updates</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <img src={checkmark6} alt="✔" className="check-icon" />
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