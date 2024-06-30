import React from 'react'
import { useTranslation } from 'react-i18next'

interface LandingPageBannerProps {
  imgSrc: string
  altText: string
  titleKey: string
  descriptionKey: string
}

export const LandingPageBanner: React.FC<LandingPageBannerProps> = ({
  imgSrc,
  altText,
  titleKey,
  descriptionKey,
}) => {
  const { t } = useTranslation()

  return (
    <div className="relative w-full h-90 md:h-96 lg:h-96">
      <img src={imgSrc} alt={altText} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl lg:text-4xl xl:text-5xl font-bold">
          {t(titleKey)}
        </h1>
        <p className="text-white text-lg lg:text-xl xl:text-2xl">
          {t(descriptionKey)}
        </p>
      </div>
    </div>
  )
}
