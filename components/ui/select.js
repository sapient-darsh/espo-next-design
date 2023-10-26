import React, { useState } from "react";
import ChevronUpLinear from "../assets/svg/chevronUpLinear";
import ChevronDownLinear from "../assets/svg/chevronDownLinear";
import LocationBold from "../assets/svg/locationBold";

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    id: 1,
    name: "All Locations",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const options = [
    { id: 1, name: "All Locations" },
    { id: 2, name: "Orlando" },
    { id: 3, name: "Tampa" },
    { id: 4, name: "Miami" },
    { id: 5, name: "Jacksonville" },
    { id: 6, name: "Panama City" },
  ];

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setSearchTerm("");
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setSelectedOption({
      ...selectedOption,
      name: e.target.value,
    });
  };

  return (
    <>
      <div className="relative font-slussen">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-full cursor-default rounded-md flex  items-center bg-white h-[56px] pl-5 pr-4 py-4 text-left  shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby="listbox-label"
        >
          <div className="mr-[13px]">
            <LocationBold />
          </div>

          <input
            type="text"
            placeholder="Select or Search..."
            value={selectedOption?.name}
            onChange={handleSearchChange}
            className=" rounded-md border-none w-full block truncate text-[16px] text-dark font-normal"
          />

          <span className="absolute inset-y-0 right-0 flex items-center pr-[22px]">
            {isOpen ? <ChevronUpLinear /> : <ChevronDownLinear />}
          </span>
        </button>

        {isOpen && (
          <div className="absolute mt-[12px] z-10 bg-white w-full rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
            <ul
              className="absolute textarea mt-[6px] z-10 border  border-dark w-full overflow-auto rounded-md bg-white py-3 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              role="listbox"
              aria-labelledby="listbox-label"
              tabIndex={-1}
              onBlur={() => setIsOpen(false)}
            >
              {filteredOptions?.length > 0 ? (
                filteredOptions.map((option) => {
                  if (option?.name === selectedOption?.name) {
                    return (
                      <li
                        key={option.id}
                        className="cursor-pointer text-dark text-left font-normal text-[16px] mx-3 h-[48px] rounded-md bg-[#F5F6FE] select-none  p-[12px]"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option.name}
                      </li>
                    );
                  } else {
                    return (
                      <li
                        key={option.id}
                        className=" cursor-pointer text-dark text-left font-normal text-[16px] mx-3 h-[48px] rounded-md hover:bg-[#F5F6FE] select-none  p-[12px]"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option.name}
                      </li>
                    );
                  }
                })
              ) : (
                <li className=" cursor-pointer text-dark text-left font-normal text-[16px] mx-3 h-[48px] rounded-md hover:bg-[#F5F6FE] select-none  p-[12px]">
                  No Options Found
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Select;
