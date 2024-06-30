import React from 'react'

interface Props {
  onClick: () => void
  imageSrc: string
  altText: string
}

const LanguageButton: React.FC<Props> = ({ onClick, imageSrc, altText }) => {
  return (
    <button onClick={onClick} className="text-customYellow">
      <img src={imageSrc} alt={altText} className="h-6" />
    </button>
  )
}

export default LanguageButton
