import todolist from '../public/assets/projects/TodosProject.png';
import fetchApi from '../public/assets/projects/FetchProject.jpg';
import portfolioProject from '../public/assets/projects/PortProject.png';
import ecommerce from '../public/assets/projects/EcommerceProject.png';
import usersList from '../public/assets/projects/UsersListProject.png';
import mern from '../public/assets/projects/MernProject.png'

export const projects = [
  {


    
    id: 1,
    title: 'MERN movie website',
    imageSrc: mern,
    github: ' https://github.com/Vytenis1337/themoviedb',
    backEndGithub: 'https://github.com/Vytenis1337/themoviedb-backEnd',
    text: ' Javascript ReactJs TypeScript CSS Framer-Motion Axios ContextAPI Express Mongoose Bcrypt Cors',
    live: 'https://vytenis-themoviedb.netlify.app/',
  },
  {



    id: 2,
    title: 'ecommerce website',
    imageSrc: ecommerce,
    github: 'https://github.com/Vytenis1337/shop-app/tree/master',
    text: ' Javascript ReactJs TypeScript CSS Framer-Motion Axios ContextAPI',
    live: 'https://shop-app.netlify.app/',
  },

  {
    id: 3,
    title: 'users list',
    imageSrc: usersList,
    github: 'https://github.com/Vytenis1337/user-list/tree/master',
    text: ' Javascript ReactJs CSS Framer-Motion Axios ContextAPI',
    live: 'https://user-list-add-edit.netlify.app',
  },
  {
    id: 4,
    title: 'portfolio website',
    imageSrc: portfolioProject,
    github: 'https://github.com/Vytenis1337/vytenis-portfolio',
    text: ' Javascript NextJs Tailwind Framer-Motion',
    styleTwo: 'hidden',
  },
  {
    id: 5,
    title: 'fetch API',
    imageSrc: fetchApi,
    github: 'https://github.com/Vytenis1337/fetch-api/tree/master',
    live: 'https://vytenis-fetch-api.netlify.app/',

    text: ' Javascript ReactJs Tailwind Axios ContextAPI',
  },
  {
    id: 6,
    title: 'todo list',
    imageSrc: todolist,
    github: 'https://github.com/Vytenis1337/todo-app',
    live: 'https://todowhat.netlify.app/',
    text: 'Javascript ReactJs CSS Firebase',
  },
];
