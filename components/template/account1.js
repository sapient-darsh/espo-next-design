import { Button } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

function Account1() {
  return (
    <div className="">
      <div className="p-[24px] border border-[black] rounded-lg">
        <div className="flex items-center mb-4">
          <div className="rounded-lg w-[56px] mr-[16px]">
            <Image
              className="border rounded-lg w-[56px] h-[56px] object-contain"
              alt=""
              src={`https://healcap-bucket.s3.ap-south-1.amazonaws.com/content/images/gallery/81710041263447758369.pexels-photo-262047.jpeg`}
              width={56}
              height={56}
            />
          </div>
          <div className="text-left">
            <p className="text-[16px] text-[#0E0D0D] font-bold mb-[4px]">
              ANNA WATSON
            </p>
            <p className="text-[12px] text-[#0E0D0D] font-normal">Planner</p>
          </div>
        </div>
        <Button variant="outlined" size="medium" block className="w-full">
          <span className="text-[12px] font-bold">View Profile</span>
        </Button>
      </div>
    </div>
  );
}

export default Account1;
