import type { Story, StoryDefault } from '@ladle/react'
import { Button } from './button'

export const DefaultVariant: Story = () => <Button>Button Default Variant</Button>

export const WhiteVariant: Story = () => (
  <Button variant={'white'}>Button Default Variant</Button>
)

export const DestructiveVariant: Story = () => (
  <Button variant={'destructive'}>Destructive</Button>
)

export const SecondaryVariant: Story = () => (
  <Button variant={'secondary'}>Destructive</Button>
)

// export default {
//   title: 'Primitives',
// } satisfies StoryDefault
