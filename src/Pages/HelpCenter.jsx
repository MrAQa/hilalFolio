import React from 'react'
import NavBar from '../Component/Navbar'
import SideBar from '../Component/Setting/SideBar'
import { BellIcon, DeleteIcon, LockIcon, RightArrowDark } from '../assets/custom-icon';
import ChangePassword from '../Component/Setting/ChangePassword';
import Footer from '../Component/Footer,';
import FAQAccordian from '../Component/HelpCenter/FAQAccordian';
function HelpCenter() {

    return (
        <div>
            <NavBar />
            <div className="bg-container1">
                <section className=''>
                    <div className='2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md mx-auto px-3 lg:px-0'>
                        <div className='flex flex-col md:flex-row gap-6 text-gray-900'>
                            <div className='lg:w-[390px] pt-10 '>
                                <SideBar />
                            </div>
                            <div className='flex-1 pt-10'>
                                
                                        <div className="rounded-3xl px-4 sm:px-8 py-6 bg-white">
                                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-32">
                                                FAQ's
                                            </h2>
                                           <FAQAccordian
                                           FaqType={'hilalfolio'}
                                           />


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

export default HelpCenter