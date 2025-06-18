import React from 'react'
import { cva } from 'cva'

type InputRootProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {}

const inputRootStyles = cva(['h-11', 'pl-11', 'pr-1', 'rounded-lg', 'text-sm', 'border'], {
  variants: {
    intent: {
      primary: ['outline-primary-100', 'border-base-light-gray', 'text-gray-600'],
    },
    size: {
      sm: ['w-72'],
      md: ['w-80'],
      lg: ['w-96'],
      full: ['w-full'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'md',
  },
})

function InputRoot({ className = '', ...props }: InputRootProps) {
  return <input className={`${className} ${inputRootStyles()}`} {...props} />
}

export { InputRoot as Root }
export type { InputRootProps }
