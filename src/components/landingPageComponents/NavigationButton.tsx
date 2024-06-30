import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface NavigationButtonProps {
  onClick: () => void
  direction: 'prev' | 'next'
  disabled: boolean
  ariaLabel: string
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  onClick,
  direction,
  disabled,
  ariaLabel,
}) => {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 focus:outline-none shadow-lg hover:bg-gray-700 ${direction === 'prev' ? 'left-0' : 'right-0'}`}
      aria-label={ariaLabel}
      disabled={disabled}
      style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
    >
      {direction === 'prev' ? <FaChevronLeft /> : <FaChevronRight />}
    </button>
  )
}

export default NavigationButton
