/**
 * Chat Configuration
 *
 * Configuration is now loaded from .env file for security
 * Environment variables:
 * - VITE_CHAT_WEBHOOK_URL: Your n8n webhook endpoint
 * - VITE_CHAT_DEFAULT_EMAIL: Default email for chat requests
 */

export const CHAT_CONFIG = {
  WEBHOOK_URL:
    import.meta.env.VITE_CHAT_WEBHOOK_URL ||
    "http://localhost:5678/webhook-test/synapse-chat",
  DEFAULT_EMAIL: import.meta.env.VITE_CHAT_DEFAULT_EMAIL || "mohammadzahidhabib786@gmail.com",
};
