import React from 'react'
import BannerImage from "./../Assets/home-banner-image.png";


const Products = () => {

 const productList = [
  { name: "Biryani", image: BannerImage },
  { name: "South Indian", image: BannerImage },
  { name: "North Indian", image: BannerImage },
  { name: "Idly", image: BannerImage },
  { name: "Vada", image: BannerImage },
  { name: "Biryani", image: BannerImage },


 ]

 return (
  <div className='mt-16'>

   <div class="grid grid-cols-1 lg:grid-cols-3">
    {/* <div class="grid grid-col-2mx-auto"> */}

    {
     productList.map((data, i) => {
      return (
       <div className="w-full mx-auto mt-5 p-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <div className="px-5 pb-5">
         <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
         </a>
         <div key={i} className="cla">
          <img src={data.image} alt="" />
         </div>
         <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">&#11088; 5.0</span>
        </div>
        <div className="flex items-center justify-between">
         <span className="text-3xl font-bold text-gray-900 dark:text-white">$</span>
         <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
       </div>

      )
     })
    }

   </div>
  </div>
 )
}

export default Products
