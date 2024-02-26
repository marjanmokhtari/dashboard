"use client"
import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [2.5, 3.7, 3.2, 2.6, 1.9];
const pData = [-2.8, -1.1, -3.0, -1.5, -1.9];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
];


export default function row2() {
  return (
    <section className=' w-full  py-3 flex flex-wrap xl:flex-nowrap'>
      <section className='border border-red-100 w-full xl:w-1/3 xl:me-3 mb-3 xl:mb-0'>
      <Revenue></Revenue>
      </section>
      <section className='border border-red-700 w-full xl:w-1/3 xl:me-3 mb-3 xl:mb-0'>dsf</section>
      <section className='border border-red-200 w-full xl:w-1/3'>fsdf</section>
    </section>
  )
}

function Revenue(){
  return(
    <section className=' w-full'>
      <section>
        <h6>
        Revenue Updates
        </h6>
        <span>Overview of Profit</span>
      </section>
      <section>
        <Chart_Rev></Chart_Rev>
      </section>
    </section>
  )
}

function Chart_Rev(){
  return(
    <section className=' w-full'>
 <BarChart
      width={350}
      height={300}
      series={[
        { data: pData, label: 'Footware', id: 'Footware', stack: 'total',color: '#557be4', },
        { data: uData, label: 'Fashionware', id: 'Fashionware', stack: 'total' ,color:'#44aae4'},
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
      
    />
    </section>
  )
}