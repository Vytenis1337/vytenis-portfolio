import comingSoon from '../public/assets/projects/comingSoonPexel.jpg';
import fetchApi from '../public/assets/projects/FetchAPI_project.png';
import portfolioProject from '../public/assets/projects/PortfolioProject.png';

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
    title: 'advanced calculator',
    imageSrc: comingSoon,
    // url: 'advanced-calculator',
    style: 'hidden',
    text: 'Javascript NextJs Redux Tailwind',
    styleTwo: 'hidden',
  },
];
