"use client"
import React from 'react'
import Image from 'next/image'
import Bg2 from '../../assets/img/bg2.webp'
import Pay from '../../assets/img/paypal.svg'
import { BsArrowDownLeftCircleFill } from "react-icons/bs";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

export default function row1() {
    return (
        <section className=' w-full  flex flex-wrap xl:flex-nowrap my-3 '>
            <section className=' w-full xl:w-2/3 xl:me-3 me-0 '>
                <Mathew></Mathew>
            </section>
            <section className=' w-full xl:w-1/3  xl:ms-3 ms-0 mt-4 xl:mt-0 '>
                <Payments></Payments>
            </section>
        </section>
    )
}
function Mathew() {
    return (
        <section className=' w-full flex flex-wrap bg-[#253662] text-[#eaeff4] rounded-md '>
            <section className='w-full md:w-1/2 p-5 flex flex-wrap *:w-full content-center'>
                <h4>Welcome back Mathew!</h4>
                <p className=' text-xs py-3 text-[#7c8fac]'>You have earned 54% more than last month which is great thing</p>
                <div className=' py-3'>
                    <span className=' text-sm p-2  bg-[#5d87ff] rounded-md'>
                        check
                    </span>
                </div>
            </section>
            <section className='w-full md:w-1/2 flex items-end justify-center  '>

                <Image src={Bg2} className=' w-[300px] flex mt-2'>

                </Image>

            </section>
        </section>
    )
}

function Payments() {
    return (
        <section className=' w-full flex justify-between flex-wrap md:flex-nowrap *:border-[#343e50] text-[#eaeff4] *:shadow-sm *:shadow-[#343e50] *:rounded-md '>
            <section className=' border w-full md:w-1/2 md:me-3 mb-3 md:mb-0 p-5 *:w-full flex flex-wrap '>
                <figure className=' py-3'>
                    <Image src={Pay}></Image>
                </figure>
                <span className=' pt-2 text-[#7c8fac]'>Payments</span>
                <span className=' text-xl'>$678,298</span>
                <div className=' flex py-3'>
                    <BsArrowDownLeftCircleFill className=' me-2 text-lg text-[#13deb9]'></BsArrowDownLeftCircleFill>
                    <span>+9%</span>
                </div>
            </section>


            <section className=' border w-full md:w-1/2 md:me-3 mb-3 md:mb-0 *:w-full flex flex-wrap '>
                <section className=' py-3 *:w-full flex flex-wrap p-5'>
                    <span className=' text-sm text-[#7c8fac] '>Projects</span>
                    <span className=' text-xl text-[#eaeff4] '>78,298</span>
                </section>


                <section className=' flex py-3'>
                    <Chart_pay></Chart_pay>
                </section>
            </section>
        </section>
    )
}

function Chart_pay() {

    return (
        <section className=' w-full flex justify-center'>
            <Stack direction="row" className=' w-full'>
                <Box sx={{ flexGrow: 1 }}>
                    <SparkLineChart
                        data={[30, 25, 35, 20, 30, 40,25]}
                        xAxis={{
                            scaleType: 'time',
                        
                        }}
                        height={100}
                        showTooltip
                        showHighlight
                    />
                </Box>
                
            </Stack>
        </section>
    )
}