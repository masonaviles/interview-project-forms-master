import { RFC } from '@center-inc/common-web'
import { Check } from '../..'

export const SellingPoint: RFC = ({ children }) => (
  <div className="space-x-2 flex items-center">
    <Check className="w-4 h-4" />
    {children}
  </div>
)
