import { FaGithub, FaLinkedin, FaSkype, FaLaptopHouse } from "react-icons/fa";

export const socialIcons = [
  {
    id: 2,
    child: <FaLinkedin size={80} />,
    color: "blue-400",
    href: "https://www.linkedin.com/in/vytenis-kondrackis-2a1720253/",
  },
  {
    id: 1,
    child: <FaSkype size={80} />,
    color: "green-400",
    href: "https://join.skype.com/invite/DYEsy2wWGFKS",
  },
  {
    id: 4,
    child: <FaGithub size={80} />,
    color: "white",
    href: "https://github.com/Vytenis1337",
  },
  {
    id: 5,
    child: <FaLaptopHouse size={80} />,
    color: "yellow-400",
    href: "https://vytenisportfolio.netlify.app/",
  },
];
