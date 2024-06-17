import Image from "next/image";
import React from "react";
import logo from "../../app/Untitled_design_35_-removebg-preview.png";
function Logo() {
  return (
    <a href="/">
      <Image src={logo} alt="logo" width={170} height={58} />
    </a>
  );
}

export default Logo;
