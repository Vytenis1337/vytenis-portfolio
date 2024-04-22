import todolist from "../public/assets/projects/TodosProject.png";
import fetchApi from "../public/assets/projects/FetchProject.jpg";
import portfolioProject from "../public/assets/projects/PortProject.png";
import ecommerce from "../public/assets/projects/EcommerceProject.png";
import usersList from "../public/assets/projects/UsersListProject.png";
import mern from "../public/assets/projects/MernProject.png";
import nextScrapper from "../public/assets/projects/nextScrapper.png";
import pexelsScroll from "../public/assets/projects/pexelsScroll.png";
import ratepunk from "../public/assets/projects/RatepunkPicture.png";

export const projects = [
  {
    id: 8,
    title: "Pexels infinite scroll",
    imageSrc: pexelsScroll,
    github: "https://github.com/Vytenis1337/Pexels-Infinite-Scroll",

    text: " ReactJs TypeScript CSS ContextAPI Jest React-Testing-Library",
    live: "https://vytenis-infinite-scroll.netlify.app/",
  },
  {
    id: 9,
    title: "Ratepunk clone",
    imageSrc: ratepunk,
    github: "https://github.com/Vytenis1337/ratepunk",

    text: " NextJs TypeScript CSS JSONbin",
    live: "https://ratepunk-orpin.vercel.app/",
  },
  {
    id: 7,
    title: "IMDB movie scrapper",
    imageSrc: nextScrapper,
    github: " https://github.com/Vytenis1337/movie_scrapper",

    text: " NextJs TypeScript CSS TanStack-Query Axios ContextAPI Mongoose",
    live: "https://movie-scrapper-next-js-app.vercel.app/",
  },
  {
    id: 1,
    title: "MERN movie website",
    imageSrc: mern,
    github: " https://github.com/Vytenis1337/themoviedb",
    backEndGithub: "https://github.com/Vytenis1337/themoviedb-backEnd",
    text: " Javascript ReactJs TypeScript CSS Framer-Motion Axios ContextAPI Express Mongoose Bcrypt Cors",
    live: "https://vytenis-themoviedb.netlify.app/",
  },
  {
    id: 2,
    title: "Ecommerce app",
    imageSrc: ecommerce,
    github: "https://github.com/Vytenis1337/shop-app/tree/master",
    text: " Javascript ReactJs TypeScript CSS Framer-Motion Axios ContextAPI",
    live: "https://shop-app.netlify.app/",
  },

  {
    id: 3,
    title: "Users list",
    imageSrc: usersList,
    github: "https://github.com/Vytenis1337/user-list/tree/master",
    text: " Javascript ReactJs CSS Framer-Motion Axios ContextAPI",
    live: "https://user-list-add-edit.netlify.app",
  },
  {
    id: 4,
    title: "Portfolio website",
    imageSrc: portfolioProject,
    github: "https://github.com/Vytenis1337/vytenis-portfolio",
    text: " Javascript NextJs Tailwind Framer-Motion",
    styleTwo: "hidden",
  },
  {
    id: 5,
    title: "Fetch API",
    imageSrc: fetchApi,
    github: "https://github.com/Vytenis1337/fetch-api/tree/master",
    live: "https://vytenis-fetch-api.netlify.app/",

    text: " Javascript ReactJs Tailwind Axios ContextAPI",
  },
  {
    id: 6,
    title: "Todo list",
    imageSrc: todolist,
    github: "https://github.com/Vytenis1337/todo-app",
    live: "https://todowhat.netlify.app/",
    text: "Javascript ReactJs CSS Firebase",
  },
];
