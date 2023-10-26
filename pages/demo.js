import CircleCheckBold from "@/components/assets/svg/circleCheckBold";
import StarBold from "@/components/assets/svg/starBold";
import Button from "@/components/ui/button";
import CheckMark from "@/components/ui/checkMark";
import FavoriteHeart from "@/components/template/favoriteHeart";
import IconButton from "@/components/ui/iconButton";
import Input from "@/components/ui/input";
import RadioButton from "@/components/ui/radioButton";
import Switcher from "@/components/ui/switcher";
import Tag from "@/components/ui/tag";
import Textarea from "@/components/ui/textarea";
import AddImage from "@/components/template/addImage";
import CollegeSlider from "@/components/template/collegeSlider";
import EditCollegeSlider from "@/components/template/editCollegeSlider";
import Select from "@/components/ui/select";
import React, { useEffect, useState } from "react";
import FilterDropDown from "@/components/ui/filterDropDown";
import FilterDropDownGroup from "@/components/ui/filterDropDownGroup";
import PersonCard from "@/components/template/personCard";
import ReviewBanner from "@/components/template/reviewBanner";
import ReviewDetailsBanner from "@/components/template/reviewDetailsBanner";
import SpaceCard from "@/components/template/spaceCard";
import EventCard from "@/components/template/eventCard";
import InfoCard from "@/components/template/infoCard";
import CalenderBold from "@/components/assets/svg/calenderBold";
import NotificationCard from "@/components/template/notificationCard";
import PlannerBanner from "@/components/template/plannerBanner";
import Tab from "@/components/ui/tabNav";
import TabNav from "@/components/ui/tabNav";
import CalendarStarBold from "@/components/assets/svg/calendarStarBold";
import SearchBox from "@/components/ui/searchBox";
import DiscoverCardTalent from "@/components/template/discoverCard/discoverCardTalent";
import DiscoverCardEvent from "@/components/template/discoverCard/discoverCardEvent";
import DiscoverCardVenue from "@/components/template/discoverCard/discoverCardVenue";
import DiscoverCardVendor from "@/components/template/discoverCard/discoverCardVendor";
import DiscoverCardJobDetails from "@/components/template/discoverCard/discoverCardJobDetails";
import MenuRow from "@/components/ui/menuRow";
import Footer from "@/components/template/footer";
import PriceBanner from "@/components/template/priceBanner";
import ProfileCircleBold from "@/components/assets/svg/profileCircleBold";
import DiscountShapeBold from "@/components/assets/svg/discountShapeBold";
import SectionHeader from "@/components/template/sectionHeader";
import ModalHeader from "@/components/template/modalHeader";
import Header from "@/components/template/header";
import PlusLinear from "@/components/assets/svg/plusLinear";
import Modal from "@/components/ui/modal";
import ModalFooter from "@/components/template/modalFooter";
import TrashBold from "@/components/assets/svg/trashBold";
import StickyFooter from "@/components/template/stickyFooter";
import StarRating from "@/components/template/starRating";
import Paginate from "@/components/template/Pagination";
import TimePicker from "@/components/ui/timePicker";
import SingleImageUpload from "@/components/template/singleImageUpload";
import PremiumCard from "@/components/template/premiumCard";

