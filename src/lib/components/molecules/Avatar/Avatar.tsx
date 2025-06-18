import { AvatarAtoms } from '../../atoms'

type AvatarProps = AvatarAtoms.AvatarRootProps & {
  fallback?: string
  src?: string
}

function Avatar({ fallback = 'U', src, ...props }: AvatarProps) {
  return (
    <AvatarAtoms.Root {...props}>
      <AvatarAtoms.Image src={src} />
      <AvatarAtoms.Fallback>{fallback}</AvatarAtoms.Fallback>
    </AvatarAtoms.Root>
  )
}

export { Avatar }
