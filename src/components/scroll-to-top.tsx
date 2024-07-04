"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ArrowUpCircle } from "lucide-react";
import { useEffect, useState } from "react";

function ScrollToTop() {
  const [isOverScreen, setIsOverScreen] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 290 ? setIsOverScreen(true) : setIsOverScreen(false);
    });
  }, []);
  return (
    <Button
      size={"icon"}
      className={cn(
        "fixed bottom-16 md:bottom-12 end-6 md:end-12 transition-transform duration-300 z-[99]",
        !isOverScreen && "opacity-0 translate-y-6 pointer-events-none"
      )}
      onClick={() => window.scrollTo(0, 0)}
    >
      <ArrowUpCircle />
    </Button>
  );
}

export default ScrollToTop;
