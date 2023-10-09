import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import pnot from '../myimgs/boy2.webp'
import AOS from "aos";
import "aos/dist/aos.css";
function PageNotfound (){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])
    return(
<section className="flex items-center h-screen p-16 bg-gray-50 dark:bg-slate-900 ">
    <div className="container flex flex-col items-center ">
        <div className="flex flex-col  max-w-md text-center gap-y-1">
            {/* <h2 className="font-extrabold text-9xl dark:text-slate-300 text-gray-400 ">
               
                <span className="sr-only">Error</span>404
            </h2> */}
            <img src={pnot} alt="log" className="w-4/5 h-4/5" data-aos="fade-left"></img>
            <p className="text-2xl md:text-3xl dark:text-slate-400 text-gray-400 mt-0">Sorry, we couldn't find this page.</p>
            <Link to="/" className="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200">Back to homepage</Link>
        </div>
    </div>
</section>
    );
}
export default PageNotfound;