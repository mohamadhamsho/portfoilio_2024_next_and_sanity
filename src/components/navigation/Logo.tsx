import Image from "next/image";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
function Logo() {
  return (
    <Link href="/">
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
    </Link>
  );
}

export default Logo;
