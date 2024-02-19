"use client"
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// add mui componet 
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



// import img 
import Image from 'next/image';
import Logo from './assets/img/logo.svg'
import Bg from './assets/img/bg.svg'
import Google from './assets/img/google.svg'
import Facbook from './assets/img/facbook.svg'

export default function Page() {
  return (
    <main className='w-full  flex flex-wrap min-h-[100vh]'>
      <section className='xl:w-[60%] w-full'>
        <Left_sec></Left_sec>
      </section>
      <section className='xl:w-[40%] w-full bg-[#2a3447]'>
        <Right_sec></Right_sec>
      </section>
    </main>
  );
}


function Left_sec() {

  return (
    <section className=' w-full bg-[#323b4f] py-7'>
      <figure className='px-10'>
        <Image src={Logo}></Image>
      </figure>
      <section className=' w-full xl:flex justify-center content-center items-center py-24 hidden '>
        <figure className=' max-w-[500px]'>
          <Image src={Bg}></Image>
        </figure>
      </section>
    </section>
  )
}
function Right_sec() {
  const [myuser, setMyuser] = useState({ name: 'admin', password: 'admin' })
  const [username, setUsername] = useState()
  const [pass, setPaas] = useState()
  const router = useRouter()


  const check_user = () => {

    if (username === myuser.name && pass === myuser.password) {
      router.push('/dashboard')
    } else {
      alert(`Pleas Enter\nuser: admin\npassword: admin`)
    }
  }


  return (
    <section className=' w-full   flex flex-wrap '>
      <section className='w-full flex flex-wrap justify-center  *:flex   pt-14  '>
        <section className='w-3/4 md:w-1/2 lg:w-1/3 xl:w-[80%] justify-center *:justify-center *:flex  *:flex-wrap   flex flex-wrap'>
          <h6 className='md:text-3xl text-xl text-[#eaeff4] w-full'>Welcome to Modernize</h6>
          <p className='text-[#7c8fac]'>Your Admin Dashboard</p>
          <div className=' w-full flex *:flex *:items-center mt-6'>
            <div className=' w-[100%] flex *:mx-2 items-center flex-wrap md:flex-nowrap  '>
              <button className='my-2  md:w-1/2  ms-0 border rounded-md w-full  flex  justify-center items-center'>
                <Image className='w-[16px] mx-[8px]' src={Google}></Image>
                <p className=' p-1'>sign in with google</p>
              </button>
              <button className='my-2  md:w-1/2  ms-0 border rounded-md w-full  flex justify-center items-center'>
                <Image className='w-[40px] ' src={Facbook}></Image>
                <p className=' p-1'>sign in with FB</p>
              </button>
            </div>
          </div>
          <div className=' w-full flex flex-wrap items-center *:px-3  '>
            <div className='w-[50px] md:w-[100px] h-[1px] bg-[#7c8fac]'></div>
            <span className='text-[#eaeff4] my-2 text-sm'>or sign in with</span>
            <div className='w-[50px] md:w-[100px] h-[1px] bg-[#7c8fac]'></div>
          </div>


          {/* ************************ */}
          <section className='flex flex-wrap w-full '>
            <div className=' w-full  *:w-full bg-[#2a3447] mt-5 '>
              <label htmlFor="Username" className='text-[#7c8fac] leading-10'>Username</label>
              <div className='border border-[#465670] rounded-md bg-[#2a3447]   '>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id='Username' placeholder='admin' className='custom_inp py-3 rounded-md focus:bg-[#2a3447]  w-[30%] bg-[#2a3447] outline-none px-2 ' />
              </div>
            </div>
            <div className='w-full  *:w-full bg-[#2a3447] mt-5 '>
              <label htmlFor="Pass" className='text-[#7c8fac] leading-10'>PassWord</label>
              <div className='border border-[#465670] rounded-md bg-[#2a3447]   '>
                <input value={pass} onChange={(e) => setPaas(e.target.value)} type="text" id='Pass' placeholder='admin' className='custom_inp py-3 rounded-md focus:bg-[#2a3447]  w-[30%] bg-[#2a3447] outline-none px-2 ' />
              </div>
            </div>
            <div className=' w-full  *:text-sm lg:text-xl my-8 flex items-center justify-between'>
              <div className=' w-[60%] flex items-center *:cursor-pointer'>
                <Checkbox {...label} />
                <p>Remember this Device</p>
              </div>
              <span className=' w-[40%] flex justify-end text-[#5d87ff] cursor-pointer'>
                Forgot Password ?
              </span>
            </div>
            <div className=' w-full '>
              <span onClick={check_user} className=' w-full flex justify-center bg-[#444d5d] rounded-md py-2'>sign in</span>
            </div>
            <div className=' w-full  *:cursor-pointer flex justify-start *:text-sm my-8'>
              <span>New to Modernize?</span>
              <span className='text-[#5d87ff]'>Create an account</span>
            </div>
          </section>
        </section>
      </section>
    </section>

  )
}