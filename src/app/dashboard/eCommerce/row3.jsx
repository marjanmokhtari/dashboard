"use client"
import React from 'react'
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import Stack from '@mui/material/Stack';
import { CgMenuGridO } from "react-icons/cg";
import { BarChart } from '@mui/x-charts/BarChart';
import Image from 'next/image';
import paysvg from '../../assets/img/paypal.svg'
import card from '../../assets/img/card.svg'
import bag from '../../assets/img/bag.svg'
import pie from '../../assets/img/pie.svg'

export default function row3() {
  return (
    <section className=' w-full '>
      <section className=' w-full flex xl:flex-nowrap flex-wrap '>
        <section className='  xl:w-1/3 w-full border border-[#343e50] shadow-sm shadow-[#343e50] rounded-md  my-2 *:my-0 xl:me-2'>
          <Weekly_Stats></Weekly_Stats>
        </section>
        <section className='  xl:w-1/3 w-full border border-[#343e50] shadow-sm shadow-[#343e50] rounded-md my-2 *:my-0 xl:mx-2'>
          <Every_month></Every_month>
        </section>
        <section className='  xl:w-1/3 w-full  my-2 *:my-0 border border-[#343e50] shadow-sm shadow-[#343e50] rounded-md my'>
          <Payment></Payment>
        </section>
      </section>
    </section>
  )
}


function Weekly_Stats() {
  return (
    <section className=' w-full p-5'>
      <section>
        <h6 className=' text-[#eaeff4] text-lg'>Weekly Stats</h6>
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
            <div className=' flex flex-wrap *:flex *:w-full ms-2'>
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
            <div className=' flex flex-wrap *:flex *:w-full ms-2'>
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
            <div className=' flex flex-wrap *:flex *:w-full ms-2'>
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


function Every_month() {
  return (
    <section className=' w-full p-5'>
      <section>
        <h6 className=' text-[#eaeff4] text-lg'>Yearly Sales</h6>
        <span className=' text-[#7c8fac] text-sm'>Every month</span>
      </section>
      <section className=' w-full'>
        <BarChart
          xAxis={[{ scaleType: 'band', data: ['Apr', 'May', 'June', 'July', 'Aug', 'Sept'] }]}
          series={[{ data: [20, 15, 30, 25, 15, 10] }]}
          height={300}
          colors={['#557be4']}
        />
      </section>
    </section>
  )
}


function Payment() {
  return (
    <section className=' w-full p-5'>
      <section>
        <h6 className=' text-[#eaeff4] text-lg'>Payment Gateways</h6>
        <h6 className=' text-sm  text-[#7c8fac] '>Platform For Income</h6>
      </section>


      <section className=' pt-5 *:my-2'>
        <section className=' flex justify-between'>
          <section className=' flex'>
            <Image src={paysvg}></Image>
            <div className=' flex flex-wrap *:w-full ps-3'>
              <span>Paypal</span>
              <span>Bill payment</span>
            </div>
          </section>
          <section className=' flex items-center'>
            <span>+$6235</span>
          </section>
        </section>
        <section className=' flex justify-between'>
          <section className=' flex'>
            <Image src={bag}></Image>
            <div className=' flex flex-wrap *:w-full ps-3'>
              <span>Paypal</span>
              <span>Bill payment</span>
            </div>
          </section>
          <section className=' flex items-center'>
            <span>+$6235</span>
          </section>
        </section>
        <section className=' flex justify-between'>
          <section className=' flex'>
            <Image src={card}></Image>
            <div className=' flex flex-wrap *:w-full ps-3'>
              <span>Paypal</span>
              <span>Bill payment</span>
            </div>
          </section>
          <section className=' flex items-center'>
            <span>+$6235</span>
          </section>
        </section>
        <section className=' flex justify-between'>
          <section className=' flex'>
            <Image src={pie}></Image>
            <div className=' flex flex-wrap *:w-full ps-3'>
              <span>Paypal</span>
              <span>Bill payment</span>
            </div>
          </section>
          <section className=' flex items-center'>
            <span>+$6235</span>
          </section>
        </section>

      </section>


      <section className=' py-2'>
        <section className=' flex justify-center *:flex my-2 border border-[#5d87ff] rounded-md'>
          <span className=' py-1 text-[#5d87ff] capitalize'>view all transctions</span>
        </section>
      </section>
    </section>
  )
}