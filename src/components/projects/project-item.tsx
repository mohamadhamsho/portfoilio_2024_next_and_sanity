import { Project } from "@/types/interfaces";
import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProjectCard from "./project-card";
import { urlForImage } from "@lib/image";
import Carousel from "./carousel";
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
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectItem;
