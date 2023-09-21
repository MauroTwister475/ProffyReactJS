import { ChangeEvent } from "react";

interface InputProps {
  id: string,
  label: string,
  type: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

export function Input({id, label, type, value, onChange}: InputProps) {
  return (
    <div>
      <label 
        htmlFor={id}
        className="text-[1.6rem] text-zinc-400 leading-[4rem]"
      >
        {label}
      </label>
       <input     
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="outline-none w-full rounded-lg h-[4rem] py-10 px-6 text-[1.5rem] bg-primary-inputs placeholder:text-zinc-400"
      />
    </div>
  )
}
