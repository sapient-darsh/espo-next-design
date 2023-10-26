import React, { useState } from "react";
import Image from "next/image";
import PenBold from "../assets/svg/penBold";

const SingleImageUpload = () => {
  const [addImages, setAddImages] = useState({
    image: "",
    imageFileName: "",
  });

  const handleFileChange = async (e) => {
    setAddImages({
      ...addImages,
      image: URL.createObjectURL(e.target.files[0]),
      imageFileName: e.target.files[0]?.name,
    });
  };

  return (
    <div className="w-full h-[56px] p-[12px] flex justify-between items-center  border-dashed border-2 rounded-lg border-dark">
      <div className="flex justify-start items-center gap-4">
        <div className="w-[32px] h-[32px] relative">
          <Image
            width={32}
            height={32}
            className=" w-full h-full rounded-lg object-contain bg-gray-100"
            alt=""
            src={`${
              addImages?.image
                ? addImages?.image
                : "https://healcap-bucket.s3.ap-south-1.amazonaws.com/content/images/gallery/81710041263447758369.pexels-photo-262047.jpeg"
            }`}
          />
        </div>
        <div className="text-xs font-medium">{addImages?.imageFileName}</div>
      </div>
      <div className="relative ">
        <div>
          <input
            type="file"
            id="image"
            name="image"
            placeholder="document"
            className="absolute top-0 right-0 opacity-0 w-[32px] h-[32px] cursor-pointer"
            onChange={(e) => {
              handleFileChange(e);
            }}
          />
          <PenBold />
        </div>
      </div>
    </div>
  );
};

export default SingleImageUpload;
