import { HomeIcon } from "../assets/Icon/HomeIcon";
import { UserCircleIcon } from "../assets/Icon/UserCircleIcon";
import { CodeIcon } from "../assets/Icon/CodeIcon";
import { SendIcon } from "../assets/Icon/SendIcon";
import { ToolsIcon } from "@/assets/Icon/ToolsIcon";

export interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const props = "text-primary";

export const navItems: NavItem[] = [
  { name: "home", href: "#hero", icon: <HomeIcon className={props} /> },
  { name: "about", href: "#about", icon: <UserCircleIcon className={props} /> },
  { name: "experience", href: "#experience", icon: <ToolsIcon className={props} /> },
  { name: "projects", href: "#projects", icon: <CodeIcon className={props} /> },
  { name: "technologies", href: "#technologies", icon: <CodeIcon className={props} /> },
  { name: "contact", href: "#contact", icon: <SendIcon className={props} /> },
];
