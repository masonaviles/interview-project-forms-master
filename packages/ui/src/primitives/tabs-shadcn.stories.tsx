import type { Story, StoryDefault } from '@ladle/react'
import { Button } from './button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs-shad'

const uploadABIOptions = [
  { label: 'Etherscan', value: 'etherscan' },
  { label: 'Paste ABI', value: 'paste' },
  { label: 'Upload', value: 'upload' },
  { label: 'cli', value: 'cli' },
]

export const DefaultVariant: Story = () => (
  <Tabs defaultValue="paste">
    <TabsList className="w-full grid grid-cols-4">
      {uploadABIOptions.map((opt) => (
        <TabsTrigger key={opt.value} value={opt.value}>
          {opt.label}
        </TabsTrigger>
      ))}
    </TabsList>

    <TabsContent value={'etherscan'}>
      <div>
        <Button type="button" variant={'outline'}>
          Get Contract ABI from Etherscan
        </Button>
      </div>
    </TabsContent>
    <TabsContent value={'paste'}>Something here</TabsContent>
    <TabsContent value={'upload'}>Upload the con</TabsContent>
    <TabsContent value={'cli'}>Upload</TabsContent>
  </Tabs>
)
