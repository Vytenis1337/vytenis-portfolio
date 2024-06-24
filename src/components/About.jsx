import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { skills } from "../utils/skillsServices"; // Make sure the skills import correctly provides an object with `title` and `level` properties

const About = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div
      id="about"
      className="w-full h-full max-w-screen-xl rounded-lg shadow-lg mx-auto bg-[#f5f5f5] flex flex-col "
    >
      <div className="text-center py-4">
        <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-black underline">
          About me
        </h1>
      </div>
      <div
        data-aos="fade-left"
        className="flex flex-1 flex-col lg:flex-row max-w-[1240px] mx-auto"
      >
        <div className="lg:w-1/2 p-4 text-gray-300 flex flex-col justify-center">
          <div className="mx-8 md:mx-24 text-lg lg:text-2xl leading-relaxed">
            <div className="relative m-auto w-2/3 sm:w-1/2 lg:w-3/4 md:w-80 h-80 border-8 border-teal-400">
              <div className="absolute inset-0 bg-black bg-opacity-75 hover:bg-opacity-0 transition-opacity duration-300 rounded-lg"></div>
              <div
                className="absolute inset-0 bg-center bg-cover rounded-lg"
                style={{
                  backgroundImage: 'url("My_Image2.jpg")',
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              ></div>
            </div>
            <p className="mt-4 text-base text-black text-justify">
              I am an enthusiastic Front-End Web Developer with a solid grasp of
              Back-End concepts. Passionate about leveraging new technologies
              and tools, I strive to blend them into functional and
              user-friendly designs.
              <br />
              <br />
              The field of Web Development excites me as it merges creativity
              with problem-solving. My expertise includes working with HTML,
              CSS, JavaScript, and frameworks like React and Next.js for
              front-end development. On the back-end, I have experience with
              Node.js, Express, and databases such as MongoDB and MySQL.
              <br />
              <br />I am always excited to take on new challenges and
              collaborate with others to create innovative web applications that
              provide excellent user experiences.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 p-4 text-white bg-transparent flex flex-col justify-center">
          <div className="flex flex-col space-y-2 md:space-y-4">
            {skills.map(({ id, title, level }) => (
              <div
                key={id}
                className="h-6 w-full md:w-1/2 lg:w-full m-auto bg-gray-800 rounded-full overflow-hidden"
              >
                <div
                  className="bg-gradient-to-r from-teal-500 to-blue-500 h-full"
                  style={{ width: `${level}%` }}
                >
                  <span className="pl-2 text-sm">{title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
