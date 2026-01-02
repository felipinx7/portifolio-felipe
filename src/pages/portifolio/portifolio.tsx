import { PhotoBackgroundLines } from "../../assets/images";
import { Hero } from "./sections/hero";

export function Portifolio() {
  return (
    <main className="w-full h-screen flex items-center justify-center bg-background-main">
      {/* Background lines  */}
      <img className="absolute w-screen h-screen object-cover" src={PhotoBackgroundLines} alt="" />

      {/* Renderization of sections  */}
      <div className="max-w-[1280px] relative flex m-0 h-auto w-[100%]">
        <Hero />
      </div>
    </main>
  );
}
