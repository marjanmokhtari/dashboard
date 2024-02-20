"use client"
import React from 'react'
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





export default function Menu_dashboard() {
    const router = useRouter()
    
 
    function para(e){
        console.log(e.target.innerText);
        let pageName=e.target.innerText
        router.push('/dashboard/'+pageName)
    }



    return (
        <section className=' w-full py-5 bg-[#2a3447] *:w-full *:cursor-pointer'>
            {/* <button onClick={para}>go to jib</button> */}
            <section className=' w-full px-1 flex flex-wrap justify-center *:w-full *:text-[#7c8fac] '>
                <figure className='py-2 ps-3'>
                    <Image src={Logo}></Image>
                </figure>

                <section className='mt-10 ps-3'>
                    <span className='uppercase'>home</span>
                    <div className=' *:leading-10 *:ps-2  *:*:mx-1'>
                        <div className=' flex items-center'>
                            <GrAnalytics></GrAnalytics>
                            <span onClick={(e)=>para(e)}>Analytical</span>
                        </div>
                        <div className=' flex items-center hover:bg-[#3b4455] hover:rounded-md'>
                            <AiOutlineShoppingCart></AiOutlineShoppingCart>
                            <span onClick={(e)=>para(e)}>eCommerce</span>
                        </div>
                    </div>
                </section>


                <section className=' mt-5 ps-3'>
                    <span className='text-[#7c8fac] uppercase'>apps</span>
                    <div className=' *:flex *:items-center *:ps-2 *:leading-10 *:*:mx-1'>
                        <div >
                            <BsChatSquareText></BsChatSquareText>
                            <span onClick={(e)=>para(e)}>chat</span>
                        </div>
                        <div >
                            <LuCalendar></LuCalendar>
                            <span onClick={(e)=>para(e)}>calender</span>
                        </div>
                        <div >
                            <MdOutlineMail></MdOutlineMail>
                            <span onClick={(e)=>para(e)}>Email</span>
                        </div>
                        <div >
                            <IoCallOutline></IoCallOutline>
                            <span onClick={(e)=>para(e)}>contact</span>
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
                    </div>
                </section>
            </section>
        </section>
    )
}
