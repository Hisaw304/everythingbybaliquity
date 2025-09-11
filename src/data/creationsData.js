// src/data/creationsData.js
const creations = [
  {
    title: "Cupcakes",
    image: "/images/cupcake.png",
    link: "/cupcakes",
    // prefer Tailwind tokens like bg-peach-100 if added to tailwind.config.js
    bgClass: "card-bg-1", // controlled in styles.css below
  },
  {
    title: "Peanut Cookies",
    image: "/images/peanut-cookies.png",
    link: "/cookies",
    bgClass: "card-bg-2",
  },
  {
    title: "Doughnuts",
    image: "/images/doughnuts.png",
    link: "/doughnuts",
    bgClass: "card-bg-3",
  },
  {
    title: "Pastries",
    image: "/images/pastries.png",
    link: "/pastries",
    bgClass: "card-bg-4",
  },
];

export default creations;
