import { useState, useRef, useEffect } from "react";
import ConsultationStyleWrapper from "./Consultation.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import outgoingCallImage from "../../../assets/images/corporate/call-outgoing-big.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const COUNTRIES = [
  { flag: "🇮🇳", code: "+91" }, { flag: "🇺🇸", code: "+1" }, { flag: "🇬🇧", code: "+44" },
  { flag: "🇦🇺", code: "+61" }, { flag: "🇦🇪", code: "+971" }, { flag: "🇦🇫", code: "+93" },
  { flag: "🇦🇱", code: "+355" }, { flag: "🇩🇿", code: "+213" }, { flag: "🇦🇩", code: "+376" },
  { flag: "🇦🇴", code: "+244" }, { flag: "🇦🇷", code: "+54" }, { flag: "🇦🇲", code: "+374" },
  { flag: "🇦🇹", code: "+43" }, { flag: "🇦🇿", code: "+994" }, { flag: "🇧🇸", code: "+1-242" },
  { flag: "🇧🇭", code: "+973" }, { flag: "🇧🇩", code: "+880" }, { flag: "🇧🇾", code: "+375" },
  { flag: "🇧🇪", code: "+32" }, { flag: "🇧🇿", code: "+501" }, { flag: "🇧🇯", code: "+229" },
  { flag: "🇧🇹", code: "+975" }, { flag: "🇧🇴", code: "+591" }, { flag: "🇧🇦", code: "+387" },
  { flag: "🇧🇼", code: "+267" }, { flag: "🇧🇷", code: "+55" }, { flag: "🇧🇳", code: "+673" },
  { flag: "🇧🇬", code: "+359" }, { flag: "🇧🇫", code: "+226" }, { flag: "🇧🇮", code: "+257" },
  { flag: "🇰🇭", code: "+855" }, { flag: "🇨🇲", code: "+237" }, { flag: "🇨🇻", code: "+238" },
  { flag: "🇨🇫", code: "+236" }, { flag: "🇹🇩", code: "+235" }, { flag: "🇨🇱", code: "+56" },
  { flag: "🇨🇳", code: "+86" }, { flag: "🇨🇴", code: "+57" }, { flag: "🇰🇲", code: "+269" },
  { flag: "🇨🇬", code: "+242" }, { flag: "🇨🇷", code: "+506" }, { flag: "🇭🇷", code: "+385" },
  { flag: "🇨🇺", code: "+53" }, { flag: "🇨🇾", code: "+357" }, { flag: "🇨🇿", code: "+420" },
  { flag: "🇩🇰", code: "+45" }, { flag: "🇩🇯", code: "+253" }, { flag: "🇩🇴", code: "+1-809" },
  { flag: "🇪🇨", code: "+593" }, { flag: "🇪🇬", code: "+20" }, { flag: "🇸🇻", code: "+503" },
  { flag: "🇬🇶", code: "+240" }, { flag: "🇪🇷", code: "+291" }, { flag: "🇪🇪", code: "+372" },
  { flag: "🇪🇹", code: "+251" }, { flag: "🇫🇯", code: "+679" }, { flag: "🇫🇮", code: "+358" },
  { flag: "🇫🇷", code: "+33" }, { flag: "🇬🇦", code: "+241" }, { flag: "🇬🇲", code: "+220" },
  { flag: "🇬🇪", code: "+995" }, { flag: "🇩🇪", code: "+49" }, { flag: "🇬🇭", code: "+233" },
  { flag: "🇬🇷", code: "+30" }, { flag: "🇬🇹", code: "+502" }, { flag: "🇬🇳", code: "+224" },
  { flag: "🇬🇼", code: "+245" }, { flag: "🇬🇾", code: "+592" }, { flag: "🇭🇹", code: "+509" },
  { flag: "🇭🇳", code: "+504" }, { flag: "🇭🇺", code: "+36" }, { flag: "🇮🇸", code: "+354" },
  { flag: "🇮🇩", code: "+62" }, { flag: "🇮🇷", code: "+98" }, { flag: "🇮🇶", code: "+964" },
  { flag: "🇮🇪", code: "+353" }, { flag: "🇮🇱", code: "+972" }, { flag: "🇮🇹", code: "+39" },
  { flag: "🇯🇲", code: "+1-876" }, { flag: "🇯🇵", code: "+81" }, { flag: "🇯🇴", code: "+962" },
  { flag: "🇰🇿", code: "+7" }, { flag: "🇰🇪", code: "+254" }, { flag: "🇰🇮", code: "+686" },
  { flag: "🇰🇼", code: "+965" }, { flag: "🇰🇬", code: "+996" }, { flag: "🇱🇦", code: "+856" },
  { flag: "🇱🇻", code: "+371" }, { flag: "🇱🇧", code: "+961" }, { flag: "🇱🇸", code: "+266" },
  { flag: "🇱🇷", code: "+231" }, { flag: "🇱🇾", code: "+218" }, { flag: "🇱🇮", code: "+423" },
  { flag: "🇱🇹", code: "+370" }, { flag: "🇱🇺", code: "+352" }, { flag: "🇲🇬", code: "+261" },
  { flag: "🇲🇼", code: "+265" }, { flag: "🇲🇾", code: "+60" }, { flag: "🇲🇻", code: "+960" },
  { flag: "🇲🇱", code: "+223" }, { flag: "🇲🇹", code: "+356" }, { flag: "🇲🇷", code: "+222" },
  { flag: "🇲🇺", code: "+230" }, { flag: "🇲🇽", code: "+52" }, { flag: "🇫🇲", code: "+691" },
  { flag: "🇲🇩", code: "+373" }, { flag: "🇲🇨", code: "+377" }, { flag: "🇲🇳", code: "+976" },
  { flag: "🇲🇪", code: "+382" }, { flag: "🇲🇦", code: "+212" }, { flag: "🇲🇿", code: "+258" },
  { flag: "🇳🇦", code: "+264" }, { flag: "🇳🇵", code: "+977" }, { flag: "🇳🇱", code: "+31" },
  { flag: "🇳🇿", code: "+64" }, { flag: "🇳🇮", code: "+505" }, { flag: "🇳🇪", code: "+227" },
  { flag: "🇳🇬", code: "+234" }, { flag: "🇳🇴", code: "+47" }, { flag: "🇴🇲", code: "+968" },
  { flag: "🇵🇰", code: "+92" }, { flag: "🇵🇼", code: "+680" }, { flag: "🇵🇦", code: "+507" },
  { flag: "🇵🇬", code: "+675" }, { flag: "🇵🇾", code: "+595" }, { flag: "🇵🇪", code: "+51" },
  { flag: "🇵🇭", code: "+63" }, { flag: "🇵🇱", code: "+48" }, { flag: "🇵🇹", code: "+351" },
  { flag: "🇶🇦", code: "+974" }, { flag: "🇷🇴", code: "+40" }, { flag: "🇷🇺", code: "+7" },
  { flag: "🇷🇼", code: "+250" }, { flag: "🇸🇦", code: "+966" }, { flag: "🇸🇳", code: "+221" },
  { flag: "🇷🇸", code: "+381" }, { flag: "🇸🇱", code: "+232" }, { flag: "🇸🇬", code: "+65" },
  { flag: "🇸🇰", code: "+421" }, { flag: "🇸🇮", code: "+386" }, { flag: "🇸🇧", code: "+677" },
  { flag: "🇸🇴", code: "+252" }, { flag: "🇿🇦", code: "+27" }, { flag: "🇰🇷", code: "+82" },
  { flag: "🇪🇸", code: "+34" }, { flag: "🇱🇰", code: "+94" }, { flag: "🇸🇩", code: "+249" },
  { flag: "🇸🇷", code: "+597" }, { flag: "🇸🇿", code: "+268" }, { flag: "🇸🇪", code: "+46" },
  { flag: "🇨🇭", code: "+41" }, { flag: "🇸🇾", code: "+963" }, { flag: "🇹🇼", code: "+886" },
  { flag: "🇹🇯", code: "+992" }, { flag: "🇹🇿", code: "+255" }, { flag: "🇹🇭", code: "+66" },
  { flag: "🇹🇬", code: "+228" }, { flag: "🇹🇴", code: "+676" }, { flag: "🇹🇹", code: "+1-868" },
  { flag: "🇹🇳", code: "+216" }, { flag: "🇹🇷", code: "+90" }, { flag: "🇹🇲", code: "+993" },
  { flag: "🇺🇬", code: "+256" }, { flag: "🇺🇦", code: "+380" }, { flag: "🇺🇾", code: "+598" },
  { flag: "🇺🇿", code: "+998" }, { flag: "🇻🇺", code: "+678" }, { flag: "🇻🇪", code: "+58" },
  { flag: "🇻🇳", code: "+84" }, { flag: "🇾🇪", code: "+967" }, { flag: "🇿🇲", code: "+260" },
  { flag: "🇿🇼", code: "+263" },
];

