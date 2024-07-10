"use client"
import { FaQuoteLeft } from "react-icons/fa6";
import {User, Link} from "@nextui-org/react";
import {Pagination, Button} from "@nextui-org/react";
const Testimonial = ()=>{
    return(
        <div className="py-24 hidden sm:flex md:flex px-36 flex-col h-full w-full space-y-20">
            <div className="flex flex-col h-full w-full space-y-12">
            <div className="px-4 py-2 h-full w-28 border-zinc-600 border-2 rounded-full"><p className="text-sm text-zinc-300">Testimonial</p></div>
            <p className="text-2xl text-white font-semibold">Those who
            <span className="text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text">
            &nbsp; KNOW my WORK
            </span>
            </p>            
            </div>
            <div className="flex flex-row h-full w-full justify-center">
                <div className="h-full flex flex-col space-y-12 w-80 bg-gray-900">
                    <p className="pt-8 pl-8 text-6xl text-cyan-500"><FaQuoteLeft /></p>
                    <div className="pb-4 pl-12">
                        <User   
                        name="Junior Garcia"
                        description={(
                            <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
                                 @jrgarciadev
                            </Link>
                            )}
                        avatarProps={{
                                src: "https://avatars.githubusercontent.com/u/30373425?v=4"
                        }}
                        />
                    </div>
                   
                </div>
            </div>
            <div className="h-full">
            <Pagination
                total={3}
                className="gap-2"
                radius="full"
            />
            </div>
        </div>
    );

}

export default Testimonial;