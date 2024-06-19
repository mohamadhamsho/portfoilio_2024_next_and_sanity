import { LucideIcon } from "lucide-react";
export interface SocialLink {
  href: string;
  icon: LucideIcon;
}

export interface NavLink extends SocialLink {
  title: string;
}

export interface Skill {
  _id: string;
  label: string;
  value: number;
  category: string;
}
