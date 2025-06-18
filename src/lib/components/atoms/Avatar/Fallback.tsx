import { Avatar } from 'radix-ui'

type AvatarFallbackProps = Avatar.AvatarFallbackProps & {}

function AvatarFallback({ ...props }: AvatarFallbackProps) {
  return <Avatar.Fallback {...props} />
}

export { AvatarFallback as Fallback }
