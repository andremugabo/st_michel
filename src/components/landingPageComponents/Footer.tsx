import React from 'react'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/Logo.png'

export const Footer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <footer className="relative bg-custom-blue text-customYellow py-8 h-80">
      <div className="bg-customYellow h-3 absolute top-0 left-0 w-full"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Logo */}
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <img
              src={logo}
              alt={t('footerLogo')}
              className="h-16 md:h-24 mx-auto"
            />
          </div>

          {/* Menu */}
          <div className="flex flex-col md:flex-row md:space-x-8 items-center justify-center flex-grow">
            <div className="mb-8 md:mb-0">
              <h4 className="text-lg font-semibold mb-2 text-center">
                {t('menu')}
              </h4>
              <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-white justify-center items-center">
                <li>
                  <a href="/" className="hover:underline">
                    {t('home')}
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline">
                    {t('about')}
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:underline">
                    {t('service')}
                  </a>
                </li>
                <li>
                  <a href="/publication" className="hover:underline">
                    {t('publication')}
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="hover:underline">
                    {t('gallery')}
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:underline">
                    {t('faq')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Sacraments */}
            <div className="mb-8 md:mb-0 text-center">
              <h4 className="text-lg font-semibold mb-2">{t('sacraments')}</h4>
              <ul className="space-y-2 text-white">
                <li>{t('massTimes')}</li>
              </ul>
            </div>

            {/* Address */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-2">{t('address')}</h4>
              <p className="text-white">{t('address content')}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="bg-customYellow w-full h-1"></div>
        <p className="text-center font-thin">
          Copyright &copy 2024 Cathedral St Michel Kigali | P.O.BOX xxx
          Kigali,Rwanda | Tel:(250)788-xxx-xxxx KN 67 St, Kigali |
          Email:info@cathedralsaintmichel.rw
        </p>
        <div className="bg-customYellow w-ful h-3"></div>
      </div>
    </footer>
  )
}

export default Footer
