const licensingData = [
  {
    column: 1,
    Maintitle: "Business Registrations",
    menuList: [
      { title: "GST Registration", dataMenu: "gst-registration", url: "/gst-registration" },
      { title: "Professional Tax Registration", dataMenu: "professional-tax-registration", url: "/professional-tax-registration" },
      { title: "Shop & Establishment Registration", dataMenu: "shop-establishment-registration", url: "/shop-establishment-registration" },
      { title: "EPF Registration", dataMenu: "epf-registration", url: "/epf-registration" },
      { title: "ESI Registration", dataMenu: "esi-registration", url: "/esi-registration" },
      { title: "ICEGATE Registration", dataMenu: "icegate-registration", url: "/icegate-registration" },
      { title: "LEI Code Registration", dataMenu: "lei-code-registration", url: "/lei-code-registration" },
      { title: "Digital Signature (DGFT Version)", dataMenu: "digital-signature-dgft", url: "/digital-signature-dgft" },
      { title: "Virtual Office Space", dataMenu: "virtual-office-space", url: "/virtual-office-space" }
    ]
  },
  {
    column: 2,
    Maintitle: "Import–Export",
    menuList: [
      { title: "IEC Registration (Import Export Code)", dataMenu: "iec-registration", url: "/iec-registration" },
      { title: "IEC Code Renewal", dataMenu: "iec-code-renewal", url: "/iec-code-renewal" },
      { title: "FIEO Registration", dataMenu: "fieo-registration", url: "/fieo-registration" },
      { title: "RCMC Registration", dataMenu: "rcmc-registration", url: "/rcmc-registration" },
      { title: "APEDA Registration", dataMenu: "apeda-registration", url: "/apeda-registration" },
      { title: "GJEPC Registration / Certificate", dataMenu: "gjecp-registration", url: "/gjecp-registration" },
      { title: "SEPC License", dataMenu: "sepc-license", url: "/sepc-license" }
    ]
  },
  {
    column: 3,
    Maintitle: "Food & Drug",
    menuList: [
      // FSSAI
      { title: "FSSAI Registration", dataMenu: "fssai-registration", url: "/fssai-registration" },
      { title: "FSSAI State License", dataMenu: "fssai-state-license", url: "/fssai-state-license" },
      { title: "FSSAI Central License", dataMenu: "fssai-central-license", url: "/fssai-central-license" },
      { title: "FSSAI License Renewal", dataMenu: "fssai-license-renewal", url: "/fssai-license-renewal" },
      { title: "FSSAI Annual Return Filing", dataMenu: "fssai-annual-return", url: "/fssai-annual-return" },
      { title: "FSSAI Product Approval", dataMenu: "fssai-product-approval", url: "/fssai-product-approval" },
      // Food & Allied
      { title: "Eating House License", dataMenu: "eating-house-license", url: "/eating-house-license" },
      { title: "Food Recycling License", dataMenu: "food-recycling-license", url: "/food-recycling-license" },
      { title: "FPO Mark Certification", dataMenu: "fpo-mark-certification", url: "/fpo-mark-certification" },
      { title: "Halal Certification", dataMenu: "halal-certification", url: "/halal-certification" },
      // Medical & Pharma
      { title: "Drug License", dataMenu: "drug-license", url: "/drug-license" },
      { title: "Retail Drug License", dataMenu: "retail-drug-license", url: "/retail-drug-license" },
      { title: "Wholesale Drug License", dataMenu: "wholesale-drug-license", url: "/wholesale-drug-license" },
      { title: "Manufacturing Drug License", dataMenu: "manufacturing-drug-license", url: "/manufacturing-drug-license" },
      { title: "CDSCO Registration", dataMenu: "cdsco-registration", url: "/cdsco-registration" },
      { title: "CDSCO Test License", dataMenu: "cdsco-test-license", url: "/cdsco-test-license" },
      { title: "CDSCO Drugs Import License", dataMenu: "cdsco-drugs-import-license", url: "/cdsco-drugs-import-license" },
      { title: "CDSCO Medical Device Import License", dataMenu: "cdsco-medical-device-import", url: "/cdsco-medical-device-import-license" },
      { title: "CDSCO Cosmetic Import Registration", dataMenu: "cdsco-cosmetic-import", url: "/cdsco-cosmetic-import-registration" },
      { title: "Medical Device Registration", dataMenu: "medical-device-registration", url: "/medical-device-registration" },
      { title: "Drug Export NOC", dataMenu: "drug-export-noc", url: "/drug-export-noc" },
      { title: "Clinical Establishment Registration", dataMenu: "clinical-establishment-registration", url: "/clinical-establishment-registration" }
    ]
  },
  {
    column: 4,
    Maintitle: "Industrial Licences",
    menuList: [
      { title: "Factory License", dataMenu: "factory-license", url: "/factory-license" },
      { title: "Fire Department NOC", dataMenu: "fire-department-noc", url: "/fire-department-noc" },
      { title: "Petrol Pump License", dataMenu: "petrol-pump-license", url: "/petrol-pump-license" },
      { title: "Access Service License Registration", dataMenu: "access-service-license", url: "/access-service-license-registration" },
      { title: "Refurbisher Authorization and License", dataMenu: "refurbisher-authorization-license", url: "/refurbisher-authorization-license" },
      { title: "Bio-Medical Waste Recycling Plant License", dataMenu: "bio-medical-waste-license", url: "/bio-medical-waste-license" },
      { title: "Construction & Demolition (C&D) Waste Recycling Authorization", dataMenu: "cd-waste-recycling-license", url: "/cd-waste-recycling-license" }
    ]
  },
  {
    column: 5,
    Maintitle: "Environmental Clearances",
    menuList: [
      { title: "Consent for Operation (CFO)", dataMenu: "cfo-consent", url: "/cfo-consent" },
      { title: "Environmental Impact Assessment (EIA)", dataMenu: "environmental-impact-assessment", url: "/environmental-impact-assessment" },
      { title: "Plastic Waste Authorization", dataMenu: "plastic-waste-authorization", url: "/plastic-waste-authorization" }
    ]
  },
  {
    column: 6,
    Maintitle: "ISO & Certifications",
    menuList: [
      // ISO
      { title: "ISO Registration", dataMenu: "iso-registration", url: "/iso-registration" },
      { title: "ISO 9001 Certification", dataMenu: "iso-9001-certification", url: "/iso-9001-certification" },
      { title: "ISO 14001 Certification", dataMenu: "iso-14001-certification", url: "/iso-14001-certification" },
      { title: "ISO 22000 Certification", dataMenu: "iso-22000-certification", url: "/iso-22000-certification" },
      { title: "ISO 27001 Certification", dataMenu: "iso-27001-certification", url: "/iso-27001-certification" },
      { title: "ISO 45001 Certification", dataMenu: "iso-45001-certification", url: "/iso-45001-certification" },
      { title: "ISO 50001 Certification", dataMenu: "iso-50001-certification", url: "/iso-50001-certification" },
      { title: "ISO 13485 Certification", dataMenu: "iso-13485-certification", url: "/iso-13485-certification" },
      { title: "ISO 31000 Certification", dataMenu: "iso-31000-certification", url: "/iso-31000-certification" },
      { title: "ISO 37001 Certification", dataMenu: "iso-37001-certification", url: "/iso-37001-certification" },
      { title: "ISO 39001 Certification", dataMenu: "iso-39001-certification", url: "/iso-39001-certification" },
      { title: "ISO 20000 Certification", dataMenu: "iso-20000-certification", url: "/iso-20000-certification" },
      { title: "SA8000 Certification", dataMenu: "sa8000-certification", url: "/sa8000-certification" },
      { title: "GMP Certification", dataMenu: "gmp-certification", url: "/gmp-certification" },
      // Product & Standards
      { title: "BIS Registration", dataMenu: "bis-registration", url: "/bis-registration" },
      { title: "BIS Certification", dataMenu: "bis-certification", url: "/bis-certification" },
      { title: "BIS CRS Registration", dataMenu: "bis-crs-registration", url: "/bis-crs-registration" },
      { title: "ISI Mark Certification", dataMenu: "isi-mark-certification", url: "/isi-mark-certification" },
      { title: "CE Certification", dataMenu: "ce-certification", url: "/ce-certification" },
      { title: "Green Building Certification (LEED)", dataMenu: "leed-certification", url: "/leed-certification" }
    ]
  },
  {
    column: 7,
    Maintitle: "Property Registrations",
    menuList: [
      { title: "RERA Registration", dataMenu: "rera-registration", url: "/rera-registration" },
      { title: "RERA Registration for Agents", dataMenu: "rera-agents-registration", url: "/rera-agents-registration" },
      { title: "RERA Registration for Promoters", dataMenu: "rera-promoters-registration", url: "/rera-promoters-registration" },
      { title: "TN RERA Registration for Agents", dataMenu: "tn-rera-agents-registration", url: "/tn-rera-agents-registration" }
    ]
  },
  {
    column: 8,
    Maintitle: "Financial Registrations",
    menuList: [
      { title: "Alternative Investment Fund Registration", dataMenu: "alternative-investment-fund-registration", url: "/alternative-investment-fund-registration" },
      { title: "Collective Investment Scheme Registration", dataMenu: "collective-investment-scheme-registration", url: "/collective-investment-scheme-registration" },
      { title: "Insurance Marketing Firm Registration", dataMenu: "insurance-marketing-firm-registration", url: "/insurance-marketing-firm-registration" },
      { title: "Insurance Web Aggregator License", dataMenu: "insurance-web-aggregator-license", url: "/insurance-web-aggregator-license" },
      { title: "Insurance Repository Registration", dataMenu: "insurance-repository-registration", url: "/insurance-repository-registration" },
      { title: "Insurance Surveyors & Loss Assessors Registration", dataMenu: "insurance-surveyors-registration", url: "/insurance-surveyors-registration" }
    ]
  }
];

export default licensingData;
