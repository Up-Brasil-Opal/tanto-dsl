import React from 'react'

function RightIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.46967 0.21967C0.176777 0.512563 0.176777 0.987437 0.46967 1.28033L7.18934 8L0.469671 14.7197C0.176777 15.0126 0.176777 15.4874 0.469671 15.7803C0.762564 16.0732 1.23744 16.0732 1.53033 15.7803L8.78033 8.53033C9.07322 8.23744 9.07322 7.76256 8.78033 7.46967L1.53033 0.21967C1.23744 -0.0732233 0.762563 -0.0732233 0.46967 0.21967Z"
        fill="currentColor"
      />
    </svg>
  )
}

export { RightIcon }
