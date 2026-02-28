import { useState } from "react";
import TeamBestPricingStyleWrapper from "./TeamBestPricing.style";
import SectionTitle from "./../../../Components/SectionTitle/SectionTitle";
import { pricingPlans } from "./../../../assets/data/TeamColaborationData/pricingPlans";

import mostPopularIcon from "../../../assets/images/icons/most-popular.svg";
import plusBlueIcon from "../../../assets/images/icons/plus-blue.svg";
import user1Image from "../../../assets/images/avater/u1.png";
import user2Image from "../../../assets/images/avater/u2.png";
import user3Image from "../../../assets/images/avater/u3.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const TeamBestPricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleMonthlyClick = () => {
    setIsYearly(false);
  };

  const handleYearlyClick = () => {
    setIsYearly(true);
  };

  const handleToggleChange = (e) => {
    setIsYearly(e.target.checked);
  };

  return (
    <TeamBestPricingStyleWrapper className="best-pricing-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ScrollAnimate delay={200}>
              <SectionTitle
                title="Choose the Right Service Based on Your Requirement"
                subtitle="Our Pricing"
                parentClass="text-center"
                titleStyle={{
                  fontSize: "32px",
                  lineHeight: "45px"
                }}
                subtitleStyle={{ color: "#000000" }}
              />
              <p style={{ fontSize: "16px", color: "#666666", marginTop: "-10px", marginBottom: "40px", textAlign: "center" }}>
                Select the right plan that fits your business needs and compliance requirements
              </p>
              {/* <div className="best-pricing-selector">
                <form action="/" method="post">
                  <button
                    type="button"
                    className={`best-pricing-monthly-btn ${
                      !isYearly ? "active" : ""
                    }`}
                    onClick={handleMonthlyClick}
                  >
                    Monthly
                  </button>

                  <input
                    type="checkbox"
                    name="pricing-selector"
                    id="pricing-selector"
                    checked={isYearly}
                    onChange={handleToggleChange}
                  />

                  <button
                    type="button"
                    className={`best-pricing-yearly-btn ${
                      isYearly ? "active" : ""
                    }`}
                    onClick={handleYearlyClick}
                  >
                    Yearly <span>(20% Off)</span>
                  </button>
                </form>
              </div> */}
            </ScrollAnimate>
          </div>
        </div>
        <ScrollAnimate delay={200}>
          <div className="row">
            <div className="col-md-12">
              <div className="best-pricing-grid">
                {pricingPlans?.map((plan, index) => (
                  <div key={index}>
                    {plan.id === "custom" ? (
                      <div className={`best-pricing-card v2`}>
                        <div className="best-pricing-card-header">
                          <div className="best-pricing-card-title">
                            <h2>{plan.title}</h2>
                            <img src={plan.icon} alt="pricing-icon" />
                          </div>

                          <p>{plan.description}</p>

                          <ul className="users-list">
                            <li>
                              <a href="#">
                                <img src={user1Image} alt="user-img" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src={user2Image} alt="user-img" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src={user3Image} alt="user-img" />
                              </a>
                            </li>
                            <li>
                              <button>
                                <img src={plusBlueIcon} alt="add-user" />
                              </button>
                            </li>
                          </ul>
                        </div>

                        <div className="best-pricing-card-body">
                          {isYearly ? (
                            <ul className="list">
                              {plan.plans.yearly.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          ) : (
                            <ul className="list">
                              {plan.plans.monthly.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          )}
                          <button className="buy-now-btn">Buy Now</button>
                        </div>
                      </div>
                    ) : (
                      <div
                        key={index}
                        className={`best-pricing-card ${plan.id}`}
                      >
                        {plan.id === "meeting" && (
                          <div className="overlay">
                            <p className="mb-0">Most Popular</p>
                            <img src={mostPopularIcon} alt="icon" />
                          </div>
                        )}

                        <div className="best-pricing-card-header">
                          <div className="best-pricing-card-title">
                            <h2>{plan.title}</h2>
                          </div>

                          <p style={{ textAlign: index < 3 ? "center" : "left" }}>
                            {plan.subtitle || plan.description}
                          </p>

                          {plan.id === "ITR Capital Gain(ESOP & RSU)" ? (
                            <h3 style={{ fontWeight: 700, marginBottom: 0 }}>
                              {plan.subtitle}
                            </h3>
                          ) : (
                            <>
                              <h3 style={{ fontWeight: 700, marginBottom: "2px", fontSize: "22px" }}>
                                Starting from
                              </h3>
                              {isYearly ? (
                                <h3>
                                  {plan.plans.yearly.price} <span>/year</span>
                                </h3>
                              ) : (
                                <h3>
                                  {plan.plans.monthly.price} <span>/month</span>
                                </h3>
                              )}
                            </>
                          )}
                        </div>
                        <div className="best-pricing-card-body">
                          {(index === 1 || index === 2) && plan.noteText && (
                            <p style={{ fontSize: "11px", color: "#999999", marginBottom: "8px", marginTop: "-15px", textAlign: "center", whiteSpace: "nowrap" }}>
                              {plan.noteText}
                            </p>
                          )}
                          {isYearly ? (
                            <ul className="list" style={{ marginTop: (index === 1 || index === 2) ? "0px" : "20px" }}>
                              {plan.plans.yearly.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          ) : (
                            <ul className="list" style={{ marginTop: (index === 1 || index === 2) ? "0px" : "20px" }}>
                              {plan.plans.monthly.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          )}
                          <button className="buy-now-btn">
                            {index === 0 ? "Get Started" : index === 1 ? "View Services" : index === 2 ? "View Services" : "Talk to an Expert"}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimate>
        {/* <ScrollAnimate delay={200}>
          <div className="row">
            <div className="col-md-12">
              <div className="best-pricing-info">
                <div className="best-pricing-info-left">
                  <ul className="list">
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>No cards required</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>30 day free trial</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>Get started in 2 minutes</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="best-pricing-info-right">
                  <p>Want to see full pricing?</p>
                  <a href="#" className="compare-plans-btn">
                    <span>Compare Planes</span>
                    <span className="icon">
                      <span
                        className="iconify"
                        data-icon="akar-icons:chevron-right"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimate> */}
      </div>
    </TeamBestPricingStyleWrapper>
  );
};

export default TeamBestPricing;
