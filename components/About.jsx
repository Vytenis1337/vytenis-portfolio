import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  return (
    <div id='about' className='w-full h-screen bg-transparent  pt-20'>
      <div className='h-full mx-auto py-8 md:py-20 text-center max-w-[1240px]'>
        <h1 className='font-mono text-5xl md:text-6xl font-bold text-white '>
          About
        </h1>
        <div className='my-20 mx-10 md:my-20 md:mx-20 text-left text-white text-lg lg:text-xl lg:tracking-wider'>
          <p data-aos='zoom-in-up' className='font-serif'>
            I am enthusiastic{' '}
            <span className='text-blue-400'>Front-End Web </span>developer. I am also comfortable with{' '}
            <span className='text-blue-400'>Back-End</span> concepts. I
            like using new technologies and tools to combine them into
            functional and user-friendly designs. My goal is to learn and grow
            to use my skills in web development and delivering completion of
            projects. <br />
            <span className='text-blue-400'>Front-End Web</span> development is
            really cool cause it combines creativity and problem solving. It is
            also rewarding because when you change some styles or properties you
            can instantly see it on the screen! So far i have good knowledge of
            these technologies:{' '}
            <span className='text-yellow-400'>
              JavaScript, HTML, CSS, ReactJs, NextJs, TypeScript, Redux, TailWind, Sass,
              GitHub, NodeJs, MongoDB.
            </span>{' '}
            Also knowledge of:{' '}
            <span className='text-yellow-400'>
              React Native, MaterialUI, Bootstrap, PHP.
            </span>
            <br />
            <br />
            If You are hiring for a Junior or Entry level Front-End developer or
            wanna website built, lets connect and have a chat!
          </p>
        </div>
        <div className='flex flex-col lg:flex justify-center'>
          <a href='#contact'>
            <button className='bg-transparent text-yellow-400 border-yellow-400 font-bold mb-5 lg:mb-10 text-lg p-4 md:p-5 lg:p-7 hover:scale-110 hover:text-white hover:border-white'>
              Contact Me
            </button>
          </a>
          <a
            href='/Vytenis_Kondrackis_CV.pdf'
            download='Vytenis_Kondrackis_CV'
            className=' '
          >
            <button className='bg-transparent border-blue-400 text-blue-400 p-1 md:p-2 lg:p-3 font-bold hover:scale-110 hover:text-white hover:border-white'>
              My Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
