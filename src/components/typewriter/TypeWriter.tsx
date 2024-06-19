"use client";
import { Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  return (
    <div className="App text-left">
      <Typewriter
        words={["Frontend Developer", "Web Designer", "SEO Optimizer"]}
        loop={5}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
};
export default TypeWriter;
