import { Menu, X } from "lucide-react";

interface NavbarToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

const NavbarToggle = ({ isOpen, onClick }: NavbarToggleProps) => (
  <button
    onClick={onClick}
    className="lg:hidden p-2 text-foreground z-50 cursor-pointer"
    aria-label={isOpen ? "Close Menu" : "Open Menu"}
  >
    {isOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
);

export default NavbarToggle;
