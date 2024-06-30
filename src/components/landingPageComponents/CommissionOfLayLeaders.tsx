import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import img1 from '../../assets/4.jpg' // Correctly import the image

export const CommissionOfLayLeaders: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className="my-8 px-4 py-6 bg-gray-100 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:w-1/3">
          <img
            src={img1} // Use the imported image variable
            alt={t('commission.imageAlt')}
            className="w-full h-auto rounded-lg shadow-sm"
          />
        </div>

        {/* Text */}
        <div className="md:w-2/3 md:ml-6">
          <h2 className="text-2xl font-bold mb-4">{t('commission.title')}</h2>
          <p className="text-lg mb-4">{t('commission.content')}</p>
          <Link
            to="/layLeaders"
            className="block w-full md:w-auto mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
          >
            {t('commission.readMore')}
          </Link>
        </div>
      </div>
    </section>
  )
}
