import type { Story, StoryDefault } from '@ladle/react'
import { Breadcrumbs } from './breadcrumbs'

const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
  { name: 'Project', href: '#', current: true },
]
export const DefaultVariant: Story = () => <Breadcrumbs pages={pages} />
