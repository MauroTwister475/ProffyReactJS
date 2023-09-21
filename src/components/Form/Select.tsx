import { ReactNode, ChangeEvent, HTMLAttributes } from "react";

interface SelectProps extends HTMLAttributes<HTMLSelectElement>{
  id: string,
  label: string,
  value: string,
  children: ReactNode,
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void,
}

export function Select({id, label, value, children, onChange}: SelectProps) {
  return (
    <div>
      <label 
        htmlFor={id}
        className="text-[1.6rem] text-zinc-400 leading-[4rem]"
        >
          {label}
      </label>
      <select 
        value={value}
        className="w-full h-[5rem] outline-none px-4 rounded-lg text-[1.5rem] bg-primary-inputs"
        onChange={onChange}
      >
        {children}
      </select> 
    </div>
  )
}
