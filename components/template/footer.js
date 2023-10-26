import React from "react";
import FacebookBold from "../assets/svg/facebookBold";
import Image from "next/image";
import InstagramBold from "../assets/svg/instagramBold";
import LinkedinBold from "../assets/svg/linkedinBold";
import Link from "next/link";
import StickyFooter from "./stickyFooter";

const Footer = () => {
  return (
    <div className="bg-[black] px-[16px] py-[40px] md:p-[48px] font-slussen">
      <div className="flex justify-between md:flex-row  flex-wrap  md:items-center mb-[40px] md:mb-[48px]">
        <div>
          <Image
            width={130}
            height={40}
            src={`/assets/images/footer-logo.png`}
            alt=""
          />
          <p className="text-white mt-[16px] text-[14px] md:text-[16px] font-normal">
            Events. Suppliers. Planners. Opportunities.
          </p>
        </div>
        <div className="flex mt-[24px]  md:mt-0 gap-4">
          <div className="48px bg-[#FFFFFF18] rounded-lg px-[19px] py-[14px]">
            <FacebookBold color="#fff" />
          </div>
          <div className="48px bg-[#FFFFFF18] rounded-lg p-[15px]">
            <InstagramBold color="#fff" />
          </div>
          <div className="48px bg-[#FFFFFF18] rounded-lg p-[15px]">
            <LinkedinBold color="#fff" />
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="flex-wrap md:flex-row mb-[40px] text-[14px] flex gap-6 text-[#FFFFFF]  font-semibold">
          <p>CONTACT US</p>
          <p>PRIVACY POLICY</p>
          <p>TERMS & CONDITIONS</p>
        </div>
      </div>
      <div className="flex justify-between md:flex-row flex-row-reverse flex-wrap">
        <p className="text-[12px] md:text-[14px] text-[#FFFFFF55] ">
          © <span className="text-[white]">2023 ESPO</span>
        </p>
        <div className="text-[12px] md:text-[14px] ">
          <p className="text-[white]">
            DESIGNED BY <b className="text-[#8390F5]">ORIZON</b>
          </p>
        </div>
        <div className="hidden md:block">
          <div className="flex flex-row  gap-6 text-[#FFFFFF] text-[14px] font-semibold">
            <p>CONTACT US</p>
            <p>PRIVACY POLICY</p>
            <p>TERMS & CONDITIONS</p>
          </div>
        </div>
      </div>

      {/* desktop screen */}
      {/* <div className=" hidden md:grid grid-cols-3 items-center">
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
      </div> */}

      {/* mobile screen */}
      {/* <div className=" md:hidden">
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

      <div className="bg-[black]  py-[40px] md:py-[20px]  hidden md:grid grid-cols-3 items-center">
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

      <div className="bg-[black]  py-[40px] md:py-[20px] block md:hidden">
        <div className=" flex flex-wrap gap-6 my-4 text-white text-[14px] font-medium text-right">
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
      </div> */}
    </div>
  );
};

export default Footer;
