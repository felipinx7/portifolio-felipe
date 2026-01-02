import { textLinksHeader } from "../constants/text-links-header";
import { TextNetworkSocial } from "../constants/text-network-social";

export function Header() {
  return (
    <header className="w-full px-5 relative font-poppins py-4 mt mt-5 flex items-center justify-between rounded-full bg-white/10 backdrop-blur-[30px]">
      {/* container logo  */}
      <div className="cursor-pointer">
        <h1 className="font-poppins text-3xl font-[800] text-white">FL.</h1>
      </div>
      {/* container links header  */}
      <div className="flex items-center justify-between gap-3">
        {textLinksHeader.map((link) => (
          <a className="text-white transition-all ease-in-out duration-[0.5s] p-2 rounded-[5.97px] hover:text-white text-white/70 hover:bg-white/10 text-[0.9rem] cursor-pointer">
            {link.namelink}
          </a>
        ))}
      </div>

      {/* container network social */}
      <div className="flex items-center justify-between gap-2">
        {TextNetworkSocial.map((link) => (
          <a target="_blank" href={link.link}>
            {
              <link.icon className="size-10 transition-all ease-in-out duration-[0.5s] rounded-[5.97px] text-white/70 hover:text-white hover:bg-white/10 p-2 " />
            }
          </a>
        ))}
      </div>
    </header>
  );
}
