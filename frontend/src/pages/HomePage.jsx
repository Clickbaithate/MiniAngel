import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faBook, faVault } from "@fortawesome/free-solid-svg-icons";
import placeholder from "../assets/images/placeholder.jpeg";
import Carousel from "../components/MobileComponents/HomePageComponents/FeaturedAngelCarousel.jsx";
import BottomNavbar from "../components/MobileComponents/HomePageComponents/BottomNavbar.jsx";
import TopNavbar from "../components/MobileComponents/HomePageComponents/TopNavbar.jsx";
import LatestReleases from "../components/MobileComponents/HomePageComponents/LatestReleases.jsx";
import FeaturedAngelCarousel from "../components/MobileComponents/HomePageComponents/FeaturedAngelCarousel.jsx";
import RecentlyVisited from "../components/MobileComponents/HomePageComponents/RecentlyVisited.jsx";
import RecentlyCollected from "../components/MobileComponents/HomePageComponents/RecentlyCollected.jsx";
import { colors } from "../services/Colors.jsx";
import background from "../assets/images/home_background.png";

const HomePage = () => {
  return(
    <div className="w-full h-full flex flex-col bg-contain" style={{backgroundColor: colors.background}}>
      <TopNavbar />
      <div className="overflow-hidden space-y-3 mt-4 mb-24">
        <LatestReleases/>
        <div className="text-xl font-bold text-left pl-6"> Featured Sonny Angel's</div>
        <FeaturedAngelCarousel/>
        <div className="text-xl font-bold text-left pl-6"> Recently Visited</div>
        <RecentlyVisited/>
        <div className="text-xl font-bold text-left pl-6"> Recently Collected</div>
        <RecentlyCollected/>
      </div>
      <BottomNavbar/>
    </div>
  );
}

export default HomePage;