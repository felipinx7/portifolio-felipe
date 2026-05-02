import {
  PhotoBackgroundLines,
  PhotoShadowBottomRigth,
  PhotoShadowTop,
} from "../assets/images";
import { AboutMe } from "./sections/about-me";
import { Contact } from "./sections/contact";
import { Footer } from "./sections/footer";
import { Hero } from "./sections/hero";
import { MyProject } from "./sections/my-project";
import { MySkills } from "./sections/my-skils";

export function Portifolio() {
  return (
    <main className="w-full min-h-screen bg-background-main flex items-start justify-center px-4">
      {/* Background lines  */}
      <img
        className="fixed inset-0 w-screen h-screen object-cover"
        src={PhotoBackgroundLines}
        alt=""
      />
      {/* shadows top left  */}
      <img
        src={PhotoShadowTop}
        className="fixed inset-0 left-0 w-full"
        alt=""
      />

      {/* shadows bottom right */}
      <img
        src={PhotoShadowBottomRigth}
        className="fixed inset-0 left-0 w-full"
        alt=""
      />

      {/* Renderization of sections  */}
      <div className="max-w-7xl w-full relative z-10 pt-24 sm:pt-20">
        <Hero />
        <AboutMe />
        <MySkills />
        <MyProject />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
