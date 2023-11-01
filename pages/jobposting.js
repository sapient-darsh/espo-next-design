import Footer2 from "@/components/template/footer2";
import Header from "@/components/template/header";
import StickyFooter from "@/components/template/stickyFooter";
import React, { useState } from "react";
import CollegeSlider from "@/components/template/collegeSlider";
import StarBold from "@/components/assets/svg/starBold";
import HeartBlackLinear from "@/components/assets/svg/heartBlackLinear";
import LinkBold from "@/components/assets/svg/linkBold";
import PhoneBold from "@/components/assets/svg/phoneBold";
import Tag from "@/components/ui/tag";
import ReviewBanner from "@/components/template/reviewBanner";
import ReviewDetailsBanner from "@/components/template/reviewDetailsBanner";
import LocationBold from "@/components/assets/svg/locationBold";
import MailBold from "@/components/assets/svg/mailBold";
import SpaceCard from "@/components/template/spaceCard";
import IconButton from "@/components/ui/iconButton";
import PlusLinear from "@/components/assets/svg/plusLinear";
import Image from "next/image";
import EventPlannerspacecard from "@/components/template/eventPlannerspacecard";
import SquareBold from "@/components/assets/svg/squareBold";
import CalenderBold from "@/components/assets/svg/calenderBold";
import PlannerBanner from "@/components/template/plannerBanner";
import EventCard from "@/components/template/eventCard";

