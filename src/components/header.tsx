import { useState } from "react";
import { IconBarsClosed } from "../assets/icons/icon-bars-closed";
import { IconBarsOpen } from "../assets/icons/icon-bars-open";
import { textLinksHeader } from "../constants/text-links-header";
import { TextNetworkSocial } from "../constants/text-network-social";

export function Header() {
  // State utils in componente
  const [isOpen, setIsOpen] = useState(false);

  // Function utils in componente
  function handleOpenHeaderMobile() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header
      className={`fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 px-4 sm:px-5 font-poppins py-4 flex flex-row max-md:flex-col items-center justify-between rounded-full max-md:rounded-[5.97px] bg-white/10 backdrop-blur-[30px] transition-all duration-500 ease-in-out w-[calc(100%-2rem)] sm:w-[calc(100%-2.5rem)] max-w-7xl ${
        isOpen ? "max-md:gap-4" : "max-md:gap-0"
      }`}
    >
      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between w-full gap-8">
        {/* container logo  */}
        <div className="cursor-pointer">
          <h1 className="font-poppins text-3xl font-extrabold text-white">
            FL.
          </h1>
        </div>
        {/* container links header  */}
        <div className="flex items-center justify-between gap-3">
          {textLinksHeader.map((link) => (
            <a
              key={link.namelink}
              href="#"
              className="text-white/70 transition-all ease-in-out duration-500 p-2 rounded-[5.97px] hover:text-white hover:bg-white/10 text-[0.9rem] cursor-pointer"
            >
              {link.namelink}
            </a>
          ))}
        </div>

        {/* container network social */}
        <div className="flex items-center justify-between gap-2">
          {TextNetworkSocial.map((link) => (
            <a
              key={link.link}
              target="_blank"
              rel="noopener noreferrer"
              href={link.link}
              aria-label={`Link para ${link.link}`}
            >
              <link.icon className="size-10 transition-all ease-in-out duration-500 rounded-[5.97px] text-white/70 hover:text-white hover:bg-white/10 p-2" />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between w-full">
        {/* container logo  */}
        <div className="cursor-pointer">
          <h1 className="font-poppins text-3xl font-extrabold text-white">
            FL.
          </h1>
        </div>
        <button
          onClick={handleOpenHeaderMobile}
          className="text-white cursor-pointer text-center transition-transform duration-300"
        >
          {isOpen ? (
            <IconBarsClosed className="text-white size-7" />
          ) : (
            <IconBarsOpen className="text-white size-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`w-full md:hidden flex flex-col overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col gap-2 pt-4 mt-4 border-t border-white/10">
          {textLinksHeader.map((link) => (
            <a
              key={link.namelink}
              href="#"
              className="text-white/70 w-full transition-all ease-in-out duration-500 p-3 rounded-[5.97px] hover:text-white hover:bg-white/10 text-[0.9rem] cursor-pointer"
            >
              {link.namelink}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
