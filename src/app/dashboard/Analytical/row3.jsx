"use client"
import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { CgMenuGridO } from "react-icons/cg";

import './mystyle.css'
const uData = [20, 15, 30, 25, 10, 15];
const xLabels = [
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',

];
export default function Row_three() {
    return (
        <section className=' w-full my-5 '>
            <section className=' w-full ps-2   *:lg:w-1/3 *:w-full flex flex-wrap lg:flex-nowrap   '>
                <section className='  lg:me-4 my-3 lg:my-0 border '>
                    <Employee_Salary></Employee_Salary>
                </section>
                <section className=' *:w-full lg:me-4 '>
                    <section className=' flex flex-wrap  md:flex-nowrap *:md:w-1/2 *:w-full mb-2 '>
                        <section className=' bg-emerald-300 my-3 lg:my-0 md:me-2'>dd</section>
                        <section className=' bg-emerald-900 my-3 lg:my-0 md:ms-2'>lorem</section>
                    </section>
                    <section className=' bg-yellow-400 my-3 lg:my-0 '>1</section>
                </section>
                <section className=' bg-lime-950'>dv</section>
            </section>
        </section>
    )
}


function Employee_Salary() {
    return (
        <section className=' w-full  flex flex-wrap *:w-full p-5'>
            <div>
                <h6 className='text-xl font-semibold text-[#cfd1d5]'>Employee Salary</h6>
                <span className=' text-[#7c8fac] text-sm'>Every month</span>
            </div>
            <div className=' flex justify-start'>
                <My_chart></My_chart>
            </div>
            <div className=' w-1/2 justify-between flex'>
                <div>
                    <CgMenuGridO></CgMenuGridO>
                    <div className=' *:flex *:w-full flex flex-wrap'>
                        <span>Salary</span>
                        <span>$36,358</span>
                    </div>
                </div>
                <div></div>
            </div>
        </section>
    )
}

function My_chart() {
    return (
        <BarChart
            width={350}
            height={350}
            series={[
                { data: uData, id: 'uvId' },
            ]}
            xAxis={[{ data: xLabels, scaleType: 'band' }]}
            colors={['#557be4']}
        />
    )
}