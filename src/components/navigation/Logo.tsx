import React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
function Logo() {
  return (
    <a href="#home">
      {/* <Image src={logo} alt="logo" width={170} height={58} /> */}
      <h2 className="text-2xl font-mono">
        <span className="text-primary font-bold mr-1">MY</span>
        <span
          className={cn(
            buttonVariants({ variant: "default" }),
            "font-normal text-2xl text-white py-1 px-1 rounded-md"
          )}
        >
          PORTO
        </span>
      </h2>
    </a>
  );
}

export default Logo;
