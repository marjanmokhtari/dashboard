"use client"
import React from 'react'
import Image from 'next/image'
import S6 from '../../assets/img/s6.jpg'
import S4 from '../../assets/img/s4.jpg'
import S7 from '../../assets/img/s7.jpg'
import S9 from '../../assets/img/s9.jpg'



export default function Row_four() {
    return (
        <section className=' w-full   my-5 flex mx-1 flex-wrap xl:flex-nowrap  '>
            <section className=' w-full xl:w-1/3  xl:me-2 mb-3 xl:mb-0'>
                <Recent_Transactions></Recent_Transactions>
            </section>
            <section className=' w-full xl:w-2/3  xl:ms-2 mt-3 xl:mt-0'>

                <Top_Projects></Top_Projects>
            </section>
        </section>
    )
}


function Recent_Transactions() {
    return (
        <section className=' w-full p-5 *:w-full text-[#eaeff4] border border-[#343e50] shadow-sm shadow-[#343e50] rounded-md '>
            <section>
                <h6>Recent Transactions</h6>
            </section>
            <section>
                <div className=' flex pt-3 '>
                    <span className='text-sm'>09.30 am</span>
                    <div className=' flex flex-wrap mx-5 '>
                        <div className=' w-[12px] h-[12px]   border border-[#5276da] rounded-full '></div>
                        <div className=' w-full flex justify-center'>
                            <div className=' w-[1px] h-[40px] bg-[#333f55] rounded-md my-1  '></div>
                        </div>
                    </div>
                    <div className=' *:text-sm'>
                        <p>Payment received from</p>
                        <p className='text-[#5d87ff] text-sm'>John Doe of $385.90</p>
                    </div>
                </div>
                <div className=' flex  '>
                    <span className='text-sm'>10.30 am</span>
                    <div className=' flex flex-wrap mx-5 '>
                        <div className=' w-[12px] h-[12px]   border border-[#42a2da] rounded-full '></div>
                        <div className=' w-full flex justify-center'>
                            <div className=' w-[1px] h-[50px] bg-[#333f55] rounded-md my-1  '></div>
                        </div>
                    </div>
                    <div className=' *:text-sm'>
                        <p>New sale recorded</p>
                        <p className='text-[#5d87ff] text-sm'>#ML-3467</p>
                    </div>
                </div>
                <div className=' flex '>
                    <span className='text-sm'>12.30 am</span>
                    <div className=' flex flex-wrap mx-5 '>
                        <div className=' w-[12px] h-[12px]   border border-[#14dab7] rounded-full '></div>
                        <div className=' w-full flex justify-center'>
                            <div className=' w-[1px] h-[40px] bg-[#333f55] rounded-md my-1  '></div>
                        </div>
                    </div>
                    <div className=' *:text-sm'>
                        <p>Payment was made of</p>
                        <p>$64.95 to Michael</p>
                    </div>
                </div>
                <div className=' flex  '>
                    <span className='text-sm'>12.30 am</span>
                    <div className=' flex flex-wrap mx-5 '>
                        <div className=' w-[12px] h-[12px]   border border-[#ffae1f] rounded-full '></div>
                        <div className=' w-full flex justify-center'>
                            <div className=' w-[1px] h-[50px] bg-[#333f55] rounded-md my-1  '></div>
                        </div>
                    </div>
                    <div className=' *:text-sm'>
                        <p>New sale recorded</p>
                        <p className='text-[#5d87ff] text-sm'>#ML-3467</p>
                    </div>
                </div>
                <div className=' flex '>
                    <span className='text-sm'>12.30 am</span>
                    <div className=' flex flex-wrap mx-5 '>
                        <div className=' w-[12px] h-[12px]   border border-[#fa896b] rounded-full '></div>
                        <div className=' w-full flex justify-center'>
                            <div className=' w-[1px] h-[40px] bg-[#333f55] rounded-md my-1  '></div>
                        </div>
                    </div>
                    <div className=' *:text-sm'>
                        <p>New arrival recorded</p>
                        <p className='text-[#5d87ff] text-sm'>#ML-3467</p>
                    </div>
                </div>
                <div className=' flex  '>
                    <span className='text-sm'>12.30 am</span>
                    <div className=' flex flex-wrap mx-5 '>
                        <div className=' w-[12px] h-[12px]   border border-[#5276da] rounded-full '></div>
                        <div className=' w-full flex justify-center'>
                            <div className=' w-[1px] h-[50px] bg-[#333f55] rounded-md my-1  '></div>
                        </div>
                    </div>
                    <div className=' *:text-sm'>
                        <p>Payment Done</p>

                    </div>
                </div>


            </section>
        </section>
    )
}


