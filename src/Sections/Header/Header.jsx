import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderStyleWrapper from "./Header.style";
import Data from "../../assets/data/header/headerHomeMenu";
import MegaMenu from "./MegaMenu";
import LanguageDropdown from "./dropdown/LanguageDropdown";
import MobileMenu from "./mobileMenu/MobileMenu";

//logo images
import MainLogoImg from "../../assets/images/mainlogo/main-logo.png";
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

  // megamenu hover with delay to prevent flicker
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const closeTimerRef = useRef(null);
  const openMenuIndexRef = useRef(null); // mirrors openMenuIndex without stale closure issues
  const dropdownRef = useRef(null);
  const isInsideDropdownRef = useRef(false); // true while cursor is inside the megamenu

  // Keep ref in sync with state
  const setOpenMenu = (index) => {
    openMenuIndexRef.current = index;
    setOpenMenuIndex(index);
  };

  // Attach native wheel listener to dropdown so scrolling inside
  // does NOT bubble up to window and trigger handleScroll (which closes the menu)
  useEffect(() => {
    const el = dropdownRef.current;
    if (!el) return;
    const stopWheel = (e) => e.stopPropagation();
    el.addEventListener("wheel", stopWheel, { passive: true });
    return () => el.removeEventListener("wheel", stopWheel);
  }, [openMenuIndex]);

  const handleNavEnter = (index) => {
    // Always cancel any pending close timer immediately
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    // Use ref (not state) to check if a menu is currently open — avoids stale closure
    if (openMenuIndexRef.current !== null) {
      // Already open: switch instantly with no delay
      setOpenMenu(index);
    } else {
      // Fresh open: small delay to avoid accidental triggers while passing through
      closeTimerRef.current = setTimeout(() => {
        setOpenMenu(index);
      }, 100);
    }
  };

  const handleNavLeave = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 300);
  };

  const handleDropdownEnter = () => {
    isInsideDropdownRef.current = true;
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handleDropdownLeave = () => {
    isInsideDropdownRef.current = false;
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 300);
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

  const handleScroll = () => {
    const bodySection = document.body;

    // Only close megamenu if cursor is NOT currently inside the dropdown
    if (!isInsideDropdownRef.current) {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      setOpenMenu(null);
    }

    let currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    let diffScroll = currentScroll - lastScroll;

    if (diffScroll > 0 || currentScroll == 0) {
      HeaderSectionRef.current.classList.remove("sticky");
      bodySection.classList.remove("nav-expanded");
      setIsMobileMenu(false);
    } else {
      HeaderSectionRef.current.classList.add("sticky");
    }
    lastScroll = currentScroll;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderStyleWrapper
        ref={HeaderSectionRef}
        className={`header-section ${variant} ${
          isMobileMenu ? "mobile-menu-opened" : ""
        }`}
        variant={variant}
        {...props}
      >
        <div className="container-fluid px-0">
          <div className="row mx-0">
            <div className="col-md-12 px-0">
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid header-navbar-container">
                  {/* header logo area start */}
                  <NavLink className="navbar-brand header-logo" to={"/"}>
                    {variant != "corporate" &&
                      variant != "crypto" &&
                      variant != "crypto2" &&
                      variant != "crypto-token" &&
                      variant != "defi" &&
                      variant != "finance" &&
                      variant != "account" && (
                        <>
                          <img
                            src={MainLogoImg}
                            alt="logo"
                            className="logo-light"
                          />
                          <img
                            src={MainLogoImg}
                            alt="logo"
                            className="logo-dark"
                          />
                        </>
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
                    {/* nav center */}
                    <div className="header-nav-center">
                      <ul className="navbar-nav main-menu">
                      {Data?.map((menuItem, i) => (
                        <li
                          key={i}
                          className={[
                            menuItem.hasMegaMenu ? "nav-item home-nav" : "nav-item",
                            openMenuIndex === i ? "nav-open" : ""
                          ].join(" ").trim()}
                          onMouseEnter={() => {
                            // Always clear close timer so moving from dropdown back to navbar never triggers close
                            if (closeTimerRef.current) {
                              clearTimeout(closeTimerRef.current);
                              closeTimerRef.current = null;
                            }
                            if (menuItem.hasMegaMenu) handleNavEnter(i);
                            else setOpenMenu(null);
                          }}
                          onMouseLeave={() => menuItem.hasMegaMenu && handleNavLeave()}
                        >
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

                          {/* megamenu */}
                          {menuItem?.hasMegaMenu && openMenuIndex === i && (
                            <div
                              ref={dropdownRef}
                              className="mega-menu-wrapper"
                              onMouseEnter={handleDropdownEnter}
                              onMouseLeave={handleDropdownLeave}
                            >
                              <MegaMenu activeKey={menuItem.key} megaMenuClass="visible" />
                            </div>
                          )}

                          {menuItem.subMenus?.length > 0 && (
                            <div className="submenu-box">
                              <ul className="submenu">
                                {menuItem.subMenus?.map((subMenuItem, i) => {
                                  let hasSubMenuChild = false;
                                  if (subMenuItem.subMenuChilds?.length > 0) {
                                    hasSubMenuChild = true;
                                  }
                                  return (
                                    <li
                                      key={i}
                                      className={
                                        hasSubMenuChild
                                          ? "submenu-has-submenu"
                                          : ""
                                      }
                                    >
                                      <NavLink
                                        className="dropdown-item"
                                        to={subMenuItem.url}
                                      >
                                        {subMenuItem.title}
                                      </NavLink>

                                      {subMenuItem.subMenuChilds?.length >
                                        0 && (
                                        <div className="submenu-box2">
                                          <ul className="submenu submenu-submenu">
                                            {subMenuItem.subMenuChilds?.map(
                                              (subMenuChild, i) => (
                                                <li key={i}>
                                                  <NavLink
                                                    to={subMenuChild.url}
                                                  >
                                                    {subMenuChild.title}
                                                  </NavLink>
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                    </div>{/* end header-nav-center */}

                    {/* header right buttons */}
                    <div className="header-nav-right">
                    {/* header extra */}
                    <ul className="header-extra">
                      {variant != "corporate" &&
                        variant != "crypto" &&
                        variant != "crypto-token" &&
                        variant != "crypto2" &&
                        variant != "defi" &&
                        variant != "newsletter" &&
                        variant != "portfolio" &&
                        variant != "finance" && (
                          <li>
                            <div className="header-contact-box">
                              <a href="tel:+919999999999" className="header-contact-icon" title="Call Us">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.4 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 5.94 5.94l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                              </a>
                              <a href="mailto:info@filinglab.in" className="header-contact-icon" title="Email Us">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                </svg>
                              </a>
                              <a href="https://wa.me/919999999999" className="header-contact-icon" title="WhatsApp Us" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                                </svg>
                              </a>
                            </div>
                          </li>
                        )}

                      {variant === "v1" && (
                        <li>
                          <NavLink to="/sign-in" className="bg-white-btn">
                            Sign In
                          </NavLink>
                        </li>
                      )}

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

                      {variant === "sass" && (
                        <li>
                          <NavLink to="/sign-up" className="bg-white-btn">
                            <span className="btn-inner">
                              <span className="btn-normal-text">
                                Sign up free
                              </span>
                              <span className="btn-hover-text">
                                Sign up free
                              </span>
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

                      {variant === "v2" && (
                        <li>
                          <NavLink to="/sign-up" className="bg-skyblue-btn">
                            <span className="btn-inner">
                              <span className="btn-normal-text">
                                Start free
                              </span>
                              <span className="btn-hover-text">Start free</span>
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

                      {variant === "main-header" && (
                        <li>
                          <NavLink
                            to="/sign-up"
                            className="template-btn primary-bg"
                          >
                            <span className="btn-inner">
                              <span className="btn-normal-text">
                                Start free
                              </span>
                              <span className="btn-hover-text">Start free</span>
                            </span>
                          </NavLink>
                        </li>
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
                                <NavLink to="/sign-in" className={`${variant}`}>
                                  Sign in
                                </NavLink>
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
                                <NavLink to="/sign-in" className={`${variant}`}>
                                  Sign in
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/sign-up" className="bg-olive-btn">
                                  <span className="btn-inner">
                                    <span className="btn-normal-text">
                                      Start free
                                    </span>
                                    <span className="btn-hover-text">
                                      Start free
                                    </span>
                                  </span>
                                </NavLink>
                              </li>
                            </>
                          )}
                        </>
                      )}
                    </ul>
                    </div>{/* end header-nav-right */}
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
