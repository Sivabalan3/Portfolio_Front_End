import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import img from "../myimgs/jeeva logo.webp";
import {BiLogIn} from 'react-icons/bi';
import {AiFillSetting,AiOutlineSearch} from 'react-icons/ai';
import {BsBookmarkHeartFill,BsFillChatLeftTextFill} from 'react-icons/bs';
import {TbTruckDelivery,TbHome2} from 'react-icons/tb';
import {
	Bars3Icon, XMarkIcon
  } from '@heroicons/react/24/outline';
import logoutsimages from "../myimgs/logout.webp";
import Helmet from "react-helmet";
function Admindashboard() {
const history=useNavigate();
const [logout,setlogout]= useState(false);
    useEffect(()=>{
       if(!localStorage.getItem('auth'))history("/loginpage")
    },[logout]);
    const logouthandler = (e) =>{
        e.preventDefault();
        localStorage.removeItem("auth");
        setlogout(true)
    };
	const [icon, seticon] = useState(false)
	const handleclick = () => {
	  seticon(!icon)
	}
    return (
        <>
		<main>
		<Helmet>
			<title>Admin</title>
		</Helmet>
		<section className=" z-30 w-full h-screen dark:bg-slate-900 overflow-hidden">
		      <button data-collapse-toggle="mobile-menu-2" type="button" className="float-right p-2 right-6 bg-slate-700 rounded-full" aria-controls="mobile-menu-2" aria-expanded="false" onClick={handleclick}>
                {
                  icon ?<XMarkIcon className="text-slate-300 w-7 h-7" />:
                 <Bars3Icon className="text-slate-200 w-8 h-8" /> }
              </button>
			<div className="text-violet-600  font-extrabold flex flex-col items-center justify-center h-full ">
				<p className="text-2xl">There is nothing in this area</p>
				<h1 className="text-center text-3xl lg:text-4xl">Please LogOut From Here</h1>
	
			<img className="my-2 py-3 lg:w-3/4 lg:h-3/4 rounded-xl " src={logoutsimages } alt="logout"></img>
			</div>
		</section>
		
       <div className={icon ?"transition duration-300 ease-in-out origin-top-left absolute top-[60px] z-20 flex flex-col h-screen p-3 w-60 dark:bg-gray-900 border-r-4 border-white dark:text-gray-100 bg-slate-700 text-white":"hidden"}>
	<div className="space-y-3">
		<div className="flex items-center justify-between">
			<h2>Dashboard</h2>
			
		</div>
		<div className="absolute">
			<span className="absolute inset-y-0 left-0 flex items-center py-4">
				<button type="submit" className="p-2 focus:outline-none focus:ring">
				<TbHome2 className="w-6 h-6"/>
				</button>
			</span>
			<input type="search" name="Search" placeholder="Search..." className="border dark:border-sky-400 w-full py-2 pl-10 text-sm dark:border-transparent rounded-md focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900" />
		</div>
		<div className="flex-1">
			<ul className="pt-2 pb-4 space-y-1 text-sm">
				<li className="rounded-sm cursor-pointer">
					<div rel="noopener noreferrer" className="flex items-center p-2 space-x-3 rounded-md">
						<TbHome2 className="w-6 h-6"/>
						<span>Home</span>
					</div>
				</li>
				<li className="rounded-sm cursor-pointer">
					<div rel="noopener noreferrer" className="flex items-center p-2 space-x-3 rounded-md">
					<AiOutlineSearch className="w-6 h-6"/>
						<span>Search</span>
					</div>
				</li>
				<li className="rounded-sm cursor-pointer">
					<div rel="noopener noreferrer" className="flex items-center p-2 space-x-3 rounded-md">
						<BsFillChatLeftTextFill className="w-6 h-6"/>
						<span>Chat</span>
					</div>
				</li>
				<li className="rounded-sm cursor-pointer">
					<div rel="noopener noreferrer" className="flex items-center p-2 space-x-3 rounded-md">
						<TbTruckDelivery className="w-6 h-6"/>
						<span>Orders</span>
					</div>
				</li>
				<li className="rounded-sm dark:bg-gray-800 dark:text-gray-50 cursor-pointer">
					<div rel="noopener noreferrer" className="flex items-center p-2 space-x-3 rounded-md">
						<BsBookmarkHeartFill className="w-6 h-6"/>
						<span>Wishlist</span>
					</div>
				</li>
				<li className="rounded-sm cursor-pointer">
					<div rel="noopener noreferrer" className="flex items-center p-2 space-x-3 rounded-md">
					<AiFillSetting className="w-6 h-6"/>
						<span>Settings</span>
					</div>
				</li>
				<li className="rounded-sm cursor-pointer" onClick={logouthandler}>
					<div rel="noopener noreferrer" className="flex items-center p-2 space-x-3 rounded-md cursor-pointer">
						{/* <BiLogIn className="w-6 h-6"/>
						<span>Logout</span> */}
						<button className="relative inline-flex items-center justify-center p-4 px-8 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-sky-400 rounded-full shadow-md group">
<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-slate-900 group-hover:translate-x-0 ease">
<BiLogIn className="w-6 h-6"/>
</span>
<span className="absolute flex items-center justify-center w-full h-full text-slate-300 transition-all duration-300 transform group-hover:translate-x-full ease"><BiLogIn className="w-6 h-6 px-px text-white"/> Log Out</span>
<span className="relative invisible">Log Out</span>
</button>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
		<img src={img} alt="" className="w-12 h-12 rounded-lg dark:bg-gray-500" />
		<div>
			<h2 className="text-lg font-semibold">Sivabalan M</h2>
			<span className="flex items-center space-x-1">
				<div rel="noopener noreferrer"  className="text-xs hover:underline dark:text-gray-400">View profile</div>
			</span>
		</div>
	</div>
</div>
</main>
        </>
    );
}
export default Admindashboard;