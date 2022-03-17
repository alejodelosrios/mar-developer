import LeftArrow from '../../../assets/icons/chevron-back-circle-outline.svg'
import RightArrow from '../../../assets/icons/chevron-forward-circle-outline.svg'

type Props = {
  direction: string
  moveSlide(): void
}

export const BtnSlider = ({ direction, moveSlide }: Props) => {
  //console.log(direction, moveSlide)
  return (
    <button
      onClick={moveSlide}
      data-testid="btn-slider"
      className={
        direction === 'next'
          ? 'width-[60px] rounded-full absolute flex justify-center items-center cursor-pointer top-[30%] left-5 -translate-y-[60%]'
          : 'width-[60px] rounded-full absolute flex justify-center items-center cursor-pointer top-[30%] right-5 -translate-y-[60%]'
      }
    >
      <img
        className="w-5 h-5 text-primary pointer-events-none"
        src={direction === 'next' ? LeftArrow : RightArrow}
        alt="arrow_img"
      />
    </button>
  )
}
