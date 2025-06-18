import { Icons, InputAtoms } from '../../atoms'
import { cva } from 'cva'
import { forwardRef } from 'react'

type InputProps = InputAtoms.InputRootProps & {
  containerProps?: InputAtoms.InputContainerProps
  labelProps?: InputAtoms.InputLabelProps
  icon?: keyof typeof Icons
  iconPosition?: 'start' | 'end'
}

const iconContainerStyles = cva(['w-9', 'flex', 'items-center', 'absolute', 'text-solo-subtext', 'inset-y-0'], {
  variants: {
    position: {
      start: ['left-0', 'pl-4'],
      end: ['right-0', 'pr-4'],
    },
  },
})

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ containerProps = {}, labelProps = {}, required, icon, iconPosition = 'start', ...props }: InputProps, ref) => {
    function renderLabel() {
      if (!labelProps) return null
      return <InputAtoms.Label {...{ ...labelProps, isRequired: required }} />
    }

    function renderIcon() {
      if (!icon) return null
      const Icon = Icons[icon]
      return <Icon />
    }

    return (
      <InputAtoms.Container {...containerProps}>
        {renderLabel()}
        <div className="relative">
          <div className={iconContainerStyles({ position: iconPosition })}>{renderIcon()}</div>
          <InputAtoms.Root {...props} required={required} ref={ref} />
        </div>
      </InputAtoms.Container>
    )
  },
)

export { Input }
export type { InputProps }
