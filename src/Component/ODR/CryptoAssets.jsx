import { ArrowLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react';

const CryptoAssets = ({ setShowAssets, CoinsData }) => {
    return (
        <div className="bg-[#F2F2F2]">
            <section className='pt-6 sm:pt-8'>
                <div className='2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md mx-auto px-3 lg:px-0'>
                    <div className="rounded-2xl px-4 sm:px-8 py-8 bg-white h-screen max-h-screen">
                        <div className='flex justify-between'>
                            <div
                                onClick={() => setShowAssets(false)}
                                className='flex items-center gap-4 cursor-pointer'>
                                <ArrowLeftIcon class="h-6 w-6" />
                                <span className='text-30 font-bold'>Add Crypto Assets</span>
                            </div>
                            <div className='flex items-center border-[1px] border-lightThemeOutline h-12 w-[343px] rounded-lg px-3 py-2'>
                                <span>
                                    <MagnifyingGlassIcon class="h-6 w-6 text-lightThemeSecondary" />

                                </span>
                                <input type="text"
                                    placeholder='Search here'
                                    className='outline-none h-full w-full pl-3' />
                            </div>
                        </div>
                        <div
                            style={{ height: 'calc(100% - 5rem)' }}
                            className='mt-8 flex flex-wrap gap-4 overflow-auto'>
                            {
                                CoinsData?.map((item, index) => (

                                    <div key={index + '-item'}
                                        style={{ width: 'calc(33% - 8px)' }}

                                        className='flex justify-between items-center border-[1px] border-lightThemeOutline shadow-custom rounded-xl p-6'>
                                        <div className='flex items-center gap-2'>
                                            <span className="bg-[#EBEBEB] rounded px-2 py-[4px] text-lightSecondaryText text-[14px] font-medium">
                                                {index + 1}
                                            </span>
                                            <div className="flex items-center gap-x-2">
                                                <img
                                                    src={item?.logo}
                                                    alt="logo"
                                                    className="w-8 rounded-full bg-gray-50"
                                                />
                                                <div className="text-sm leading-6">
                                                    <p>

                                                        <span className="text-base font-semibold">

                                                            {item?.symbol}
                                                        </span>

                                                    </p>
                                                    <p className="text-[14px] font-medium text-lightSecondaryText ">
                                                        {item?.name}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>view report</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CryptoAssets;
