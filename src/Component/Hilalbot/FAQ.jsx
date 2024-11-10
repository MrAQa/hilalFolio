import React from 'react';
import FAQAccordian from '../HelpCenter/FAQAccordian';
import NavBar from '../Navbar';
import Footer from '../Footer,';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const FAQ = () => {
    const goBack = () => {
        window.history.back();
    }
    return (
        
          <div className="rounded-3xl px-4 sm:px-8 py-6 bg-white h-full">
                    <div className='flex justify-between items-center mb-6'>
                       
                        <div
                               
                                className='flex items-center gap-4 cursor-pointer'>
                                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-32">FAQ's</h2>
                            </div>
                    </div>
                    <div className="mt-4 pb-6 overflow-y-auto max-h-full">
                        <FAQAccordian
                            FaqType={'hilalbot'}
                        />
                    </div>
                </div>

        
    );
}

export default FAQ;
