import { socialLinks } from "@/constants/social_links";
import { cn } from "@/lib/utils";
import React from "react";
import { buttonVariants } from "../ui/button";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="pt-4 pb-28 md:pb-4 border-t">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-y-4">
        <p className="text-sm">Copy © {currentYear}. All Right Reserved</p>
        <div className="flex items-center justify-center gap-4">
          {socialLinks.map((link, index) => {
            const { href, icon: Icon } = link;
            return (
              <a
                key={index}
                href={href}
                target="_blank"
                className={
                  (cn(buttonVariants({ variant: "outline", size: "icon" })),
                  "rounded-full")
                }
              >
                <Icon className="size-4" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
