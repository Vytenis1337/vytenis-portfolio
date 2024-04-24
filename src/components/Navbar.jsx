import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { FaCity } from "react-icons/fa";

import { navLinks, socialLinks } from "../utils/navbarServices";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 500) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={`fixed w-full h-20 z-[100] ease-in-out duration-300 ${
        shadow
          ? "bg-black text-yellow-500 shadow-lg"
          : "bg-transparent text-white"
      }`}
    >
      <div className=" font-bold flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
        <Link href="/">
          <a className="hover:scale-105 ">
            <FaCity size={50} />
          </a>
        </Link>
        <div>
          <ul className="hidden md:flex">
            {navLinks.map(({ id, href, scroll, link }) => (
              <li
                key={id}
                className="ml-10 text-2xl uppercase hover:scale-105 hover:border-b hover:border-[#fcd21d] "
              >
                <Link href={href} scroll={scroll}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={40} />
          </div>
        </div>
      </div>

      <div
        className={`${
          nav
            ? "fixed left-0 top-0 w-full h-screen bg-black bg-opacity-90"
            : "hidden"
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex w-full items-center justify-between p-5">
              <div
                onClick={handleNav}
                className="rounded-full p-3 cursor-pointer text-white"
              >
                <AiOutlineClose size={30} />
              </div>
            </div>
            <ul className="flex flex-col items-center">
              {navLinks.map(({ id, href, scroll, link }) => (
                <li
                  key={id}
                  onClick={() => setNav(false)}
                  className="py-6 text-xl text-white uppercase"
                >
                  <Link href={href} scroll={scroll}>
                    <a>{link}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5">
            <p className="text-white text-xl uppercase">Connect with me:</p>
            <div className="flex justify-center mt-4">
              {socialLinks.map(({ id, href, download, child }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  download={download}
                  className="p-3 m-2 rounded-full text-white bg-yellow-500 hover:bg-yellow-600 transition duration-300 ease-in-out"
                >
                  {child}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};