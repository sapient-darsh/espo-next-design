import React, { useState } from "react";
import CirclePlusBold from "../assets/svg/circlePlusBold";
import CrossBold from "../assets/svg/crossBold";
import Image from "next/image";

const AddImage = () => {
  const [addImages, setAddImages] = useState([]);

  const handleFileChange = async (e) => {
    setAddImages((prevVal) => [
      ...prevVal,
      URL.createObjectURL(e.target.files[0]),
    ]);
  };

  const removeFile = (fileIndex) => {
    const deletedFileList = addImages?.filter(
      (_, index) => index !== fileIndex
    );
    setAddImages(deletedFileList);
  };

  return (
    <div className="w-fit p-[20px] flex justify-between items-center gap-2 border-dashed border-2 rounded-lg border-[#9747FF]">
      {addImages?.map((element, index) => {
        return (
          <div key={index} className="w-[118px] h-[64px] relative">
            <Image
              width={88}
              height={64}
              className=" w-full h-full rounded-lg  bg-gray-100"
              alt=""
              src={element}
            />
            <div className="flex items-center justify-center absolute top-2 right-2">
              <button
                onClick={() => removeFile(index)}
                className="flex items-center justify-center w-[24px] h-[24px] bg-[#0E0D0D] rounded p-[7px]"
              >
                <CrossBold color="#fff" />
              </button>
            </div>
          </div>
        );
      })}
      {addImages?.length <= 1 && (
        <div className="relative">
          <div
            className={`flex items-center justify-center w-[118px] h-[64px] border-dashed border-2 rounded-lg border-[#0E0D0D]`}
          >
            <input
              type="file"
              id="image"
              name="image"
              placeholder="document"
              className="absolute top-0 right-0 opacity-0 w-[118px] h-[64px] z-9"
              onChange={(e) => {
                handleFileChange(e);
              }}
            />
            <button className="flex items-center justify-center w-[50px] h-[50px] z-1  rounded-full  p-[7px]">
              <CirclePlusBold color="#fff" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddImage;
