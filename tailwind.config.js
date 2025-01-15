/** @type {import('tailwindcss').Config} */  
export default {  
  content: [  
    "./index.html",  
    "./src/**/*.{js,ts,jsx,tsx}",  
  ],  

  theme: {  
    screens: {  
      mobileSm: "390px",  
      mobileMedium: "428px",  
      md: "768px", 
      bgScreen: "1440px",  
    },  

    fontFamily: {  
      roboto: "Roboto Mono, monospace",  
      poppins: "Poppins, serif",  
    },  
    extend: {  
    
    },  
  },  
  plugins: [],  
}