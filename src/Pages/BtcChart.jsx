import React, { useEffect, useState } from 'react'
import NavBar from '../Component/Navbar'

import NewCarousel from '../Component/Home/NewCarousel';
// import ApexChart from '../Component/Chart';
import Chart from '../Component/Chart';
import Footer from '../Component/Footer,';
import { ExpandIcon } from '../assets/custom-icon';
import { useLocation, useNavigate } from 'react-router-dom';
import { GetCoinData } from '../service/service';
function BtcChart() {

    const location = useLocation();
    const navigation = useNavigate();
    const data = location.state; // Access the data here
    // console.log(data)
    const [activeTab, setActiveTab] = useState('Chart'); // Initial active tab
    const [isLogedin, setIsLogedin] = useState(false);

    useEffect(() => {
       
        const token = localStorage.getItem('user_token');
        if (token) {
          setIsLogedin(true)
     
        }
        else {
          setIsLogedin(false)
        }
      }, [])
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const tabData = {
        Chart: 1,
        News: 2,
        Markets: 3,
    };
    useEffect(() => {
        GetCoinData(data?._id).then((result)=>{
        console.log(result)
      })
    }, [data?._id])
    
const handleRequestReview =()=>{
    navigation('/review', { state: data });
}
    return (
        <div className='bg-[#F2F2F2]'>
            <NavBar />
            <section className='pt-6 sm:pt-12'>
                <div className='2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md mx-auto px-3 lg:px-0'>

                    <div>
                        <div className="text-base font-semibold text-center text-gray-500  px-4 sm:px-8">
                            <ul className="flex flex-wrap -mb-px py-4 gap-6">
                                {Object.keys(tabData).map((tab) => (
                                    <li className="me-2" key={tab}>
                                        <span
                                            // href="/"
                                            className={`inline-block cursor-pointer ${activeTab === tab
                                                ? 'text-primaryPurple border-b-2 border-primaryPurple rounded-t-lg active'
                                                : 'border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300'
                                                }`}
                                            onClick={() => handleTabClick(tab)}
                                        >
                                            {tab}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="tab-content mb-4">
                            {
                                tabData[activeTab] === 1 &&
                                <>
                                    <div className='border-[2px] border-[#D7D9E4] rounded-3xl bg-white px-4 sm:px-8 py-6'>
                                        <div className='mb-6 flex justify-between'>
                                            <h2 className="text-2xl font-bold tracking-tight text-[#0C0F14] sm:text-32">
                                                Chart
                                            </h2>

                                            <div className='flex gap-2'>
                                                <span className="p-2 bg-[#F2F2F2] rounded-lg flex justify-center items-center cursor-pointer">

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M8.54297 17.3557L11.693 15.4557L14.843 17.3807L14.018 13.7807L16.793 11.3807L13.143 11.0557L11.693 7.6557L10.243 11.0307L6.59297 11.3557L9.36797 13.7807L8.54297 17.3557ZM11.693 17.2191L7.8026 19.5653C7.65773 19.6499 7.51255 19.6855 7.36705 19.672C7.22153 19.6585 7.0898 19.6095 6.97185 19.5249C6.85391 19.4403 6.7629 19.3297 6.6988 19.1932C6.63468 19.0566 6.62442 18.9057 6.66802 18.7403L7.7007 14.323L4.2661 11.3499C4.1379 11.2384 4.05617 11.1092 4.02092 10.9625C3.98567 10.8157 3.99496 10.673 4.0488 10.5346C4.10265 10.3961 4.18021 10.283 4.2815 10.1952C4.38278 10.1073 4.52124 10.05 4.69687 10.023L9.22955 9.6269L10.9891 5.45575C11.0532 5.30063 11.1504 5.18589 11.2805 5.11152C11.4106 5.03717 11.5481 5 11.693 5C11.8378 5 11.9753 5.03717 12.1055 5.11152C12.2356 5.18589 12.3327 5.30063 12.3968 5.45575L14.1564 9.6269L18.6891 10.023C18.8647 10.05 19.0032 10.1073 19.1044 10.1952C19.2057 10.283 19.2833 10.3961 19.3371 10.5346C19.391 10.673 19.4003 10.8157 19.365 10.9625C19.3298 11.1092 19.248 11.2384 19.1198 11.3499L15.6852 14.323L16.7179 18.7403C16.7615 18.9057 16.7513 19.0566 16.6871 19.1932C16.623 19.3297 16.532 19.4403 16.4141 19.5249C16.2961 19.6095 16.1644 19.6585 16.0189 19.672C15.8734 19.6855 15.7282 19.6499 15.5833 19.5653L11.693 17.2191Z" fill="#6F7889" fillOpacity="0.5" />
                                                    </svg>
                                                </span>
                                                {
                                                    isLogedin ?

                                                <button
                                                onClick={handleRequestReview}
                                                    className="h-10 text-primaryPurple border-primaryPurple border-[1px] font-medium flex justify-center items-center hover:bg-opacity-90 py-3 px-3 min-w-28 text-center rounded-lg disabled:opacity-50  z-[1]"
                                                >
                                                    View Report
                                                </button>
                                                :
                                                <button
                                                onClick={handleRequestReview}
                                                    className="bg-primaryPurple h-10 text-white font-medium flex justify-center items-center hover:bg-opacity-90 py-3 px-3 min-w-28 text-center rounded-lg disabled:opacity-50  z-[1]"
                                                >
                                                    Request Review
                                                </button>
                                                }
                                            </div>
                                        </div>
                                        <div className='flex justify-between mb-5'>
                                            <div>

                                                <div className="flex items-center gap-x-2">
                                                    <img
                                                        src={data?.logo}
                                                        alt="logo"
                                                        className="w-8 rounded-full bg-gray-50"
                                                    />
                                                    <div className="text-[20px] font-medium">

                                                            {data?.name}
                                                            <span className="text-lg ml-1 text-lightSecondaryText">

                                                                {data?.symbol}
                                                            </span>
                                                        
                                                    </div>
                                                </div>
                                                <div className='text-3xl font-bold'>
                                                {`$${data?.quote?.USD?.price?.toFixed(2)}`}
                                                </div>
                                            </div>
                                           <div>
                                           <div className='flex gap-2'>
                                                <span className='rounded-lg py-2 px-4 text-[14px] bg-primaryPurple text-white'>1h</span>
                                                <span className='rounded-lg py-2 px-4 text-[14px] bg-[#F2F2F2] text-primaryDark'>24h</span>
                                                <span className='rounded-lg py-2 px-4 text-[14px] bg-[#F2F2F2] text-primaryDark'>7d</span>
                                                <span className='rounded-lg py-2 px-4 text-[14px] bg-[#F2F2F2] text-primaryDark'>30d</span>
                                                <span className='rounded-lg py-2 px-4 text-[14px] bg-[#F2F2F2] text-primaryDark'>1y</span>
                                            </div>
                                           </div>
                                        </div>
                                        <div className=' px-4 sm:px-8 py-6'>

                                            <Chart />

                                        </div>
                                    </div>
                                    <div className='pt-6'>
                                        <div className="bg-white shadow-sm rounded-3xl border-[2px] border-[#D7D9E4] px-4 sm:px-8 py-6">
                                            <h2 className="text-2xl font-bold tracking-tight text-[#0C0F14] sm:text-32">
                                                Statistics
                                            </h2>
                                            <div className="py-6">
                                                <div className='flex flex-wrap gap-7'>
                                                    <div className='w-[236px] flex flex-col gap-2'>
                                                        <span className='text-base text-[#747474]'>Market Cap</span>
                                                        <div className='text-xl font-medium'>$816B</div>
                                                    </div>
                                                    <div className='w-[236px] flex flex-col gap-2'>
                                                        <span className='text-base text-[#747474]'>Fully Diluted Market Cap</span>
                                                        <div className='text-xl font-medium'>$903.89 B</div>
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
                                                <div className='h-[1px] my-10 bg-[#D7D9E4]'></div>
                                                <div>

                                                    <p>

                                                        <span className='text-lg font-medium'>
                                                            Disclaimer:
                                                        </span> This page may contain affiliate links. CoinMarketCap may be compensated if you visit any affiliate links and you take certain actions such as signing up and transacting with these affiliate platforms. Please refer to Affiliate Disclosure  </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='pt-6'>
                                        <div className="bg-white shadow-sm rounded-3xl border-[2px] border-[#D7D9E4] px-4 sm:px-8 py-6">
                                            <h2 className="text-2xl font-bold tracking-tight text-[#0C0F14] sm:text-32">
                                                About Bitcoin
                                            </h2>
                                            <div className='py-5 flex flex-wrap gap-5'>
                                                <div className="px-6 py-2 rounded-lg bg-[#F2F2F2] flex items-center justify-center text-base font-normal">bitcoin.org
                                                    <ExpandIcon
                                                        className="w-4 cursor-pointer ml-2 fill-[#6F7889]"
                                                    /></div>
                                                <div className="px-6 py-2 rounded-lg bg-[#F2F2F2] flex items-center justify-center text-base font-normal w-[116px]">Explorers</div>
                                                <div className="px-6 py-2 rounded-lg bg-[#F2F2F2] flex items-center justify-center text-base font-normal w-[116px]">Community</div>
                                            </div>
                                            <div className="pb-6">
                                                <h2 className='mb-4 text-[24px] font-medium text-primaryDark'>What Is Bitcoin?</h2>
                                                <p className='mb-6'>
                                                    Bitcoin is one of the most popular cryptocurrencies in the market. First introduced in 2009 by Satoshi Nakamoto, Bitcoin has held the crypto market’s number one spot according to market capitalization. Bitcoin paved the way for many existing altcoins in the market and marked a pivotal moment for digital payment solutions.
                                                </p>
                                                <p className='mb-6'>
                                                    As the world’s first cryptocurrency, Bitcoin has come a long way in terms of its value. However, one does not have to buy an entire bitcoin as bitcoins can be divided into small units called satoshis, named after the creator. A satoshi is equivalent to 0.00000001 bitcoin.
                                                </p>
                                                <p className='mb-6'>
                                                    There is no physical BTC token so Bitcoin operates as a digital currency. Bitcoin transactions are fully transparent and can’t be censored, providing a global, censorship-resistant medium for financial exchange. It’s a financial system backed by decentralized network of computers, known as ‘nodes’, instead of  centralized banking or governmental entity, thereby promoting ‘decentralization’.
                                                </p>
                                                <h3 className='mb-1 text-[20px] font-semibold text-primaryDark'>Why Is the Bitcoin Price So Volatile?</h3>
                                                <p className='mb-6'>
                                                    The price of Bitcoin has been highly volatile since it started because of several factors. Firstly, the crypto market is smaller and not heavily traded like traditional markets, so big trades can make the price swing substantially. Secondly, Bitcoin's value depends on public sentiment and speculation, leading to short-term price changes. Media coverage, influential opinions, and regulatory developments create uncertainty, affecting demand and supply dynamics and contributing to price fluctuations.

                                                </p>
                                                <p className='mb-6'>
                                                    Another key factor is Bitcoin's fixed supply. With only 21 million bitcoins ever to be minted, its scarcity can lead to dramatic price changes as demand varies. This is exacerbated by "whales" or large holders of Bitcoin, whose sizable transactions can sway the market considerably.

                                                </p>
                                                <h3 className='mb-1 text-[20px] font-semibold text-primaryDark'>When Was Bitcoin Created?</h3>
                                                <p className='mb-6'>
                                                    Bitcoin was created in 2009 by an unknown person or group of people using the pseudonym Satoshi Nakamoto. The digital asset is based on a decentralized, peer-to-peer network and blockchain technology, allowing users to securely and anonymously send and receive transactions without intermediaries. Satoshi Nakamoto released the Bitcoin whitepaper in 2008, outlining the design and principles of the cryptocurrency. The first Bitcoin transaction, which involved sending 10 bitcoins to a developer, took place on January 12, 2009. Since then, Bitcoin has gained traction as an alternative store of value and payment system, transforming the financial industry.

                                                </p>
                                                <h3 className='mb-1 text-[20px] font-semibold text-primaryDark'>
                                                    Who Created Bitcoin?
                                                </h3>
                                                <p className='mb-6'>
                                                    The creator of Bitcoin remains an enigma, known only by the pseudonym Satoshi Nakamoto. Bitcoin's innovation emerged in 2008 when Nakamoto released the whitepaper outlining the cryptocurrency's decentralized, peer-to-peer structure, and use of blockchain technology. In 2009, Nakamoto mined the first Bitcoin block, and on January 12th of the same year, the inaugural Bitcoin transaction took place. Despite numerous investigations and speculations, the true identity of Satoshi Nakamoto has not been disclosed.

                                                </p>
                                                <p className='mb-6'>
                                                    There have been a number of people who have been proposed as the possible identity of Satoshi Nakamoto, but none of these claims have been definitively proven.

                                                </p>
                                                <h3 className='mb-1 text-[20px] font-semibold text-primaryDark'>
                                                    How Does Bitcoin Work?
                                                </h3>
                                                <p className='mb-6'>

                                                    Bitcoin runs on a decentralized, peer-to-peer network, making it possible for individuals to conduct transactions without intermediaries. Transactions are transparent and secure thanks to the underlying blockchain technology, which stores and verifies recorded transaction data. Miners validate transactions by solving complex mathematical problems with computational power. The first miner to find the solution receives a cryptocurrency reward, thus creating new bitcoins. Upon validation, the data is added to the existing blockchain, and it becomes a permanent record. Bitcoin provides an alternative way to transact that's transparent and secure, redefining traditional finance.

                                                </p>
                                                <h3 className='mb-1 text-[20px] font-semibold text-primaryDark'>

                                                    When Is the Next Bitcoin Halving?
                                                </h3>
                                                <p className='mb-6'>
                                                    The next Bitcoin halving is expected to take place in April 2024. It's difficult to predict the exact date as it depends on the block height. The block height refers to the number of blocks preceding a particular block in a blockchain. Bitcoin halving happens every 210,000 blocks and the next Bitcoin halving is expected to occur in April 2024 when the block height reaches 840,000.
                                                </p>
                                                <p className='mb-6'>

                                                    Bitcoin halving occurs approximately every four years, where the rewards given to Bitcoin miners for mining blocks are cut in half. Halving was built into the Bitcoin protocol to maintain its value as a deflationary currency. By reducing the amount of new bitcoins, the protocol aims to prevent the devaluation of Bitcoin over time, which often happens with inflationary currencies.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='pt-6'>
                                        <div className="bg-white shadow-sm rounded-3xl border-[2px] border-[#D7D9E4] px-4 sm:px-8 py-6">
                                            <h2 className="text-2xl font-bold tracking-tight text-[#0C0F14] sm:text-32">
                                                About Bitcoin
                                            </h2>
                                            <div className="py-6">
                                                <NewCarousel />
                                            </div>

                                        </div>
                                    </div>
                                </>

                            }
                            {/* {
                                tabData[activeTab] === 2 &&

                                <div>
                                    community
                                </div>
                            } */}
                            {
                                tabData[activeTab] === 2 &&

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
                                tabData[activeTab] === 3 &&

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
            <Footer />
        </div>
    )
}

export default BtcChart