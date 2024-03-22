// import { ArrowUpIcon } from '@heroicons/react/24/outline';
import React, { useState, useEffect } from 'react';


const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to scroll to top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling
        });
    };

    // Function to toggle visibility of the button based on scroll position
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Listen to scroll event
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <button onClick={scrollToTop}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="76" height="104" viewBox="0 0 76 104" fill="none">
                        <g filter="url(#filter0_dddd_303_7580)">
                            <path d="M36.125 27.8412V37.3557C36.125 37.8869 36.3048 38.3323 36.6643 38.6916C37.0238 39.051 37.4693 39.2306 38.0008 39.2306C38.5323 39.2306 38.9815 39.0487 39.3484 38.6847C39.7154 38.3207 39.8989 37.8697 39.8989 37.3316V27.8412L43.2308 31.173C43.5769 31.5191 44.012 31.6882 44.536 31.6802C45.0601 31.6722 45.4951 31.4951 45.8413 31.1489C46.1874 30.8028 46.3605 30.3664 46.3605 29.8397C46.3605 29.313 46.1874 28.8792 45.8413 28.5384L39.6057 22.3269C39.1538 21.875 38.6265 21.649 38.024 21.649C37.4214 21.649 36.8942 21.875 36.4423 22.3269L30.2067 28.5624C29.8606 28.9086 29.6875 29.3397 29.6875 29.8557C29.6875 30.3717 29.8606 30.8028 30.2067 31.1489C30.5529 31.4951 30.9893 31.6681 31.5159 31.6681C32.0427 31.6681 32.4764 31.4951 32.8172 31.1489L36.125 27.8412ZM38.0041 53.7499C34.7193 53.7499 31.6317 53.1266 28.7414 51.8799C25.851 50.6332 23.3368 48.9413 21.1988 46.8043C19.0607 44.6671 17.368 42.154 16.1208 39.2649C14.8736 36.3759 14.25 33.289 14.25 30.0041C14.25 26.7193 14.8733 23.6317 16.12 20.7414C17.3667 17.851 19.0585 15.3368 21.1956 13.1988C23.3328 11.0607 25.8459 9.36802 28.7349 8.12082C31.624 6.87361 34.7109 6.25 37.9958 6.25C41.2806 6.25 44.3682 6.87334 47.2585 8.12C50.1489 9.36667 52.6631 11.0585 54.8011 13.1956C56.9392 15.3328 58.6319 17.8459 59.8791 20.7349C61.1263 23.624 61.7499 26.7109 61.7499 29.9958C61.7499 33.2806 61.1266 36.3682 59.8799 39.2585C58.6332 42.1489 56.9413 44.6631 54.8043 46.8011C52.6671 48.9392 50.154 50.6319 47.2649 51.8791C44.3759 53.1263 41.289 53.7499 38.0041 53.7499Z" fill="#DFDAE6" />
                            <path d="M36.125 27.8412V37.3557C36.125 37.8869 36.3048 38.3323 36.6643 38.6916C37.0238 39.051 37.4693 39.2306 38.0008 39.2306C38.5323 39.2306 38.9815 39.0487 39.3484 38.6847C39.7154 38.3207 39.8989 37.8697 39.8989 37.3316V27.8412L43.2308 31.173C43.5769 31.5191 44.012 31.6882 44.536 31.6802C45.0601 31.6722 45.4951 31.4951 45.8413 31.1489C46.1874 30.8028 46.3605 30.3664 46.3605 29.8397C46.3605 29.313 46.1874 28.8792 45.8413 28.5384L39.6057 22.3269C39.1538 21.875 38.6265 21.649 38.024 21.649C37.4214 21.649 36.8942 21.875 36.4423 22.3269L30.2067 28.5624C29.8606 28.9086 29.6875 29.3397 29.6875 29.8557C29.6875 30.3717 29.8606 30.8028 30.2067 31.1489C30.5529 31.4951 30.9893 31.6681 31.5159 31.6681C32.0427 31.6681 32.4764 31.4951 32.8172 31.1489L36.125 27.8412Z" fill="#6F4F9F" />
                        </g>
                        <defs>
                            <filter id="filter0_dddd_303_7580" x="-6" y="-3" width="88" height="113" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="2" />
                                <feGaussianBlur stdDeviation="2.5" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.196078 0 0 0 0 0.176471 0 0 0 0 0.345098 0 0 0 0.1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303_7580" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="9" />
                                <feGaussianBlur stdDeviation="4.5" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.196078 0 0 0 0 0.176471 0 0 0 0 0.345098 0 0 0 0.09 0" />
                                <feBlend mode="normal" in2="effect1_dropShadow_303_7580" result="effect2_dropShadow_303_7580" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="20" />
                                <feGaussianBlur stdDeviation="6" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.196078 0 0 0 0 0.176471 0 0 0 0 0.345098 0 0 0 0.05 0" />
                                <feBlend mode="normal" in2="effect2_dropShadow_303_7580" result="effect3_dropShadow_303_7580" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="36" />
                                <feGaussianBlur stdDeviation="7" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.196078 0 0 0 0 0.176471 0 0 0 0 0.345098 0 0 0 0.01 0" />
                                <feBlend mode="normal" in2="effect3_dropShadow_303_7580" result="effect4_dropShadow_303_7580" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_303_7580" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;
