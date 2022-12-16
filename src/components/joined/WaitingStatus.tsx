import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

const WaitingStatus = () => {
  const { isJoined } = useAppSelector((state) => state.join);

  return (
    <div className="pt-3 px-4 relative h-full">
      <div className="flex flex-col gap-[9px] justify-center">
        <div className="flex gap-3 justify-center">
          <h3 className="text-4xl font-semibold leading-10">You’re </h3>
          <h3 className="text-4xl font-semibold leading-10 text-purple">
            {isJoined?.formated_order_in_queue}
          </h3>
          <h3 className="text-4xl font-semibold leading-10">in line</h3>
        </div>
        <span className="text-grey-700 text-base font-semibold leading-[26px] text-center">
          You'll receive SMS when your table is ready
        </span>
      </div>
      <div className="w-full h-[164px] max-w-[343px] p-4 bg-perwinkle-purple mt-7">
        <h4 className="text-base font-semibold leading-5">
          Reservation Details
        </h4>
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold leading-5 text-grey-800">
              Number of guest
            </span>
            <span className="text-sm leading-5 font-semibold text-grey-500">
              {isJoined?.guest_count}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold leading-5 text-grey-800">
              Guest name
            </span>
            <span className="text-sm leading-5 font-semibold text-grey-500">
              {isJoined?.guest_name}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold leading-5 text-grey-800">
              Phone Number
            </span>
            <span className="text-sm leading-5 font-semibold text-grey-500">
              {isJoined?.phone_number}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold leading-5 text-grey-800">
              Seating area
            </span>
            <span className="text-sm leading-5 font-semibold text-grey-500">
              {isJoined?.seating_name}
            </span>
          </div>
        </div>
      </div>
      <Link
        to="/"
        className="h-[46px] max-w-[343px] mt-[50px] mb-5 w-full flex justify-center items-center bg-purple rounded-[34px] gap-3"
      >
        <span className="text-base font-semibold leading-5 text-white">
          View Menu
        </span>
      </Link>
    </div>
  );
};

export { WaitingStatus };