const REGEX = {
  name: /^[a-zA-Z\s]{2,}$/,
  phone: /^[0-9]{7,15}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

const Consultation = () => {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [whatsappUpdates, setWhatsappUpdates] = useState(true);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({ name: "", phone: "", email: "" });
  const dropdownRef = useRef(null);

  const validate = (field, value) => {
    if (!value) return "This field is required";
    if (!REGEX[field].test(value)) {
      if (field === "name") return "Enter a valid name (letters only)";
      if (field === "phone") return "Enter a valid phone number (digits only)";
      if (field === "email") return "Enter a valid email address";
    }
    return "";
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: validate(field, value) }));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <ConsultationStyleWrapper className="consultation-section">
      <div className="container">
        <ScrollAnimate>
        <div className="consultation-card">
          <div className="row">
            <div className="col-md-6">
              <div className="consultation-left">
                <ScrollAnimate delay={200}>
                <SectionTitle
                  title="Consultation"
                  subtitle="Request A free"
                  parentClass="corporate md-mb-0"
                  subtitleClass="text-white"
                  titleClass="text-white"
                  titleStyle={{ fontSize: "38px" }}
                />
                </ScrollAnimate>
                <div className="consultation-img">
                  <ScrollAnimate delay={230}>
                  <img src={outgoingCallImage} alt="Outgoing Call" />
                  </ScrollAnimate>
                </div>
                <ScrollAnimate delay={250}>
                <div className="consultation-text">
                  <p className="text-white wt-700 uppercase">
                    For Immediate Assistance
                  </p>
                  <h5 className="text-white wt-700">Call Us<br/>
