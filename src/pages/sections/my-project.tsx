import { CardProject } from "../../components/card-project";
import { textMyProject } from "../../constants/text-my-projects";

export function MyProject() {
  return (
    <section className="max-md:px-4">
      {/* Container text  */}
      <div className="flex flex-col w-full text-center py-16 justify-center items-center">
        <p className="font-poppins-medium text-primary-300">PORTFÓLIO</p>
        <h1 className="font-poppins-bold text-white w-full text-4xl">
          Meus <span className="text-primary-400">Projetos</span>{" "}
        </h1>
        <p className="font-poppins-light text-white">
          Uma seleção dos projetos que desenvolvi, mostrando minhas <br />{" "}
          habilidades em ação.
        </p>
      </div>

      {/* container cards */}
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 gap-8 w-[80%] max-lg:flex max-lg:flex-col max-lg:w-full">
          {textMyProject.map((project) => (
            <CardProject
              description={project.description}
              linkFigma={project.linkFigma}
              linkGithub={project.linkGithub}
              photoProject={project.photoProject}
              stacksUtils={project.stacksUtils}
              title={project.title}
              urlSite={project.urlSite}
              key={project.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
