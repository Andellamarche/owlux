/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'owlux-bg': '#FAFAFA',
        'owlux-sidebar': '#F5F5F5',
        'owlux-text': '#1A1A1A',
        'owlux-text-secondary': '#666666',
        'owlux-primary': '#2196F3',
        'owlux-border': '#E0E0E0',
        'owlux-user-msg': '#E3F2FD',
        'owlux-assistant-msg': '#F5F5F5',
        'owlux-subquery-bg': '#F8F9FA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
