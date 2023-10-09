import { CheckIcon, UserIcon,EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { useState } from "react";
import loginimage from '../myimgs/back-loginwebp.webp';
import Helmet from "react-helmet"
// import { emailvalidate,passwordvalidate } from "./emailvalidate";
import { useNavigate } from "react-router-dom";
// import {GiTigerHead} from 'react-icons/gi'
function Loginform() {
    //Login pasword and validation 
    const history =useNavigate();
    //HIDE AND SHOW [PASSWORD]
    const [Hide, setHide] = useState(false);
    const handleShow = () => {
        setHide(!Hide);
    }
    useEffect(()=>{
        if(localStorage.getItem('auth')) history("/Admindashboard")
    },[]); 
//Form validation
const [inputs,setinputs]=useState({email:'', password:''});
const [errormsg,seterrormsg]=useState('');
const [succesmsg,setsuccesmsg] =useState('');
const handlechange =(e)=>{
    setinputs({...inputs,[e.target.name]:e.target.value})
}

const formSubmited =(e)=>{
    e.preventDefault();
    setsuccesmsg('');
    // seterrormsg('')
    // if(!emailvalidate(inputs.email))return seterrormsg('please enter valid email id');
    // if(!passwordvalidate(inputs.password)){
    //     return seterrormsg('password should have minimum 8 character with the combination of uppercase ,lowercase,number and specialcharaters');
    // }
    if(inputs.email !=='siva@gmail.com' || inputs.password !=='Siva@2005')return seterrormsg('invalid Email or password');
    localStorage.setItem('auth',true);
        history("/Admindashboard");
    // setsuccesmsg('Succesfully validate');
    setinputs("")
};
 

    return (
        <>
        <Helmet>
            <title>Admin</title>
        </Helmet>
            <section className="bg-gray-50 dark:bg-gray-900 w-full h-screen">
                <img src={loginimage} type="webp" alt="backlogin" className=" w-full h-full absolute object-cover" />
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 relative top-5 md:top-0 md:bottom-14 ">
                        <div className="p-4 space-y-4 md:space-y-6 sm:p-8">
                       
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                Admin Login Page
                            </h1>
                            <span className=" text-amber-400">Email : siva@gmail.com</span><br/>
                            <span className=" text-amber-400">password : Siva@2005</span>
                            {/* <GiTigerHead className="w-16 h-16 text-amber-400 animate-ping duration-1000 shadow-2xl z-10"/> */}
                            <form className="space-y-4 md:space-y-6"  onSubmit={formSubmited}>
                                <div>
                                    {errormsg.length > 0 && <div className="text-red-500 py-1">{errormsg}</div>}
                                    {succesmsg.length > 0 && <div className="text-green-500 py-1">{succesmsg}</div>}
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <div className="inline-block justify-end relative top-8 float-right right-3">
                                        <UserIcon className="w-5 h-5 text-green-500  "/>
                               
                                    </div>
                                    
                                {/* <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com"  onChange={handlechange}/> */}
                                <input type="text" name="email"  className="px-4 py-2 block bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 border-2 w-full border-gray-300  focus:outline-none dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white" placeholder="Username" onChange={handlechange}  autoComplete="off"/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <div className="inline-block justify-end relative top-8 float-right right-3">

                                        {
                                            Hide ? <EyeIcon className="w-5 h-5 text-green-500 hover:pulse-ping" onClick={handleShow} /> : <EyeSlashIcon className="w-5 h-5 text-red-500" onClick={handleShow} />
                                        }
                                    </div>
                                    {/* <input type={Hide ? "text" : 'password'} name="password" id="password" placeholder="Password" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  onChange={handlechange}/> */}
                                    <input type={Hide ? "text" : 'password'} name="password" className="px-4 py-2 block bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-400 focus:border-sky-400 border-2 w-full border-gray-300  focus:outline-none dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white" placeholder="Username" onChange={handlechange}/>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input name="password" id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="/h" className="text-sm font-medium text-primary-600 hover:underline dark:text-white">Forgot password?</a>
                                </div>

                                <button className="w-full relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-sky-500 rounded-full shadow-md group">
                                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-sky-500 group-hover:translate-x-0 ease">
                                        <CheckIcon className="w-8 h-8" />
                                    </span>
                                    <span className="absolute flex items-center justify-center w-full h-full text-sky-500 transition-all duration-300 transform group-hover:translate-x-full ease">Login</span>
                                    <span className="relative invisible">Login</span>
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="/h" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                </p>

                            </form>
                        </div>
                    </div>
                </div>
                
            </section>
        
        </>
    );

}
export default Loginform;