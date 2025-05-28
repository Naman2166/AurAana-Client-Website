/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',  // Primary orange
          500: '#F97316',  // Main orange
          600: '#EA580C',  // Darker orange
          700: '#C2410C',  // Deep orange
          800: '#9A3412',  // Dark orange
          900: '#7C2D12',  // Rich orange
        }
      },
       keyframes: {
        marquee: {
          '0%': { transform: 'translateX(30%)' },
          '50%': { transform: 'translateX(-30%)' },
          '100%': { transform: 'translateX(30%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
    }
  },
  plugins: [],
}

