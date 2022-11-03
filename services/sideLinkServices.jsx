import { FaGithub, FaLinkedin, FaEnvelope, FaSkype } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export const sideLinks = [
  {
    id: 1,
    child: <FaLinkedin size={35} />,
    href: 'https://linkedin.com',
    text: 'Linkedin',
  },
  {
    id: 2,
    child: <FaSkype size={35} />,
    href: 'https://github.com/Vytenis1337',
    text: 'Skype',
  },
  {
    id: 3,
    child: <AiOutlineMail size={35} />,
    href: 'mailto:vytenis.kondrackis@gmail.com',
    text: 'Email',
  },
  {
    id: 4,
    child: <BsFillPersonLinesFill size={35} />,
    href: '/Vytenis_Kondrackis_CV_2022.pdf',
    download: true,
    text: 'Resume',
  },
];
