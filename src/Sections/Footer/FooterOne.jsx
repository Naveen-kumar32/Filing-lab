import React, { useState } from 'react'
import FooterStyleWrapper from "./Footer.style";
import FooterSocialLinks from "../../assets/data/footer/footerSocialLinks";
import FooterLogo from "../../assets/images/logo/logo.svg";
import FooterOneMenuList from "./FooterOneMenuList";
import FooterContractCard from "../../Components/FooterContractCard/FooterContractCard";
import FooterNewsletter from '../../Components/FooterNewsletter/FooterNewsletter';

const FooterOne = () => {
  const [showAllSections, setShowAllSections] = useState(false);

  return (
    <FooterStyleWrapper className="footer-section home-footer">
      <div className="footer-inner">
        {/* Footer top start */}
        <div className="footer-top footer-one-top">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-4 col-md-8">
                <div className="footer-card">
                  <div className="footer-info">
                    {/* <a href="/" className="footer-logo">
                      <img src={FooterLogo} alt="footer-logo" />
                    </a> */}
                    <h2 className='text-white'>Filinglab</h2>
                    <p>
                      Filinglab is the dedicated platform for performance management
                      that helps to grow your startup quickly
                    </p>
                  </div>

                  <FooterContractCard/>
                  {/* <FooterNewsletter/> */}

                  {/* Address Box */}
                  <div className="footer-address-box">
                    <h4>Address</h4>
                    <p>
                      Plot no. 31, Lisa Ponnammal St, 3rd Floor,<br />
                      Golden George Nagar, Nerkundram,<br />
                      Chennai, Tamil Nadu - 600107
                    </p>
                  </div>

                  {/* Social Media Icons */}
                  <div className="footer-social-icons">
                    <a href="https://www.facebook.com/filinglab/" title="Facebook" className="social-icon-link" target='blank'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
                      </svg>
                    </a>
                    <a href="https://x.com/filinglab" title="Twitter" className="social-icon-link" target='blank'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.953 4.57a10 10 0 002.856-3.915 9.958 9.958 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="currentColor"/>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/filinglab/" title="Instagram" className="social-icon-link" target='blank'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <circle cx="18.5" cy="5.5" r="1.5" fill="currentColor"/>
                      </svg>
                    </a>
                    <a href="#" title="LinkedIn" className="social-icon-link" target='blank'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.807 0-9.716h3.554v1.375c.427-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.385 3.704 4.362v5.574zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.705 0-.968.771-1.71 1.954-1.71 1.182 0 1.915.742 1.94 1.71 0 .947-.758 1.705-1.979 1.705zm1.582 11.597H3.635V9.236h3.284v11.216zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" fill="currentColor"/>
                      </svg>
                    </a>
                    <a href="https://www.youtube.com/@filinglab" title="YouTube" className="social-icon-link" target='blank'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor"/>
                      </svg>
                    </a>
                  </div>

                  <div className="footer-follow">
                    {/* <ul className="social-link dark footer-one-social-link">
                      {FooterSocialLinks?.map((item, i) => (
                        <li key={i}>
                          <a href={item.url} target="_blank">
                            <span className='social-icon'>
                              <img src={item.img} alt={item.title} />
                              <img src={item.img} alt={item.title} />
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="footer-right-sections">
                  {/* Newsletter Section */}
                  <div className="footer-section-box">
                    <div className="section-header">
                      <h3>Subscribe newsletter to get updates</h3>
                    </div>
                    <p className="section-description">
                      By submitting my email, I agree to receive newsletters from Filinglab
                    </p>
                    <div className="newsletter-form">
                      <input type="email" placeholder="Enter your email" className="newsletter-input" />
                      <button className="newsletter-button">Subscribe</button>
                    </div>
                  </div>

                  {/* Business Section */}
                 <div className="footer-links-section">
                    <h3 className="footer-section-title">Business</h3>
                    <ul className="footer-links-list">
                      <li><a href="#">Private Limited Company</a></li>
                      <li><span className="separator">|</span><a href="#">LLP</a></li>
                      <li><span className="separator">|</span><a href="#">OPC</a></li>
                      <li><span className="separator">|</span><a href="#">Partnership Firm</a></li>
                      <li><span className="separator">|</span><a href="#">Sole Proprietorship</a></li>
                      <li><span className="separator">|</span><a href="#">Startup India</a></li>
                      <li><span className="separator">|</span><a href="#">MSME / Udyam</a></li>
                      <li><span className="separator">|</span><a href="#">Section 8 Company</a></li>
                      <li><span className="separator">|</span><a href="#">Trust</a></li>
                    </ul>
                    <div className="footer-section-divider"></div>
                  </div>

                                    {/* LICENSING */}
                  <div className="footer-links-section">
                    <h3 className="footer-section-title">Licensing</h3>
                    <ul className="footer-links-list">
                      <li><a href="#">GST</a></li>
                      <li><span className="separator">|</span><a href="#">IEC (Import Export Code)</a></li>
                      <li><span className="separator">|</span><a href="#">FSSAI</a></li>
                      <li><span className="separator">|</span><a href="#">FSSAI State</a></li>
                      <li><span className="separator">|</span><a href="#">FSSAI Central</a></li>
                      <li><span className="separator">|</span><a href="#">Shop & Establishment</a></li>
                      <li><span className="separator">|</span><a href="#">Digital Signature (DGFT Version)</a></li>
                      <li><span className="separator">|</span><a href="#">ISO</a></li>
                    </ul>
                    <div className="footer-section-divider"></div>
                  </div>


                  {/* Taxation Section */}
                  <div className="footer-links-section">
                    <h3 className="footer-section-title">Taxation</h3>
                    <ul className="footer-links-list">
                      <li><a href="#">GST</a></li>
                      <li><span className="separator">|</span><a href="#">GST Return</a></li>
                      <li><span className="separator">|</span><a href="#">GST Annual Return(GSTR-9 / 9C)</a></li>
                      <li><span className="separator">|</span><a href="#">IT Return</a></li>
                      <li><span className="separator">|</span><a href="#">Company ITR</a></li>
                      <li><span className="separator">|</span><a href="#">TDS Return</a></li>
                      <li><span className="separator">|</span><a href="#">IT Notice Reply</a></li>
                    </ul>
                    <div className="footer-section-divider"></div>
                  </div>

                  {showAllSections && (
                    <>
                  {/* Company Section */}
                   <div className="footer-links-section">
                    <h3 className="footer-section-title">Compliance</h3>
                    <ul className="footer-links-list">
                      <li><a href="#">Annual Compliance</a></li>
                      <li><span className="separator">|</span><a href="#">Annual Compliance for Pvt Ltd</a></li>
                      <li><span className="separator">|</span><a href="#">Annual Filing for LLP</a></li>
                      <li><span className="separator">|</span><a href="#">MCA Compliance / MCA Services</a></li>
                      <li><span className="separator">|</span><a href="#">DIN KYC Filing</a></li>
                    </ul>
                    <div className="footer-section-divider"></div>
                  </div>

                   {/* FINANCE */}
                  <div className="footer-links-section">
                    <h3 className="footer-section-title">Finance</h3>
                    <ul className="footer-links-list">
                      <li><a href="#">Accounting</a></li>
                      <li><span className="separator">|</span><a href="#">Bookkeeping</a></li>
                      <li><span className="separator">|</span><a href="#">Virtual CFO</a></li>
                      <li><span className="separator">|</span><a href="#">NBFC</a></li>
                    </ul>
                    <div className="footer-section-divider"></div>
                  </div>

                   {/* LEGAL */}
                  <div className="footer-links-section">
                    <h3 className="footer-section-title">Legal</h3>
                    <ul className="footer-links-list">
                      <li><a href="#">Agreements & Contracts</a></li>
                      <li><span className="separator">|</span><a href="#">Legal Notice</a></li>
                      <li><span className="separator">|</span><a href="#">Will Drafting</a></li>
                      <li><span className="separator">|</span><a href="#">Power of Attorney (POA)</a></li>
                    </ul>
                    <div className="footer-section-divider"></div>
                  </div>

                   {/* ENVIRONMENT */}
                  <div className="footer-links-section">
                    <h3 className="footer-section-title">Advisory</h3>
                    <ul className="footer-links-list">
                      <li><a href="#">Business Consultants</a></li>
                      <li><span className="separator">|</span><a href="#">Startup Planning</a></li>
                      <li><span className="separator">|</span><a href="#">Financial Consultancy Services</a></li>
                    </ul>
                    <div className="footer-section-divider"></div>
                  </div>
                    </>
                  )}

                   {/* ENVIRONMENT */}
                  <div className="footer-links-section">
                    <h3 className="footer-section-title">Environment</h3>
                    <ul className="footer-links-list">
                      <li><a href="#">Environmental Clearance</a></li>
                      <li><span className="separator">|</span><a href="#">Environmental Impact Assessment (EIA)</a></li>
                    </ul>
                  </div>

                  {/* See More / See Less Button */}
                  <div className="footer-see-more-container">
                    <button 
                      className="footer-see-more-button"
                      onClick={() => setShowAllSections(!showAllSections)}
                    >
                      {showAllSections ? 'See Less' : 'See More'}
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer top end */}

        {/* Footer bottom start */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-5 order-md-1 order-2">
                <div className="footer-copyright">
<p className="mb-0">
  Copyright © 2026 <span style={{color:"#e6ac41"}}>Filinglab</span>. Designed by{" "}
  <a href="https://ligiotec.com/" target='blank' className="designer-link">Ligiotec</a>. All rights reserved.
</p>
                </div>
              </div>
              <div className="col-md-7 order-md-2 order-1">
                <ul className="privacy-menu">
                  <li>
                    <a href="/terms">Terms and conditions</a>
                  </li>
                  <li>
                    <a href="#">Cookies</a>
                  </li>
                  <li>
                    <a href="/privacy-policy">Privacy policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Footer bottom end */}
      </div>
    </FooterStyleWrapper>
  );
};

export default FooterOne;

