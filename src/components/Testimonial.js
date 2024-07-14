import React from "react";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {

 const data = [
  { review: " Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non etelit. Dolor turpis molestie dui magnis facilisis at fringilla quam.", userName: "Akarsh" },
  { review: " Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non etelit. Dolor turpis molestie dui magnis facilisis at fringilla quam.", userName: "XYZ" },
  { review: " Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non etelit. Dolor turpis molestie dui magnis facilisis at fringilla quam.", userName: "ZZZ" },
  { review: " Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non etelit. Dolor turpis molestie dui magnis facilisis at fringilla quam.", userName: "Harish" },

 ]

 return (
  <div className="mt-20 ">
   <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    <p className="primary-subheading">Testimonial</p>
    <h1 className="primary-heading">What They Are Saying</h1>
    <p className="primary-text">
     Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
     elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
    </p>
   </div>
   <div class="grid grid-cols-1 lg:grid-cols-2">

    {
     data.map((testimonial, i) => {
      return (
       <div className="w-full mx-auto mt-5 p-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700 ">
        <div className="px-5 pb-5">
         <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-500">{testimonial.review}</h5>
         </a>
         <div key={i} className="flex justify-center mt-4">
          <h1 className=" font-semibold">{testimonial.userName}</h1>
         </div>
         <div className=" ml-24">
          {
           [...Array(5)].map((stars, index) => {
            return (
             <div key={(index)} className=" inline-flex p-0.5 ">
              &#11088;
             </div>
            )
           })
          }
         </div>
        </div>
       </div>


      )
     })
    }

   </div>
  </div>
 );
};

export default Testimonial;