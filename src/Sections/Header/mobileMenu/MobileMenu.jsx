import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MobileMenuStyleWrapper from "./Menu.style";
import MainLogoImg from "../../../assets/images/mainlogo/main-logo.png";

import businessData    from "../../../assets/data/header/business";
import licensingData   from "../../../assets/data/header/licensing";
import taxationData    from "../../../assets/data/header/taxation";
import complianceData  from "../../../assets/data/header/compliance";
import financeData     from "../../../assets/data/header/finance";
import legalData       from "../../../assets/data/header/legal";
import advisoryData    from "../../../assets/data/header/advisory";
import environmentData from "../../../assets/data/header/environment";

const NAV_ITEMS = [
  { title: "Business",    key: "business",    data: businessData },
  { title: "Licensing",   key: "licensing",   data: licensingData },
  { title: "Taxation",    key: "taxation",    data: taxationData },
  { title: "Compliance",  key: "compliance",  data: complianceData },
  { title: "Finance",     key: "finance",     data: financeData },
  { title: "Legal",       key: "legal",       data: legalData },
  { title: "Advisory",    key: "advisory",    data: advisoryData },
  { title: "Environment", key: "environment", data: environmentData },
];

const QUICK_LINKS = [
  { title: "About Us",       url: "/about-us" },
  { title: "Contact Us",     url: "/contact-us" },
  { title: "Our Services",   url: "/our-services" },
  { title: "Blog",           url: "/blog" },
  { title: "Privacy Policy", url: "/privacy-policy" },
];

const MobileMenu = () => {
  const navigate = useNavigate();
  const [openNav, setOpenNav]               = useState(null);
  const [activeCategory, setActiveCategory] = useState({});

  // Close Bootstrap offcanvas then navigate via React Router
  const handleNavigate = useCallback((url) => {
    const el = document.getElementById("offcanvasStaco");
    if (el) {
      // Use Bootstrap's JS API to close the drawer
      const bsOffcanvas = window.bootstrap?.Offcanvas?.getInstance(el);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      } else {
        // Fallback: remove bootstrap classes manually
        el.classList.remove("show");
        document.body.classList.remove("offcanvas-backdrop");
        const backdrop = document.querySelector(".offcanvas-backdrop");
        if (backdrop) backdrop.remove();
        document.body.style.overflow = "";
      }
    }
    navigate(url);
  }, [navigate]);

  const toggleNav = (key, data) => {
    if (openNav === key) {
      setOpenNav(null);
    } else {
      setOpenNav(key);
      // Default to first category if not set yet
      if (activeCategory[key] === undefined) {
        setActiveCategory((prev) => ({ ...prev, [key]: 0 }));
      }
    }
  };

  const selectCategory = (navKey, idx) => {
    setActiveCategory((prev) => ({ ...prev, [navKey]: idx }));
  };

  return (
    <MobileMenuStyleWrapper
      className="offcanvas offcanvas-start"
      tabIndex="-1"
      id="offcanvasStaco"
      aria-labelledby="offcanvasStacoLabel"
    >
      {/* Header */}
      <div className="offcanvas-header">
        <div onClick={() => handleNavigate("/")} style={{ cursor: "pointer" }}>
          <img src={MainLogoImg} alt="FilingLab" style={{ height: "40px", width: "auto" }} />
        </div>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>

      <div className="offcanvas-body offcanvasStaco-body">

        {/* ── Main nav with expandable mega-menus ── */}
        <ul className="nav-menu">
          {NAV_ITEMS.map((item) => {
            const isOpen     = openNav === item.key;
            const catIdx     = activeCategory[item.key] ?? 0;
            const activeCat  = item.data[catIdx] || null;

            return (
              <li key={item.key} className={`mobile-mega-item${isOpen ? " submenu-opened" : ""}`}>
                {/* Top-level toggle button */}
                <button
                  className={`dropdown-item${isOpen ? " submenu-opened" : ""}`}
                  onClick={() => toggleNav(item.key, item.data)}
                >
                  {item.title}
                </button>

                {/* Expanded megamenu panel */}
                {isOpen && (
                  <div className="mobile-mega-panel">
                    {/* Left: category titles */}
                    <div className="mobile-mega-left">
                      {item.data.map((cat, idx) => (
                        <div
                          key={idx}
                          className={`mobile-cat-title${catIdx === idx ? " active" : ""}`}
                          onClick={() => selectCategory(item.key, idx)}
                        >
                          {cat.Maintitle}
                        </div>
                      ))}
                    </div>

                    {/* Right: links for active category */}
                    <div className="mobile-mega-right">
                      {activeCat?.menuList?.map((link, lidx) => (
                        <div
                          key={lidx}
                          className="mobile-mega-link"
                          onClick={() => handleNavigate(link.url)}
                        >
                          {link.title}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Divider */}
        <hr style={{ borderColor: "rgba(0,0,0,0.1)", margin: "16px 0" }} />

        {/* Quick links */}
        <ul className="nav-menu mobile-quick-links">
          {QUICK_LINKS.map((item) => (
            <li key={item.title}>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handleNavigate(item.url)}
              >
                {item.title}
              </div>
            </li>
          ))}
        </ul>

      </div>
    </MobileMenuStyleWrapper>
  );
};

export default MobileMenu;
