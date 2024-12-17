import React from "react";

interface FullScreenMenuProps {
  isOpen: boolean;
  menuOptions: string[];
}

const FullScreenMenu: React.FC<FullScreenMenuProps> = ({
  isOpen,
  menuOptions,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-neutral-800 z-40 flex justify-center items-center transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-6">
          {menuOptions.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-neutral-900 text-white text-xl md:text-2xl font-semibold rounded-lg shadow-md h-24 md:h-32 lg:h-40 transition-transform duration-300 hover:scale-105"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullScreenMenu;
