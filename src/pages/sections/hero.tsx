import { useEffect, useState } from "react";
import { IconArrow } from "../../assets/icons/icon-arrow";
import { PhotoFelipe } from "../../assets/images";
import { Header } from "../../components/header";

export function Hero() {
  const fullText = "Dev Full Stack + UX Designer.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col gap-4 px-4 sm:px-6 lg:px-0">
      {/* header of portifolio */}
      <Header />

      {/* content main of hero  */}
      <div className="flex items-center h-auto max-lg:flex-col-reverse justify-between max-lg:justify-center gap-8 max-lg:gap-6 py-8 sm:py-4">
        {/* container text */}
        <div className="font-poppins flex flex-col gap-5 w-full lg:w-[70%]">
          <div className="flex flex-col gap-2">
            <p className="text-white text-base sm:text-lg max-md:text-[1.5rem] lg:text-[1.4rem]">
              Olá, Eu sou
              <span className="text-primary-300"> Felipe Lima</span>
            </p>
            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl w-full font-extrabold min-h-[1.2em]">
              {displayedText}
              <span className="animate-pulse">|</span>
            </h1>
          </div>
          <p className="text-white text-sm sm:text-base w-full leading-relaxed">
            Transformo ideias em{" "}
            <span className="text-primary-300">experiências digitais </span>
            incríveis. Especializado em criar interfaces{" "}
            <span className="text-primary-300">modernas</span>, responsivas e
            focadas na experiência do usuário.{" "}
          </p>

          <div className="w-full lg:w-[80%] flex flex-col sm:flex-row items-center justify-start gap-4">
            <button className="px-9 py-3 w-full sm:w-auto cursor-pointer bg-linear-to-r from-purple-800 text-white font-bold to-purple-900 rounded-full inline-flex justify-center items-center gap-2 hover:opacity-90 transition-opacity">
              Entrar em contato
            </button>
            <button className="p-3 w-full sm:w-auto cursor-pointer text-white flex items-center justify-center border-2 border-white rounded-3xl hover:bg-white/10 transition-colors">
              {" "}
              Baixar Currículo <IconArrow />
            </button>
          </div>
        </div>

        {/* container photo felipe */}
        <div className="flex relative z-0 items-center justify-center w-full lg:w-auto">
          <img src={PhotoFelipe} className="w-full h-auto" alt="Foto Felipe" />
        </div>
      </div>
    </div>
  );
}
