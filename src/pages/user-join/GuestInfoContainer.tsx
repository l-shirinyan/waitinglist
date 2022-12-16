import { GuestInfo } from "../../components/join/GuestInfo";
import GuestInfoHeader from "../../components/join/GuestInfoHeader";

const GuestInfoContainer = ({
  handleChangeJoinValue,
}: {
  handleChangeJoinValue: (val: number) => void;
}) => {
  return (
    <>
      <GuestInfoHeader title="Fill this form to Join restaurant waiting list" />
      <GuestInfo handleChangeJoinValue={handleChangeJoinValue} />
    </>
  );
};

export { GuestInfoContainer };
