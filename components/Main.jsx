import { useState, useEffect } from 'react';

const Main = () => {
  const [main, setMain] = useState(false);
  useEffect(() => {
    const phrase = setInterval(() => {
      setMain(!main);
      console.log(main);
    }, 2500);
    return () => {
      clearInterval(phrase);
    };
  }, [main]);
  return (
    <div
      id='home'
      className=' bg-[url("../public/assets/mainBackGround.jpg")]  w-full h-screen text-center '
    >
      <div className='max-w-[1240px]   w-full h-full mx-auto p-2 flex justify-center items-center '>
        <div className='pt-20 md:pt-15'>
          <h1 className='font-mono py-4 text-yellow-400 text-6xl md:text-7xl'>
            {main ? `I'm Vytenis` : 'Web Developer'}
          </h1>

          <div className='flex  justify-center pt-5 lg:pt-10'>
            <a href='#about' className='hover:scale-105 text-yellow-400'>
              <button className='border-white text-white p-2 md:p-3 lg:p-4 bg-transparent font-bold text-lg hover:text-yellow-400 hover:border-yellow-400'>
                About Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
