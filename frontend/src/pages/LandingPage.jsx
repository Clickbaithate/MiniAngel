import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import menuBackground from "../assets/images/menu_background.png";
import background from "../assets/images/background.png";

const LandingPage = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => navigate("/login");
  const handleSignUp = () => navigate("/signup");
  const handleFeatures = () => navigate("/features");
  const handleAbout = () => navigate("/about");
  const handleContact = () => navigate("/contact");

  return (
    <div className="flex flex-col min-h-screen bg-cover bg-top bg-[#dbf8ff] md:bg-rotate-45 md:bg-contain md:bg-no-repeat justify-start" style={{ backgroundImage: `url(${background})` }}>
      <nav className="flex items-center justify-between font-bold py-4 pt-6 px-6 space-x-4 md:px-12">
        {/* Logo / Name */}
        <div className="text-lg sm:text-2xl">
          <div className="mb-[-12px]">Mini</div>
          <div>Angel</div>
        </div>

        {/* Hamburger Menu (Visible on mobile) */}
        <div className="md:hidden">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer"
          />
        </div>

        {/* Navigation Links (Visible on desktop) */}
        <div className={`hidden md:block space-x-6`}>
          <button onClick={() => handleFeatures()} className="w-20 p-1 border-b-2 border-transparent relative overflow-hidden group hover:text-pink-300">
            <span className="absolute left-0 bottom-0 block w-full h-[2px] bg-pink-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            Features
          </button>
          <button onClick={() => handleAbout()} className="w-20 p-1 border-b-2 border-transparent relative overflow-hidden group hover:text-pink-300">
            <span className="absolute left-0 bottom-0 block w-full h-[2px] bg-pink-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            About
          </button>
          <button onClick={() => handleContact()} className="w-20 p-1 border-b-2 border-transparent relative overflow-hidden group hover:text-pink-300">
            <span className="absolute left-0 bottom-0 block w-full h-[2px] bg-pink-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            Contact
          </button>
        </div>
      </nav>

      {/* Animated Mobile Menu */}
      <menu
        className={
          `w-1/2 h-1/4 absolute right-2 top-4 flex flex-col space-y-6 rounded-3xl bg-cover bg-bottom transition-all duration-500 ease-in-out transform ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-100%]"
          }`
        }
        style={{ backgroundImage: `url(${menuBackground})` }}
      >
        <div className="flex items-center justify-between pr-4 pt-2" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="font-bold text-lg pl-6 ">
            <div className="mb-[-12px]">Mini</div>
            <div>Angel</div>
          </div>
          <FontAwesomeIcon icon={faClose} className="h-5" />
        </div>
        <div className="flex flex-col items-center space-y-3">
          <button onClick={() => handleFeatures()} className="italic font-bold w-16">Features</button>
          <button onClick={() => handleAbout()} className="italic font-bold w-24 py-2">About</button>
          <button onClick={() => handleContact()} className="italic font-bold w-16">Contact</button>
        </div>
      </menu>

      <body className="flex flex-col items-center">
        <div className="text-3xl font-bold text-center mt-12 md:mt-20 mb-6">
          Track, Share, and Grow Your Sonny Angel Collection with Ease!
        </div>
        <div className="font-bold text-center px-2">
          Effortlessly manage, document, and connect with fellow collectors on your Sonny Angel journey!
        </div>
        <div className="py-12 space-x-2">
          <button onClick={() => handleLogin()} className="w-48 h-12 bg-white rounded-xl font-bold hover:bg-pink-200 hover:text-white">
            Login
          </button>
          <button onClick={() => handleSignUp()} className="w-48 h-12 rounded-xl font-bold border-2 border-white hover:border-hidden hover:bg-white hover:text-black">
            Sign Up
          </button>
        </div>
      </body>

      <footer className="text-xs py-2 text-center absolute bottom-0 left-0 right-0">
        Not affiliated with Sonny Angel or Dreams Inc. | &copy; {new Date().getFullYear()} All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
