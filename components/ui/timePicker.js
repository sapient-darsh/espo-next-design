import React, { useState } from "react";
import ChevronUpLinear from "../assets/svg/chevronUpLinear";
import ChevronDownLinear from "../assets/svg/chevronDownLinear";

const TimePicker = (props) => {
  const { selectedTime, setSelectedTime } = props;
  const [isOpen, setIsOpen] = useState(false);
  const hoursOptions = [];
  const minutesOptions = [];

  // set hours
  for (let i = 0; i <= 12; i++) {
    const value = i < 10 ? `0${i}` : i;
    hoursOptions.push({
      value: value,
      label: value.toString(),
    });
  }

  // set minutes
  for (let i = 0; i < 60; i++) {
    const value = i < 10 ? `0${i}` : i;

    minutesOptions.push({
      value: value,
      label: value.toString(),
    });
  }

  return (
    <div className="relative font-slussen">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-[300px] cursor-default rounded-md flex  items-center bg-white h-[56px] pl-5 pr-4 py-4 text-center  shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby="listbox-label"
      >
        {`${selectedTime?.hour ? selectedTime?.hour : `00`}:${
          selectedTime?.minute ? selectedTime?.minute : `00`
        }:${selectedTime?.amPm ? selectedTime?.amPm : ``}`}
        <span className="absolute inset-y-0 right-0 flex items-center pr-[22px]">
          {isOpen ? <ChevronUpLinear /> : <ChevronDownLinear />}
        </span>
      </button>

      {isOpen && (
        <div className="absolute mt-[12px] z-10 bg-white   rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div
            className="absolute grid grid-cols-3 gap-4 items-start z-10 border  border-dark w-[300px] h-fit rounded-md bg-white p-4 text-base shadow-lg  focus:outline-none sm:text-sm"
            onBlur={() => setIsOpen(false)}
          >
            <div>
              Hours
              <div className="rounded-lg pr-2 h-[400px] overflow-y-scroll hidden-scroll">
                {hoursOptions.map((option, index) => {
                  return (
                    <div
                      key={index}
                      className={` ${
                        selectedTime?.hour === option.value
                          ? "text-white bg-accessiblePurple"
                          : "text-dark bg-[#F5F6FE]"
                      } my-1 cursor-pointer  text-center font-bold text-[12px]  h-fit rounded-md  select-none  p-2`}
                      onClick={() =>
                        setSelectedTime({
                          ...selectedTime,
                          hour: option?.value,
                        })
                      }
                    >
                      {option.label}
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              Minutes
              <div className="rounded-lg pr-2 h-[400px] overflow-y-scroll hidden-scroll">
                {minutesOptions.map((option, index) => {
                  return (
                    <div
                      key={index}
                      className={` ${
                        selectedTime?.minute === option.value
                          ? "text-white bg-accessiblePurple"
                          : "text-dark bg-[#F5F6FE]"
                      } my-1 cursor-pointer  text-center font-bold text-[12px]  h-fit rounded-md  select-none  p-2`}
                      onClick={() =>
                        setSelectedTime({
                          ...selectedTime,
                          minute: option?.value,
                        })
                      }
                    >
                      {option.label}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="pr-2 h-[400px] overflow-y-scroll hidden-scroll">
              <div
                className={`${
                  selectedTime?.amPm === "AM"
                    ? "bg-accessiblePurple text-white"
                    : "bg-[#F5F6FE] text-dark"
                } my-1 cursor-pointer  text-center font-bold text-[12px] h-fit rounded-md select-none  p-2`}
                onClick={() =>
                  setSelectedTime({
                    ...selectedTime,
                    amPm: "AM",
                  })
                }
              >
                AM
              </div>
              <div
                className={` ${
                  selectedTime?.amPm === "PM"
                    ? "bg-accessiblePurple text-white"
                    : "bg-[#F5F6FE] text-dark"
                } my-1 cursor-pointer text-dark text-center font-bold text-[12px] h-fit rounded-md bg-[#F5F6FE] select-none  p-2`}
                onClick={() =>
                  setSelectedTime({
                    ...selectedTime,
                    amPm: "PM",
                  })
                }
              >
                PM
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimePicker;
