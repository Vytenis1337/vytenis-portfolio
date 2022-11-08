import { skills } from '../services/skillsServices';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
        },
      });
    }

    if (!inView) {
      animation.start({
        x: '-100vw',
      });
    }
  }, [inView]);

  return (
    <div
      id='skills'
      className='w-full h-screen lg:h-full bg-gradient-to-b from-gray-800 to-black p-10 lg:p-0'
    >
      <div className='h-full mx-auto px-8 md:py-16 text-center max-w-[1240px]'>
        <h1 className=' text-5xl md:text-6xl font-bold text-white '>Skills</h1>

        <div
          ref={ref}
          className='grid grid-cols-2 md:grid-cols-3 lg:pt-10 gap-2 md:gap-3 lg:gap-5 mt-5'
        >
          {skills.map(({ id, title, src }) => (
            <motion.div
              animate={animation}
              key={id}
              whileHover={{ scale: 1.1 }}
              className='flex flex-col lg:flex-row  gap-2 lg:gap-0 items-center justify-center p-2 lg:p-3 hover:border-none ease-in duration-300 border-2 border-blue-400 bg-white'
            >
              <Image src={src} width='45px' height='45px' alt={title} />
              <h3 className='mx-1 font-bold text-black'>{title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