+91 91500 52027</h5>
                  <h5 className="text-white wt-700 mb-0">
                    <a href="mailto:Contact@filinglab.com">Email us<br/>
Contact@filinglab.com
                    </a>
                  </h5>
                </div>
                </ScrollAnimate>
              </div>
            </div>
            <div className="col-md-6">
              <ScrollAnimate delay={300}>
              <div className="consultation-form">
                <h5 className="consultation-form-title" style={{color:"#ed740a"}}>Provide your details for a complete quote and professional consultation</h5>
                <form>
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                    {errors.name && <span className="field-error">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <div className="phone-input-group" ref={dropdownRef}>
                      <div className="country-code-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                        <span>{selectedCountry.flag}</span>
                        <span>{selectedCountry.code}</span>
                        <span className="cc-arrow">{dropdownOpen ? "▲" : "▼"}</span>
                      </div>
                      {dropdownOpen && (
                        <div className="country-code-list">
                          {COUNTRIES.map((c, i) => (
                            <div
                              key={i}
                              className={`cc-option${selectedCountry.code === c.code && selectedCountry.flag === c.flag ? " selected" : ""}`}
                              onMouseDown={() => { setSelectedCountry(c); setDropdownOpen(false); }}
                            >
                              {c.flag} {c.code}
                            </div>
                          ))}
                        </div>
                      )}
                      <input
                        type="tel"
                        placeholder="Enter Your Phone No."
                        className="phone-number-input"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                      />
                    </div>
                    {errors.phone && <span className="field-error">{errors.phone}</span>}
                  </div>
                  <div className="form-group">
                    <label>Enter Your Email *</label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>
                  <div className="whatsapp-toggle-row">
                    <div className="whatsapp-toggle-label">
                      <span>Receive updates on WhatsApp</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="#25D366">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div
                      className={`whatsapp-toggle${whatsappUpdates ? " active" : ""}`}
                      onClick={() => setWhatsappUpdates(!whatsappUpdates)}
                    >
                      <div className="whatsapp-toggle-thumb" />
                    </div>
                  </div>
                 
                  <button className="consultation-btn">
                    Get a Free Expert Consultation
                  </button>
                  <p className="consultation-disclaimer">By clicking, you agree to receive updates about our services as outlined in our <a href="/privacy-policy">Privacy Statement</a>.</p>
                </form>
              </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
        </ScrollAnimate>
      </div>
    </ConsultationStyleWrapper>
  );
};

export default Consultation;
