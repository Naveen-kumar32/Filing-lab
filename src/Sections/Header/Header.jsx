import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderStyleWrapper from "./Header.style";
import Data from "../../assets/data/header/headerHomeMenu";
import MegaMenu from "./MegaMenu";
import LanguageDropdown from "./dropdown/LanguageDropdown";
import MobileMenu from "./mobileMenu/MobileMenu";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp, FaBars } from "react-icons/fa";

//logo images
import LogoImg1 from "../../assets/images/logo/logo.svg";
import LogoImg2 from "../../assets/images/logo/logo-dark.svg";
import LogoCorporateImg from "../../assets/images/logo/corporate-logo-dark.svg";
import LogoCryptoImg from "../../assets/images/logo/crypto-logo.svg";
import LogoCrypto2Img from "../../assets/images/logo/crypto2-logo.svg";
import LogoCryptoTokenImg from "../../assets/images/logo/crypto-token-logo.svg";
import LogoDefiImg from "../../assets/images/logo/defi-logo.svg";
import LogoFinanceImg from "../../assets/images/logo/finance-logo.svg";
import LogoFinanceDarkImg from "../../assets/images/logo/logo6-dark.png";
import LogoAccountImg from "../../assets/images/logo/logo-8.svg";

//others images
import CallImg from "../../assets/images/corporate/call-outgoing.svg";
import QrImg from "../../assets/images/crypto2/qr.svg";
import QrCodeImg1 from "../../assets/images/crypto2/code_1.png";
import QrCodeImg2 from "../../assets/images/crypto2/code_2.png";
import MenuImg from "../../assets/images/icons/menu.svg";

