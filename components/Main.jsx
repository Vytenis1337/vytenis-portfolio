import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import { FaArrowDown } from 'react-icons/fa';

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
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 10,
      }}
      id='home'
      className=' bg-gradient-to-b from-black to-gray-800 w-full h-screen text-center '
    >
      <div className='max-w-[1240px]   w-full h-full mx-auto p-2 flex justify-center items-center '>
        <div className='pt-20 md:pt-15'>
          <h1 className={main ? 'py-4 text-white' : 'py-4 text-yellow-500 '}>
            {main ? `I'm Vytenis` : 'Web Developer'}
          </h1>

          <div className='flex  justify-center pt-5'>
            <motion.a
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 0, 0, 0],
                borderRadius: ['0%', '0%', '50%', '50%', '0%'],
              }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
              href='#about'
              className={
                main
                  ? 'hover:scale-105 text-yellow-400'
                  : 'hover:scale-105 text-white'
              }
            >
              <FaArrowDown size={40} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
