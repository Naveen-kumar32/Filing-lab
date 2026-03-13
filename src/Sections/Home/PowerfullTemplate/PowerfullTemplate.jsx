import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TitleStyleWrapper from "./../../../Components/Title/Title.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import PowerfullTemplateStyle from "./PowerfullTemplate.style";

import templateImg1 from "../../../assets/images/animic/1.png";
import templateImg2 from "../../../assets/images/animic/2.png";
import templateImg3 from "../../../assets/images/animic/3.png";
import templateImg4 from "../../../assets/images/animic/4.png";
import monitorIcon from "../../../assets/images/icons/monitor_icon.svg";
import messageIcon from "../../../assets/images/icons/message_icon.svg";
import documentIcon from "../../../assets/images/icons/document_icon.svg";
import checkmark from "../../../assets/images/checkmark/3.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import Consultation from "../Consultation/Consultation";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  border-radius: 12px;
  overflow: hidden;
  width: 650px;
  height: 500px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.3s ease-in-out;
  display: flex;
  flex-direction: column;

  @keyframes slideUp {
    from { transform: translateY(50px); opacity: 0; }
    to   { transform: translateY(0);    opacity: 1; }
  }

  /* Every wrapper must stretch to fill 620×620 */
  .consultation-section,
  .consultation-section > .container,
  .consultation-section > .container > div,   /* ScrollAnimate outer div */
  .consultation-card {
    flex: 1 !important;
    display: flex !important;
    flex-direction: column !important;
    padding: 0 !important;
    margin: 0 !important;
    max-width: 100% !important;
    width: 100% !important;
    height: 100% !important;
    background-size: cover !important;
    border-radius: 0 !important;
  }

  .row {
    flex: 1 !important;
    margin: 0 !important;
    display: flex !important;
    align-items: stretch !important;
    height: 100% !important;
  }

  .col-md-6 {
    padding: 0 !important;
    flex: 1 !important;
    max-width: 50% !important;
    width: 50% !important;
    display: flex !important;
    flex-direction: column !important;
  }

  /* Left green panel */
  .consultation-left {
    flex: 1 !important;
    padding: 32px 26px !important;
    border-radius: 0 !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
  }

  /* ScrollAnimate div inside left col */
  .consultation-left > div,
  .col-md-6 > div {
    flex: 1 !important;
    display: flex !important;
    flex-direction: column !important;
  }

  .consultation-img {
    margin-bottom: 12px !important;
    img { max-width: 60px !important; }
  }

  .consultation-text {
    p, h5 { margin-bottom: 4px !important; font-size: 13px !important; }
  }

  /* Right white form panel */
  .consultation-form {
    flex: 1 !important;
    padding: 28px 26px 32px !important;
    background: #fff !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    padding-top: 18px !important;
    form {
      width: 100% !important;
      label {
        font-size: 12px !important;
        line-height: 18px !important;
        margin-bottom: 2px !important;
      }
      input {
        height: 36px !important;
        font-size: 12px !important;
        margin-bottom: 10px !important;
        padding: 6px 12px !important;
      }
    }
  }

  .consultation-dropdown {
    &::after { top: 10px !important; }
    select {
      height: 36px !important;
      font-size: 12px !important;
      margin-bottom: 16px !important;
      padding: 6px 12px !important;
    }
  }

  .phone-input-group {
    margin-bottom: 10px !important;
  }

  .consultation-form-title {
    position: relative !important;
    top: -20px !important;
    margin-bottom: -4px !important;
    font-size: 13px !important;
    max-width: 280px !important;
  }

  .consultation-btn {
    padding: 8px 20px !important;
    font-size: 13px !important;
  }
