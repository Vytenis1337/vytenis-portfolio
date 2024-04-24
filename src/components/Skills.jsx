import { skills } from "../utils/skillsServices";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full h-full lg:h-screen bg-transparent  ">
      <div className="h-full mx-auto px-8  text-center max-w-[1240px]">
        <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 ">
          Skills
        </h1>

        <div
          data-aos="fade-left"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:pt-10 gap-5 mt-5"
        >
          {skills.map(({ id, title, src, color }) => (
            <div
              key={id}
              className="group flex flex-col items-center justify-center p-3  hover:border-white border-2 border-transparent rounded-lg"
            >
              <Image
                src={src}
                width="100px"
                height="100px"
                alt={title}
                className={`transition duration-300  ease-in-out transform group-hover:scale-105`}
              />
              <h3 className="font-bold text-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-white">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
