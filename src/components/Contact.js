
import React, { useState } from "react";

const Contact = () => {
 const [submitData, setSubmitData] = useState({
  userEmail: "",
  subject: "",
  message: ""
 })
 const [flag, setFlag] = useState(false)



 return (
  <section className="bg-white dark:bg-gray-100 mt-10">
   <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-500">Contact Us</h2>
    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
    <form action="#" className="space-y-8">
     <div>
      <label for="email" className="block mb-2 text-sm text-gray-500 tracking-tight font-extrabold ">Your email</label>
      <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-sm-light" placeholder="food@gmail.com" required />
     </div>
     <div>
      <label for="subject" className="block mb-2 text-sm text-gray-500 tracking-tight font-extrabold ">Subject</label>
      <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-200 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  shadow-sm-light" placeholder="Let us know how we can help you" required />
     </div>
     <div class="sm:col-span-2">
      <label for="message" className="block mb-2 text-sm text-gray-500 tracking-tight font-extrabold">Your message</label>
      <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-200 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-400 " placeholder="Leave a comment..."></textarea>
     </div>
     <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-400" onClick={submitDetails}>Send message</button>
    </form>
   </div>
   {flag && <h1>{() => setSubmitData("")}</h1>}
  </section>
 );
};

export default Contact;