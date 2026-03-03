import ChatbotBannerStyle from "./ChatbotBanner.style";
import BannerVideo from "../../../assets/videos/filinglab-hero-banner.mp4";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useState, useEffect } from "react";

const services = [
  "Startup Registration",
  "Private Limited Company Registration",
  "LLP Registration",
  "GST Registration",
  "Startup India Registration",
  "Compliance for Startups",
];

const ChatbotBanner = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [index, setIndex] = useState(0);

  const headlines = ["Filings", "Compliance", "Support"];

  // Typing animation for search placeholder
  useEffect(() => {
    const currentService = services[index];
    let currentCharIndex = 0;
    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (currentCharIndex < currentService.length) {
          setDisplayedText(currentService.substring(0, currentCharIndex + 1));
          currentCharIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
        }
      }, 60);
      return () => clearInterval(typingInterval);
    }
  }, [index, isTyping]);

  // Advance to next service after pause
  useEffect(() => {
    if (!isTyping) {
      const timer = setTimeout(() => {
        setIndex((prev) => (prev + 1) % services.length);
        setDisplayedText("");
        setIsTyping(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isTyping]);

  // Cycle headline words
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    console.log("Search for:", searchText);
  };

  return (
    <ChatbotBannerStyle className="v8banner-section chatbot-banner">
      <div className="banner-flex-row">

        {/* LEFT: text content */}
        <div className="banner-left">
          <ScrollAnimate delay={200}>
            <div className="v8banner-text chatbot-banner-text">
              <div className="cd-intro m-0 uig-animate-style">
                <h1 className="cd-headline loading-bar banner-title">
                  A Reliable Partner for Complete Business <br />
                  <span className="cd-words-wrapper" style={{ color: "#ff6600" }}>
                    {headlines.map((headline, i) => (
                      <b key={i} className={i === visibleIndex ? "is-visible" : "is-hidden"}>
                        {headline}
                      </b>
                    ))}
                  </span>
                </h1>
              </div>
              <p>
                FilingLab supports startups, SMEs, and established businesses with
                accurate registrations, timely tax filings, regulatory compliance, and
                ongoing statutory support — delivered with clarity and confidence.
              </p>
              <div className="trust-points">
                <div className="point">
                  <FaAngleDoubleRight className="arrow-icon" />
                  <span>Trusted by Businesses Across India</span>
                </div>
                <div className="point">
                  <FaAngleDoubleRight className="arrow-icon" />
                  <span>On-Time Filings. Zero Compliance Delays.</span>
                </div>
              </div>
              <div className="search-box">
                <input
                  type="text"
                  placeholder={displayedText}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
              </div>
              <div className="recommended-services">
                <h3 className="services-title">Recommended Services</h3>
                <div className="services-grid">
                  <a href="#" className="service-button">Income Tax Filing</a>
                  <a href="#" className="service-button">Company Registration</a>
                  <a href="#" className="service-button">GST Registration</a>
                  <a href="#" className="service-button">Accounting &amp; Bookkeeping</a>
                  <a href="#" className="service-button">GST Return Filing</a>
                  <a href="#" className="service-button">Business Compliance</a>
                </div>
              </div>
            </div>
          </ScrollAnimate>
        </div>

        {/* RIGHT: video */}
        <div className="banner-right">
          <div className="chatbot-banner-video-overlay">
            <ScrollAnimate delay={300}>
              <div className="banner-chat-section">
                <div className="chat-overlay">
                  <div className="bot-message"></div>
                  <div className="bot-message delay-1"></div>
                  <div className="user-message delay-2"></div>
                </div>
              </div>
            </ScrollAnimate>
          </div>
          <video className="banner-bg-video" loop autoPlay playsInline muted>
            <source src={BannerVideo} type="video/mp4" />
          </video>
        </div>

      </div>
    </ChatbotBannerStyle>
  );
};

export default ChatbotBanner;
