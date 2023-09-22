import { memo } from "react";
import { Links } from "./Links";
import { HeroImage } from "./HeroImage";
import { TotalConections } from "./TotalConections";
import logoIcon from "../../assets/proffyLogo.svg";

function HomeComponent() {
  return (
    <section className="w-screen h-screen bg-primary-violet flex flex-col gap-20 items-center justify-center py-20 px-12 xl:px-[30rem] lg:px-60">
      <div className="w-full flex flex-col lg:flex-row lg:gap-8 items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center gap-4 lg:items-start">
          <img src={logoIcon} alt="Proffy" />
          <h1 className="text-[2.8rem] text-center text-text_shape lg:text-left">
            Sua plataforma de estudos online
          </h1>
        </div>
        <HeroImage />
      </div>
      <div className="w-full flex flex-col gap-20 items-center justify-center lg:flex-row lg:justify-between">
        <Links />
        <div className="flex justify-center">
          <TotalConections />
        </div>
      </div>
    </section>
  );
}

export const Home = memo(HomeComponent)