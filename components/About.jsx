import React from 'react';

const About = () => {
  return (
    <div
      id='about'
      className='w-full h-full bg-gradient-to-b from-gray-800 to-black  '
    >
      <div className='h-full mx-auto py-8 md:py-16 text-center max-w-[1240px]'>
        <h1 className='  font-bold text-white '>About</h1>
        <p className='m-20 text-left text-white text-lg tracking-wider'>
          I am self-taught and enthusiastic front-end developer. I like using
          new technologies and tools to combine them into functional and
          user-friendly designs. My goal is to learn and grow to use my skills
          in web development and delivering completion of projects. <br /> If
          you are hiring for a junior front-end developer or wanna website
          built, lets have a chat!
        </p>
        <div className='flex justify-center'>
          <a href='#contact'>
            <button className='bg-yellow-400 border-yellow-500 text-black font-bold lg:p-5 hover:scale-110'>
              Contact Me
            </button>
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
