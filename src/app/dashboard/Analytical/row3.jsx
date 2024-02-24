"use client"
import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { CgMenuGridO } from "react-icons/cg";
import { BsArrowDownLeftCircleFill } from "react-icons/bs";
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import MYser1 from '../../assets/img/user-1.webp'
import MYser2 from '../../assets/img/user2.webp'
import MYser3 from '../../assets/img/user3.webp'
import MYser4 from '../../assets/img/user4.webp'
import MYser5 from '../../assets/img/user5.webp'
import './mystyle.css'
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { BiMessageDetail } from "react-icons/bi";
import PI from '../../assets/img/piggy.png'


import './mystyle.css'
import { colors } from '@mui/material';
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
                        <section className='  my-3 lg:my-0 md:ms-2'>
                            <Projects></Projects>
                        </section>
                    </section>
                    <section className=' my-3 lg:my-0 '>
                        <Coming_soon />
                    </section>
                </section>
                <section className=' bg-lime-950'>
                    <Best_selling></Best_selling>
                </section>
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
                    <BsArrowDownLeftCircleFill className='rounded-full text-xl text-[#fa896b] me-2'></BsArrowDownLeftCircleFill>
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
                            data={[30, 25, 35, 40, 20, 30, 40]}
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

function Projects() {
    return (

        <section className=' w-full text-[#7c8fac]  *:w-full  border border-[#343e50] shadow-sm shadow-[#343e50] rounded-md '>
            <div className=' *:w-full flex flex-wrap *:flex p-5 '>
                <span>Projects</span>
                <span className=' my-2 text-[#fff] text-xl font-semibold'>78,298</span>
                <div className=' flex items-center  my-2 '>
                    <BsArrowDownLeftCircleFill className='rounded-full text-xl text-[#13deb9] me-2'></BsArrowDownLeftCircleFill>
                    <span>+9%</span>
                </div>
            </div>
            <div>
                <Proj_chart></Proj_chart>
            </div>
        </section>
    )

}


function Proj_chart() {
    const [showHighlight, setShowHighlight] = React.useState(true);
    const [showTooltip, setShowTooltip] = React.useState(true);

    const handleHighlightChange = (event) => {
        setShowHighlight(event.target.checked);
    };

    const handleTooltipChange = (event) => {
        setShowTooltip(event.target.checked);
    };
    return (
        <div className=' w-full '>
            <Stack direction="column" sx={{ width: '100%' }}>
                <Stack direction="row" sx={{ width: '100%' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <SparkLineChart
                            plotType="bar"
                            data={[4, 10, 9, 7, 9, 10, 11, 8, 10]}
                            height={100}
                            showHighlight={showHighlight}
                            showTooltip={showTooltip}
                            colors={['#557be4']}
                        />
                    </Box>
                </Stack>
            </Stack>
        </div>
    )
}

function Coming_soon() {
    return (
        <section className=' w-full py-4 p-5 *:w-full border border-[#343e50] shadow-sm shadow-[#343e50] rounded-md'>
            <div className=' flex my-5'>
                <figure className=' w-[80px] h-[80px]'>
                    <Image className=' rounded-md' src={MYser1}></Image>
                </figure>
                <div className=' mx-3 w-1/2'>
                    <h6 className='text-[#f2f6fa] font-semibold text-lg'>Super awesome, Vue coming soon!</h6>
                    <span className=' text-sm text-[#7c8fac]'>22 March, 2023</span>
                </div>
            </div>
            <div className=' flex justify-between  py-5'>
                <div className=' flex *:w-[50px] *:rounded-full *:border *:border-white *:border-2'>
                    <Image src={MYser2}></Image>
                    <Image className=' -translate-x-3' src={MYser3}></Image>
                    <Image className=' -translate-x-6' src={MYser4}></Image>
                    <Image className=' -translate-x-9' src={MYser5}></Image>
                </div>
                <div className=' flex items-center *:bg-[#253662]  *:text-2xl'>
                    <span className=' *:text-[#5d87ff] p-2 rounded-md'>
                        <BiMessageDetail></BiMessageDetail>
                    </span>
                </div>
            </div>
        </section>
    )
}


function Best_selling() {
    return (
        <section className=' w-full h-full bg-[#5d87ff] flex flex-wrap content-start   rounded-md shadow-sm shadow-[#343e50]   '>
            <section className=' *:w-full w-full px-5  '>
                <div>
                    <div className=' text-white '>
                        <h6 className=' font-semibold text-lg pt-3'>Best selling products</h6>
                        <span>Overview 2023</span>
                    </div>
                </div>
                <div></div>
            </section>
            <section className=' w-full flex justify-center ' >
                <div className=' w-[300px] h-[300px]   mybg '></div>
            </section>
            <section className=' bg-[#2a3447]   w-full rounded-md *:w-full  -translate-y-10 p-3 mx-5 '>
                <div className=''>
                    <div className=' flex justify-between'>
                            <div className=' w-full *:flex flex-wrap flex *:w-full'>
                                <span className=' text-white'>MaterialPro</span>
                                <span className=' text-sm text-[#7c8fac]'>$23,568</span>
                            </div>
                            <div className=' flex items-center bg-[#253662] rounded-md h-2/3 p-1'>
                                <span className='text-[#5d87ff] text-sm'>55%</span>
                            </div>
                    </div>
                    <div className=' w-full my-1'>
                        <div className=' relative w-full bg-[#364975] h-1 rounded-md *:rounded-md'>
                            <div className=' absolute w-1/2 bg-[#5d87ff] left-0 h-1'></div>
                        </div>

                    </div>
                </div>
                <div className=' pt-2'>
                    <div className=' flex justify-between'>
                            <div className=' w-full *:flex flex-wrap flex *:w-full'>
                                <span className=' text-white'>MaterialPro</span>
                                <span className=' text-sm text-[#7c8fac]'>$23,568</span>
                            </div>
                            <div className=' flex items-center rounded-md h-2/3 p-1 bg-[#1c455d]'>
                                <span className=' text-sm text-[#36b6ff]'>55%</span>
                            </div>
                    </div>
                    <div className=' w-full my-1'>
                        <div className=' relative w-full bg-[#305573] h-1 rounded-md *:rounded-md'>
                            <div className=' absolute w-1/2 bg-[#44b7f7] left-0 h-1'></div>
                        </div>

                    </div>
                </div>
              
            </section>
        </section>
    )
}