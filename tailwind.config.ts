import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textLight: "#E7EDF8",
        lightGray: "#333333",
        darkGray: "#262626",
        accentColor: "#2398C3",
      },
      backgroundImage: {
        parallax: "url(../public/about-large.jpg)",
        parallaxSm: "url(../public/about-small.jpg)",
        sectionAboutImg: "url(../public/about-section-image.jpg)",
        sectionAboutImgSm: "url(../public/about-section-image-small.jpg)",
        sectionTrainersMain: "url(../public/trainer-bg-large.jpg)",
        sectionTrainersMainSm: "url(../public/trainer-bg-small.jpg)",
        sectionPricesMainSm: "url(../public/prices-main-small.jpg)",
        sectionPricesMain: "url(../public/prices-main-large.jpg)",
        pricesSection: "url(../public/prices-section-large.jpg)",
        pricesSectionSm: "url(../public/prices-section-small.jpg)",
      },
    },
  },
  plugins: [],
};
export default config;
