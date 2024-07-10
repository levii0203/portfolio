"use client"
import { TypeAnimation } from 'react-type-animation';
import Image from "next/image";
import arpit from "../img/arpit.jpg"
const Hero = ()=>{
    return(
    <div className="relative flex flex-col xl:w-screen">
    
        <div className=" hidden md:flex relative w-full lg:h-44 md:h-52 md:flex-col md:px-0 lg:px-32 space-y-8 bg-black sm:px-0 sm:h-auto">
                   
            <div className=" relative animate-slide-up md:h-full w-272 md:w-full lg:w-272 flex md:flex-row border-2 border-transparent bg-cover bg-center md:py-0 sm:py-12 items-center sm:flex-col sm:h-auto sm:w-full">
                    <img src="https://media.istockphoto.com/id/163262607/photo/blue-creative-abstract-vitality-impact-smoke-photo.jpg?s=612x612&w=0&k=20&c=fN0ULmCZMQ6V9RX4xDcIYROayphLnq5utYVrfT0frH4="
                    className='md:h-full  md:w-full absolute object-cover border-3 border-transparent sm:h-auto sm:w-full  blur mix-blend-screen'></img>
                    <div className='h-full w-full flex md:flex-row md:px-20 items-center sm:flex-col sm:px-4'>
                     <div className='lg:h-40 md:h-40  md:w-40  sm:w-24 rounded-full lg:w-40 z-10  items-center'><Image
                     width={200}
                     height={400}
                     src = "/Arpit.png"
                    className="rounded-full h-full border-3 border-white w-full  bg-clip-border z-15"/></div>
                    <div className="text-white flex-col px-10  lg:space-y-4 md:space-y-12 font-mono  ">
                        <a className="cursor-pointer md:text-3xl font-bold font-sans pb-5 z-10">Arpit Agrawal</a>
                        <p className="md:text-normal   text-gray-400 absolute">Software Developer | FullStack Developer | Backend Developer </p>
                        
                    </div>
                </div>
            </div>
        
        </div>
        <div className='md:hidden relative animate-slide-up justify-center lg:hidden sm:flex flex-col h-auto space-x-hidden'>
        <img src="/cc.jpg"
                    className='absolute object-cover border-transparent h-44 w-full overflow-x-hidden blur-sm border-1.5 mix-blend-screen'></img>
         <div className='flex flex-row px-8 space-x-0 h-full w-full items-center overflow-x-hidden justify-center py-6'>
            <div className='h-32 w-52 rounded-full  z-10 justify-center items-center'><Image
                     width={400}
                     height={600} h-auto w-full absolute object-cover border-3 border-transparent  blur mix-blend-screen
                     src = "/Arpit.png"
                className="rounded-full h-full border-4 border-white  w-full  bg-clip-border z-15"/>
            </div>
            <div className=' py-6 flex flex-col items-center justify-center space-y-2 relative w-full'>
                <a className="cursor-pointer pl-2 text-3xl font-bold font-sans pb-5  z-10">Arpit Agrawal</a>
                <p className="text-tiny pl-2 hidden text-gray-400">Software Developer | FullStack Developer | Backend Developer </p>
            </div>
        </div>
        </div>
    </div>
     
    );
}
export default Hero;