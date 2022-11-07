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
          <h1 className='py-4 text-yellow-500 text-5xl md:text-7xl'>
            {main ? `I'm Vytenis` : 'Web Developer'}
          </h1>

          <div className='flex  justify-center pt-5 lg:pt-10'>
            <a
              href='#about'
              className={
                main
                  ? 'hover:scale-105 text-yellow-400'
                  : 'hover:scale-105 text-white'
              }
            >
              <button className='border-white p-2 lg:p-4 bg-transparent font-bold text-lg hover:text-yellow-400'>
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
