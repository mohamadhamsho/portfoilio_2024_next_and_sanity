import React from "react";
import Logo from "./Logo";
import ModeToggle from "./ModeToggle";

function Navbar() {
  return (
    <header className="fixed py-2 z-50 top-0 left-0 w-full bg-background/60 backdrop-blur-md">
      <div className="container py-4 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex items-center gap-x-4">
          <a href="" className="capitalize font-medium hover:text-foreground">
            home
          </a>
          <a href="" className="capitalize font-medium hover:text-foreground">
            about
          </a>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}

export default Navbar;
