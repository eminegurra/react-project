"use client";
import { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ChatWidget() {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const lower = input.toLowerCase();
    const qa = {
      hello: "Hi! How can I help you today?",
      services: "We offer web development, UI/UX design, and SEO.",
      bye: "Goodbye! Have a great day!",
    };

    if (qa[lower]) {
      const botReply = { type: "bot", text: qa[lower] };
      setMessages((prev) => [...prev, botReply]);
    } else {
      setIsBotTyping(true);
      const botReply = await getOpenAIResponse(input);
      setIsBotTyping(false);
      setMessages((prev) => [...prev, { type: "bot", text: botReply }]);
    }
  };

  const getOpenAIResponse = async (message) => {
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      return data.reply || "Sorry, I couldn't generate a response.";
    } catch (error) {
      console.error("OpenAI Error:", error);
      return "Oops! Something went wrong.";
    }
  };

  if (!isMounted) return null;

  return (
    <div>
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition text-xl"
          aria-label="Open chat"
        >
          💬
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-[350px] h-[500px] bg-white shadow-xl rounded-lg overflow-hidden border border-gray-300 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white px-4 py-2 font-bold flex justify-between items-center">
            <span>AI Chat Assistant</span>
            <button onClick={toggleChat} className="text-white text-lg font-bold">
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`w-full flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`
                    inline-block px-3 py-2 rounded-lg text-sm
                    max-w-[80%] break-words
                    ${msg.type === "user" ? "bg-blue-100 text-right" : "bg-gray-100 text-left"}
                    hover:bg-opacity-90 transition
                  `}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isBotTyping && (
              <div className="w-full flex justify-start">
                <div className="inline-block px-3 py-2 rounded-lg bg-gray-100 text-left text-sm animate-pulse">
                  Typing...
                </div>
              </div>
            )}
          </div>

          {/* Input field */}
          <div className="flex border-t p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 p-2 text-sm border rounded-l"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-3 py-2 rounded-r hover:bg-blue-700 transition text-lg flex items-center justify-center"
              aria-label="Send"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
