import { useState } from 'react';

export const useChat = (initialMessages = []) => {
  const [messages, setMessages] = useState(initialMessages);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (content) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: content.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate assistant response
    setIsTyping(true);
    setTimeout(() => {
      const assistantMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: 'Esta es una respuesta simulada del asistente. En una implementación real, aquí se conectaría con la API seleccionada.',
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return {
    messages,
    isTyping,
    sendMessage,
  };
};
