import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from '../services/projectServices';

const Projects = () => {
  return (
    <div
      id='projects'
      className='w-full h-full bg-gradient-to-b from-gray-800 to-black lg: py-20'
    >
      <div className=' mx-auto px-6 py-16 md:text-left '>
        <h1 className='text-5xl text-white md:text-7xl tracking-wider capitalize font-bold ml-20'>
          projects
        </h1>
        <div className='border-b-8 border-white border-solid mb-20 w-2/6 md:w-1/6 pb-10 ml-20'></div>

        <div className='max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {projects.map(({ id, title, imageSrc, url, style, text }) => (
            <div key={id}>
              <motion.div
                animate={{ rotate: 9 }}
                className=' group shadow-md shadow-gray-600 bg-white overflow-hidden rounded-md'
              >
                <h2 className='text-center text-2xl capitalize my-4 font-bold duration-200 group-hover:underline underline-offset-4'>
                  {title}
                </h2>
                <div className='rounded-md duration-200 group-hover:scale-110 flex'>
                  <Image src={imageSrc} alt={title} />
                </div>

                <div className='flex items-center justify-center capitalize font-bold my-3'>
                  <div className='font-light text-base'>
                    Technologies used for this project:<br></br>
                    <p className='font-bold'>{text}</p>
                  </div>
                </div>

                <a
                  className={`flex items-center justify-center ${style}`}
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/Vytenis1337'
                >
                  <button className='w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105'>
                    Code
                  </button>
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
