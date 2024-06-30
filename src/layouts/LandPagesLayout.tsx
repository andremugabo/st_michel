import React from 'react'
import { Outlet } from 'react-router-dom'
import { LandingHeader } from '../components/landingPageComponents/landingPageHeader/LandingHeader'
import { Footer } from '../components/landingPageComponents/Footer'

export const LandPagesLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <LandingHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
