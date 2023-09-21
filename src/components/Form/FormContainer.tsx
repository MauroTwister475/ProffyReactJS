import { ReactNode } from "react";

interface FormContainerProps {
  children: ReactNode,
}

export function FormContainer({children}:FormContainerProps) {
  return (
    <div className="w-full py-24 px-12 lg:px-36 flex flex-col gap-10">
      {children}
    </div>
  )
}