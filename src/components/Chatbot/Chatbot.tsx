import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, X, Send, Phone } from "lucide-react";
import { FINCAN_WHATSAPP } from "./knowledgeBase";
import { COUNTRIES, DEFAULT_COUNTRY } from "./countries";
import {
  type ChatIntent,
  formatBotMessage,
  getBotResponse,
  getDynamicSuggestions,
} from "./getBotResponse";
import "./style.scss";
import chatbotLogo from "../../assets/Logo2.jpg";

type ChatStep = "name" | "phone" | "chat" | "ended";

interface ChatMessage {
  id: string;
  role: "bot" | "user";
  text: string;
}

function buildWhatsAppSummary(
  name: string,
  fullPhone: string,
  messages: ChatMessage[]
) {
  const chatLines = messages
    .filter((m) => m.role === "user" || m.role === "bot")
    .map((m) => `${m.role === "user" ? "User" : "FinCan Bot"}: ${m.text.replace(/<[^>]*>/g, "")}`)
    .join("\n");

  return `Hi FinCan,\n\nI'm ${name} (${fullPhone}).\n\nHere is my chat summary from your website:\n\n${chatLines}\n\nPlease assist me further. Thank you!`;
}

export default function Chatbot() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<ChatStep>("name");
  const [name, setName] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [countryCode, setCountryCode] = useState(DEFAULT_COUNTRY.dial);
  const [phone, setPhone] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [lastIntent, setLastIntent] = useState<ChatIntent>("general");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const fullPhone = `${countryCode} ${phone}`.trim();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, step]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, step]);

  const addBotMessage = (text: string, delay = 500) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: `${Date.now()}-bot`, role: "bot", text },
      ]);
      setIsTyping(false);
    }, delay);
  };

  const getTimeGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const openChat = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      addBotMessage(
        `${getTimeGreeting()}! Welcome to **FinCan** 👋\n\nI'm your virtual assistant — ask me about financing, services, consultations, or success stories.\n\nFirst, may I know your **name**?`,
        300
      );
    }
  };

  const closePanel = () => setIsOpen(false);

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = nameInput.trim();
    if (!trimmed) return;

    setName(trimmed);
    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}-user`, role: "user", text: trimmed },
    ]);
    setNameInput("");
    setStep("phone");
    addBotMessage(
      `Nice to meet you, **${trimmed}**! Please share your phone number so our team can follow up if needed.`,
      400
    );
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = phone.replace(/\D/g, "");
    if (trimmed.length < 7) return;

    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}-user`, role: "user", text: fullPhone },
    ]);
    setStep("chat");
    addBotMessage(
      `Thank you, **${name}**! How can I help you today? Ask me about our services, financing, team, consultations, or tap a suggestion below.`,
      500
    );
  };

  const sendUserMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || step !== "chat") return;

    const recentUserMessages = messages
      .filter((m) => m.role === "user")
      .slice(-3)
      .map((m) => m.text);

    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}-user`, role: "user", text: trimmed },
    ]);
    setInput("");

    const { text: reply, intent } = getBotResponse(trimmed, {
      userName: name,
      lastIntent,
      recentUserMessages,
    });
    setLastIntent(intent);
    addBotMessage(reply, 600);
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendUserMessage(input);
  };

  const handleEndChat = () => {
    setStep("ended");
    addBotMessage(
      "Your chat session has ended. Would you like to continue on **WhatsApp** with your full summary, or visit our **Contact Us** page?",
      200
    );
  };

  const handleWhatsApp = () => {
    const summary = buildWhatsAppSummary(name, fullPhone, messages);
    window.open(
      `https://wa.me/${FINCAN_WHATSAPP}?text=${encodeURIComponent(summary)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const resetChat = () => {
    setName("");
    setNameInput("");
    setPhone("");
    setCountryCode(DEFAULT_COUNTRY.dial);
    setMessages([]);
    setInput("");
    setStep("name");
    setLastIntent("general");
    addBotMessage(
      "Welcome back to FinCan! 👋\n\nMay I know your **name** to get started?",
      300
    );
  };

  const activeSuggestions = getDynamicSuggestions(lastIntent);

  return (
    <div className="fincan-chatbot">
      {isOpen && (
        <div className="fincan-chatbot__panel" role="dialog" aria-label="FinCan chat assistant">
          <header className="fincan-chatbot__header">
            <div className="fincan-chatbot__header-info">
              <div className="fincan-chatbot__avatar">
                <img src={chatbotLogo} alt="FinCan logo" />
              </div>
              <div>
                <h3>FinCan Assistant</h3>
                <span>Online · Offline help</span>
              </div>
            </div>
            <button
              type="button"
              className="fincan-chatbot__icon-btn"
              onClick={closePanel}
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </header>

          <div className="fincan-chatbot__messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`fincan-chatbot__bubble fincan-chatbot__bubble--${msg.role}`}
              >
                {msg.role === "bot" ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: formatBotMessage(msg.text),
                    }}
                  />
                ) : (
                  <p>{msg.text}</p>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="fincan-chatbot__bubble fincan-chatbot__bubble--bot fincan-chatbot__typing">
                <span />
                <span />
                <span />
              </div>
            )}

            {step === "chat" && !isTyping && (
              <div className="fincan-chatbot__suggestions">
                {activeSuggestions.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => sendUserMessage(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {step === "ended" && (
              <div className="fincan-chatbot__end-actions">
                <button
                  type="button"
                  className="fincan-chatbot__whatsapp-btn"
                  onClick={handleWhatsApp}
                >
                  <Phone size={16} />
                  Continue on WhatsApp
                </button>
                <button
                  type="button"
                  className="fincan-chatbot__contact-btn"
                  onClick={() => navigate("/contactus")}
                >
                  Go to Contact Us
                </button>
                <button
                  type="button"
                  className="fincan-chatbot__restart-btn"
                  onClick={resetChat}
                >
                  Start New Chat
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <footer className="fincan-chatbot__footer">
            {step === "name" && (
              <form onSubmit={handleNameSubmit} className="fincan-chatbot__form">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Enter your name..."
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  maxLength={80}
                />
                <button type="submit" disabled={!nameInput.trim()}>
                  <Send size={18} />
                </button>
              </form>
            )}

            {step === "phone" && (
              <form onSubmit={handlePhoneSubmit} className="fincan-chatbot__form fincan-chatbot__form--phone">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  aria-label="Country code"
                >
                  {COUNTRIES.map((c) => (
                    <option key={c.code} value={c.dial}>
                      {c.dial} {c.name}
                    </option>
                  ))}
                </select>
                <input
                  ref={inputRef}
                  type="tel"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={15}
                />
                <button type="submit" disabled={phone.replace(/\D/g, "").length < 7}>
                  <Send size={18} />
                </button>
              </form>
            )}

            {step === "chat" && (
              <div className="fincan-chatbot__chat-footer">
                <form onSubmit={handleChatSubmit} className="fincan-chatbot__form">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    maxLength={500}
                  />
                  <button type="submit" disabled={!input.trim()}>
                    <Send size={18} />
                  </button>
                </form>
                <button
                  type="button"
                  className="fincan-chatbot__end-btn"
                  onClick={handleEndChat}
                >
                  End Chat
                </button>
              </div>
            )}
          </footer>
        </div>
      )}

      <button
        type="button"
        className={`fincan-chatbot__fab ${isOpen ? "fincan-chatbot__fab--open" : ""}`}
        onClick={isOpen ? closePanel : openChat}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={26} /> : <MessageCircle size={26} />}
      </button>
    </div>
  );
}
