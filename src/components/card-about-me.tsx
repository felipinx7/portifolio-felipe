import type { InterfaceCardAboutMe } from "../interfaces/interface-card-about-me";

export function CardAboutMe(props: InterfaceCardAboutMe) {
  return (
    <article className="flex hover:scale-105 transition-all duration-500 ease-in-out backdrop:blur-[10px] bg-[#D9D9D9]/5 flex-col justify-between gap-4 border-2 rounded-2xl p-5 w-auto border-white">
      {/* container icon card  */}
      <div className="flex items-center justify-center w-[2.4rem] h-[2.4rem] bg-primary-300 rounded-[0.4rem]">
        <p>{<props.icon className="w-6" />}</p>
      </div>

      {/* container name  */}
      <h5 className="text-white font-satoshi-bold">{props.title}</h5>

      {/* description card  */}
      <p className="w-full text-[0.9rem] font-satoshi text-white/80 ">
        {props.desciption}
      </p>
    </article>
  );
}
