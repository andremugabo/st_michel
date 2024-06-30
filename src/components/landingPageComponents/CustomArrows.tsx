import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface ArrowProps {
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  currentSlide?: number
  slideCount?: number
}

export const PrevArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
  currentSlide,
}) => {
  if (currentSlide === 0) return null // Hide the previous arrow on the first slide
  return (
    <div
      className={`${className} absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer`}
      style={{
        ...style,
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '50%',
        padding: '0.5rem',
      }}
      onClick={onClick}
    >
      <FaChevronLeft size={30} color="white" />
    </div>
  )
}

export const NextArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
  currentSlide,
  slideCount,
}) => {
  if (currentSlide === slideCount! - 1) return null // Hide the next arrow on the last slide
  return (
    <div
      className={`${className} absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer`}
      style={{
        ...style,
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '50%',
        padding: '0.5rem',
      }}
      onClick={onClick}
    >
      <FaChevronRight size={30} color="white" />
    </div>
  )
}
