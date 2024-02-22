import React from 'react'
import Image from 'next/image'
import Img1 from '../../assets/img/1.svg'
import Img2 from '../../assets/img/2.svg'
import Img3 from '../../assets/img/3.svg'
import Img4 from '../../assets/img/4.svg'
import Img5 from '../../assets/img/5.svg'
import Img6 from '../../assets/img/6.svg'

export default function Row_one() {
    return (
        <section className=' w-full'>
            <section className=' *:*:*:py-10 w-full flex *:*:rounded-md  py-4 justify-between *:my-3 flex-wrap  *:rounded-lg *:w-1/2  *:md:w-1/3  *:xl:w-1/6 xl:flex-nowrap  '>
                <section className='  flex justify-center  '>
                    <div className=' w-[90%] bg-[#253662]'>
                        <div className=' w-full flex flex-wrap justify-center *:w-full  '>
                            <figure className=' flex justify-center'>
                                <Image className=' w-[40px]' src={Img3}></Image>

                            </figure>
                            <span className=' flex justify-center'>Employees</span>
                            <span className=' flex justify-center'>96</span>
                        </div>
                    </div>
                </section>
                <section className='  flex justify-center  '>
                    <div className=' w-[90%] bg-[#4d3a2a]'>
                        <div className=' w-full flex flex-wrap justify-center *:w-full'>
                            <figure className=' flex justify-center'>
                                <Image className=' w-[40px]' src={Img2}></Image>

                            </figure>
                            <span className=' flex justify-center'>Clients</span>
                            <span className=' flex justify-center'>3,650</span>
                        </div>
                    </div>
                </section>
                <section className='  flex justify-center  '>
                    <div className=' w-[90%] bg-[#1c455d]'>
                        <div className=' w-full flex flex-wrap justify-center *:w-full'>
                            <figure className=' flex justify-center'>
                                <Image className=' w-[40px]' src={Img4}></Image>

                            </figure>
                            <span className=' flex justify-center'>Projects</span>
                            <span className=' flex justify-center'>356</span>
                        </div>
                    </div>
                </section>
                <section className='  flex justify-center  '>
                    <div className=' w-[90%] bg-[#4b313d] *:text-[#fa896b]'>
                        <div className=' w-full flex flex-wrap justify-center *:w-full'>
                            <figure className=' flex justify-center'>
                                <Image className=' w-[40px]' src={Img1}></Image>

                            </figure>
                            <span className=' flex justify-center'>Events</span>
                            <span className=' flex justify-center'>696</span>
                        </div>
                    </div>
                </section>
                <section className='  flex justify-center  '>
                    <div className=' w-[90%] bg-[#1b3c48]'>
                        <div className=' w-full flex flex-wrap justify-center *:w-full'>
                            <figure className=' flex justify-center'>
                                <Image className=' w-[40px]' src={Img5}></Image>

                            </figure>
                            <span className=' flex justify-center'>Payroll</span>
                            <span className=' flex justify-center'>$96k</span>
                        </div>
                    </div>
                </section>
                <section className='  flex justify-center  '>
                    <div className=' w-[90%] bg-[#1c455d]'>
                        <div className=' w-full flex flex-wrap justify-center *:w-full '>
                            <figure className=' flex justify-center'>
                                <Image className=' w-[40px]' src={Img6}></Image>

                            </figure>
                            <span className=' flex justify-center'>Reports</span>
                            <span className=' flex justify-center'>59</span>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}
