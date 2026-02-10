import Star1 from "../../images/shape/pricing-star1.svg";
import Star2 from "../../images/shape/pricing-star2.svg";
import Star3 from "../../images/shape/pricing-star3.svg";
import Star4 from "../../images/shape/pricing-star4.svg";

export const pricingPlans = [
  {
    id: "ITR Filing Less than 50 Lakhs",
    delay: 200,
    title: "Individual Tax Filing",
    subtitle: "Salaried individuals and simple income cases",
    tagDisplay: "none",
    icon: Star1,
    description: "Create your first call for free",
    actionTitle: "Start Free",
    actionLink: "#",
    plans: {
      monthly: {
        price: "₹0",
        features: [
          "Income Tax Return filing",
          "Salary and interest income",
          "Tax computation and verification",
          "Filing acknowledgement",
        ],
      },
      yearly: {
        price: "₹0",
        features: [
          "Income Tax Return filing",
          "Salary and interest income",
          "Tax computation and verification",
          "Filing acknowledgement",
        ],
      },
    },
  },
  {
    id: "ITR Filing Less than 50 Lakhs",
    delay: 250,
    title: "Business Registrations",
    subtitle: "Startups and small businesses starting operations",
    noteText: "(Final pricing depends on business structure)",
    tagDisplay: "block",
    icon: Star2,
    description: "Team in a growing company",
    actionTitle: "Start Free",
    actionLink: "#",
    plans: {
      monthly: {
        price: "₹9",
        features: [
          "Private Limited / LLP / Proprietorship",
          "MSME / Udyam Registration",
          "Documentation and filing support",
          "Registration confirmation",
        ],
      },
      yearly: {
        price: "₹108",
        features: [
          "Private Limited / LLP / Proprietorship",
          "MSME / Udyam Registration",
          "Documentation and filing support",
          "Registration confirmation",
        ],
      },
    },
  },
  {
    id: "Presumptive/Freelancing Income",
    delay: 300,
    title: "GST & Compliance Services",
    subtitle: "Businesses with recurring compliance needs",
    noteText: "(Based on turnover and filing frequency)",
    tagDisplay: "none",
    icon: Star3,
    description: "Big company choose this",
    actionTitle: "Start Free",
    actionLink: "#",
    plans: {
      monthly: {
        price: "₹25",
        features: [
          "GST registration and returns",
          "ROC and statutory compliance",
          "Accounting and payroll support",
          "Compliance tracking",
        ],
      },
      yearly: {
        price: "₹300",
        features: [
          "GST registration and returns",
          "ROC and statutory compliance",
          "Accounting and payroll support",
          "Compliance tracking",
        ],
      },
    },
  },
  {
    id: "ITR Capital Gain(ESOP & RSU)",
    delay: 300,
    title: "Advisory & Complex Cases",
    subtitle: "Custom pricing based on consultation",
    tagDisplay: "none",
    icon: Star4,
    description: "High-value, complex, or case-specific requirements",
    actionTitle: "Contact us",
    actionLink: "#",
    plans: {
      monthly: {
        features: [
          "Capital gains (property, ESOP, RSU)",
          "Income tax & GST notices",
          "Business restructuring & closure",
          "Global expansion & NGO services",
        ],
      },
      yearly: {
        features: [
          "Capital gains (property, ESOP, RSU)",
          "Income tax & GST notices",
          "Business restructuring & closure",
          "Global expansion & NGO services",
        ],
      },
    },
  },
];
