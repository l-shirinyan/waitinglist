import { FormEvent, useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import { ReactComponent as PhoneIcon } from "../../assets/icons/arrow-phone.svg";
import "react-phone-number-input/style.css";
import { useAppDispatch } from "../../hooks/redux";
import { setJoinValue } from "../../redux/join/joinSlice";

interface IGuestInfoProps {
  handleChangeJoinValue: (val: 1) => void;
}
const GuestInfo = ({ handleChangeJoinValue }: IGuestInfoProps) => {
  const [value, setValue] = useState("+966");
  const [inputValue, setInputValue] = useState("");
  const [err, setErr] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    const inp = document.querySelector(".PhoneInputInput");
    const handleSetValue: EventListenerOrEventListenerObject = (e) => {
      setInputValue((e.target as HTMLInputElement).value);
    };

    inp?.addEventListener("keyup", handleSetValue);

    inp?.addEventListener("keydown", handleSetValue);
    return () => {
      document.removeEventListener("keyup", handleSetValue);
      document.removeEventListener("keydown", handleSetValue);
    };
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameVal = (e.target as HTMLFormElement).fullName.value;
    if (nameVal && inputValue) {
      const formVal = {
        guest_name: nameVal,
        phone_number: inputValue,
      };
      handleChangeJoinValue(1);
      dispatch(setJoinValue(formVal));
    } else {
      setErr("This fields are required");
    }
  };

  return (
    <div className="pt-[25px] pl-5 pr-3">
      <div>
        <h3 className="text-xl font-semibold leading-5">Guest information</h3>
        <span className="text-sm left-5 text-grey-600">
          Insert your personal data
        </span>
      </div>
      <form action="" onSubmit={handleSubmit} className="mt-4">
        <div className="flex flex-col gap-[10px]">
          <label
            htmlFor="fullName"
            className="text-base leading-4 font-semibold text-grey-900"
          >
            Full name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="bg-perwinkle-purple border-[1px] border-light-purple h-[56px] w-full rounded-[40px] text-base leading-4 font-semibold text-purple-300 pl-6"
          />
        </div>
        <div className="flex flex-col gap-[10px] mt-4">
          <label
            htmlFor="phoneInput"
            className="text-base leading-4 font-semibold text-grey-900"
          >
            Phone Number
          </label>
          <div className="w-full relative">
            <PhoneInput
              limitMaxLength
              value={value}
              international
              defaultCountry="SA"
              name="phoneInput"
              id="phoneInput"
              onChange={(phone: string) => {
                setValue(phone);
              }}
              className={`joinPhoneInput ${
                inputValue.split(" ").length > 1 ? "notSelect" : ""
              } text-base leading-4 font-semibold text-purple-300`}
            />
            {inputValue.split(" ").length === 1 && (
              <div className="absolute flex gap-[10px] items-center top-5 left-[50px] z-50">
                <span className="text-purple-300 text-[14px] leading-4">
                  {value || inputValue}
                </span>
                <PhoneIcon />
              </div>
            )}
          </div>
        </div>
        <span className="text-red text-sm font-semibold">{err}</span>
        <button className="h-[46px] max-w-[343px] w-full flex justify-center items-center bg-purple rounded-[34px] gap-3 absolute bottom-2">
          <span className="text-base font-semibold leading-5 text-white">
            Continue
          </span>
        </button>
      </form>
    </div>
  );
};

export { GuestInfo };
