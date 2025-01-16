import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faFolder, faHome, faBookmark, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { colors } from "../../../services/Colors";

const BottomNavbar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const routes = {
    "/diary": 0,
    "/collection": 1,
    "/home": 2,
    "/vault": 3,
    "/social": 4,
  };

  const currentPage = routes[location.pathname] || -1;

  const handleDiary = () => navigate("/diary");
  const handleCollection = () => navigate("/collection");
  const handleHome = () => navigate("/home");
  const handleVault = () => navigate("/vault");
  const handleSocial = () => navigate("/social");

  return(
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] h-16 items-center rounded-3xl flex md:hidden" style={{backgroundColor: colors.primary}}>
      <FontAwesomeIcon 
        className={`w-6 h-6 inline-flex flex-col items-center text-xs font-medium py-3 px-4 flex-grow`}
        style={{color: currentPage === 0 ? colors.primary : colors.accent}} 
        icon={faBookOpen} 
        onClick={() => handleDiary()} 
      />
      <FontAwesomeIcon 
        className={`w-6 h-6 inline-flex flex-col items-center text-xs font-medium py-3 px-4 flex-grow`}
        style={{color: currentPage === 1 ? colors.primary : colors.accent}} 
        icon={faFolder} 
        onClick={() => handleCollection()} 
      />
      <button className="relative inline-flex flex-col items-center text-xs font-medium text-white py-3 px-6 flex-grow">
        <div className="absolute bottom-1 rounded-full border-4 border-white bg-purple-400" style={{backgroundColor: colors.secondary}}>
          <FontAwesomeIcon 
            className={`w-7 h-7 inline-flex flex-col items-center text-xs font-medium p-4 flex-grow`}
            style={{color: currentPage === 2 ? colors.primary : colors.accent}}  
            icon={faHome} 
            onClick={() => handleHome()} 
          />
        </div>
        <span className="sr-only">Chat</span>
      </button>
      <FontAwesomeIcon 
        className={`w-6 h-6 inline-flex flex-col items-center text-xs font-medium py-3 px-4 flex-grow`}
        style={{color: currentPage === 3 ? colors.primary : colors.accent}} 
        icon={faBookmark} 
        onClick={() => handleVault()} 
      />
      <FontAwesomeIcon 
        className={`w-6 h-6 inline-flex flex-col items-center text-xs font-medium py-3 px-4 flex-grow`}
        style={{color: currentPage === 4 ? colors.primary : colors.accent}} 
        icon={faUserGroup} 
        onClick={() => handleSocial()} 
      />
    </div>
  );

}

export default BottomNavbar;