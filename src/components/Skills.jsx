import { skills } from "../utils/skillsServices";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full h-full lg:h-screen  ">
      <div className="h-full mx-auto px-8 md:py-16 text-center max-w-[1240px]">
        <h1 className="font-mono text-5xl md:text-6xl font-bold text-white ">
          Skills
        </h1>

        <div
          data-aos="fade-left"
          className="grid grid-cols-2 md:grid-cols-3 lg:pt-10 gap-2 md:gap-3 lg:gap-5 mt-5"
        >
          {skills.map(({ id, title, src, color }) => (
            <div
              key={id}
              whileHover={{ scale: 1.1 }}
              className={`group flex flex-col  gap-2 lg:gap-0 items-center justify-center p-2 lg:p-3 hover:border-none ease-in duration-300 border-2  border-blue-400 group-hover:scale-105 bg-white`}
            >
              <Image src={src} width="55px" height="55px" alt={title} />
              <h3 className="mx-1 font-bold text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
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
