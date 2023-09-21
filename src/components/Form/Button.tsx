import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{}

export function Button({...restProps}: ButtonProps) {
  return (
    <button 
      type="submit"
      className="w-full h-[5rem] text-[1.5rem] font-semibold text-white rounded-lg bg-green-500 transition-colors cursor-pointer lg:w-[20rem] hover:bg-green-600"
      {...restProps} 
    >
      Salvar Cadastro
    </button>
  )
}
