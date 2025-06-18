import React from 'react'
import { Icons, InputAtoms } from '../../atoms'

function PasswordInput() {
  const [showPassword, setShowPassword] = React.useState<boolean>(false)

  const ShowPasswordIcon = showPassword ? Icons.EyeCheck : Icons.EyeClosed

  function togglePassword() {
    setShowPassword((state) => !state)
  }

  return (
    <InputAtoms.Container>
      <div className="relative">
        <InputAtoms.Root />
        <button
          className="absolute inset-y-0 right-4 flex items-center justify-center h-11 w-5 text-base-dark-gray"
          onClick={togglePassword}
        >
          <ShowPasswordIcon />
        </button>
      </div>
    </InputAtoms.Container>
  )
}

export { PasswordInput }
