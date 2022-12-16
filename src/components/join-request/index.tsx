import { FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setIsJoined, setJoinValue } from "../../redux/join/joinSlice";
import { joinQueue } from "../../redux/queries";
import { ISeat } from "../../redux/waitinglist/model";
import { QUEUE_URL } from "../../utils/constant";
import { BottomSheetComponent } from "../restaurant-detail/BottomSheet";
import { ListBoxSelect } from "./SitingTypeSelect";
import { TermsCondition } from "./Terms&Condition";

interface IJoinReuquest {
  handleChangeJoinValue: (val: 2) => void;
}
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const JoinReuquest = ({ handleChangeJoinValue }: IJoinReuquest) => {
  const [selectedGuests, setSelectedGuests] = useState(1);
  const { seat } = useAppSelector((state) => state.resturant);
  const [selected, setSelected] = useState<ISeat | null>(seat ? seat[0] : null);
  const [err, setErr] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { mutate } = joinQueue(QUEUE_URL, "post");
  const { joinValue } = useAppSelector((state) => state.join);
  const { resturantInfo } = useAppSelector((state) => state.resturant);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestVal = (e.target as HTMLFormElement).request.value;

    if (requestVal && selected && selectedGuests) {
      const formData = {
        identity_id: resturantInfo?.identity_id,
        guest_count: selectedGuests,
        seating_name: selected.name,
        request: requestVal,
      };

      dispatch(setJoinValue(formData));
      mutate.mutate({ ...formData, ...joinValue });
    } else {
      setErr("This field are required");
    }
  };

  useEffect(() => {
    if (mutate.isSuccess) {
      dispatch(setIsJoined(mutate.data));
      handleChangeJoinValue(2);
    }
  }, [mutate]);
  return (
    <form
      onSubmit={handleSubmit}
      className="pt-[25px] px-4 relative pb-[180px]"
    >
      <div>
        <h3 className="text-xl font-semibold leading-5">
          Reservation information
        </h3>
        <span className="text-sm leading-5 text-grey-600">
          Insert your personal data
        </span>
      </div>
      <div className="pt-[18px] flex flex-col gap-3">
        <h4 className="text-base font-semibold leading-5 text-grey-900">
          Number of guests
        </h4>
        <div className="flex gap-3 flex-wrap">
          {num.map((el, idx) => {
            return (
              <div
                key={idx}
                onClick={() => setSelectedGuests(el)}
                className={`${
                  el === selectedGuests
                    ? "bg-purple"
                    : "border-[1px] border-grey-300"
                } w-[47px] h-[47px] rounded-[50%] flex justify-center items-center `}
              >
                <span
                  className={`${
                    el === selectedGuests ? "text-white" : "text-purple"
                  } text-sm font-semibold`}
                >
                  {el}
                </span>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-7 mt-[29px]">
          <div className="flex flex-col gap-3">
            <label
              htmlFor=""
              className="text-base font-semibold leading-4 text-grey-500"
            >
              Seating area
            </label>
            <ListBoxSelect selected={selected} setSelected={setSelected} />
          </div>
          <div className="flex flex-col gap-3">
            <label
              htmlFor="request"
              className="text-base font-semibold leading-4 text-grey-500"
            >
              Any special request?
            </label>
            <input
              type="text"
              name="request"
              id="request"
              className="bg-perwinkle-purple border-[1px] border-light-purple h-[56px] w-full rounded-[40px] text-base leading-4 font-semibold text-purple-300 pl-6"
            />
          </div>
        </div>
      </div>
      <span className="text-red text-sm font-semibold">{err}</span>
      <div className="absolute bottom-2 max-w-[375px]">
        <span className="text-base font-semibold leading-5 text-grey-900">
          By Clicking confirm you’re accept reservation{" "}
          <span
            onClick={() => setOpen(true)}
            className="text-purple text-base font-semibold leading-5"
          >
            Terms
          </span>{" "}
          &{" "}
          <span
            onClick={() => setOpen(true)}
            className="text-purple text-base font-semibold leading-5"
          >
            conditions
          </span>
        </span>
        <button className="h-[46px] max-w-[343px] mt-5 w-full flex justify-center items-center bg-purple rounded-[34px] gap-3">
          <span className="text-base font-semibold leading-5 text-white">
            Join Waiting list
          </span>
        </button>
      </div>
      <BottomSheetComponent
        className="bottomSheetJoin"
        open={open}
        setOpen={setOpen}
      >
        <TermsCondition setOpen={setOpen} />
      </BottomSheetComponent>
    </form>
  );
};

export { JoinReuquest };
