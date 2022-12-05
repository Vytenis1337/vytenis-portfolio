import todolist from '../public/assets/projects/TodosProject.png';
import fetchApi from '../public/assets/projects/FetchProject.jpg';
import portfolioProject from '../public/assets/projects/PortProject.png';

export const projects = [
  {
    id: 1,
    title: 'portfolio website',
    imageSrc: portfolioProject,
    github: 'https://github.com/Vytenis1337/vytenis-portfolio',
    text: ' Javascript NextJs Tailwind Framer-Motion',
    styleTwo: 'hidden',
  },
  {
    id: 2,
    title: 'fetch API',
    imageSrc: fetchApi,
    github: 'https://github.com/Vytenis1337/fetch-api/tree/master',
    live: 'https://vytenis-fetch-api.netlify.app/',

    text: ' Javascript ReactJs Tailwind Axios ContextAPI',
  },
  {
    id: 3,
    title: 'todo list',
    imageSrc: todolist,
    github: 'https://github.com/Vytenis1337/todo-app',
    live: 'https://todowhat.netlify.app/',
    text: 'Javascript ReactJs CSS Firebase',
  },
];
