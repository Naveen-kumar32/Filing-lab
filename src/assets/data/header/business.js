const businessData = [
  {
    column: 1,
    Maintitle: "Company Formation",
    menuList: [
      { title: "Company Registration", dataMenu: "company-registration", url: "/company-registration" },
      { title: "Private Limited Company Registration", dataMenu: "private-limited-company-registration", url: "/private-limited-company-registration" },
      { title: "Public Limited Company Registration", dataMenu: "public-limited-company-registration", url: "/public-limited-company-registration" },
      { title: "One Person Company (OPC) Registration", dataMenu: "opc-registration", url: "/one-person-company-registration" },
      { title: "LLP Registration", dataMenu: "llp-registration", url: "/llp-registration" },
      { title: "Partnership Firm Registration", dataMenu: "partnership-firm-registration", url: "/partnership-firm-registration" },
      { title: "Sole Proprietorship Registration", dataMenu: "sole-proprietorship-registration", url: "/sole-proprietorship-registration" },
      { title: "Producer Company Registration", dataMenu: "producer-company-registration", url: "/producer-company-registration" },
      { title: "Section 8 Company Registration", dataMenu: "section8-registration", url: "/section-8-company-registration" },
      { title: "Nidhi Company Registration", dataMenu: "nidhi-registration", url: "/nidhi-company-registration" },
      { title: "Society Registration", dataMenu: "society-registration", url: "/society-registration" },
      { title: "Trust Registration", dataMenu: "trust-registration", url: "/trust-registration" },
      { title: "Family Trust Registration", dataMenu: "family-trust-registration", url: "/family-trust-registration" },
      { title: "Branch Office Registration", dataMenu: "branch-office-registration", url: "/branch-office-registration" },
      { title: "Liaison Office Registration", dataMenu: "liaison-office-registration", url: "/liaison-office-registration" },
      { title: "Project Office Registration", dataMenu: "project-office-registration", url: "/project-office-registration" }
    ]
  },
  {
    column: 2,
    Maintitle: "Startup & SME Services",
    menuList: [
      { title: "Startup India Registration", dataMenu: "startup-india-registration", url: "/startup-india-registration" },
      { title: "MSME / Udyam Registration", dataMenu: "msme-udyam-registration", url: "/msme-udyam-registration" },
      { title: "Business Plan Development", dataMenu: "business-plan-development", url: "/business-plan-development" },
      { title: "Pitch Deck for Startups", dataMenu: "pitch-deck-startups", url: "/pitch-deck-for-startups" },
      { title: "Financial Modeling for Startups", dataMenu: "financial-modeling-startups", url: "/financial-modeling-for-startups" }
    ]
  },
  {
    column: 3,
    Maintitle: "Business Restructuring & Closure",
    menuList: [
      { title: "Conversion of Pvt Ltd to Public Ltd", dataMenu: "conversion-pvt-to-public", url: "/conversion-pvt-to-public" },
      { title: "Conversion of Sole Proprietorship to Private Limited Company", dataMenu: "conversion-sole-to-private", url: "/conversion-sole-to-private" },
      { title: "Conversion of LLP to Private Limited Company", dataMenu: "conversion-llp-to-private", url: "/conversion-llp-to-private" },
      { title: "Conversion of OPC into Private Limited Company", dataMenu: "conversion-opc-to-private", url: "/conversion-opc-to-private" },
      { title: "Conversion of Partnership Firm to LLP", dataMenu: "conversion-partnership-to-llp", url: "/conversion-partnership-to-llp" },
      { title: "Private Limited Company to OPC Conversion", dataMenu: "pvt-to-opc-conversion", url: "/pvt-to-opc-conversion" },
      { title: "Company Name Change", dataMenu: "company-name-change", url: "/company-name-change" },
      { title: "Change in Registered Office Address", dataMenu: "change-office-address", url: "/change-registered-office-address" },
      { title: "Change in LLP Agreement", dataMenu: "change-llp-agreement", url: "/change-llp-agreement" },
      { title: "Add / Remove Partner in LLP", dataMenu: "add-remove-partner-llp", url: "/add-remove-partner-llp" },
      { title: "Closure of Private Limited Company", dataMenu: "closure-pvt", url: "/closure-private-limited" },
      { title: "Closure of LLP", dataMenu: "closure-llp", url: "/closure-llp" },
      { title: "Closure of One Person Company", dataMenu: "closure-opc", url: "/closure-opc" },
      { title: "Strike-off of Company", dataMenu: "strikeoff-company", url: "/strike-off-company" },
      { title: "Revival of Struck-off Company", dataMenu: "revival-struckoff", url: "/revival-struck-off-company" },
      { title: "Dormant Company Registration", dataMenu: "dormant-company", url: "/dormant-company-registration" },
      { title: "Winding Up of Company", dataMenu: "winding-up-company", url: "/winding-up-of-company" },
      { title: "Winding Up of LLP", dataMenu: "winding-up-llp", url: "/winding-up-of-llp" },
      { title: "Liquidation of Company", dataMenu: "liquidation-company", url: "/liquidation-of-company" }
    ]
  },
  {
    column: 4,
    Maintitle: "Global Expansion",
    menuList: [
      { title: "Foreign Company Registration", dataMenu: "foreign-company", url: "/foreign-company-registration" },
      { title: "Indian Subsidiary Company Registration", dataMenu: "indian-subsidiary", url: "/indian-subsidiary-company-registration" },
      { title: "Foreign Subsidiary Company Registration", dataMenu: "foreign-subsidiary", url: "/foreign-subsidiary-company-registration" },
      { title: "UAE / Dubai / Free Zone Registrations", dataMenu: "uae-dubai-freezone", url: "/uae-dubai-freezone-registrations" },
      { title: "UK Company Registration", dataMenu: "uk-company", url: "/uk-company-registration" },
      { title: "USA Company Registration", dataMenu: "usa-company", url: "/usa-company-registration" },
      { title: "Singapore Company Registration", dataMenu: "singapore-company", url: "/singapore-company-registration" },
      { title: "Australia Company Registration", dataMenu: "australia-company", url: "/australia-company-registration" },
      { title: "Canada Company Registration", dataMenu: "canada-company", url: "/canada-company-registration" },
      { title: "Germany Company Registration", dataMenu: "germany-company", url: "/germany-company-registration" },
      { title: "France Company Registration", dataMenu: "france-company", url: "/france-company-registration" },
      { title: "Hong Kong Company Registration", dataMenu: "hongkong-company", url: "/hongkong-company-registration" },
      { title: "Ireland Company Registration", dataMenu: "ireland-company", url: "/ireland-company-registration" },
      { title: "Netherlands Company Registration", dataMenu: "netherlands-company", url: "/netherlands-company-registration" },
      { title: "Sweden Company Registration", dataMenu: "sweden-company", url: "/sweden-company-registration" },
      { title: "Mauritius Company Registration", dataMenu: "mauritius-company", url: "/mauritius-company-registration" },
      { title: "Malaysia Company Registration", dataMenu: "malaysia-company", url: "/malaysia-company-registration" },
      { title: "Qatar Company Registration", dataMenu: "qatar-company", url: "/qatar-company-registration" },
      { title: "Saudi Arabia Company Registration", dataMenu: "saudi-company", url: "/saudi-arabia-company-registration" },
      { title: "Oman Company Registration", dataMenu: "oman-company", url: "/oman-company-registration" },
      { title: "New Zealand Company Registration", dataMenu: "newzealand-company", url: "/new-zealand-company-registration" },
      { title: "Vietnam Company Registration", dataMenu: "vietnam-company", url: "/vietnam-company-registration" },
      { title: "Indonesia Company Registration", dataMenu: "indonesia-company", url: "/indonesia-company-registration" },
      { title: "Philippines Company Registration", dataMenu: "philippines-company", url: "/philippines-company-registration" },
      { title: "South Africa Company Registration", dataMenu: "southafrica-company", url: "/south-africa-company-registration" },
      { title: "Switzerland Company Registration", dataMenu: "switzerland-company", url: "/switzerland-company-registration" }
    ]
  },
  {
    column: 5,
    Maintitle: "NGO & Trust Services",
    menuList: [
      { title: "NGO Registration", dataMenu: "ngo-registration", url: "/ngo-registration" },
      { title: "Trust Registration", dataMenu: "trust-registration", url: "/trust-registration" },
      { title: "Section 8 Company Registration", dataMenu: "section8-registration", url: "/section-8-company-registration" },
      { title: "12A Registration", dataMenu: "12a-registration", url: "/12a-registration" },
      { title: "80G Registration", dataMenu: "80g-registration", url: "/80g-registration" },
      { title: "FCRA Registration", dataMenu: "fcra-registration", url: "/fcra-registration" },
      { title: "NGO Darpan Registration", dataMenu: "ngo-darpan-registration", url: "/ngo-darpan-registration" },
      { title: "CSR Registration", dataMenu: "csr-registration", url: "/csr-registration" },
      { title: "NGO CSR-1 Filing", dataMenu: "ngo-csr1-filing", url: "/ngo-csr-1-filing" },
      { title: "NGO Accounting", dataMenu: "ngo-accounting", url: "/ngo-accounting" },
      { title: "NGO Compliance", dataMenu: "ngo-compliance", url: "/ngo-compliance" },
      { title: "NGO Income Tax Advisory", dataMenu: "ngo-tax-advisory", url: "/ngo-income-tax-advisory" },
      { title: "NGO Project Report", dataMenu: "ngo-project-report", url: "/ngo-project-report" },
      { title: "Trust / NGO Tax Filing", dataMenu: "trust-tax-filing", url: "/trust-ngo-tax-filing" },
      { title: "Strike-off of Section 8 Company", dataMenu: "strikeoff-section8", url: "/strike-off-section-8-company" },
      { title: "Section 8 Demand Notice", dataMenu: "section8-demand", url: "/section-8-demand-notice" },
      { title: "NGO CSR Consultancy", dataMenu: "ngo-csr-consultancy", url: "/ngo-csr-consultancy" },
      { title: "CSR Strategy Planning & Implementation", dataMenu: "csr-strategy", url: "/csr-strategy-planning-implementation" }
    ]
  }
];

export default businessData;