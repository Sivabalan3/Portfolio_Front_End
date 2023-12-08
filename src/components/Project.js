import React, { lazy } from 'react'
import { Link } from "react-router-dom"
import crud from '../myimgs/crud.png';
import quiz from '../myimgs/React-Quiz-App.jpg';
import wheathor from '../myimgs/wheathor.png';
function Project() {
  const projects = [{ title: "Project - 1", heading: "CRUD APP", imgs: crud, link: 'https://sivabalan3.github.io/react-crud/', disc: "A React CRUD app refers to a web application built using the React JavaScript library that allows users to Create, Read, Update, and Delete data. It provides a user-friendly interface for managing data operations. The term short and neat implies that the app is concise, well-structured, and visually appealing. It likely follows best practices in code organization and design, providing a seamless user experience while efficiently managing data operations." },
  { title: "Project - 2", heading: "WHEATHER APP", imgs: wheathor, disc: "The React Weather app is a short and neat application built using the React framework.The app retrieves weather data from an API and displays it on the user interface. It allows users to search for the weather of a specific location by entering the city name or ZIP code. The app dynamically updates the weather information in real-time, providing accurate and up-to-date forecasts. Overall, the React Weather app is a concise and efficient tool for accessing weather information." },
  { title: "Project - 3", heading: "QUIZ APP", imgs: quiz, disc: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat." }
  ]
  return (
    <>
      <section className="text-gray-600 body-font dark:bg-gray-900 bg-gray-700">
        <h1 className="text-2xl sm:text-4xl text-sky-400 text-center py-11 pr-6 font-extrabold underline underline-offset-2  decoration-slate-300">My Projects</h1>
        <div className="container px-5 py-19 mx-auto pb-7 " >
          <div className="flex flex-wrap -m-4">
            {projects.map((project, index) => (
              <div className="p-4 md:w-1/3" key={index}>
                <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src={project.imgs} alt="crud" />
                  <div className="p-6">
                    <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">{project.title}</h2>
                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">{project.heading}</h1>
                    <p className="leading-relaxed mb-3">{project.disc}</p>

                    <Link to={project.link} target="_blank" className="px-12 py-2.5 relative rounded group  text-white font-medium inline-block">
                      <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-sky-400 to-blue-500"></span>
                      <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                      <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-sky-400 to-blue-500"></span>
                      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-sky-600 from-blue-500"></span>
                      <span className="relative flex gap-2 justify-center">Live Site</span>
                    </Link>
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