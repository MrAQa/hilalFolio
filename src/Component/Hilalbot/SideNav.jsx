import React, { useEffect, useState } from 'react'
import logo from '../../assets/Hilalbot-logo.png'
import { ChatIcon, DeleteIconGray, ExpandIconGray, LogoutRedIcon, RecentIcon, SaveTagIcon } from '../../assets/custom-icon';
import { GetAllChat } from '../../service/service';
function SideNav({refresh,handleNewChat,GetChat,chatId}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [questions, setQuestions]=useState([]);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    useEffect(()=>{
        GetAllChat().then((response)=>{
            if(response?.success){
                console.log(response?.data?.history)
                setQuestions(response?.data?.history)
            }
        })
    },[refresh]);
 
    return (
        <>
            <button
                onClick={toggleSidebar}
                data-drawer-target="hilalbot-sidebar"
                data-drawer-toggle="hilalbot-sidebar"
                aria-controls="hilalbot-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#D2D6DC33] focus:outline-none focus:ring-2 focus:ring-gray-20"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            <aside
                id="hilalbot-sidebar"
                className={`${sidebarOpen ? "" : "-translate-x-full"
                    } fixed top-0 md:top-[100px] lg:top-[140px] left-0 md:left-8 z-40 w-[268px] h-full transition-transform md:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full px-4 py-4 pt-0 overflow-y-auto bg-white side-nav rounded-tr-xl rounded-br-xl text-whiteGrey relative" id="style-3">
                    <div className="flex py-3 justify-start">
                        <img src={logo} alt="Hilalbot" className='w-[144px]' />
                    </div>
                    <div className="mt-6">
                        <button 
                        onClick={handleNewChat}
                        className='bg-primaryPurple text-white text-base font-medium px-4 flex gap-3 py-3 w-full rounded-[10px] hover:opacity-90'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clipPath="url(#clip0_493_6559)">
                                        <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_493_6559">
                                            <rect width="24" height="24" rx="6" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span> New chat
                        </button>


                    </div>
                    <div className="mt-4 text-lightSecondaryText text-base h-[25vh] overflow-y-auto font-normal">
                        {questions?.map((item, index) => (
                            <div 
                            onClick={()=>GetChat(item?._id)}
                            key={'item-' + index} className={`flex items-center gap-3 py-3 cursor-pointer hover:bg-black hover:bg-opacity-[0.05] px-1 rounded-[10px] ${item?._id===chatId ? 'bg-black bg-opacity-[0.05]' :''}`}>
                                <span>
                                    <ChatIcon />
                                </span>
                                <div className='truncate'>{item?.subject}</div>
                            </div>
                        ))}
                    </div>
                    <div className="my-4 text-lightSecondaryText text-base font-normal absolute bottom-0">
                        <div className='flex items-center gap-3 py-3 cursor-pointer hover:bg-black hover:bg-opacity-[0.05] px-1 rounded-[10px]'>
                            <span>
                                <RecentIcon />
                            </span>
                            Recent chats
                        </div>
                        <div className='flex items-center gap-3 py-3 cursor-pointer hover:bg-black hover:bg-opacity-[0.05] px-1 rounded-[10px]'>
                            <span>
                                <SaveTagIcon />
                            </span>
                            Save chat history
                        </div>
                        <div className='flex items-center gap-3 py-3 cursor-pointer hover:bg-black hover:bg-opacity-[0.05] px-1 rounded-[10px]'>
                            <span>
                                <DeleteIconGray />
                            </span>
                            Delete all chats
                        </div>
                        <div className='flex items-center gap-3 py-3 cursor-pointer hover:bg-black hover:bg-opacity-[0.05] px-1 rounded-[10px]'>
                            <span>
                                <ExpandIconGray />
                            </span>
                            Uptades & FAQ
                        </div>
                        <div className='flex items-center gap-3 py-3 cursor-pointer hover:bg-black hover:bg-opacity-[0.05] px-1 rounded-[10px]'>
                            <span>
                                <LogoutRedIcon />
                            </span>
                            <span className='text-[#CD0000]'>Logout</span>
                        </div>
                    </div>
                </div>
            </aside>
            {sidebarOpen && (
                <div
                    onClick={toggleSidebar}
                    className="bg-primaryDark bg-opacity-50  fixed inset-0 z-30"
                ></div>
            )}
        </>
    )
}

export default SideNav