import type { InterfaceNetworkSocial } from "../interfaces/interface-network-social";

export function CardContact(props: InterfaceNetworkSocial) {
  return (
    <article className="flex hover:scale-105 ease-in-out transition-all duration-500 flex-col items-center justify-center w-[15%] gap-3">
      {/* container icon */}
      <div className="p-3 bg-[#d9d9d9]/10 cursor-pointer flex items-center justify-center rounded-2xl border-2 border-white">
        <a href={props.link} target="_blank">{<props.icon className="text-white" />}</a>
      </div>

      {/* name network  */}
      <p className="font-satoshi-bold text-white">{props.name}</p>
    </article>
  );
}
