import { Smartphone } from "lucide-react";
import FullPageSection from "../components/FullPageSection";

const Contact = () => {
  return (
    <FullPageSection id="contact" className="text-white">
      <div className="pt-10 h-full flex flex-col justify-between gap-4 text-sm md:text-base lg:text-lg">
        <div className="h-full w-full px-4 flex items-center justify-center">
          <div className="container flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <p className="text-center">
                La clave para resolver tus problemas legales está en actuar con
                prontitud y con el respaldo adecuado.{" "}
                <span className="font-bold">
                  En Cardoso Soluciones Jurídicas
                </span>
                , estamos listos para escucharte, asesorarte y representar tus
                intereses con profesionalismo y dedicación.
              </p>
              <p className="text-center font-bold">
                ¿Necesitas ayuda legal? Contáctanos hoy mismo y comienza a
                construir la solución que necesitas. Tu caso, en las mejores
                manos.
              </p>
            </div>

            <a
              className="bg-[#70111c] p-2 hover:bg-red-900 ease-in-out duration-300 flex items-center justify-center gap-2"
              href="https://wa.me/+527721244386?text=Hola,%20vi%20tu%20tarjeta%20de%20negocio%20y%20%20me%20gustar%C3%ADa%20hacerte%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/whatsapp.svg" className="w-4 h-4 md:w-6 md:h-6" />
              <span>Solicita una asesoría</span>
            </a>

            <a
              href="tel:7721244386"
              className="flex gap-4 text-zinc-300 hover:text-white ease-in-out duration-300"
            >
              <Smartphone />
              <span>772 124 4386</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 justify-center w-screen text-center">
          <p>Visita nuestras oficinas</p>
          <div className="w-full h-60 md:h-96 overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0204099512085!2d-122.41941508468059!3d37.774929779759486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8c3ec3db%3A0xa02f8e4731f1ecf0!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2smx!4v1693709115109!5m2!1sen!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </FullPageSection>
  );
};

export default Contact;
