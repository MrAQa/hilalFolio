import React, { useEffect, useState } from 'react';
import NavBar from '../Component/Navbar';
import Footer from '../Component/Footer,';
import { GetNews } from '../service/service';
import { CircularProgress } from '@mui/material';



const calculateTimeDifference = (inputDate) => {
    console.log(`Input Date Type: ${typeof(inputDate)}`);
    const now = new Date();
    console.log(`Current Date: ${now}`);
  
    // Attempt to convert inputDate to a Date object
    const targetDate = new Date(inputDate);
    if (isNaN(targetDate)) {
      console.error("Invalid date format");
      return "Invalid date format";
    }
  
    const difference = now - targetDate; // Difference in milliseconds
    console.log(`Difference in milliseconds: ${difference}`);
  
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    console.log(`Days: ${days}`);
  
    if (days > 0) {
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else {
      return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    }
  };
  
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
        <div className="min-h-full bg-lightThemebg">
            <NavBar />
            <div className="bg-lightThemebg">
                <section className='pt-6 sm:pt-12'>
                    <div className='2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md mx-auto px-3 lg:px-0'>
                        <div className="rounded-3xl px-4 sm:px-8 py-6 bg-white">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-32  mb-6">
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

                                                    <a href={`${obj?.share_url}`} target="_blank" rel="noopener noreferrer" key={index + '-item'} className='px-3 w-full sm:w-1/2 md:w-1/4'>
                                                        <img
                                                            className='rounded-xl h-[160px] md:h-[180px] w-full object-cover'
                                                            src={obj?.thumb}
                                                            alt="slide" />
                                                        <div className='text-base font-semibold pt-4'>
                                                            {obj?.title}
                                                        </div>

                                                        <div className='text-sm float-left font-normal pt-2 text-[#747474]'>
                                                            {obj?.author} <br/>
                                                            {calculateTimeDifference(obj?.published_at?.date)}
                                                        </div>
                                                        <div className='text-sm  text-right font-normal pt-2 text-[#747474]'>
                                                           Cointelegraph
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
