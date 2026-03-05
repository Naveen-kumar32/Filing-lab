const taxationData = [
  {
    column: 1,
    Maintitle: "GST Services",
    menuList: [
      { title: "GST Registration Cancellation", dataMenu: "gst-registration-cancellation", url: "/gst" },
      { title: "Cancel GST Registration", dataMenu: "cancel-gst-registration", url: "/gst" },
      { title: "GST Revocation", dataMenu: "gst-revocation", url: "/gst" },
      { title: "Virtual Office + GSTIN", dataMenu: "virtual-office-gstin", url: "/gst" },
      { title: "Virtual Place of Business in GST", dataMenu: "virtual-place-business-gst", url: "/gst" },
      { title: "GST Return Filing", dataMenu: "gst-return-filing", url: "/gstreturning" },
      { title: "GST NIL Return Filing", dataMenu: "gst-nil-return-filing", url: "/gstreturning" },
      { title: "GST Annual Return Filing (GSTR-9 / GSTR-9C)", dataMenu: "gst-annual-return-filing", url: "/gstreturning" },
      { title: "GSTR-10 Return Filing", dataMenu: "gstr-10-return-filing", url: "/gstreturning" },
      { title: "GST Compliance Services", dataMenu: "gst-compliance-services", url: "/business-compliance" },
      { title: "GST Advisory Services", dataMenu: "gst-advisory-services", url: "/legal-tax-advisory" },
      { title: "GST Amendment", dataMenu: "gst-amendment", url: "/gst" },
      { title: "GST LUT Filing", dataMenu: "gst-lut-filing", url: "/gst" },
      { title: "GST Notice", dataMenu: "gst-notice", url: "/gst" },
      { title: "GST Notice Reply", dataMenu: "gst-notice-reply", url: "/gst" }
    ]
  },
  {
    column: 2,
    Maintitle: "Income Tax",
    menuList: [
      { title: "Income Tax Return Filing", dataMenu: "income-tax-return-filing", url: "/tax-returning" },
      { title: "Company ITR Filing", dataMenu: "company-itr-filing", url: "/tax-returning" },
      { title: "ITR-1 Filing", dataMenu: "itr-1-filing", url: "/tax-returning" },
      { title: "ITR-2 Filing", dataMenu: "itr-2-filing", url: "/tax-returning" },
      { title: "ITR-3 Filing", dataMenu: "itr-3-filing", url: "/tax-returning" },
      { title: "ITR-4 Filing", dataMenu: "itr-4-filing", url: "/tax-returning" },
      { title: "ITR-5 Filing", dataMenu: "itr-5-filing", url: "/tax-returning" },
      { title: "ITR-6 Filing", dataMenu: "itr-6-filing", url: "/tax-returning" },
      { title: "ITR-7 Filing", dataMenu: "itr-7-filing", url: "/tax-returning" },
      { title: "Income Tax Advisory Services", dataMenu: "income-tax-advisory-services", url: "/legal-tax-advisory" },
      { title: "Income Tax Compliance", dataMenu: "income-tax-compliance", url: "/business-compliance" },
      { title: "Income Tax E-Filing", dataMenu: "income-tax-e-filing", url: "/tax-returning" },
      { title: "Income Tax Notice", dataMenu: "income-tax-notice", url: "/tax-returning" },
      { title: "Income Tax Notice Reply", dataMenu: "income-tax-notice-reply", url: "/tax-returning" }
    ]
  },
  {
    column: 3,
    Maintitle: "TDS, TCS & PT",
    menuList: [
      { title: "TDS Return Filing", dataMenu: "tds-return-filing", url: "/tds-return-filing" },
      { title: "Professional Tax Return Filing", dataMenu: "professional-tax-return-filing", url: "/tax-registration" },
      { title: "TAN Registration", dataMenu: "tan-registration", url: "/tax-registration" }
    ]
  },
  {
    column: 4,
    Maintitle: "International Tax & FEMA",
    menuList: [
      { title: "15CA & 15CB Filing", dataMenu: "15ca-15cb-filing", url: "/fema-compliance" }
    ]
  },
  {
    column: 5,
    Maintitle: "Tax Audit & Special Services",
    menuList: [
      { title: "Tax Audit", dataMenu: "tax-audit", url: "/audit-services" },
      { title: "Business Tax Filing", dataMenu: "business-tax-filing", url: "/tax-returning" },
      { title: "Tax Filing / Compliance", dataMenu: "tax-filing-compliance", url: "/business-compliance" },
      { title: "80-IAC Tax Exemption for Startups", dataMenu: "80-iac-tax-exemption", url: "/companyregistration" }
    ]
  }
];

export default taxationData;
