import React from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ menuOpen, toggleMenu }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-neutral-900 shadow-md z-50">
      <nav className="flex justify-center items-center px-4 py-2">
        <div className="container flex justify-between items-center">
          <div className="text-2xl font-bold text-white">Pintado</div>

          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="bg-neutral-800 text-gray-300 hover:text-white transition-all duration-300"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
