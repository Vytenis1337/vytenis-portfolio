import { useState, useEffect } from "react";

const Main = () => {
  return (
    <div id="home" className="bg-cover bg-center w-full h-screen relative">
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <source src="/main_video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="absolute w-full h-full bg-[#f5f5f5] ">
        <div className="flex items-center justify-center h-full">
          <div className="text-center p-4 backdrop-blur-md bg-black/30 rounded-lg mx-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight shadow-lg">
              Hi, I&apos;m{" "}
              <span className="text-blue-400 bg-white/20 px-2 py-1 rounded">
                &lt;Vytenis&gt;
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
                &lt;h1&gt; Web Developer &lt;/h1&gt;
              </span>
            </h1>
            <div className="mt-8">
              <a
                href="#projects"
                className="transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gradient-to-l hover:shadow-xl">
                  View my Projects <span className="arrow">→</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
