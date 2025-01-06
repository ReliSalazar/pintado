import FullPageSection from "../components/FullPageSection";
import { Mail, Smartphone } from "lucide-react";
import icon from "../assets/img/icon.png";
import text from "../assets/img/text.png";

const Home = () => {
  return (
    <FullPageSection id="home">
      <div className="container flex flex-col items-center gap-20 px-4">
        <div className="max-w-3xl flex flex-col md:flex-row gap-2 items-center">
          <img alt="" src={icon} className="max-w-32 md:max-w-40" />
          <img alt="" src={text} className="w-9/12" />
        </div>

        <div className="container flex flex-col items-center gap-2">
          <div className="flex gap-4 text-zinc-300 hover:text-white ease-in-out duration-300">
            <Smartphone />
            <a href="tel:7721244386">772 124 4386</a>
          </div>

          <div className="flex gap-4 text-zinc-300 hover:text-white ease-in-out duration-300">
            <Mail />
            <a href="mailto:email@example.com">email@example.com</a>
          </div>
        </div>
      </div>
    </FullPageSection>
  );
};

export default Home;
