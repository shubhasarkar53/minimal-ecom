/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shake:  {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },  // hand rotates right
          '20%': { transform: 'rotate(-8deg)' },  // hand rotates left
          '30%': { transform: 'rotate(14deg)' },  // hand rotates right
          '40%': { transform: 'rotate(-4deg)' },  // hand rotates left
          '50%': { transform: 'rotate(10deg)' },  // hand rotates right
          '60%': { transform: 'rotate(0deg)' },   // hand comes to original position
          '100%': { transform: 'rotate(0deg)' },  // stays in original position
        },
      },
      animation: {
        shake: 'shake 1.5s ease-in-out infinite',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      sub:'1.156rem',
      md:"1.625rem",
      "2md":'1.875rem',
      xl: '2.875rem',
      '5xl': '3.052rem',
      
    }
    
  },
  plugins: [],
}



