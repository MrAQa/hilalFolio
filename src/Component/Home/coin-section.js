import React from "react";
import { UpGraphGreen, DownGraphRed, UpIconGreen, HlalIcon } from '../../assets/custom-icons'
import NewCarousel from './NewCarousel'
const CoinSecton = () => {
  const headCells = [
    {
      id: 'Market Cap',

    },
    {
      id: 'Price',
    },
    {
      id: '24h%',
    },
    {
      id: 'Status',
    },
    {
      id: '24h High Price',
    },
    {
      id: '24h Low Price',
    },
    {
      id: 'Chart',
    },
  ]
  return (
    <>
      <section className='pt-6 sm:pt-12'>
        <div className='2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md sm:max-w-sm mx-auto px-3 lg:px-0'>
          <div className="border-[2px] border-[#C0C2CC] rounded-3xl px-4 sm:px-8 py-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-2xl font-bold tracking-tight text-[#0C0F14] sm:text-32">
                Cryptocurrency Prices by Market Cap
              </h2>
              <p className="my-5 text-sm leading-[21px] text-lightThemeSecondary">
                The total crypto market volume over the last 24 hours is $48.65B,
                which makes <span className="text-lightThemeDelete text-base font-semibold">16.38%</span> a decrease.<br /> The total volume in DeFi is currently
                $4.63B, 9.52% of the total crypto market 24-hour volume.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 text-[#0C0F14]">
              <div className="lg:w-1/4 py-[22px] px-[18px] border-[1px] border-lightThemeSecondary rounded-3xl">
                <div className="flex justify-between items-center gap-5">
                  <div className="relative flex items-center gap-x-2">
                    <img
                      src="assets/bitcoin.svg"
                      alt=""
                      className="w-8 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p>
                        <a href="#">
                          <span className="text-base font-semibold">

                            Bitcoin
                          </span>
                        </a>
                      </p>
                      <p className="text-[9px] font-semibold leading-[12px]">$29,732.54
                        <span className="text-lightThemeSuccess text-[7px] ml-1">16.38%</span>
                      </p>
                    </div>
                  </div>
                  <UpGraphGreen />
                </div>
              </div>
              <div className="lg:w-1/4 py-[22px] px-[18px] border-[1px] border-lightThemeSecondary rounded-3xl">
                <div className="flex justify-between items-center gap-5">

                  <div className="relative flex items-center gap-x-2">
                    <img
                      src="assets/bitcoin.svg"
                      alt=""
                      className="w-8 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p>
                        <a href="#">
                          <span className="text-base font-semibold">

                            Ethereum
                          </span>
                        </a>
                      </p>
                      <p className="text-[9px] font-semibold leading-[12px]">$29,732.54
                        <span className="text-lightThemeDelete text-[7px] ml-1">16.38%</span>
                      </p>
                    </div>
                  </div>
                  <DownGraphRed />
                </div>
              </div>
              <div className="lg:w-1/4 py-[22px] px-[18px] border-[1px] border-lightThemeSecondary rounded-3xl">
                <div className="flex justify-between items-center gap-5">

                  <div className="relative flex items-center gap-x-2">
                    <img
                      src="assets/uniswap.png"
                      alt=""
                      className="w-8 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p>
                        <a href="#">
                          <span className="text-base font-semibold">
                            Uniswaap
                          </span>
                        </a>
                      </p>
                      <p className="text-[9px] font-semibold leading-[12px]">$29,732.54
                        <span className="text-lightThemeSuccess text-[7px] ml-1">16.38%</span>
                      </p>
                    </div>
                  </div>
                  <UpGraphGreen />
                </div>
              </div>
              <div className="lg:w-1/4 py-[22px] px-[18px] border-[1px] border-lightThemeSecondary rounded-3xl">
                <div className="flex justify-between items-center gap-5">
                  <div className="relative flex items-center gap-x-2">
                    <img
                      src="
                      https://s3-alpha-sig.figma.com/img/5c00/2b5f/ad830d98fd412f805ebab7a189cfbb35?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fOZBBQPLHnNMaGD61KVLmz1IUD5UeaXBbOukjdRsEk~3dVMOnPUzwVzvlGzJ8fLKuVDIqZdY2qIiR6Xbn1t8HfoESUxIYawbzgTXieVpYb7udLU-yl8pGNpvQH5m3WFUx6l3bl1vox1OrOAt4Wl4jTEEKqnXL1tkmFhdawux9mxsWnEfbO2PyzanACAVQU4cg9qYPodLIK1ysuPBGtoqr0Q8-ftnUTTGUgPfHt4udsoRMNzukZdRu9WoPvm4cgxA-cP7Mw6NRtCfsGq~vh3s2HAIWpld8qiI9ob4HHuo50GGSR45md46W1G9LmFc2r~R6MX0lRW2a-z10yyRfZPxig__"
                      alt=""
                      className="w-8 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p>
                        <a href="#">
                          <span className="text-base font-semibold">
                            Cardano
                          </span>
                        </a>
                      </p>
                      <p className="text-[9px] font-semibold leading-[12px]">$29,732.54
                        <span className="text-lightThemeSuccess text-[7px] ml-1">16.38%</span>
                      </p>
                    </div>
                  </div>
                  <UpGraphGreen />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-6 sm:pt-8'>
        <div className='2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md sm:max-w-sm mx-auto px-3 lg:px-0'>
          <div className="border-[2px] border-[#C0C2CC] rounded-3xl px-4 sm:px-8 py-6">
            <h2 className="text-2xl font-bold tracking-tight text-[#0C0F14] sm:text-32">
              Coins
            </h2>
            <div className="py-5 flex flex-wrap gap-5">
              <div className="px-6 py-2 rounded-[20px] bg-[#F2F2F2] flex items-center justify-center text-base font-normal w-[116px]">USD<span className="text-[#747474]">/BTC</span></div>
              <div className="px-6 py-2 rounded-[20px] bg-[#F2F2F2] flex items-center justify-center text-base font-normal w-[116px]">USD/BTC</div>
              <div className="px-6 py-2 rounded-[20px] bg-[#F2F2F2] flex items-center justify-center text-base font-normal w-[116px]">USD/BTC</div>
              <div className="px-6 py-2 rounded-[20px] bg-[#F2F2F2] flex items-center justify-center text-base font-normal w-[116px]">USD/BTC</div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="text-base text-[#747474] border-y-[1px] border-[#D7D9E4]">
                  <tr>

                    {headCells?.map((item) => (

                      <th key={item.id} scope="col" className="px-6 py-5 font-semibold whitespace-nowrap">
                        {item.id}
                      </th>
                    ))}

                  </tr>
                </thead>
                <tbody>
                  {
                    [1, 2, 3, 4, 5, 6, 7].map((item) => (

                      <tr className="text-base font-semibold">
                        <td className="px-6 py-5">
                          <div className="relative flex items-center gap-x-2">
                            <img
                              src="assets/bitcoin.svg"
                              alt=""
                              className="w-8 rounded-full bg-gray-50"
                            />
                            <div className="text-sm leading-6">
                              <p>
                                <a href="#">
                                  <span className="text-base font-semibold">

                                    Bitcoin
                                  </span>
                                </a>
                              </p>
                              <p className="text-[9px] font-semibold leading-[12px]">$29,732.54
                                <span className="text-lightThemeSuccess text-[7px] ml-1">16.38%</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5">$29,732.54</td>
                        <td className="px-6 py-5">
                          <span className="text-lightThemeSuccess flex items-center gap-[2px]">
                            <UpIconGreen />
                            16.38%
                          </span>
                        </td>
                        <td className="px-6 py-5">
                          <span className="flex items-center gap-[2px]">
                            <HlalIcon />
                            Halal
                          </span>

                        </td>
                        <td className="px-6 py-5">$29,732.54</td>
                        <td className="px-6 py-5">$29,732.54</td>
                        <td className="px-6 py-5">
                          <UpGraphGreen />
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            <div className="flex justify-center pt-5">
              <button className="py-4 text-sm sm:text-base bg-primaryPurple rounded-lg text-white w-[80%] sm:w-1/3">See All Coins</button>
            </div>
          </div>
        </div>
      </section>
      <section className='py-6 sm:py-12'>
        <div className='2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md sm:max-w-sm mx-auto px-3 lg:px-0'>
          <div className="border-[2px] border-[#C0C2CC] rounded-3xl px-4 sm:px-8 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-[#0C0F14] sm:text-32">
                News
              </h2>
             <div className="py-6">
              <NewCarousel/>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CoinSecton;
