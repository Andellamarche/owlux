export const mockChats = [
  { id: 1, title: "Potencia eléctrica recomendada", emoji: "🔥" },
  { id: 2, title: "Análisis de factura de luz", emoji: "🤖" },
  { id: 3, title: "Consulta sobre tarifas", emoji: "⚡" },
  { id: 4, title: "Recomendaciones de ahorro", emoji: "📌" },
];

export const mockMessages = [
  { id: 1, role: "user", content: "¿Cuál es la potencia eléctrica recomendada para mi hogar?" },
  { 
    id: 2, 
    role: "assistant", 
    content: "La potencia eléctrica recomendada depende de varios factores:\n\n• Tamaño de la vivienda\n• Electrodomésticos que uses\n• Número de personas\n\n¿Podrías compartirme tu factura de luz para un análisis más preciso?" 
  },
  { id: 3, role: "user", content: "Aquí está mi factura" },
  { id: 4, role: "assistant", content: "Gracias por compartir tu factura. He analizado los datos y estas son mis recomendaciones..." },
];

export const apiOptions = [
  { value: "openai-gpt4", label: "OpenAI GPT-4" },
  { value: "openai-gpt35", label: "OpenAI GPT-3.5" },
  { value: "claude", label: "Claude" },
  { value: "gemini", label: "Gemini" },
];
