"use client"

import React, { Children } from 'react'
import { useRouter } from 'next/navigation';
import '../globals.css'
import Menu_dashboard from './menu_dashboard';
import { IoMdMenu } from "react-icons/io";


export default function layout({ children }) {

    return (
        <section className=" w-full  overflow-hidden  h-[100vh] flex ">

            {/* ****************** menu section ***************** */}
            <section className="div1 w-[15%] h-[100vh] overflow-y-scroll text-black ">
                <Menu_dashboard></Menu_dashboard>
            </section>



            {/* ****************    Content Section     ******************             */}
            <section className=' w-[85%] h-full  overflow-hidden '>
                <section className=' w-full h-full overflow-y-scroll'>
                    <section className=' w-full h-full'>
                        <My_header></My_header>
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
    return (
        <section className="div2 h-[70px]  bg-[#2a3447] overflow-hidden ">
            <header className=' w-full h-full flex   '>
                    <section className='w-1/2 border '>
                        <IoMdMenu></IoMdMenu>
                    </section>
                    <section className='w-1/2 border border-red-500 '>sdggg</section>
            </header>
        </section>

    )
}