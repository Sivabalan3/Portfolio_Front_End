import React,{lazy} from 'react'
import  crud from'../myimgs/crud.png';
import quiz from '../myimgs/React-Quiz-App.jpg';
import wheathor from '../myimgs/wheathor.png';
function Project() {
  return (
    <>
    <section className="text-gray-600 body-font dark:bg-gray-900 bg-gray-700">
    <h1 className="text-2xl sm:text-4xl text-sky-400 text-center py-11 pr-6 font-extrabold underline underline-offset-2  decoration-slate-300">My Project</h1>
        <div className="container px-5 py-19 mx-auto pb-7">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src={crud} alt="crud"/>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Project - 1</h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">CRUD APP</h1>
                  <p className="leading-relaxed mb-3">A React CRUD app refers to a web application built using the React JavaScript library that allows users to Create, Read, Update, and Delete data. It provides a user-friendly interface for managing data operations. The term "short and neat" implies that the app is concise, well-structured, and visually appealing. It likely follows best practices in code organization and design, providing a seamless user experience while efficiently managing data operations.</p>
                  <div className="flex items-center flex-wrap ">
                    <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg"><a href='https://sivabalan3.github.io/react-crud/'>Live Site</a></button>              
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
                <div className="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src={wheathor} alt="wheathor"/>
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Project - 2</h2>
                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">WHEATHER APP</h1>
                    <p className="leading-relaxed mb-3">The React Weather app is a short and neat application built using the React framework.The app retrieves weather data from an API and displays it on the user interface. It allows users to search for the weather of a specific location by entering the city name or ZIP code. The app dynamically updates the weather information in real-time, providing accurate and up-to-date forecasts. Overall, the React Weather app is a concise and efficient tool for accessing weather information.</p>
                    <div className="flex items-center flex-wrap ">
                      <button className="bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">Live site</button>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src={quiz} alt="quiz"/>
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Project - 3</h2>
                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">Quiz App</h1>
                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <div className="flex items-center flex-wrap ">
                      <button className="bg-gradient-to-r from-fuchsia-300 to-pink-400 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg">Live site</button>
                     
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Project