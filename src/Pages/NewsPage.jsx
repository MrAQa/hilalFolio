import React, { useEffect, useState } from 'react';
import NavBar from '../Component/Navbar';
import Footer from '../Component/Footer,';
import { GetNews } from '../service/service';
import { CircularProgress } from '@mui/material';

const NewsPage = () => {

    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        GetNews().then((res) => {
            if (res.success) {
                setIsLoading(false)
                setNews(res.body?.news);
            }
        }).catch((err) => console.log(err))
    }, []);
    return (
        <div className="min-h-full bg-[#F2F2F2]">
            <NavBar />
            <div className="bg-[#F2F2F2]">
                <section className='pt-6 sm:pt-12'>
                    <div className='2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md mx-auto px-3 lg:px-0'>
                        <div className="border-[2px] border-[#D7D9E4] rounded-3xl px-4 sm:px-8 py-6 bg-white">
                            <h2 className="text-2xl font-bold tracking-tight text-[#0C0F14] sm:text-32  mb-6">
                                Latest News
                            </h2>

                            <div className="py-6">
                                {
                                    isLoading ?
                                        <div className='w-full flex justify-center'>
                                            <CircularProgress size={40} color='primary' />
                                        </div>
                                        :
                                        <div className='flex flex-wrap gap-y-8'>
                                            {
                                                news?.map((obj, index) => (

                                                    <a href={`${obj?.url}`} target="_blank" rel="noopener noreferrer" key={index + '-item'} className='px-3 w-full sm:w-1/2 md:w-1/3'>
                                                        <img
                                                            className='rounded-xl h-[160px] md:h-[180px] w-full object-cover'
                                                            src={obj?.thumb}
                                                            alt="slide" />
                                                        <div className='text-base font-semibold pt-4'>
                                                            {obj?.title}
                                                        </div>
                                                        <div className='text-sm font-normal pt-2 text-[#747474]'>
                                                            {obj?.author}
                                                        </div>
                                                    </a>
                                                ))
                                            }
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default NewsPage;
