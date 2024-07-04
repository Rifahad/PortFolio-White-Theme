import Particles from "./magicui/particles";
import { Spotlight } from "./ui/Spotlight";

const Hero = (props) => {
  return (
    <>
      <div className="w-full bg-transparent h-auto rounded overflow-hidden p-2 ">
        <div className="w-full flex rounded ">
        <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#000000"}
        refresh
      />
          <Spotlight className="top-0 -left-32 w-full" fill="black" />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="cyan"
          />
          <Spotlight className="left-40 top-28 h-[40vh] w-[90vw]" fill="orange" />

          {props.content}
        </div>
      </div>
    </>
  );
};

export default Hero;
