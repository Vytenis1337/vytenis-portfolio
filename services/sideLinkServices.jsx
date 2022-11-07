import { FaGithub, FaLinkedin, FaEnvelope, FaSkype } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export const sideLinks = [
  {
    id: 1,
    child: <FaLinkedin size={40} />,
    href: 'https://www.linkedin.com/in/vytenis-kondrackis-2a1720253/',
    text: 'Linkedin',
  },
  {
    id: 2,
    child: <FaSkype size={40} />,
    href: 'https://github.com/Vytenis1337/vytenis-portfolio',
    text: 'Skype',
  },
  {
    id: 3,
    child: <AiOutlineMail size={40} />,
    href: 'mailto:vytenis.kondrackis@gmail.com',
    text: 'Email',
  },
  {
    id: 4,
    child: <BsFillPersonLinesFill size={40} />,
    href: '/Vytenis_Kondrackis_CV.pdf',
    download: true,
    text: 'Resume',
  },
];
