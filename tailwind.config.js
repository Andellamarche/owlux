/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'sidebar-left': '2px 0px 14.4px 0px rgba(0, 0, 0, 0.10)',
        'sidebar-right': '-3px 0px 14.4px 0px rgba(0, 0, 0, 0.10)',
        'header': '0 1px 3px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
