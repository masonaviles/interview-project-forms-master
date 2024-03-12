import { RFC } from '@center-inc/common-web'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '..'

export const CardWithContent: RFC<{
  title?: string
  description?: string
  footer?: string
}> = ({ title, description, footer, children }) => {
  return (
    <Card>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      )}

      <CardContent>{children}</CardContent>
      {footer && <CardFooter>footer</CardFooter>}
    </Card>
  )
}
