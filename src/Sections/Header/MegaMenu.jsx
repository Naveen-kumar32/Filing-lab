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
    setActiveTitle(newData[0] || null);
  }, [activeKey]);

  return (
    <MegaMenuWrapper>
      <div className="mega-menu">
        <div className="mega-menu-card">

          {/* Col 1 - Left titles */}
          <div className="mega-menu-left">
            {(dataMap[activeKey] || []).map((item, idx) => (
              <div
                key={idx}
                className={`menu-title-item ${activeTitle?.Maintitle === item.Maintitle ? "active" : ""}`}
                onMouseEnter={() => setActiveTitle(item)}
                onClick={() => setActiveTitle(item)}
              >
                {item.Maintitle.trim() || "More"}
              </div>
            ))}
          </div>

          {/* Col 2 & 3 - Right two list columns, always rendered */}
          <div className="mega-menu-right">
            <div className="mega-menu-column">
              {activeTitle?.menuList?.slice(0, Math.ceil((activeTitle.menuList?.length || 0) / 2)).map((menuItem, mid) => (
                <div key={mid} className="mega-menu-list" style={{ marginBottom: '15px' }}>
                  <NavLink to={menuItem.url} data-text={menuItem.title} style={{ padding: '2px 8px', lineHeight: '1.3' }}>{menuItem.title}</NavLink>
                </div>
              ))}
            </div>
            <div className="mega-menu-column">
              {activeTitle?.menuList?.slice(Math.ceil((activeTitle.menuList?.length || 0) / 2)).map((menuItem, mid) => (
                <div key={mid} className="mega-menu-list" style={{ marginBottom: '15px' }}>
                  <NavLink to={menuItem.url} data-text={menuItem.title} style={{ padding: '2px 8px', lineHeight: '1.3' }}>{menuItem.title}</NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MegaMenuWrapper>
  );
};

export default MegaMenu;