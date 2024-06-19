import { navLinks } from "@/constants/nav_links";
import React from "react";

function MobileNavigation() {
  return (
    <div className="flex md:hidden fixed bottom-0 left-0 w-full py-4 border-t rounded-t-lg bg-background shadow-lg z-50">
      <nav className="container flex items-center justify-between sm:justify-evenly">
        {navLinks.map((link, index) => {
          const { title, href, icon: Icon } = link;
          return (
            <a
              key={index}
              href={href}
              className="size-10 p-2 grid place-content-center"
            >
              <div className="flex flex-col items-center hover:text-primary">
                <Icon className="size-6" />
                <span className="text-xs sm:text-sm capitalize font-semibold">
                  {title}
                </span>
              </div>
            </a>
          );
        })}
      </nav>
    </div>
  );
}

export default MobileNavigation;
