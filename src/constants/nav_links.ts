import { NavLink } from "@/types/interfaces";
import { Book, MessageSquareText, Server, User, Wrench } from "lucide-react";

export const navLinks: NavLink[] = [
  {
    title: "about",
    href: "#about",
    icon: User,
  },
  // {
  //   title: "services",
  //   href: "#services",
  //   icon: Server,
  // },
  {
    title: "skills",
    href: "#skills",
    icon: Wrench,
  },
  {
    title: "projects",
    href: "#projects",
    icon: Book,
  },
  {
    title: "contact",
    href: "#contact",
    icon: MessageSquareText,
  },
];
