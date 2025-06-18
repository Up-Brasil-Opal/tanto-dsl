import type { Meta, StoryObj } from '@storybook/react'

import { PasswordInput } from './PasswordInput'

const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PasswordInput>

export const Primary: Story = {
  args: {
    label: 'Email',
    icon: 'Email',
  },
}
