import { RFC } from '@center-inc/common-web'

export const Debug: RFC<{ value: any }> = ({ value = {} }) => {
  return (
    <div className="font-mono">
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </div>
  )
}
