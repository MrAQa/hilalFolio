import React from 'react'
import SideBar from '../Component/Setting/SideBar'
import NavBar from '../Component/Navbar'
import { ActiveBulletPoint, FadeBulletPoint } from '../assets/custom-icon'
import Footer from '../Component/Footer,'
function SubscriptionPage() {
    const points = ['Manage 1,000+ subscribers', '10 landing pages', 'Customizable domain', '15+ integrations', 'Basic support']
    return (
        <div>
            <NavBar />
            <div className="bg-[#FAFAFA]">
                <section className=''>
                    <div className='2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md mx-auto px-3 lg:px-0'>
                        <div className='flex flex-col md:flex-row gap-6 text-[#0C0F14]'>
                            <div className='lg:w-[390px] pt-10 '>
                                <SideBar />
                            </div>
                            <div className='flex-1 pt-10'>
                                <div className="border-[1px] border-[#D7D9E4] rounded-3xl px-4 sm:px-8 py-6 bg-[#fff] h-full">
                                    <h2 className="text-2xl font-bold tracking-tight text-[#0C0F14] sm:text-32">
                                        My Subscription
                                    </h2>
                                    <p className='text-base pt-2 max-w-[480px] text-[#6F7889]'>
                                        You wouldn't place a tender without first understanding the full scope of work.
                                    </p>
                                    <div className='pt-8 flex  gap-4'>

                                        <div className='border-[1px] border-[#D7D9E4] rounded-2xl p-4 text-[#0F172A] space-y-6 w-1/2 bg-[#f1edf5] max-w-[338px]'>
                                            <h3 className=' text-[28px] font-semibold'>Basic</h3>
                                            <div className='text-lg'>
                                                <strong className='text-[35px] font-bold'>$00/</strong>per Month
                                            </div>
                                            <p className='text-base'>
                                                Dictum aliquet arcu egestas massa sedole tellus sed arcu velit tincidunt.
                                            </p>
                                            <div className='text-base font-semibold'>
                                                What’s included?
                                            </div>
                                            <div className='space-y-6 text-sm font-medium'>
                                                {
                                                    points?.map((item, index) => (
                                                        <p className='flex items-center gap-2' key={index}><span><ActiveBulletPoint /></span>{item}</p>
                                                    ))
                                                }
                                            </div>
                                            <div className='text-sm font-semibold flex flex-col'>
                                            <button type='submit' className='bg-primaryPurple text-white hover:bg-opacity-90 py-3 px-2 rounded-lg disabled:opacity-50 '>Buy Now</button>
                                        </div>
                                        </div>
                                        <div className='border-[1px] border-[#D7D9E4] rounded-2xl p-4 text-[#0F172A] space-y-6 w-1/2 max-w-[338px]'>
                                            <h3 className=' text-[28px] font-semibold'>Premium</h3>
                                            <div className='text-lg'>
                                                <strong className='text-[35px] font-bold'>$00/</strong>per Month
                                            </div>
                                            <p className='text-base'>
                                                Dictum aliquet arcu egestas massa sedole tellus sed arcu velit tincidunt.
                                            </p>
                                            <div className='text-base font-semibold'>
                                                What’s included?
                                            </div>
                                            <div className='space-y-6 text-sm font-medium'>
                                                {
                                                    points?.map((item, index) => (
                                                        <p className='flex items-center gap-2' key={index}><span><FadeBulletPoint /></span>{item}</p>
                                                    ))
                                                }
                                            </div>
                                            <div className='text-sm font-semibold flex flex-col '>
                                                <button type='button' className='text-primaryPurple border-primaryPurple border-[1px] hover:bg-opacity-90 py-3 px-2 rounded-lg disabled:opacity-50 '>Buy Now</button>
                                            </div>
                                        </div>

                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}

export default SubscriptionPage