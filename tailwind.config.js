module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },

    extend: {
      colors:{
       neu9: '#062630',
       neu7: '#385159 ',
       neu2: '#E6E1DF',
       neu1: '#FAF5F3',
       lightsal5: '#FEA36F', 
       lightsal1: '#FFE2D1', 
       lightsal50: '#FFF5EF', 
      },

     
    }, 


      fontFamily:{
        sans: [
          'Martian Mono', 'sans-serif'
        ],
        serif: [
          'Inter', 'sans-serif'
        ],
      },

       

   extend: {
      backgroundImage: {
        customgradient1: 'linear-gradient(107deg, #FF9A60 -11.37%, #062630 61.84%)',
        customgradient2: 'linear-gradient(90deg, #FFE2D1 0%, #FFF5EF 100%)',
      },
      colors:{
       neu9: '#062630',
       neu7: '#385159 ',
       neu2: '#E6E1DF',
       neu1: '#FAF5F3',
       lightsal5: '#FEA36F', 
       lightsal1: '#FFE2D1', 
       lightsal50: '#FFF5EF', 
      },

      
    },

    backgroundImage: () => ({
        vector: "url('../images/bg-pattern.svg')",
        glow: "url('../images/glow-bg.svg')",
      }),
    
   
  },
  plugins: [],
}

