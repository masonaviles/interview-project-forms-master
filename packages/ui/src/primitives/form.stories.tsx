import type { Story, StoryDefault } from '@ladle/react'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  zod,
  zodResolver,
} from './form'
import { Input } from './input'

const submitContactFormParams = zod.object({
  contact: zod.string(),
  body: zod.string().min(2, {
    message: 'Please enter a description.',
  }),
  intent: zod.string().min(2, {
    message: 'Please select a value',
  }),
})

export const DefaultVariant: Story = () => {
  const form = useForm({
    resolver: zodResolver(submitContactFormParams),
    defaultValues: {
      contact: 'user@example.com',
      body: 'This is the form body',
    },
  })

  return (
    <Form {...form}>
      <form>
        <FormField
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Form Item Label</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormDescription>This is a form description</FormDescription>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
