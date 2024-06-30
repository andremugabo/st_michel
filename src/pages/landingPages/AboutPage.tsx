// pages/AboutPage.tsx
import React from 'react'
import { LandingPageBanner } from '../../components/landingPageComponents/LandingPageBanner'
import { HistoryOfCathedral } from '../../components/landingPageComponents/HistoryOfCathedral'
import { MissionVisionCards } from '../../components/landingPageComponents/MissionVisionCards'
import { CommissionOfLayLeaders } from '../../components/landingPageComponents/CommissionOfLayLeaders'
import { SlidingTopStories } from '../../components/landingPageComponents/SlidingTopStories'
import { useTranslation } from 'react-i18next'
import img1 from '../../assets/3.jpg'

export const AboutPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <LandingPageBanner
        imgSrc={img1}
        altText={t('banner.altText')}
        titleKey={t('banner.title')}
        descriptionKey={t('banner.description')}
      />
      <div className="container mx-auto px-4">
        <HistoryOfCathedral />
        <MissionVisionCards />
        <CommissionOfLayLeaders />
        <SlidingTopStories />
      </div>
    </div>
  )
}
