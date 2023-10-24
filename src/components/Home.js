import React from "react";
import { useState ,useEffect} from "react";
import { Typewriter, Cursor } from 'react-simple-typewriter';
import video from '../videos/vid6.mp4';
import { ChevronDoubleDownIcon,CheckCircleIcon } from '@heroicons/react/24/outline';
import {FaArrowCircleDown} from 'react-icons/fa';
import { Link ,useNavigate} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode, Pagination ,Autoplay,Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper'
import {HelmetProvider,Helmet} from "react-helmet-async"
import Project from "./Project";

import htmls from "../myimgs/swip/html.png";
import css from "../myimgs/swip/css.png";
import JavaScript from "../myimgs/swip/javascript.png";
import mongodb from '../myimgs/swip/mongodb2.png';
import expressjss from '../myimgs/swip/expressjs.png';
import reacts from '../myimgs/swip/reactjs.png';
import nodejss from '../myimgs/swip/nodejs.png';
import docker from '../myimgs/swip/docker.png';
import jsons from '../myimgs/swip/json.png';
import gits from '../myimgs/swip/git.png';
import github from '../myimgs/swip/github.png';
import bootstrab from '../myimgs/swip/pngwing.com.png';
import reduxs from '../myimgs/swip/redux.png';
import tailwindcss from '../myimgs/swip/tailwindcss.png';
import metrialui from '../myimgs/swip/metrailui.png';
import msoffice from '../myimgs/swip/msoffice.png';
import photoshop from '../myimgs/swip/photoshop.png';
function Home() {
    const history =useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('auth')) history("/Admindashboard");
    }); 
    //TIME EVENTS
    let time = new Date().toLocaleTimeString();

    const [cutime, setcutime] = useState(time);
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setcutime(time);
    }
    setInterval(UpdateTime, 1000);


    //DATES EVENTS
    const dates = new Date();
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = weekday[dates.getDay().toLocaleString()];
    const month = months[dates.getMonth().toLocaleString()];
    const date = dates.getDate().toLocaleString();
    const year = dates.getFullYear();
    //ADD ZERO IN DATES
    function addZero(t) {
        var len = t.toString().length;
        if (len <= 1) {
            return "0" + t;
        }

        return t;
    }
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])
    return (
        <>
            {/* NEW   CREATING   */}
            <main>
                <HelmetProvider>

                <Helmet>

                    <title>Home</title>
                </Helmet>
                </HelmetProvider>
            <div className="relative h-full w-full flex item-center justify-center">
           
                <div className="absolute flex flex-col justify-around md:justify-center  w-full h-full lg:pb-2">
                    <div className="text-center w-full md:h-2/5 sm:space-y-2 space-y-1">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-slate-200 drop-shadow-xl"><span className="text-sky-400">Hi i'm</span> Sivabalan</h1>
                        <h1 className="text-xl sm:text-2xl  md:text-4xl font-semibold  text-white "><Typewriter words={['UI/UX Designer ', 'React Js Developer ']} loop={0}
                            typeSpeed={200}
                            deleteSpeed={150}
                            delaySpeed={100}>

                        </Typewriter><span className="text-red-300 font-bold"><Cursor cursor cursorStyle="|" /></span></h1>



                        <div className=" h-full flex flex-col sm:justify-center items-center w-full text-center">
                            <h1 className=" text-slate-200 text-xs text-md md:text-lg  font-semibold  xl:text-xl ">If you need to create a website </h1>
                            <h1 className=" text-slate-200 text-xs text-md md:text-lg font-semibold pb-3 xl:pb-4 xl:text-xl ">fill the link below</h1>


                            <Link to="/userform" className=" relative inline-flex items-center justify-center md:p-4 md:px-6 md:py-px px-1.5 py-px overflow-hidden font-medium text-slate-200 transition duration-300 ease-out border-2 border-sky-500 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-sky-500 group-hover:translate-x-0 ease">
                                    <ChevronDoubleDownIcon className="w-6 h-6" />
                                </span>
                                <span className="text-xs md:text-lg absolute flex items-center justify-center w-full h-full texslatet2-200 transition-all duration-300 transform group-hover:translate-x-full ease">Click here</span>
                                <span className="text-xs md:text-lg p-1 relative invisible">Click here</span>
                            </Link>

                        </div>
                    </div>
                    {/* DATE AND TIME */}
                    <div className="">
                        <h3 className="text-sky-500  text-xs md:text-xl  font-bold pl-2 md:pl-5"> {cutime}</h3>
                        <div className="inline-flex  pl-2 md:pl-5">
                            <h3 className="px-px text-slate-200 text-xs md:text-xl font-bold">{day} /</h3>
                            <h3 className="px-px text-slate-200 text-xs md:text-xl font-bold">{addZero(date)} /</h3>
                            <h3 className="px-px text-slate-200 text-xs md:text-xl font-bold">{month} /</h3>
                            <h3 className="px-1  text-slate-200 text-xs md:text-xl font-bold">{year}</h3>
                        </div>

                    </div>
                </div>
                
                <video src={video} alt="background video" type="video/mp4" className="brightness-60 w-full h-full -z-10 bg-fixed top-0 overflow-hidden" autoPlay loop muted />
            </div>
           {/* PRICING TAG */}<section className="bg-gray-700 dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto  text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-2xl lg:text-4xl tracking-tight font-extrabold   text-sky-400">Designed for business teams like yours</h2>
          <p className="mb-5 font-light text-gray-300 sm:text-xl dark:text-gray-400">Looking for a skilled website developer? Look no further! Our team of expert developers can create a professional website that meets your needs and exceeds your expectations. Whether you need a simple brochure site or a complex e-commerce platform, we've got the experience and technical know-how to make it happen. We use the latest technologies and best practices to ensure your site is secure, responsive, and visually stunning. Contact us today to discuss your project and get a free quote!</p>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
      
          <div data-aos="fade-right" className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-200 bg-gray-800  rounded-lg border border-sky-400 shadow  xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-xl  sm:text-2xl font-semibold text-sky-400"> Static website & front end</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">₹2999</span>
                  {/* <span className="text-gray-500 dark:text-gray-400">/month</span> */}
              </div>
             
              <ul className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    <CheckCircleIcon className="text-green-400 w-6 h-6 font-bold"/>                     
                      <span>Individual configuration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      
                  <CheckCircleIcon className="text-green-400 w-6 h-6 font-bold"/>
                  <span>No setup, or hidden fees</span>
                  </li>
                  <li className="flex items-center space-x-3">
                  <CheckCircleIcon className="text-green-400 w-6 h-6 font-bold"/>                     
                      <span>Team size : <span className="font-semibold">1 developer</span></span>
                  </li>
                 
                  <li className="flex items-center space-x-3">
                     
                  <CheckCircleIcon className="text-green-400 w-6 h-6 font-bold"/>
                      <span>Free updates : <span className="font-semibold">6 months</span></span>
                  </li>
                  <li className="flex items-center space-x-3">
                  <CheckCircleIcon className="text-green-400 w-6 h-6 font-bold"/>
                      <span>Languages : <span className="font-semibold">HTML, CSS, JAVASCRIPT</span></span>
                  </li>
              </ul>
              <Link to="/userform" className="px-5 py-2.5 relative rounded group  text-white font-medium inline-block">
<span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-sky-400 to-blue-500"></span>
<span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
<span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-sky-600 from-blue-500"></span>
<span className="relative flex gap-2 justify-center">Register Now<FaArrowCircleDown  className="mt-1.5"/></span>
</Link>                   
 </div>
         
          <div data-aos="fade-right" className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-200 bg-gray-800 rounded-lg border  border-sky-400 shadow xl:py-8 xl:px-5 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-xl  sm:text-2xl font-semibold text-sky-400">Dynamic Website & front-end</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for multiple users, extended & premium support.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">₹6999</span>
                  {/* <span className="text-gray-500 dark:text-gray-400">/month</span> */}
              </div>
             
              <ul  className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                  <CheckCircleIcon className="text-green-400 w-6 h-6 font-bold"/>                    
                      <span>Individual configuration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                  <CheckCircleIcon className="text-green-400 w-6 h-6 font-bold"/>                    
                      <span>No setup, or hidden fees</span>
                  </li>
                  <li className="flex items-center space-x-3">
                  <CheckCircleIcon className="text-green-400 w-6 h-6 font-bold"/>                   
                      <span>Team size : <span className="font-semibold">4 developers</span></span>
                  </li>
                  
                  <li className="flex items-center space-x-3">
                  <CheckCircleIcon className="text-green-400 w-6 h-6 font-bold"/>                     
                      <span>Free updates : <span className="font-semibold">12 months</span></span>
                  </li>
                  <li className="flex items-center space-x-3">
                  <CheckCircleIcon className="text-green-400 w-6 h-6 font-bold"/>                  
                      <span>Languages : <span className="font-semibold">React Js, Next js</span></span>
                  </li>
              </ul>
              <Link to="/userform" className="px-5 py-2.5 relative rounded group  text-white font-medium inline-block">
<span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-sky-400 to-blue-500"></span>
<span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
<span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-sky-600 from-blue-500"></span>
<span className="relative flex gap-2 justify-center">Register Now<FaArrowCircleDown  className="mt-1.5"/></span>
</Link>                                     
 </div>
       
          <div data-aos="fade-right" className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-200 bg-gray-800  rounded-lg border border-sky-400 shadow  xl:py-8 xl:px-5 dark:text-white">
              <h3 className="mb-4 text-xl  sm:text-2xl font-semibold text-sky-400">Dynamic Website & Back End</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best for large scale uses and extended redistribution rights.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">₹19999</span>
                  {/* <span className="text-gray-500 dark:text-gray-400">/month</span> */}
              </div>
           
              <ul  className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                  <CheckCircleIcon className="text-green-400 w-6 h-6 font-bold"/>                  
                      <span>Individual configuration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                  <CheckCircleIcon className="text-green-400 w-6 h-6 font-bold"/>         
                      <span>No setup, or hidden fees</span>
                  </li>
                  <li className="flex items-center space-x-3">
                  <CheckCircleIcon className="text-green-400 w-6 h-6 font-bold"/>                      
                      <span>Team size : <span className="font-semibold">6+ developers</span></span>
                  </li>
                  
                  <li className="flex items-center space-x-3">
                  <CheckCircleIcon className="text-green-400 w-6 h-6 font-bold flex-shrink-0"/>                     
                      <span>Free updates : <span className="font-semibold">18 months</span></span>
                  </li>
                  <li className="flex items-center space-x-3">
                  <CheckCircleIcon className="text-green-400 w-6 h-6 font-bold"/>                     
                      <span>Language : <span className="font-semibold">MERN STACK</span></span>
                  </li>
              </ul>
              <Link to="/userform" className="px-5 py-2.5 relative rounded group  text-white font-medium inline-block">
<span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-sky-400 to-blue-500"></span>
<span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
<span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-sky-400 to-blue-500"></span>
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-sky-600 from-blue-500"></span>
<span className="relative flex gap-2 justify-center">Register Now<FaArrowCircleDown  className="mt-1.5"/></span>
</Link>                           
</div>
      </div>
  </div>
  {/* SWIPER JS  */}
  <div>
    
    <h1 className="text-2xl sm:text-4xl text-sky-400 text-center py-6 pr-6 font-extrabold underline underline-offset-2  decoration-slate-300">My Skils</h1>
  <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        navigation={true}
        modules={[FreeMode, Pagination,Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide><img src={htmls} alt="icons"className="lg:w-3/5 h-3/5 drop-shadow-2xl "/></SwiperSlide>
        <SwiperSlide><img src={css} alt="icons"className="lg:w-3/5 h-3/5 drop-shadow-2xl "/></SwiperSlide>
        <SwiperSlide><img src={JavaScript} alt="icons"className="lg:w-3/5 h-3/5 drop-shadow-2xl "/></SwiperSlide>
        <SwiperSlide><img src={mongodb} alt="icons"className="lg:w-3/5 h-3/5 drop-shadow-2xl "/></SwiperSlide>
        <SwiperSlide><img src={expressjss} alt="icons"className="lg:w-3/5 h-3/5 drop-shadow-2xl "/></SwiperSlide>
        <SwiperSlide><img src={reacts} alt="icons"className="lg:w-3/5 h-3/5 drop-shadow-2xl "/></SwiperSlide>
        <SwiperSlide><img src={nodejss} alt="icons"className="lg:w-3/5 h-3/5 drop-shadow-2xl "/></SwiperSlide>
        <SwiperSlide><img src={docker} alt="icons"className="lg:w-3/5 h-3/5 drop-shadow-2xl "/></SwiperSlide>
        <SwiperSlide><img src={gits} alt="icons"className="lg:w-3/5 h-3/5 drop-shadow-2xl "/></SwiperSlide>
        <SwiperSlide><img src={github} alt="icons"className="lg:w-3/5 h-3/5 dark:invert drop-shadow-2xl "/></SwiperSlide>
        <SwiperSlide><img src={jsons} alt="icons"className="lg:w-3/5 h-3/5 dark:invert drop-shadow-2xl "/></SwiperSlide>
        <SwiperSlide><img src={bootstrab} alt="icons"className="lg:w-3/5 h-3/5 drop-shadow-2xl "/></SwiperSlide>
        <SwiperSlide><img src={reduxs} alt="icons"className="lg:w-3/5 h-3/5 drop-shadow-2xl "/></SwiperSlide>
        <SwiperSlide><img src={tailwindcss} alt="icons"className="lg:w-3/5 h-3/5 drop-shadow-2xl "/></SwiperSlide>
        <SwiperSlide><img src={metrialui} alt="icons"className="lg:w-3/5 h-3/5 drop-shadow-2xl "/></SwiperSlide>
        <SwiperSlide><img src={msoffice} alt="icons"className="lg:w-3/5 h-3/5 drop-shadow-2xl "/></SwiperSlide>
        <SwiperSlide><img src={photoshop} alt="icons"className="lg:w-3/5 h-3/5 drop-shadow-2xl "/></SwiperSlide>
      </Swiper>
  </div>
</section>
<Project/>
      </main>
        </>
    );
}
export default Home;