import { DetailBody } from '../../components/restaurant-detail/DetailBody'
import { DetailPageHeading } from '../../components/restaurant-detail/DetailPageHeading'

const RestuarantPage = () => {
  
  return (
    <div className='flex flex-col gap-1 w-full max-w-[375px] h-full mx-auto bg-light-grey'>
      <DetailPageHeading />
      <DetailBody />
    </div>
  )
}

export { RestuarantPage }
