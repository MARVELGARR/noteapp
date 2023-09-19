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
      colors: {        
        check1: 'var(--check1-bg)',
        check2: 'var(--check2-bg)',   
      },
      backgroundColor: {
        skin:{
          background: 'var(--background)',
          cancelled : 'var(--cancelled-text-muted)',
        }
      },

    },
  },
  plugins: [],
}

