import { ReactNode } from "react"
import { PreviousLinks } from "./PreviousLinks";

interface HeaderProps {
  children: ReactNode,
  topic: string,
  additionalText?: string,
  give_classes?: boolean,
}

export function Header({children, topic, additionalText, give_classes}: HeaderProps) {
 
  return (
    <header className={`w-full h-[58rem] ${give_classes && 'h-[50rem]'} flex flex-col gap-10 bg-primary-violet lg:h-[35rem] p-10 lg:px-40 lg:gap-20`}>
      <PreviousLinks />
      <div className="w-full text-left lg:pl-[11rem] lg:w-[50%]">
        <h1 className="text-[2.8rem] text-white font-bold lg:text-[3.5rem]">
          {topic}
        </h1>
        <span className="text-[1.8rem] text-primary-inputs">
          {additionalText}
        </span>
      </div>
      {children}
    </header>
  )
}
