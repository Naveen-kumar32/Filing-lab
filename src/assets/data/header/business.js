const businessData = [
  {
    column: 1,
    Maintitle: "Company Formation",
    menuList: [
      { title: "Company Registration", dataMenu: "company-registration", url: "/companyregistration" },
      { title: "Private Limited Company Registration", dataMenu: "private-limited-company-registration", url: "/companyregistration" },
      { title: "Public Limited Company Registration", dataMenu: "public-limited-company-registration", url: "/public-limited-company-registration" },
      { title: "One Person Company (OPC) Registration", dataMenu: "opc-registration", url: "/one-person-company-registration" },
      { title: "LLP Registration", dataMenu: "llp-registration", url: "/LLPRegistration" },
      { title: "Partnership Firm Registration", dataMenu: "partnership-firm-registration", url: "/partnership-firm-registration" },
      { title: "Sole Proprietorship Registration", dataMenu: "sole-proprietorship-registration", url: "/sole-proprietorship-registration" },
      { title: "Producer Company Registration", dataMenu: "producer-company-registration", url: "/producer-company-registration" },
      { title: "Section 8 Company Registration", dataMenu: "section8-registration", url: "/companyregistration" },
      { title: "Nidhi Company Registration", dataMenu: "nidhi-registration", url: "/nidhi-company-registration" },
      { title: "Society Registration", dataMenu: "society-registration", url: "/companyregistration" },
      { title: "Trust Registration", dataMenu: "trust-registration", url: "/companyregistration" },
      { title: "Family Trust Registration", dataMenu: "family-trust-registration", url: "/companyregistration" },
      { title: "Branch Office Registration", dataMenu: "branch-office-registration", url: "/branch-office-registration" },
      { title: "Liaison Office Registration", dataMenu: "liaison-office-registration", url: "/liaison-office-registration" },
      { title: "Project Office Registration", dataMenu: "project-office-registration", url: "/project-office-registration" }
    ]
  },
  {
    column: 2,
    Maintitle: "Startup & SME Services",
    menuList: [
      { title: "Startup India Registration", dataMenu: "startup-india-registration", url: "/companyregistration" },
      { title: "MSME / Udyam Registration", dataMenu: "msme-udyam-registration", url: "/companyregistration" },
      { title: "Business Plan Development", dataMenu: "business-plan-development", url: "/general-advisory-services" },
      { title: "Pitch Deck for Startups", dataMenu: "pitch-deck-startups", url: "/general-advisory-services" },
      { title: "Financial Modeling for Startups", dataMenu: "financial-modeling-startups", url: "/financial-cfo-services" }
    ]
  },
  {
    column: 3,
    Maintitle: "Business Restructuring & Closure",
    menuList: [
      { title: "Conversion of Pvt Ltd to Public Ltd", dataMenu: "conversion-pvt-to-public", url: "/public-limited-company-registration" },
      { title: "Conversion of Sole Proprietorship to Private Limited Company", dataMenu: "conversion-sole-to-private", url: "/companyregistration" },
      { title: "Conversion of LLP to Private Limited Company", dataMenu: "conversion-llp-to-private", url: "/LLPRegistration" },
      { title: "Conversion of OPC into Private Limited Company", dataMenu: "conversion-opc-to-private", url: "/one-person-company-registration" },
      { title: "Conversion of Partnership Firm to LLP", dataMenu: "conversion-partnership-to-llp", url: "/LLPRegistration" },
      { title: "Private Limited Company to OPC Conversion", dataMenu: "pvt-to-opc-conversion", url: "/one-person-company-registration" },
      { title: "Company Name Change", dataMenu: "company-name-change", url: "/companyregistration" },
      { title: "Change in Registered Office Address", dataMenu: "change-office-address", url: "/companyregistration" },
      { title: "Change in LLP Agreement", dataMenu: "change-llp-agreement", url: "/LLPRegistration" },
      { title: "Add / Remove Partner in LLP", dataMenu: "add-remove-partner-llp", url: "/LLPRegistration" },
      { title: "Closure of Private Limited Company", dataMenu: "closure-pvt", url: "/companyregistration" },
      { title: "Closure of LLP", dataMenu: "closure-llp", url: "/LLPRegistration" },
      { title: "Closure of One Person Company", dataMenu: "closure-opc", url: "/one-person-company-registration" },
      { title: "Strike-off of Company", dataMenu: "strikeoff-company", url: "/companyregistration" },
      { title: "Revival of Struck-off Company", dataMenu: "revival-struckoff", url: "/companyregistration" },
      { title: "Dormant Company Registration", dataMenu: "dormant-company", url: "/companyregistration" },
      { title: "Winding Up of Company", dataMenu: "winding-up-company", url: "/companyregistration" },
      { title: "Winding Up of LLP", dataMenu: "winding-up-llp", url: "/LLPRegistration" },
      { title: "Liquidation of Company", dataMenu: "liquidation-company", url: "/companyregistration" }
    ]
  },
  {
    column: 4,
    Maintitle: "Global Expansion",
    menuList: [
      { title: "Foreign Company Registration", dataMenu: "foreign-company", url: "/companyregistration" },
      { title: "Indian Subsidiary Company Registration", dataMenu: "indian-subsidiary", url: "/companyregistration" },
      { title: "Foreign Subsidiary Company Registration", dataMenu: "foreign-subsidiary", url: "/companyregistration" },
      { title: "UAE / Dubai / Free Zone Registrations", dataMenu: "uae-dubai-freezone", url: "/companyregistration" },
      { title: "UK Company Registration", dataMenu: "uk-company", url: "/companyregistration" },
      { title: "USA Company Registration", dataMenu: "usa-company", url: "/companyregistration" },
      { title: "Singapore Company Registration", dataMenu: "singapore-company", url: "/companyregistration" },
      { title: "Australia Company Registration", dataMenu: "australia-company", url: "/companyregistration" },
      { title: "Canada Company Registration", dataMenu: "canada-company", url: "/companyregistration" },
      { title: "Germany Company Registration", dataMenu: "germany-company", url: "/companyregistration" },
      { title: "France Company Registration", dataMenu: "france-company", url: "/companyregistration" },
      { title: "Hong Kong Company Registration", dataMenu: "hongkong-company", url: "/companyregistration" },
      { title: "Ireland Company Registration", dataMenu: "ireland-company", url: "/companyregistration" },
      { title: "Netherlands Company Registration", dataMenu: "netherlands-company", url: "/companyregistration" },
      { title: "Sweden Company Registration", dataMenu: "sweden-company", url: "/companyregistration" },
      { title: "Mauritius Company Registration", dataMenu: "mauritius-company", url: "/companyregistration" },
      { title: "Malaysia Company Registration", dataMenu: "malaysia-company", url: "/companyregistration" },
      { title: "Qatar Company Registration", dataMenu: "qatar-company", url: "/companyregistration" },
      { title: "Saudi Arabia Company Registration", dataMenu: "saudi-company", url: "/companyregistration" },
      { title: "Oman Company Registration", dataMenu: "oman-company", url: "/companyregistration" },
      { title: "New Zealand Company Registration", dataMenu: "newzealand-company", url: "/companyregistration" },
      { title: "Vietnam Company Registration", dataMenu: "vietnam-company", url: "/companyregistration" },
      { title: "Indonesia Company Registration", dataMenu: "indonesia-company", url: "/companyregistration" },
      { title: "Philippines Company Registration", dataMenu: "philippines-company", url: "/companyregistration" },
      { title: "South Africa Company Registration", dataMenu: "southafrica-company", url: "/companyregistration" },
      { title: "Switzerland Company Registration", dataMenu: "switzerland-company", url: "/companyregistration" }
    ]
  },
  {
    column: 5,
    Maintitle: "NGO & Trust Services",
    menuList: [
      { title: "NGO Registration", dataMenu: "ngo-registration", url: "/companyregistration" },
      { title: "Trust Registration", dataMenu: "trust-registration", url: "/companyregistration" },
      { title: "Section 8 Company Registration", dataMenu: "section8-registration", url: "/companyregistration" },
      { title: "12A Registration", dataMenu: "12a-registration", url: "/companyregistration" },
      { title: "80G Registration", dataMenu: "80g-registration", url: "/companyregistration" },
      { title: "FCRA Registration", dataMenu: "fcra-registration", url: "/companyregistration" },
      { title: "NGO Darpan Registration", dataMenu: "ngo-darpan-registration", url: "/companyregistration" },
      { title: "CSR Registration", dataMenu: "csr-registration", url: "/companyregistration" },
      { title: "NGO CSR-1 Filing", dataMenu: "ngo-csr1-filing", url: "/companyregistration" },
      { title: "NGO Accounting", dataMenu: "ngo-accounting", url: "/accounting-services" },
      { title: "NGO Compliance", dataMenu: "ngo-compliance", url: "/business-compliance" },
      { title: "NGO Income Tax Advisory", dataMenu: "ngo-tax-advisory", url: "/legal-tax-advisory" },
      { title: "NGO Project Report", dataMenu: "ngo-project-report", url: "/general-advisory-services" },
      { title: "Trust / NGO Tax Filing", dataMenu: "trust-tax-filing", url: "/tds-return-filing" },
      { title: "Strike-off of Section 8 Company", dataMenu: "strikeoff-section8", url: "/companyregistration" },
      { title: "Section 8 Demand Notice", dataMenu: "section8-demand", url: "/companyregistration" },
      { title: "NGO CSR Consultancy", dataMenu: "ngo-csr-consultancy", url: "/general-advisory-services" },
      { title: "CSR Strategy Planning & Implementation", dataMenu: "csr-strategy", url: "/general-advisory-services" }
    ]
  }
];

export default businessData;
