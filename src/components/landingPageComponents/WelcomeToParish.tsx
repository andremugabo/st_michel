import React from 'react'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/Logo.png'

export const WelcomeToParish: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className=" py-8 px-4 my-8">
      <h2 className="text-custom-blue text-3xl lg:text-4xl font-bold mb-4">
        {t('welcome')}
      </h2>
      <div className="bg-custom-blue text-white container mx-auto flex flex-col md:flex-row items-center md:items-start p-5">
        <div className="md:w-1/3 w-full mb-4 md:mb-0">
          <img
            src={logo}
            alt={t('welcome')}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-2/3 w-full md:pl-8">
          <p className="text-lg">{t('welcomeMessage')}</p>
        </div>
      </div>
    </section>
  )
}
