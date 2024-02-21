"use client"

import React, { Children, createRef, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation';
import '../globals.css'
import Menu_dashboard from './menu_dashboard';
import { IoMdMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { useContext } from 'react';



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
                        <section className="div3 bg-slate-500 w-full  ">
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
        <section className="div2 h-[70px]  bg-[#2a3447] overflow-hidden ">
            <header className=' w-full h-full flex p-5  '>
                <section className='w-1/2 border *:cursor-pointer '>
                    <div className=' w-full flex items-center'>
                        <div className=' flex *:mx-2 *:text-xl'>
                            <span onClick={(e) => openMenu(e)} className='lg:hidden '><IoMdMenu ></IoMdMenu></span>
                            <span  className='  hidden lg:flex'><IoMdMenu ></IoMdMenu></span>
                            <IoIosSearch></IoIosSearch>
                        </div>
                        <nav className=''>
                            <ul className=' flex *:mx-2  '>
                                <li >apps</li>
                                <li>chat</li>
                                <li>calender</li>
                                <li>email</li>
                            </ul>
                        </nav>
                    </div>
                </section>
                <section className='w-1/2 border border-red-500 '>sdggg</section>
            </header>
        </section>

    )
}