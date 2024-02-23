"use client"
import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { CgMenuGridO } from "react-icons/cg";
import { BsArrowDownLeftCircleFill } from "react-icons/bs";

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';



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
                <section className='  lg:me-4 my-3 lg:my-0 border border-[#343e50] shadow-sm shadow-[#343e50] rounded-md  '>
                    <Employee_Salary></Employee_Salary>
                </section>
                <section className=' *:w-full lg:me-4 '>
                    <section className=' flex flex-wrap  md:flex-nowrap *:md:w-1/2 *:w-full mb-2 '>
                        <section className='  my-3 lg:my-0 md:me-2'>
                            <Customers></Customers>
                        </section>
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
                <div className=' flex items-center'>
                    <span className=' p-2'>
                        <CgMenuGridO className=' text-2xl bg-[#253662] text-[#5d87ff] rounded-md '></CgMenuGridO>

                    </span>
                    <div className=' *:flex *:w-full flex flex-wrap *:text-[#7c8fac]'>
                        <span className=' text-sm'>Salary</span>
                        <span>$36,358</span>
                    </div>
                </div>
                <div className=' flex items-center'>
                    <span className=' p-2'>
                        <CgMenuGridO className=' text-2xl bg-[#f2f6fa] text-[#7c8fac] rounded-md '></CgMenuGridO>

                    </span>
                    <div className=' *:flex *:w-full flex flex-wrap *:text-[#7c8fac]'>
                        <span className=' text-sm'>Profit</span>
                        <span>$5,296</span>
                    </div>
                </div>
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


function Customers() {
    return (
        <section className=' w-full text-[#7c8fac]  *:w-full  border border-[#343e50] shadow-sm shadow-[#343e50] rounded-md '>
            <div className=' *:w-full flex flex-wrap *:flex p-5 '>
                <span>Customers</span>
                <span className=' my-2 text-[#fff] text-xl font-semibold'>36,358</span>
                <div className=' flex items-center  my-2 '>
                    <BsArrowDownLeftCircleFill className='rounded-full text-xl text-[#fff] me-2'></BsArrowDownLeftCircleFill>
                    <span>+9%</span>
                </div>
            </div>
            <div>
                <Cust_chrt></Cust_chrt>
            </div>
        </section>
    )
}

function Cust_chrt() {
    const [showTooltip, setShowTooltip] = React.useState(true);
    const handleTooltipChange = (event) => {
      setShowTooltip(event.target.checked);
    };
  
    return (
        <div className=' w-full '>
            <Stack direction="column" sx={{ width: '100%' }}>


                <Stack direction="row" sx={{ width: '100%' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <SparkLineChart
                            data={[30, 25, 35, 40, 20, 30,40]}
                            height={100}
                            colors={['#44b7f7']}
                            showTooltip={showTooltip}

                        />
                    </Box>

                </Stack>
            </Stack>
        </div>
    )
}