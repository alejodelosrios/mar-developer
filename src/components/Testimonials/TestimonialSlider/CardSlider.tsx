type Props = {
  name: string
  review: string
  avatar: string
  slideIndex: number
  index: number
}

export const CardSlider = ({ name, review, avatar, slideIndex, index }: Props) => {
  return (
    <article
      className={
        slideIndex === index + 1
          ? 'w-100 h-100 absolute transition-opacity ease-in-out duration-500 delay-300 flex flex-col items-center opacity-100'
          : 'w-100 h-100 absolute transition-opacity ease-in-out duration-500 delay-300 flex flex-col items-center opacity-0'
      }
    >
      <div className="flex justify-center w-full">
        <img
          data-testid="slider-img"
          className="aspect-square overflow-hidden rounded-full border border-primary border-2 w-[4rem]"
          src={avatar}
          alt={`${name}_img`}
        />
      </div>
      <h5>{name}</h5>
      <small data-testid="slider-review" className="mt-6 select-none">
        {review}
      </small>
    </article>
  )
}
