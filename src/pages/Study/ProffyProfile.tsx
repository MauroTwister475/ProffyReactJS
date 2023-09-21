import { ProffyInfo } from "../../Utils/schoolData";
// import avatar from "../../assets/avatar.jpg";
import whatsAppIcon from "../../assets/whatsApp.svg";

interface ProffyProfileProps {
  proffyProfile: ProffyInfo[],
  whatsAppLink: string,
}

export function ProffyProfile({proffyProfile, whatsAppLink}:ProffyProfileProps) {

  const LinkWhatsApp = ` https://wa.me/${whatsAppLink}`;
  console.log(whatsAppLink);

  return (
      <ul className="w-full lg:w-[60%] flex flex-col">
      {proffyProfile.map((profile) => {
        return (
          <li key={profile.id} className="w-full flex flex-col gap-10 items-center justify-center rounded-lg bg-white">
            <header className="w-full flex gap-6 items-center py-8 px-10">
              <img
                src={profile.avatar}
                alt="Warning"
                className="w-[6rem] h-[6rem] rounded-full"
              />
              <div className="flex flex-col">
                <strong className="font-bold text-[1.9rem] text-form_title">
                  {profile.name}
                </strong>
                <span className="text-zinc-500 text-[1.5rem]">
                  {profile.subject}
                </span>
              </div>
            </header>
            <div className="w-full text-justify px-10">
              <p className="text-[1.5rem] text-zinc-500">
                {profile.biografia}
              </p>
            </div>
            <footer className="w-full flex flex-col gap-8 px-12 py-10 items-center justify-center lg:py-10 lg:px-10 lg:gap-0 lg:flex-row lg:justify-between bg-zinc-100">
              <div className="w-full flex  gap-4 lg:gap-0 lg:flex-col justify-start ">
                <p className="text-zinc-500 text-[1.5rem]">
                  Preço/Hora
                </p>
                <span className="text-violet-600 text-[1.6rem] font-semibold">
                  {profile.cost},00R$
                </span>
              </div>
              <button className="w-full flex justify-center gap-4 items-center h-[5rem] text-[1.5rem] font-semibold text-white rounded-lg bg-green-500 transition-colors cursor-pointer lg:w-[34rem] hover:bg-green-600">
                <img 
                  src={whatsAppIcon} 
                  alt="whatsApp" 
                  className="w-[3rem]" 
                />
                <a href={LinkWhatsApp} >
                  Entrar em contacto
                </a>
              </button>
            </footer>
          </li>
        )})}
    </ul>
  );
}
