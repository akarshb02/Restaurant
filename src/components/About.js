import React from "react";
import AboutBackground from "./../Assets/about-background.png";
import AboutBackgroundImage from "./../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
 return (
  <div className=" mt-24 justify-between items-center grid p-10 sm:flex pt-12 xs:w-28 max-w-[1500">
   <div className="about-background-image-container">
    <img src={AboutBackground} alt="" />
   </div>
   <div className="about-section-image-container">
    <img src={AboutBackgroundImage} alt="" />
   </div>
   <div className=" flex-1 justify-center flex flex-col">
    <p className="primary-subheading">About</p>
    <h1 className="primary-heading">
     Food Is An Important Part Of A Balanced Diet
    </h1>
    <p className="primary-text">
     Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
     elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
    </p>
    <p className="primary-text">
     Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
     facilisis at fringilla quam.
    </p>
    <div className="flex mt-36 sm:mt-8">
     <button className=" bg-[#fe9e0d] sm:text-lg text-xs px-3 sm:px-8 rounded-full">Learn More</button>
     <button className="watch-video-button sm:text-lg text-xs">
      <BsFillPlayCircleFill /> Watch Video
     </button>
    </div>
   </div>
  </div>
 );
};

export default About;