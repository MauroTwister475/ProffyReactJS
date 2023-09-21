import warnIcon from "../../assets/warrning.svg";
import { Form } from "."

export function FormFooter() {
  return (
    <footer className="w-full h-[24rem] flex gap-16 flex-col items-center justify-center py-10 lg:py-20 px-12 lg:px-36 lg:gap-0 lg:flex-row lg:justify-between bg-zinc-100 ">
     <div className="w-full flex gap-4 items-center  justify-start">
      <img 
        src={warnIcon} 
        alt="Warning"
        className="w-[4rem]" 
      />
      <span className="text-zinc-400 text-[1.4rem]">
        Importante! <br/> Preencha todos os campos
      </span>
     </div>
      <Form.Button />
    </footer>
  )
}
