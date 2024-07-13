import React, { useState } from 'react'
import NavBar from '../Component/Navbar'
import SideBar from '../Component/Setting/SideBar'
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { BellIcon, DeleteIcon, LockIcon, RightArrowDark } from '../assets/custom-icon';
import ChangePassword from '../Component/Setting/ChangePassword';
import Footer from '../Component/Footer,';
function Settings() {

    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }));
    const [showChangePass, setShowChangePass] = useState(false);
    return (
        <div>
            <NavBar />
            <div className="bg-container1">
                <section className=''>
                    <div className='2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md mx-auto px-3 lg:px-0'>
                        <div className='flex flex-col md:flex-row gap-6 text-gray-900'>
                            <div className='lg:w-[390px] pt-10 '>
                                <SideBar />
                            </div>
                            <div className='flex-1 pt-10'>
                                {
                                    !showChangePass ?
                                        <div className="border-[1px] border-lightThemeOutline rounded-3xl px-4 sm:px-8 py-6 bg-white">
                                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-32">
                                                Settings
                                            </h2>
                                            <div className='pt-6 text-base font-medium '>

                                                <div className='flex justify-between py-4'>
                                                    <span className='flex items-center gap-1'>
                                                        <span>
                                                            <BellIcon />
                                                        </span>
                                                        Notifications
                                                    </span>
                                                    <div>
                                                        <IOSSwitch />
                                                    </div>
                                                </div>
                                                <div onClick={()=>setShowChangePass(true)} className='flex justify-between py-4 cursor-pointer'>
                                                    <span className='flex items-center gap-1'>
                                                        <span>
                                                            <LockIcon />
                                                        </span>
                                                        {localStorage.getItem('socialLogin') == true ? 'Set Password': 'Change Password'}
                                                    </span>
                                                    <div>
                                                        <RightArrowDark />
                                                    </div>
                                                </div>
                                                <div className='flex justify-between py-4'>
                                                    <span className='flex items-center gap-1 text-[#CD0000]'>
                                                        <span>
                                                            <DeleteIcon />
                                                        </span>
                                                        Delete account
                                                    </span>
                                                    <div>
                                                        <RightArrowDark />
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        :
                                        <ChangePassword />
                                }

                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}

export default Settings