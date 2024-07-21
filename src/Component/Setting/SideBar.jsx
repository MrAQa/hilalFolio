
import React from 'react'
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { AboutIconDark, AboutIconLight, HelpCenterIcon, HelpCenterIconLight, LogoutRedIcon, RightArrowDark, RightArrowLight, SettingIconDark, SettingIconLight, ShareIcon, SubscriptionIconDark, SubscriptionIconLight, SunIcon } from '../../assets/custom-icon';
// import { UserCircleIcon } from '@heroicons/react/24/outline';
import avatar from '../../assets/avatar-img.svg'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalState } from '../../context/context';
function SideBar() {
    const currentPath = window.location.pathname;
    const { setIsLogedin, setuserData, isDarkMode, toggleTheme } = useGlobalState();
    const UserData = JSON.parse(localStorage.getItem('user_Data'))
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
                    backgroundColor: theme.palette.mode === 'dark' ? '#7147B4' : '#7147B4',
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
    const navigate = useNavigate();
    const handleSignOut = () => {
        localStorage.removeItem('user_token');
        localStorage.removeItem('user_Data');
        setIsLogedin(false);
        setuserData({})
        navigate('/')
    };
    const handleCopy = (text, message) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                toast.success(message, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                });
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };
    return (
        <>
            <ToastContainer />
            <div className='rounded-3xl bg-white py-5'>
                <div className="px-5">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-32 border-lightThemeOutline border-b-[1px] leading-normal pb-[30px]">
                        Account Setting
                    </h2>
                    <div className='pt-[30px] flex flex-col sm:flex-row items-center gap-4'>
                        <Link to='/profile' className='flex relative'>
                            {
                                UserData?.image ?
                                    <img
                                        className='rounded-full w-[80px] h-[80px] object-cover'
                                        src={UserData?.image}
                                        alt='avatar' />
                                    :

                                    <img
                                        className='rounded-full w-[80px] h-[80px] object-cover'
                                        src={avatar}
                                        alt='avatar' />
                            }

                        </Link>
                        <div className='text-base font-semibold text-center sm:text-left space-y-2'>
                            <div className='text-xl font-semibold'>{UserData?.fullName}</div>
                            <div className='text-[#6F7889] flex'>ID: <span className='truncate w-[88px]'>{UserData?._id}</span>
                                <span className='cursor-pointer' onClick={() => handleCopy(UserData?._id, 'ID Copied')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M14.7764 7V7C14.7764 6.06812 14.7764 5.60218 14.6241 5.23463C14.4211 4.74458 14.0318 4.35523 13.5417 4.15224C13.1742 4 12.7083 4 11.7764 4H8.77637C6.89075 4 5.94794 4 5.36215 4.58579C4.77637 5.17157 4.77637 6.11438 4.77637 8V11C4.77637 11.9319 4.77637 12.3978 4.92861 12.7654C5.1316 13.2554 5.52094 13.6448 6.011 13.8478C6.37854 14 6.84448 14 7.77637 14V14" stroke="#6F7889" strokeWidth="1.6" />
                                        <rect x="10.7764" y="10" width="10" height="10" rx="2" stroke="#6F7889" strokeWidth="1.6" />
                                    </svg>
                                </span>
                            </div>

                        </div>
                        <div className='px-[9px] py-[6px] bg-[#D9FFE1] rounded-[64px] text-[#098C26] flex gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                <path d="M7.92512 11.0001L10.606 13.6809L15.0741 8.31922M19.5421 11.0001C19.5421 15.4419 15.9414 19.0426 11.4996 19.0426C7.0578 19.0426 3.45703 15.4419 3.45703 11.0001C3.45703 6.55829 7.0578 2.95752 11.4996 2.95752C15.9414 2.95752 19.5421 6.55829 19.5421 11.0001Z" stroke="#098C26" strokeWidth="1.42979" strokeLinecap="round" />
                            </svg>
                            Verified
                        </div>
                    </div>
                </div>
                <div className='pt-6'>

                    <Link to="/about-us" className={`flex justify-between my-2 items-center px-4 py-4 ${currentPath === '/about-us' ? 'bg-primaryPurple text-white' : ''} `}>
                        <div className='flex gap-2 text-base font-semibold'>
                            <span>
                                {
                                    currentPath === '/about-us' ?
                                        <AboutIconLight />
                                        :
                                        <AboutIconDark />
                                }
                            </span>
                            <span>About Hilalfolio </span>
                        </div>
                        <div>
                            {
                                currentPath === '/about-us' ?
                                    <RightArrowLight />
                                    :
                                    <RightArrowDark />
                            }

                        </div>
                    </Link>
                    <Link to="/subscription" className={`flex justify-between my-2 items-center px-5 py-4 border-lightThemeOutline border-t-[1px] ${currentPath === '/subscription' ? 'bg-primaryPurple text-white' : ''}`}>
                        <div className='flex gap-2 text-base font-semibold'>
                            <span>
                                {
                                    currentPath === '/subscription' ?
                                        <SubscriptionIconLight />
                                        :
                                        <SubscriptionIconDark />
                                }

                            </span>
                            <span>My Subscription</span>
                        </div>
                        <div>
                            {
                                currentPath === '/subscription' ?
                                    <RightArrowLight />
                                    :
                                    <RightArrowDark />
                            }
                        </div>
                    </Link>
                    <div className='flex justify-between my-2 items-center px-5 py-4 border-lightThemeOutline border-t-[1px]'>
                        <div className='flex gap-2 text-base font-semibold'>
                            <span>
                                {
                                    isDarkMode ?

                                        <svg className='mt-[2px]' width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.56851 13.3984C4.11418 14.9441 5.99759 15.7169 8.21873 15.7169C10.125 15.7169 11.8085 15.1171 13.2695 13.9176C14.7304 12.7181 15.6273 11.1965 15.9603 9.3528C16.0035 9.1701 15.9972 9.01115 15.9413 8.87594C15.8854 8.74073 15.7999 8.63405 15.6848 8.55593C15.5812 8.4778 15.4561 8.42883 15.3094 8.409C15.1628 8.38915 15.0126 8.41289 14.8587 8.4802C14.5438 8.63405 14.1766 8.76926 13.7572 8.88583C13.3377 9.00241 12.8978 9.0607 12.4375 9.0607C10.901 9.0607 9.59501 8.52294 8.51948 7.44743C7.44395 6.3719 6.90618 5.0659 6.90618 3.52943C6.90618 3.11063 6.95306 2.71147 7.04681 2.33193C7.14056 1.95239 7.28418 1.58654 7.47768 1.23438C7.57263 1.06852 7.6117 0.902357 7.59487 0.735889C7.57804 0.56942 7.52275 0.427895 7.429 0.311317C7.33525 0.194739 7.21326 0.106998 7.06302 0.0480915C6.91279 -0.0107992 6.73911 -0.0156036 6.54199 0.0336776C4.63695 0.449553 3.11203 1.37684 1.96722 2.81554C0.822406 4.25423 0.25 5.89844 0.25 7.74818C0.25 9.96932 1.02284 11.8527 2.56851 13.3984Z" fill="#667085" />
                                        </svg>

                                        :
                                        <SunIcon />
                                }
                            </span>
                            <span>Dark Mode</span>
                        </div>
                        <div>
                            <IOSSwitch
                                checked={isDarkMode}
                                onChange={toggleTheme}
                            />

                        </div>
                    </div>
                    <Link to="/settings" className={`flex justify-between my-2 items-center px-5 py-4 border-lightThemeOutline border-t-[1px] ${currentPath === '/settings' ? 'bg-primaryPurple text-white' : ''}`}>
                        <div className='flex gap-2 text-base font-semibold'>
                            <span>

                                {
                                    currentPath === '/settings' ?
                                        <SettingIconLight />
                                        :
                                        <SettingIconDark />
                                }
                            </span>
                            <span>Settings</span>
                        </div>
                        <div>
                            {
                                currentPath === '/settings' ?
                                    <RightArrowLight />
                                    :
                                    <RightArrowDark />
                            }
                        </div>
                    </Link>
                    <Link to="/help-center" className={`flex justify-between my-2 items-center px-5 py-4 border-lightThemeOutline border-t-[1px] ${currentPath === '/help-center' ? 'bg-primaryPurple text-white' : ''}`}>
                        <div className='flex gap-2 text-base font-semibold'>
                            <span>
                                {
                                    currentPath === '/help-center' ?
                                        <HelpCenterIconLight />
                                        :
                                        <HelpCenterIcon />
                                }

                            </span>
                            <span>Help Center</span>
                        </div>
                        <div>
                            {
                                currentPath === '/help-center' ?
                                    <RightArrowLight />
                                    :
                                    <RightArrowDark />
                            }
                        </div>
                    </Link>
                    <div onClick={() => handleCopy(window.location.origin, 'URL Copied.')} className='flex cursor-pointer justify-between my-2 items-center px-5 py-4 border-lightThemeOutline border-t-[1px]'>
                        <div className='flex gap-2 text-base font-semibold'>
                            <span>
                                <ShareIcon />
                            </span>
                            <span>Share with friends</span>
                        </div>
                        <div>

                            <RightArrowDark />

                        </div>
                    </div>
                    <div onClick={handleSignOut} className='cursor-pointer flex justify-between my-2 items-center px-5 py-4 '>
                        <div className='flex gap-2 text-base font-semibold'>
                            <span>
                                <LogoutRedIcon />
                            </span>
                            <span className='text-[#CD0000]'>Logout</span>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default SideBar