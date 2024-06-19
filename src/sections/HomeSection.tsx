import { buttonVariants } from "@/components/ui/button";
import { socialLinks } from "@/constants/social_links";
import { ArrowRightCircle, Download } from "lucide-react";
import Image from "next/image";
import React from "react";
import profileImg from "../../public/me.jpg";
function HomeSection() {
  return (
    <section
      id="home"
      className="container min-h-screen grid md:grid-cols-12 items-center gap-4"
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
      <div className="md:col-span-6 flex flex-col items-center md:items-start gap-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground capitalize">
          Hi, I am MOHAMAD HAMSHO
        </h2>
        <h5 className="text-xl md:text-2xl font-semibold capitalize">
          Frontend Developer
        </h5>
        <p className="leading-7 md:text-lg md:max-w-[85%] text-center md:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis neque
          velit, perspiciatis amet ab itaque consequatur nulla in animi hic
          optio. Sed assumenda, sit molestias, voluptates beatae commodi est
          labore asperiores laborum, molestiae dolorem magnam! Voluptatibus
          expedita minus et blanditiis?
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
      <div className="md:col-span-5 grid place-content-center">
        <div className="relative flex items-center justify-center size-80 md:size-96">
          <Image
            width={420}
            height={420}
            alt="profile"
            src={profileImg}
            className="object-cover size-[80%] border-2 rounded-full ring-4 ring-primary ring-offset-4 ring-offset-background "
          />
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
