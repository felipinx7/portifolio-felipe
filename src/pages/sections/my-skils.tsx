import { CardSkills } from "../../components/card-skills";
import {
  textSkillsBackend,
  textSkillsFrontend,
  textSkillsTools,
} from "../../constants/text-skills";

export function MySkills() {
  return (
    <section className="w-full flex-col flex gap-12 max-md:px-6">
      {/* Container text  */} 
      <div className="flex flex-col w-full text-center justify-center items-center">
        <p className="font-poppins-medium text-primary-300">SOBRE</p>
        <h1 className="font-poppins-bold text-white w-full text-4xl">
          Minhas <span className="text-primary-400">Skills</span>{" "}
        </h1>
        <p className="font-poppins-light text-white">
          Conheça um pouco mais sobre as tecnologias com as quais trabalho.
        </p>
      </div>

      {/* container skills */}
      <div className="flex items-center justify-center flex-col gap-8 flex-col">
        {/* skills frontend */}
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-white text-start w-[70%] max-md:w-full font-poppins-medium pb-4">
            Habilidades Frontend
          </h1>
          <div className="w-[70%] text-[1.1rem] max-md:w-full gap-4 grid grid-cols-7 max-md:grid-cols-3">
            {textSkillsFrontend.map((skill) => (
              <CardSkills {...skill} key={skill.nameStack} />
            ))}
          </div>
        </div>

        {/* skills backend */}
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-white text-[1.1rem] text-start w-[70%] max-md:w-full font-poppins-medium pb-4">
            Habilidades backend
          </h1>
          <div className="w-[70%] max-md:w-full gap-4 grid grid-cols-7 max-md:grid-cols-3">
            {textSkillsBackend.map((skill) => (
              <CardSkills {...skill} key={skill.nameStack} />
            ))}
          </div>
        </div>

        {/* skills tools */}
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-white text-start text-[1.1rem] w-[70%] max-md:w-full font-poppins-medium pb-4">
            Habilidades em Ferramentas
          </h1>
          <div className="w-[70%] max-md:w-full gap-4 grid grid-cols-7 max-md:grid-cols-3">
            {textSkillsTools.map((skills) => (
              <CardSkills {...skills} key={skills.nameStack} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
