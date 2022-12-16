import Splash from '../../assets/images/unsplash.png'
import Profile from '../../assets/images/profile.png'
import { ReactComponent as LangIcon } from '../../assets/icons/lang.svg'
import { ReactComponent as ArrowDown } from '../../assets/icons/arrowDown.svg'
import { useAppSelector } from '../../hooks/redux'
import { ReactComponent as CopyIcon } from '../../assets/icons/copy.svg'
import { ReactComponent as TelIcon } from '../../assets/icons/tel.svg'
import { ReactComponent as WhatsIcon } from '../../assets/icons/w-icon.svg'
import { ReactComponent as InstagramIcon } from '../../assets/icons/i-icon.svg'
import { ReactComponent as SnapIcon } from '../../assets/icons/snap-icon.svg'
import { ReactComponent as TikTokIcon } from '../../assets/icons/t-icon.svg'
import { ReactComponent as TwitterIcon } from '../../assets/icons/twiter-icon.svg'
import { ReactComponent as LocationIcon } from '../../assets/icons/location.svg'
import { ReactComponent as StarIcon } from '../../assets/icons/star.svg'
import { ReactComponent as CarIcon } from '../../assets/icons/car.svg'

const DetailPageHeading = () => {
  const { resturantInfo } = useAppSelector((state) => state.resturant)
  return (
    <div className='w-full bg-white pb-4'>
      <div className='h-max relative'>
        <img src={Splash} alt='cover' className='w-full h-full max-h-[166px] object-cover' />
        <img
          src={Profile}
          alt='profile'
          className='w-[23%] aspect-1 rounded-[50%] absolute left-[39%] top-[71%] border-[3px] border-white'
        />
      </div>
      <div className='pt-[17px] pr-[14px] pl-4'>
        <div className='flex items-center gap-[10px] justify-end pl-[3px]'>
          <LangIcon />
          <span className='text-base font-semibold leading-4'>English</span>
          <ArrowDown />
        </div>
      </div>
      <div className='pt-[35px] flex flex-col items-center'>
        <h3 className='text-[24px] font-semibold leading-8'>{resturantInfo?.name} Restaurant</h3>
        <div className='flex gap-[9px] items-center'>
          <span> Aziziyah Branch</span>
          <ArrowDown />
        </div>
      </div>
      <div className='flex justify-between px-4 items-center mt-3'>
        <CopyIcon />
        <TelIcon />
        <WhatsIcon />
        <InstagramIcon />
        <SnapIcon />
        <TikTokIcon />
        <TwitterIcon />
        <LocationIcon />
        <StarIcon />
        <CarIcon />
      </div>
    </div>
  )
}

export { DetailPageHeading }
