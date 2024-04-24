import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaSkype } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const navLinks = [
  { id: 1, href: "/", link: "home" },
  { id: 2, href: "#about", link: "about", scroll: false },
  { id: 3, href: "#skills", link: "skills", scroll: false },
  { id: 4, href: "#projects", link: "projects", scroll: false },

  { id: 5, href: "#contact", link: "contact", scroll: false },
];

export const socialLinks = [
  {
    id: 1,
    child: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/vytenis-kondrackis-2a1720253/",
    text: "Linkedin",
  },
  {
    id: 2,
    child: <FaGithub />,
    href: "https://github.com/Vytenis1337/vytenis-portfolio",
    text: "Github",
  },
  {
    id: 3,
    child: <FaSkype />,
    href: "https://join.skype.com/invite/DYEsy2wWGFKS",
    text: "Skype",
  },
  {
    id: 4,
    child: <BsFillPersonLinesFill />,
    href: "/Vytenis_Kondrackis_CV.pdf",
    download: true,
    text: "Resume",
  },
];
