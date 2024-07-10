"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { RxPerson } from "react-icons/rx";

export default function Nav() {
  return (
    <Navbar
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
    
        ],
      }} className="lg:h-24 md:h-24 bg-black  sm:h-[80px] sm:sticky sm:overflow-y-hidden sm:overflow-x-hidden"
    >
      <NavbarBrand className="hidden sm:flex" >
       
      </NavbarBrand>
      <NavbarContent className= "relative flex gap-24 " justify="center">
        <NavbarItem>
        <a href="#" className=" absolute md:text-2xl rounded-full sm:text-3xl  text-white font-semibold hover:text-cyan-500 hover:z-1 ring-4 ring-gradient-rose ring-offset-4"> 
        <FaGithub /> </a> 
        </NavbarItem>
        <NavbarItem>
        <a href="#" className=" absolute  md:text-2xl sm:text-3xl  text-white hover:text-red-900"> 
        <FaXTwitter /> </a>
        </NavbarItem>
        <NavbarItem>
        <a href="#" className=" absolute  md:text-2xl sm:text-3xl  text-white hover:text-blue-500 transition-duration-2000"> 
        <FaLinkedinIn /> </a>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className=" hidden sm:flex gap-24" justify="end">
          <a></a><a></a><a></a>
          <NavbarItem >
            <button className="rounded-full py-3 px-4 w-full sm:w-fit border-transparent bg-gradient-to-t from-blue-500 to-cyan-500 text-white  text-sm  items-center"> Contact Me </button>
          </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}