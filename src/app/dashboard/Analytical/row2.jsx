"use client"
import React from 'react'
import { useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import './mystyle.css'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import { PieChart } from '@mui/x-charts/PieChart';
import { HiMiniCurrencyDollar } from "react-icons/hi2";


const data = [
  { label: 'Group A', value: 35 },
  { label: 'Group B', value: 75 }
];


const people = [
  {
    id: 1,
    name: 'Aprill 2023'
  },
  {
    id: 2,
    name: 'March 2023',
  },
  {
    id: 3,
    name: 'June 2023',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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
        <section className='  w-full xl:w-4/6 border border-[#343e50] shadow-sm shadow-[#343e50] rounded-md flex justify-center overflow-hidden '>
          <section className=' w-[100%] overflow-hidden flex flex-wrap '>
            <section className=' mt-2  w-full md:w-[70%] *:text-[#fff] overflow-hidden *:w-[100%]  *:h-[400px] *:object-cover'>
              <Mychart></Mychart>

            </section>
            <section className=' w-full md:w-[30%] mt-2'>
              <div className=' w-full flex flex-wrap *:w-full'>
                <div className=' '>
                  <div className=' w-[100px] *:px-5 '>
                    <Select_box></Select_box>
                  </div>
                </div>
                <div className="w-full *:px-5">
                  <Data_chart_right></Data_chart_right>
                </div>

              </div>
            </section>
          </section>
        </section>
        <section className=' w-full flex flex-wrap  md:flex-nowrap xl:flex-wrap xl:w-2/6 mt-5 xl:mt-0 *:rounded-md *:border  *:border-[#343e50] *:shadow-sm *:shadow-[#343e50] '>
          <section className='my-3 xl:my-0 xl:me-0 w-full md:w-1/2 xl:w-full  md:me-2 xl:mb-2 '>
            <Yearly_Breakup></Yearly_Breakup>
          </section>
          <section className='my-3 xl:my-0 xl:ms-0  w-full md:w-1/2 xl:w-full md:ms-2 xl:mt-2 '>
            <Monthly_Earnings></Monthly_Earnings>
          </section>
        </section>


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

function Select_box() {
  const [selected, setSelected] = useState(people[1])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mt-2 w-[200px]">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-transparent py-1.5 pl-3 pr-10 text-left text-[#cfd1d5] shadow-sm ring-1 ring-inset ring-[#343e50] focus:outline-none focus:ring-2 focus:ring-[#343e50] sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}

              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className=" px-5 absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-[#2a3447] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-[#cfd1d5]',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}



function Data_chart_right() {
  return (
    <div className=' w-full  my-5 *:w-full  '>
      <div className=' *:w-full flex flex-wrap'>
        <span className=' text-2xl text-[#eaeff4] font-semibold'>$63,489.50</span>
        <span className=' text-[#7c8fac] text-sm'>Total Earnings</span>
      </div>


      <div className=' w-full flex flex-wrap *:w-full my-5  '>
        <div className=' flex items-center  '>
          <span className=' w-2 h-2 bg-[#557be3] flex items-center rounded-full me-1'></span>
          <span className=' text-sm text-[#7c8fac]' >Earnings this month</span>
        </div>
        <div>
          <span className=' mx-2 text-[#eaeff4] '>
            $48,820
          </span>
        </div>
      </div>

      <div className=' w-full flex flex-wrap *:w-full my-5  '>
        <div className=' flex items-center  '>
          <span className=' w-2 h-2 bg-[#44aae4] flex items-center rounded-full me-1'></span>
          <span className=' text-sm text-[#7c8fac]' >Expense this month</span>
        </div>
        <div>
          <span className=' mx-2 text-[#eaeff4] '>
            $26,498
          </span>
        </div>
      </div>


      <div className=' w-full *:w-full'>
        <span className=' capitalize bg-[#5d87ff] text-white flex justify-center rounded-md py-1'>view full report</span>
      </div>
    </div>
  )
}




function Yearly_Breakup() {
  return (
    <section className=' w-full *:w-full flex flex-wrap p-5 '>
      <div>
        <span className=' text-[#eaeff4]'>Yearly Breakup</span>
      </div>
      <div className=' flex items-center '>
        <div className=' flex flex-wrap'>
          <span className=' w-full text-xl text-[#eaeff4]'>$36,358</span>
          <span className=' w-full text-sm text-[#7c8fac]'>+9% last year</span>
        </div>
        <div >
          <Circle_chart></Circle_chart>
        </div>
      </div>
      <div >
        <div className=' flex items-center  '>
          <span className=' w-2 h-2 bg-[#5d87ff] flex items-center rounded-full me-1'></span>
          <span className=' text-sm text-[#7c8fac]' >2023</span>
        </div>
        <div className=' flex items-center  '>
          <span className=' w-2 h-2 bg-[#fff] flex items-center rounded-full me-1'></span>
          <span className=' text-sm text-[#7c8fac]' >2022</span>
        </div>
      </div>
    </section>
  )
}

function Circle_chart() {

  return (
    <section className=' w-[100px] cursor-pointer'>
      <Stack direction="row" className='  p-0 m-0'>
        <PieChart
          series={[
            {
              innerRadius: 60,
              outerRadius: 50,
              data,

            },

          ]}
          margin={{ right: 5 }}
          width={130}
          height={120}
          legend={{ hidden: true }}
          colors={['#5d87ff', '#fff']}
          tooltip={false}
        />

      </Stack>
    </section>
  )
}

function Monthly_Earnings() {
  return (
    <section className=' w-full  p-5 flex flex-wrap *:w-full'>
      <div className='  '>
        <div className=' w-full flex justify-between items-center'>
          <span className='text-[#eaeff4]'>Monthly Earnings</span>
          <HiMiniCurrencyDollar className=' text-[#44b7f7] text-5xl'></HiMiniCurrencyDollar>
        </div>
        <div className=' *:w-full flex flex-wrap '>
          <span className=' font-semibold text-left text-2xl text-[#eaeff4]'>$6,820</span>
          <span className=' text-xs text-[#7c8fac] my-2'>+9% last year</span>
        </div>

      </div>

      <div></div>
    </section>
  )
}