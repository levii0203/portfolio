"use client"
import { TypeAnimation } from 'react-type-animation';

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { IoLogoGoogle } from "react-icons/io";
import Whatiknow from "./components/WhatIKnow";
import More from './components/More';
import Webthree from './components/Web3';
import Contact from './components/Contact';
import Testimonial from './components/testimonials';


export default function Home() {
    
  return(
    <main className="flex flex-col xl:w-screen h-screen bg-black min-h-screen overflow-x-hidden">
      <div>
        <Hero />
      </div>
      <div className="flex md:w-full md:flex-col flex-col bg-black w-full xl:w-full h-fit sm:w-full">
      <div classname="h-20 w-full flex flex-col space-y-5 justify center md:w-fit md:pt-10 lg:w-full  sm:w-full items-center">
        <div className='flex flex-row md:space-x-5 sm:space-x-2 lg:px-40 md:px-24 px-8 md:py-0 py-4 items-center'>
          <p className='text-3xl  font-semibold font-mono md:pt-14 sm:pt-0 text-transparent md:px-0 bg-gradient-to-tr from-blue-500 to-cyan-500 bg-clip-text'>{"<"}</p>
            <TypeAnimation
                   sequence={[
                        'Projects'
                        ,
                        2000,
                        'Check my Github',
                        1000,
                          ]}
                         wrapper="span"
                         speed={100}
                          style={{ display: 'inline-block' }}
                           repeat={Infinity}
                          className="md:text-xl sm:text-sm sm:pt-0 px-0  md:pt-14 text-white"
             />
             <p className='text-3xl  md:pt-14 sm:pt-0 font-mono text-transparent bg-gradient-to-tr from-blue-500 to-cyan-500 bg-clip-text'>{"/>"}</p>
             </div>
        </div>
        <div>
        <Projects />
        </div>
    
    <div className='flex lg:flex-row lg:pt-24 lg:px-20 md:pt-10 md:flex-col flex-col   h-full w-full flex-direction:column; bg-black lg:space-x-0'>
      <div className='flex flex-col h-full w-full  '>
      <div className=' lg:w-[800px] lg:h-[80px] md:h-full md:w-fit md:pt-12 lg:pt-16 lg:px-12 pt-12 md:px-24 px-8 w-[800px] bg-black '>
        <div className='  lg:flex md:flex flex flex-row space-x-7 border-b-2  border-gray-600 w-fit items-center px-5 md:w-full lg:w-fit md:h-[80px] lg:h-[64px] h-[40px]
        '> <p className='lg:text-4xl md:text-3xl text-3xl text-gray-400'>
              <IoLogoGoogle />
          </p><div className='flex flex-row items-center h-full space-x-3'>
          <p className="lg:text-xl md:text-lg text-white">What</p>
         
            <TypeAnimation
                   sequence={[
                        'I know'
                        , 
                        1000,
                        'is my strength?',
                        500,
                          ]}
                         wrapper="span"
                         speed={50}
                          style={{ display: 'inline-block' }}
                           repeat={Infinity}
                          className="md:text-2xl text-lg px-0  font-mono text-transparent bg-clip-text  bg-gradient-to-tr from-blue-500 to-cyan-500"
             />
    
          </div>
          </div></div>  
          <Whatiknow /></div>
          <More/>
        </div>
        <div className='md:flex flex-row md:pt-24 pt-4 lg:space-x-80 items-center'>
        <div className= "w-fit h-full md:px-36 px-8   relative lg:flex md:flex flex-col md:space-y-2 space-y-[1px]">
            <p className='bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text font-semibold md:text-3xl text-2xl'> <span className="text-white md:text-3xl text-xl">Web </span>3</p>
            <p className="text-gray-700 font-bold pt-1"> My skillset as a Web3 developer.</p>
        </div>
           <p className='hidden sm:flex text-3xl pl-20 text-zinc-500'>Since 
           <span className='text-transparent bg-gradient-to-t from-blue-500 to-cyan-400 bg-clip-text'> 1 </span>
           year</p>
        </div>
        <div className='lg:pt-8'>
            <Webthree />
        </div>
        
        <div className="lg:py-8">
            <Contact/>
        </div>
      </div>
    </main>
  );
};
