import type { Meta, StoryObj } from '@storybook/react'
import DonatelloImg from '../../../../assets/donatello.png'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Primary: Story = {
  args: {
    fallback: 'VT',
    src: DonatelloImg,
  },
}
