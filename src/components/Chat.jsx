import { useState, useEffect, useRef } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Minimize2, Maximize2 } from 'lucide-react';
import { CHAT_CONFIG } from '../config/chatConfig';

/* global setTimeout, clearTimeout, fetch */

/**
 * Chat Component - AI Assistant for Portfolio
 *
 * Features:
 * - Fixed position chat toggle in bottom right corner
 * - Toast notification on page load announcing new feature
 * - Real-time chat with AI assistant
 * - Minimizable chat window
 * - Professional UI matching portfolio theme
 *
 * Backend Integration:
 * - Sends POST requests to n8n webhook
 * - Request format: { "email": "mohammadzahidhabib786@gmail.com", "message": "user message" }
 * - Expected response: { "status": "success", "reply": "AI response" }
 *
 * To configure:
 * 1. Replace 'https://your-n8n-webhook-url.com/webhook/chat' with your actual n8n webhook URL
 * 2. Ensure your NestJS backend accepts the request format above
 * 3. Make sure CORS is configured to allow requests from your domain
 */

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Zahid's AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(true);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Hide toast after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(CHAT_CONFIG.WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: CHAT_CONFIG.DEFAULT_EMAIL,
          message: inputMessage
        })
      });

      const data = await response.json();

      if (data.status === 'success') {
        const botMessage = {
          id: messages.length + 2,
          text: data.reply,
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error('Failed to get response');
      }
    } catch (_error) {
      const errorMessage = {
        id: messages.length + 2,
        text: "Sorry, I'm having trouble connecting right now. Please try again later or contact mohammadzahidhabib786@gmail.com directly.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <Motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 max-w-sm"
          >
            <div className="bg-[#2563EB] dark:bg-[#60A5FA] text-white px-4 py-3 rounded-lg shadow-lg border border-[#1D4ED8] dark:border-[#3B82F6]">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-medium">New chat feature added. Try it!</span>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      <Motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <Motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 bg-[#2563EB] dark:bg-[#60A5FA] text-white hover:shadow-xl"
        >
          <MessageCircle className="w-6 h-6" />
        </Motion.button>
      </Motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-[28rem] bg-white dark:bg-[#020617] rounded-2xl shadow-2xl border border-[#E2E8F0] dark:border-[#1E293B] z-50 overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-[#2563EB] dark:bg-[#60A5FA] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">AI Assistant</h3>
                  <p className="text-xs opacity-90">Zahid's Portfolio Chat</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="w-6 h-6 hover:bg-white/20 rounded transition-colors"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </Motion.button>
                <Motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="w-6 h-6 hover:bg-white/20 rounded transition-colors"
                >
                  <X className="w-4 h-4" />
                </Motion.button>
              </div>
            </div>

            {/* Chat Messages */}
            <AnimatePresence>
              {!isMinimized && (
                <Motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 overflow-hidden"
                >
                  <div className="h-80 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                      <Motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                            message.sender === 'user'
                              ? 'bg-[#2563EB] dark:bg-[#60A5FA] text-white'
                              : 'bg-[#F1F5F9] dark:bg-[#1E293B] text-[#0F172A] dark:text-[#E5E7EB]'
                          }`}
                        >
                          {message.text}
                        </div>
                      </Motion.div>
                    ))}

                    {isLoading && (
                      <Motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                      >
                        <div className="bg-[#F1F5F9] dark:bg-[#1E293B] px-3 py-2 rounded-lg">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-[#64748B] dark:bg-[#94A3B8] rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-[#64748B] dark:bg-[#94A3B8] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-[#64748B] dark:bg-[#94A3B8] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </Motion.div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>

                  {/* Chat Input */}
                  <div className="border-t border-[#E2E8F0] dark:border-[#1E293B] p-4">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="flex-1 px-3 py-2 text-sm bg-[#F8FAFC] dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#1E293B] rounded-lg text-[#0F172A] dark:text-[#E5E7EB] placeholder-[#64748B] dark:placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 dark:focus:ring-[#60A5FA]/30"
                        disabled={isLoading}
                      />
                      <Motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={sendMessage}
                        disabled={!inputMessage.trim() || isLoading}
                        className={`px-3 py-2 rounded-lg transition-colors ${
                          inputMessage.trim() && !isLoading
                            ? 'bg-[#2563EB] dark:bg-[#60A5FA] text-white hover:bg-[#1D4ED8] dark:hover:bg-[#3B82F6]'
                            : 'bg-[#E2E8F0] dark:bg-[#1E293B] text-[#64748B] dark:text-[#94A3B8] cursor-not-allowed'
                        }`}
                      >
                        <Send className="w-4 h-4" />
                      </Motion.button>
                    </div>
                  </div>
                </Motion.div>
              )}
            </AnimatePresence>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
}