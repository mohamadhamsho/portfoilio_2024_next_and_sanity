import Image from "next/image";
import React from "react";
import logo from "../../app/Untitled_design_35_-removebg-preview.png";
import Link from "next/link";
function Logo() {
  return (
    <Link href="/">
      {/* <Image src={logo} alt="logo" width={170} height={58} /> */}
      <h2 className="text-2xl font-mono">
        <span className="text-primary font-bold mr-1">MY</span>
        <span className="bg-primary font-normal text-white py-1 px-1 rounded-md">
          PORTO
        </span>
      </h2>
    </Link>
  );
}

export default Logo;
