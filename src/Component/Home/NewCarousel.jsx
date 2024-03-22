import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NewCarousel = () => {
    const settings = {
        autoplay: true, 
        autoplaySpeed: 2500, 
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            <div className='md:px-3'>
                <img
                    className='rounded-xl h-[160px] md:h-[180px] w-full object-cover'
                    src="https://picsum.photos/200"
                     alt="slide" />
                <div className='text-base font-semibold pt-4'>
                    Bitcoin Token ORDI Surges to New High, Top 50 Coins
                </div>
                <div className='text-sm font-normal pt-2 text-[#747474]'>
                    12m ago • The Block
                </div>
            </div>
            <div className='md:px-3'>
                <img
                    className='rounded-xl h-[160px] md:h-[180px] w-full object-cover'
                    src="https://picsum.photos/200"
                    alt="slide" />
                <div className='text-base font-semibold pt-4'>
                    Bitcoin Token ORDI Surges to New High, Top 50 Coins
                </div>
                <div className='text-sm font-normal pt-2 text-[#747474]'>
                    12m ago • The Block
                </div>
            </div>
            <div className='md:px-3'>
                <img
                    className='rounded-xl h-[160px] md:h-[180px] w-full object-cover'
                    src="https://picsum.photos/200"
                     alt="slide" />
                <div className='text-base font-semibold pt-4'>
                    Bitcoin Token ORDI Surges to New High, Top 50 Coins
                </div>
                <div className='text-sm font-normal pt-2 text-[#747474]'>
                    12m ago • The Block
                </div>
            </div>
            <div className='md:px-3'>
                <img
                    className='rounded-xl h-[160px] md:h-[180px] w-full object-cover'
                    src="https://picsum.photos/200"
                    alt="slide" />
                <div className='text-base font-semibold pt-4'>
                    Bitcoin Token ORDI Surges to New High, Top 50 Coins
                </div>
                <div className='text-sm font-normal pt-2 text-[#747474]'>
                    12m ago • The Block
                </div>
            </div>
        </Slider>
    );
};

export default NewCarousel;
