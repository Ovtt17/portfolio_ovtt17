import HomeIcon from "../assets/Icon/HomeIcon";
import UserCircleIcon from "../assets/Icon/UserCircleIcon";
import CodeIcon from "../assets/Icon/CodeIcon";
import RocketIcon from "../assets/Icon/SendIcon";

export interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const props = "text-primary";

export const navItems: NavItem[] = [
  { name: "Home", href: "#hero", icon: <HomeIcon className={props} /> },
  { name: "About Me", href: "#about", icon: <UserCircleIcon className={props} /> },
  { name: "Experience", href: "#experience", icon: <UserCircleIcon className={props} /> },
  { name: "Projects", href: "#projects", icon: <CodeIcon className={props} /> },
  { name: "Technologies", href: "#technologies", icon: <CodeIcon className={props} /> },
  { name: "Contact", href: "#contact", icon: <RocketIcon className={props} /> },
];
