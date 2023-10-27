import React, { useState } from "react";
import Select from "@/components/ui/select";
import TabNav from "@/components/ui/tabNav";
import CalendarStarBold from "@/components/assets/svg/calendarStarBold";
import Header from "@/components/template/header";
import FilterDropDownGroup from "@/components/ui/filterDropDownGroup";
import FilterDropDown from "@/components/ui/filterDropDown";
import SearchBox from "@/components/ui/searchBox";
import DiscoverCardTalent from "@/components/template/discoverCard/discoverCardTalent";
import Footer2 from "@/components/template/footer2";
import IconButton from "@/components/ui/iconButton";
import PlusLinear from "@/components/assets/svg/plusLinear";
import Paginate from "@/components/template/Pagination";
import StickyFooter from "@/components/template/stickyFooter";

const Home = () => {
  const information = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const [search, setSearch] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(150 / 10)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Header />
      <div className="">
        <div className=" px-[16px] lg:px-[48px]">
          <div className="text-[#0E0D0D] text-[28px] lg:text-[48px] mt-[32px] lg:mt-[48px] font-black mb-[32px]">
            DISCOVER
          </div>
          <div className="flex mb-[32px] lg:flex-row flex-col  gap-[48px]">
            <div className="w-full lg:w-[320px] hidden  lg:block">
              <div className=" w-full lg:w-[320px] mb-[32px] border-r  sticky top-[32px] z-50">
                {" "}
                <Select onChange={() => console.log("first")} />
              </div>
              <div className="sticky z-10 top-[120px]">
                <div className="text-[black] w-full z-0 justify-between text-[12px] mb-[16px] font-bold flex  ">
                  <p>FILTERS</p>
                  <p className="text-[#5A6DD8]">CLEAR ALL</p>
                </div>

                <div className="w-full">
                  <FilterDropDownGroup>
                    <FilterDropDown label="Price Range ">
                      <ul>
                        {information.map((item, index) => (
                          <li key={index}>
                            <p>{item}</p>
                          </li>
                        ))}
                      </ul>
                    </FilterDropDown>
                    <FilterDropDown label="Rating">
                      <ul>
                        {information.map((item, index) => (
                          <li key={index}>
                            <p>{item}</p>
                          </li>
                        ))}
                      </ul>
                    </FilterDropDown>
                    <FilterDropDown label="Type">
                      <ul>
                        {information.map((item, index) => (
                          <li key={index}>
                            <p>{item}</p>
                          </li>
                        ))}
                      </ul>
                    </FilterDropDown>
                  </FilterDropDownGroup>
                </div>
              </div>
            </div>

            {/* w-[884px] overflow-x-auto */}
            <div className="w-full ">
              <div className="bg-white border sticky overflow-x-auto top-0 z-40">
                {/* tabs */}
                <div className="flex lg:pb-[40px] scroll-none gap-6 mt-[32px] overflow-x-auto bg-[white] hidden-scroll">
                  <TabNav className="group">
                    <CalendarStarBold
                      className=""
                      color="#0E0D0D"
                      hoverColor="#5A6DD8"
                    />
                    <span className="text-sm sm:text-base">EVENTS</span>
                  </TabNav>
                  <TabNav className="group">
                    <CalendarStarBold
                      className=""
                      color="#0E0D0D"
                      hoverColor="#5A6DD8"
                    />
                    VENDORS
                  </TabNav>
                  <TabNav className="group">
                    <CalendarStarBold
                      className=""
                      color="#0E0D0D"
                      hoverColor="#5A6DD8"
                    />
                    TALENT
                  </TabNav>
                  <TabNav className="group">
                    <CalendarStarBold
                      className=""
                      color="#0E0D0D"
                      hoverColor="#5A6DD8"
                    />
                    VENUE
                  </TabNav>
                  <TabNav className="group">
                    <CalendarStarBold
                      className=""
                      color="#0E0D0D"
                      hoverColor="#5A6DD8"
                    />
                    <span className="text-sm sm:text-base">JOB POSTINGS</span>
                  </TabNav>
                </div>
                {/* search and filter */}
                <div className="w-full bg-[white]">
                  <div className="mb-[10px] pl-[1px] w-full items-center gap-[24px] bg-[white]  flex">
                    <div className="w-full">
                      <SearchBox
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onClear={() => setSearch("")}
                      />
                    </div>
                    <div className="">
                      <IconButton
                        size="medium"
                        variant="outlined"
                        icon={<PlusLinear color="#111" />}
                      ></IconButton>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* cards */}
              <div className="w-full bg-white">
                <div className="">
                  <div className="  py-[24px] border-b border-[black]">
                    <DiscoverCardTalent />
                  </div>

                  <div className="py-[24px] border-b border-[black]">
                    <DiscoverCardTalent />
                  </div>

                  <div className="py-[24px] border-b border-[black]">
                    <DiscoverCardTalent />
                  </div>

                  <div className="py-[24px] border-b border-[black]">
                    <DiscoverCardTalent />
                  </div>
                  <div className="w-full">
                    <Paginate
                      postsPerPage={10}
                      totalPosts={150}
                      currentPage={currentPage}
                      paginate={paginate}
                      previousPage={previousPage}
                      nextPage={nextPage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer2 />
        <div className="sticky bottom-0 hidden md:block">
          <StickyFooter />
        </div>
      </div>
    </>
  );
};

export default Home;
