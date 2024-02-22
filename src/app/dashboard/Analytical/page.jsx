import React from 'react'
import Row_one from './row1'

export default function page() {
  return (
    <section className=' bg-[#2a3447] w-full   flex justify-center flex-wrap'>
        <section className=' w-full 2xl:container  xl:mx-20 mx-5 flex flex-wrap'>
            <Row_one></Row_one>
        </section>
    </section>
  )
}


