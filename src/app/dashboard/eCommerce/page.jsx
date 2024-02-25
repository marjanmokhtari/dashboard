import React from 'react'
import Row_one from './row1'

export default function page() {
  return (
     <section className=' bg-[#2a3447] w-full   flex justify-center flex-wrap overflow-hidden '>
      <section className=' w-full 2xl:container  xl:mx-20 mx-5 flex flex-wrap overflow-x-hidden'>
          <Row_one />
      </section>
    </section>
  )
}
