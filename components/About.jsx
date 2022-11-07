import React from 'react';

const About = () => {
  return (
    <div
      id='about'
      className='w-full h-full lg:h-screen bg-gradient-to-b from-black to-gray-800  pt-20'
    >
      <div className='h-full mx-auto py-8 md:py-20 text-center max-w-[1240px]'>
        <h1 className=' text-5xl md:text-6xl font-bold text-white '>About</h1>
        <p className='m-20 text-left text-white text-lg lg:text-xl tracking-wider'>
          I am self-taught and enthusiastic front-end developer. I like using
          new technologies and tools to combine them into functional and
          user-friendly designs. My goal is to learn and grow to use my skills
          in web development and delivering completion of projects. <br /> If
          you are hiring for a junior front-end developer or wanna website
          built, lets have a chat!
        </p>
        <div className='flex flex-col lg:flex justify-center'>
          <a href='#contact'>
            <button className='bg-transparent text-yellow-400 border-yellow-400 font-bold mb-5 lg:mb-10 text-lg p-4 lg:p-7 hover:scale-110 hover:text-white hover:border-white'>
              Contact Me
            </button>
          </a>
          <a
            href='/Vytenis_Kondrackis_CV.pdf'
            download='Vytenis_Kondrackis_CV'
            className=' '
          >
            <button className='bg-transparent border-yellow-400 text-yellow-400 p-1 lg:p-3 font-bold hover:scale-110 hover:text-white hover:border-white'>
              My Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
