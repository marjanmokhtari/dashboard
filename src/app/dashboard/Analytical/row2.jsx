"use client"
import React from 'react'
import { useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import './mystyle.css'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
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
                <section className='  w-full xl:w-4/6 border border-[#343e50] shadow-md shadow-[#343e50] rounded-md flex justify-center overflow-hidden '>
                    <section className=' w-[100%] overflow-hidden flex flex-wrap '>
                        <section className=' w-full md:w-[70%] *:text-[#fff] overflow-hidden *:w-[100%]  *:h-[400px] *:object-cover'>
                            <Mychart></Mychart>

                        </section>
                        <section className=' w-full md:w-[30%]'>
                            <Right_sec_chart></Right_sec_chart>
                        </section>
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

function Right_sec_chart() {
    const [selected, setSelected] = useState(people[1])

    return (
        <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="relative mt-2">
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-transparent py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
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
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {people.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      className={({ active }) =>
                        classNames(
                          active ? 'bg-indigo-600 text-white' : 'text-gray-900',
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