import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Fragment, useEffect } from "react";
import { ReactComponent as ArrowIcon } from "../../assets/icons/expand_more.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useFetch } from "../../redux/queries";
import { ISeat } from "../../redux/waitinglist/model";
import { getSeatAre } from "../../redux/waitinglist/restureantSlice";
import { SEATING_URL } from "../../utils/constant";

interface IListBoxSelectProps {
  selected: ISeat | null;
  setSelected: (selected: ISeat | null) => void;
}

const ListBoxSelect = ({ selected, setSelected }: IListBoxSelectProps) => {
  const { seat } = useAppSelector((state) => state.resturant);
  const { isJoined } = useAppSelector((state) => state.join);
  const { resturantInfo } = useAppSelector((state) => state.resturant);
  const dispatch = useAppDispatch();
  const { data, isSuccess, isLoading } = useFetch(
    SEATING_URL + `?identity_id=${resturantInfo?.identity_id}`,
    "seatKey"
  );

  useEffect(() => {
    if (isSuccess) {
      dispatch(getSeatAre(data));
      setSelected(data[0]);
    }
  }, [isSuccess]);

  if (isLoading) return <div></div>;
  else {
    return (
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="relative mt-1">
              <Listbox.Button className="flex items-center relative w-full h-[56px] rounded-[40px] py-5 px-6 bg-perwinkle-purple border-[1px] border-grey">
                <span className="text-purple-300 text-base leading-4 font-semibold">
                  {selected?.name}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-8">
                  <ArrowIcon />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {seat &&
                    seat?.map((el) => {
                      return (
                        <Listbox.Option
                          key={el.name}
                          className={({ active }) =>
                            `${
                              active
                                ? "text-white bg-indigo-600"
                                : "text-gray-900"
                            } relative cursor-default select-none py-2 pl-3 pr-9`
                          }
                          value={el}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`${
                                  selected ? "font-semibold" : "font-normal"
                                } block truncate`}
                              >
                                {el?.name}
                              </span>

                              {selected && (
                                <span
                                  className={`${
                                    active ? "text-white" : "text-indigo-600"
                                  } absolute inset-y-0 right-0 flex items-center pr-4`}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              )}
                            </>
                          )}
                        </Listbox.Option>
                      );
                    })}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    );
  }
};

export { ListBoxSelect };
