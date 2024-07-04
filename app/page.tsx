import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import React from "react";

const page = () => {
  return (
    <>
    <div className="w-full h-auto p-2  bg-black">
        <Navbar />
        <Hero content={<Section1 />} />
        <Hero content={<Section2 /> } />
        {/* // <Hero content={<Section2 />} />
        // <Hero content={<Section2 />} />  */}
        </div>
        </>
  );
};

export default page;
