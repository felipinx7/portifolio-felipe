import { CardAboutMe } from "../../components/card-about-me";
import { textCardAboutMe } from "../../constants/text-about-me";

export function AboutMe() {
  return (
    <section className="w-full flex flex-col gap-12 py-12 max-lg:gap-6 max-md:px-4">
      {/* Container texts */}
      <div className="flex flex-col w-full text-center justify-center items-center">
        <p className="font-poppins-medium text-primary-300">SOBRE</p>
        <h1 className="font-poppins-bold text-white w-full text-4xl">
          {" "}
          Conheça um pouco{" "}
          <span className="text-primary-400">sobre mim.</span>{" "}
        </h1>
      </div>

      {/* Container information */}
      <div className="w-full text-left items-center justify-between flex gap-4">
        {/* Text about me  */}
        <div className="w-1/3 max-md:w-full max-sm:hidden flex flex-col gap-8">
          <p className="font-satoshi text-neutral-50/90">
            Sou desenvolvedor full stack e sou apaixonado por criar experiências
            digitais modernas e funcionais. Abaixo estão minhas principais
            habilidades.
          </p>

          <p className="font-satoshi text-neutral-50/90">
            Minha jornada no desenvolvimento começou há alguns anos, e desde
            então venho aprimorando minhas habilidades constantemente, sempre
            buscando aprender novas tecnologias e melhores práticas. Acredito
            que um bom código deve ser não apenas funcional, mas também bonito e
            fácil de manter. Por isso, dedico atenção especial à arquitetura e
            organização dos meus projetos.
          </p>
        </div>

        {/* container cards  */}
        <div className="gap-8 w-[58%] max-md:w-full grid grid-cols-2 max-md:grid-cols-1">
          {textCardAboutMe.map((card) => (
            <CardAboutMe {...card} key={card.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
