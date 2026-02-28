import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import UsefulFeatureStyleWrapper from "./UsefulFeature.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import usefulFeatureIcon from "../../../assets/images/icons/useful-feature-icon.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

// Business Icons
import privateCompanyIcon from "../../../assets/images/icons1/private-limited-company-registration.svg";
import llpIcon from "../../../assets/images/icons1/llp-registration.svg";
import publicCompanyIcon from "../../../assets/images/icons1/public-limited-company-registration.svg";
import partnershipIcon from "../../../assets/images/icons1/partnership-firm-registration.svg";
import opcIcon from "../../../assets/images/icons1/one-person-company-(opc)-registration.svg";
import soleProprietorIcon from "../../../assets/images/icons1/sole-proprietorship-registration.svg";

// Licensing Icons
import gstRegIcon from "../../../assets/images/icons1/gst-registration.svg";
import shopsIcon from "../../../assets/images/icons1/shops-&-establishment-registration.svg";
import msmeIcon from "../../../assets/images/icons1/msme---udyam-registration.svg";
import iecIcon from "../../../assets/images/icons1/import-export-code-(iec)-registration.svg";
import profTaxIcon from "../../../assets/images/icons1/professional-tax-registration.svg";
import tradeLicenceIcon from "../../../assets/images/icons1/trade-licence-registration.svg";

// Taxation Icons
import incomeIcon from "../../../assets/images/icons1/income-tax-return-filing.svg";
import taxPlanIcon from "../../../assets/images/icons1/tax-planning-&-advisory.svg";
import gstReturnIcon from "../../../assets/images/icons1/gst-return-filing.svg";
import taxNoticeIcon from "../../../assets/images/icons1/tax-notice-handling.svg";
import tdsIcon from "../../../assets/images/icons1/tds-return-filing.svg";
import advanceTaxIcon from "../../../assets/images/icons1/advance-tax-compliance.svg";

// Compliance Icons
import rocIcon from "../../../assets/images/icons1/roc-annual-compliance.svg";
import statutoryIcon from "../../../assets/images/icons1/statutory-filings.svg";
import gstCompIcon from "../../../assets/images/icons1/gst-compliance.svg";
import healthCheckIcon from "../../../assets/images/icons1/compliance-health-check.svg";
import labourIcon from "../../../assets/images/icons1/labour-law-compliance.svg";
import secretarialIcon from "../../../assets/images/icons1/secretarial-compliance.svg";

// Finance Icons
import accountingIcon from "../../../assets/images/icons1/accounting-services.svg";
import misIcon from "../../../assets/images/icons1/mis-&-financial-reporting.svg";
import bookkeeperIcon from "../../../assets/images/icons1/bookkeeping-services.svg";
import cfoIcon from "../../../assets/images/icons1/virtual-cfo-services.svg";
import payrollIcon from "../../../assets/images/icons1/payroll-management.svg";
import cashFlowIcon from "../../../assets/images/icons1/cash-flow-management.svg";

