import { useState, useRef, useEffect } from "react";
import "./VAChatbot.css";
import chatbot from "../../../assets/images/chat-bot/chatbot-icon.png";

const PHASES = { ONE: 1, TWO: 2, THREE: 3 };

// Greeting lines to type out one by one
const GREETING_LINES = [
  { text: "Hi, I am Uma." },
  { text: "Welcome to FilingLab" },
  { text: "How may I assist you?" },
];

// Confirmation lines for Phase 3
const CONFIRMATION_LINES = [
  { text: "Thank you for sharing the details!" },
  { text: "Our FilingLab expert will contact you shortly to guide you further." },
  { text: "If urgent, you may also call us directly at:" },
  { text: "+91 91500 52027" },
  { text: "We look forward to assisting you." },
];

const VAChatbot = () => {
  const [open, setOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [phase, setPhase] = useState(PHASES.ONE);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [form, setForm] = useState({ name: "", mobile: "", email: "", description: "" });
  const [errors, setErrors] = useState({});
  // Typing animation state — Phase 1
  const [typedLines, setTypedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [showDots, setShowDots] = useState(false);
  const [greetingDone, setGreetingDone] = useState(false);

  // Typing animation state — Phase 3
  const [p3TypedLines, setP3TypedLines] = useState([]);
  const [p3CurrentLine, setP3CurrentLine] = useState("");
  const [p3LineIndex, setP3LineIndex] = useState(0);
  const [p3ShowDots, setP3ShowDots] = useState(false);
  const [p3Done, setP3Done] = useState(false);

  const typingTimersRef = useRef([]);
  const chatEndRef = useRef(null);
  const chatTopRef = useRef(null);
  const notificationSound = useRef(null);
  const hasAutoOpenedRef = useRef(false);
  const chatbotRef = useRef(null);

  // Reset and start typing animation whenever chatbot opens on phase 1
  useEffect(() => {
    if (!open || phase !== PHASES.ONE) return;
    typingTimersRef.current.forEach(clearTimeout);
    typingTimersRef.current = [];
    setTypedLines([]);
    setCurrentLine("");
    setLineIndex(0);
    setShowDots(false);
    setGreetingDone(false);
  }, [open, phase]);

  // Reset Phase 3 typing when entering phase 3
  useEffect(() => {
    if (phase !== PHASES.THREE) return;
    typingTimersRef.current.forEach(clearTimeout);
    typingTimersRef.current = [];
    setP3TypedLines([]);
    setP3CurrentLine("");
    setP3LineIndex(0);
    setP3ShowDots(false);
    setP3Done(false);
  }, [phase]);

  // Drive Phase 1 typewriter: show dots → type chars → move to next line
  useEffect(() => {
    if (!open || phase !== PHASES.ONE || greetingDone) return;
    if (lineIndex >= GREETING_LINES.length) {
      setGreetingDone(true);
      setShowDots(false);
      return;
    }

    const line = GREETING_LINES[lineIndex].text;
    let charIdx = 0;

    // 1. Show typing dots for 500ms
    const dotsTimer = setTimeout(() => {
      setShowDots(true);

      // 2. After dots shown, start typing characters
      const startTypingTimer = setTimeout(() => {
        setShowDots(false);

        const typeNext = () => {
          if (charIdx < line.length) {
            const captured = charIdx;
            charIdx++;
            const t = setTimeout(() => {
              setCurrentLine(line.slice(0, captured + 1));
              typeNext();
            }, 38);
            typingTimersRef.current.push(t);
          } else {
            // Line fully typed — commit it and move to next
            const commitTimer = setTimeout(() => {
              setTypedLines((prev) => [...prev, line]);
              setCurrentLine("");
              setLineIndex((prev) => prev + 1);
            }, 120);
            typingTimersRef.current.push(commitTimer);
          }
        };
        typeNext();
      }, 500);
      typingTimersRef.current.push(startTypingTimer);
    }, lineIndex === 0 ? 400 : 200);

    typingTimersRef.current.push(dotsTimer);

    return () => {
      typingTimersRef.current.forEach(clearTimeout);
      typingTimersRef.current = [];
    };
  }, [lineIndex, open, phase, greetingDone]);

  // Drive Phase 3 typewriter: same pattern as Phase 1
  useEffect(() => {
    if (phase !== PHASES.THREE || p3Done) return;
    if (p3LineIndex >= CONFIRMATION_LINES.length) {
      setP3Done(true);
      setP3ShowDots(false);
      return;
    }

    const line = CONFIRMATION_LINES[p3LineIndex].text;
    let charIdx = 0;

    const dotsTimer = setTimeout(() => {
      setP3ShowDots(true);

      const startTypingTimer = setTimeout(() => {
        setP3ShowDots(false);

        const typeNext = () => {
          if (charIdx < line.length) {
            const captured = charIdx;
            charIdx++;
            const t = setTimeout(() => {
              setP3CurrentLine(line.slice(0, captured + 1));
              typeNext();
            }, 38);
            typingTimersRef.current.push(t);
          } else {
            const commitTimer = setTimeout(() => {
              setP3TypedLines((prev) => [...prev, line]);
              setP3CurrentLine("");
              setP3LineIndex((prev) => prev + 1);
            }, 120);
            typingTimersRef.current.push(commitTimer);
          }
        };
        typeNext();
      }, 500);
      typingTimersRef.current.push(startTypingTimer);
    }, p3LineIndex === 0 ? 400 : 200);

    typingTimersRef.current.push(dotsTimer);

    return () => {
      typingTimersRef.current.forEach(clearTimeout);
      typingTimersRef.current = [];
    };
  }, [p3LineIndex, phase, p3Done]);

  // Close when clicking outside the chatbot widget
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        open &&
        chatbotRef.current &&
        !chatbotRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [open]);

  // Auto-open when BusinessChoose section enters viewport — resets every page load
  useEffect(() => {
    const target = document.getElementById("business-choose");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAutoOpenedRef.current) {
          hasAutoOpenedRef.current = true;
          setOpen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

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
    <div ref={chatbotRef}>
      {showTooltip && !open && (
        <div className="chatbot-tooltip">
          <button
            className="chatbot-tooltip-close"
            onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }}
            aria-label="Close"
          >✕</button>
          <p>Hi! I'm Uma</p>
          <p>Let me clear all your queries!</p>
        </div>
      )}
      <div className="chatbot-toggle" onClick={() => { setOpen(!open); setShowTooltip(false); }}>
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
                {/* Already-typed lines — each in its own bubble */}
                {typedLines.map((line, i) => (
                  <div key={i} className="bot-msg bot-msg-line">
                    <p>{line}</p>
                  </div>
                ))}

                {/* Currently typing line or dots indicator */}
                {!greetingDone && (
                  <div className="bot-msg bot-msg-line">
                    {showDots
                      ? <span className="typing-dots"><span /><span /><span /></span>
                      : <p>{currentLine}<span className="typing-cursor">|</span></p>
                    }
                  </div>
                )}

                {/* Options appear only after all lines typed */}
                {greetingDone && (
                  <>
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
              </>
            )}

            {/* ── PHASE 2: Contact Details Form ── */}
            {phase === PHASES.TWO && (
              <>
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
                {/* Already-typed confirmation lines */}
                {p3TypedLines.map((line, i) => (
                  <div key={i} className="bot-msg bot-msg-line">
                    <p>{line}</p>
                  </div>
                ))}

                {/* Currently typing line or dots */}
                {!p3Done && (
                  <div className="bot-msg bot-msg-line">
                    {p3ShowDots
                      ? <span className="typing-dots"><span /><span /><span /></span>
                      : <p>{p3CurrentLine}<span className="typing-cursor">|</span></p>
                    }
                  </div>
                )}

                {/* Start Over only after all lines typed */}
                {p3Done && (
                  <button className="chat-option" onClick={handleRestart}>Start Over</button>
                )}
              </>
            )}

            <div ref={chatEndRef} />
          </div>
        </div>
      )}

      <audio ref={notificationSound} src="/chatbot-notification.mp3" />
    </div>
  );
};

export default VAChatbot;

