import React from "react";
import TypingAnimation from "./magicui/typing-animation";
import Globe from "./magicui/globe";
import WordRotate from "./magicui/word-rotate";

const Section1 = () => {
  return (
    <>
      <div className="w-[30%] h-4/6 rounded-l-lg overflow-hidden flex items-center justify-center bg-white">
        <Globe />
      </div>
      <div className="w-[70%] bg-white  rounded-r-lg overflow-hidden flex flex-col justify-center gap-12">
        <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-4xl font-semibold leading-none text-transparent ">
          Hi I'am
        </h1>
        <TypingAnimation
          className="text-8xl pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text font-semibold leading-none text-transparent"
          text="Muhammed Rifahad MT"
        />
        <WordRotate
            className=" pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-4xl font-black leading-none text-transparent "
            words={["MERN STACK DEVELOPER ", "REACT NATIVE DEVELOPER" , "FRONTEND DEVELOPER", "BACKEND DEVELOPER"]}
          />
      </div>
    </>
  );
};

export default Section1;
