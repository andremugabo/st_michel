import React from 'react'

interface CommissionLeadersProps {
  dutiesTitle: string
  responsibilitiesTitle: string
  dutiesContent: string
  responsibilitiesContent: string
}

export const CommissionLeadersComponent: React.FC<CommissionLeadersProps> = ({
  dutiesTitle,
  responsibilitiesTitle,
  dutiesContent,
  responsibilitiesContent,
}) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">{dutiesTitle}</h2>
          <p>{dutiesContent}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">{responsibilitiesTitle}</h2>
          <p>{responsibilitiesContent}</p>
        </div>
      </div>
    </div>
  )
}