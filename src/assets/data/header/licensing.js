const licensingData = [
  {
    column: 1,
    Maintitle: "Business Registrations",
    menuList: [
      { title: "GST Registration", dataMenu: "gst-registration", url: "/one-person-company-registration" },
      { title: "Professional Tax Registration", dataMenu: "professional-tax-registration", url: "/partnership-firm-registration" },
      { title: "Shop & Establishment Registration", dataMenu: "shop-establishment-registration", url: "/tds-return-filing" },
      { title: "EPF Registration", dataMenu: "epf-registration", url: "/public-limited-company-registration" },
      { title: "ESI Registration", dataMenu: "esi-registration", url: "/one-person-company-registration" },
      { title: "ICEGATE Registration", dataMenu: "icegate-registration", url: "/partnership-firm-registration" },
      { title: "LEI Code Registration", dataMenu: "lei-code-registration", url: "/tds-return-filing" },
      { title: "Digital Signature (DGFT Version)", dataMenu: "digital-signature-dgft", url: "/public-limited-company-registration" },
      { title: "Virtual Office Space", dataMenu: "virtual-office-space", url: "/one-person-company-registration" }
    ]
  },
  {
    column: 2,
    Maintitle: "Import–Export",
    menuList: [
      { title: "IEC Registration (Import Export Code)", dataMenu: "iec-registration", url: "/partnership-firm-registration" },
      { title: "IEC Code Renewal", dataMenu: "iec-code-renewal", url: "/tds-return-filing" },
      { title: "FIEO Registration", dataMenu: "fieo-registration", url: "/public-limited-company-registration" },
      { title: "RCMC Registration", dataMenu: "rcmc-registration", url: "/one-person-company-registration" },
      { title: "APEDA Registration", dataMenu: "apeda-registration", url: "/partnership-firm-registration" },
      { title: "GJEPC Registration / Certificate", dataMenu: "gjecp-registration", url: "/tds-return-filing" },
      { title: "SEPC License", dataMenu: "sepc-license", url: "/public-limited-company-registration" }
    ]
  },
  {
    column: 3,
    Maintitle: "Food & Drug",
    menuList: [
      // FSSAI
      { title: "FSSAI Registration", dataMenu: "fssai-registration", url: "/one-person-company-registration" },
      { title: "FSSAI State License", dataMenu: "fssai-state-license", url: "/partnership-firm-registration" },
      { title: "FSSAI Central License", dataMenu: "fssai-central-license", url: "/tds-return-filing" },
      { title: "FSSAI License Renewal", dataMenu: "fssai-license-renewal", url: "/public-limited-company-registration" },
      { title: "FSSAI Annual Return Filing", dataMenu: "fssai-annual-return", url: "/one-person-company-registration" },
      { title: "FSSAI Product Approval", dataMenu: "fssai-product-approval", url: "/partnership-firm-registration" },
      // Food & Allied
      { title: "Eating House License", dataMenu: "eating-house-license", url: "/tds-return-filing" },
      { title: "Food Recycling License", dataMenu: "food-recycling-license", url: "/public-limited-company-registration" },
      { title: "FPO Mark Certification", dataMenu: "fpo-mark-certification", url: "/one-person-company-registration" },
      { title: "Halal Certification", dataMenu: "halal-certification", url: "/partnership-firm-registration" },
      // Medical & Pharma
      { title: "Drug License", dataMenu: "drug-license", url: "/tds-return-filing" },
      { title: "Retail Drug License", dataMenu: "retail-drug-license", url: "/public-limited-company-registration" },
      { title: "Wholesale Drug License", dataMenu: "wholesale-drug-license", url: "/one-person-company-registration" },
      { title: "Manufacturing Drug License", dataMenu: "manufacturing-drug-license", url: "/partnership-firm-registration" },
      { title: "CDSCO Registration", dataMenu: "cdsco-registration", url: "/tds-return-filing" },
      { title: "CDSCO Test License", dataMenu: "cdsco-test-license", url: "/public-limited-company-registration" },
      { title: "CDSCO Drugs Import License", dataMenu: "cdsco-drugs-import-license", url: "/one-person-company-registration" },
      { title: "CDSCO Medical Device Import License", dataMenu: "cdsco-medical-device-import", url: "/partnership-firm-registration" },
      { title: "CDSCO Cosmetic Import Registration", dataMenu: "cdsco-cosmetic-import", url: "/tds-return-filing" },
      { title: "Medical Device Registration", dataMenu: "medical-device-registration", url: "/public-limited-company-registration" },
      { title: "Drug Export NOC", dataMenu: "drug-export-noc", url: "/one-person-company-registration" },
      { title: "Clinical Establishment Registration", dataMenu: "clinical-establishment-registration", url: "/partnership-firm-registration" }
    ]
  },
  {
    column: 4,
    Maintitle: "Industrial Licences",
    menuList: [
      { title: "Factory License", dataMenu: "factory-license", url: "/tds-return-filing" },
      { title: "Fire Department NOC", dataMenu: "fire-department-noc", url: "/public-limited-company-registration" },
      { title: "Petrol Pump License", dataMenu: "petrol-pump-license", url: "/one-person-company-registration" },
      { title: "Access Service License Registration", dataMenu: "access-service-license", url: "/partnership-firm-registration" },
      { title: "Refurbisher Authorization and License", dataMenu: "refurbisher-authorization-license", url: "/tds-return-filing" },
      { title: "Bio-Medical Waste Recycling Plant License", dataMenu: "bio-medical-waste-license", url: "/public-limited-company-registration" },
      { title: "Construction & Demolition (C&D) Waste Recycling Authorization", dataMenu: "cd-waste-recycling-license", url: "/one-person-company-registration" }
    ]
  },
  {
    column: 5,
    Maintitle: "Environmental Clearances",
    menuList: [
      { title: "Consent for Operation (CFO)", dataMenu: "cfo-consent", url: "/partnership-firm-registration" },
      { title: "Environmental Impact Assessment (EIA)", dataMenu: "environmental-impact-assessment", url: "/tds-return-filing" },
      { title: "Plastic Waste Authorization", dataMenu: "plastic-waste-authorization", url: "/public-limited-company-registration" }
    ]
  },
  {
    column: 6,
    Maintitle: "ISO & Certifications",
    menuList: [
      // ISO
      { title: "ISO Registration", dataMenu: "iso-registration", url: "/one-person-company-registration" },
      { title: "ISO 9001 Certification", dataMenu: "iso-9001-certification", url: "/partnership-firm-registration" },
      { title: "ISO 14001 Certification", dataMenu: "iso-14001-certification", url: "/tds-return-filing" },
      { title: "ISO 22000 Certification", dataMenu: "iso-22000-certification", url: "/public-limited-company-registration" },
      { title: "ISO 27001 Certification", dataMenu: "iso-27001-certification", url: "/one-person-company-registration" },
      { title: "ISO 45001 Certification", dataMenu: "iso-45001-certification", url: "/partnership-firm-registration" },
      { title: "ISO 50001 Certification", dataMenu: "iso-50001-certification", url: "/tds-return-filing" },
      { title: "ISO 13485 Certification", dataMenu: "iso-13485-certification", url: "/public-limited-company-registration" },
      { title: "ISO 31000 Certification", dataMenu: "iso-31000-certification", url: "/one-person-company-registration" },
      { title: "ISO 37001 Certification", dataMenu: "iso-37001-certification", url: "/partnership-firm-registration" },
      { title: "ISO 39001 Certification", dataMenu: "iso-39001-certification", url: "/tds-return-filing" },
      { title: "ISO 20000 Certification", dataMenu: "iso-20000-certification", url: "/public-limited-company-registration" },
      { title: "SA8000 Certification", dataMenu: "sa8000-certification", url: "/one-person-company-registration" },
      { title: "GMP Certification", dataMenu: "gmp-certification", url: "/partnership-firm-registration" },
      // Product & Standards
      { title: "BIS Registration", dataMenu: "bis-registration", url: "/tds-return-filing" },
      { title: "BIS Certification", dataMenu: "bis-certification", url: "/public-limited-company-registration" },
      { title: "BIS CRS Registration", dataMenu: "bis-crs-registration", url: "/one-person-company-registration" },
      { title: "ISI Mark Certification", dataMenu: "isi-mark-certification", url: "/partnership-firm-registration" },
      { title: "CE Certification", dataMenu: "ce-certification", url: "/tds-return-filing" },
      { title: "Green Building Certification (LEED)", dataMenu: "leed-certification", url: "/public-limited-company-registration" }
    ]
  },
  {
    column: 7,
    Maintitle: "Property Registrations",
    menuList: [
      { title: "RERA Registration", dataMenu: "rera-registration", url: "/one-person-company-registration" },
      { title: "RERA Registration for Agents", dataMenu: "rera-agents-registration", url: "/partnership-firm-registration" },
      { title: "RERA Registration for Promoters", dataMenu: "rera-promoters-registration", url: "/tds-return-filing" },
      { title: "TN RERA Registration for Agents", dataMenu: "tn-rera-agents-registration", url: "/public-limited-company-registration" }
    ]
  },
  {
    column: 8,
    Maintitle: "Financial Registrations",
    menuList: [
      { title: "Alternative Investment Fund Registration", dataMenu: "alternative-investment-fund-registration", url: "/one-person-company-registration" },
      { title: "Collective Investment Scheme Registration", dataMenu: "collective-investment-scheme-registration", url: "/partnership-firm-registration" },
      { title: "Insurance Marketing Firm Registration", dataMenu: "insurance-marketing-firm-registration", url: "/tds-return-filing" },
      { title: "Insurance Web Aggregator License", dataMenu: "insurance-web-aggregator-license", url: "/public-limited-company-registration" },
      { title: "Insurance Repository Registration", dataMenu: "insurance-repository-registration", url: "/one-person-company-registration" },
      { title: "Insurance Surveyors & Loss Assessors Registration", dataMenu: "insurance-surveyors-registration", url: "/partnership-firm-registration" }
    ]
  }
];

export default licensingData;
