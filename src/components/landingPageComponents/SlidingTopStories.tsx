import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import NavigationButton from './NavigationButton'
import img1 from '../../assets/3.jpg'
import img2 from '../../assets/1.jpg'
import img3 from '../../assets/2.jpg'
import img4 from '../../assets/4.jpg'

// Example data (replace with your actual content)
const stories = [
  {
    image: img1, // Replace with your image URL
    titleKey: 'aboutTopStories.storyTitle1',
    contentKey: 'aboutTopStories.storyContent1',
  },
  {
    image: img2,
    titleKey: 'aboutTopStories.storyTitle2',
    contentKey: 'aboutTopStories.storyContent2',
  },
  {
    image: img3,
    titleKey: 'aboutTopStories.storyTitle2',
    contentKey: 'aboutTopStories.storyContent2',
  },
  {
    image: img4,
    titleKey: 'aboutTopStories.storyTitle2',
    contentKey: 'aboutTopStories.storyContent2',
  },
  {
    image: img1,
    titleKey: 'aboutTopStories.storyTitle2',
    contentKey: 'aboutTopStories.storyContent2',
  },
  {
    image: img4,
    titleKey: 'aboutTopStories.storyTitle2',
    contentKey: 'aboutTopStories.storyContent2',
  },
  {
    image: img3,
    titleKey: 'aboutTopStories.storyTitle2',
    contentKey: 'aboutTopStories.storyContent2',
  },
  {
    image: img1,
    titleKey: 'aboutTopStories.storyTitle2',
    contentKey: 'aboutTopStories.storyContent2',
  },
  {
    image: img4,
    titleKey: 'aboutTopStories.storyTitle2',
    contentKey: 'aboutTopStories.storyContent2',
  },
  {
    image: img2,
    titleKey: 'aboutTopStories.storyTitle2',
    contentKey: 'aboutTopStories.storyContent2',
  },
]

export const SlidingTopStories: React.FC = () => {
  const { t } = useTranslation()
  const [startIndex, setStartIndex] = useState(0)
  const itemsToShow = 4

  const goToPreviousStories = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - itemsToShow, 0))
  }

  const goToNextStories = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + itemsToShow, stories.length - itemsToShow),
    )
  }

  return (
    <section className="m-8 px-4 ">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {t('aboutTopStories.topStories')}
      </h2>
      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide m-7 p-2">
          {stories
            .slice(startIndex, startIndex + itemsToShow)
            .map((story, index) => (
              <div
                key={index}
                className="flex-none w-64 bg-white p-4 shadow-lg rounded-lg"
              >
                <img
                  src={story.image}
                  alt={t(story.titleKey)}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
                <h3 className="text-lg font-bold mb-2">{t(story.titleKey)}</h3>
                <p className="text-sm">{t(story.contentKey)}</p>
              </div>
            ))}
        </div>

        {/* Navigation buttons */}
        <NavigationButton
          onClick={goToPreviousStories}
          direction="prev"
          disabled={startIndex === 0}
          ariaLabel={t('aboutTopStories.previous')}
        />
        <NavigationButton
          onClick={goToNextStories}
          direction="next"
          disabled={startIndex >= stories.length - itemsToShow}
          ariaLabel={t('aboutTopStories.next')}
        />
      </div>
    </section>
  )
}
