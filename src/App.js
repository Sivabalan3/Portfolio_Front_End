
import React, { lazy, Suspense,useEffect } from 'react'
import "./index.css"
import HEADER from "./headerfile/header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom/dist';
import loadimg from './myimgs/s logo2.webp';
import AOS from "aos";
import "aos/dist/aos.css";


const Home = lazy(() => import("./components/Home"));
const Login = lazy(() => import("./components/Loginform"));
const Skils = lazy(() => import("./components/Skils"));
const Aboutme = lazy(() => import("./components/Aboutme"));
const Pagenotfound = lazy(() => import("./components/Pagenotfound"));
const Dashboard = lazy(() => import("./components/Dashboard"));
const Userform = lazy(() => import("./components/Userform"));
const Foterpage =lazy(()=>import("./headerfile/Foterpage"))
// const Home = lazy(() => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(import("./components/Home")), 2000);
//   });
// });
// const Login = lazy(() => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(import("./components/Loginform")), 5000);
//   });
// });

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
      <>
    <Router>
        <HEADER />

        <Suspense fallback={<div className="flex justify-center items-center w-full h-screen dark:bg-slate-900"> 
          <img src={loadimg} alt='loder' className=' transform translate-x-60 w-60 h-60 brightness-110' data-aos="fade-left"></img>
        </div> } fallbackMinDurationMs={3000}>
  
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/loginpage" element={<Login />} />
            <Route path='/about' element={<Aboutme/>}/>
            <Route path='/skils' element={<Skils/>}/>
            <Route path="/Admindashboard" element={<Dashboard/>}/>
            <Route path='/userform'  element={<Userform/>}/>
            <Route path="*" element={<Pagenotfound/>}/>
          </Routes>
          <Foterpage/>
        </Suspense>
    </Router>
      </>
  )
}

export default App;

