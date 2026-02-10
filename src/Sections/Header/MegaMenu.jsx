import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MegaMenuWrapper from "./Megamenu.style";

import businessData from "../../assets/data/header/business";
import complianceData from "../../assets/data/header/compliance";
import taxationData from "../../assets/data/header/taxation";
import financeData from "../../assets/data/header/finance";
import licensingData from "../../assets/data/header/licensing";
import legalData from "../../assets/data/header/legal";
import advisoryData from "../../assets/data/header/advisory";
import environmentData from "../../assets/data/header/environment";


// Helper function to chunk arrays
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const MegaMenu = ({ megaMenuClass, activeKey }) => {
  const dataMap = {
    business: businessData,
    licensing: licensingData,
    compliance: complianceData,
    taxation: taxationData,
    finance: financeData,
    legal: legalData,
    advisory: advisoryData,
    environment: environmentData,
  };

  const defaultData = dataMap[activeKey] || [];
  const [activeTitle, setActiveTitle] = useState(null);

  useEffect(() => {
    const newData = dataMap[activeKey] || [];
    setActiveTitle(null);
  }, [activeKey]);

  return (
    <MegaMenuWrapper>
      <div className="mega-menu">
        <div className={`mega-menu-card ${megaMenuClass}`} style={{ display: "flex", width: "100%" }}>
          
          {/* Left menu section */}
          <div className="mega-menu-left" style={{ width: "25%", borderRight: "1px solid #ccc", paddingRight: "10px" }}>
            {(dataMap[activeKey] || []).map((item, idx) => (
              <div
                key={idx}
                className={`menu-title-item ${activeTitle?.Maintitle === item.Maintitle ? "active" : ""}`}
                onClick={() => setActiveTitle(item)}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  backgroundColor: activeTitle?.Maintitle === item.Maintitle ? "#ddd" : "transparent"
                }}
              >
                {item.Maintitle.trim() || "More"}
              </div>
            ))}
          </div>

          {/* Right menu section - Only show if activeTitle is selected */}
          {activeTitle && (
            <div className="mega-menu-right" style={{ width: "75%", display: "flex", flexDirection: "row" }}>
              <div className="mega-menu-column">
                {chunkArray(activeTitle.menuList?.slice(0, Math.ceil((activeTitle.menuList?.length || 0) / 2)), 6).map((chunk, i) => (
                  <ul key={i} className="mega-menu-list">
                    {chunk.map((menuItem, mid) => (
                      <li key={mid}>
                        <NavLink to={menuItem.url}>{menuItem.title}</NavLink>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>

              <div className="mega-menu-column">
                {chunkArray(activeTitle.menuList?.slice(Math.ceil((activeTitle.menuList?.length || 0) / 2)), 6).map((chunk, i) => (
                  <ul key={i} className="mega-menu-list">
                    {chunk.map((menuItem, mid) => (
                      <li key={mid}>
                        <NavLink to={menuItem.url}>{menuItem.title}</NavLink>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </MegaMenuWrapper>
  );
};

export default MegaMenu;
