import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import { LeftIcon, RightIcon } from '../Icons'

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

const ChildrenExample = () => (
  <React.Fragment>
    <LeftIcon width={8} />
    <span>Label</span>
    <RightIcon width={8} />
  </React.Fragment>
)

export const PrimaryFilled: Story = {
  args: {
    children: <ChildrenExample />,
    className: 'flex items-center justify-between',
  },
}

export const SecondaryFilled: Story = {
  args: {
    children: <ChildrenExample />,
    className: 'flex items-center justify-between',
    variant: 'secondary',
  },
}

export const ErrorFilled: Story = {
  args: {
    children: <ChildrenExample />,
    className: 'flex items-center justify-between',
    variant: 'error',
  },
}

export const PrimaryStroke: Story = {
  args: {
    children: <ChildrenExample />,
    className: 'flex items-center justify-between',
    aesthetics: 'stroke',
  },
}

export const SecondaryStroke: Story = {
  args: {
    children: <ChildrenExample />,
    className: 'flex items-center justify-between',
    variant: 'secondary',
    aesthetics: 'stroke',
  },
}

export const ErrorStroke: Story = {
  args: {
    children: <ChildrenExample />,
    className: 'flex items-center justify-between',
    variant: 'error',
    aesthetics: 'stroke',
  },
}

export const PrimaryGhost: Story = {
  args: {
    children: <ChildrenExample />,
    className: 'flex items-center justify-between',
    aesthetics: 'ghost',
  },
}

export const SecondaryGhost: Story = {
  args: {
    children: <ChildrenExample />,
    className: 'flex items-center justify-between',
    variant: 'secondary',
    aesthetics: 'ghost',
  },
}

export const ErrorGhost: Story = {
  args: {
    children: <ChildrenExample />,
    className: 'flex items-center justify-between',
    variant: 'error',
    aesthetics: 'ghost',
  },
}
