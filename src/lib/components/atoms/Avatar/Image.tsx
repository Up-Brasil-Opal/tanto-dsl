import { Avatar } from 'radix-ui'

type AvatarImageProps = Avatar.AvatarImageProps & {}

function AvatarImage({ ...props }: AvatarImageProps) {
  return <AvatarImage {...props} />
}

export { AvatarImage as Image }
