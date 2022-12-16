import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { JoinReuquest } from "../../components/join-request";
import { GuestInfo } from "../../components/join/GuestInfo";
import GuestInfoHeader from "../../components/join/GuestInfoHeader";
import { WaitingStatus } from "../../components/joined/WaitingStatus";
import { WaitingStatusHeader } from "../../components/joined/WaitingStatusHeader";
import { useAppDispatch } from "../../hooks/redux";
import { useFetch } from "../../redux/queries";
import { getResturantData } from "../../redux/waitinglist/restureantSlice";

const Joining = () => {
  const [join, setJoin] = useState(0);
  const dispatch = useAppDispatch();
  const params = useParams();

  const { data, isLoading, isSuccess } = useFetch(
    process.env.REACT_APP_BASE_URL + `/${params.slug}`,
    "joiningKey"
  );
  const handleChangeJoinValue = (val: 0 | 1 | 2) => {
    setJoin(val);
  };
  useEffect(() => {
    if (isSuccess) {
      dispatch(getResturantData(data));
    }
  }, [data]);
  if (!isLoading) {
    return (
      <div className="flex flex-col gap-1 w-full max-w-[375px] h-full mx-auto bg-white pt-[13px]">
        {join === 0 ? (
          <>
            <GuestInfoHeader title="Fill this form to Join restaurant waiting list" />
            <GuestInfo handleChangeJoinValue={handleChangeJoinValue} />
          </>
        ) : join === 1 ? (
          <>
            <GuestInfoHeader title="Fill this form to join our waitlist" />
            <JoinReuquest handleChangeJoinValue={handleChangeJoinValue} />
          </>
        ) : join === 2 ? (
          <>
            <WaitingStatusHeader />
            <WaitingStatus />
          </>
        ) : (
          ""
        )}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export { Joining };
