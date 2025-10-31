import { create } from "zustand";
// import { ChatMessage } from "../types/index";
import { FAQ_RESPONSES } from "../lib/constant";

interface ChatState {
  messages: ChatMessage[];
  isOpen: boolean;
  isTyping: boolean;
  sendMessage: (text: string) => void;
  toggleChat: () => void;
  closeChat: () => void;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}
//@ts-ignore
export const useChatStore = create<ChatState>((set, get) => ({
  messages: [
    {
      id: "1",
      text: "Hello! I'm here to help you with your painting needs. You can ask me about our services, pricing, or any other questions.",
      sender: "bot",
      timestamp: new Date().toISOString(),
    },
  ],
  isOpen: false,
  isTyping: false,

  sendMessage: (text: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date().toISOString(),
    };

    set((state) => ({
      messages: [...state.messages, userMessage],
      isTyping: true,
    }));

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date().toISOString(),
      };

      set((state) => ({
        messages: [...state.messages, botMessage],
        isTyping: false,
      }));
    }, 1500);
  },

  toggleChat: () => {
    set((state) => ({ isOpen: !state.isOpen }));
  },

  closeChat: () => {
    set({ isOpen: false });
  },
}));

function getBotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();

  // Find matching FAQ response
  for (const [key, response] of Object.entries(FAQ_RESPONSES)) {
    if (
      message.includes(key) ||
      key.split(" ").some((word) => message.includes(word))
    ) {
      return response;
    }
  }

  // Default responses for common patterns
  if (message.includes("hello") || message.includes("hi")) {
    return "Hello! How can I help you with your painting project today?";
  }

  if (message.includes("thank")) {
    return "You're welcome! Is there anything else I can help you with?";
  }
  if (message.includes("pricing")) {
    return "We offer a range of painting services at different price points. Please contact our customer service at +91-9876543210 or email support@wallchi.com for more information.";
  }
  if (message.includes("cost")) {
    return "Minimal painting costs start from ₹50 per sq.ft. Please contact our customer service at +91-9876543210 or email support@wallchi.com for more information.";
  }
  if (message.includes("painting")) {
    return "We offer a range of painting services at different price points. Please contact our customer service at +91-9876543210 or email support@wallchi.com for more information.";
  }
  if (message.includes("services")) {
    return "We offer a range of painting services at different price points. Please contact our customer service at +91-9876543210 or email support@wallchi.com for more information.";
  }
  if (message.includes("wallchi")) {
    return "An one stop platform for all your painting needs. We offer various service options, including painting, interior design, and exterior design. Please contact our customer service at +91-9876543210 or email support@wallchi.com for more information.";
  }

  if (message.includes("bye")) {
    return "Goodbye! Feel free to reach out anytime if you need help with your painting project.";
  }

  // Default fallback
  return (
    "I understand you're asking about \"" +
    userMessage +
    '". For specific queries, please contact our customer service at +91-9876543210 or email support@wallchi.com. I can help with general questions about our services, pricing, and processes.'
  );
}
