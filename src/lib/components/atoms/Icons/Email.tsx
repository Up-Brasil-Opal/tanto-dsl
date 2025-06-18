import React from 'react'

function Email({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
      <g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5 20a3 3 0 01-3-3V7a3 3 0 013-3h14a3 3 0 013 3v10a3 3 0 01-3 3H5zM7.625 8.22a1 1 0 10-1.25 1.56l3.75 3.001a3 3 0 003.75 0l3.75-3a1 1 0 10-1.25-1.562l-3.75 3a1 1 0 01-1.25 0l-3.75-3v.001z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  )
}

export { Email }
