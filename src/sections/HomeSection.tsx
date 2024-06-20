import { buttonVariants } from "@/components/ui/button";
import { socialLinks } from "@/constants/social_links";
import { ArrowRightCircle, Download } from "lucide-react";
import Image from "next/image";
import React from "react";
import profileImg from "../../public/my_photo.png";
import TypeWriter from "@/components/typewriter/TypeWriter";
import { Effect } from "@/components/ui/effects";
function HomeSection() {
  return (
    <section
      id="home"
      className="container min-h-screen grid md:grid-cols-12 items-center gap-4 pt-28 md:pt-0"
    >
      {/* Social Icons */}
      <ul className="flex md:flex-col gap-4 items-center size-fit mx-auto py-2 md:py-8 px-8 md:px-2 border rounded-3xl">
        {socialLinks.map((link, index) => {
          const { href, icon: Icon } = link;
          return (
            <li key={index} className="hover:text-primary">
              <a href={href} target="_blank">
                <Icon className="size-5" />
              </a>
            </li>
          );
        })}
      </ul>
      {/* Presentation */}
      <div className="md:col-span-8 flex flex-col items-center md:items-start gap-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground capitalize">
          Hi, I am MOHAMAD
        </h2>
        <h5 className="text-xl md:text-2xl font-semibold capitalize">
          <TypeWriter />
        </h5>
        <p className="leading-7 md:text-lg md:max-w-[85%] text-center md:text-start">
          My passion for front-end development shines through in every project I
          work on, as I constantly strive for innovation and excellence. With a
          keen eye for design and a deep understanding of user experience, I
          transform complex technical concepts into elegant, user-friendly
          solutions. I have a deep understanding of the latest technologies and
          trends in front-end development, and I always stay ahead of the curve
          to deliver cutting-edge solutions.
        </p>
        <div className="flex items-center gap-2 py-4">
          <a
            href="#projects"
            className={buttonVariants({ size: "lg", variant: "default" })}
          >
            <span>MY WORKS</span>
            <ArrowRightCircle className="size-5" />
          </a>
          <a
            href="/serverStartup.pdf"
            className={buttonVariants({ variant: "outline", size: "lg" })}
            target="_blank"
            download
          >
            <span>Download CV</span>
            <Download className="size-5" />
          </a>
        </div>
      </div>
      {/* Image */}
      <div className="md:col-span-2 grid place-content-center">
        <div className="relative flex items-center justify-center size-80 md:size-96">
          <Effect className="size-full" />
          <Effect
            variant="square"
            size="sm"
            className="top-[8%] left-[25%] -rotate-12"
          />
          <Effect
            variant="square"
            size="sm"
            className="top-[50%] right-[2%] rotate-12"
          />
          <Effect
            variant="square"
            size="sm"
            className="bottom-[18%] left-[12%] rotate-6"
          />
          <Image
            width={420}
            height={420}
            alt="profile"
            src={profileImg}
            className="object-cover size-[75%] border-2 rounded-full ring-4 ring-primary ring-offset-4 ring-offset-background "
          />
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
