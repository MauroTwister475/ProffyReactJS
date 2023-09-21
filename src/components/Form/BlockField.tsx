import { ReactNode } from 'react'

interface BlockFieldProps {
  children: ReactNode,
  topic?: string,
}

export function BlockField({children, topic}: BlockFieldProps) {
  return (
    <div className='w-full'>
      <h2 className="text-[1.5rem] text-primary-inputs leading-[3rem]">
        {topic}
      </h2>
      {children}
    </div>
  )
}
