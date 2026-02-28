import { useState, useRef, useEffect } from "react";
import "./VAChatbot.css";
import chatbot from "../../../assets/images/chat-bot/chatbot-icon.png";

const PHASES = { ONE: 1, TWO: 2, THREE: 3 };

const VAChatbot = () => {
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState(PHASES.ONE);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [form, setForm] = useState({ name: "", mobile: "", email: "", description: "" });
  const [errors, setErrors] = useState({});
  const chatEndRef = useRef(null);
  const chatTopRef = useRef(null);
  const notificationSound = useRef(null);

  useEffect(() => {
    chatTopRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [phase, open]);

  const playSound = () => {
    if (notificationSound.current) {
      notificationSound.current.currentTime = 0;
      notificationSound.current.play().catch(() => {});
    }
  };

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    playSound();
    setPhase(PHASES.TWO);
  };

  const validateForm = () => {
    const e = {};
    if (!form.name.trim() || !/^[a-zA-Z\s]{2,}$/.test(form.name)) e.name = "Enter a valid full name";
    if (!form.mobile.trim() || !/^[0-9]{10,15}$/.test(form.mobile)) e.mobile = "Enter a valid mobile number";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address";
    if (!form.description.trim()) e.description = "Please describe your requirement";
    return e;
  };

  const handleSubmit = () => {
    const e = validateForm();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setErrors({});
    // TODO: send { selectedTopic, ...form } to your backend here
    playSound();
    setPhase(PHASES.THREE);
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleRestart = () => {
    setPhase(PHASES.ONE);
    setSelectedTopic("");
    setForm({ name: "", mobile: "", email: "", description: "" });
    setErrors({});
  };

  return (
    <>
      <div className="chatbot-toggle" onClick={() => setOpen(!open)}>
        <img src={chatbot} alt="Chatbot" />
      </div>

      {open && (
        <div className="chatbot">
          {/* Header */}
          <div className="chatbot-header">
            <img src={chatbot} alt="Uma" />
            <div className="chatbot-header-info">
              <span className="chatbot-name">Uma</span>
              <span className="chatbot-status">FilingLab Assistant</span>
            </div>
            <button className="chatbot-close" onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* Body */}
          <div className="chatbot-body">
            <div ref={chatTopRef} />

            {/* ── PHASE 1: Greeting + Options ── */}
            {phase === PHASES.ONE && (
              <>
                <div className="bot-msg">
                  <p>Hi, I am <strong>Uma</strong>.</p>
                  <p>Welcome to <strong>FilingLab</strong> 👋</p>
                  <p>How may I assist you?</p>
                </div>
                <div className="bot-msg">
                  <p>Please select your purpose:</p>
                </div>
                {["Start a New Business", "GST / Tax Filing", "ROC / Annual Compliance", "Licences & Registrations", "Other Enquiry"].map((opt) => (
                  <button key={opt} className="chat-option" onClick={() => handleTopicClick(opt)}>
                    {opt}
                  </button>
                ))}
              </>
            )}

            {/* ── PHASE 2: Contact Details Form ── */}
            {phase === PHASES.TWO && (
              <>
                <button className="chat-back-btn" onClick={() => setPhase(PHASES.ONE)}>
                  ← Back
                </button>
                <div className="user-msg">{selectedTopic}</div>
                <div className="bot-msg">
                  <p>Thank you! To assist you better, please share:</p>
                </div>
                <div className="chat-form">
                  <label>Your Full Name</label>
                  <input type="text" placeholder="Enter your full name" value={form.name} onChange={(e) => handleChange("name", e.target.value)} />
                  {errors.name && <span className="chat-error">{errors.name}</span>}

                  <label>Mobile Number</label>
                  <input type="tel" placeholder="Enter your mobile number" value={form.mobile} onChange={(e) => handleChange("mobile", e.target.value)} />
                  {errors.mobile && <span className="chat-error">{errors.mobile}</span>}

                  <label>Email Address</label>
                  <input type="email" placeholder="Enter your email address" value={form.email} onChange={(e) => handleChange("email", e.target.value)} />
                  {errors.email && <span className="chat-error">{errors.email}</span>}

                  <label>Brief Description</label>
                  <textarea placeholder="Briefly describe your requirement" rows={3} value={form.description} onChange={(e) => handleChange("description", e.target.value)} />
                  {errors.description && <span className="chat-error">{errors.description}</span>}

                  <button className="chat-submit-btn" onClick={handleSubmit}>Submit</button>
                </div>
              </>
            )}

            {/* ── PHASE 3: Confirmation ── */}
            {phase === PHASES.THREE && (
              <>
                <div className="bot-msg">
                  <p>✅ <strong>Thank you for sharing the details!</strong></p>
                  <p>Our FilingLab expert will contact you shortly to guide you further.</p>
                  <p>If urgent, you may also call us directly at:</p>
                  <p className="chat-phone">📞 <strong>+91 91500 52027</strong></p>
                  <p>We look forward to assisting you.</p>
                </div>
                <button className="chat-option" onClick={handleRestart}>Start Over</button>
              </>
            )}

            <div ref={chatEndRef} />
          </div>
        </div>
      )}

      <audio ref={notificationSound} src="/chatbot-notification.mp3" />
    </>
  );
};

export default VAChatbot;