const UsefulFeature = () => {
  const sliderNavRef = useRef(null);
  const sliderForRef = useRef(null);

  const [settingsFor, setSettingsFor] = useState({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    asNavFor: sliderNavRef.current,
    ref: sliderForRef,
  });

  const [settingsNav, setSettingsNav] = useState({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 6000,
    centerMode: false,
    focusOnSelect: true,
    ref: sliderNavRef,
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
    <UsefulFeatureStyleWrapper className="useful-feature-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="useful-feature-header" style={{ justifyContent: "center", textAlign: "center" }}>
              <ScrollAnimate delay={200}>
                <SectionTitle
                  title="Service Areas"
                  subtitle="What We Do"
                  parentClass="text-center mb-0"
                  titleClass="mb-0"
                  titleStyle={{ fontSize: "32px" }}
                  subtitleStyle={{ color: "#000000" }}
                />
              </ScrollAnimate>
              {/* <div className="useful-feature-header-right">
                <ScrollAnimate delay={220}>
                  <img src={usefulFeatureIcon} alt="icon" />
                </ScrollAnimate>
              </div> */}
            </div>
          </div>
        </div>
        <ScrollAnimate delay={200}>
          <div className="row">
            <div className="col-md-12">
              <Slider
                {...settingsNav}
                ref={sliderNavRef}
                className="useful-feature-slider-nav slider-nav"
              >
                <div className="slider-item">
                  <p>Business</p>
                </div>
                <div className="slider-item">
                  <p>Licensing</p>
                </div>
                <div className="slider-item">
                  <p>Taxation</p>
                </div>
                <div className="slider-item">
                  <p>Compliance</p>
                </div>
                <div className="slider-item">
                  <p>Finance</p>
                </div>
              </Slider>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider
                {...settingsFor}
                ref={sliderForRef}
                className="useful-feature-slider-for slider-for"
              >
                {/* Tab 1: Business - 6 boxes */}
                <div className="features-wrapper">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={privateCompanyIcon} alt="icon" className="feature-icon" />
                          <h3>Private Limited Company Registration</h3>
                        </div>
                        <p className="feature-description">
                          End-to-end support for private limited company registration and compliance.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={publicCompanyIcon} alt="icon" className="feature-icon" />
                          <h3>Public Limited Company Registration</h3>
                        </div>
                        <p className="feature-description">
                          Professional assistance for public limited company registration and statutory requirements.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={opcIcon} alt="icon" className="feature-icon" />
                          <h3>One Person Company (OPC) Registration</h3>
                        </div>
                        <p className="feature-description">
                          Registration support for single-owner companies with structured compliance framework.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={llpIcon} alt="icon" className="feature-icon" />
                          <h3>LLP Registration</h3>
                        </div>
                        <p className="feature-description">
                          Assistance for LLP registration with flexible structure and limited liability.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={partnershipIcon} alt="icon" className="feature-icon" />
                          <h3>Partnership Firm Registration</h3>
                        </div>
                        <p className="feature-description">
                          Support for partnership firm registration with clear agreements and compliance.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={soleProprietorIcon} alt="icon" className="feature-icon" />
                          <h3>Sole Proprietorship Registration</h3>
                        </div>
                        <p className="feature-description">
                          Simple registration support to formalise sole proprietorship business operations.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tab 2: Licensing - 6 boxes */}
                <div className="features-wrapper">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={gstRegIcon} alt="icon" className="feature-icon" />
                          <h3>GST Registration</h3>
                        </div>
                        <p className="feature-description">
                          End-to-end support for GST registration with accurate documentation.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={msmeIcon} alt="icon" className="feature-icon" />
                          <h3>MSME / Udyam Registration</h3>
                        </div>
                        <p className="feature-description">
                          Registration assistance for MSMEs to access recognised government benefits.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={profTaxIcon} alt="icon" className="feature-icon" />
                          <h3>Professional Tax Registration</h3>
                        </div>
                        <p className="feature-description">
                          Support for professional tax registration and state-level statutory compliance.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={shopsIcon} alt="icon" className="feature-icon" />
                          <h3>Shops & Establishment Registration</h3>
                        </div>
                        <p className="feature-description">
                          Registration services to comply with local shops and establishment laws.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={iecIcon} alt="icon" className="feature-icon" />
                          <h3>Import Export Code (IEC) Registration</h3>
                        </div>
                        <p className="feature-description">
                          Assistance for obtaining IEC to start import export operations.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={tradeLicenceIcon} alt="icon" className="feature-icon" />
                          <h3>Trade Licence Registration</h3>
                        </div>
                        <p className="feature-description">
                          Support for securing trade licences to operate businesses legally.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tab 3: Taxation - 6 boxes */}
                <div className="features-wrapper">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={incomeIcon} alt="icon" className="feature-icon" />
                          <h3>Income Tax Return Filing</h3>
                        </div>
                        <p className="feature-description">
                          Accurate income tax return filing for individuals and businesses.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={gstReturnIcon} alt="icon" className="feature-icon" />
                          <h3>GST Return Filing</h3>
                        </div>
                        <p className="feature-description">
                          Timely GST return filing to maintain statutory compliance.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={tdsIcon} alt="icon" className="feature-icon" />
                          <h3>TDS Return Filing</h3>
                        </div>
                        <p className="feature-description">
                          Professional support for filing TDS returns accurately and on time.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={taxPlanIcon} alt="icon" className="feature-icon" />
                          <h3>Tax Planning & Advisory</h3>
                        </div>
                        <p className="feature-description">
                          Strategic tax planning to optimise liabilities and ensure compliance.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={taxNoticeIcon} alt="icon" className="feature-icon" />
                          <h3>Tax Notice Handling</h3>
                        </div>
                        <p className="feature-description">
                          Assistance in responding to income tax and GST notices.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={advanceTaxIcon} alt="icon" className="feature-icon" />
                          <h3>Advance Tax Compliance</h3>
                        </div>
                        <p className="feature-description">
                          Guidance for calculating and paying advance tax obligations.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tab 4: Compliance - 6 boxes */}
                <div className="features-wrapper">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={rocIcon} alt="icon" className="feature-icon" />
                          <h3>ROC Annual Compliance</h3>
                        </div>
                        <p className="feature-description">
                          Annual ROC filings to keep companies compliant under corporate laws.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={gstCompIcon} alt="icon" className="feature-icon" />
                          <h3>GST Compliance</h3>
                        </div>
                        <p className="feature-description">
                          Ongoing GST compliance support including returns, reconciliations, and filings.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={labourIcon} alt="icon" className="feature-icon" />
                          <h3>Labour Law Compliance</h3>
                        </div>
                        <p className="feature-description">
                          Compliance support for labour laws including registrations and periodic filings.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={statutoryIcon} alt="icon" className="feature-icon" />
                          <h3>Statutory Filings</h3>
                        </div>
                        <p className="feature-description">
                          Timely statutory filings to meet regulatory requirements across authorities.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={healthCheckIcon} alt="icon" className="feature-icon" />
                          <h3>Compliance Health Check</h3>
                        </div>
                        <p className="feature-description">
                          Periodic review to identify gaps and ensure full compliance readiness.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={secretarialIcon} alt="icon" className="feature-icon" />
                          <h3>Secretarial Compliance</h3>
                        </div>
                        <p className="feature-description">
                          Secretarial compliance services to meet corporate governance requirements.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tab 5: Finance - 6 boxes */}
                <div className="features-wrapper">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={accountingIcon} alt="icon" className="feature-icon" />
                          <h3>Accounting Services</h3>
                        </div>
                        <p className="feature-description">
                          Accurate accounting services to maintain compliant and organised financial records.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={bookkeeperIcon} alt="icon" className="feature-icon" />
                          <h3>Bookkeeping Services</h3>
                        </div>
                        <p className="feature-description">
                          Systematic bookkeeping to track transactions and support financial clarity.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={payrollIcon} alt="icon" className="feature-icon" />
                          <h3>Payroll Management</h3>
                        </div>
                        <p className="feature-description">
                          End-to-end payroll processing ensuring timely salaries and statutory compliance.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={misIcon} alt="icon" className="feature-icon" />
                          <h3>MIS & Financial Reporting</h3>
                        </div>
                        <p className="feature-description">
                          Periodic MIS and financial reports to support informed business decisions.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={cfoIcon} alt="icon" className="feature-icon" />
                          <h3>Virtual CFO Services</h3>
                        </div>
                        <p className="feature-description">
                          Strategic financial oversight and guidance without hiring a full-time CFO.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="feature-box">
                        <div className="feature-box-header">
                          <img src={cashFlowIcon} alt="icon" className="feature-icon" />
                          <h3>Cash Flow Management</h3>
                        </div>
                        <p className="feature-description">
                          Monitoring and planning cash flows to maintain business liquidity.
                        </p>
                        <a href="#" className="feature-link">
                          Get Started <span className="iconify" data-icon="bi:arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </UsefulFeatureStyleWrapper>
  );
};

export default UsefulFeature;
