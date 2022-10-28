import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div
      id='about'
      className='w-full h-full bg-gradient-to-b from-gray-800 to-black  '
    >
      <div className='h-full mx-auto py-8 md:py-16 text-center max-w-[1240px]'>
        <h1 className='  font-bold text-white '>About</h1>
        <p className='m-20 text-left text-white text-lg tracking-wider'>
          Im self-taught and enthusiastic front-end developer. I like using new
          technologies and tools to combine them into functional and
          user-friendly designs. My goal is to learn and grow to use my skills
          in web development and delivering completion of projects. <br /> If
          youre hiring for a junior front-end developer or wanna website built,
          lets have a chat!
        </p>
        <div className='flex justify-center'>
          <a href='#contact'>
            <motion.button
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ['0%', '0%', '50%', '50%', '0%'],
              }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className='bg-black border-yellow-500'
            >
              Contact Me
            </motion.button>
          </a>
          <a
            href='/Vytenis_Kondrackis_CV_2022.pdf'
            download='Vytenis_Kondrackis_CV_2022'
            className='absolute right-2 lg:right-40 lg:mr-20'
          >
            <button className='hover:scale-110 bg-white text-black lg:p-2 font-bold'>
              My Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
