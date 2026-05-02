import { IconArrow } from "../assets/icons/icon-arrow";
import { IconFigma } from "../assets/icons/icon-figma";
import { IconGithub } from "../assets/icons/icon-github";
import type { InterfaceCardMyProject } from "../interfaces/interface-card-my-projects";

export function CardProject(props: InterfaceCardMyProject) {
  return (
    <article className="relative">
      {/* Photo project  */}
      <div className="w-full relative h-[60%] z-0">
        <img
          src={props.photoProject}
          className="object-cover w-full h-full rounded-tl-2xl rounded-tr-2xl"
          alt=""
        />

        {/* Container about project */}
        <div className="w-full transition-all group ease-in-out duration-500 h-full hover:bg-black/70 rounded-tr-2xl rounded-tl-2xl z-10 absolute top-0 cursor-pointer">
          <div className="w-full h-full flex items-center justify-center gap-5">
            <div className="rounded-full hidden border-white border w-12 h-12 group-hover:flex items-center justify-center hover:bg-white ease-in-out transition-all duration-500 p-3">
              <a href={props.linkGithub} target="_blank">
                <IconGithub className="text-white hover:text-black w-6 h-6" />
              </a>
            </div>
            <div className="rounded-full hidden border-white border w-12 h-12 group-hover:flex items-center justify-center hover:bg-white ease-in-out transition-all duration-500 p-3">
              <a href={props.linkFigma} target="_blank">
                <IconFigma className="text-white hover:text-black w-6 h-6" />
              </a>
            </div>
            <div className="rounded-full hidden border-white border w-12 h-12 group-hover:flex items-center justify-center hover:bg-white ease-in-out transition-all duration-500 p-3">
              <a href={props.urlSite} target="_blank">
                <IconArrow className="text-white hover:text-black w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* container information project  */}
      <div className="flex relative z-10 p-4 max-md:gap-6 justify-between flex-col h-[40%] rounded-bl-2xl rounded-br-2xl rounded-br-4 bg-white">
        {/* name project  */}
        <h3 className="font-poppins-bold text-[1.1rem] text-primary-600">
          {props.title}
        </h3>

        {/* description project  */}
        <p className="line-clamp-2 font-satoshi text-primary-600 w-full">
          {props.description}
        </p>

        {/* container stacks project  */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-1">
          {props.stacksUtils.map((link) => (
            <div className="border border-[#744397] flex w-full items-center justify-center font-satoshi-bold text-primary-600 text-center p-1 text-[0.8rem] bg-[#F5E5FC] rounded-full px-8">
              <p className="line-clamp-1 w-auto">{link}</p>
            </div>
          ))}
        </div>

        {/* links project in mobile  */}
        <div className="w-full hidden max-md:flex top-0 h-[80%] items-center justify-center gap-5">
          <div className="w-full flex items-end justify-start p-5 gap-5">
            <div className="rounded-full flex border-2 border-[#734397] w-auto h-12 items-center justify-center hover:bg-white ease-in-out transition-all duration-500 p-3">
              <a
                href={props.linkGithub}
                target="_blank"
                className="flex items-center justify-center gap-2 p-2 w-full"
              >
                <IconGithub className="text-[#734397]  hover:text-black w-6 h-6" />
                <p className="text-[#734397] max-sm:hidden">Github</p>
              </a>
            </div>
            <div className="rounded-full flex border-2 border-[#734397] w-auto h-12 items-center justify-center hover:bg-white ease-in-out transition-all duration-500 p-3">
              <a
                href={props.linkFigma}
                target="_blank"
                className="flex items-center justify-center gap-2 p-2 w-full"
              >
                <IconFigma className="text-[#734397] hover:text-black w-6 h-6" />
                <p className="text-[#734397] max-sm:hidden">Figma</p>
              </a>
            </div>
            <div className="rounded-full flex border-2 border-[#734397] w-auto h-12 items-center justify-center hover:bg-white ease-in-out transition-all duration-500 p-3">
              <a
                href={props.urlSite}
                target="_blank"
                className="flex items-center justify-center gap-2 p-2 w-full"
              >
                <IconArrow className="text-[#734397] hover:text-black w-6 h-6" />
                <p className="text-[#734397] max-sm:hidden">Acessar</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
