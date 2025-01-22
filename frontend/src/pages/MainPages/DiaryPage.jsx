import React, { useState } from "react";
import BottomNavbar from "../../components/MobileComponents/HomePageComponents/BottomNavbar";
import TopNavbar from "../../components/MobileComponents/HomePageComponents/TopNavbar";
import background from "../../assets/images/home_background.png";
import Flipbook from "../../components/MobileComponents/DiaryPageComponents/Flipbook";
import DiaryFeed from "../../components/MobileComponents/DiaryPageComponents/DiaryFeed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faBook, faFilter } from "@fortawesome/free-solid-svg-icons";

const DiaryPage = () => {

  const entries = [
    { id: 2, body: "Angel going on a picnic!", image: "https://i.pinimg.com/736x/9a/18/bd/9a18bdb1387b44db5df2b96ef4419bf7.jpg" },
    { id: 3, body: "We're in New York OMG!!!", image: "https://i.pinimg.com/736x/61/d5/b9/61d5b9bc245f7fbaa9bcf33f1018e746.jpg" },
    { id: 4, body: "Visiting mom today :')", image: "https://i.pinimg.com/736x/66/e7/cd/66e7cd95979a904f28a66031a84a62e6.jpg" },
    { id: 5, body: "Here at the doctor, hope", image: "https://i.pinimg.com/736x/09/77/2f/09772fe7262839afbcda7318fe1c647d.jpg" },
    { id: 6, body: "SKYDIVING WITH MY LI", image: "https://i.pinimg.com/736x/56/65/6a/56656ac91d200d97780a0e2c1715efeb.jpg" },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-center bg-contain opacity-20 bg-repeat-y"
        style={{ backgroundImage: `url(${background})` }}
      />
      {/* Fixed Top Navbar */}
      <TopNavbar />
      {/* Content */}
      <div className="flex flex-col overflow-hidden mx-2 mt-[88px] mb-28">
        <DiaryFeed entries={entries} />
      </div>
      {/* Fixed Bottom Navbar */}
      <BottomNavbar />
    </div>
  );
};

export default DiaryPage;
