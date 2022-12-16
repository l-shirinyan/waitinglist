import { ReactComponent as Walker } from "../../assets/icons/directions_walk.svg";
import "react-spring-bottom-sheet/dist/style.css";
import { BottomSheetComponent } from "./BottomSheet";
import { useState } from "react";
import { BottomSheetContent } from "./BottomSheetContent";
import { useNavigate } from "react-router-dom";

const DetailBody = () => {
  const [open, setOpen] = useState<boolean>(true);
  const navigate = useNavigate();
  return (
    <div className="bg-white pt-[19px]">
      <div className="flex flex-col gap-4 px-4 ">
        <h3 className="text-xl leading-4 font-semibold">Waiting list</h3>
        <button
          onClick={() => navigate("/example")}
          className="h-[46px] w-full flex justify-center items-center bg-purple rounded-[34px] gap-3"
        >
          <Walker />
          <span className="text-base font-semibold leading-5 text-white">
            Join Waiting List
          </span>
        </button>
        <button
          onClick={() => setOpen(true)}
          className="h-[46px] w-full max-w-[343px] flex justify-center items-center bg-purple rounded-[34px] gap-3"
        >
          <span className="text-base font-semibold leading-5 text-white">
            More
          </span>
        </button>
      </div>
      <BottomSheetComponent
        className="bottomSheet"
        open={open}
        setOpen={setOpen}
      >
        <BottomSheetContent />
      </BottomSheetComponent>
    </div>
  );
};

export { DetailBody };
