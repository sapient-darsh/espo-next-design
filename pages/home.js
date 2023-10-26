import React, { useState } from "react";
import Select from "@/components/ui/select";
import TabNav from "@/components/ui/tabNav";
import CalendarStarBold from "@/components/assets/svg/calendarStarBold";
import Header from "@/components/template/header";
import FilterDropDownGroup from "@/components/ui/filterDropDownGroup";
import FilterDropDown from "@/components/ui/filterDropDown";
import SearchBox from "@/components/ui/searchBox";
import DiscoverCardTalent from "@/components/template/discoverCard/discoverCardTalent";
import Footer from "@/components/template/footer";
import IconButton from "@/components/ui/iconButton";
import PlusLinear from "@/components/assets/svg/plusLinear";

const Home = () => {
  const information = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const [search, setSearch] = useState();

  return (
    <>
      <Header />

      <div className="px-[48px]">
        <div className="text-[#0E0D0D] text-[48px] mt-[48px] font-black mb-[32px]">
          DISCOVER
        </div>
        <div className="flex mb-[32px] gap-[48px]">
          <div className="w-[320px]">
            <div className="mr-[24px] mb-[32px] border-r w-full">
              {" "}
              <Select onChange={() => console.log("first")} />
            </div>
            <div className="">
              <div className="text-[black] w-full justify-between text-[12px] mb-[16px] font-bold flex  ">
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

          <div>
            <div className="flex mb-[32px] gap-6">
              <TabNav className="group">
                <CalendarStarBold
                  className=""
                  color="#0E0D0D"
                  hoverColor="#5A6DD8"
                />
                EVENTS
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
                JOB POSTINGS
              </TabNav>
            </div>
            <div className="w-full ">
              <div className="mb-[10px] w-full items-center gap-[24px] flex">
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
              <div className="max-h-[822px] overflow-y-auto ">
                <div className="py-[24px] border-b border-[black]">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
