import React from 'react'
import { useTranslation } from 'react-i18next'
import { LandingPageBanner } from '../../components/landingPageComponents/LandingPageBanner'
import { ParishCommitteeComponent } from '../../components/landingPageComponents/ParishCommitteeComponent'
import { ClickableImageCardsComponent } from '../../components/landingPageComponents/ClickableImageCardsComponent'
import { CommissionLeadersComponent } from '../../components/landingPageComponents/CommissionLeadersComponent'

export const LayLeadersPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      {/* Banner Component */}
      <LandingPageBanner
        imgSrc={''}
        altText={''}
        titleKey={''}
        descriptionKey={''}
      />

      {/* Parish Committee Council Component */}
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">
          {t('layLeaders.parishCouncil')}
        </h2>
        <ParishCommitteeComponent
          dutiesTitle={t('layLeaders.dutiesTitle')}
          responsibilitiesTitle={t('layLeaders.responsibilitiesTitle')}
          dutiesContent={t('layLeaders.dutiesContent')}
          responsibilitiesContent={t('layLeaders.responsibilitiesContent')}
        />
      </section>

      {/* Clickable Image Cards Component */}
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">
          {t('layLeaders.councilMembers')}
        </h2>
        <ClickableImageCardsComponent />
      </section>

      {/* Commission Leaders Component */}
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">
          {t('layLeaders.commissionLeaders')}
        </h2>
        <CommissionLeadersComponent
          dutiesTitle={t('layLeaders.commissionDutiesTitle')}
          responsibilitiesTitle={t(
            'layLeaders.commissionResponsibilitiesTitle',
          )}
          dutiesContent={t('layLeaders.commissionDutiesContent')}
          responsibilitiesContent={t(
            'layLeaders.commissionResponsibilitiesContent',
          )}
        />
      </section>
    </div>
  )
}
