/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(270deg, rgba(0, 158, 255, 0.25) 0%, rgba(0, 158, 255, 0.495) 24.5%, rgba(0, 158, 255, 0.75) 50%, #009EFF 100%)',
      },
      fontFamily: {
        'plus-jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      spacing: {
        '70': '280px',
      },
      colors: {
        'custom-blue': '#1e90ff',
      },
      borderRadius: {
        '8px': '8px',
        'bl-lg': '15px',
        'tl-lg': '15px',
      },
      clipPath: {
        'custom': 'polygon(90% 0%, 100% 50%, 90% 100%, 0% 100%, 0 48%, 0% 0%)',
        'custom-left': 'polygon(10% 0%, 0% 50%, 10% 100%, 100% 100%, 100% 48%, 100% 0%)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-custom': {
          '-webkit-clip-path': 'polygon(90% 0%, 100% 50%, 90% 100%, 0% 100%, 0 48%, 0% 0%)',
          'clip-path': 'polygon(90% 0%, 100% 50%, 90% 100%, 0% 100%, 0 48%, 0% 0%)',
        },
        '.clip-custom-left': {
          '-webkit-clip-path': 'polygon(10% 0%, 0% 50%, 10% 100%, 100% 100%, 100% 48%, 100% 0%)',
          'clip-path': 'polygon(10% 0%, 0% 50%, 10% 100%, 100% 100%, 100% 48%, 100% 0%)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
