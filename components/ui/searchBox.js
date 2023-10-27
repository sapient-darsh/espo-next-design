import React, { useEffect, useState } from "react";
import SearchBold from "../assets/svg/searchBold";
import CrossBold from "../assets/svg/crossBold";

const SearchBox = (props) => {
  const { value, onChange, onClear } = props;
  const [recentSearches, setRecentSearches] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedSearches =
      JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(storedSearches);
  }, []);

  const handleSearch = () => {
    if (value) {
      const updatedSearches = [value, ...recentSearches.slice(0, 2)]; // Limit to 3 recent searches
      setRecentSearches(updatedSearches);
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
    }
  };

  const clearRecentSearch = () => {
    localStorage.removeItem("recentSearches");
    setRecentSearches([]);
  };

  return (
    <div className="relative font-slussen">
      <div className="relative w-full cursor-default rounded-md flex  items-center bg-white h-[48px] lg:h-[56px] pl-5 pr-4 py-4 text-left  shadow-sm ring-1  ring-dark active:ring-purple focus:ring-purple  sm:text-sm sm:leading-6">
        <SearchBold />
        <input
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setIsOpen(false);
              handleSearch();
            }
          }}
          onClick={() => setIsOpen(true)}
          autoComplete="off"
          placeholder="Search for vendor or job posting"
          name="search"
          className=" rounded-md border-none w-full block h-[48px] py-[12px] px-[16px] truncate text-[16px] text-dark font-normal"
        />
        {value && (
          <div
            className="cursor-pointer"
            onClick={() => {
              onClear();
            }}
          >
            <CrossBold color="#111" />
          </div>
        )}
      </div>
      {/* {recentSearches.length > 0 && (
        <div className="mt-2 text-sm text-gray-500">
          Recent Searches:
          <ul>
            {recentSearches.map((search, index) => (
              <li key={index}>{search}</li>
            ))}
          </ul>
        </div>
      )} */}

      {isOpen && recentSearches?.length > 0 && (
        <div className="absolute mt-[12px] z-10 bg-white w-full rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ul
            className="absolute textarea mt-[6px] z-10 border  border-dark w-full overflow-auto rounded-md bg-white py-3 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            role="listbox"
            aria-labelledby="listbox-label"
          >
            <div className="flex justify-between items-center p-4">
              <div className="text-[12px] font-bold text-dark">
                RECENT SEARCHES
              </div>
              <button
                onClick={clearRecentSearch}
                className="text-[12px] font-bold text-purple cursor-pointer"
              >
                CLEAR ALL
              </button>
            </div>
            {recentSearches?.length > 0 ? (
              recentSearches.map((search, index) => {
                return (
                  <li
                    key={index}
                    className=" cursor-pointer text-dark text-left font-normal text-[16px] mx-3 h-[48px] rounded-md hover:bg-[#F5F6FE] select-none  p-[12px]"
                    // onClick={() => handleOptionClick(option)}
                  >
                    {search}
                  </li>
                );
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
  );
};

export default SearchBox;
