"use client"

import React, { Children, createRef, useEffect, useRef, useState } from 'react'
import '../globals.css'
import Menu_dashboard from './menu_dashboard';
import { IoMdMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { useContext } from 'react';
import Image from 'next/image';


// import mui
import Badge from '@mui/material/Badge';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


// import img
import User1 from '../assets/img/user-1.webp'
import Flagen from '../assets/img/flag-en.svg'



const Mycontext = React.createContext()
export default function layout({ children }) {

    const mymenu = useRef()


    return (
        <section className=" w-full  overflow-hidden  h-[100vh] flex ">

            {/* ****************** menu section ***************** */}
            <section ref={mymenu} className="div1  min-h-[100vh] overflow-y-scroll bg-[#222a39] hidden lg:flex lg:relative lg:w-[15%]">
                <Menu_dashboard data={mymenu} ></Menu_dashboard>
            </section>



            {/* ****************    Content Section     ******************             */}
            <section className=' w-full lg:w-[85%] h-full  overflow-hidden '>
                <section className=' w-full h-full overflow-y-scroll'>
                    <section className=' w-full h-full'>
                        <Mycontext.Provider value={mymenu}>
                            <My_header></My_header>
                        </Mycontext.Provider>
                        <section className="div3 bg-slate-500 w-full overflow-hidden  ">
                            {children}
                        </section>
                    </section>
                </section>

            </section>


        </section>


    )
}


function My_header() {
    const click_menu = useContext(Mycontext)
    function openMenu(e) {

        click_menu.current.classList.add('w-[50%]')
        click_menu.current.classList.add('fixed')
        click_menu.current.classList.add('md:w-[30%]')
        click_menu.current.classList.remove('hidden')
    }


    return (
        <section className="div2  bg-[#2a3447] overflow-hidden ">
            <header className=' w-full h-full flex p-5  '>
                <section className='w-1/2  *:cursor-pointer '>
                    <div className=' w-full flex items-center h-full *:text-[#7c8fac]'>
                        <div className=' flex *:mx-2 *:text-xl items-center h-full'>
                            <span onClick={(e) => openMenu(e)} className='lg:hidden '><IoMdMenu ></IoMdMenu></span>
                            <span className='  hidden lg:flex'><IoMdMenu ></IoMdMenu></span>
                            <IoIosSearch></IoIosSearch>
                        </div>
                        <nav className=' hidden lg:flex'>
                            <ul className=' flex *:mx-2  '>
                                <li >apps</li>
                                <li>chat</li>
                                <li>calender</li>
                                <li>email</li>
                            </ul>
                        </nav>
                    </div>
                </section>
                <section className='w-1/2 '>
                    <section className=' w-full h-full flex justify-end *:mx-2 items-center'>
                        <div className=''>
                            <span className=' w-[30px] h-[30px] flex rounded-full relative'>
                                    <Image className=' w-full h-full absolute rounded-full object-cover'  src={Flagen}></Image>
                            </span>
                        </div>
                        <div className=''>
                            <Badge badgeContent={4} color="primary">
                                <NotificationsNoneIcon color="action" className=' text-2xl text-[#7c8fac] text-[30px]' />
                            </Badge>
                        </div>
                        <div className=''>
                            <Image className='w-[30px] h-[30px] rounded-full' src={User1} ></Image>
                        </div>

                    </section>

                </section>
            </header>
        </section>

    )
}