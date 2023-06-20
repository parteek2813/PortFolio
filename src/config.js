import makeMyTrip from "./assets/projects/make-my-trip.png";
import stockM from "./assets/projects/stock-m.png";
import ytLite from "./assets/projects/yt-lite.png";
import foodvilla from "./assets/projects/foodvilla.png";

export const projects = [
  {
    title: "Make My Trip",
    description: "Book Flights, Hotels and Train Tickets",
    techStack: [
      "ReactJS",
      "Redux-Toolkit",
      "CSS(SASS)",
      "Firebase",
      "Express",
      "MongoDB",
    ],
    imgUrl: makeMyTrip,
    sourceUrl: "",
    demoUrl: "",
    background: "linear-gradient(93deg,#065af3,#53b2fe)",
  },
  {
    itle: "StockM.",
    description:
      "Stock Market Dashboard. Search symbol and see the Stock Price",
    techStack: ["HTML", "CSS(SASS)", "JavaScript"],
    imgUrl: stockM,
    sourceUrl: "",
    demoUrl: "",
    background:
      "linear-gradient(to bottom right, rgb(255, 127, 0), rgb(255, 175, 0) 90%)",
  },
  {
    title: "FoodVilla",
    description: "Food Ordering App",
    techStack: ["ReactJS", "Redux-Toolkit", "Tailwind", "Swiggy API"],
    imgUrl: foodvilla,
    sourceUrl: "",
    demoUrl: "",
    background: "linear-gradient(to bottom right, #ff5722, #ff5740 90%)",
  },
  {
    title: "YouTube Lite",
    description: "Search and play any video",
    techStack: ["ReactJS", "Tailwind", "Rapid API"],
    imgUrl: ytLite,
    sourceUrl: "",
    demoUrl: "",
    background: "linear-gradient(to bottom right, #f00, #ff4500 90%)",
  },
];
