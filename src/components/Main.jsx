import { useState, useEffect } from "react";
import Link from "next/link";

const words = ["JavaScript", "ReactJs", "CSS", "NextJs", "Responsive"];

const Main = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="bg-cover bg-center w-full h-screen max-w-screen-xl mx-auto relative overflow-hidden"
      style={{ backgroundImage: "url('/home2.jpg')" }}
    >
      <div className="absolute inset-0 w-full h-full flex flex-col lg:mt-20 justify-center items-center bg-black/30 text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        {words.map((word, index) => (
          <div
            key={index}
            className={`absolute w-full text-center transition-opacity duration-1000 ${
              index === currentWordIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ top: `${(index / words.length) * 100}%` }}
          >
            {word}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 w-full h-full flex">
        <div className="w-1/2 h-full flex items-end pb-40 xl:pb-0 xl:items-center justify-center bg-black/30 transition-colors duration-300 ease-in-out group ">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center"></div>
        </div>

        <div className="w-1/2 h-full flex items-end xl:items-center pb-40 xl:pb-0 justify-center bg-black/30 transition-colors duration-300 ease-in-out group ">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center"></div>
        </div>
      </div>

      <div className="absolute w-full h-full flex items-center justify-center pointer-events-none">
        <div className="text-center p-4 backdrop-blur-md bg-black/30 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight shadow-lg">
            Hi, I&apos;m{" "}
            <span className="text-blue-400 cursor-pointer bg-white/20 px-2 py-1 rounded hover:text-teal-400 transition-colors duration-300 pointer-events-auto">
              <Link href="#about" scroll={false}>
                &lt;Vytenis&gt;
              </Link>
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
              &lt;h1&gt; Web Developer &lt;/h1&gt;
            </span>
          </h1>
          <div className="flex justify-between mt-8">
            <p className="text-sm lg:text-base text-gray-300 pointer-events-auto">
              <span className="ml-2 underline hover:text-blue-400">
                <Link href="#about" scroll={false} className="cursor-pointer">
                  Learn about me
                </Link>
              </span>
            </p>
            <p className="text-sm lg:text-base text-gray-300 pointer-events-auto">
              View my
              <span className="ml-2 underline hover:text-blue-400">
                <Link
                  href="#projects"
                  scroll={false}
                  className="cursor-pointer"
                >
                  Projects
                </Link>
              </span>
            </p>
            <p className="text-sm lg:text-base text-gray-300 pointer-events-auto">
              <span className="ml-2 underline hover:text-blue-400">
                <Link href="#contact" scroll={false} className="cursor-pointer">
                  Contact me
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
