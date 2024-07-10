"use client"
import React , { useState } from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import { FaGithub } from "react-icons/fa6";
import hero from '../../../public/hero.jpg';
import dynamic from 'next/dynamic';
import AnimatedElement from "./AnimatedElement"

const Projects = ()=> {

    const [flipped,setFlipped] = useState(false);
    const [flipped2,setFlipped2] = useState(false);
    const [flipped3,setFlipped3] = useState(false);
    const [flipped4,setFlipped4] = useState(false);

    

    return(
        
    <div className="flex flex-col pt-4 md:pt-16 md:flex-col lg:flex-row md:px-40 px-12 lg:px-36 h-full w-full lg:space-x-7 md:overflow-x-hidden md:space-y-16 space-y-8 sm:space-x-0 sm:overflow-x-hidden lg:space-y-0 lg:overflow-x-hidden md:space-x-0">
      <AnimatedElement delay={200}>
        <Card isFooterBlurred className="w-full xl:w-120 h-48 col-span-12 sm:col-span-5 lg:h-64 lg:w-72 md:w-full   md:h-[300px]" >
      {!flipped ? (
        <div className="w-full h-[300px] lg:h-64 lg:w-72 col-span-12" onClick={()=>setFlipped(!flipped)}>
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <h4 className="text-white font-medium text-lg">Spotify Clone</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover  cursor-pointer hover:blur "
        onClick={()=>setFlipped(!flipped)}
        src="https://images.pexels.com/photos/340103/pexels-photo-340103.jpeg"
      />
      <CardFooter className="absolute bottom-0  border-zinc-100/50 z-10 justify-between  hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 hover:gradientChange transition-all duration-1000">
        <div>
          <p className="text-white text-tiny">Nextjs , Tailwind , sabkiMaKiBhosda.</p>
          <p className="text-black text-tiny">Get notified.</p>
        </div>
        
      </CardFooter> </div>):(
          <Card className="w-full md:h-[300px] h-48 bg-zinc-300   lg:h-64 lg:w-72 col-span-12" >
              <div className="w-full h-full justify-center  space-y-5 items-center flex flex-col"  onMouseLeave={()=>setFlipped(!flipped)} onClick={()=>setFlipped(!flipped)}>
                  <p className=" text-black md:text-9xl text-7xl ">< FaGithub  /></p>
                  <Button variant="shadow" className="py-3 bg-black px-6">
                      Check on Github
                  </Button> 
              </div>
          </Card>
          
      )}

    </Card>
    </AnimatedElement>
    <AnimatedElement delay={300}>
    <Card isFooterBlurred className="w-full h-48 col-span-12 sm:col-span-5 lg:h-64 lg:w-72 md:w-full  md:h-[300px] ">
        {!flipped2 ? (<div className="w-full h-[300px] lg:h-64 lg:w-72 col-span-12" onClick={()=>setFlipped2(!flipped2)}>
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <h4 className="text-white font-medium text-lg">Weather App</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover  cursor-pointer hover:blur"
        src="https://plus.unsplash.com/premium_photo-1681426401552-0e7d89f26709?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2VhdGhlciUyMHN5bWJvbHxlbnwwfHwwfHx8MA%3D%3D"
        onClick={()=>setFlipped2(!flipped2)}
      />
      <CardFooter className="absolute  bottom-0  border-zinc-100/50 z-10 md:bg-none hover:bg-gradient-to-br from-blue-500 to-cyan-500 justify-between">
        <div>
          <p className="text-white text-tiny">Nextjs , Tailwind , sabkiMaKiBhosda.</p>
          <p className="text-black text-tiny">Get notified.</p>
        </div>
        
      </CardFooter></div>) : (
          <Card className="w-full md:h-[300px] h-48 bg-zinc-300   lg:h-64 lg:w-72 col-span-12" >
          <div className="w-full h-full justify-center  space-y-5 items-center flex flex-col"  onMouseLeave={()=>setFlipped2(!flipped2)} onClick={()=>setFlipped2(!flipped2)}>
              <p className=" text-black md:text-9xl text-7xl ">< FaGithub  /></p>
              <Button variant="shadow" className="py-3 bg-black px-6">
                  Check on Github
              </Button> 
          </div>
      </Card>

      )}

    </Card>
    </AnimatedElement>
    <AnimatedElement delay={400}>
    <Card isFooterBlurred className="w-full h-48 col-span-12 sm:col-span-5 lg:h-64 lg:w-72 md:w-full  md:h-[300px]">
      {!flipped3 ? (
      <div className="w-full h-[300px] lg:h-64 lg:w-72 col-span-12" onClick={()=>setFlipped3(!flipped3)}>
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <h4 className="text-white font-medium text-lg">Real time chat application</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover cursor-pointer hover:blur"
        src="https://plus.unsplash.com/premium_photo-1677252438450-b779a923b0f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbCUyMGNoYXQlMjBhcHB8ZW58MHx8MHx8fDA%3D"
      />
      <CardFooter className="absolute  bottom-0  border-zinc-100/50 z-10 justify-between hover:bg-gradient-to-br from-blue-500 to-cyan-500"  onClick={()=>setFlipped3(!flipped3)}>
        <div>
          <p className="text-white text-tiny">Nextjs , Tailwind , sabkiMaKiBhosda.</p>
          <p className="text-black text-tiny">Get notified.</p>
        </div>
        
      </CardFooter></div> ) : (
            <Card className="w-full md:h-[300px] h-48 bg-zinc-300   lg:h-64 lg:w-72 col-span-12" >
            <div className="w-full h-full justify-center  space-y-5 items-center flex flex-col"  onMouseLeave={()=>setFlipped3(!flipped3)} onClick={()=>setFlipped3(!flipped3)}>
                <p className=" text-black md:text-9xl text-7xl ">< FaGithub  /></p>
                <Button variant="shadow" className="py-3 bg-black px-6">
                    Check on Github
                </Button> 
            </div>
        </Card>

      )}
    </Card>
    </AnimatedElement>
    <AnimatedElement delay={500}>
    <Card isFooterBlurred className="w-full h-48 col-span-12 sm:col-span-5 lg:h-64 lg:w-72 md:w-full  md:h-[300px]">
    {!flipped4 ? (<div className="w-full h-[300px] lg:h-64 lg:w-72 col-span-12" onClick={()=>setFlipped4(!flipped4)}>
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
    
        <h4 className="text-white font-medium text-lg">Blockchain Dapp</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover  cursor-pointer hover:blur"
        src="https://images.pexels.com/photos/7887800/pexels-photo-7887800.jpeg"
        onClick={()=>setFlipped4(!flipped4)}
      />
      <CardFooter className="absolute bg-tansparent bottom-0  border-zinc-100/50 z-10 hover:bg-gradient-to-br from-blue-500 to-cyan-500 justify-between"  onClick={()=>setFlipped4(!flipped4)}>
        <div>
          <p className="text-white text-tiny">Nextjs , Tailwind , sabkiMaKiBhosda.</p>
          <p className="text-black text-tiny">Get notified.</p>
        </div>
        
      </CardFooter></div> ) : (
          <Card className="w-full h-48 md:h-[300px] bg-zinc-300   lg:h-64 lg:w-72 col-span-12" >
          <div className="w-full h-full justify-center  space-y-5 items-center flex flex-col"  onMouseLeave={()=>setFlipped4(!flipped4)} onClick={()=>setFlipped4(!flipped4)}>
              <p className=" text-black md:text-9xl text-7xl ">< FaGithub  /></p>
              <Button variant="shadow" className="py-3 bg-black px-6">
                  Check on Github
              </Button> 
          </div>
          </Card>
      )}
    </Card>
    </AnimatedElement>
    </div>
    );
}

export default Projects;