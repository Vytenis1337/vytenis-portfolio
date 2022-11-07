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
      className='w-full h-full bg-gradient-to-b from-gray-800 to-black lg: py-20 '
    >
      <div className='h-full mx-auto px-8 md:py-16 text-center max-w-[1240px]'>
        <h1 className=' text-5xl md:text-6xl font-bold text-white '>Skills</h1>

        <div
          ref={ref}
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:pt-10 gap-5 mt-5'
        >
          {skills.map(({ id, title, src }) => (
            <motion.div
              animate={animation}
              key={id}
              whileHover={{ scale: 1.2 }}
              className='flex flex-col lg:flex-row gap-2 lg:gap-0 items-center justify-center p-1 rounded-xl hover:border-none ease-in duration-300 border-2 border-yellow-400 bg-white'
            >
              <Image src={src} width='45px' height='45px' alt={title} />
              <h3 className='font-bold'>{title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
