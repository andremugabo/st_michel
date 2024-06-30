import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img1 from '../../assets/3.jpg'
import img2 from '../../assets/1.jpg'
import img3 from '../../assets/2.jpg'
import img4 from '../../assets/4.jpg'
import { PrevArrow, NextArrow } from './CustomArrows'
import { useTranslation } from 'react-i18next'

const banners = [
  { imgSrc: img1, alt: 'Banner 1' },
  { imgSrc: img2, alt: 'Banner 2' },
  { imgSrc: img3, alt: 'Banner 3' },
  { imgSrc: img4, alt: 'Banner 4' },
]

export const SlidingBanner: React.FC = () => {
  const { t } = useTranslation()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (
      dots:
        | string
        | number
        | boolean
        | React.ReactElement<
            unknown,
            string | React.JSXElementConstructor<unknown>
          >
        | Iterable<React.ReactNode>
        | React.ReactPortal
        | null
        | undefined,
    ) => (
      <div className="flex justify-center mt-4">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="w-8 h-8 flex items-center justify-center text-blue-700 font-bold border-2 border-blue-700 rounded-full bg-white">
        {i + 1}
      </div>
    ),
  }

  return (
    <div className="relative h-80 md:h-96 overflow-hidden lg:h-screen border-gray-800">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="relative w-full h-full">
            <img
              src={banner.imgSrc}
              alt={banner.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
              <div className="text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {t(`banners.${index}.alt`)}
                </h2>
                <p className="text-lg md:text-xl">
                  {t(`banners.${index}.description`)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
