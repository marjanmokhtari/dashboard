"use client"
import React from 'react'
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import Stack from '@mui/material/Stack';
import { CgMenuGridO } from "react-icons/cg";

export default function row3() {
  return (
    <section className=' w-full '>
      <section className=' w-full flex xl:flex-nowrap flex-wrap '>
        <section className='  xl:w-1/3 w-full border border-[#343e50] shadow-sm shadow-[#343e50] rounded-md  my-2 *:my-0 xl:me-2'>
          <Weekly_Stats></Weekly_Stats>
        </section>
        <section className='  xl:w-1/3 w-full border border-red-900 my-2 *:my-0 xl:mx-2'>das</section>
        <section className='  xl:w-1/3 w-full border border-red-500 my-2 *:my-0'>hg</section>
      </section>
    </section>
  )
}


function Weekly_Stats() {
  return (
    <section className=' w-full p-5'>
      <section>
        <h6 className='text-[#5d87ff]'>Weekly Stats</h6>
        <span className=' text-sm'>Average sales</span>
      </section>
      <section className=' py-3'>
        <Stack direction="row" className=' w-full'>
          <Box sx={{ flexGrow: 1 }}>
            <SparkLineChart
              data={[5, 15, 5, 10, 5]}
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
      <section className=' py-2 *:my-2' >
        <section className=' flex justify-between'>
          <div className=' flex items-center'>
            <span>
              <CgMenuGridO className=' text-3xl bg-[#253662] rounded-md '></CgMenuGridO>
            </span>
            <div className=' flex flex-wrap *:flex *:w-full me-2'>
              <span className=' text-[#5d87ff]'>Top Sales</span>
              <span className=' text-sm text-[#7c8fac]'>Johnathan Doe</span>
            </div>
          </div>
          <div className=' flex items-center'>
            <span className=' bg-[#253662] rounded-md ' >+68</span>
          </div>
        </section>

        <section className=' flex justify-between'>
          <div className=' flex items-center'>
            <span>
              <CgMenuGridO className=' text-3xl bg-[#1b3c48] rounded-md'></CgMenuGridO>
            </span>
            <div className=' flex flex-wrap *:flex *:w-full me-2'>
              <span className=' text-[#5d87ff]'>Best Seller</span>
              <span className=' text-sm text-[#7c8fac]'>Footware</span>
            </div>
          </div>
          <div className=' flex items-center '>
            <span className=' bg-[#1b3c48] rounded-md '>+45</span>
          </div>
        </section>
        <section className=' flex justify-between'>
          <div className=' flex items-center'>
            <span>
              <CgMenuGridO className=' text-3xl bg-[#4b313d] rounded-md'></CgMenuGridO>
            </span>
            <div className=' flex flex-wrap *:flex *:w-full me-2'>
              <span className=' text-[#5d87ff]'>Most Commented</span>
              <span className=' text-sm text-[#7c8fac]'>Fashionware</span>
            </div>
          </div>
          <div className=' flex items-center'>
            <span className=' bg-[#4b313d] rounded-md '>+35</span>
          </div>
        </section>
      </section>
    </section>
  )
}