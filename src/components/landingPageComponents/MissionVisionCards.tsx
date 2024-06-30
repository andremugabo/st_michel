import React from 'react'
import { useTranslation } from 'react-i18next'

export const MissionVisionCards: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
      {/* Mission Card */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-xl font-bold mb-2">{t('mission.title')}</h3>
        <p className="text-lg">{t('mission.content')}</p>
      </div>
      {/* Vision Card */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-xl font-bold mb-2">{t('vision.title')}</h3>
        <p className="text-lg">{t('vision.content')}</p>
      </div>
    </section>
  )
}
