import {
  PhotoSystemAssisteciaSocial,
  PhotoSystemHoobank,
  PhotoSystemMassapeFascinante,
  PhotoSystemTopFitness,
} from "../assets/images";

import type { InterfaceCardMyProject } from "../interfaces/interface-card-my-projects";

export const textMyProject: InterfaceCardMyProject[] = [
  {
    urlSite: "",
    linkFigma:
      "https://www.figma.com/design/XykAfIHqepKAJlap8BhtOr/DESINGER-ASSIST%C3%8ANCIA-SOCIAL?node-id=138-27&t=f3OHwKpJllTwMwzc-1",
    linkGithub: "https://github.com/ricardokks/assistenciaSocial",
    photoProject: PhotoSystemAssisteciaSocial,
    title: "Sistema da Assistência Social",
    description:
      "Sistema de agendamento e gestão de atendimentos de assistência social, com organização de consultas e acompanhamento de casos.",
    stacksUtils: ["React", "Tailwind", "Git", "Guthub", "TypeScript", "Vite"],
  },
  {
    urlSite: "https://massapefascinante.com.br/",
    linkFigma: "",
    linkGithub: "https://github.com/felipinx7/massapefascinante",
    photoProject: PhotoSystemMassapeFascinante,
    title: "Sistema de Turismo de Massapê",
    description:
      "Plataforma digital para explorar pontos turísticos, estabelecimentos e locais de interesse em Massapê, permitindo que moradores e visitantes descubram a cidade de forma simples, organizada e acessível.",
    stacksUtils: ["React", "Tailwind", "Git", "Github", "TypeScript", "Vite"],
  },
  {
    urlSite: "https://topfitnes.com.br/",
    linkFigma:
      "https://www.figma.com/design/fFR8eJ8ZS803cXwwFiFXIx/PROTOTIPO-SISTEMA---TOPFITNESS?node-id=0-1&t=FZH1LZAzqlIyQAdk-1",
    linkGithub: "https://github.com/felipinx7/topfitnes",
    photoProject: PhotoSystemTopFitness,
    title: "TopFitness — Landing Page de Academia",
    description:
      "Landing page moderna desenvolvida para a academia TopFitness, com foco em apresentar os serviços, planos e diferenciais da marca de forma clara, atrativa e responsiva, proporcionando uma ótima experiência para novos clientes.",
    stacksUtils: ["React", "Tailwind", "Git", "Github", "TypeScript", "Vite"],
  },
{
  urlSite: "https://hoobank-omega-lake.vercel.app/",
  linkFigma: "https://www.figma.com/design/WP2SQy0PmGWyVZGnEGVGq7/PROTOTIPO---HOOBANK?node-id=0-32&t=3FGb0GVt3qICjRTh-1",
  linkGithub: "https://github.com/felipinx7/hoobank",
  photoProject: PhotoSystemHoobank,
  title: "HooBank — Banco Digital",
  description:
    "Landing page moderna e responsiva para um banco digital, desenvolvida com React, Styled-Components e TypeScript. O projeto prioriza design elegante, performance e usabilidade. Para executar, clone o repositório, instale as dependências com Yarn e inicie com yarn dev.",
  stacksUtils: ["React", "Styled-Components", "TypeScript"],
}
];
