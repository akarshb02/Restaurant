import React from "react";
import BannerBackground from "./../Assets/home-banner-background.png";
import BannerImage from "./../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import Header from "./Header";
import { Link } from "react-router-dom";

const Home = () => {
 return (
  <div className="relative ">
   <Header />
   <div className="grid sm:flex pt-12 xs:w-28 max-w-[1500]">
    <div className=" absolute -top-24 -right-44 -z-[2]">
     <img src={BannerBackground} alt="" />
    </div>
    <div className=" flex flex-1 flex-col justify-center items-start p-32">
     <h1 className="primary-heading">
      Your Favourite Food Delivered Hot & Fresh
     </h1>
     <p className="primary-text">
      Healthy switcher chefs do all the prep work, like peeding, chopping
      & marinating, so you can cook a fresh food.
     </p>
     <button className="secondary-button">
      Order Now <FiArrowRight />{" "}
     </button>
    </div>
    <div className="home-image-section">
     <img src={BannerImage} alt="" />
    </div>
   </div>
  </div>
 );
};

export default Home;