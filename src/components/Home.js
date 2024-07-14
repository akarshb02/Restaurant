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
   <div className="grid sm:flex pt-12 max-w-[1500]">
    <div className=" absolute -top-24 -right-0 sm:-right-44 -z-[2]">
     <img src={BannerBackground} alt="" />
    </div>
    <div className=" flex flex-1 flex-col justify-center  items-start p-10 sm:p-32">
     <h1 className="primary-heading">
      Your Favourite Food Delivered Hot & Fresh
     </h1>
     <p className="primary-text">
      Healthy switcher chefs do all the prep work, like peeding, chopping
      & marinating, so you can cook a fresh food.
     </p>
     <Link to="/products">
      <button className="bg-[#fe9e0d] hover:bg-[#FF8C00] text-white font-bold flex sm:text-lg text-xs py-3 px-3 sm:px-10 sm:py-4 rounded-full">
       Order Now<span className="sm:pt-1 pt-0.5 px-0.5 sm:px-1.5 font-bold"><FiArrowRight />{" "}</span>
      </button>
     </Link>
    </div>
    <div className="flex-1">
     <img src={BannerImage} alt="" />
    </div>
   </div>
  </div>

 );
};

export default Home;