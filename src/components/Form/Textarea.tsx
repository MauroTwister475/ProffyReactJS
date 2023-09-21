import { ChangeEvent } from "react";

interface TextAreaProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
}

export function Textarea({ value, label, onChange }: TextAreaProps) {
  return (
    <div>
      <label className="text-[1.6rem] text-zinc-400 leading-[4rem]">
        {label}
      </label>
      <textarea
        className="resize-none outline-none w-full h-[16rem] py-10 px-6 text-[1.5rem] rounded-lg bg-primary-inputs"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
