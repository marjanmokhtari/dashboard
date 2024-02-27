"use client"
import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { CgMenuGridO } from "react-icons/cg";

import '../../globals.css'
const uData = [2.5, 3.7, 3.2, 2.6, 1.9];
const pData = [-2.8, -1.1, -3.0, -1.5, -1.9];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
];




import { PieChart } from '@mui/x-charts/PieChart';



const data2 = [
  { label: 'Expance', value: 55 },
  { label: 'Revenue', value: 55 },
  { label: 'protfit', value: 55 },

];



export default function row2() {
  return (
    <section className=' w-full  py-3 flex flex-wrap xl:flex-nowrap'>
      <section className='*:border  w-full xl:w-1/3 xl:me-3 mb-3 xl:mb-0 *:border-[#343e50] text-[#eaeff4] *:shadow-sm *:shadow-[#343e50] *:rounded-md'>
        <Revenue></Revenue>
      </section>
      <section className='  w-full xl:w-1/3 xl:me-3 mb-3 xl:mb-0 *:border-[#343e50] text-[#eaeff4] *:border *:shadow-sm *:shadow-[#343e50] *:rounded-md '>
        <Sales ></Sales>
      </section>
      <section className='border border-red-200 w-full xl:w-1/3'>fsdf</section>
    </section>
  )
}

function Revenue() {
  return (
    <section className=' w-full'>
      <section className=' p-5'>
        <h6 className=' text-[#eaeff4]'>
          Revenue Updates
        </h6>
        <span className=' text-sm text-[#7c8fac]'>Overview of Profit</span>
      </section>
      <section className=' flex justify-center'>
        <Chart_Rev></Chart_Rev>
      </section>

    </section>
  )
}

function Chart_Rev() {
  return (
    <section className='w-full'>
      <BarChart sx={{ width: '100%' }}

        height={330}

        series={[
          { data: pData, label: 'Footware', id: 'Footware', stack: 'total', color: '#557be4' },
          { data: uData, label: 'Fashionware', id: 'Fashionware', stack: 'total', color: '#44aae4' },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
      />
    </section>
  )
}


function Sales() {
  return (
    <section className=' w-full '>
      <section className='p-5'>
        <h6 className=' text-[#eaeff4]'>Sales Overview</h6>
        <span className=' text-sm text-[#7c8fac]'>Sales Overview</span>
      </section>
      <section>
        <Chart_sal></Chart_sal>
      </section>
      <section className=' flex justify-between p-5 text-[#7c8fac]'>
        <div className=' flex items-center '>
          <div>
            <CgMenuGridO className=' text-2xl bg-[#1c455d] rounded-md'></CgMenuGridO>
          </div>
          <div className=' *:w-full flex flex-wrap *:flex ms-2'>
            <span className='text-xl'>$23,450</span>
            <span className=' text-xs'>Profit</span>
          </div>
        </div>
        <div className=' flex items-center'>
          <div>
            <CgMenuGridO className=' text-2xl bg-[#253662] rounded-md'></CgMenuGridO>
          </div>
          <div className=' *:w-full flex flex-wrap *:flex ms-2'>
            <span className='text-xl'>$23,450</span>
            <span className=' text-xs'>Profit</span>
          </div>
        </div>
      </section>
    </section>
  )
}

function Chart_sal() {
  return (
    <section className=' w-full flex justify-center  *:flex *:justify-center  '>
      <div className=' w-full  flex justify-center  *:flex'>
        <PieChart className=' m-0'
          series={[
            {
              innerRadius: 100,
              outerRadius: 120,
              data: data2,
            },
          ]}
          width={600}
          height={250}
          slotProps={{
            legend: { hidden: true },
          }}
          margin={{ right: 5 }}


          colors={['#557be4', '#fff', '#44aae4']}
        />
      </div>
    </section>
  )
}