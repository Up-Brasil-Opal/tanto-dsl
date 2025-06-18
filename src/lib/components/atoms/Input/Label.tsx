import React from 'react'
import { Label } from 'radix-ui'
import { cva } from 'cva'

type InputLabelProps = Label.LabelProps & {
  isRequired?: boolean
  optionalText?: string
}

const inputLabelStyles = cva(['font-medium', 'text-sm', 'text-primary-800'])

function InputLabel({ className = '', isRequired = false, optionalText, children, ...props }: InputLabelProps) {
  function renderAdditionalText() {
    if (isRequired) return <span className="text-alert-error">*</span>
    return <span className="text-solo-subtext">{optionalText}</span>
  }

  return (
    <Label.Root className={`${className} ${inputLabelStyles()}`} {...props}>
      {children} {renderAdditionalText()}
    </Label.Root>
  )
}

export { InputLabel as Label }
export type { InputLabelProps }
