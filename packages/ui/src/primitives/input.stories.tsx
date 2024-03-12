import type { Story } from '@ladle/react'
import * as InputComponent from './'

export const DefaultVariant: Story = () => <InputComponent.Input />

export const Placeholder: Story = () => (
  <InputComponent.Input placeholder="Placeholder" />
)
export const Focused: Story = () => (
  <InputComponent.Input autoFocus={true} placeholder="Placeholder" />
)

export const Disabled: Story = () => (
  <InputComponent.Input disabled={true} placeholder="Placeholder" />
)

export const FocusedWithText: Story = () => (
  <InputComponent.Input defaultValue="foo" autoFocus={true} placeholder="Placeholder" />
)
