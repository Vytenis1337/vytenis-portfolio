import { useState, useEffect } from "react";

const Main = () => {
  const [main, setMain] = useState(false);
  useEffect(() => {
    let phrase = setInterval(() => {
      setMain((prev) => !prev);
    }, 2500);
    return () => clearInterval(phrase);
  }, []);
  return (
    <div
      id="home"
      className=" bg-cover bg-center w-full h-[65vh] lg:h-screen text-center flex justify-center items-center"
    >
      <div className="max-w-[1240px] w-full h-full p-4 flex flex-col justify-center items-center">
        <div className="pt-20 md:pt-15">
          <h1
            className=" font-bold tracking-tight text-transparent bg-clip-text
             animate-fadeInUp py-4
             bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
             text-6xl  md:text-7xl "
          >
            {main ? `I'm Vytenis` : "Web Developer"}
          </h1>

          <div className="flex justify-center pt-5 lg:pt-10">
            <a
              href="#about"
              className="transform transition duration-300 hover:scale-110"
            >
              <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gradient-to-l ">
                About Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
