import { Link, useLocation } from "react-router-dom";
import { navigation } from "../../utils/constant";
import { ReactComponent as SybmolIcon } from "../../assets/icons/allegicsymbol.svg";
import { ReactComponent as EcoLeafIcon } from "../../assets/icons/ecologyleaf.svg";
import { ReactComponent as SeasoningIcon } from "../../assets/icons/seasoningchilli.svg";
import PastaImg from "../../assets/images/pasta.png";

const BottomSheetContent = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col gap-[10px] px-4 pb-[30px]">
      <nav className="flex gap-4 w-full justify-center">
        {navigation.map((el, idx) => {
          return (
            <div
              key={idx}
              className={`w-[82px] h-9 rounded-[48px] flex justify-center items-center${
                location.pathname === el.link
                  ? " border-[1px] border-purple"
                  : ""
              }`}
            >
              <Link
                to={el.link}
                className={`text-sm leading-4${
                  location.pathname === el.link
                    ? " text-purple font-semibold"
                    : ""
                }`}
              >
                {el.title}
              </Link>
            </div>
          );
        })}
      </nav>
      <div className="border-b-[2px] border-b-light-grey">
        <h3 className="text-base font-semibold">Chinese</h3>
        <span className="text-grey-100 text-sm">
          Pinterest quinoa wolf beard. Shoreditch von biodim vex illologist roof
          party taxidermy
        </span>
      </div>
      <div>
        <div className="flex justify-between">
          <div className="flex flex-col pt-[4px] gap-2 max-w-[267px]">
            <div className="flex gap-3 max-w-[156px] min-w-[189px]">
              <h3 className="text-base leading-5 font-semibold">
                Chilly noodles
              </h3>
              <div className="flex gap-1">
                <SybmolIcon />
                <EcoLeafIcon />
                <SeasoningIcon />
              </div>
            </div>
            <div className="text-xs text-grey-100 leading-4">
              Put a bird on it shoreditch edison bulb, aesthetic normcore
              whatever pinterest gentrify copper mug cold-pressed.
            </div>
          </div>
          <div>
            <img src={PastaImg} alt="food" className="rounded w-16 h-16" />
          </div>
        </div>
        <div className="max-w-[267px] flex flex-col gap-[10px] pt-[10px]">
          <div className="flex gap-3 items-center">
            <div className="w-[47px] h-5 bg-grey-200 rounded flex justify-center items-center">
              <span className="text-xs font-semibold leading-4">$ 4.50</span>
            </div>
            <div>
              <span className="text-grey-100 text-xs font-semibold leading-4">
                450 cal
              </span>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <span className="text-xs leading-4 font-semibold">XL size</span>
            </div>
            <div>
              <div className="w-[47px] h-5 bg-grey-200 rounded flex justify-center items-center">
                <span className="text-xs font-semibold leading-4">$ 5.50</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <span className="text-xs leading-4 font-semibold">XXL size</span>
            </div>
            <div>
              <div className="w-[47px] h-5 bg-grey-200 rounded flex justify-center items-center">
                <span className="text-xs font-semibold leading-4">$ 6.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BottomSheetContent };