const tagsData = [
  { label: "GENERAL LABOURER" },
  { label: "WEDDING" },
  { label: "PHOTOGRAPHER" },
  { label: "PHOTO" },
  { label: "VIDEO" },
  { label: "AMBASSADOR" },
  { label: "BRAND" },
  { label: "PARTY" },
  { label: "EXPERIENTIAL DESIGN" },
  { label: "LIGHTING & ELECTRICITY" },
  { label: "HOLIDAY PARTIES" },
  { label: "CLUBS" },
];
const Jobposting = (props) => {
  const { image, plannerName, description, rating, phoneNumber, email } = props;
  const [viewMore, setViewMore] = useState(false);

  const [galleryData, setGalleryData] = useState([
    "https://healcap-bucket.s3.ap-south-1.amazonaws.com/content/images/gallery/81710041263447758369.pexels-photo-262047.jpeg",
    "https://healcap-bucket.s3.ap-south-1.amazonaws.com/content/images/gallery/11434469909499293812.pexels-photo-189333.jpeg",
    "https://healcap-bucket.s3.ap-south-1.amazonaws.com/content/images/gallery/77143239256584289330.pexels-photo-261156.jpeg",
    "https://healcap-bucket.s3.ap-south-1.amazonaws.com/content/images/gallery/37796793142809033994.hotel-architectural-tourism-travel-53577.jpeg",
    "https://healcap-bucket.s3.ap-south-1.amazonaws.com/content/images/gallery/34084151568133817321.pexels-photo-260922.png",
    "https://healcap-bucket.s3.ap-south-1.amazonaws.com/content/images/gallery/23203673587781767119.pexels-photo-271643.jpeg",
    "https://healcap-bucket.s3.ap-south-1.amazonaws.com/content/images/gallery/66109526110261366994.pexels-photo-271618.png",
    "https://healcap-bucket.s3.ap-south-1.amazonaws.com/content/images/gallery/23203673587781767119.pexels-photo-271643.jpeg",
  ]);

  const [selected, setSelected] = useState(galleryData);
  return (
    <div>
      <Header />
      <div className=" w-full lg:w-[1025px] mx-auto px-4">
        <div className="mt-[32px] items-center mb-[24px] flex justify-between">
          <div className="flex gap-[9px] items-center  ">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 8H2M8 1L1 8L8 15"
                stroke="#0E0D0D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-[14px] font-bold">BACK</p>
          </div>
          <div className=" block sm:hidden">
            <div className="flex  gap-[24px] ">
              <HeartBlackLinear />
              <LinkBold />
            </div>
          </div>
        </div>
        <div className=" w-full gap-[40px]">
          <div className="w-[100%]">
            <p className=" text-[24px] md:text-[40px] mb-[24px] font-bold">
              Audio-Visual Technician{" "}
            </p>
            <div className="flex justify-between">
              <div className="flex gap-[24px]">
                <div className="flex">
                  <SquareBold />
                  <p className="text-[#0E0D0D] ml-[10px] text-[16px] font-normal">
                    Hiring
                  </p>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="flex  gap-[24px] mb-[48px]">
                  <HeartBlackLinear />
                  <LinkBold />
                </div>
              </div>
            </div>
            <p className="text-[14px] mt-[32px] sm:m-0 md:text-[16px] font-bold text-[#0E0D0D] pb-[16px] border-b border-black">
              Job Information
            </p>

            <div className="flex gap-[24px] mb-[48px] mt-[24px] flex-wrap">
              <div className="  border-dark hover:border-accessiblePurple ">
                <div className="flex gap-[16px] justify-start md:justify-between items-center   ">
                  <div className="rounded-lg w-[56px]  border border-dark p-[15px]">
                    <CalenderBold color="#4BA0D7" />
                  </div>
                  <div className="text-left w-[163px] lg:w-[243px]   ">
                    <p className=" text-[14px] md:text-[16px] text-dark font-semibold mb-[4px]">
                      Date{" "}
                    </p>
                    <p className=" text-[12px] text-dark font-normal">
                      14th-28th March 2023{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="  border-dark hover:border-accessiblePurple  ">
                <div className="flex gap-[16px] justify-start md:justify-between items-center   ">
                  <div className="rounded-lg w-[56px]  border border-dark p-[15px]">
                    <LocationBold color="#4BA0D7" />
                  </div>
                  <div className="text-left  w-[163px] lg:w-[243px] ">
                    <p className=" text-[14px] md:text-[16px] text-dark font-semibold mb-[4px]">
                      Location
                    </p>
                    <p className=" text-[12px] text-dark font-normal">
                      2715 Ash Dr. San Jose, South Dakota{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="  border-dark hover:border-accessiblePurple  ">
                <div className="flex gap-[16px] justify-start md:justify-between items-center   ">
                  <div className="rounded-lg w-[56px]  border border-dark p-[15px]">
                    <MailBold color="#4BA0D7" />
                  </div>
                  <div className="text-left w-[163px] lg:w-[243px] ">
                    <p className=" text-[14px] md:text-[16px] text-dark font-semibold mb-[4px]">
                      Hourly Rate{" "}
                    </p>
                    <p className=" text-[12px] text-dark font-normal">$15/h </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-[40px]">
              <p className="text-[14px] mt-[32px] sm:m-0 md:text-[16px] font-bold text-[#0E0D0D] pb-[16px] ">
                Employer
              </p>

              <PlannerBanner />
            </div>
            <div className="mb-[40px]">
              <p className="text-[14px] mt-[32px] sm:m-0 md:text-[16px] font-bold text-[#0E0D0D] pb-[16px] ">
                Event Information
              </p>

              <EventCard />
            </div>
          </div>
        </div>

        <div className="categories">
          <p className="text-[14px] md:text-[16px] font-bold text-[#0E0D0D] pb-[16px] border-b border-black">
            Categories
          </p>

          <div className="flex mb-[48px] flex-wrap mt-[24px] items-center gap-[8px] sm:gap-4">
            {tagsData?.map((tag, index) => {
              return (
                <Tag
                  key={index}
                  label={tag?.label}
                  color="#0E0D0D"
                  bgColor="#F3F3F3"
                />
              );
            })}
          </div>
        </div>
        <div className="mb-[48px]">
          <p className="text-[14px] md:text-[16px] font-bold text-[#0E0D0D] pb-[16px] border-b border-black">
            Description
          </p>
          <div className="mb-[24px] my-[16px]">
            <p
              className={` text-[14px] sm:text-[16px] font-normal text-dark ${
                viewMore ? "line-clamp-none" : "line-clamp-2"
              }  sm:line-clamp-none`}
            >
              {description} Dui ut ornare lectus sit amet est. Vestibulum morbi
              blandit cursus risus at ultrices mi tempus imperdiet. Et malesuada
              fames ac turpis. Aliquam ut porttitor leo a. Placerat duis
              ultricies lacus sed turpis tincidunt id. Sed faucibus turpis in eu
              mi bibendum neque egestas congue. Volutpat est velit egestas dui
              id ornare arcu odio ut. Velit aliquet sagittis id consectetur.
              Tellus cras adipiscing enim eu. At erat pellentesque adipiscing
              commodo elit at. Malesuada nunc vel risus commodo viverra maecenas
              accumsan. Tincidunt ornare massa eget egestas purus.
            </p>
            <b
              onClick={() => setViewMore(!viewMore)}
              className=" text-accessiblePurple font-bold inline cursor-pointer sm:hidden"
            >
              {viewMore ? "LESS" : "MORE"}
            </b>
          </div>

          <ul className=" text-[14px] md:text-[16px]">
            <li>
              {" "}
              <b>•</b> Dui ut ornare lectus sit amet est. Vestibulum morbi
              blandit cursus risus at.
            </li>
            <li>
              {" "}
              <b>•</b> Dui ut ornare lectus sit amet est. Vestibulum morbi.
            </li>
            <li>
              {" "}
              <b>•</b> Dui ut ornare lectus sit amet est. Vestibulum morbi
              blandit cursus risus at.
            </li>
            <li>
              {" "}
              <b>•</b> Dui ut ornare lectus sit amet est. Vestibulum morbi
              blandit cursus risus manga at.
            </li>
          </ul>

         

          <div className="mb-[24px] my-[16px]">
            <p
              className={` text-[14px] sm:text-[16px] font-normal text-dark ${
                viewMore ? "line-clamp-none" : "line-clamp-2"
              }  sm:line-clamp-none`}
            >
              {description} Dui ut ornare lectus sit amet est. Vestibulum morbi
              blandit cursus risus at ultrices mi tempus imperdiet. Et malesuada
              fames ac turpis. Aliquam ut porttitor leo a. Placerat duis
              ultricies lacus sed turpis tincidunt id. Sed faucibus turpis in eu
              mi bibendum neque egestas congue. Volutpat est velit egestas dui
              id ornare arcu odio ut. Velit aliquet sagittis id consectetur.
              Tellus cras adipiscing enim eu. At erat pellentesque adipiscing
              commodo elit at. Malesuada nunc vel risus commodo viverra maecenas
              accumsan. Tincidunt ornare massa eget egestas purus.
            </p>
            <b
              onClick={() => setViewMore(!viewMore)}
              className=" text-accessiblePurple font-bold inline cursor-pointer sm:hidden"
            >
              {viewMore ? "LESS" : "MORE"}
            </b>
          </div>

          <ul className="text-[14px] md:text-[16px]">
            <li>
              {" "}
              <b>•</b> Dui ut ornare lectus sit amet est. Vestibulum morbi
              blandit cursus risus at.
            </li>
            <li>
              {" "}
              <b>•</b> Dui ut ornare lectus sit amet est. Vestibulum morbi.
            </li>
            <li>
              {" "}
              <b>•</b> Dui ut ornare lectus sit amet est. Vestibulum morbi
              blandit cursus risus at.
            </li>
            <li>
              {" "}
              <b>•</b> Dui ut ornare lectus sit amet est. Vestibulum morbi
              blandit cursus risus manga at.
            </li>
          </ul>
        </div>
      </div>

      <Footer2 />
      <div className="sticky bottom-0 hidden md:block">
        <StickyFooter />
      </div>
    </div>
  );
};

export default Jobposting;