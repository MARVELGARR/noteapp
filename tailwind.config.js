/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin:{
          main: 'var(--main-text-base)',
          canclled: 'var(--main-text-base)',
          active: 'var(--color-primary)',
          unactive: 'var(--non-active-text)',          
        }
      },
      backgroundColor: {
        skin:{
          check: 'var(check-bg)',
          background: 'var(--background)'
        }
      }
    },
  },
  plugins: [],
}

