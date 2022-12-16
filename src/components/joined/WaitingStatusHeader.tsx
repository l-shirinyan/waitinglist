import { Link } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import WaitingStatusImg from "../../assets/images/waiting-status.png";

const WaitingStatusHeader = () => {
  return (
    <div>
      <div className="flex justify-between items-center max-w-[246px] px-4 py-4">
        <Link to="/" className="w-10 h-10 flex justify-center items-center">
          <CloseIcon />
        </Link>
        <h3 className="text-base font-semibold leading-5">Waiting Status</h3>
      </div>
      <div className="pt-[46px]">
        <img src={WaitingStatusImg} alt="waitingstatus" />
      </div>
    </div>
  );
};

export { WaitingStatusHeader };
