/* =============================================================
   CHATBOT WIDGET — Sara Life Insurance
   Design: Floating button, scripted responses, quick replies
   ============================================================= */
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useLocation } from "wouter";

interface Message {
  id: number;
  from: "bot" | "user";
  text: string;
  quickReplies?: string[];
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    from: "bot",
    text: "Hi! I'm Sara's assistant. How can I help you today?",
    quickReplies: ["I need a quote", "Book a free call", "I have questions"],
  },
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [, navigate] = useLocation();
  const bottomRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(10);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const addMessage = (msg: Omit<Message, "id">) => {
    idRef.current += 1;
    setMessages((prev) => [...prev, { ...msg, id: idRef.current }]);
  };

  const handleQuickReply = (reply: string) => {
    addMessage({ from: "user", text: reply });
    setTimeout(() => {
      if (reply === "I need a quote") {
        addMessage({
          from: "bot",
          text: "Great! Getting a quote takes less than 2 minutes and it's completely free. Click below to get started:",
          quickReplies: ["→ Go to Quote Calculator"],
        });
      } else if (reply === "Book a free call") {
        addMessage({
          from: "bot",
          text: "Awesome! Sara's consultations are 100% free and done over Zoom — no office visit needed. Pick a time that works for you:",
          quickReplies: ["→ Book My Free Call"],
        });
      } else if (reply === "I have questions") {
        addMessage({
          from: "bot",
          text: "No problem! Check out our FAQ page for answers to the most common questions, or book a free call with Sara directly:",
          quickReplies: ["→ View FAQ", "→ Book a Call"],
        });
      } else if (reply === "→ Go to Quote Calculator") {
        navigate("/quote");
        setOpen(false);
      } else if (reply === "→ Book My Free Call" || reply === "→ Book a Call") {
        navigate("/book");
        setOpen(false);
      } else if (reply === "→ View FAQ") {
        navigate("/faq");
        setOpen(false);
      }
    }, 400);
  };

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    addMessage({ from: "user", text });
    setTimeout(() => {
      const lower = text.toLowerCase();
      if (lower.includes("quote") || lower.includes("price") || lower.includes("cost") || lower.includes("rate")) {
        addMessage({
          from: "bot",
          text: "I can help with that! Use our free quote calculator to get an instant estimate:",
          quickReplies: ["→ Go to Quote Calculator"],
        });
      } else if (lower.includes("book") || lower.includes("call") || lower.includes("schedule") || lower.includes("appointment") || lower.includes("zoom")) {
        addMessage({
          from: "bot",
          text: "Sara would love to connect! Book your free 20–30 minute Zoom consultation here:",
          quickReplies: ["→ Book My Free Call"],
        });
      } else {
        addMessage({
          from: "bot",
          text: "Great question! Sara will be happy to answer that on your free consultation call. It's quick, free, and done over Zoom.",
          quickReplies: ["→ Book a Call"],
        });
      }
    }, 500);
  };

  return (
    <>
      {/* Chat Window */}
      {open && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="bg-[#1a365d] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#d69e2e] flex items-center justify-center text-sm font-bold text-white">S</div>
              <div>
                <p className="text-white text-sm font-semibold">Sara's Assistant</p>
                <p className="text-blue-200 text-xs">Typically replies instantly</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-3 max-h-72 overflow-y-auto bg-gray-50">
            {messages.map((msg) => (
              <div key={msg.id}>
                <div className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "bg-[#1a365d] text-white rounded-br-sm"
                        : "bg-white text-gray-700 border border-gray-200 rounded-bl-sm shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
                {msg.quickReplies && (
                  <div className="flex flex-wrap gap-2 mt-2 ml-1">
                    {msg.quickReplies.map((qr) => (
                      <button
                        key={qr}
                        onClick={() => handleQuickReply(qr)}
                        className="text-xs bg-white border border-[#2b6cb0] text-[#2b6cb0] hover:bg-[#2b6cb0] hover:text-white px-3 py-1.5 rounded-full transition-colors font-medium"
                      >
                        {qr}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200 bg-white flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 text-sm px-3 py-2 border border-gray-200 rounded-full outline-none focus:border-[#2b6cb0] transition-colors"
            />
            <button
              onClick={handleSend}
              className="w-9 h-9 bg-[#d69e2e] rounded-full flex items-center justify-center hover:bg-[#b7851f] transition-colors flex-shrink-0"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <div className="chatbot-bubble">
        <button
          onClick={() => setOpen(!open)}
          className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
            open ? "bg-gray-600 rotate-0" : "bg-[#1a365d] hover:bg-[#2b6cb0] hover:scale-110"
          }`}
          aria-label="Open chat"
        >
          {open ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white" />
          )}
        </button>
        {!open && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#d69e2e] rounded-full border-2 border-white animate-pulse" />
        )}
      </div>
    </>
  );
}
