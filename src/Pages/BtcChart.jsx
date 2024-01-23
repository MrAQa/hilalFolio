import React from 'react'
import NavBar from '../Component/Navbar'
import TradeViewChart from 'react-crypto-chart';
function BtcChart() {
    return (
        <div>
            <NavBar />
            <section className='pt-6 sm:pt-12'>
                <div className='2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md sm:max-w-sm mx-auto px-3 lg:px-0'>
                    <div className="text-base font-medium text-center text-gray-500">
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
                    </div>

                    <div>
                      <div className='mb-5'>
                      <h3 className='text-base font-medium text-black'>BTC/USDT</h3>
                      </div>
                        <div className='parent'>

                        <TradeViewChart
                            containerStyle={{
                                minHeight: '600px',
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


                </div>
            </section>
        </div>
    )
}

export default BtcChart