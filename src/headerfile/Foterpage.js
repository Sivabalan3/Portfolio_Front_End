import React from "react";
// import jeeva from '../myimgs/jeeva logo.webp'
import {
    FaWhatsapp,
    FaFacebook,
    FaTwitter,FaGithub,FaInstagram
  } from "react-icons/fa";
function Foterpage (){
    return(
        <>
<footer className="bg-gray-700 dark:bg-gray-900 border-t border-slate-400 text-white">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="/pnf" className="flex items-center">
                  {/* <img src={jeeva} className="h-12 w-12 mr-3 rounded-full" alt=" Logo" /> */}
                  <span className=" self-center text-2xl font-semibold whitespace-nowrap text-white">Sivabalan</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold  uppercasetext-white">Resources</h2>
                  <ul className=" text-white font-medium">
                      <li className="mb-4">
                          <a href="/pnf" className="hover:underline">React js</a>
                      </li>
                      <li>
                          <a href="/pnf" className="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold  uppercas text-white">Follow us</h2>
                  <ul className="text-gray-500  font-medium">
                      <li className="mb-4">
                          <a href="/pnf" className="text-white hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="/pnf" className="text-white hover:underline">Linkedin</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Legal</h2>
                  <ul className="text-white font-medium">
                      <li className="mb-4">
                          <a href="/pnf" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="/pnf" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm  sm:text-center dtext-gray-400">© 2023 <a href="/" className="hover:underline">sivabalan™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="/pnf" className="hover:scale-[2.2] hover:text-gray-900 dark:hover:text-violet-500 text-white">
              <FaFacebook className='text-2xl'/>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="/pnf" className="hover:scale-[2.2] hover:text-gray-900 dark:hover:text-violet-500 text-white">
                 <FaWhatsapp className="text-2xl"/>
                  <span className="sr-only">Discord community</span>
              </a>
              <a href="/pnf" className="hover:scale-[2.2] hover:text-gray-900 dark:hover:text-violet-500 text-white">
                 <FaTwitter className="text-2xl"/>
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="/pnf" className="hover:scale-[2.2] hover:text-gray-900 dark:hover:text-violet-500 text-white">
                  <FaGithub className="text-2xl"/>
                  <span className="sr-only">GitHub account</span>
              </a>
              <a href="/pnf" className="hover:scale-[2.2] hover:text-gray-900 dark:hover:text-violet-500 dark:text-white">
                 <FaInstagram className="text-2xl"/>
                  <span className="sr-only">Instagram</span>
              </a>
          </div>
      </div>
    </div>
</footer>

        </>
    );
}
export default Foterpage;