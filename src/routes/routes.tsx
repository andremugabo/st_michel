import { createBrowserRouter } from 'react-router-dom'
import {
  HomePage,
  NotFoundPage,
  AboutPage,
  ServicePage,
  LayLeadersPage,
  Gallery,
  Publication,
  Faq,
} from '../pages'
import { LandPagesLayout } from '../layouts'

import React from 'react'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandPagesLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'services', element: <ServicePage /> },
      { path: 'services', element: <ServicePage /> },
      { path: 'layLeaders', element: <LayLeadersPage /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'publication', element: <Publication /> },
      { path: 'faq', element: <Faq /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
