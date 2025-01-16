import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faBars, faClose, faGear, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { colors } from "../../../services/Colors";

const TopNavbar = () => {

  const userImage = "https://ih1.redbubble.net/image.5275074962.3139/flat,750x,075,f-pad,750x1000,f8f8f8.jpg";
  const username = "clickbait";

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleProfile = () => navigate("/profile");

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  return (
    <div className="fixed top-0 z-10 w-full flex justify-between p-4 rounded-b-2xl" style={{ backgroundColor: colors.primary }}>
      {/* Side Menu */}
      {menuOpen && (
        <div 
          className="w-[95%] h-screen absolute top-0 left-0 flex flex-col items-center justify-start rounded-r-3xl border-r-2" 
          style={{backgroundColor: colors.primary, borderColor: colors.secondary}}
        >
          <div className="w-12 h-12 absolute left-0 top-0 flex items-center justify-center bg-white rounded-xl ml-4 mt-4 cursor-pointer" onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faClose} className="w-5 h-5" />
          </div>
          {/* PFP and Username */}
          <img src={userImage} className="w-24 h-24 rounded-full cursor-pointer mt-20 border-4" style={{borderColor: colors.secondary}}/>
          <p className="my-6 text-white">Welcome Back, {username}!</p>
          {/* Settings Button */}
          <div className="w-[90%] h-16 flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl" style={{backgroundColor: colors.accent, color: colors.secondary}}>
                <FontAwesomeIcon icon={faGear} />
              </div>
              <p style={{color: colors.white}}>Settings</p>
            </div>
            <FontAwesomeIcon icon={faAngleRight} style={{color: colors.white}} />
          </div>
          {/* Stats Button */}
          <div className="w-[90%] h-16 flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl" style={{backgroundColor: colors.accent, color: colors.secondary}}>
                <FontAwesomeIcon icon={faGear} />
              </div>
              <p style={{color: colors.white}}>Stats & Analytics</p>
            </div>
            <FontAwesomeIcon icon={faAngleRight} style={{color: colors.white}} />
          </div>
          {/* Contact Button */}
          <div className="w-[90%] h-16 flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl" style={{backgroundColor: colors.accent, color: colors.secondary}}>
                <FontAwesomeIcon icon={faGear} />
              </div>
              <p style={{color: colors.white}}>Contact Us</p>
            </div>
            <FontAwesomeIcon icon={faAngleRight} style={{color: colors.white}} />
          </div>
          {/* Log Out Button */}
          <div className="w-[90%] h-16 flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl" style={{backgroundColor: colors.accent, color: colors.secondary}}>
                <FontAwesomeIcon icon={faGear} />
              </div>
              <p style={{color: colors.white}}>Log Out</p>
            </div>
            <FontAwesomeIcon icon={faAngleRight} style={{color: colors.white}} />
          </div>
          {/* Bottom Message */}
          <div className="rounded-3xl p-3 flex items-center justify-center space-x-4 my-6 border-4" style={{backgroundColor: colors.white, borderColor: colors.secondary}}> 
            <img className="w-12 h-12 rounded-full" src="https://cdn-icons-png.flaticon.com/512/168/168830.png" /> 
            <p>Mobile App Coming Soon!</p>
          </div>
        </div>
      )}

      {/* Regular Top Navbar */}
      <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl cursor-pointer" onClick={() => setMenuOpen(true)}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      {/* Search Bar */}
      <div className="w-[70%] flex items-center bg-white rounded-xl">
        <FontAwesomeIcon className="px-2 text-gray-500" icon={faSearch} />
        <input className="w-full bg-transparent mr-4 focus:outline-none" placeholder="Search..."/>
      </div>
      {/* Profile Icon */}
      <img className="w-12 h-12 bg-contain bg-center rounded-full cursor-pointer" src={userImage} onClick={handleProfile}/>
    </div>
  );
};

export default TopNavbar;
