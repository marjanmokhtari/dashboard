"use client"
import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import './mystyle.css'



const pData = [1.5, 2.7, 2.2, 3.6, 1.5, 1];
const uData = [-1.8, -1.1, -2.5, -1.5, -0.6, -1.8];


const xLabels = [
    '16/08',
    '17/08',
    '18/08',
    '19/08',
    '20/08',
    '21/08'
];
export default function Row_two() {
    return (
        <section className=' w-full py-5 overflow-hidden  '>
            <section className=' w-full  flex-wrap xl:flex-nowrap flex  overflow-hidden *:mx-2 '>
                <section className='  w-full xl:w-4/6 border border-[#343e50] shadow-md shadow-[#343e50] rounded-md flex justify-center overflow-hidden '>
                    <section className=' w-[100%] overflow-hidden flex flex-wrap '>
                        <section className=' w-full md:w-[70%] *:text-[#fff] overflow-hidden *:w-[100%]  *:h-[400px] *:object-cover'>
                            <Mychart></Mychart>
                            
                        </section>
                        <section className=' w-full md:w-[30%]'></section>
                    </section>
                </section>
                <section className=' w-full xl:w-2/6 border border-yellow-500 '>fsdfs</section>


            </section>
        </section>
    )
}


function Mychart() {
    return (
        <BarChart
           
         

            series={[
                { data: pData, label: 'Earnings this month', id: 'pvId', stack: 'stack1', color: '#557be3' },
                { data: uData, label: 'Expense this month', id: 'uvId', stack: 'stack1', color: '#44aae4' },
            ]}
            xAxis={[{ data: xLabels, scaleType: 'band' }]}
        
        />
    )
}