import SectionTitle from "@/components/sectionTitle";
import { buttonVariants } from "@/components/ui/button";
import { Effect } from "@/components/ui/effects";
import { getStatistics } from "@/constants/statistics";
import { cn } from "@/lib/utils";
import { ArrowRightCircle } from "lucide-react";
import React from "react";

async function AboutSection() {
  const { statistics } = await getStatistics();
  return (
    <section id="about" className="relative container pt-20">
      <Effect className="-left-32 md:-left-44 -top-12" />
      <article className="relative max-w-[50rem] mx-auto bg-background/90 border rounded-lg p-6 flex flex-col gap-y-6">
        <Effect
          variant="square"
          size="default"
          className="-top-4 -right-3 md:-right-5 -z-10 rotate-12"
        />
        <SectionTitle
          title="about me"
          description="a quick introduction about me"
          className="items-start"
        />
        <div className="md:text-lg">
          I have a proven track record of delivering high-quality, responsive
          websites and applications that meet the needs of both businesses and
          users, I have a deep understanding of the latest technologies and
          trends in front-end development, and I always stay ahead of the curve
          to deliver cutting-edge solutions. I bring a unique combination of
          technical expertise, creativity, and problem-solving skills to every
          project, ensuring that every solution I deliver is tailored to the
          needs of my clients. I am a true front-end development specialist,
          constantly pushing the boundaries of what is possible to create
          exceptional user experiences.
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-end mt-8">
            {statistics.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:items-start"
              >
                <p className="text-foreground text-2xl md:text-4xl font-bold">
                  +{item.value}
                </p>
                <p className="whitespace-nowrap text-sm md:text-lg">
                  {item.label}
                </p>
              </div>
            ))}

            <a
              href="#skills"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "col-span-2 md:col-span-1"
              )}
            >
              <span>Discover Skills</span>
              <ArrowRightCircle className="size-5" />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default AboutSection;
