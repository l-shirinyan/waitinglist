import { useAppSelector } from "../../hooks/redux";

interface IGuestInfoHeader {
  title: string;
}
const GuestInfoHeader = ({ title }: IGuestInfoHeader) => {
  const { resturantInfo } = useAppSelector((state) => state.resturant);
  return (
    <div className="pr-3 pl-5 border-b-[2px] border-grey-200 pb-[23px]">
      <div className="pt-9 flex gap-[13px]">
        <img src={resturantInfo?.logo_url} alt="" className="rounded-[50%] max-w-[86px]" />
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[29px] leading-8 font-semibold">
            {resturantInfo?.name} Restaurent
          </h3>
          <span className="text-[13px] leading-4 text-grey-500">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default GuestInfoHeader;
