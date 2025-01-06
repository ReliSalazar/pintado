import React from "react";

interface FullPageSectionProps {
  id: string;
  children: React.ReactNode;
  align?: string;
  className?: string;
}

const FullPageSection: React.FC<FullPageSectionProps> = ({
  id,
  children,
  align = "items-center",
  className,
}) => {
  return (
    <section
      id={id}
      className={`h-screen w-full flex justify-center ${align} transition-opacity duration-1000 ease-in-out opacity-0 animate-fadeIn ${className}`}
    >
      {children}
    </section>
  );
};

export default FullPageSection;
