import React, { FC } from 'react'

export type Props = {
  title: string
  subtitle: string
}

export const SectionTitle: FC<Props> = ({ title, subtitle }) => {
  return (
    <div data-testid="section-title" className="w-full items-center mb-12 flex-col-cont-max gap-1">
      <span className="w-max" data-testid="spanSubtitleId">
        {subtitle}
      </span>
      <h2 className="section-title">{title}</h2>
    </div>
  )
}
