import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bg from '../../assets/login1.png'
import bg2 from '../../assets/login2.png'

const LoginSlider = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
    };

    return (
        <div id='login-slider' className="w-[461px]">
            <Slider {...settings}>
                <div className="h-full">
                    <img
                        className='rounded-xl max-h-[400px] w-auto object-contain'
                        src={bg}
                        alt="slide 1"
                    />
                </div>
                <div className="h-full">
                    <img
                        className='rounded-xl max-h-[400px] w-auto object-contain'
                        src={bg2}
                        alt="slide 2"
                    />
                </div>
            </Slider>
        </div>
    );
}

export default LoginSlider;