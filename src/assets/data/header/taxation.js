const taxationData = [
  {
    column: 1,
    Maintitle: "GST Services",
    menuList: [
      // GST Registration & Changes
      { title: "GST Registration Cancellation", dataMenu: "gst-registration-cancellation", url: "/public-limited-company-registration" },
      { title: "Cancel GST Registration", dataMenu: "cancel-gst-registration", url: "/one-person-company-registration" },
      { title: "GST Revocation", dataMenu: "gst-revocation", url: "/partnership-firm-registration" },
      { title: "Virtual Office + GSTIN", dataMenu: "virtual-office-gstin", url: "/tds-return-filing" },
      { title: "Virtual Place of Business in GST", dataMenu: "virtual-place-business-gst", url: "/public-limited-company-registration" },

      // GST Returns & Filings
      { title: "GST Return Filing", dataMenu: "gst-return-filing", url: "/one-person-company-registration" },
      { title: "GST NIL Return Filing", dataMenu: "gst-nil-return-filing", url: "/partnership-firm-registration" },
      { title: "GST Annual Return Filing (GSTR-9 / GSTR-9C)", dataMenu: "gst-annual-return-filing", url: "/tds-return-filing" },
      { title: "GSTR-10 Return Filing", dataMenu: "gstr-10-return-filing", url: "/public-limited-company-registration" },

      // GST Compliance & Advisory
      { title: "GST Compliance Services", dataMenu: "gst-compliance-services", url: "/one-person-company-registration" },
      { title: "GST Advisory Services", dataMenu: "gst-advisory-services", url: "/partnership-firm-registration" },
      { title: "GST Amendment", dataMenu: "gst-amendment", url: "/tds-return-filing" },
      { title: "GST LUT Filing", dataMenu: "gst-lut-filing", url: "/public-limited-company-registration" },

      // GST Notices
      { title: "GST Notice", dataMenu: "gst-notice", url: "/one-person-company-registration" },
      { title: "GST Notice Reply", dataMenu: "gst-notice-reply", url: "/partnership-firm-registration" }
    ]
  },

  {
    column: 2,
    Maintitle: "Income Tax",
    menuList: [
      // ITR Filing
      { title: "Income Tax Return Filing", dataMenu: "income-tax-return-filing", url: "/tds-return-filing" },
      { title: "Company ITR Filing", dataMenu: "company-itr-filing", url: "/public-limited-company-registration" },

      // ITR Forms
      { title: "ITR-1 Filing", dataMenu: "itr-1-filing", url: "/one-person-company-registration" },
      { title: "ITR-2 Filing", dataMenu: "itr-2-filing", url: "/partnership-firm-registration" },
      { title: "ITR-3 Filing", dataMenu: "itr-3-filing", url: "/tds-return-filing" },
      { title: "ITR-4 Filing", dataMenu: "itr-4-filing", url: "/public-limited-company-registration" },
      { title: "ITR-5 Filing", dataMenu: "itr-5-filing", url: "/one-person-company-registration" },
      { title: "ITR-6 Filing", dataMenu: "itr-6-filing", url: "/partnership-firm-registration" },
      { title: "ITR-7 Filing", dataMenu: "itr-7-filing", url: "/tds-return-filing" },

      // Compliance & Advisory
      { title: "Income Tax Advisory Services", dataMenu: "income-tax-advisory-services", url: "/public-limited-company-registration" },
      { title: "Income Tax Compliance", dataMenu: "income-tax-compliance", url: "/one-person-company-registration" },
      { title: "Income Tax E-Filing", dataMenu: "income-tax-e-filing", url: "/partnership-firm-registration" },

      // Notices
      { title: "Income Tax Notice", dataMenu: "income-tax-notice", url: "/tds-return-filing" },
      { title: "Income Tax Notice Reply", dataMenu: "income-tax-notice-reply", url: "/public-limited-company-registration" }
    ]
  },

  {
    column: 3,
    Maintitle: "TDS, TCS & PT",
    menuList: [
      { title: "TDS Return Filing", dataMenu: "tds-return-filing", url: "/one-person-company-registration" },
      { title: "Professional Tax Return Filing", dataMenu: "professional-tax-return-filing", url: "/partnership-firm-registration" },
      { title: "TAN Registration", dataMenu: "tan-registration", url: "/tds-return-filing" }
    ]
  },

  {
    column: 4,
    Maintitle: "International Tax & FEMA",
    menuList: [
      { title: "15CA & 15CB Filing", dataMenu: "15ca-15cb-filing", url: "/public-limited-company-registration" }
    ]
  },

  {
    column: 5,
    Maintitle: "Tax Audit & Special Services",
    menuList: [
      { title: "Tax Audit", dataMenu: "tax-audit", url: "/one-person-company-registration" },
      { title: "Business Tax Filing", dataMenu: "business-tax-filing", url: "/partnership-firm-registration" },
      { title: "Tax Filing / Compliance", dataMenu: "tax-filing-compliance", url: "/tds-return-filing" },
      { title: "80-IAC Tax Exemption for Startups", dataMenu: "80-iac-tax-exemption", url: "/public-limited-company-registration" }
    ]
  }
];

export default taxationData;
