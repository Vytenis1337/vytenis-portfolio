import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  return (
    <div id="about" className="w-full h-full lg:h-screen bg-transparent ">
      <div className="h-full mx-auto  text-center max-w-[1240px]">
        <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl capitalize font-bold text-white mb-4">
          About
        </h1>
        <div className="my-10 mx-8 md:mx-24 lg:mx-32 text-left text-gray-300 text-lg lg:text-2xl lg:tracking-wide">
          <p data-aos="zoom-in-up" className="font-serif leading-relaxed">
            <span className="font-bold text-blue-400">
              I am an enthusiastic Front-End Web Developer
            </span>{" "}
            with a solid grasp of{" "}
            <span className="text-blue-400">Back-End</span> concepts. Passionate
            about leveraging new technologies and tools, I strive to blend them
            into functional and user-friendly designs. My objective is continual
            learning and growth in web development to effectively contribute to
            project completions. The field of{" "}
            <span className="font-bold text-blue-400">
              Front-End Web Development
            </span>{" "}
            excites me as it merges creativity with problem-solving. It is
            particularly rewarding to see immediate results from tweaking styles
            or properties. I possess a strong foundation in technologies
            including{" "}
            <span className="text-yellow-400">
              JavaScript, HTML, CSS, ReactJs, NextJs, TypeScript, Redux,
              TailWind, Sass, GitHub, NodeJs, MongoDB, Jest, and
              React-Testing-Library
            </span>
            . Additionally, I am skilled in{" "}
            <span className="text-yellow-400">
              React Native, MaterialUI, Bootstrap, and PHP
            </span>
            . If you are seeking a dedicated Junior or Entry-Level Front-End
            Developer, or if you need a website built, lets connect and discuss
            how I can bring your project to life!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center lg:space-x-4">
          <a href="#contact">
            <button className="bg-transparent text-white font-bold mb-5 lg:mb-10 text-lg lg:text-xl p-4 md:p-5 lg:p-7 border-blue-400 rounded-full hover:scale-105 transition-all duration-300">
              Contact Me
            </button>
          </a>
          <a
            href="/Vytenis_Kondrackis_CV.pdf"
            download="Vytenis_Kondrackis_CV"
            className=" "
          ></a>
        </div>
      </div>
    </div>
  );
};

export default About;