const Header = ({ variant, ...props }) => {
  // handle mobile menu
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [openMegaMenuIndex, setOpenMegaMenuIndex] = useState(null);
  const megaMenuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setOpenMegaMenuIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle navbar menu item click
  const handleMenuItemClick = (index) => {
    if (openMegaMenuIndex === index) {
      // If clicking the same item, close the dropdown
      setOpenMegaMenuIndex(null);
    } else {
      // If clicking a different item, open that dropdown
      setOpenMegaMenuIndex(index);
    }
  };


  const handleMobileMenu = () => {
    const bodySection = document.body;

    if (isMobileMenu) {
      setIsAnimating(true);
      bodySection.classList.remove("nav-expanded");

      setTimeout(() => {
        setIsMobileMenu(false);
        setIsAnimating(false);
      }, 400);
    } else {
      setIsMobileMenu(true);
      bodySection.classList.add("nav-expanded");
    }
  };

  // handle sticky header
  const HeaderSectionRef = useRef(null);
  let lastScroll = 0;

  // const handleScroll = () => {
  //   const bodySection = document.body;

  //   let currentScroll =
  //     document.documentElement.scrollTop || document.body.scrollTop;
  //   let diffScroll = currentScroll - lastScroll;

  //   if (diffScroll > 0 || currentScroll == 0) {
  //     HeaderSectionRef.current.classList.remove("sticky");
  //     bodySection.classList.remove("nav-expanded");
  //     setIsMobileMenu(false);
  //   } else {
  //     HeaderSectionRef.current.classList.add("sticky");
  //   }
  //   lastScroll = currentScroll;
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const headerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    width: "100%",
    background: "rgba(255, 255, 255, 0.45)",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    // boxShadow: "0 20px 40px rgba(11, 25, 114, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
    // border: "1px solid rgba(255, 255, 255, 0.5)",
  };

  return (
  
    <>
      <HeaderStyleWrapper style={headerStyle}
        ref={HeaderSectionRef}
        className={`header-section ${variant} ${
          isMobileMenu ? "mobile-menu-opened" : ""
        }`}
        variant={variant}
        {...props}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg ">
                <div className="container header-navbar-container ">
                  {/* header logo area start */}
                  <NavLink className="navbar-brand header-logo " to={"/"}>
                    {variant != "corporate" &&
                      variant != "crypto" &&
                      variant != "crypto2" &&
                      variant != "crypto-token" &&
                      variant != "defi" &&
                      variant != "finance" &&
                      variant != "account" && (
                        <span style={{fontSize:'40px',fontWeight:'600', color:' #002145'}}>Filing<span style={{color:" #ed740a"}}>Lab</span>
                          {/* <img
                            src={LogoImg2}
                            alt="logo"
                            className="logo-light"
                          />
                          <img
                            src={LogoImg2}
                            alt="logo"
                            className="logo-dark"
                          /> */}
                        </span>
                      )}

                    {variant === "corporate" && (
                      <>
                        <img
                          src={LogoCorporateImg}
                          alt="logo"
                          className="logo-light"
                        />
                        <img
                          src={LogoCorporateImg}
                          alt="logo"
                          className="logo-dark"
                        />
                      </>
                    )}

                    {variant === "crypto" && (
                      <>
                        <img
                          src={LogoCryptoImg}
                          alt="logo"
                          className="logo-light"
                        />
                        <img
                          src={LogoCryptoImg}
                          alt="logo"
                          className="logo-dark"
                        />
                      </>
                    )}

                    {variant === "crypto2" && (
                      <>
                        <img
                          src={LogoCrypto2Img}
                          alt="logo"
                          className="logo-light"
                        />
                        <img
                          src={LogoCrypto2Img}
                          alt="logo"
                          className="logo-dark"
                        />
                      </>
                    )}

                    {variant === "crypto-token" && (
                      <>
                        <img
                          src={LogoCryptoTokenImg}
                          alt="logo"
                          className="logo-light"
                        />
                        <img
                          src={LogoCryptoTokenImg}
                          alt="logo"
                          className="logo-dark"
                        />
                      </>
                    )}

                    {variant === "defi" && (
                      <>
                        <img
                          src={LogoDefiImg}
                          alt="logo"
                          className="logo-light"
                        />
                        <img
                          src={LogoDefiImg}
                          alt="logo"
                          className="logo-dark"
                        />
                      </>
                    )}

                    {variant === "finance" && (
                      <>
                        <img
                          src={LogoFinanceImg}
                          alt="logo"
                          className="logo-light"
                        />
                        <img
                          src={LogoFinanceDarkImg}
                          alt="logo"
                          className="logo-dark"
                        />
                      </>
                    )}

                    {variant === "account" && (
                      <>
                        <img
                          src={LogoAccountImg}
                          alt="logo"
                          className="logo-light"
                        />
                        <img
                          src={LogoAccountImg}
                          alt="logo"
                          className="logo-dark"
                        />
                      </>
                    )}
                  </NavLink>
                  {/* header logo area end */}

                  {/* menu toggler */}
                  {/* <button className="menu-toggler" onClick={handleMobileMenu}>
                    <img
                      src={`${isMobileMenu ? MenuCloseImg : MenuImg}`}
                      alt={`${isMobileMenu ? "close" : "menu"}`}
                    />
                  </button> */}

                  {/* menu toggler */}
                  <div className="menu-toggler">
                    {/* Button to toggle the Offcanvas */}
                    <button
                      className="btn"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasStaco"
                      aria-controls="offcanvasStaco"
                    >
                      <img src={MenuImg} alt="menu" />
                    </button>
                  </div>

                  <div className="collapse navbar-collapse header-navbar-content">
                    {/* main menu */}
                    <ul className="navbar-nav main-menu" ref={megaMenuRef}>
                      {Data?.map((menuItem, i) => (
                        <li
                        key={i}
                        className={`nav-item ${menuItem.hasMegaMenu ? "home-nav" : ""}`}
                        onClick={() => handleMenuItemClick(i)}>
                          <NavLink
                            className={` ${
                              menuItem.hasMegaMenu
                                ? "nav-link megaTablinks"
                                : "nav-link"
                            }  ${
                              menuItem.subMenus?.length > 0 ? "has-submenu" : ""
                            }`}
                            to={menuItem.url}
                          >
                            {menuItem.title}
                          </NavLink>
                          {menuItem?.hasMegaMenu && openMegaMenuIndex === i && (
                          <div className="mega-menu-wrapper" onClick={(e) => e.stopPropagation()}>
                          <MegaMenu activeKey={menuItem.key} megaMenuClass="visible"/></div> )}
                        </li>
                      ))}
                    </ul>

                    {/* header extra */}
                    <ul className="header-extra">
                      {variant === "chatbot" && (
                        <li>
                          <NavLink to="/sign-up" className="bg-navy-btn">
                            <span className="btn-inner">
                              <span className="btn-normal-text">
                                Free Trial
                              </span>
                              <span className="btn-hover-text">Free Trial</span>
                            </span>
                          </NavLink>
                        </li>
                      )}

                      {variant === "crypto" && (
                        <li>
                          <NavLink to="/sign-up" className="bg-white-btn">
                            <span className="btn-inner">
                              <span className="btn-normal-text">Download</span>
                              <span className="btn-hover-text">Download</span>
                            </span>
                          </NavLink>
                        </li>
                      )}

                      {variant === "crypto-token" && (
                        <li>
                          <a
                            href="/sign-up"
                            className="bg-white-btn btn-hov-effect dark"
                          >
                            <span className="btn-inner">
                              <span className="btn-normal-text">Buy Token</span>
                              <span className="btn-hover-text">Buy Token</span>
                            </span>
                            <span className="round-shape"></span>
                          </a>
                        </li>
                      )}

                      {variant === "defi" && (
                        <li>
                          <a
                            href="/sign-up"
                            className="defi-header-btn btn-hov-effect dark"
                          >
                            <span className="btn-inner">
                              <span className="btn-normal-text">Open App</span>
                              <span className="btn-hover-text">Open App</span>
                            </span>
                            <span className="round-shape"></span>
                          </a>
                        </li>
                      )}

                      {variant === "app" && (
                        <li>
                          <NavLink to="/sign-up" className="bg-skyblue-btn">
                            <span className="btn-inner">
                              <span className="btn-normal-text">Download</span>
                              <span className="btn-hover-text">Download</span>
                            </span>
                          </NavLink>
                        </li>
                      )}

                      {variant === "v3" && (
                        <li>
                          <NavLink to="/sign-up" className="start-meeting-btn">
                            <span className="btn-inner">
                              <span className="btn-normal-text">
                                Start Meeting
                              </span>
                              <span className="btn-hover-text">
                                Start Meeting
                              </span>
                            </span>
                          </NavLink>
                        </li>
                      )}

                      {variant === "v4" && (
                        <li>
                          <NavLink
                            to="/sign-up"
                            className="template-btn talk-btn"
                          >
                            <span className="btn-inner">
                              <span className="btn-normal-text">
                                Let's Talk
                              </span>
                              <span className="btn-hover-text">Let's Talk</span>
                            </span>
                          </NavLink>
                        </li>
                      )}

                      {variant === "v5" && (
                        <li>
                          <NavLink to="/sign-up" className="bg-pink-btn">
                            <span className="btn-inner">
                              <span className="btn-normal-text">
                                Let's Talk
                              </span>
                              <span className="btn-hover-text">Let's Talk</span>
                            </span>
                          </NavLink>
                        </li>
                      )}

                      {variant === "account" && (
                        <li>
                          <NavLink to="/contact-us" className="bg-green-btn">
                            <span className="btn-inner">
                              <span className="btn-normal-text">
                                Let's Talk
                              </span>
                              <span className="btn-hover-text">Let's Talk</span>
                            </span>
                          </NavLink>
                        </li>
                      )}

                      {variant === "portfolio" && (
                        <li>
                          <NavLink
                            to="/contact-us"
                            className="header-outline-btn"
                          >
                            <span className="btn-inner">
                              <span className="btn-normal-text">
                                Let's Talk
                              </span>
                              <span className="btn-hover-text">Let's Talk</span>
                            </span>
                          </NavLink>
                        </li>
                      )}

                      {(variant === "corporate" ||
                        variant === "newsletter" ||
                        variant === "finance") && (
                        <>
                          {variant === "corporate" && (
                            <li className="header-phn-number">
                              <a href="#">
                                <img src={CallImg} alt="icon" />{" "}
                                <span className="ml-12">+ 66 0852 369 358</span>
                              </a>
                            </li>
                          )}

                          <li>
                            <LanguageDropdown variant={variant} />
                          </li>

                          {variant === "newsletter" && (
                            <>
                              <li>
                              
                              </li>
                              <li>
                                <a
                                  href="/sign-up"
                                  className="template-btn primary-bg"
                                >
                                  <span className="btn-inner">
                                    <span className="btn-normal-text">
                                      Sign up free
                                    </span>
                                    <span className="btn-hover-text">
                                      Sign up free
                                    </span>
                                  </span>
                                </a>
                              </li>
                            </>
                          )}

                          {variant === "corporate" && (
                            <li>
                              <NavLink
                                to="/contact-us"
                                className="btn-light-green"
                              >
                                <span className="btn-inner">
                                  <span className="btn-normal-text">
                                    Contact Us
                                  </span>
                                  <span className="btn-hover-text">
                                    Contact Us
                                  </span>
                                </span>
                              </NavLink>
                            </li>
                          )}

                          {variant === "finance" && (
                            <>
                              <li>
                         
                              </li>
                             
                            </>
                          )}
                        </>
                      )}

                      {variant === "crypto2" && (
                        <>
                          <li>
                            <div className="qr-code-btn relative">
                              <button className="view-qr">
                                <img src={QrImg} alt="icon" />
                              </button>
                              <div className="qr-code-box">
                                <div className="scan-qr text-right">
                                  <img src={QrCodeImg1} alt="img" />
                                </div>
                                <div className="scan-qr">
                                  <img src={QrCodeImg2} alt="img" />
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <NavLink to="/sign-up" className="crypto2-blue-btn">
                              <span className="btn-inner">
                                <span className="btn-normal-text">
                                  Get Wallet
                                </span>
                                <span className="btn-hover-text">
                                  Get Wallet
                                </span>
                              </span>
                            </NavLink>
                          </li>
                        </>
                      )}

                      {/* Sign In Button */}
                      {variant != "corporate" &&
                        variant != "crypto" &&
                        variant != "crypto-token" &&
                        variant != "crypto2" &&
                        variant != "defi" &&
                        variant != "newsletter" &&
                        variant != "portfolio" &&
                        variant != "finance" && (
                          <li>
                            <NavLink to="/sign-in" className={`${variant}`}>
                              Sign in
                            </NavLink>
                          </li>
                        )}

                      {/* Toggle Bar - Last Item */}
                      {variant != "corporate" &&
                        variant != "crypto" &&
                        variant != "crypto-token" &&
                        variant != "crypto2" &&
                        variant != "defi" &&
                        variant != "newsletter" &&
                        variant != "portfolio" &&
                        variant != "finance" && (
                          <li className="toggle-bar-item">
                            <button className="toggle-bar-btn animated-icon">
                              <FaBars />
                            </button>
                          </li>
                        )}
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </HeaderStyleWrapper>

      {/* mobile menu */}
      <MobileMenu />
    </>
  );
};

export default Header;
