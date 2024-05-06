import { useState, useEffect } from "react";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className="bg-cover bg-center w-full h-screen relative">
      <div className="absolute inset-0 w-full h-full flex">
        <div className="w-1/2 h-full flex items-end pb-40 xl:pb-0 xl:items-center justify-center bg-black/30 transition-colors duration-300 ease-in-out group hover:bg-black/50">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
            <Link href="#contact" scroll={false}>
              <button className="text-lg font-bold text-white py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded">
                Contact Me
              </button>
            </Link>
          </div>
        </div>

        <div className="w-1/2 h-full flex items-end xl:items-center pb-40 xl:pb-0 justify-center bg-black/30 transition-colors duration-300 ease-in-out  group hover:bg-black/50">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
            <Link href="#projects" scroll={false}>
              <button className="text-lg font-bold text-white py-2 px-4 bg-teal-500 hover:bg-teal-700 rounded">
                My Projects
              </button>
            </Link>
          </div>
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
          <div className="mt-8">
            <span className="text-sm text-gray-300"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
