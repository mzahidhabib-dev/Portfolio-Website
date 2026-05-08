/**
 * Chat Configuration
 *
 * Configuration is now loaded from .env file for security
 * Environment variables:
 * - VITE_CHAT_WEBHOOK_URL: Your n8n webhook endpoint
 * - VITE_CHAT_DEFAULT_EMAIL: Default email for chat requests
 */

export const CHAT_CONFIG = {
  API_BASE_URL:
    import.meta.env.VITE_CHAT_API_BASE_URL ||
    "http://localhost:3000",
  ASK_URL:
    import.meta.env.VITE_CHAT_ASK_URL ||
    "/chatbot/ask",
  STREAM_URL:
    import.meta.env.VITE_CHAT_STREAM_URL ||
    "/chatbot/ask/stream",
  DEFAULT_EMAIL: import.meta.env.VITE_CHAT_DEFAULT_EMAIL || "mohammadzahidhabib786@gmail.com",
};
