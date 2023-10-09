import  React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import mongodb from '../myimgs/icons/mongodb.png';
import expressjs from '../myimgs/icons/expressjs.webp';
import reactjs from '../myimgs/icons/reactjs.png';
import node from "../myimgs/icons/nodejs.png";
import tailwind from '../myimgs/icons/tailwindcss.png';
import AOS from "aos";
import Helmet from 'react-helmet'
function Skils(){
  const history =useNavigate();
  useEffect(()=>{
      if(localStorage.getItem('auth')) history("/Admindashboard");
  },[]);
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])
    return(
    <>
    <Helmet>
    <title>Details</title>
  </Helmet>
<section>
  
    <div className="bg-slate-900 text-white py-8 overflow-y-hidden">
    <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
      <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
        <p className=" text-sky-400 uppercase tracking-loose text-2xl py-1 font-bold">This Website Working Language</p>
        {/* <p className="text-xl md:text-xl leading-normal md:leading-relaxed mb-2 ps-1">Working Process</p> */}
        <p className="text-md md:text-base text-gray-50 mb-4 ">
         My Website is a full stack Website,but because I don't have global server.I can't store data but localhost server only can store data in small distance.Therefore, So sorry guys &#128591;
        </p>
        <a href="*"
        className="bg-transparent mr-auto hover:bg-sky-400 text-sky-400 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-sky-400 hover:border-transparent">
        Explore Now</a>
      </div>
      <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 border-yellow-555 absolute h-full border"
              style={{right: "50%", border: "2px solid #60a5fa"}}></div>
            <div className="border-2-2 border-yellow-555 absolute h-full border"
              style={{left:" 50%", border:" 2px solid #60a5fa"}}></div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right" data-aos="fade-up-right">
                {/* <p className="mb-3 text-base text-yellow-300">1-6 May, 2021</p> */}
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Mongodb </h4>
                <img className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100" src={mongodb} alt='mongodb'></img>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1  w-5/12 px-1 py-4 text-left"data-aos="fade-up-left">
                {/* <p className="mb-3 text-base text-yellow-300">6-9 May, 2021</p> */}
                <h4 className="mb-3 font-bold text-lg md:text-2xl">express js</h4>
                <img className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 " src={expressjs} alt='expressjs'></img>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right" data-aos="fade-up-right">
                {/* <p className="mb-3 text-base text-yellow-300"> 10 May, 2021</p> */}
                <h4 className="mb-3 font-bold text-lg md:text-2xl">React js</h4>
                <img className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 " src={reactjs} alt='reactjs'></img>
              </div>
            </div>

            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>

              <div className="order-1  w-5/12 px-1 py-4"data-aos="fade-up-left">
                {/* <p className="mb-3 text-base text-yellow-300">12 May, 2021</p> */}
                <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Node js</h4>
                <img className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 " src={node} alt='nodejs'/>
          
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right" data-aos="fade-up-right">
                {/* <p className="mb-3 text-base text-yellow-300"> 10 May, 2021</p> */}
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Tailwind Css</h4>
                <img className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 items-center" src={tailwind} alt='tailwindcss'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  <section>
 
  {/* <div className="flex items-center justify-center flex-col bg-[#E5E5E5] min-h-screen dark:bg-gray-900">
        <!-- main card -->
        <div className="bg-[#F4F5FA] p-10 rounded-xl">
           <h1 className="text-2xl sm:text-4xl text-sky-400 text-center py-11 pr-6 font-extrabold underline underline-offset-2  decoration-slate-300">My Project</h1>
            <!-- headers content-->
            <div className="flex flex-col justify-center items-center text-center">
                <div className="max-w-sm font-bold font-sans">
                    Get the most out of your mobile with the right subscription
                </div>
                <div className="font-light max-w-lg mt-5 text-sm">
                    All devices come with free delivery or pickup as standard. See information on available shopping
                    options for your location.
                </div>
            </div>

            <!-- subscriptions -->
            <div
                className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
                <div className="bg-[#FFFBEC] rounded-xl">
                    <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ice_logo.svg/138px-Ice_logo.svg.png?20191213230535" className="w-8"/>
                        <div className="mt-3 font-semibold text-lg">Ice Mobile 10GB</div>
                        <div className="text-sm font-light">Up to 100Mbit/s</div>
                        <div className="my-4">
                            <span className="font-bold text-base">299,-</span>
                            <span className="font-light text-sm">/month</span>
                        </div>

                        <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                            Add subscription
                        </button>
                    </div>
                </div>

                <div className="bg-[#F9ECFF] rounded-xl">
                    <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                        <img src="https://www.dstny.se/app/uploads/telia_pp_rgb.png.webp" className="w-12"/>
                        <div className="mt-3 font-semibold text-lg">Telia Mobil 15GB</div>
                        <div className="text-sm font-light w-60 md:w-auto">Unlimited calls</div>
                        <div className="my-4">
                            <span className="font-bold text-base">953,-</span>
                            <span className="font-light text-sm">/month</span>
                        </div>

                        <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                            Add subscription
                        </button>
                    </div>
                </div>


                <div className="bg-[#ECEEFF] rounded-xl">
                    <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Telenor_Logo.svg/1600px-Telenor_Logo.svg.png" className="w-12"/>
                        <div className="mt-3 font-semibold text-lg">Telenor Next Fast</div>
                        <div className="text-sm font-light w-60 md:w-auto">Up to 100Mbit/s</div>
                        <div className="my-4">
                            <span className="font-bold text-base">1028,-</span>
                            <span className="font-light text-sm">/month</span>
                        </div>

                        <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                            Add subscription
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div> */}
  </section>
</>
    );
}
export default Skils;