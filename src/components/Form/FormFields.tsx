import { ReactNode } from "react";

interface FormFieldsProps {
  children: ReactNode;
  topic: string;
  borderTop?: boolean,
  buttonSchedule?: boolean,
  onAddNewSchedule?: () => void,
}

export function FormFields({topic, children, borderTop, buttonSchedule, onAddNewSchedule }: FormFieldsProps) {
  
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="inline text-form_title text-[2.5rem] font-bold">
          {topic}
        </h1>
        { buttonSchedule && 
          <button 
            className="text-violet-700 font-semibold text-[1.4rem] cursor-pointer"
            onClick={onAddNewSchedule}
          >
            + Novo horário
          </button>}
      </div>
      <div className={`w-full h-full pt-8 ${borderTop && 'border-t border-zinc-200'} `}>
        {children}
      </div>      
    </div>
  );
}
