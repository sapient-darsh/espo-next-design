import Link from "next/link";
import React from "react";

const StickyFooter = () => {
  return (
    <>
      <div className="bg-[black] px-[16px] py-[40px] md:py-[20px] md:px-[48px] hidden md:grid grid-cols-3 items-center">
        <div className="text-[14px] text-[#FFFFFF55] text-left">
          © <span className="text-white">2023 ESPO</span>
        </div>
        <div className="text-[14px] text-center">
          <p className="text-white">
            DESIGNED BY{" "}
            <b className="text-[#8390F5]">
              <Link href="/">ORIZON</Link>
            </b>
          </p>
        </div>
        <div className="flex gap-6 text-white text-[14px] font-semibold text-right">
          <p>CONTACT US</p>
          <p>PRIVACY POLICY</p>
          <p>TERMS & CONDITIONS</p>
        </div>
      </div>

      <div className="bg-[black] px-[16px] py-[40px] md:py-[20px] md:px-[48px] md:hidden">
        <div className=" flex flex-wrap gap-6 my-4 text-white text-[14px] font-semibold text-right">
          <p>CONTACT US</p>
          <p>PRIVACY POLICY</p>
          <p>TERMS & CONDITIONS</p>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <div className="text-[14px] text-[#FFFFFF55] text-left">
            © <span className="text-white">2023 ESPO</span>
          </div>
          <div className="text-[14px] text-center">
            <p className="text-white">
              DESIGNED BY{" "}
              <b className="text-[#8390F5]">
                <Link href="/">ORIZON</Link>
              </b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyFooter;