function Top_Projects() {
    return (
        <section className=' w-full border border-[#343e50] shadow-sm shadow-[#343e50] rounded-md'>
            <section className=' w-full p-5 *:w-full'>
                <section className=' flex justify-between'>
                    <section>
                        <h6 className=' text-[#eaeff4]'>Top Projects</h6>
                        <span className=' text-sm text-[#7c8fac]'>Best Products</span>
                    </section>
        
                </section>


                <section className=''>
                    <section className=' *:my-4'> 
                        <section className=' flex   justify-between *:text-sm text-[#eaeff4]'>
                            <div className=' w-[40%]'>
                                <span>product</span>
                            </div>
                            <div className=' w-[20%]'>
                                <span>prgrees</span>
                            </div>
                            <div className=' w-[20%]'>
                                <span>status</span>
                            </div>
                            <div className=' w-[20%]'>
                                <span>Sales</span>
                            </div>
                        </section>

                        <section className=' flex  justify-between capitalize py-2'>
                            <div className=' w-[40%]'> 
                                <div className=' flex items-center'>
                                    <figure>
                                        <Image className=' w-[50px] rounded-md ' src={S6} alt="" />
                                    </figure>
                                    <div className=' flex flex-wrap *:w-full ps-2'>
                                        <span className=' text-sm text-[#eaeff4]'>Gaming Console</span>
                                        <span className=' text-xs text-[#7c8fac]'>Leather Purse</span>
                                    </div>
                                </div>
                            </div>
                            <div className=' w-[20%] flex items-center text-sm'>
                                <span className='text-[#7c8fac]'>78%</span>
                            </div>
                             <div  className=' w-[20%] flex items-center text-sm'>
                                <span className='text-[#7c8fac]'>low</span>
                            </div>
                            <div  className=' w-[20%] flex items-center text-sm' >
                                <span className='text-[#7c8fac]'>$3.9k</span>
                            </div>
                        </section>
                        <section className=' flex  justify-between capitalize py-2'>
                            <div className=' w-[40%]'> 
                                <div className=' flex items-center'>
                                    <figure>
                                        <Image className=' w-[50px] rounded-md ' src={S9} alt="" />
                                    </figure>
                                    <div className=' flex flex-wrap *:w-full ps-2'>
                                        <span className=' text-sm text-[#eaeff4]'>Headphone Boat</span>
                                        <span className=' text-xs text-[#7c8fac]'>Fashion</span>
                                    </div>
                                </div>
                            </div>
                            <div className=' w-[20%] flex items-center text-sm'>
                                <span className='text-[#7c8fac]'>78%</span>
                            </div>
                             <div  className=' w-[20%] flex items-center text-sm'>
                                <span className='text-[#7c8fac]'>medium</span>
                            </div>
                            <div  className=' w-[20%] flex items-center text-sm' >
                                <span className='text-[#7c8fac]'>$3.9k</span>
                            </div>
                        </section>
                        <section className=' flex  justify-between capitalize py-2'>
                            <div className=' w-[40%]'> 
                                <div className=' flex items-center'>
                                    <figure>
                                        <Image className=' w-[50px] rounded-md ' src={S7} alt="" />
                                    </figure>
                                    <div className=' flex flex-wrap *:w-full ps-2'>
                                        <span className=' text-sm text-[#eaeff4]'>Red Velvate Dress</span>
                                        <span className=' text-xs text-[#7c8fac]'>Womens Fashion</span>
                                    </div>
                                </div>
                            </div>
                            <div className=' w-[20%] flex items-center text-sm'>
                                <span className='text-[#7c8fac]'>78%</span>
                            </div>
                             <div  className=' w-[20%] flex items-center text-sm'>
                                <span className='text-[#7c8fac]'>high</span>
                            </div>
                            <div  className=' w-[20%] flex items-center text-sm' >
                                <span className='text-[#7c8fac]'>$3.9k</span>
                            </div>
                        </section>
                        <section className=' flex  justify-between capitalize py-2'>
                            <div className=' w-[40%]'> 
                                <div className=' flex items-center'>
                                    <figure>
                                        <Image className=' w-[50px] rounded-md ' src={S4} alt="" />
                                    </figure>
                                    <div className=' flex flex-wrap *:w-full ps-2'>
                                        <span className=' text-sm text-[#eaeff4]'>Leather Purse</span>
                                        <span className=' text-xs text-[#7c8fac]'>Electronics</span>
                                    </div>
                                </div>
                            </div>
                            <div className=' w-[20%] flex items-center text-sm'>
                                <span className='text-[#7c8fac]'>78%</span>
                            </div>
                             <div  className=' w-[20%] flex items-center text-sm'>
                                <span className='text-[#7c8fac]'>Critical</span>
                            </div>
                            <div  className=' w-[20%] flex items-center text-sm' >
                                <span className='text-[#7c8fac]'>$3.9k</span>
                            </div>
                        </section>

                       
                    </section>
                </section>
            </section>

        </section>
    )
}