`;

function PowerfullTemplate() {
  const powerfullTemplateContentRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const hasAutoOpenedRef = useRef(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
  });

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Auto-open when FinanceLetsTalk section enters viewport — resets every page load
  useEffect(() => {
    const target = document.getElementById("finance-lets-talk");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAutoOpenedRef.current) {
          hasAutoOpenedRef.current = true;
          setShowModal(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowModal(false);
    setFormData({ name: "", phone: "", subject: "" });
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  }

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-left, .fade-right");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("fade-in");
            void entry.target.offsetWidth;
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
                color: "#ed740a"
              }}
            />
            <h6 className="mb-0" style={{ marginTop: "12px" }}>
FilingLab makes compliance easy with a clear four-step process — submit your request, share details,
make payment, and receive confirmation with ongoing support.</h6>
           </ScrollAnimate>
          </div>
        </TitleStyleWrapper>

        {/* Powerfull Template Content */}
        <div
          className="powerfull-template-content"
          ref={powerfullTemplateContentRef}
        >
          {/* Box 1 - Content Left, Image Right */}
          <ScrollAnimate delay={200}>
            <div className="template-card-wrapper fade-bottom">
              <div className="circle-decoration">
                <span>01</span>
              </div>
              <div className="rectangle-decoration">
                <h4>Choose your required service</h4>
              </div>
              
              <div className="template-card">
                <div className="card-left">
                  <ul className="points-list">
                    <li>
                      <img src={checkmark} alt="✔" className="check-icon" />&nbsp;&nbsp;&nbsp;&nbsp;Provide complete business information
                    </li>
                    <li>
                      <img src={checkmark} alt="✔" className="check-icon" />&nbsp;&nbsp;&nbsp;&nbsp;Enter director or personal details
                    </li>
                    <li>
                      <img src={checkmark} alt="✔" className="check-icon" />&nbsp;&nbsp;&nbsp;&nbsp;Upload required documents securely
                    </li>
                    <li>
                      <img src={checkmark} alt="✔" className="check-icon" />&nbsp;&nbsp;&nbsp;&nbsp;Verify and confirm submission
                    </li>
                  </ul>
                  <button className="cta-button" onClick={handleOpenModal}>Start Application</button>
                </div>
                
                <div className="card-right">
                  <img src={templateImg1} alt="Filing Process" />
                </div>
              </div>
            </div>
          </ScrollAnimate>

          {/* Box 2 - Image Left, Content Right */}
          <ScrollAnimate delay={200}>
            <div className="template-card-wrapper reverse fade-bottom">
              <div className="circle-decoration">
                <span>02</span>
              </div>
              <div className="rectangle-decoration">
                <h4>Share Business Details</h4>
              </div>
              
              <div className="template-card">
                <div className="card-left">
                  <ul className="points-list">
                    <li>
                      <img src={checkmark} alt="✔" className="check-icon" />&nbsp;&nbsp;&nbsp;&nbsp;Provide complete business information
                    </li>
                    <li>
                      <img src={checkmark} alt="✔" className="check-icon" />&nbsp;&nbsp;&nbsp;&nbsp;Enter director or personal details
                    </li>
                    <li>
                      <img src={checkmark} alt="✔" className="check-icon" />&nbsp;&nbsp;&nbsp;&nbsp;Upload required documents securely
                    </li>
                    <li>
                      <img src={checkmark} alt="✔" className="check-icon" />&nbsp;&nbsp;&nbsp;&nbsp;Verify and confirm submission
                    </li>
                  </ul>
                  <button className="cta-button" onClick={handleOpenModal}>Submit Details</button>
                </div>

                <div className="card-right">
                  <img src={templateImg2} alt="Filing Process" />
                </div>
              </div>
            </div>
          </ScrollAnimate>

          {/* Box 3 - Content Left, Image Right */}
          <ScrollAnimate delay={200}>
            <div className="template-card-wrapper fade-bottom">
              <div className="circle-decoration">
                <span>03</span>
              </div>
              <div className="rectangle-decoration">
                <h4>Secure Payment</h4>
              </div>
              
              <div className="template-card">
                <div className="card-left">
                  <ul className="points-list">
                    <li>
                      <img src={checkmark} alt="✔" className="check-icon" />&nbsp;&nbsp;&nbsp;&nbsp;Review transparent service pricing
                    </li>
                    <li>
                      <img src={checkmark} alt="✔" className="check-icon" />&nbsp;&nbsp;&nbsp;&nbsp;Select your preferred payment method
                    </li>
                    <li>
                      <img src={checkmark} alt="✔" className="check-icon" />&nbsp;&nbsp;&nbsp;&nbsp;Complete payment through secure gateway
                    </li>
                    <li>
                      <img src={checkmark} alt="✔" className="check-icon" />&nbsp;&nbsp;&nbsp;&nbsp;Receive instant invoice and confirmation
                    </li>
                  </ul>
                  <button className="cta-button" onClick={handleOpenModal}>Proceed to Payment</button>
                </div>
                
                <div className="card-right">
                  <img src={templateImg3} alt="Filing Process" />
                </div>
              </div>
            </div>
          </ScrollAnimate>

          {/* Box 4 - Image Left, Content Right */}
          <ScrollAnimate delay={200}>
            <div className="template-card-wrapper reverse fade-bottom">
              <div className="circle-decoration">
                <span>04</span>
              </div>
              <div className="rectangle-decoration">
                <h4>Confirmation & Support</h4>
              </div>
              
              <div className="template-card">
                <div className="card-left">
                  <ul className="points-list">
                    <li>
                      <img src={checkmark} alt="✔" className="check-icon" />&nbsp;&nbsp;&nbsp;&nbsp;Provide complete business information
                    </li>
                    <li>
                      <img src={checkmark} alt="✔" className="check-icon" />&nbsp;&nbsp;&nbsp;&nbsp;Enter director or personal details
                    </li>
                    <li>
                      <img src={checkmark} alt="✔" className="check-icon" />&nbsp;&nbsp;&nbsp;&nbsp;Upload required documents securely
                    </li>
                    <li>
                      <img src={checkmark} alt="✔" className="check-icon" />&nbsp;&nbsp;&nbsp;&nbsp;Verify and confirm submission
                    </li>
                  </ul>
                  <button className="cta-button" onClick={handleOpenModal}>Track Status</button>
                </div>

                <div className="card-right">
                  <img src={templateImg4} alt="Filing Process" />
                </div>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>

      {showModal && (
        <ModalOverlay onClick={handleOverlayClick}>
          <ModalContent>
            <Consultation onClose={handleCloseModal} />
          </ModalContent>
        </ModalOverlay>
      )}
    </PowerfullTemplateStyle>
  );
}

export default PowerfullTemplate;
