import React, { useState } from "react";
import CrossBold from "../assets/svg/crossBold";
import Image from "next/image";
import CirclePlusBold from "../assets/svg/circlePlusBold";
import NoImages from "../assets/svg/noImages";
// import cloneDeep from "lodash/cloneDeep";

// const filesToArray = (files) => Object.keys(files).map((key) => files[key]);

const EditCollegeSlider = (props) => {
  const { images, loading } = props;
  const [selectedIndex, setSelectedIndex] = useState({
    image: "",
    index: "",
  });
  const [editImages, setEditImages] = useState(images);

  const handleFileChange = async (e) => {
    setEditImages((prevImage) => [
      ...prevImage,
      URL.createObjectURL(e.target.files[0]),
    ]);
  };

  const removeFile = (fileIndex) => {
    const deletedFileList = editImages?.filter(
      (_, index) => index !== fileIndex
    );

    setEditImages(deletedFileList);
    setSelectedIndex({
      ...selectedIndex,
      image:
        fileIndex === selectedIndex?.index
          ? editImages[fileIndex - 1]
          : selectedIndex?.image,
      index: fileIndex === 0 ? 0 : fileIndex - 1,
    });
  };

  return (
    <>
      <div className="mb-4 rounded-lg mt-[90px] w-full font-slussen">
        {loading ? (
          <>
            <div className=" h-[240px] sm:h-[424px] w-[358px] sm:w-auto md:w-[872px] rounded-lg" />
            <div className=" w-[358px] sm:w-auto md:w-[872px]  h-[auto] overflow-x-scroll    hidden-scroll">
              <div className="rounded-b-lg ">
                <ul className="list-none mt-[12px]  flex-row-reverse  gap-4 w-[777px]  sm:w-[1000px] scroll-none    hidden-scroll  flex sm:flex-row ">
                  {[...Array(7).keys()].map((element, index) => (
                    <li
                      key={index}
                      className=" w-[72px] sm:w-[88px]  h-[56px] sm:h-[75px] "
                    >
                      <div className="rounded-lg  mb-[24px] cursor-pointer w-[100%]   h-[64px]  "></div>
                      <div className="abc flex items-center justify-center absolute top-2 right-2">
                        <button className="flex items-center justify-center w-[24px] h-[24px] bg-[#0E0D0D] rounded p-[7px]">
                          <CrossBold color="#fff" />
                        </button>
                      </div>
                    </li>
                  ))}
                  <li>
                    <div className="abc flex items-center justify-center w-[72px] sm:w-[88px] h-[56px] sm:h-[64px] border-dashed border-2 rounded-lg border-[#0E0D0D]">
                      <button className="flex items-center justify-center w-[23px] h-[23px] bg-[#0E0D0D] rounded-full  p-[7px]">
                        <CirclePlusBold color="#fff" />
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            {editImages.length > 0 ? (
              <div className="border h-[240px] sm:h-[424px] w-full sm:w-auto md:w-[872px] rounded-lg relative">
                <Image
                  src={`${
                    selectedIndex?.image ? selectedIndex?.image : editImages[0]
                  }`}
                  width={872}
                  height={424}
                  className=" rounded-lg w-full h-full "
                  alt=""
                  priority
                />

                <div className="abc flex items-center justify-center absolute top-3.5 right-3.5">
                  <button
                    onClick={() =>
                      removeFile(
                        selectedIndex?.index ? selectedIndex?.index : 0
                      )
                    }
                    className="flex items-center justify-center w-[40px] sm:w-[48px] h-[40px] sm:h-[48px] bg-[#0E0D0D] rounded p-[7px]"
                  >
                    <CrossBold color="#fff" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative">
                <input
                  type="file"
                  id="image"
                  name="image"
                  placeholder="document"
                  className="absolute top-0 left-0 opacity-0 h-[240px] sm:h-[424px] w-[358px] sm:w-auto md:w-[872px] "
                  onChange={(e) => {
                    handleFileChange(e);
                  }}
                />
                <div className="flex items-center justify-center  h-[240px] sm:h-[424px] w-[358px] sm:w-auto md:w-[872px] border-dashed border-2 rounded-lg border-[#0E0D0D]">
                  <div className="text-center flex flex-col justify-center items-center">
                    <NoImages />
                    <div className="font-bold py-4">No Images Uploaded</div>
                    <div className="font-normal text-[12px] py-2">
                      Choose Photos from your device and{" "}
                      <span className="text-accessiblePurple">UPLOAD</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="w-full sm:w-auto md:w-[872px]  h-[auto] overflow-x-scroll scroll-none hidden-scroll">
              <div className="rounded-b-lg ">
                <ul className="list-none mt-[12px] flex justify-end sm:justify-start  flex-row-reverse sm:flex-row  gap-4 w-fit  scroll-none hidden-scroll">
                  {editImages?.map((element, index) => (
                    <li
                      key={index}
                      className="w-[72px] sm:w-[88px] h-[56px] sm:h-[75px] relative"
                    >
                      <Image
                        src={element}
                        width={72}
                        height={56}
                        className={`rounded-lg cursor-pointer w-[100%] h-[56px] sm:h-[64px] `}
                        onClick={() => {
                          setSelectedIndex({
                            ...selectedIndex,
                            image: element,
                            index: index,
                          });
                        }}
                        alt=""
                        priority
                      />
                      <div className="abc flex items-center justify-center absolute top-2 right-2">
                        <button
                          onClick={() => removeFile(index)}
                          className="flex items-center justify-center w-[24px] h-[24px] bg-[#0E0D0D] rounded p-[7px]"
                        >
                          <CrossBold color="#fff" />
                        </button>
                      </div>
                    </li>
                  ))}
                  {editImages?.length < 8 && editImages?.length !== 0 && (
                    <li className="relative">
                      <input
                        type="file"
                        id="image"
                        name="image"
                        placeholder="document"
                        className="absolute top-0 right-0 opacity-0 w-[88px] h-[64px] "
                        onChange={(e) => {
                          handleFileChange(e);
                        }}
                      />
                      <div className="abc flex items-center justify-center w-[72px] sm:w-[88px] h-[56px] sm:h-[64px] border-dashed border-2 rounded-lg border-[#0E0D0D]">
                        <button className="flex items-center justify-center w-[50px] h-[50px] rounded-full  p-[7px]">
                          <CirclePlusBold color="#fff" />
                        </button>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default EditCollegeSlider;
