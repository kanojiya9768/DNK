/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary-color' : "rgb(20, 97, 143)",
        'grey-color' : "rgb(245, 247, 249)"
      },
      fontFamily : {
        lato : ['var(--font-lato),sans-serif']
      },
      backgroundImage : {
        "MainBanner" : 'url("/images/banner.jpg")',
        "DiscountBanner" : 'url("/images/discount-banner.jpeg")'
      }
    },
    
  },
  plugins: [],
};
