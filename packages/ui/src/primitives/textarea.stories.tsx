import type { Story, StoryDefault } from '@ladle/react'
import { Textarea } from './textarea'

export const DefaultVariant: Story = () => <Textarea />

export const Focused: Story = () => <Textarea autoFocus={true} />
export const PlaceholderText: Story = () => <Textarea placeholder="placeholder text" />
