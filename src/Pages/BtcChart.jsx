import React, { useState } from 'react'
import NavBar from '../Component/Navbar'
import TradeViewChart from 'react-crypto-chart';
import NewCarousel from '../Component/Home/NewCarousel';
function BtcChart() {
    const [activeTab, setActiveTab] = useState('Overview'); // Initial active tab

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const tabData = {
        Overview: 1,
        Community: 2,
        News: 3,
        Markets: 4,
    };

    return (
        <div>
            <NavBar />
            <section className='pt-6 sm:pt-12'>
                <div className='2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md sm:max-w-sm mx-auto px-3 lg:px-0'>
                    {/* <div className="text-base font-medium text-center text-gray-500">
                        <ul className="flex flex-wrap -mb-px py-4 gap-6">
                            <li className="me-2">
                                <a href="#" className="inline-block  text-primaryPurple border-b-2 border-primaryPurple rounded-t-lg active" aria-current="page">Overview</a>
                            </li>
                            <li className="me-2">
                                <a href="#" className="inline-block  border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">Communtity</a>
                            </li>
                            <li className="me-2">
                                <a href="#" className="inline-block  border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">News</a>
                            </li>
                            <li className="me-2">
                                <a href="#" className="inline-block  border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">Markets</a>
                            </li>

                        </ul>
                    </div> */}
                    <div>
                        <div className="text-base font-medium text-center text-gray-500">
                            <ul className="flex flex-wrap -mb-px py-4 gap-6">
                                {Object.keys(tabData).map((tab) => (
                                    <li className="me-2" key={tab}>
                                        <a
                                            href="#"
                                            className={`inline-block ${activeTab === tab
                                                ? 'text-primaryPurple border-b-2 border-primaryPurple rounded-t-lg active'
                                                : 'border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300'
                                                }`}
                                            onClick={() => handleTabClick(tab)}
                                        >
                                            {tab}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="tab-content mb-4">
                            {
                                tabData[activeTab] === 1 &&
                                <div>
                                    <div className='mb-5'>
                                        <h3 className='text-base font-medium text-black'>BTC/USDT</h3>
                                    </div>
                                    <div className='parent bg-white shadow-sm rounded-3xl px-4 sm:px-8 py-6'>

                                        <TradeViewChart
                                            containerStyle={{
                                                minHeight: '60vh',
                                                minWidth: '100%',
                                                marginBottom: '30px',
                                            }}
                                            chartLayout={{
                                                layout: {
                                                    backgroundColor: "white",
                                                    //   textColor: "black",
                                                },
                                                // grid: {
                                                //   vertLines: {
                                                //     color: "#838fa3",
                                                //     // style: LineStyle.SparseDotted,
                                                //   },
                                                //   horzLines: {
                                                //     color: "#838fa3",
                                                //     // style: LineStyle.SparseDotted,
                                                //   },
                                                // },
                                                // priceScale: {
                                                //   borderColor: "#485c7b",
                                                // },
                                                // timeScale: {
                                                //   borderColor: "#485c7b",
                                                //   timeVisible: true,
                                                //   secondsVisible: false,
                                                // },
                                            }}
                                            candleStickConfig={{
                                                upColor: "#098C26",
                                                downColor: "#CD0000",
                                                borderDownColor: "transparent",
                                                borderUpColor: "transparent",
                                                wickDownColor: "gray",
                                                wickUpColor: "gray",
                                            }}
                                            pair="BTCUSDT"
                                        />
                                    </div>
                                </div>
                            }
                            {
                                tabData[activeTab] === 2 &&

                                <div>
                                    community
                                </div>
                            }
                            {
                                tabData[activeTab] === 3 &&

                                <div>
                                    <div className="bg-white shadow-sm rounded-3xl px-4 sm:px-8 py-6">
                                        <h2 className="text-2xl font-bold tracking-tight text-[#0C0F14] sm:text-32">
                                            Bitcoin News
                                        </h2>
                                        <div className="py-6">
                                            <NewCarousel />
                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                tabData[activeTab] === 4 &&

                                <div>
                                    <div className="bg-white shadow-sm rounded-3xl px-4 sm:px-8 py-6">
                                        <h2 className="text-2xl font-bold tracking-tight text-[#0C0F14] sm:text-32">
                                            Market Stats
                                        </h2>
                                        <div className="py-6">
                                            <div className='flex flex-wrap gap-7'>
                                                <div className='w-[236px] flex flex-col gap-2'>
                                                    <span className='text-base text-[#747474]'>Bull Market Price</span>
                                                    <div className='text-xl font-medium'>$816B</div>
                                                </div>
                                                <div className='w-[236px] flex flex-col gap-2'>
                                                    <span className='text-base text-[#747474]'>Market Cap</span>
                                                    <div className='text-xl font-medium'>$816B</div>
                                                </div>
                                                <div className='w-[236px] flex flex-col gap-2'>
                                                    <span className='text-base text-[#747474]'>Fully Diluted Valuation</span>
                                                    <div className='text-xl font-medium'>$874B</div>
                                                </div>
                                                <div className='w-[236px] flex flex-col gap-2'>
                                                    <span className='text-base text-[#747474]'>Circulating Supply</span>
                                                    <div className='text-xl font-medium'>19,603,187</div>
                                                </div>
                                                <div className='w-[236px] flex flex-col gap-2'>
                                                    <span className='text-base text-[#747474]'>Total Supply</span>
                                                    <div className='text-xl font-medium'>21,000,000</div>
                                                </div>
                                                <div className='w-[236px] flex flex-col gap-2'>
                                                    <span className='text-base text-[#747474]'>Volume 24h</span>
                                                    <div className='text-xl font-medium'>$39B</div>
                                                </div>
                                                <div className='w-[236px] flex flex-col gap-2'>
                                                    <span className='text-base text-[#747474]'>Price Change (1h)</span>
                                                    <div className='text-xl font-medium'>
                                                        <span className="text-lightThemeSuccess ml-1">0.05%</span>
                                                    </div>
                                                </div>
                                                <div className='w-[236px] flex flex-col gap-2'>
                                                    <span className='text-base text-[#747474]'>Price Change (24h)</span>
                                                    <div className='text-xl font-medium'>
                                                        <span className="text-lightThemeSuccess ml-1">1.04%</span>
                                                    </div>
                                                </div>
                                                <div className='w-[236px] flex flex-col gap-2'>
                                                    <span className='text-base text-[#747474]'>Price Change (7d)</span>
                                                    <div className='text-xl font-medium'>
                                                        <span className="text-lightThemeDelete ml-1">3.35%</span>
                                                    </div>
                                                </div>
                                                <div className='w-[236px] flex flex-col gap-2'>
                                                    <span className='text-base text-[#747474]'>All Time High</span>
                                                    <div className='text-xl font-medium'>$816B</div>
                                                </div>
                                                <div className='w-[236px] flex flex-col gap-2'>
                                                    <span className='text-base text-[#747474]'>All Time Low</span>
                                                    <div className='text-xl font-medium'>$816B</div>
                                                </div>
                                            </div>
                                            <div className='h-[1px] my-10 bg-[#262626]'></div>
                                            <div>
                                                <div className='text-lg font-medium'>
                                                Bitcoin Price Update
                                                </div>
                                                <p>
                                                1.04% in the last 24 hours, and the live market cap is $815,963,237,179.803. It has circulating supply up volume of 21,000,000 BTC coins and a max. supply volume of 21,000,000 alongside $38,673,621,362.633 24h trading volume.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>



                </div>
            </section>
        </div>
    )
}

export default BtcChart