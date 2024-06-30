import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import scheduleImage from '../../assets/schedule.jpg'

export const MassTimes: React.FC = () => {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('stMichel')

  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-custom-blue text-3xl lg:text-4xl font-bold mb-4">
          {t('massTimes')}
        </h2>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 mx-2 ${activeTab === 'stMichel' ? 'bg-custom-blue text-white' : 'bg-white text-custom-blue'} rounded`}
            onClick={() => setActiveTab('stMichel')}
          >
            St Michel
          </button>
          <button
            className={`px-4 py-2 mx-2 ${activeTab === 'notreDame' ? 'bg-custom-blue text-white' : 'bg-white text-custom-blue'} rounded`}
            onClick={() => setActiveTab('notreDame')}
          >
            Notre Dame de Citéaux
          </button>
          <button
            className={`px-4 py-2 mx-2 ${activeTab === 'utunyoni' ? 'bg-custom-blue text-white' : 'bg-white text-custom-blue'} rounded`}
            onClick={() => setActiveTab('utunyoni')}
          >
            Utunyoni
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-custom-blue text-white p-5 flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-start">
          {activeTab === 'stMichel' && (
            <>
              {/* First Section */}
              <div className="space-y-4 w-full lg:w-1/3 text-center lg:text-left">
                <h3 className="text-2xl font-semibold">{t('sundayMass')}</h3>
                <div>7:00 AM {t('kinyarwanda')}</div>
                <div>9:00 AM {t('english')}</div>
                <div>11:00 AM {t('kinyarwanda')}</div>
                <div>5:00 PM {t('french')}</div>
              </div>

              {/* Image Section */}
              <div className="my-8 lg:my-0 w-full lg:w-1/3 text-center">
                <img
                  src={scheduleImage}
                  alt="Mass Schedule"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>

              {/* Second Section (Aligned Right) */}
              <div className="space-y-4 w-full lg:w-1/3 text-center lg:text-right">
                <h3 className="text-2xl font-semibold">{t('weekdayMass')}</h3>
                <div>
                  {t('monday')} - {t('friday')}
                </div>
                <div>6:30 AM {t('kinyarwanda')}</div>
                <div>12:30 PM {t('kinyarwanda')}</div>
                <h3 className="text-2xl font-semibold mt-4">
                  {t('saturdayMass')}
                </h3>
                <div>6:00 AM {t('kinyarwanda')}</div>
              </div>
            </>
          )}
          {activeTab === 'notreDame' && (
            <>
              {/* First Section */}
              <div className="space-y-4 w-full lg:w-1/3 text-center lg:text-left">
                <h3 className="text-2xl font-semibold">{t('sundayMass')}</h3>
                <div>8:00 AM {t('kinyarwanda')}</div>
                <div>10:00 AM {t('english')}</div>
                <div>12:00 PM {t('kinyarwanda')}</div>
                <div>6:00 PM {t('french')}</div>
              </div>

              {/* Image Section */}
              <div className="my-8 lg:my-0 w-full lg:w-1/3 text-center">
                <img
                  src={scheduleImage}
                  alt="Mass Schedule"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>

              {/* Second Section (Aligned Right) */}
              <div className="space-y-4 w-full lg:w-1/3 text-center lg:text-right">
                <h3 className="text-2xl font-semibold">{t('weekdayMass')}</h3>
                <div>
                  {t('monday')} - {t('friday')}
                </div>
                <div>7:30 AM {t('kinyarwanda')}</div>
                <div>1:30 PM {t('kinyarwanda')}</div>
                <h3 className="text-2xl font-semibold mt-4">
                  {t('saturdayMass')}
                </h3>
                <div>7:00 AM {t('kinyarwanda')}</div>
              </div>
            </>
          )}
          {activeTab === 'utunyoni' && (
            <>
              {/* First Section */}
              <div className="space-y-4 w-full lg:w-1/3 text-center lg:text-left">
                <h3 className="text-2xl font-semibold">{t('sundayMass')}</h3>
                <div>6:00 AM {t('kinyarwanda')}</div>
                <div>8:00 AM {t('english')}</div>
                <div>10:00 AM {t('kinyarwanda')}</div>
                <div>4:00 PM {t('french')}</div>
              </div>

              {/* Image Section */}
              <div className="my-8 lg:my-0 w-full lg:w-1/3 text-center">
                <img
                  src={scheduleImage}
                  alt="Mass Schedule"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>

              {/* Second Section (Aligned Right) */}
              <div className="space-y-4 w-full lg:w-1/3 text-center lg:text-right">
                <h3 className="text-2xl font-semibold">{t('weekdayMass')}</h3>
                <div>
                  {t('monday')} - {t('friday')}
                </div>
                <div>5:30 AM {t('kinyarwanda')}</div>
                <div>11:30 AM {t('kinyarwanda')}</div>
                <h3 className="text-2xl font-semibold mt-4">
                  {t('saturdayMass')}
                </h3>
                <div>5:00 AM {t('kinyarwanda')}</div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
