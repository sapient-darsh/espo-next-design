import React from "react";
import MenuRow from "../ui/menuRow";
import DocumentBold from "../assets/svg/documentBold";

const Account2 = () => {
  return (
    <div className="p-[50px]">
      <div className=" border border-dark rounded-lg" >
          <div className="border-b px-[24px] py-[24px] border-[black]">
            <MenuRow>
              <DocumentBold />
              <span>My Job Postings</span>
            </MenuRow>
            <MenuRow>
              <DocumentBold />
              <span>My Events</span>
            </MenuRow>
          </div>
        <div className=" px-[24px] py-[24px]">
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
    </div>
  );
};

export default Account2;
