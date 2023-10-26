import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import HeartBold from "../assets/svg/heartBold";
import BellBold from "../assets/svg/bellBold";
import ChevronDownLinear from "../assets/svg/chevronDownLinear";
import Button from "../ui/button";
import HumburgerClose from "../assets/svg/humburgerClose";
import CrossLinear from "../assets/svg/crossLinear";
import MenuRow from "../ui/menuRow";
import DocumentBold from "../assets/svg/documentBold";
import NotificationCard from "./notificationCard";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const userDropdownRef = useRef(null);
  const notificationDropdownRef = useRef(null);

  const [isLogin] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);

  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);

  const handleUserDropdownToggle = () => {
    setIsUserDropdownOpen(true);
    setIsNotificationDropdownOpen(false);
  };

  const handleNotificationDropdownToggle = () => {
    setIsNotificationDropdownOpen(true);
    setIsUserDropdownOpen(false);
  };

  const [activeMenuItem, setActiveMenuItem] = useState("/");

  useEffect(() => {
    setActiveMenuItem(router.pathname);
  }, [router.pathname]);

  // close user dropdown when clicked outside
  useEffect(() => {
    if (isUserDropdownOpen) {
      document.addEventListener("mousedown", (event) => {
        if (event.target !== userDropdownRef.current) {
          setIsUserDropdownOpen(false);
        }
      });
    }

    return () => {
      document.removeEventListener("mousedown", (event) => {
        if (event.target !== userDropdownRef.current) {
          setIsUserDropdownOpen(false);
        }
      });
    };
  }, [isUserDropdownOpen]);

  // close notification dropdown when clicked outside
  useEffect(() => {
    if (isNotificationDropdownOpen) {
      document.addEventListener("mousedown", (event) => {
        if (event.target !== userDropdownRef.current) {
          setIsNotificationDropdownOpen(false);
        }
      });
    }

    return () => {
      document.removeEventListener("mousedown", (event) => {
        if (event.target !== userDropdownRef.current) {
          setIsNotificationDropdownOpen(false);
        }
      });
    };
  }, [isNotificationDropdownOpen]);

  return (
    <>
      <div className="font-bold font-slussen flex justify-between items-center h-[56px] md:h-[88px] border-t md:border-t-0 border-b border-dark">
        <div className="flex justify-start items-center gap-x-10 pl-[30px]">
          <Image
            priority
            width={130}
            height={40}
            src={`/assets/images/header-logo.png`}
            alt=""
          />
          {isLogin && (
            <div className="uppercase text-[16px] hidden md:block">
              <Link href="/">Discover</Link>
            </div>
          )}
        </div>

        {/* desktop */}
        <div className="hidden md:block">
          {isLogin ? (
            <div className="flex justify-center items-center ">
              <div className="uppercase text-[16px] border-r border-dark p-[32px]">
                <Link href="/">Support</Link>
              </div>
              <Link href="/demo">
                <div className="navbarhover uppercase text-[16px] border-r border-dark  hover:bg-dark p-[16px] md:p-[32px]">
                  <HeartBold />
                </div>
              </Link>

              <div
                onClick={handleNotificationDropdownToggle}
                className="navbarhover cursor-pointer uppercase text-[16px] border-r border-dark  hover:bg-dark active:bg-dark focus:bg-dark p-[16px] md:p-[32px]"
              >
                <BellBold />
              </div>

              <div
                onClick={handleUserDropdownToggle}
                className="group cursor-pointer uppercase text-[16px] py-[22px] px-[16px] hover:bg-dark active:bg-dark focus:bg-dark flex justify-center items-center gap-2"
              >
                <Image
                  className="rounded"
                  width={56}
                  height={56}
                  src={`https://healcap-bucket.s3.ap-south-1.amazonaws.com/content/images/gallery/81710041263447758369.pexels-photo-262047.jpeg`}
                  alt=""
                />
                <div className="text-[16px] group-hover:text-white active:text-white focus:text-white">
                  ANNA
                </div>
                <div className="group-hover:text-white">
                  <ChevronDownLinear />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center ">
              <div className=" uppercase text-[16px] p-[32px]">
                <Link href="/">Support</Link>
              </div>
              <div className="uppercase text-[16px] p-[32px]">
                <Button variant="contained" size="medium">
                  LOG IN
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* mobile */}
        <div className="block md:hidden">
          {isLogin ? (
            <div className="flex justify-center items-center ">
              <div className="navbarhover uppercase text-[16px] border-l border-dark  hover:bg-dark p-[16px] md:p-[32px]">
                <HeartBold />
              </div>
              <div
                onClick={handleNotificationDropdownToggle}
                className="navbarhover uppercase text-[16px] border-l border-dark  hover:bg-dark active:bg-dark focus:bg-dark p-[16px] md:p-[32px]"
              >
                <BellBold />
              </div>
              <div
                onClick={() => {
                  setOpenDrawer(!openDrawer);
                }}
                className="navbarhover uppercase text-[16px] border-l border-dark   p-[16px] md:p-[32px]"
              >
                {openDrawer ? <CrossLinear color="#111" /> : <HumburgerClose />}
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center ">
              <div className=" uppercase text-[12px] md:text-[16px] p-[12px] md:p-[32px]">
                <Link href="/">Support</Link>
              </div>
              <div className="uppercase text-[12px] md:text-[16px] p-[12px] md:p-[32px]">
                <Button
                  className="hidden md:block "
                  variant="contained"
                  size="medium"
                >
                  LOG IN
                </Button>
                <Button
                  className="block md:hidden "
                  variant="contained"
                  size="small"
                >
                  LOG IN
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* drawer component */}
      <div
        className={`${
          openDrawer ? "block" : "hidden "
        } w-full z-10 top-0 right-0 h-screen transition-all absolute duration-4000 bg-white shadow-xl `}
      >
        <div className="md:hidden visible ">
          <div className="flex justify-between items-center border-t md:border-t-0 border-b border-dark">
            <div className="flex justify-start items-center gap-x-10 pl-[30px]">
              <Image
                priority
                width={130}
                height={40}
                src={`/assets/images/header-logo.png`}
                alt=""
              />
            </div>
            <div
              onClick={() => {
                setOpenDrawer(!openDrawer);
              }}
              className="navbarhover uppercase text-[16px] border-l border-dark p-[16px]"
            >
              <CrossLinear color="#111" />
            </div>
          </div>
          <div className="px-[16px] py-[48px]">
            <div className="relative uppercase mb-[40px] text-[26px] font-slussenExtended font-bold">
              <Link href="/demo">DISCOVER</Link>
              {activeMenuItem === "/demo" && (
                <div className="absolute top-12 w-[40px] h-[6px] bg-purple rounded"></div>
              )}
            </div>
            <div className=" relative uppercase mb-[40px] text-[26px] font-slussenExtended font-bold">
              <Link href="/">ACCOUNT</Link>
              {activeMenuItem === "/account" && (
                <div className="absolute top-12 w-[40px] h-[6px] bg-purple rounded"></div>
              )}
            </div>
            <div className="uppercase mb-[40px] text-[26px] font-slussenExtended font-bold">
              <Link href="/">SUPPORT</Link>
            </div>
          </div>
        </div>
      </div>

      {/* user dropdown */}
      {isUserDropdownOpen && (
        <div
          ref={userDropdownRef}
          className="my-4 mx-8 font-slussen right-8 absolute z-10 border border-dark w-[320px] h-fit bg-white rounded-lg"
        >
          <div className="p-[24px]">
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
                <p className="text-[12px] text-[#0E0D0D] font-normal">
                  Planner
                </p>
              </div>
            </div>
            <Button variant="outlined" size="medium" block>
              <span className="text-[12px] font-bold">View Profile</span>
            </Button>
          </div>
          <div className="px-[18px] py-[12px] border-t border-dark">
            <MenuRow>
              <DocumentBold />
              <span>My Job Postings</span>
            </MenuRow>
            <MenuRow>
              <DocumentBold />
              <span>My Events</span>
            </MenuRow>
          </div>
          <div className="px-[18px] py-[12px] border-t border-dark">
            <MenuRow>
              <DocumentBold />
              <span>Settings</span>
            </MenuRow>
            <MenuRow>
              <DocumentBold />
              <span>Logout</span>
            </MenuRow>
          </div>
        </div>
      )}

      {/* notification dropdown */}
      {isNotificationDropdownOpen && (
        <div
          ref={notificationDropdownRef}
          className="my-4 mx-8 font-slussen right-0 md:right-36 absolute z-10   border border-dark w-[300px] md:w-[480px] max-h-[560px]  bg-white rounded-lg overflow-scroll hide-modal-scrollbars"
        >
          <div className="flex justify-between items-center px-[18px] py-[12px]">
            <span className="text-base font-bold text-dark">NOTIFICATIONS</span>
            <span className="text-xs font-bold text-accessiblePurple cursor-pointer">
              MARK ALL READ
            </span>
          </div>
          <div className="px-[18px] py-[12px] border-t border-[#333333]">
            <div className="py-4 border-b border-dark ">
              <NotificationCard
                image="https://healcap-bucket.s3.ap-south-1.amazonaws.com/content/images/gallery/81710041263447758369.pexels-photo-262047.jpeg"
                user="Peter"
                message="left you a review!"
                time="2 hours ago"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
