import React, {useState } from 'react'
import { Link } from "react-router-dom"
import crud from '../myimgs/crud.png';
import quiz from '../myimgs/React-Quiz-App.jpg';
import wheathor from '../myimgs/whather.jpg';
import './error.css';


function Project() {
 

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
  const projects = [
    { title: "Project - 1", 
    heading: "CRUD APP", 
    imgs: crud, 
    link: 'https://sivabalan3.github.io/react-crud/', 
    disc: "A React CRUD app refers to a web application built using the React JavaScript library that allows users to Create, Read, Update, and Delete data. It provides a user-friendly interface for managing data operations. The term short and neat implies that the app is concise, well-structured, and visually appealing. It likely follows best practices in code organization and design, providing a seamless user experience while efficiently managing data operations. ",
    Anime:"flip-left",
    duration:1000 ,
    Likeclick:handleLikeClick,
    DisLike:handleDisikeClick},

    { title: "Project - 2", 
    heading: "WHEATHER APP", 
    imgs: wheathor, 
    link:"/pnf",
    disc: "The React Weather app is a short and neat application built using the React framework.The app retrieves weather data from an API and displays it on the user interface. It allows users to search for the weather of a specific location by entering the city name or ZIP code. The app dynamically updates the weather information in real-time, providing accurate and up-to-date forecasts. Overall, the React Weather app is a concise and efficient tool for accessing weather information.",
    Anime:"flip-left",
    duration:2000 ,
    Likeclick:handleLikeClick,
    DisLike:handleDisikeClick},

    { title: "Project - 3", 
    heading: "QUIZ APP", 
    imgs: quiz, 
    link:"/pnf",
    disc: "A quiz app built using React JS is a web-based application that allows users to take various quizzes on different topics. The app provides a user-friendly interface with interactive features such as multiple choice questions, timed quizzes, and instant feedback. React JS is a popular JavaScript library used for building user interfaces, making it an ideal choice for creating dynamic and responsive quiz apps.Overall, a React JS quiz app offers an  providing developers with a flexible framework.",
    Anime:"flip-left",
    duration:3000 ,
    Likeclick:handleLikeClick,
    DisLike:handleDisikeClick}
  ]
  return (
    <>
      <section className="text-gray-600 body-font dark:bg-gray-900 bg-gray-700 pt-6">
        <h1 className="text-2xl sm:text-4xl text-sky-400 text-center py-11 pr-6 font-extrabold underline underline-offset-2  decoration-slate-300">My Projects</h1>
        <div className="container px-5 py-19 mx-auto pb-7 ">
          <div className="flex flex-wrap -m-4">
            {projects.map((project, index) => (
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
                          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path>
                          </svg>
                          <span >{likeCount}</span>
                        </button>

                        <button onClick={project.DisLike} className={`${activeBtn === "dislike" ? "border-2 border-red-500 py-1.5 px-3 hover:text-red-600 hover:scale-105 hover:shadow text-center  rounded-md  h-8 text-sm flex items-center gap-1 lg:gap-2" : "text-red-500 py-1.5 px-3 hover:text-red-600 hover:scale-105 hover:shadow text-center border border-gray-300 rounded-md  h-8 text-sm flex items-center gap-1 lg:gap-2"} `}>
                          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"></path>
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

      </section>
    </>
  )
}

export default Project