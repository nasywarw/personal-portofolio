/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          bg: '#F7F6F2',
          surface: '#EFEEE8',
          card: '#FFFFFF',
          border: '#E3E0D8',
          text: '#252522',
          muted: '#85847D',
          accent: '#8C7965',
          'accent-hover': '#786653',
          'accent-soft': '#F2EFEB',
          'accent-light': '#FAF8F5',
        }
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.04em',
        relaxed: '0.02em',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(37, 37, 34, 0.04), 0 1px 2px rgba(37, 37, 34, 0.02)',
        'elevated': '0 4px 20px -2px rgba(37, 37, 34, 0.06), 0 2px 6px -1px rgba(37, 37, 34, 0.03)',
      }
    },
  },
  plugins: [],
}
