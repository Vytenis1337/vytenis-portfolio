import Image from "next/image";
import { projects } from "../utils/projectServices";

const Projects = () => {
  const handleCardClick = (url) => {
    window.open(url, "_blank"); // Open in a new tab
  };

  return (
    <div id="projects" className="w-full h-full ">
      {" "}
      <div className="mx-auto px-10  text-center max-w-8xl">
        {" "}
        <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl capitalize text-white font-bold mb-10 underline">
          {" "}
          projects
        </h1>
        <div
          data-aos="fade-right"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {projects.map(
            ({
              id,
              title,
              imageSrc,
              github,
              live,
              style,
              styleTwo,
              text,
              backEndGithub,
            }) => (
              <div
                key={id}
                onClick={() => handleCardClick(live)}
                className="p-4 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
              >
                {" "}
                <h2 className="text-2xl font-bold my-4 text-white">{title}</h2>
                <div className="overflow-hidden rounded-lg shadow-lg duration-200 group-hover:scale-105">
                  <Image
                    src={imageSrc}
                    alt={title}
                    layout="responsive"
                    width="100%"
                    height="75%"
                  />
                </div>
                <div className="text-center my-4">
                  {" "}
                  <div className="font-light text-lg text-white">
                    {" "}
                    Technologies used for this project:
                    <br />
                    <p className="font-bold">{text}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  {" "}
                  <a
                    className={style}
                    target="_blank"
                    rel="noreferrer"
                    href={github}
                  >
                    <button className="w-full px-6 py-3 text-yellow-400 bg-transparent font-bold border border-yellow-400 hover:bg-yellow-400 hover:text-white transition-all duration-200">
                      Code
                    </button>
                  </a>
                  {backEndGithub && (
                    <a
                      className={style}
                      target="_blank"
                      rel="noreferrer"
                      href={backEndGithub}
                    >
                      <button className="w-full px-6 py-3 text-yellow-400 bg-transparent font-bold border border-yellow-400 hover:bg-yellow-400 hover:text-white transition-all duration-200">
                        Back-End Code
                      </button>
                    </a>
                  )}
                  <a
                    className={styleTwo}
                    target="_blank"
                    rel="noreferrer"
                    href={live}
                  >
                    <button className="w-full px-6 py-3 text-yellow-400 bg-transparent font-bold border border-yellow-400 hover:bg-yellow-400 hover:text-white transition-all duration-200">
                      Live
                    </button>
                  </a>
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
