import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import eventImage1 from '../../assets/1.jpg'
import eventImage2 from '../../assets/3.jpg'
import eventImage3 from '../../assets/2.jpg'
import eventImage4 from '../../assets/4.jpg'
import eventImage5 from '../../assets/schedule.jpg'

const events = [
  {
    title: 'Event 1',
    date: '2024-07-01',
    description: 'Description of event 1',
    image: eventImage1,
  },
  {
    title: 'Event 2',
    date: '2024-07-05',
    description: 'Description of event 2',
    image: eventImage2,
  },
  {
    title: 'Event 3',
    date: '2024-07-10',
    description: 'Description of event 3',
    image: eventImage3,
  },
  {
    title: 'Event 4',
    date: '2024-07-15',
    description: 'Description of event 4',
    image: eventImage4,
  },
  {
    title: 'Event 5',
    date: '2024-07-20',
    description: 'Description of event 5',
    image: eventImage5,
  },
]

const ITEMS_PER_PAGE = 3

export const RecentEvents: React.FC = () => {
  const { t } = useTranslation()
  const [currentPage, setCurrentPage] = useState(0)

  const startIdx = currentPage * ITEMS_PER_PAGE
  const currentEvents = events.slice(startIdx, startIdx + ITEMS_PER_PAGE)

  const handleNext = () => {
    if ((currentPage + 1) * ITEMS_PER_PAGE < events.length) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <section className="py-8 px-4 bg-cover bg-center text-white">
      <div className="container mx-auto bg-opacity-75  p-6 rounded-lg">
        <h2 className="text-custom-blue text-3xl lg:text-4xl font-bold mb-4">
          {t('recentEvents')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentEvents.map((event, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg bg-cover bg-center text-white"
              style={{ backgroundImage: `url(${event.image})` }}
            >
              <div className="p-2 rounded bg-opacity-75 bg-custom-blue">
                <h3 className="text-xl font-bold">{t(event.title)}</h3>
                <p className="text-gray-300   p-2">{t(event.date)}</p>
                <p className="p-2">{t(event.description)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className="bg-custom-blue text-white py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t('previous')}
          </button>
          <button
            onClick={handleNext}
            disabled={(currentPage + 1) * ITEMS_PER_PAGE >= events.length}
            className="bg-custom-blue text-white py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t('next')}
          </button>
        </div>
      </div>
    </section>
  )
}
