import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PiCodeSimpleFill, } from "react-icons/pi";
import { BiLogIn } from 'react-icons/bi';
import { FaCircleChevronRight } from 'react-icons/fa6';
import { FaSearch, FaEdit } from 'react-icons/fa';
import { SiFiles } from 'react-icons/si';
import { RiDashboardFill, RiInboxUnarchiveLine, RiAccountCircleLine } from "react-icons/ri";
import { TbTruckDelivery, TbSettings } from 'react-icons/tb';
import { MdDelete } from 'react-icons/md';
import Axios from "axios";


const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [Search,setSearch]=useState("")
  const Menus = [
    { title: "Dashboard", icon: <RiDashboardFill className="w-8 h-8" /> },
    { title: "Inbox", icon: <RiInboxUnarchiveLine className="w-8 h-8" /> },
    { title: "Accounts", icon: <RiAccountCircleLine className="w-8 h-8" />, gap: true },
    { title: "Order ", icon: <TbTruckDelivery className="w-8 h-8" /> },
    { title: "Search", icon: <FaSearch className="w-8 h-8" /> },
    { title: "Analytics", icon: <PiCodeSimpleFill className="w-8 h-8" /> },
    { title: "Files ", icon: <SiFiles className="w-8 h-8" />, gap: true },
    { title: "LogOut", icon: <TbSettings className="w-8 h-8" /> },
  ];
  const history = useNavigate();
  const [logout, setlogout] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('auth')) history("/loginpage")
  }, [logout]);

  const logouthandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setlogout(true)
  };

  //mongodb dada fetching
  const [users, setusers] = useState([])
  useEffect(() => {
    Axios.get("http://localhost:8001/form/")
      .then(users => setusers(users.data))
      .catch(err => console.log(err))
  }, [])


  return (
    <>
      <div className="flex dark:bg-slate-800 bg-gray-700">
        <div
          className={` ${open ? "w-72" : "w-20 "
            }  bg-slate-900 shadow-2xl drop-shadow-2xl h-screen p-5  pt-8 relative  duration-300 border-r border-slate-100 text-white font-semibold`}
        >
          <h1
            className={`absolute cursor-pointer -right-3 top-9 w-9 h-9 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          ><FaCircleChevronRight className="w-8 h-8 hover:text-sky-400" /></h1>
          <div className="flex gap-x-4 items-center">
            <h1
              className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                }`}
            ><BiLogIn className="w-8 h-8" /></h1>
            <h1
              className={`text-white origin-left font-medium text-xl duration-100 cursor-pointer hover:text-sky-400 ${!open && "scale-0"
                }`} onClick={logouthandler}
            >
              LogOut User
            </h1>

          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                  } `}
              >
                {/* <img src={`./src/assets/${Menu.src}.png`} /> */}
                <h1 className="dark:text-sky-400 text-sky-500">{Menu.icon}</h1>
                <span className={`${!open && "hidden"} origin-left duration-200 text-lg`}>
                  {Menu.title}
                </span>
              </li>
            ))}

          </ul>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full mt-6 px-3 ">
          <div className="flex mb-3">

          <label className="text-2xl text-bold dark:text-white ps-6 pe-2">Search Here :</label>
            <input   className= "w-64  px-4 py-2 block bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-400 focus:border-sky-400 border-2  border-gray-300  focus:outline-none dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                   placeholder="Search" onChange={(ev)=>setSearch(ev.target.value)}    
                   />
              </div>
            {/* <input placeholder="Search" onChange={(ev)=>setSearch(ev.target.value)}/> */}
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 px-3">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-sky-500 ">
                  NAME
                </th>
                <th scope="col" className="px-6 py-3 text-sky-500">
                  EMAIL
                </th>
                <th scope="col" className="px-6 py-3 text-sky-500">
                  PHONE
                </th>
                <th scope="col" className="px-6 py-3 text-sky-500">
                  ADDRESS
                </th>
                <th scope="col" className="px-6 py-3 text-sky-500">
                  DATE
                </th>
                <th scope="col" className="px-6 py-3 text-sky-500">
                  TIME
                </th>
                <th scope="col" className="px-6 py-3 text-sky-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  KOBI KRISNAN
                </th>
                <td className="px-6 py-4 text-green-500">
                  KOBI343453@GMAIL.COM
                </td>
                <td className="px-6 py-4">
                  +91 34345 35345
                </td>
                <td className="px-6 py-4">
                  NEW ZLAND
                </td>
                <td className="px-6 py-4">
                  41/45/199
                </td>

                <td className="px-6 py-4">
                  12.55 AM
                </td>
                <td className="pl-2 flex gap-3 mt-1.5">
                  <div className="w-auto h-auto">
                    <button className="flex-1 h-full">
                      <div className="flex items-center justify-center flex-1 h-full p-2 bg-green-500 text-white shadow rounded-lg">
                        <div>
                          <FaEdit className=" w-5 h-5" />
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="w-auto h-auto">
                    <div className="flex-1 h-full">
                      <div className="flex items-center justify-center flex-1 h-full p-2 bg-red-500 text-white shadow rounded-lg">
                        <div className="relative">
                          <MdDelete className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>

              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  KANNAN
                </th>
                <td className="px-6 py-4  text-green-500">
                  KANNAN343453@GMAIL.COM
                </td>
                <td className="px-6 py-4">
                  +91 34345 35345
                </td>
                <td className="px-6 py-4">
                  NEW ZLAND
                </td>
                <td className="px-6 py-4">
                  41/45/199
                </td>
                <td className="px-6 py-4">
                  12.55 AM
                </td>
                <td className="pl-2 flex gap-3 mt-1.5">
                  <div className="w-auto h-auto">
                    <button className="flex-1 h-full">
                      <div className="flex items-center justify-center flex-1 h-full p-2 bg-green-500 text-white shadow rounded-lg">
                        <div>
                          <FaEdit className=" w-5 h-5" />
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="w-auto h-auto">
                    <div className="flex-1 h-full">
                      <div className="flex items-center justify-center flex-1 h-full p-2 bg-red-500 text-white shadow rounded-lg">
                        <div className="relative">
                          <MdDelete className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              {users.filter((user)=>{
                return Search.toLowerCase()===''?user:user.username.toLowerCase().includes(Search);
              }).map((user, index) => {
                return (
                  <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {user.username}
                    </th>
                    <td className="px-6 py-4 text-green-500">
                      {user.useremail}
                    </td>
                    <td className="px-6 py-4">
                      {user.userphone}
                    </td>
                    <td className="px-6 py-4">
                      {user.useraddres}
                    </td>
                    <td className="px-6 py-4">
                      {user.userdate}
                    </td>
                    <td className="px-6 py-4">
                      {user.usertime}

                    </td>
                    <td className="pl-2 flex gap-3 mt-1.5">
                  <div className="w-auto h-auto">
                    <button className="flex-1 h-full">
                      <div className="flex items-center justify-center flex-1 h-full p-2 bg-green-500 text-white shadow rounded-lg">
                        <div>
                          <FaEdit className=" w-5 h-5" />
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="w-auto h-auto cursor-pointer">
                    <div className="flex-1 h-full">
                      <div className="flex items-center justify-center flex-1 h-full p-2 bg-red-500 text-white shadow rounded-lg">
                        <div className="relative">
                          <MdDelete className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                  </tr>)
              })}
            </tbody>
          </table>
        </div>

      </div>
    </>
  );
};
export default Dashboard;
