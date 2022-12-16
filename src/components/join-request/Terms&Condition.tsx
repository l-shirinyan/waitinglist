import { useEffect } from "react";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getTerms } from "../../redux/join/joinSlice";
import { useFetch } from "../../redux/queries";
import { TERMS_URL } from "../../utils/constant";

interface ITermsCondition {
  setOpen: (open: boolean) => void;
}

const TermsCondition = ({ setOpen }: ITermsCondition) => {
  const { terms } = useAppSelector((state) => state.join);
  const { resturantInfo } = useAppSelector((state) => state.resturant);
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess } = useFetch(
    TERMS_URL + `?identity_id=${resturantInfo?.identity_id}`,
    "termsKey"
  );

  useEffect(() => {
    if (isSuccess) {
      dispatch(getTerms(data?.text));
    }
  }, [data]);
  if (isLoading) {
    return <div></div>;
  } else {
    return (
      <div className="px-4 min-h-[200px]">
        <div className="flex justify-between items-center">
          <h3 className="text-xl leading-6 font-semibold">
            Waitinglist Terms & Condition
          </h3>
          <button onClick={() => setOpen(false)}>
            <CloseIcon />
          </button>
        </div>
        <div className="pt-4 flex flex-col gap-4 pb-2">
          <div className="flex gap-3 items-center w-full">
            <div className="bg-grey-500 min-w-[8px] min-h-[8px] max-w-[8px] max-h-[8px] rounded-[50%] w-full h-full"></div>
            <span className="text-grey-500 text-sm font-semibold leading-4">
              {terms}
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export { TermsCondition };
