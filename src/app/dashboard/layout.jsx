"use client"

import React, { Children } from 'react'
import { useRouter } from 'next/navigation';
import '../globals.css'
import Menu_dashboard from './menu_dashboard';


export default function layout({ children }) {

    return (
        <section className="parent">
            <section className="div1  text-black">
               <Menu_dashboard></Menu_dashboard>
            </section>
            <section className="div2 bg-sky-900 border border-teal-500 ">bdbdfbd </section>
            <section className="div3">
                {children}
            </section>
        </section>


    )
}


