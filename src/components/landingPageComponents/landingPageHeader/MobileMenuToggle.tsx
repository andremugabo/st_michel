// MobileMenuToggle.tsx
import React from 'react'

interface Props {
  onClick: () => void
  isOpen: boolean
}

const MobileMenuToggle: React.FC<Props> = ({ onClick, isOpen }) => {
  return (
    <div className="flex items-center md:hidden">
      <button
        onClick={onClick}
        className="text-customYellow focus:outline-none"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
    </div>
  )
}

export default MobileMenuToggle
