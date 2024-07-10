"use client"
import { React , useState , useEffect} from 'react';
import { TypeAnimation } from 'react-type-animation';
import { MdLocationOn } from "react-icons/md";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import {Button} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Snippet} from "@nextui-org/react";
import { SlArrowLeftCircle } from "react-icons/sl";
import { SlArrowRightCircle } from "react-icons/sl";
import axios from 'axios';

const Contact = ()=>{
    const [visitorname,setVisitorname] = useState('');
    const [visitorprof,setVisitorprof] = useState('');
    const [message,setMessage] = useState('');
    const [curr,setCurr] =  useState(true);
    
    const routemailer = async()=>{
        await axios.post("http://localhost:5000/",{
            message: message,
            visitorname: visitorname,
            visitorprof: visitorprof
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
            
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }
    return (
        <div className="flex lg:flex-row md:flex-col flex-col md:space-y-12 lg:space-y-0 space-y-8 md:py-24 bg-state-900 lg:py-12 h-full w-full lg:px-36 md:px-0 px-12 ">
            <div className="flex flex-col lg:px-0 w-full h-full space-y-12">
            <TypeAnimation
                   sequence={[
                        "I'd like to hear from You"
                        ,
                        2000,
                        'Get in Touch',
                        1000,

                          ]}
                         wrapper="span"
                         speed={100}
                          style={{ display: 'inline-block' }}
                           repeat={Infinity}
                          className="md:text-4xl text-xl pt-10 lg:px-0 md:px-24  text-transparent bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text"
             />
                <div className="flex flex-col md:px-36 lg:px-12 lg:pt-8 space-y-3 h-full">
                    <label className=" text-white ">Name </label>
                    <Input variant='underlined' className="bg-black h-12 w-80 text-white text-sm px-3" id='name' placeholder="Enter your name" onChange={(e)=>{setVisitorname(e.target.value)}} required />
                </div>
                <div className="flex flex-col md:px-36 lg:px-12 space-y-3 h-full">
                    <label className=" text-white ">Profession  </label>
                    <Input variant='underlined' className="bg-black h-12 w-80 text-white text-sm px-3" id='profession' placeholder="Enter your profession" onChange={(e)=>{setVisitorprof(e.target.value)}} required />
                </div>
                <div className="flex flex-col lg:px-12 md:px-36 space-y-3 h-full drop-shadow-xl shadow-blue-500">
                    <label className=" text-white ">{"<"} Message {"/>"}  </label>
                    <textarea className="bg-zinc-800 h-48 outline-0 text-start text-gray-300 pt-4 px-4" placeholder="Enter your message here" cols={60} rows={40} required onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                </div>
                <div className=' flex h-full w-full md:px-36 lg:px-0 '>
                    <Button  variant="solid" className='py-8 px-6 text-white bg-gradient-to-br from-blue-700 to-cyan-700 shadow-2xl' onClick={routemailer}>
                    Send Mail
                    </Button>
                </div>
            </div>
            <div className="flex flex-col w-full h-full items-center space-y-12">
                <p className="text-gray-600 lg:pt-20 md:text-4xl text-2xl">arpitagrawal3048<span className='text-blue-900 text-5xl'>@</span>gmail.com</p>
                <div className='flex flex-col space-y-2'>
                    <div className='flex flex-row items-center space-x-2'>
                        < FaPhoneAlt className='text-blue-900' />
                        <p className="text-lg text-gray-600">
                        +91 96966343480<br></br>
                        </p></div>
                    <div className='flex flex-row items-center space-x-2'>
                        < FaPhoneAlt className='text-blue-900' />
                        <p className="text-lg text-gray-600">
                        +91 96966343480<br></br>
                        </p>
                    </div>
                    </div>
                <div className='relative flex flex-row  items-center space-x-10'>
                        <div className='cursor-pointer flex flex-row w-full h-full  bg-gray-900 rounded-3xl items-center space-x-3 px-4 py-4'>
                            <MdLocationOn className='text-white text-4xl shadow-2xl' />
                            <p className='text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-lg'> Get my location</p>
                        </div>
                        <div className='cursor-pointer flex flex-row w-full space-x-3 h-full bg-gray-900 rounded-3xl items-center px-3 py-4'>
                            <BsFillBookmarkCheckFill className='text-white text-2xl shadow-2xl' />
                            <label className='text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-lg'> Available </label>
                        </div>
                </div>
                <div className='pt-4'>
                <Button
                    disableRipple
                    className="relative overflow-visible rounded-full hover:-translate-y-1 py-6 px-20 shadow-xl bg-blue-500/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-blue-500/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
                    size="lg">
                        View resume
                </Button>
                </div>
                <div className='flex flex-row h-full w-full px-5 items-center justify-center pt-4'>
                         { curr ? (
                            <div className='flex flex-row items-center space-x-10'>
                             <Button className=' bg-inherit ' onClick={()=>{setCurr(false)}} isIconOnly> <SlArrowLeftCircle className='text-zinc-600 text-3xl cursor-pointer hover:text-blue-900'/></Button>
                             <div className='flex flex-col h-full w-full space-y-5'> 
                                <p className='text-white md:text-6xl text-4xl'>
                                    <span className='text-transparent font-normal bg-gradient-to-tr from-red-500 to-yellow-500 bg-clip-text'>
                                        Hire
                                    </span>
                                    &nbsp; me</p>
                                <p className='text-zinc-300 px-2 text-lg font-light'>View my resume and contact me if I'm fit for the role</p>
                            </div>
                                
                            </div>
                            
                         ) : (
                            <div className='flex flex-row items-center space-x-10 pl-8'>
                               <div className='flex flex-col h-full w-full space-y-5'> 
                                <p className='text-white md:text-6xl text-4xl'>
                                    <span className='text-transparent font-normal bg-gradient-to-tr from-purple-500 to-pink-500 bg-clip-text'>
                                        Collab
                                    </span>
                                    &nbsp; w &nbsp;me?</p>
                                    <p className='text-zinc-300 text-lg  font-light'>I'm to open to collab with you on your project</p>
                                </div>
                            <Button className=' bg-inherit  font-extralight' onClick={()=>{setCurr(true)}} isIconOnly> <SlArrowRightCircle className='text-zinc-600 text-3xl cursor-pointer hover:text-blue-900'/></Button>
                            </div>
                         )}
                </div>
            </div>
        </div>
    );
}
export default Contact;