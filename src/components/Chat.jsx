import { useState, useEffect, useRef } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Minimize2, Maximize2 } from 'lucide-react';
import { CHAT_CONFIG } from '../config/chatConfig';

/* global setTimeout, clearTimeout, fetch, console, performance, TextDecoder */

const CHAT_LOG_PREFIX = '[Portfolio Chat]';

const logChat = (step, details = {}) => {
  console.log(CHAT_LOG_PREFIX, step, {
    at: new Date().toISOString(),
    ...details
  });
};

const warnChat = (step, details = {}) => {
  console.warn(CHAT_LOG_PREFIX, step, {
    at: new Date().toISOString(),
    ...details
  });
};

const errorChat = (step, details = {}) => {
  console.error(CHAT_LOG_PREFIX, step, {
    at: new Date().toISOString(),
    ...details
  });
};

const getElapsedMs = (startTime) => Math.round(performance.now() - startTime);

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
  const renderCountRef = useRef(0);

  renderCountRef.current += 1;
  logChat('render', {
    renderCount: renderCountRef.current,
    isOpen,
    isMinimized,
    isLoading,
    showToast,
    messageCount: messages.length,
    inputLength: inputMessage.length
  });

  useEffect(() => {
    logChat('mounted', {
      apiBaseUrl: CHAT_CONFIG.API_BASE_URL,
      askUrl: CHAT_CONFIG.ASK_URL,
      streamUrl: CHAT_CONFIG.STREAM_URL,
      hasDefaultEmail: Boolean(CHAT_CONFIG.DEFAULT_EMAIL)
    });

    return () => {
      logChat('unmounted');
    };
  }, []);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    logChat('scroll requested', {
      hasMessagesEndRef: Boolean(messagesEndRef.current),
      messageCount: messages.length
    });
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    logChat('messages changed', {
      messageCount: messages.length,
      lastMessageSender: messages[messages.length - 1]?.sender,
      lastMessageLength: messages[messages.length - 1]?.text?.length || 0
    });
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    logChat('chat open state changed', { isOpen });
  }, [isOpen]);

  useEffect(() => {
    logChat('chat minimized state changed', { isMinimized });
  }, [isMinimized]);

  useEffect(() => {
    logChat('loading state changed', { isLoading });
  }, [isLoading]);

  // Hide toast after 5 seconds
  useEffect(() => {
    logChat('toast shown; hide timer started', { hideAfterMs: 5000 });
    const timer = setTimeout(() => {
      logChat('toast hide timer fired');
      setShowToast(false);
    }, 5000);
    return () => {
      logChat('toast hide timer cleared');
      clearTimeout(timer);
    };
  }, []);

  const sendMessage = async () => {
    const submitStart = performance.now();
    const trimmedMessage = inputMessage.trim();

    logChat('send requested', {
      inputLength: inputMessage.length,
      trimmedLength: trimmedMessage.length,
      isLoading
    });

    if (!trimmedMessage || isLoading) {
      warnChat('send blocked', {
        reason: !trimmedMessage ? 'empty message' : 'request already loading',
        elapsedMs: getElapsedMs(submitStart)
      });
      return;
    }

    const messageToSend = inputMessage;
    const userMessage = {
      id: messages.length + 1,
      text: messageToSend,
      sender: 'user',
      timestamp: new Date()
    };

    logChat('user message queued', {
      messageId: userMessage.id,
      messageLength: messageToSend.length
    });
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      logChat('stream attempt starting');
      const streamResult = await sendMessageWithStream(messageToSend);
      logChat('stream attempt finished', {
        ok: streamResult.ok,
        elapsedMs: getElapsedMs(submitStart),
        tokenCount: streamResult.tokenCount,
        streamedTextLength: streamResult.streamedTextLength,
        chunkCount: streamResult.chunkCount,
        firstTokenMs: streamResult.firstTokenMs
      });

      if (!streamResult.ok) {
        warnChat('stream returned no usable content; fallback starting');
        await sendMessageWithoutStream(messageToSend);
      }
    } catch (error) {
      errorChat('send failed', {
        status: error?.status,
        message: error?.message,
        elapsedMs: getElapsedMs(submitStart)
      });
      const errorText = getErrorText(error);
      pushBotMessage(errorText);
    } finally {
      logChat('send finished', {
        elapsedMs: getElapsedMs(submitStart)
      });
      setIsLoading(false);
    }
  };

  const pushBotMessage = (text) => {
    const botMessage = {
      id: Date.now(),
      text,
      sender: 'bot',
      timestamp: new Date()
    };
    logChat('bot message queued', {
      messageId: botMessage.id,
      textLength: text.length
    });
    setMessages(prev => [...prev, botMessage]);
  };

  const getApiUrl = (path) => {
    const url = `${CHAT_CONFIG.API_BASE_URL}${path}`;
    logChat('api url built', { path, url });
    return url;
  };

  const getErrorText = (error) => {
    if (error?.status === 429) {
      warnChat('rate limit error text selected', { status: error.status });
      return 'Too many requests right now. Please wait 1 minute and try again.';
    }
    warnChat('generic error text selected', {
      status: error?.status,
      message: error?.message
    });
    return "Sorry, I'm having trouble connecting right now. Please try again later or contact mohammadzahidhabib786@gmail.com directly.";
  };

  const sendMessageWithStream = async (message) => {
    const streamStart = performance.now();
    const streamUrl = getApiUrl(CHAT_CONFIG.STREAM_URL);

    logChat('stream request sending', {
      url: streamUrl,
      method: 'POST',
      messageLength: message.length,
      hasEmail: Boolean(CHAT_CONFIG.DEFAULT_EMAIL)
    });

    const response = await fetch(streamUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: CHAT_CONFIG.DEFAULT_EMAIL,
        message
      })
    });

    logChat('stream response received', {
      status: response.status,
      ok: response.ok,
      elapsedMs: getElapsedMs(streamStart),
      hasBody: Boolean(response.body),
      contentType: response.headers.get('content-type')
    });

    if (!response.ok) {
      const error = new Error('Streaming request failed');
      error.status = response.status;
      throw error;
    }

    if (!response.body) {
      warnChat('stream response has no body', {
        elapsedMs: getElapsedMs(streamStart)
      });
      return { ok: false };
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');

    let buffer = '';
    let botMessageId = null;
    let streamedText = '';
    let chunkCount = 0;
    let tokenCount = 0;
    let firstTokenMs = null;

    const appendToken = (token) => {
      if (!botMessageId) {
        botMessageId = Date.now();
        logChat('first stream token rendered', {
          botMessageId,
          tokenLength: token.length,
          firstTokenMs
        });
        setMessages(prev => [
          ...prev,
          { id: botMessageId, text: token, sender: 'bot', timestamp: new Date() }
        ]);
        return;
      }

      logChat('stream token appended to existing bot message', {
        botMessageId,
        tokenLength: token.length,
        streamedTextLength: streamedText.length
      });
      setMessages(prev =>
        prev.map(msg =>
          msg.id === botMessageId ? { ...msg, text: msg.text + token } : msg
        )
      );
    };

    let doneReceived = false;
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        logChat('stream reader done', {
          elapsedMs: getElapsedMs(streamStart),
          chunkCount,
          tokenCount,
          streamedTextLength: streamedText.length,
          doneReceived,
          remainingBufferLength: buffer.length
        });
        break;
      }

      chunkCount += 1;
      buffer += decoder.decode(value, { stream: true });
      logChat('stream raw chunk received', {
        chunkCount,
        byteLength: value?.byteLength || 0,
        bufferLength: buffer.length,
        elapsedMs: getElapsedMs(streamStart)
      });
      const chunks = buffer.split('\n\n');
      buffer = chunks.pop() || '';

      for (const chunk of chunks) {
        const lines = chunk.split('\n');
        let eventName = 'message';
        let payload = '';

        for (const line of lines) {
          if (line.startsWith('event:')) {
            eventName = line.replace('event:', '').trim();
          } else if (line.startsWith('data:')) {
            payload += line.replace('data:', '').trim();
          }
        }

        logChat('stream event parsed', {
          eventName,
          payloadLength: payload.length,
          chunkLength: chunk.length
        });

        if (!payload) {
          warnChat('stream event skipped because payload is empty', { eventName });
          continue;
        }

        const parsed = JSON.parse(payload);
        if (eventName === 'done') {
          doneReceived = true;
          logChat('stream done event received', {
            elapsedMs: getElapsedMs(streamStart),
            hasReply: Boolean(parsed?.reply),
            streamedTextLength: streamedText.length
          });
          if (!streamedText && parsed?.reply) {
            firstTokenMs = firstTokenMs ?? getElapsedMs(streamStart);
            appendToken(parsed.reply);
          }
          continue;
        }

        if (parsed?.token) {
          tokenCount += 1;
          firstTokenMs = firstTokenMs ?? getElapsedMs(streamStart);
          streamedText += parsed.token;
          logChat('stream token received', {
            tokenCount,
            tokenLength: parsed.token.length,
            streamedTextLength: streamedText.length,
            elapsedMs: getElapsedMs(streamStart),
            firstTokenMs
          });
          appendToken(parsed.token);
        } else {
          warnChat('stream event had no token', {
            eventName,
            parsedKeys: Object.keys(parsed || {})
          });
        }
      }
    }

    const result = {
      ok: doneReceived || streamedText.length > 0,
      doneReceived,
      tokenCount,
      streamedTextLength: streamedText.length,
      chunkCount,
      firstTokenMs,
      elapsedMs: getElapsedMs(streamStart)
    };

    logChat('stream result', result);
    return result;
  };

  const sendMessageWithoutStream = async (message) => {
    const requestStart = performance.now();
    const askUrl = getApiUrl(CHAT_CONFIG.ASK_URL);

    logChat('fallback request sending', {
      url: askUrl,
      method: 'POST',
      messageLength: message.length,
      hasEmail: Boolean(CHAT_CONFIG.DEFAULT_EMAIL)
    });

    const response = await fetch(askUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: CHAT_CONFIG.DEFAULT_EMAIL,
        message
      })
    });

    logChat('fallback response received', {
      status: response.status,
      ok: response.ok,
      elapsedMs: getElapsedMs(requestStart),
      contentType: response.headers.get('content-type')
    });

    if (!response.ok) {
      const error = new Error('Standard request failed');
      error.status = response.status;
      throw error;
    }

    const data = await response.json();
    logChat('fallback json parsed', {
      elapsedMs: getElapsedMs(requestStart),
      success: data?.success,
      hasReply: Boolean(data?.reply),
      replyLength: data?.reply?.length || 0
    });

    if (!data?.success || !data?.reply) {
      throw new Error('Failed to get response');
    }

    pushBotMessage(data.reply);
  };

  const handleKeyPress = (e) => {
    logChat('key pressed in chat input', {
      key: e.key,
      shiftKey: e.shiftKey,
      inputLength: inputMessage.length
    });

    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      logChat('enter submit triggered');
      sendMessage();
    }
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
    logChat('input changed', {
      inputLength: e.target.value.length,
      isLoading
    });
  };

  const toggleChatOpen = () => {
    const nextIsOpen = !isOpen;
    logChat('toggle button clicked', {
      previousIsOpen: isOpen,
      nextIsOpen
    });
    setIsOpen(nextIsOpen);
  };

  const toggleMinimized = () => {
    const nextIsMinimized = !isMinimized;
    logChat('minimize button clicked', {
      previousIsMinimized: isMinimized,
      nextIsMinimized
    });
    setIsMinimized(nextIsMinimized);
  };

  const closeChat = () => {
    logChat('close button clicked');
    setIsOpen(false);
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
          onClick={toggleChatOpen}
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
                  onClick={toggleMinimized}
                  className="w-6 h-6 hover:bg-white/20 rounded transition-colors"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </Motion.button>
                <Motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeChat}
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
                          className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${message.sender === 'user'
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
                        onChange={handleInputChange}
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
                        className={`px-3 py-2 rounded-lg transition-colors ${inputMessage.trim() && !isLoading
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
