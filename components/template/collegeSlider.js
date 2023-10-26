import Image from "next/image";
import React, { useState } from "react";

const CollegeSlider = (props) => {
  const { images, loading } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <div className=" sm:flex items-center mb-4  bg-black-600 rounded-lg mt-[90px] w-[100%] ">
        {loading ? (
          <>
            <div className=" h-[240px] sm:h-[416px]  w-[358px] sm:w-[848px] rounded-lg animate-pulse bg-gray-300" />
            <div className="w-[358px]  sm:w-[153px]  h-[94px] sm:h-[416px] overflow-x-scroll   sm:overflow-y-scroll scroll-none ">
              <div className="bg-black-600 rounded-b-lg">
                <ul className="list-none mt-[12px] sm:mt-[0px]  gap-4 sm:gap-0  w-[648px] sm:w-[100%]   hidden-scroll  flex flex-row sm:flex-col sm:px-4 md:px-6">
                  {[...Array(5).keys()].map((element, index) => (
                    <li
                      key={index}
                      className="w-[80px]  h-[64px]  sm:mb-[20px] rounded-lg animate-pulse bg-gray-300"
                    >
                      <div className="rounded-lg  mb-[24px] cursor-pointer w-[100%]   h-[64px]  "></div>
                    </li>
                  ))}{" "}
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className=" h-[240px] sm:h-[416px] w-[358px] sm:w-[848px] rounded-lg">
              <Image
                width={848}
                height={416}
                src={`${selectedIndex ? images[selectedIndex] : images[0]}`}
                className=" rounded-lg w-full h-full"
                alt=""
                loading="lazy"
              />
            </div>
            <div className=" w-[358px] sm:w-[153px]   h-[94px] sm:h-[416px] overflow-x-scroll  sm:overflow-y-scroll scroll-none">
              <div className=" rounded-b-lg ">
                <ul className="list-none mt-[12px] sm:mt-[0px] gap-4 sm:gap-0   w-[648px] sm:w-[100%]   hidden-scroll flex flex-row sm:flex-col sm:px-4 md:px-6">
                  {images?.map((element, index) => (
                    <li
                      key={index}
                      className=" w-[80px] sm:w-[100%] h-[64px] sm:mb-[24px]"
                    >
                      <Image
                        priority
                        src={element}
                        width={80}
                        height={64}
                        className={`rounded-lg cursor-pointer  h-[64px]  ${
                          selectedIndex === index
                            ? "border-2 border-accessiblePurple p-1"
                            : ""
                        }`}
                        onClick={() => {
                          setSelectedIndex(index);
                        }}
                        alt=""
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CollegeSlider;
