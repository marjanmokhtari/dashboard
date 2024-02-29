"use client"
import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation';
import Logo from '../assets/img/logo.svg'
import Image from 'next/image';
import { GrAnalytics } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsChatSquareText } from "react-icons/bs";
import { LuCalendar } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { TbBrandCtemplar } from "react-icons/tb";
import { CiStickyNote } from "react-icons/ci";
import { BsTicketPerforated } from "react-icons/bs";
import { LuPenSquare } from "react-icons/lu";
import { BiTask } from "react-icons/bi";
import { PiCertificate } from "react-icons/pi";

import '../globals.css'
import { IoCloseSharp } from "react-icons/io5";
import MyAdmin from '../assets/img/user-1.webp'

import { FaPowerOff } from "react-icons/fa";



export default function Menu_dashboard({ data }) {
    const router = useRouter()

    function para(e) {

        let pageName = e.target.innerText
        router.push('/dashboard/' + pageName)
    }

    const close_menu = () => {
        data.current.classList.add('hidden')
    }


    const backlog=(e)=>{
     
        router.push('/')
    }

    return (
        <section className=' py-5 bg-[#222a39] *:w-full *:cursor-pointer   '>
            {/* <button onClick={para}>go to jib</button> */}
            <section className=' w-full px-1 flex flex-wrap justify-center *:w-full *:text-[#7c8fac] '>
                <figure className='py-2 ps-3 flex items-center justify-between'>
                    <Image src={Logo}></Image>
                    <figcaption onClick={close_menu} className=' lg:hidden text-xl  '>
                        <IoCloseSharp></IoCloseSharp>
                    </figcaption>
                </figure>

                <section className='mt-10 ps-3'>
                    <span className='uppercase text-sm font-semibold'>home</span>
                    <div className=' *:leading-10 *:ps-2  *:*:mx-1 *:text-sm'>
                        <div className=' flex items-center hover:bg-[#3b4455] hover:rounded-md'>
                            <GrAnalytics></GrAnalytics>
                            <span onClick={(e) => para(e)}>Analytical</span>
                        </div>
                        <div className=' flex items-center hover:bg-[#3b4455] hover:rounded-md'>
                            <AiOutlineShoppingCart></AiOutlineShoppingCart>
                            <span onClick={(e) => para(e)}>ecommerce</span>
                        </div>
                    </div>
                </section>


                <section className=' mt-5 ps-3 bg-[#222a39]'>
                    <span className='text-[#7c8fac] uppercase text-sm font-semibold'>apps</span>
                    <div className=' *:flex *:items-center *:ps-2 *:leading-10 *:*:mx-1 *:text-sm'>
                        <div className='myHov'>
                            <BsChatSquareText></BsChatSquareText>
                            <span >chat</span>
                        </div>
                        <div className='myHov'>
                            <LuCalendar></LuCalendar>
                            <span>calender</span>
                        </div>
                        <div className='myHov' >
                            <MdOutlineMail></MdOutlineMail>
                            <span >Email</span>
                        </div>
                        <div className='myHov' >
                            <IoCallOutline></IoCallOutline>
                            <span >contact</span>
                        </div>
                        <div className='myHov' >
                            <PiCertificate></PiCertificate>
                            <span>Courses</span>
                        </div>
                        <div className='myHov' >
                            <TbBrandCtemplar></TbBrandCtemplar>
                            <span>Employee</span>
                        </div>
                        <div className='myHov'>
                            <CiStickyNote></CiStickyNote>
                            <span>notes</span>
                        </div>
                        <div className='myHov'>
                            <BsTicketPerforated></BsTicketPerforated>
                            <span>ticket</span>
                        </div>
                        <div className='myHov'>
                            <LuPenSquare></LuPenSquare>
                            <span>todo</span>
                        </div>
                        <div className='myHov'>
                            <BiTask></BiTask>
                            <span>Taskboard</span>
                        </div>
                        <div className='myHov' >
                            <MdOutlineMail></MdOutlineMail>
                            <span >Blog</span>
                        </div>
                    </div>
                </section>

                <section className=' w-full  ps-3 mt-2'>
                    <section className=' w-full bg-[#1c455d] rounded-md flex p-2'>
                        <section>
                            <Image className=' w-[40px] h-[40px] rounded-full' src={MyAdmin}></Image>
                        </section>
                        <section className=' flex-wrap flex *:w-full ps-2 '>
                            <span className=' text-sm'>Marjan</span>
                            <span className=' text-xs'>Programmer</span>
                        </section>
                        <section className=' flex items-center justify-center'>
                            <FaPowerOff className=' text-[#5d87ff'  onClick={(e)=>backlog(e)}></FaPowerOff>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}
