import { getProjects } from "@/lib/projects";
import { Statistic } from "@/types/interfaces";

export async function getStatistics() {
  const projects = await getProjects();
  const statistics: Statistic[] = [
    {
      label: "Year experience",
      value: new Date().getFullYear() - 2020,
    },
    {
      label: "Completed project",
      value: projects.length,
    },
  ];

  return { statistics };
}
