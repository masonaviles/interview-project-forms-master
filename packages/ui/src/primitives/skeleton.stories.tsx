import type { Story, StoryDefault } from '@ladle/react'
import * as SkeletonComponent from './skeleton'

export const Loading: Story = () => (
  <SkeletonComponent.Skeleton loading={true}>hi</SkeletonComponent.Skeleton>
)
