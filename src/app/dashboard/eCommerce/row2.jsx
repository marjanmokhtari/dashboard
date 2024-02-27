"use client"
import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { CgMenuGridO } from "react-icons/cg";
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import Box from '@mui/material/Box';
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowDownLeftCircleFill } from "react-icons/bs";

import Stack from '@mui/material/Stack';

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
      <section className=' w-full xl:w-1/3 '>
        <Row_right></Row_right>
      </section>
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

        height={340}

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
          <div className=' *:w-full flex flex-wrap *:flex ms-2 py-2'>
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

function Row_right() {
  const [showTooltip, setShowTooltip] = React.useState(true);



  const handleTooltipChange = (event) => {
    setShowTooltip(event.target.checked);
  };
  return (
    <section className=' w-full '>
      <section className=' w-full flex flex-wrap md:flex-nowrap *:border *:border-[#343e50] text-[#eaeff4] *:shadow-sm *:shadow-[#343e50] *:rounded-md  '>
        <section className=' w-full md:w-1/2 mb-2 md:mb-0 me-0 md:me-3 p-5 '>
          <section>
            <span className=' text-sm text-[#7c8fac]'>Total Earning</span>
          </section>
          <section>
            <span className=' text-xl py-2'>$78,298</span>
          </section>
          <section className=' flex justify-center'>
            <div className=' w-full'>
              <Stack direction="column" sx={{ width: '100%' }}>
                <Stack direction="row" sx={{ width: '100%' }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <SparkLineChart
                      plotType="bar"
                      data={[4, 10, 9, 7, 9, 10, 11, 8, 10]}
                      height={100}
                      showTooltip={showTooltip}
                      colors={['#49beff']}
                    />
                  </Box>
                </Stack>
              </Stack>
            </div>
          </section>
        </section>
        <section className=' w-full md:w-1/2 mt-2 md:mt-0 m3-0 md:ms-3 p-5 *:w-full *:flex flex flex-wrap '>
          <div>
            <span className=' p-3'>
              <RiShoppingBagFill className=' bg-[#4b313d] text-[#fa896b] text-2xl rounded-md  '></RiShoppingBagFill>
            </span>
          </div>
          <span>Sales Profit</span>
          <span>$456,120</span>

          <div className=' flex items-center'>
            <span><BsArrowDownLeftCircleFill className=' text-[#fa896b]'></BsArrowDownLeftCircleFill></span>
            <span className=' ms-2 '>+9%</span>
          </div>
        </section>
      </section>


      <section className='flex *:w-full p-5 flex-wrap w-full mt-3 border-[#343e50] text-[#eaeff4] shadow-sm shadow-[#343e50] rounded-md border   '>
        <section>
          <h6 className=' text-xl py-2'>Monthly Earnings</h6>
        </section>
        <section className='flex '>
          <span className=' text-2xl py-2'>$6,820</span>
          <div className=' flex items-center ms-3'>
            <span><BsArrowDownLeftCircleFill className=' text-[#49beff]'></BsArrowDownLeftCircleFill></span>
            <span className=' ms-2 '>+9%</span>
          </div>
        </section>
        <section>
          <Stack direction="row" className=' w-full'>
            <Box sx={{ flexGrow: 1 }}>
              <SparkLineChart
                data={[25, 66, 20, 40, 12, 58, 20]}
                xAxis={{
                  scaleType: 'time',

                }}
                height={100}
                showTooltip
                colors={['#5d87ff']}
              />
            </Box>

          </Stack>
        </section>
      </section>
    </section>
  )
}