import { Mail, Smartphone } from "lucide-react";
import FullPageSection from "../components/FullPageSection";

const About = () => {
  return (
    <FullPageSection id="about" className="text-white text-center">
      <div className="container py-5 px-4 flex flex-col gap-4 items-center">
        <h1 className="font-serif font-bold text-2xl md:text-3xl lg:text-4xl">
          José Manuel Pintado Morales
        </h1>
        <hr className="w-1/2" />
        <div className="flex flex-col items-center gap-2 text-sm md:text-base lg:text-lg max-w-3xl">
          <p>
            En Cardoso Soluciones Jurídicas, contamos con más de 35 años de
            experiencia ofreciendo servicios legales especializados y de alta
            calidad. Liderada por el Dr. Antonio Cardoso, abogado con una sólida
            trayectoria en Derecho Civil, la firma combina el profundo
            conocimiento legal con un enfoque ético y personalizado para atender
            las necesidades de cada cliente.
          </p>
          <p>
            Antonio Cardoso, además de su Licenciatura en Derecho, cuenta con
            una Maestría en Docencia y un Doctorado en Educación, y ha dedicado
            más de tres décadas a la formación de nuevas generaciones de
            profesionistas en el Instituto Politécnico Nacional. Este equilibrio
            entre la práctica profesional y la enseñanza asegura un nivel de
            análisis y estrategias legales excepcionales.
          </p>
          <p>
            En Cardoso Soluciones Jurídicas, nuestro compromiso es proteger tus
            derechos y brindarte soluciones efectivas para resolver conflictos
            legales en diversas áreas, siempre con profesionalismo, ética y
            dedicación.
          </p>
        </div>

        <div className="container flex gap-4 items-center justify-center">
          <a
            className="bg-[#70111c] rounded-full p-2 hover:bg-red-900 ease-in-out duration-300"
            href="https://wa.me/+527721244386?text=Hola,%20vi%20tu%20tarjeta%20de%20negocio%20y%20%20me%20gustar%C3%ADa%20hacerte%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/whatsapp.svg" className="w-4 h-4 md:w-6 md:h-6" />
          </a>

          <a
            className="bg-[#70111c] rounded-full p-2 hover:bg-red-900 ease-in-out duration-300"
            href="tel:7721244386"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Smartphone className="w-4 h-4 md:w-6 md:h-6" />
          </a>

          <a
            className="bg-[#70111c] rounded-full p-2 hover:bg-red-900 ease-in-out duration-300"
            href="mailto:email@example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-4 h-4 md:w-6 md:h-6" />
          </a>
        </div>
      </div>
    </FullPageSection>
  );
};

export default About;
