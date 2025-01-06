import classNames from "classnames";
import FullPageSection from "../components/FullPageSection";
import { useRef } from "react";

interface Service {
  id: number;
  name: string;
  info: string;
}

const Services = () => {
  const toggleRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleToggle = (id: number) => {
    const element = toggleRefs.current[id];
    if (element) {
      element.classList.toggle("hidden");
      element.classList.toggle("opacity-0");
      element.classList.toggle("opacity-100");
      element.classList.toggle("max-h-0");
      element.classList.toggle("max-h-screen");
    }
  };

  const services: Service[] = [
    { id: 1, name: "Servicio A", info: "Información del Servicio A" },
    { id: 2, name: "Servicio B", info: "Información del Servicio B" },
    { id: 3, name: "Servicio C", info: "Información del Servicio C" },
  ];

  return (
    <FullPageSection id="services" className="bg-orange-500 text-white">
      <div className="container border border-black">
        <div className="space-y-4 p-4">
          {services.map((service) => (
            <div key={service.id} className="border rounded-lg">
              <button
                onClick={() => handleToggle(service.id)}
                className="w-full text-left px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                {service.name}
              </button>
              <div
                ref={(el) => (toggleRefs.current[service.id] = el)}
                className={classNames(
                  "hidden opacity-0 max-h-0 transition-all duration-500 overflow-hidden px-4 py-2 bg-gray-100",
                )}
              >
                {service.info}
              </div>
            </div>
          ))}
        </div>
      </div>
    </FullPageSection>
  );
};

export default Services;
