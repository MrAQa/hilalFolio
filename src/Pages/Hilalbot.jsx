import React from 'react'
import NavBar from '../Component/Navbar'
import SideNav from '../Component/Hilalbot/SideNav'
import { HilalBotChatLogo } from '../assets/custom-icon'


function Hilalbot() {
    return (
        <>
            <div className="min-h-screen bg-white">
                <NavBar />
                <div className='bg-whiteGrey'>
                    <SideNav />
                    <main className="h-full md:ml-[300px]">
                        <div className='px-4 md:px-28 py-4 chatbot_conatiner '>
                            <div className='flex justify-center flex-col items-center size-full'>
                                <HilalBotChatLogo />
                                <div className='text-[24px] font-medium mt-4'>How may I help you today?</div>
                            </div>
                            <div>
                              <div className='flex gap-3'>
                              <div className="flex p-4 h-[56px] border-[1px] border-[#D7D9E4] rounded-lg flex-1">
                                    <input
                                        className='w-full resize-none border-none outline-none'
                                        placeholder='Example : “what will be the price of bitcoin in 2025”'
                                        type="text" />
                                    <span className='cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                                            <path d="M7.94306 12C7.00612 12 6.20972 11.7083 5.55386 11.125C4.898 10.5417 4.57007 9.83333 4.57007 9V3C4.57007 2.16667 4.898 1.45833 5.55386 0.875C6.20972 0.291667 7.00612 0 7.94306 0C8.88 0 9.6764 0.291667 10.3323 0.875C10.9881 1.45833 11.316 2.16667 11.316 3V9C11.316 9.83333 10.9881 10.5417 10.3323 11.125C9.6764 11.7083 8.88 12 7.94306 12ZM6.81873 18V15.925C5.09476 15.7083 3.61908 15.0583 2.39169 13.975C1.1643 12.8917 0.419429 11.575 0.157086 10.025C0.119609 9.74167 0.203933 9.5 0.41006 9.3C0.616187 9.1 0.87853 9 1.19709 9C1.51565 9 1.78268 9.09583 1.99817 9.2875C2.21367 9.47917 2.3589 9.71667 2.43385 10C2.69619 11.1667 3.34737 12.125 4.38737 12.875C5.42737 13.625 6.6126 14 7.94306 14C9.29225 14 10.4822 13.6208 11.5128 12.8625C12.5434 12.1042 13.1899 11.15 13.4523 10C13.5272 9.71667 13.6724 9.47917 13.8879 9.2875C14.1034 9.09583 14.3705 9 14.689 9C15.0076 9 15.2699 9.1 15.4761 9.3C15.6822 9.5 15.7665 9.74167 15.729 10.025C15.4667 11.5417 14.7265 12.85 13.5085 13.95C12.2905 15.05 10.8101 15.7083 9.06739 15.925V18C9.06739 18.2833 8.95964 18.5208 8.74414 18.7125C8.52864 18.9042 8.26162 19 7.94306 19C7.6245 19 7.35747 18.9042 7.14197 18.7125C6.92648 18.5208 6.81873 18.2833 6.81873 18Z" fill="#6F7889" />
                                        </svg>
                                    </span>
                                </div>
                                <div className='bg-primaryPurple size-[56px] p-3 flex justify-center items-start rounded-lg cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <mask id="mask0_493_6760" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                                            <rect x="0.669678" width="24" height="24" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_493_6760)">
                                            <path d="M7.66968 21H5.66968C5.11968 21 4.64884 20.8042 4.25718 20.4125C3.86551 20.0208 3.66968 19.55 3.66968 19V12C3.66968 10.75 3.90718 9.57917 4.38218 8.4875C4.85718 7.39583 5.49884 6.44583 6.30718 5.6375C7.11551 4.82917 8.06551 4.1875 9.15718 3.7125C10.2488 3.2375 11.4197 3 12.6697 3C13.9197 3 15.0905 3.2375 16.1822 3.7125C17.2738 4.1875 18.2238 4.82917 19.0322 5.6375C19.8405 6.44583 20.4822 7.39583 20.9572 8.4875C21.4322 9.57917 21.6697 10.75 21.6697 12V19C21.6697 19.55 21.4738 20.0208 21.0822 20.4125C20.6905 20.8042 20.2197 21 19.6697 21H17.6697C17.1197 21 16.6488 20.8042 16.2572 20.4125C15.8655 20.0208 15.6697 19.55 15.6697 19V15C15.6697 14.45 15.8655 13.9792 16.2572 13.5875C16.6488 13.1958 17.1197 13 17.6697 13H19.6697V12C19.6697 10.05 18.9905 8.39583 17.6322 7.0375C16.2738 5.67917 14.6197 5 12.6697 5C10.7197 5 9.06551 5.67917 7.70718 7.0375C6.34884 8.39583 5.66968 10.05 5.66968 12V13H7.66968C8.21968 13 8.69051 13.1958 9.08218 13.5875C9.47384 13.9792 9.66968 14.45 9.66968 15V19C9.66968 19.55 9.47384 20.0208 9.08218 20.4125C8.69051 20.8042 8.21968 21 7.66968 21Z" fill="white" />
                                        </g>
                                    </svg>
                                </div>
                              </div>
                                <div className='text-lightSecondaryText text-sm text-center mt-4'>Hilalfolio can make mistakes. Consider checking important information.</div>
                            </div>
                        </div>
                    </main>
                </div>

            </div>
        </>
    )
}

export default Hilalbot