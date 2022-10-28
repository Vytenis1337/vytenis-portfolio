import { FaGithub, FaLinkedin, FaEnvelope, FaSkype } from 'react-icons/fa';

export const contactIcons = [
  {
    id: 1,
    child: <FaEnvelope size={60} />,

    href: 'mailto:vytenis.kondrackis@gmail.com',
  },
  {
    id: 2,
    child: <FaLinkedin size={60} />,
    href: 'https://www.linkedin.com/in/vytenis-kondrackis-2a1720253/',
  },
  {
    id: 3,
    child: <FaSkype size={60} />,
    href: 'https://join.skype.com/invite/DYEsy2wWGFKS',
  },
  {
    id: 4,
    child: <FaGithub size={60} />,
    href: 'https://github.com/Vytenis1337/vytenis-portfolio',
  },
];
