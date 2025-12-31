import { IconArchictecture } from "../assets/icons/icon-architecture";
import { IconCode } from "../assets/icons/icon-code";
import { IconDesigner } from "../assets/icons/icon-designer";
import { IconPerformance } from "../assets/icons/icon-performance";
import type { InterfaceCardAboutMe } from "../interfaces/interface-card-about-me";

export const textCardAboutMe: InterfaceCardAboutMe[] = [
  {
    icon: IconCode,
    title: "Código Limpo",
    desciption:
      "Escrevo código organizado, escalável e de fácil manutenção seguindo as melhores práticas. ",
  },
  {
    icon: IconArchictecture,
    title: "Arquitetura",
    desciption:
      "Estruturo projetos de forma escalável e organizada para crescimento futuro.",
  },
  {
    icon: IconDesigner,
    title: "Design  Moderno",
    desciption:
      "Crio interfaces visualmente atraentes com foco em UX/UI e acessibilidade. ",
  },
  {
    icon: IconPerformance,
    title: "Performance",
    desciption:
      "Otimizo aplicações para garantir velocidade e experiência fluida.",
  },
];
