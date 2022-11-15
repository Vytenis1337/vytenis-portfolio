import Image from 'next/image';

import { projects } from '../services/projectServices';

const Projects = () => {
  return (
    <div
      id='projects'
      className='w-full h-full bg-gradient-to-b from-black to-gray-800 lg: py-20'
    >
      <div className=' mx-auto px-6 py-16 text-center '>
        <h1 className='text-5xl text-white md:text-7xl tracking-wider capitalize font-bold mb-20 pb-10 underline'>
          projects
        </h1>

        <div className='max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {projects.map(
            ({ id, title, imageSrc, github, live, style, styleTwo, text }) => (
              <div key={id}>
                <div className=' group shadow-md shadow-gray-600 bg-transparent overflow-hidden rounded-md border-white'>
                  <h2 className='text-center text-2xl text-white capitalize my-4 font-bold duration-200 group-hover:underline underline-offset-4'>
                    {title}
                  </h2>
                  <div className='rounded-md duration-200 group-hover:scale-110 flex'>
                    <Image src={imageSrc} alt={title} />
                  </div>

                  <div className='flex items-center justify-center capitalize font-bold my-3'>
                    <div className='font-light text-base text-white'>
                      Technologies used for this project:<br></br>
                      <p className='font-bold'>{text}</p>
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <a
                      className={`flex items-center justify-center ${style}`}
                      target='_blank'
                      rel='noreferrer'
                      href={github}
                    >
                      <button className='w-1/2 px-6 py-2 m-2 duration-200 text-yellow-400 bg-transparent font-bold border-yellow-400 hover:scale-105 hover:text-white hover:border-white'>
                        Code
                      </button>
                    </a>
                    <a
                      className={`flex items-center justify-center ${styleTwo}`}
                      target='_blank'
                      rel='noreferrer'
                      href={live}
                    >
                      <button className='w-1/2 px-6 py-2 m-2 duration-200 text-yellow-400 bg-transparent font-bold border-yellow-400 hover:scale-105 hover:text-white hover:border-white'>
                        Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
