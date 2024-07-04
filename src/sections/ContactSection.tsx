import SectionTitle from "@/components/sectionTitle";
import { buttonVariants } from "@/components/ui/button";
import { Effect } from "@/components/ui/effects";
import { Mail } from "lucide-react";
import React from "react";

function ContactSection() {
  return (
    <section id="contact" className="py-20 mt-8 overflow-hidden">
      <div className="relative bg-card p-6 bg-opacity-80 backdrop-blur-md border border-muted flex flex-col items-center gap-y-6 md:gap-y-12 ">
        <Effect variant={"ball"} size={"default"} className="-top-4 -end-4" />
        <SectionTitle title="Get in touch" description="Let's work together" />
        <a
          href="mailto:nostalgiedamour2013@gmail.com"
          className={buttonVariants({ size: "lg" })}
        >
          <Mail className="size-4" />
          <span>Say Hello</span>
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
