import React from 'react'
import { cva } from 'cva'

type InputContainerProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {}

const inputContainerStyles = cva(['flex', 'items-start', 'flex-col', 'gap-2', 'text-gray-600'], { variants: {} })

function InputContainer({ children, className = '', ...props }: InputContainerProps) {
  return (
    <div className={`${className} ${inputContainerStyles()}`} {...props}>
      {children}
    </div>
  )
}

export { InputContainer as Container }
export type { InputContainerProps }
