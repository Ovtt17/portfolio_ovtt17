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
  { name: "Home", href: "/#hero", icon: <HomeIcon className={props} /> },
  { name: "About Me", href: "/#about", icon: <UserCircleIcon className={props} /> },
  { name: "Experience", href: "/#experience", icon: <ToolsIcon className={props} /> },
  { name: "Projects", href: "/#projects", icon: <CodeIcon className={props} /> },
  { name: "Technologies", href: "/#technologies", icon: <CodeIcon className={props} /> },
  { name: "Contact", href: "/#contact", icon: <SendIcon className={props} /> },
];
