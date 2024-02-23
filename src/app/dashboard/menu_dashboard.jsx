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




export default function Menu_dashboard({ data }) {
    const router = useRouter()
    
    function para(e) {
     
        let pageName = e.target.innerText
        router.push('/dashboard/' + pageName)
    }

    const close_menu = () => {
        data.current.classList.add('hidden')
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
                        <div className=' flex items-center'>
                            <GrAnalytics></GrAnalytics>
                            <span onClick={(e) => para(e)}>Analytical</span>
                        </div>
                        <div className=' flex items-center hover:bg-[#3b4455] hover:rounded-md'>
                            <AiOutlineShoppingCart></AiOutlineShoppingCart>
                            <span onClick={(e) => para(e)}>eCommerce</span>
                        </div>
                    </div>
                </section>


                <section className=' mt-5 ps-3 bg-[#222a39]'>
                    <span className='text-[#7c8fac] uppercase text-sm font-semibold'>apps</span>
                    <div className=' *:flex *:items-center *:ps-2 *:leading-10 *:*:mx-1 *:text-sm'>
                        <div >
                            <BsChatSquareText></BsChatSquareText>
                            <span onClick={(e) => para(e)}>chat</span>
                        </div>
                        <div >
                            <LuCalendar></LuCalendar>
                            <span onClick={(e) => para(e)}>calender</span>
                        </div>
                        <div >
                            <MdOutlineMail></MdOutlineMail>
                            <span onClick={(e) => para(e)}>Email</span>
                        </div>
                        <div >
                            <IoCallOutline></IoCallOutline>
                            <span onClick={(e) => para(e)}>contact</span>
                        </div>
                        <div >
                            <PiCertificate></PiCertificate>
                            <span>Courses</span>
                        </div>
                        <div >
                            <TbBrandCtemplar></TbBrandCtemplar>
                            <span>Employee</span>
                        </div>
                        <div >
                            <CiStickyNote></CiStickyNote>
                            <span>notes</span>
                        </div>
                        <div >
                            <BsTicketPerforated></BsTicketPerforated>
                            <span>ticket</span>
                        </div>
                        <div>
                            <LuPenSquare></LuPenSquare>
                            <span>todo</span>
                        </div>
                        <div>
                            <BiTask></BiTask>
                            <span>Taskboard</span>
                        </div>
                        <div >
                            <MdOutlineMail></MdOutlineMail>
                            <span onClick={(e) => para(e)}>Email</span>
                        </div>
                        <div >
                            <IoCallOutline></IoCallOutline>
                            <span onClick={(e) => para(e)}>contact</span>
                        </div>
                        <div >
                            <PiCertificate></PiCertificate>
                            <span>Courses</span>
                        </div>
                        <div >
                            <PiCertificate></PiCertificate>
                            <span>Courses</span>
                        </div>
                        <div >
                            <PiCertificate></PiCertificate>
                            <span>Courses</span>
                        </div>
                        <div >
                            <PiCertificate></PiCertificate>
                            <span>Courses</span>
                        </div>
                        <div >
                            <PiCertificate></PiCertificate>
                            <span>Courses</span>
                        </div>
                        <div >
                            <PiCertificate></PiCertificate>
                            <span>Courses</span>
                        </div>
                    
                    </div>
                </section>
            </section>
        </section>
    )
}
