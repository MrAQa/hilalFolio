import React from 'react';
import FAQAccordian from '../HelpCenter/FAQAccordian';
import NavBar from '../Navbar';
import Footer from '../Footer,';

const FAQ = () => {
    return (
        <div className="min-h-full bg-lightThemebg">
        <NavBar />
          <div className="bg-lightThemebg">
          <section className='pt-6 sm:pt-12'>
            <div className='2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md mx-auto px-3 lg:px-0'>
                <div className="rounded-3xl px-4 sm:px-8 py-6 bg-white">
                    <div className='flex justify-between items-center mb-6'>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-32">
                            FAQ's
                        </h2>

                    </div>
                    <div className="py-6">
                        <FAQAccordian
                            FaqType={'hilalbot'}
                        />
                    </div>
                </div>
            </div>
        </section>
          </div>
          <Footer/>
      </div>

        
    );
}

export default FAQ;
