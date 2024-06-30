import React from 'react'
import { SlidingBanner } from '../../components/landingPageComponents/SlidingBanner'
import { WelcomeToParish } from '../../components/landingPageComponents/WelcomeToParish'
import { MassTimes } from '../../components/landingPageComponents/MassTimes'
import { RecentEvents } from '../../components/landingPageComponents/RecentEvents'

export const HomePage: React.FC = () => {
  return (
    <div>
      <SlidingBanner />
      <div className="container mx-auto px-4">
        <WelcomeToParish />
        <MassTimes />
        <RecentEvents />
      </div>
    </div>
  )
}
