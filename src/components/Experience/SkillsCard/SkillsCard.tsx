import React from 'react'

type Props = {
  title: string
  level: string
  children?: JSX.Element
}

export const SkillsCard = ({ title, level, children }: Props) => {
  return (
    <div className="flex justify-center items-center w-[160px] h-[45px]">
      <div className="w-1/4 grid grid-cols-1 place-items-center">{children}</div>
      <div className="flex flex-col items-start justify-center w-3/4 ml-4">
        <h4 className="font-semibold">{title}</h4>
          <small className="text-dark text-opacity-30 dark:text-cgray dark:text-opacity-50">{level}</small>
      </div>
    </div>
  )
}
