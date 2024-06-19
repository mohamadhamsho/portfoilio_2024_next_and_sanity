import React from "react";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";
import { navLinks } from "@/constants/nav_links";

function Navbar() {
  return (
    <header className="fixed py-2 z-50 top-0 left-0 w-full bg-background backdrop-blur-md shadow-md">
      <div className="container py-2 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex items-center gap-x-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="capitalize font-medium hover:text-foreground hover:text-primary"
            >
              {link.title}
            </a>
          ))}
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}

export default Navbar;
