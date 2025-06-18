import { Size, Aesthetics } from '../../../../lib/types'
import { cva } from 'cva'

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'error'
  size?: Size
  aesthetics?: Aesthetics
}

const buttonStyles = cva(['h-12', 'rounded-lg', 'font-medium', 'py-4', 'px-6', 'font-sans', 'text-base'], {
  variants: {
    intent: {
      primary: ['bg-primary-600'],
      secondary: ['bg-white', 'text-primary-800'],
      error: ['bg-alert-error'],
    },
    size: {
      sm: ['w-72'],
      md: ['w-80'],
      lg: ['w-96'],
      full: ['w-full'],
    },
    aesthetics: {
      filled: null,
      ghost: ['bg-transparent'],
      stroke: null,
    },
  },
  compoundVariants: [
    {
      intent: 'primary',
      aesthetics: 'stroke',
      className: 'border border-primary-50 bg-transparent text-primary-600',
    },
    { intent: 'primary', aesthetics: 'ghost', className: 'text-primary-600' },
    { intent: 'primary', aesthetics: 'filled', className: 'text-white' },
    { intent: 'secondary', aesthetics: 'stroke', className: 'border border-primary-50' },
    { intent: 'secondary', aesthetics: 'ghost', className: 'text-primary-800' },
    { intent: 'error', aesthetics: 'filled', className: 'text-white' },
    { intent: 'error', aesthetics: 'stroke', className: 'border border-alert-error bg-transparent text-alert-error' },
    { intent: 'error', aesthetics: 'ghost', className: 'text-alert-error' },
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'md',
    aesthetics: 'filled',
  },
})

function Button({ className = '', variant, size, aesthetics, ...props }: ButtonProps) {
  return <button className={`${className} ${buttonStyles({ intent: variant, size, aesthetics })}`} {...props} />
}

export { Button }
export type { ButtonProps }
