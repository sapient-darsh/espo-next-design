import Account1 from "@/components/template/account1";
import Account2 from "@/components/template/account2";
import Button from "@/components/ui/button";

import EventPostCard from "@/components/template/eventPostCard";
import IconButton from "@/components/ui/iconButton";
import PlusLinear from "@/components/assets/svg/plusLinear";
import Input from "@/components/ui/input";
import Switcher from "@/components/ui/switcher";

import Header from "@/components/template/header";
import JobPostCard from "@/components/template/jobPostCard";
import React, { useState } from "react";

const Account = () => {
  const jobpostId = "job";
  const [switcher2, setSwitcher2] = useState(true);
  const [switcher3, setSwitcher3] = useState(true);

  return (
    <div>
      <Header />
      <div className="">
        <div className=" px-[16px] lg:px-[48px]">
          <div className="text-[#0E0D0D] uppercase text-[28px] lg:text-[48px] mt-[32px] lg:mt-[48px] font-black mb-[32px]">
            Account
          </div>
          <div className="flex mb-[32px] lg:flex-row flex-col  gap-[48px]">
            <div className=" w-full lg:w-[267px] xl:w-[320px] ">
              <div className="mb-[24px] w-full lg:w-[267px] xl:w-[320px]">
                <Account1 />
              </div>
              <Account2 id={jobpostId} />
            </div>

            {/* My Job Postings */}
            <div className=" w-full hidden ">
              <div className="w-full">
                <div className="lg:hidden">
                  <div className="flex gap-[9px] items-center mb-[16px] ">
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
                </div>
                <div className="flex lg:flex-row flex-col lg:justify-between items-center pb-[32px] border-b border-[black]">
                  <div className="text-left mb-[16px] lg:mb-0 w-full">
                    <h3 className=" text-[30px] xl:text-[32px] font-black uppercase  ">
                      My Job Postings
                    </h3>
                    <p className="text-[#6B6775] text-[16px] mt-[16px]">
                      Created{" "}
                      <span className="text-[#0E0D0D] text-[16px]">
                        19 Events
                      </span>
                    </p>
                  </div>
                  <button className=" w-full lg:w-[200px] h-[56px] border border-[#8390F5] rounded-[8px] text-[16px] text-[#0E0D0D] font-bold hover:text-[#8390F5]">
                    Post New Job
                  </button>
                </div>

                <div className="py-[32px] border-b border-[black]">
                  <JobPostCard />
                </div>

                <div className="py-[32px] border-b border-[black]">
                  <JobPostCard />
                </div>
                <div className="py-[32px] border-b border-[black]">
                  <JobPostCard />
                </div>
              </div>
            </div>

            {/* My-Event part */}
            <div className="w-full hidden ">
              <div className="w-full ">
                <div className="lg:hidden">
                  <div className="flex gap-[9px] items-center mb-[16px] ">
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
                </div>
                <div className="flex lg:flex-row flex-col lg:justify-between items-center pb-[32px] border-b border-[black]">
                  <div className="text-left mb-[16px] lg:mb-0 w-full">
                    <h3 className=" text-[30px] xl:text-[32px] font-black uppercase  ">
                      My Events
                    </h3>
                    <p className="text-[#6B6775] text-[16px] mt-[16px]">
                      Created{" "}
                      <span className="text-[#0E0D0D] text-[16px]">
                        19 Events
                      </span>
                    </p>
                  </div>
                  <button className=" w-full lg:w-[200px] h-[56px] border border-[#8390F5] rounded-[8px] text-[16px] text-[#0E0D0D] font-bold hover:text-[#8390F5]">
                    Add New Event
                  </button>
                </div>

                <div className="py-[32px] border-b border-[black]">
                  <EventPostCard />{" "}
                </div>

                <div className="py-[32px] border-b border-[black]">
                  <EventPostCard />{" "}
                </div>
                <div className="py-[32px] border-b border-[black]">
                  <EventPostCard />{" "}
                </div>
              </div>
            </div>

            {/* Settings */}

            <div className="w-full ">
              <div className="w-full ">
                <div className="lg:hidden">
                  <div className="flex gap-[9px] items-center mb-[16px] ">
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
                </div>

                <div className="text-left mb-[16px] lg:mb-0 w-full">
                  <h3 className=" text-[30px] xl:text-[32px] font-black uppercase  ">
                    Settings
                  </h3>
                  <p className="text-black text-[16px] mt-[16px]">
                    Change your basic account setting here.
                  </p>
                  <div className="flex justify-between items-center pb-[8px] border-b border-[black]">
                    <p className="text-[#0E0D0D] text-[16px] font-bold">
                      About
                    </p>

                    <IconButton
                      size="medium"
                      variant="outlined"
                      icon={<PlusLinear color="#111" />}
                    ></IconButton>
                  </div>
                  <div className="in-field mb-[48px]">
                    <div className=" w-full flex mt-[24px] gap-[24px]">
                      <div className="w-full">
                        <Input
                          label="First Name"
                          className="border border-dark mt-[8px] "
                          placeholder="First Name"
                          size="large"
                        />
                      </div>
                      <div className="w-full">
                        <Input
                          label="Last Name"
                          className="border border-dark mt-[8px] "
                          placeholder="Last Name"
                          size="large"
                        />
                      </div>
                    </div>
                    <div className=" w-full flex mt-[24px] gap-[24px]">
                      <div className="w-full">
                        <Input
                          label="Email Address"
                          className="border border-dark mt-[8px] "
                          placeholder="companyname@mail.com"
                          size="large"
                        />
                      </div>
                      <div className="w-full">
                        <Input
                          label="Phone Number"
                          className="border border-dark mt-[8px] "
                          placeholder="+1-613-555-0157"
                          size="large"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <p className="text-[#0E0D0D] text-[16px] font-bold pb-[16px] border-b border-[black]">
                      Change Password
                    </p>
                    <button className=" w-full whitespace-nowrap mt-[24px]  mb-[48px] lg:w-[240px] h-[56px] border border-[#8390F5] rounded-[8px] text-[16px] text-[#0E0D0D] font-bold hover:text-[#8390F5]">
                      CHANGE PASSWORD
                    </button>
                    <p className="text-[#0E0D0D] text-[16px] font-bold pb-[16px] border-b border-[black]">
                      Notifications
                    </p>
                    <div className="flex justify-between items-center mt-[32px] pb-[32px] border-b border-[black]">
                      <div className="">
                        <p className="text-[24px] mb-[16px] font-bold">
                          SYSTEM NOTIFICATIONS
                        </p>
                        <p className="text-[#0E0D0D] text-[16px] font-normal">
                          Turn on or off all notifications about, favourites,
                          reviews, and updates.{" "}
                        </p>
                      </div>
                      <Switcher
                        checked={switcher2}
                        onChange={() => setSwitcher2(!switcher2)}
                        variant="outlined"
                      />
                    </div>
                    <div className="flex justify-between items-center mt-[32px] pb-[32px] border-b border-[black]">
                      <div className="">
                        <p className="text-[24px] mb-[16px] font-bold">
                          EMAIL NOTIFICATIONS
                        </p>
                        <p className="text-[#0E0D0D] text-[16px] font-normal">
                          Turn on or off all marketing and promotional email
                          notifications from ESPO{" "}
                        </p>
                      </div>

                      <Switcher
                        checked={switcher3}
                        onChange={() => setSwitcher3(!switcher3)}
                        variant="outlined"
                      />
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer2 />.
        <div className="sticky bottom-0 hidden md:block">
          <StickyFooter />
        </div> */}
      </div>
    </div>
  );
};

export default Account;
