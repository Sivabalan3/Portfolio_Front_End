import React, {useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import crud from '../myimgs/crud.png';
import quiz from '../myimgs/React-Quiz-App.jpg';
import erp from '../myimgs/erp.png';
import './error.css';
import { useSelector,useDispatch } from 'react-redux';
import { getProjects } from '../store/projectstores/projectSlice';
import { BASE_URL } from '../store/constant';


function Project() {
  const dispatch = useDispatch();
  const { data:projects, loading, error } = useSelector((state) => state.projects.getProjects);
// console.log("hdhfdf",projects.image)
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);


  const [likeCount, setLikeCount] = useState(50);
  const [dislikeCount, setDislikeCount] = useState(25);

  const [activeBtn, setActiveBtn] = useState("none");
  const handleLikeClick = (id) => {
    if (activeBtn === "none" ) {
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
      return;
    }

    if (activeBtn === 'like') {
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "dislike" ) {
      setLikeCount(likeCount + 1);
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("like");
    }
  };
  const handleDisikeClick = () => {
    if (activeBtn === "none") {
      setDislikeCount(dislikeCount + 1);
      setActiveBtn("dislike");
      return;
    }

    if (activeBtn === 'dislike') {
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "like") {
      setDislikeCount(dislikeCount + 1);
      setLikeCount(likeCount - 1);
      setActiveBtn("dislike");
    }
  };
  const projectss = [
    { title: "Project - 1", 
    heading: "CRUD APP", 
    imgs: crud, 
    link: 'https://sivabalan3.github.io/react-crud/', 
    disc: "A React CRUD app refers to a web application built using the React JavaScript library that allows users to Create, Read, Update, and Delete data. It provides a user-friendly interface for managing data operations. The term short and neat implies that the app is concise, well-structured, and visually appealing. It likely follows best practices in code organization and design, providing a seamless user experience while efficiently managing data operations. ",
    Anime:"fade-up",
    duration:1000 ,
    Likeclick:handleLikeClick,
    DisLike:handleDisikeClick},

    { title: "Project - 2", 
    heading: "ERP SOFTWARE", 
    imgs: erp, 
    link:"https://github.com/Sivabalan3/main-project-erp",
    disc: `"One of my significant projects was an **Enterprise Resource Planning (ERP) system**, a **MERN Stack software system** that helps businesses manage and integrate the essential parts of their operations. 

    This ERP software system can also integrate various aspects such as:
    - Planning
    - Purchasing inventory
    - Sales
    - Marketing
    - Finance
    - Human resources, and more. 
  
    It's a **web-based application** that users can access remotely."`,
    Anime:"fade-down",
    duration:2000 ,
    Likeclick:handleLikeClick,
    DisLike:handleDisikeClick},

    { title: "Project - 3", 
    heading: "QUIZ APP", 
    imgs: quiz, 
    link:"/pnf",
    disc: "A quiz app built using React JS is a web-based application that allows users to take various quizzes on different topics. The app provides a user-friendly interface with interactive features such as multiple choice questions, timed quizzes, and instant feedback. React JS is a popular JavaScript library used for building user interfaces, making it an ideal choice for creating dynamic and responsive quiz apps.Overall, a React JS quiz app offers an  providing developers with a flexible framework.",
    Anime:"fade-up",
    duration:3000 ,
    Likeclick:handleLikeClick,
    DisLike:handleDisikeClick}
  ]
  return (
    <>
      <section className="text-gray-600 body-font dark:bg-gray-900 bg-white pt-6 duration-300 md-mt-32">
        <h1 className="text-2xl sm:text-4xl text-sky-400 text-center py-11 pr-6 font-extrabold underline underline-offset-2  decoration-slate-300  tracking-widest">My Projects</h1>
        <div className="container px-5 py-19 mx-auto pb-7 ">
          <div className="flex flex-wrap -m-4">
            {projectss.map((project, index) => (
              <div className="p-4 md:w-1/3 " key={index} data-aos={project.Anime} data-aos-duration={project.duration}>
                <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden border-2 border-sky-400 shadow">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src={project.imgs} alt="crud" />
                  <div className="p-6">
                    <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">{project.title}</h2>
                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">{project.heading}</h1>
                    <p className="leading-relaxed mb-3">{project.disc}</p>
                    <div className='flex justify-between'>
                      <Link to={project.link} target='_blank' className="inline-block px-8 md:px-12 py-3 text-sm font-medium text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring">
                        Live Site
                      </Link>
                      <div className="flex gap-2">

                        <button onClick={project.Likeclick} className={`${activeBtn === "like" ? "border-2 border-green-400 py-1.5 px-3 hover:text-green-600 hover:scale-105 hover:shadow text-center  rounded-md  h-8 text-sm flex items-center gap-1 lg:gap-2" : "text-green-500 py-1.5 px-3 hover:text-green-600 hover:scale-105 hover:shadow text-center border border-gray-300 rounded-md  h-8 text-sm flex items-center gap-1 lg:gap-2"} `}>
                          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path>
                          </svg>
                          <span >{likeCount}</span>
                        </button>

                        <button onClick={project.DisLike} className={`${activeBtn === "dislike" ? "border-2 border-red-500 py-1.5 px-3 hover:text-red-600 hover:scale-105 hover:shadow text-center  rounded-md  h-8 text-sm flex items-center gap-1 lg:gap-2" : "text-red-500 py-1.5 px-3 hover:text-red-600 hover:scale-105 hover:shadow text-center border border-gray-300 rounded-md  h-8 text-sm flex items-center gap-1 lg:gap-2"} `}>
                          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"></path>
                          </svg>
                          <span>{dislikeCount}</span>
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* {Array.isArray(projects) && projects.map((project) => (
  <div key={project.id}>
    <h2>{project.name}</h2>
    <p>{project.description}</p>
  </div>
))} */}
<section className="py-20">
  <h1 className="mb-12 text-center font-sans text-5xl font-bold text-gray-900">Business Accomodations<span className="text-blue-600">.</span></h1>
  <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
  {projects.map((project) => (
   <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
   <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
     <img class="object-cover" src={BASE_URL+project.image} alt="product image" />
     <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
   </a>
   <div class="mt-4 px-5 pb-5">
     <a href="#">
       <h5 class="text-xl tracking-tight text-slate-900">{project.name}</h5>
     </a>
     <div class="mt-2 mb-5 flex items-center justify-between">
       <p>
         <span class="text-3xl font-bold text-slate-900">$449</span>
         <span class="text-sm text-slate-900 line-through">$699</span>
       </p>
       <div class="flex items-center">
         <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
         </svg>
         <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
         </svg>
         <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
         </svg>
         <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
         </svg>
         <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
         </svg>
         <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
       </div>
     </div>
     <a href="#" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
       <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
         <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
       </svg>
     View More
     </a>
   </div>
 </div>
 

))}
    

  
  </div>
</section>


      </section>
    </>
  )
}

export default Project