const Demo = () => {
  const [heartClick, setHeartClick] = useState(false);
  const [switcher1, setSwitcher1] = useState(false);
  const [switcher2, setSwitcher2] = useState(true);
  const [check1, setCheck1] = useState(false);

  const [selectedRadio, setSelectedRadio] = useState();

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
  const [text, setText] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const information = ["Item 1", "Item 2", "Item 3", "Item 4"];

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

  const [selectedTime, setSelectedTime] = useState({
    hour: "00",
    minute: "00",
    amPm: "AM",
  });

  const [search, setSearch] = useState();

  return (
    <>
      {/* ui components */}
      {/* header */}
      <div className="">
        <Header />
      </div>

      {/* price banner */}
      {/* <PriceBanner onClose={() => console.log("close click")}>
        <DiscountShapeBold color="#4FBB92" />
        <div className="text-[12px] text-white text-center flex justify-center items-center">
          JOIN THE ESPO BETA UNTIL 30TH APRIL. ABOUT PRICING OPTIONS YOU CAN
          LEARN MORE HERE
        </div>
      </PriceBanner> */}

      {/* select time */}
      {/* <div className="m-8">
        <TimePicker
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
      </div> */}

      {/* single image upload */}
      {/* <div className="m-8">
        <SingleImageUpload />
      </div> */}

      <div className="m-4">
        {/* <div className="flex justify-start items-center gap-4">
          <Button
            className="font-slussenExtended"
            size="large"
            variant="contained"
          >
            BUTTON
          </Button>
          <Button
            className="font-slussenExtended"
            size="large"
            variant="contained"
            endIcon={<PlusLinear color="#111" />}
          >
            BUTTON
          </Button>
          <Button
            className="font-slussenExtended"
            size="medium"
            variant="contained"
            endIcon={<PlusLinear color="#111" />}
          >
            BUTTON
          </Button>
          <Button
            className="font-slussenExtended"
            size="small"
            variant="contained"
            endIcon={<PlusLinear color="#111" />}
          >
            BUTTON
          </Button>
          <Button
            className="font-slussenExtended"
            size="medium"
            variant="outlined"
          >
            BUTTON
          </Button>
          <Button
            className="font-slussenExtended"
            size="large"
            variant="outlined"
            endIcon={<PlusLinear color="#111" />}
          >
            BUTTON
          </Button>
          <Button
            className="font-slussenExtended"
            size="medium"
            variant="outlined"
            endIcon={<PlusLinear color="#111" />}
          >
            BUTTON
          </Button>
          <Button
            className="font-slussenExtended"
            size="small"
            variant="outlined"
            endIcon={<PlusLinear color="#111" />}
          >
            BUTTON
          </Button>
        </div> */}
        {/* <div>
          <IconButton
            size="medium"
            variant="outlined"
            icon={<PlusLinear color="#111" />}
          ></IconButton>
        </div> */}
        {/* <div className="my-2">
          <Input
            label="First Name"
            className="border border-dark "
            placeholder="First Name"
            size="large"
          />
        </div>
        <div className="my-2">
          <Input
            className="border border-dark"
            placeholder="First Name"
            size="medium"
            errorMessage={`validation error`}
            error={true}
          />
        </div>
        <div className="my-2">
          <Input
            type="password"
            label="First Name"
            className="border border-dark "
            placeholder="First Name"
            size="large"
          />
        </div> */}
        {/* <div className="my-2">
          <Textarea
            label="First Name"
            className="block border border-dark"
            placeholder="First Name"
            size="large"
            charLimit="10"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div> */}
        <div className="my-2">
          <Textarea
            label="First Name"
            className="block border border-dark"
            placeholder="First Name"
            size="medium"
            charLimit="20"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      {/* template components */}
      {/* <div className="m-4"></div> */}
      {/* heart */}
      {/* <div className="m-4">
        <FavoriteHeart
          bgColor="red"
          touch={heartClick}
          onClick={() => setHeartClick(!heartClick)}
        />
      </div> */}
      {/* switch */}
      {/* <div className="m-4">
        <Switcher
          checked={switcher1}
          onChange={() => setSwitcher1(!switcher1)}
          variant="contained"
        />
        <Switcher
          checked={switcher2}
          onChange={() => setSwitcher2(!switcher2)}
          variant="outlined"
        />
      </div> */}
      {/* tag */}
      {/* <div className="m-4">
        <Tag color="#4FBB92" bgColor="black" label="general labourer" />
        <Tag label="Wedding" />
        <Tag label="Music" />
        <Tag label="new" color="white" bgColor="#4BA0D7" />
        <Tag label="new" color="white" bgColor="black" />
        <StarBold />

        <CircleCheckBold />
      </div> */}
      {/* checkmark */}
      {/* <div className="m-4">
        <CheckMark checked={check1} onChange={() => setCheck1(!check1)} />
      </div> */}
      {/* radio button */}
      {/* <div className="m-4 flex justify-start items-center gap-2">
        <RadioButton
          checked={selectedRadio === "male"}
          label="Male"
          name="gender"
          value="male"
          onChange={() => {
            setSelectedRadio("male");
          }}
        />
        <RadioButton
          checked={selectedRadio === "female"}
          label="Female"
          name="gender"
          value="female"
          onChange={() => {
            setSelectedRadio("female");
          }}
        />
      </div> */}

      {/* college slider */}
      {/* <div>
        <CollegeSlider images={galleryData} loading={false} />
      </div> */}
      {/* college slider edit */}
      {/* <div className="m-4">
        <EditCollegeSlider
          defaultImages={galleryData}
          images={galleryData}
          loading={false}
        />
      </div> */}

      {/* <div className="m-4">
        <AddImage />
      </div> */}

      {/* select dropdown with search */}
      <div className="m-4">
        <Select onChange={() => console.log("first")} />
      </div>

      {/* filter dropdown */}
      <div className="m-4">
        <FilterDropDownGroup>
          <FilterDropDown label="Rating">
            <ul>
              {information.map((item, index) => (
                <li key={index}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </FilterDropDown>
          <FilterDropDown label="Price">
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

      {/* person card */}
      {/* <div className="m-4">
        <PersonCard
          image="https://healcap-bucket.s3.ap-south-1.amazonaws.com/content/images/gallery/81710041263447758369.pexels-photo-262047.jpeg"
          title="Brooklyn Simmons"
          subTitle="Event Planner"
          rating="5.0"
        />
      </div> */}

      {/* review banner */}
      {/* <div className="m-4">
        <ReviewBanner
          title="READY TO SHARE THOUGHTS?"
          rating="5.0"
          reviews="12"
        />
      </div> */}

      {/* review details banner */}
      {/* <div className="m-4">
        <ReviewDetailsBanner
          image="https://healcap-bucket.s3.ap-south-1.amazonaws.com/content/images/gallery/81710041263447758369.pexels-photo-262047.jpeg"
          user="JOHN DOE"
          userDescription="John worked with James John"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore a magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliq."
          rating="5.0"
          date="28th March 2023"
        />
      </div> */}

      {/* space card */}
      {/* <div className="m-4">
        <SpaceCard
          title="NAME OF THE SPACE IN THE HOTEL"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore a magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliq."
          type="Small"
          size="80m2"
          standCapacity="25"
          seatCapacity="60"
        />
      </div> */}

      {/* info card */}
      {/* <div className="m-4">
        <InfoCard
          title="Website"
          subTitle="www.website.com"
          icon={<CalenderBold />}
        />
      </div> */}

      {/* notification card */}
      {/* <div className="m-4">
        <NotificationCard
          image="https://healcap-bucket.s3.ap-south-1.amazonaws.com/content/images/gallery/81710041263447758369.pexels-photo-262047.jpeg"
          user="Anna"
          message="Lorem ipsum dolor sit amet"
          time="2 hours ago"
        />
      </div> */}

      {/* planner card */}
      {/* <div className="m-4">
        <PlannerBanner
          image="https://healcap-bucket.s3.ap-south-1.amazonaws.com/content/images/gallery/81710041263447758369.pexels-photo-262047.jpeg"
          plannerName="Brooklyn Simmons"
          rating="5.0"
          phoneNumber="+1-613-555-0157"
          email="company@mail.com"
        />
      </div> */}

      {/* tab button */}
      {/* <div className="m-4">
        <TabNav className="group">
          <CalendarStarBold className="" color="#0E0D0D" hoverColor="#5A6DD8" />
          Discover
        </TabNav>
      </div> */}

      {/* search box */}
      <div className="m-4">
        <SearchBox
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClear={() => setSearch("")}
        />
      </div>

      {/* talent card */}
      {/* <div className="m-4">
        <DiscoverCardTalent />
      </div> */}

      {/* event card */}
      {/* <div className="m-4">
        <DiscoverCardEvent />
      </div> */}

      {/* venue card */}
      {/* <div className="m-4">
        <DiscoverCardVenue />
      </div> */}

      {/* vendor card */}
      {/* <div className="m-4">
        <DiscoverCardVendor />
      </div> */}

      {/* menu row */}
      {/* <div className="m-4">
        <MenuRow label="My Jobs" />
      </div> */}

      {/* job details card */}
      {/* <div className="m-4">
        <DiscoverCardJobDetails />
      </div> */}

      {/* event card */}
      {/* <div className="m-4">
        <EventCard
          image="https://healcap-bucket.s3.ap-south-1.amazonaws.com/content/images/gallery/81710041263447758369.pexels-photo-262047.jpeg"
          eventName="Health and Harmony Expo"
          location="Las Vegas, NV, USA"
          date="14th March 2023"
        />
      </div> */}

      {/* section header */}
      {/* <div className="m-4">
        <SectionHeader label="Description" />
      </div> */}

      {/* modal header */}
      {/* <div className="m-4">
        <ModalHeader label="Modal Header" />
      </div> */}

      {/* modal */}
      <div className="mt-8">
        <div className="cursor-pointer" onClick={() => setIsModalOpen(true)}>
          click here
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          width={968}
          height={672}
        >
          <ModalHeader
            label="Change Password"
            onClose={() => setIsModalOpen(false)}
          />
          <div className="p-12">
            <div className="m-4">
              <SectionHeader label="Description" />
            </div>
            <div className="m-4">
              <PlannerBanner
                image="https://healcap-bucket.s3.ap-south-1.amazonaws.com/content/images/gallery/81710041263447758369.pexels-photo-262047.jpeg"
                plannerName="Brooklyn Simmons"
                rating="5.0"
                phoneNumber="+1-613-555-0157"
                email="company@mail.com"
              />
            </div>
            <div className="m-4">
              <EventCard
                image="https://healcap-bucket.s3.ap-south-1.amazonaws.com/content/images/gallery/81710041263447758369.pexels-photo-262047.jpeg"
                eventName="Health and Harmony Expo"
                location="Las Vegas, NV, USA"
                date="14th March 2023"
              />
            </div>
            <div className="m-4">
              <DiscoverCardTalent />
            </div>
          </div>
          <ModalFooter>
            <div className="flex justify-between items-center font-slussenExtended">
              <Button size="medium" variant="outlined">
                Cancel
              </Button>
              <div className="flex justify-evenly items-center gap-2">
                <Button size="medium" startIcon={<TrashBold color="#111" />}>
                  Delete
                </Button>
                <Button size="medium" variant="contained">
                  Save Changes
                </Button>
              </div>
            </div>
          </ModalFooter>
        </Modal>
      </div>

      {/* sticky footer */}
      {/* <StickyFooter /> */}

      {/* rating */}
      {/* <StarRating /> */}

      {/* pagination */}
      <Paginate
        postsPerPage={10}
        totalPosts={150}
        currentPage={currentPage}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
      />

      {/* premium card */}
      <PremiumCard />

      {/* footer */}
      <div className="mt-8">
        <Footer />
      </div>
    </>
  );
};

export default Demo;
