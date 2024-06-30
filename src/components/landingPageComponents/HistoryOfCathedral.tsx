import React from 'react'
import { useTranslation } from 'react-i18next'

export const HistoryOfCathedral: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12 mt-5 h-96">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          {t('abouts.historyTitle')}
        </h2>
        <p className="text-lg md:text-xl mb-6 text-gray-700">
          {t('abouts.historyContent')}
        </p>
        <a
          href="/history" // Adjust the link as necessary
          className="inline-block mt-4 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded transition duration-300"
        >
          {t('abouts.readMore')}
        </a>
      </div>
    </section>
  )
}
