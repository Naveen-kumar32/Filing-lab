import { useEffect, useRef, useState } from "react";
import TitleStyleWrapper from "./../../../Components/Title/Title.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import PowerfullTemplateStyle from "./PowerfullTemplate.style";

import templateImg1 from "../../../assets/images/how-It-works/1.svg";
import templateImg2 from "../../../assets/images/how-It-works/2.svg";
import templateImg3 from "../../../assets/images/how-It-works/3.svg";
import monitorIcon from "../../../assets/images/icons/monitor_icon.svg";
import messageIcon from "../../../assets/images/icons/message_icon.svg";
import documentIcon from "../../../assets/images/icons/document_icon.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

function PowerfullTemplate() {
  const [activeNumber, setActiveNumber] = useState(0);
  const powerfullTemplateContentRef = useRef(null);
  const timelineProgressRef = useRef(null);
  useEffect(() => {
  const elements = document.querySelectorAll(".fade-left, .fade-right");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Remove the class first to reset the animation
          entry.target.classList.remove("fade-in");
          // Trigger reflow to restart animation
          void entry.target.offsetWidth;
          // Add the class back to trigger animation
          entry.target.classList.add("fade-in");
        } else {
          // Remove class when element is out of view so it animates again when it comes back
          entry.target.classList.remove("fade-in");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);


  useEffect(() => {
    const handleScroll = () => {
      updateProgress();
    };

    const handleResize = () => {
      updateProgress();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    updateProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updateProgress = () => {
    const timelineProgress = timelineProgressRef.current;
    const powerfullTemplateContent = powerfullTemplateContentRef.current;
    const sectionTop = powerfullTemplateContent.getBoundingClientRect().top;
    const sectionHeight = powerfullTemplateContent.clientHeight;
    const windowHeight = window.innerHeight;

    const progress = Math.max(
      0,
      Math.min(1, (windowHeight - sectionTop) / (sectionHeight + windowHeight))
    );

    timelineProgress.style.height = `${progress * 100}%`;

    // Update active number based on progress thresholds
    if (progress >= 0 && progress < 0.33) {
      setActiveNumber(1);
    } else if (progress >= 0.33 && progress < 0.66) {
      setActiveNumber(2);
    } else if (progress >= 0.66) {
      setActiveNumber(3);
    }
  };

  return (
    <PowerfullTemplateStyle className="powerfull-template-section">
      <div className="container">
        <TitleStyleWrapper>
          <div className="section-title md-mb-0 text-center">
           <ScrollAnimate delay={200}>
            <SectionTitle
              title="A Simple, Structured Way to Manage Filings and Compliance"
              subtitle="How It Works"
              alignment="center"
              parentClass="z-index-3"
              titleStyle={{
                fontSize: "32px",
                lineHeight: "45px"
              }}
              subtitleStyle={{
                color: "#000000"
              }}
            />
            <h6 className="mb-0" style={{ marginTop: "12px" }}>
Filing Lab makes tax, compliance, and business services easy through a guided, step-by-step process.            </h6>
           </ScrollAnimate>
          </div>
        </TitleStyleWrapper>

        {/* Powerfull Template Content */}
        <div
          className="powerfull-template-content"
          ref={powerfullTemplateContentRef}
        >
          <div className="timeline-innerline">
            <div className="timeline-progress" ref={timelineProgressRef}></div>
          </div>

          {/* Powerfull Template Rows */}
          <div className="powerfull-template-row">
          <div
              className={`powerfull-template-number ${
                activeNumber >= 1 ? "active" : ""
              }`}
            >
              1
            </div>
            <div className="row">
              <div className="col-md-6">
                <ScrollAnimate delay={200}>
                <div className="powerfull-template-img powerfull-template-img-left fade-left">
                  <img src={templateImg1} alt="img" />
                </div>
                </ScrollAnimate>
              </div>
              <div className="col-md-6">
                <ScrollAnimate delay={300}>
                <div className="powerfull-template-text powerfull-template-text-right fade-right">
                  <h4>Share Your Requirement</h4>
                  <p>
                    Choose the service you need or submit
your requirement online. Our team
reviews your request and confirms the
documents and process clearly.
                  </p>
                  <ul>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" />
                      Select your required service
                    </li>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" /> High
Clear document checklist
                    </li>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" /> No
Quick confirmation from our team                    </li>
                  </ul>
                </div>
                </ScrollAnimate>
              </div>
            </div>
          </div>
          <div className="powerfull-template-row">
          <div
              className={`powerfull-template-number ${
                activeNumber >= 2 ? "active" : ""
              }`}
            >
              2
            </div>
            <div className="row flex-row-reverse">
              <div className="col-md-6">
                <ScrollAnimate delay={300}>
                <div className="powerfull-template-img powerfull-template-img-right fade-left">
                  <img src={templateImg2} alt="img" />
                </div>
                </ScrollAnimate>
              </div>
              <div className="col-md-6">
                <ScrollAnimate delay={200}>
                <div className="powerfull-template-text powerfull-template-text-left fade-right">
                  <h4>We Prepare and File Everything</h4>
                 
                  <p>
                    Our experts prepare, review, and file all
documents as per applicable laws. Every
submission is checked carefully to ensure
accuracy and timely compliance.
                  </p>
                  <ol>
                    <li>
                      <span>
                        <img src={monitorIcon} alt="icon" />
                      </span>
Expert document preparation
                    </li>
                    <li>
                      <span>
                        <img src={messageIcon} alt="icon" />
                      </span>
                      Multi-level review process
                    </li>
                    <li>
                      <span>
                        <img src={documentIcon} alt="icon" />
                      </span>
Timely and accurate filings                    </li>
                  </ol>
                </div>
                </ScrollAnimate>
              </div>
            </div>
          </div>
          <div className="powerfull-template-row">
          <div
              className={`powerfull-template-number ${
                activeNumber >= 3 ? "active" : ""
              }`}
            >
              3
            </div>
            <div className="row">
              <div className="col-md-6">
                <ScrollAnimate delay={200}>
                <div className="powerfull-template-img powerfull-template-img-left pb-0 fade-left">
                  <img src={templateImg3} alt="img" />
                </div>
                </ScrollAnimate>
              </div>
              <div className="col-md-6">
                <ScrollAnimate delay={300}>
                <div className="powerfull-template-text powerfull-template-text-right fade-right">
                  <h4>Receive Confirmation and Ongoing Support</h4>
                  <p>
                    You receive filing confirmations and
updates once the process is completed. We
continue to support you with renewals,
compliance tracking, and future needs.
                  </p>
                  <ul>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" />
Filing acknowledgements

                    </li>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" /> High
Compliance reminders

                    </li>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" /> No
Dedicated ongoing support</li>
                  </ul>
                </div>
                </ScrollAnimate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PowerfullTemplateStyle>
  );
}

export default PowerfullTemplate;
