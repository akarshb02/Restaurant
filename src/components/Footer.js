import React from "react";
import Logo from "./../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {

 let footerData = [
  { desc: "Qualtiy", url: "" },
  { desc: "Help", url: "" },
  { desc: "Share", url: "" },
  { desc: "Carrers", url: "" },
  { desc: "Testimonials", url: "" }
 ]

 const socialIcons = [
  { name: "Twitter", icon: <BsTwitter /> },
  { name: "Linkedin", icon: <SiLinkedin /> },
  { name: "Youtube", icon: <BsYoutube /> },
  { name: "Facebook", icon: <FaFacebookF /> }


 ]

 return (
  <div className="w-full bg-[#1E252B] p-4 mt-20">
   <div className="sm:flex grid grid-cols-2 flex-col items-center md:flex-row md:justify-between mx-4">
    <div className="items-center mb-2 md:mb-0">
     <img
      src={Logo}
      className="mb-2 w-10  sm:w-48 "
     />
     <h1 className="text-[#9CA3AF] text-xs mb-5 sm:mb-10">
      © 2024., All rights reserved.
     </h1>
    </div>

    <div className="grid mt-1 md:mt-0 justify-center ">
     {footerData.map((footerInfo, i) => {
      return (
       <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded text-gray-400 hover:text-white text-1xl">
        {footerInfo.desc}
       </div>
      )
     })}
    </div>
    <div className="grid text-gray-400 -mt-28">
     <span className="mt-1">Terms & Conditions</span>
     <span className="mt-1">Privacy Policy</span>
    </div>
    <div className="flex ml-16 sm:grid mt-2 md:mt-0 justify-center">
     {socialIcons.map((socialIcon, i) => {
      return (
       <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded text-gray-400 hover:text-white ">
        {socialIcon.icon}
       </div>
      )
     })}
    </div>
   </div>
  </div>
 );
};

export default Footer;