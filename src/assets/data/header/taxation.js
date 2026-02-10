const taxationData = [
  {
    column: 1,
    Maintitle: "GST Services",
    menuList: [
      // GST Registration & Changes
      { title: "GST Registration Cancellation", dataMenu: "gst-registration-cancellation", url: "/gst-registration-cancellation" },
      { title: "Cancel GST Registration", dataMenu: "cancel-gst-registration", url: "/cancel-gst-registration" },
      { title: "GST Revocation", dataMenu: "gst-revocation", url: "/gst-revocation" },
      { title: "Virtual Office + GSTIN", dataMenu: "virtual-office-gstin", url: "/virtual-office-gstin" },
      { title: "Virtual Place of Business in GST", dataMenu: "virtual-place-business-gst", url: "/virtual-place-business-gst" },

      // GST Returns & Filings
      { title: "GST Return Filing", dataMenu: "gst-return-filing", url: "/gst-return-filing" },
      { title: "GST NIL Return Filing", dataMenu: "gst-nil-return-filing", url: "/gst-nil-return-filing" },
      { title: "GST Annual Return Filing (GSTR-9 / GSTR-9C)", dataMenu: "gst-annual-return-filing", url: "/gst-annual-return-filing" },
      { title: "GSTR-10 Return Filing", dataMenu: "gstr-10-return-filing", url: "/gstr-10-return-filing" },

      // GST Compliance & Advisory
      { title: "GST Compliance Services", dataMenu: "gst-compliance-services", url: "/gst-compliance-services" },
      { title: "GST Advisory Services", dataMenu: "gst-advisory-services", url: "/gst-advisory-services" },
      { title: "GST Amendment", dataMenu: "gst-amendment", url: "/gst-amendment" },
      { title: "GST LUT Filing", dataMenu: "gst-lut-filing", url: "/gst-lut-filing" },

      // GST Notices
      { title: "GST Notice", dataMenu: "gst-notice", url: "/gst-notice" },
      { title: "GST Notice Reply", dataMenu: "gst-notice-reply", url: "/gst-notice-reply" }
    ]
  },

  {
    column: 2,
    Maintitle: "Income Tax",
    menuList: [
      // ITR Filing
      { title: "Income Tax Return Filing", dataMenu: "income-tax-return-filing", url: "/income-tax-return-filing" },
      { title: "Company ITR Filing", dataMenu: "company-itr-filing", url: "/company-itr-filing" },

      // ITR Forms
      { title: "ITR-1 Filing", dataMenu: "itr-1-filing", url: "/itr-1-filing" },
      { title: "ITR-2 Filing", dataMenu: "itr-2-filing", url: "/itr-2-filing" },
      { title: "ITR-3 Filing", dataMenu: "itr-3-filing", url: "/itr-3-filing" },
      { title: "ITR-4 Filing", dataMenu: "itr-4-filing", url: "/itr-4-filing" },
      { title: "ITR-5 Filing", dataMenu: "itr-5-filing", url: "/itr-5-filing" },
      { title: "ITR-6 Filing", dataMenu: "itr-6-filing", url: "/itr-6-filing" },
      { title: "ITR-7 Filing", dataMenu: "itr-7-filing", url: "/itr-7-filing" },

      // Compliance & Advisory
      { title: "Income Tax Advisory Services", dataMenu: "income-tax-advisory-services", url: "/income-tax-advisory-services" },
      { title: "Income Tax Compliance", dataMenu: "income-tax-compliance", url: "/income-tax-compliance" },
      { title: "Income Tax E-Filing", dataMenu: "income-tax-e-filing", url: "/income-tax-e-filing" },

      // Notices
      { title: "Income Tax Notice", dataMenu: "income-tax-notice", url: "/income-tax-notice" },
      { title: "Income Tax Notice Reply", dataMenu: "income-tax-notice-reply", url: "/income-tax-notice-reply" }
    ]
  },

  {
    column: 3,
    Maintitle: "TDS, TCS & PT",
    menuList: [
      { title: "TDS Return Filing", dataMenu: "tds-return-filing", url: "/tds-return-filing" },
      { title: "Professional Tax Return Filing", dataMenu: "professional-tax-return-filing", url: "/professional-tax-return-filing" },
      { title: "TAN Registration", dataMenu: "tan-registration", url: "/tan-registration" }
    ]
  },

  {
    column: 4,
    Maintitle: "International Tax & FEMA",
    menuList: [
      { title: "15CA & 15CB Filing", dataMenu: "15ca-15cb-filing", url: "/15ca-15cb-filing" }
    ]
  },

  {
    column: 5,
    Maintitle: "Tax Audit & Special Services",
    menuList: [
      { title: "Tax Audit", dataMenu: "tax-audit", url: "/tax-audit" },
      { title: "Business Tax Filing", dataMenu: "business-tax-filing", url: "/business-tax-filing" },
      { title: "Tax Filing / Compliance", dataMenu: "tax-filing-compliance", url: "/tax-filing-compliance" },
      { title: "80-IAC Tax Exemption for Startups", dataMenu: "80-iac-tax-exemption", url: "/80-iac-tax-exemption" }
    ]
  }
];

export default taxationData;
