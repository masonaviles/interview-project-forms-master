import { ChevronRight } from 'lucide-react'
import { RFC } from '@center-inc/common-web'

export const Breadcrumbs: RFC<{
  pages: Array<{ name: string; href: string; current?: boolean }>
}> = ({ pages = [] }) => {
  return (
    <div className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        {/* <li> */}
        {/* <div>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
          </div> */}
        {/* </li> */}
        {pages.map((page, index) => (
          <li key={page.name}>
            <div className="flex items-center">
              <a
                href={page.href}
                className="mr-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </a>
              {index < pages.length - 1 && (
                <ChevronRight
                  className="h-3 w-3 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
