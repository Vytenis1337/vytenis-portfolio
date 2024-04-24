import { FaLinkedin, FaEnvelope, FaGithub, FaSkype } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const sideLinks = [
  {
    id: 1,
    child: <FaLinkedin size={40} />,
    href: "https://www.linkedin.com/in/vytenis-kondrackis-2a1720253/",
    text: "Linkedin",
  },
  {
    id: 2,
    child: <FaSkype size={40} />,
    href: "https://github.com/Vytenis1337/vytenis-portfolio",
    text: "Skype",
  },
  {
    id: 3,
    child: <FaGithub size={40} />,

    href: "https://github.com/Vytenis1337",
    text: "GitHub",
  },
  {
    id: 4,
    child: <BsFillPersonLinesFill size={40} />,
    href: "/Vytenis_Kondrackis_CV.pdf",
    download: true,
    text: "Resume",
  },
];
