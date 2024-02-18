"use client"
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';




// import img 
import Image from 'next/image';
import Logo from './assets/img/logo.svg'
import Bg from './assets/img/bg.svg'
import Google from './assets/img/google.svg'
import Facbook from './assets/img/facbook.svg'

export default function Page() {
  // const [admin,setAdmin] = useState({ name: "admin", password: "admin" });
  // const [nameuser, setNameuser] = useState('');
  // const [pass, setPass] = useState('');
  // const router = useRouter();

  // const Checkpas = () => {
  //   if (nameuser === admin.name && pass === admin.password) {
  //     router.push('/dashboard');
  //   } else {
  //     alert('Incorrect username or password');
  //   }
  // };

  return (
    <main className='w-full  flex flex-wrap '>
      {/* <input type="text" placeholder='enter name' value={nameuser} onChange={(e) => setNameuser(e.target.value)} />
      <input type="text" placeholder='enter pass' value={pass} onChange={(e) => setPass(e.target.value)} />
      <button onClick={Checkpas}>click</button> */}
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
    <section className=' w-full bg-[#323b4f]'>
      <figure className='px-10  py-5'>
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
  return (
    <section className=' w-full   flex flex-wrap '>
      <section className='w-full flex flex-wrap justify-center  *:flex   pt-14  '>
        <section className='w-3/4 md:w-1/2 lg:w-1/3 xl:w-[80%] justify-center *:justify-center *:flex  *:flex-wrap   flex flex-wrap'>
          <h6 className='text-3xl text-[#eaeff4] w-full'>Welcome to Modernize</h6>
          <p className='text-[#7c8fac]'>Your Admin Dashboard</p>
          <div className=' w-full  md:px-0 flex *:flex  *:items-center mt-6'>
            <button className='my-2 mx-2  ms-0 border rounded-md w-full md:w-[200px] flex justify-center'>
              <Image className='w-[16px] mx-[8px]' src={Google}></Image>
              <p className=' p-1'>sign in with google</p>
            </button>
            <button className='my-2 mx-2  ms-0 border rounded-md w-full md:w-[200px] flex justify-center'>
              <Image className='w-[40px] ' src={Facbook}></Image>
              <p className=' p-1'>sign in with FB</p>
            </button>
          </div>
          <div className=' w-full flex flex-wrap items-center *:px-3  '>
            <div className='w-[100px] h-[1px] bg-[#7c8fac]'></div>
            <span className='text-[#eaeff4] my-2'>or sign in with</span>
            <div className='w-[100px] h-[1px] bg-[#7c8fac]'></div>
          </div>


          {/* ************************ */}
          <section className='flex flex-wrap '>
            <div className=' w-full  *:w-full bg-[#2a3447] mt-5 '>
              <label htmlFor="Username" className='text-[#7c8fac] leading-10'>Username</label>
              <div className='border border-[#465670] rounded-md bg-[#2a3447]   '>
                <input type="text" id='Username' className='custom_inp py-3 rounded-md focus:bg-[#2a3447]  w-[30%] bg-[#2a3447] outline-none px-2 ' />
              </div>
            </div>
            <div className='w-full  *:w-full bg-[#2a3447] mt-5 '>
              <label htmlFor="Pass" className='text-[#7c8fac] leading-10'>PassWord</label>
              <div className='border border-[#465670] rounded-md bg-[#2a3447]   '>
                <input type="text" id='Pass' className='custom_inp py-3 rounded-md focus:bg-[#2a3447]  w-[30%] bg-[#2a3447] outline-none px-2 ' />
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </section>
        </section>
      </section>
  </section>
 
  )
}