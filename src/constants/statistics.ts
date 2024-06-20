import { Statistic } from "@/types/interfaces";

export function getStatistics() {
  const statistics: Statistic[] = [
    {
      label: "Year experience",
      value: new Date().getFullYear() - 2020,
    },
    {
      label: "Completed project",
      value: 5,
    },
  ];

  return { statistics };
}
