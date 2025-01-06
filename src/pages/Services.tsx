import classNames from "classnames";
import FullPageSection from "../components/FullPageSection";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

import familyLaw from "../assets/img/services/family-law.webp";
import civilLaw from "../assets/img/services/civil-law.jpg";
import laboralLaw from "../assets/img/services/laboral-law.jpg";
import comercialLaw from "../assets/img/services/commercial-law.webp";
import criminalLaw from "../assets/img/services/criminal-law.webp";
import rightProtection from "../assets/img/services/right-protection.jpg";

interface Service {
  id: number;
  name: string;
  info: string;
  img: string;
}

const Services = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveSection((prev) => (prev === id ? null : id));
  };

  const services: Service[] = [
    {
      id: 1,
      name: "Derecho familiar",
      info: "La familia es el núcleo más importante de la sociedad, y en momentos de conflicto, es esencial contar con un respaldo legal que garantice una solución justa. Ya sea que necesites apoyo en divorcios, custodia de hijos, pensiones alimenticias o sucesiones, trabajamos para proteger tus intereses y fomentar soluciones pacíficas y equitativas.",
      img: familyLaw,
    },
    {
      id: 2,
      name: "Derecho civil",
      info: "Desde contratos hasta disputas legales, el derecho civil abarca situaciones cotidianas que pueden volverse complejas sin la orientación adecuada. Te asesoramos en temas como demandas por incumplimiento, indemnizaciones, propiedad y arrendamiento, asegurando que tus derechos se hagan valer de manera eficiente.",
      img: civilLaw,
    },
    {
      id: 3,
      name: "Derecho laboral",
      info: "Tanto trabajadores como empleadores necesitan claridad y justicia en las relaciones laborales. Representamos tus intereses en casos de despidos injustificados, conflictos laborales, prestaciones o auditorías laborales. Nuestro objetivo es resolver los conflictos con un enfoque estratégico y efectivo.",
      img: laboralLaw,
    },
    {
      id: 4,
      name: "Derecho mercantil",
      info: "Las operaciones comerciales necesitan un marco legal sólido para evitar riesgos. En Cardoso Soluciones Jurídicas, te ayudamos a gestionar contratos, resolver conflictos empresariales y garantizar que tus transacciones cumplan con la normativa vigente. Protegemos tu negocio para que puedas centrarte en hacerlo crecer.",
      img: comercialLaw,
    },
    {
      id: 5,
      name: "Derecho penal",
      info: "Enfrentar un proceso penal puede ser una experiencia intimidante. Ofrecemos defensa legal sólida, estratégica y discreta en casos relacionados con delitos patrimoniales, de violencia o cualquier otro tipo. Nuestro compromiso es garantizar que tus derechos sean respetados en cada etapa del proceso.",
      img: criminalLaw,
    },
    {
      id: 6,
      name: "Derecho de amparo",
      info: "Cuando tus derechos fundamentales están en riesgo, el amparo es la herramienta legal más poderosa. Te representamos en juicios de amparo para protegerte contra actos de autoridad que vulneren tus derechos humanos. Nuestra experiencia en este campo asegura un manejo técnico y eficaz de tu caso.",
      img: rightProtection,
    },
  ];

  return (
    <FullPageSection id="services" className="text-white" align="items-start">
      <div className="container py-5 px-4">
        <div className="space-y-2 max-h-screen">
          {services.map((service) => (
            <div key={service.id}>
              <button
                onClick={() => handleToggle(service.id)}
                className={classNames(
                  "w-full text-left font-bold text-base md:text-lg lg:text-xl flex gap-2 justify-between px-4 py-2 bg-zinc-900 text-zinc-300 border-l-4 ease-in-out duration-300",
                  {
                    "border-zinc-300": activeSection === service.id,
                    "border-zinc-900": activeSection !== service.id,
                  },
                )}
              >
                {service.name}
                <ChevronRight
                  className={classNames("transition-transform duration-300", {
                    "rotate-90": activeSection === service.id,
                    "rotate-0": activeSection !== service.id,
                  })}
                />
              </button>

              <div
                className={classNames(
                  "transition-all duration-500 ease-in-out overflow-hidden px-4 py-2 bg-zinc-800 text-sm md:text-base lg:text-lg transform flex gap-2 flex-col lg:flex-row",
                  {
                    "max-h-0 opacity-0 scale-95 translate-y-[-10px]":
                      activeSection !== service.id,
                    "max-h-screen opacity-100 scale-100 translate-y-0":
                      activeSection === service.id,
                  },
                )}
              >
                {service.info}
                <img src={service.img} alt="" className="lg:max-w-60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </FullPageSection>
  );
};

export default Services;
