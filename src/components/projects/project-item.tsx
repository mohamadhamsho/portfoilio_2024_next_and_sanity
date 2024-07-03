import { Project } from "@/types/interfaces";
import { FC } from "react";

import { Calendar, Eye, Github, LayoutDashboard, Tags } from "lucide-react";

import ProjectCard from "./project-card";
import Carousel from "./carousel";
import InfoItem from "./info-item";

import { Separator } from "../ui/separator";
import { buttonVariants } from "../ui/button";

import { cn } from "@/lib/utils";
import { urlForImage } from "@lib/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
interface ProjectItemProps {
  project: Project;
}
const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <ProjectCard
          imageUrl={urlForImage(project.images[0])}
          title={project.title}
        />
      </DialogTrigger>
      <DialogContent className="p-0 sm:max-w-4xl lg:max-w-7xl">
        <DialogHeader className="bg-muted p-4 md:p-6">
          <DialogTitle className="text-foreground capitalize text-xl font-semibold truncate">
            {project.title}
          </DialogTitle>
          <div className="grid lg:grid-cols-2 gap-4 max-h-[85vh] overflow-x-hidden overflow-y-auto">
            <Carousel images={project.images} />
            <div className="space-y-4 lg:space-y-6 p-2 lg:p-4 size-full">
              <p className="text-sm">{project.description}</p>
              <Separator />
              <article className="space-y-2 lg:space-y-4">
                <InfoItem icon={Calendar} label="published">
                  <p className="font-semibold">{project.publishedAt}</p>
                </InfoItem>
                <InfoItem icon={LayoutDashboard} label="layout">
                  <p className="font-semibold">
                    {project.isResponsive ? "responsive" : "n/a"}
                  </p>
                </InfoItem>
                <InfoItem icon={Tags} label="tags">
                  <div className="flex items-center flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="border rounded-sm py-1 px-2 hover:bg-muted cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </InfoItem>
              </article>
              <Separator />
              <div className="flex items-center gap-2">
                <a
                  href={project.demoLink}
                  className={cn(buttonVariants(), "cursor-pointer")}
                  target="_blank"
                >
                  <Eye className="size-4" />
                  <span>View Demo</span>
                </a>
                <a
                  href={project.githubLink}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "cursor-pointer"
                  )}
                  target="_blank"
                >
                  <Github className="size-4" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectItem;
