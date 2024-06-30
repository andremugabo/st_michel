import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '../../../assets/Logo.png'

const HeaderLogo: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="text-xl font-bold">
      <Link
        to="/"
        className="text-customYellow flex items-center justify-center font-semibold"
      >
        <img src={logo} alt={t('footerLogo')} className="h-9" />
        <p className="hidden sm:block sm:text-sm md:text-base lg:text-lg xl:text-xl">
          Cathedral Saint Michel
        </p>
      </Link>
    </div>
  )
}

export default HeaderLogo
