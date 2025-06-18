import React from 'react'
import { Avatar } from 'radix-ui'
import { cva } from 'cva'

type AvatarRootProps = Avatar.AvatarProps & {}

const avatarRootStyles = cva([], {
  variants: {
    intents: {},
    size: {
      sm: ['w-8'],
      md: ['w-10'],
      lg: ['w-12'],
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

function AvatarRoot({ className = '', ...props }: AvatarRootProps) {
  return <Avatar.Root className={`${className} ${avatarRootStyles()}`} {...props} />
}

export { AvatarRoot as Root }
export type { AvatarRootProps }
