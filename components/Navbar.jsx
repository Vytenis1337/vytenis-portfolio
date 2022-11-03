import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import { FaCity } from 'react-icons/fa';

import { navLinks, socialLinks } from '../services/navbarServices';

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 180) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? 'fixed w-full bg-black text-yellow-500 h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100] bg-black text-white'
      }
    >
      <div className=' font-bold flex justify-between items-center w-full h-full px-2 2xl:px-16 '>
        <Link href='/'>
          <a className='hover:scale-105 '>
            <FaCity size={40} />
          </a>
        </Link>
        <div>
          <ul className='hidden md:flex'>
            {navLinks.map(({ id, href, scroll, link }) => (
              <li
                key={id}
                className='ml-10 text-2xl uppercase hover:scale-105 hover:border-b hover:border-[#fcd21d] '
              >
                <Link href={href} scroll={scroll}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          {/* Hamburger Icon */}
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={40} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen' : ''}
      >
        {/* Side Menu */}
        <div
          className={
            nav
              ? ' font-nav font-semibold fixed left-0 top-0 w-[100%] h-screen bg-gradient-to-b from-black to-gray-800 p-20 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-200'
          }
        >
          <div>
            <div className='flex w-full items-center justify-end mb-5'>
              <div
                onClick={handleNav}
                className='rounded-full  p-4 cursor-pointer bg-yellow-500 text-black'
              >
                <AiOutlineClose size={20} />
              </div>
            </div>
          </div>
          <div className='py-8 flex flex-col'>
            <ul className='uppercase'>
              {navLinks.map(({ id, href, scroll, link }) => (
                <li
                  key={id}
                  onClick={() => setNav(false)}
                  className='py-4 text-3xl text-white'
                >
                  <Link href={href} scroll={scroll}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <div className='pt-40'>
              <p className='font-nav uppercase  text-white text-2xl'>
                Contact Me
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                {socialLinks.map(({ id, href, download, child }) => (
                  <a
                    key={id}
                    href={href}
                    target='_blank'
                    rel='noreferrer'
                    download={download}
                  >
                    <div className='rounded bg-yellow-500 text-black  p-5 mx-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                      {child}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
