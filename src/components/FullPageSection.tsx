import React from "react";

interface FullPageSectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const FullPageSection: React.FC<FullPageSectionProps> = ({
  id,
  children,
  className,
}) => {
  return (
    <section
      id={id}
      className={`h-screen w-full flex justify-center items-center transition-opacity duration-1000 ease-in-out opacity-0 animate-fadeIn ${className}`}
    >
      {children}
    </section>
  );
};

export default FullPageSection;
