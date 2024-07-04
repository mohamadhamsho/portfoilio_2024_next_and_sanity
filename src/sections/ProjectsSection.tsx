import ProjectItem from "@/components/projects/project-item";
import SectionTitle from "@/components/sectionTitle";
import { Effect } from "@/components/ui/effects";
import { getProjects } from "@/lib/projects";
import React from "react";

export const revalidate = 5;

const ProjectsSection = async () => {
  const projects = await getProjects();

  return (
    <div id="projects" className="container relative space-y-6 mt-8 pt-20">
      <Effect className="top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" />
      <SectionTitle title="projects" description="some things i've built" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
