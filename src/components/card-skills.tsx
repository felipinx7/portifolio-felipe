import type { InterfaceSkills } from "../interfaces/interface-skills";

export function CardSkills(props: InterfaceSkills) {
  return (
    <article className="flex hover:scale-105 ease-in-out duration-500 transition-all w-full py-3 items-center justify-between gap-2 flex-col px-1 backdrop:blur[10px] bg-[#D9D9D9]/5 border-2 border-white rounded-2xl">
      {/* Icon card  */}
      <div className="flex items-center justify-center w-[2.4rem] h-[2.4rem] bg-primary-300 rounded-[0.4rem]">
        {<props.icon className="w-6 text-white" />}
      </div>

      {/* text card  */}
      <p className="font-satoshi-bold text-white">{props.nameStack}</p>
    </article>
  );
}
