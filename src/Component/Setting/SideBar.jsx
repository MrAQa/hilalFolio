
import React from 'react'
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { AboutIconDark, AboutIconLight, RightArrowDark, RightArrowLight, SettingIconDark, SettingIconLight, SubscriptionIconDark, SubscriptionIconLight } from '../../assets/custom-icon';
function SideBar() {
    const currentPath = window.location.pathname;

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
    return (
        <div className='border-[1px] border-[#D7D9E4] rounded-3xl bg-[#fff]'>
            <div className="px-5">
                <h2 className="text-2xl font-bold tracking-tight text-[#0C0F14] sm:text-32 border-[#D7D9E4] border-b-[1px] pt-6  pb-[30px]">
                    Account Setting
                </h2>
                <div className='pt-6 flex flex-col sm:flex-row items-center gap-4'>
                    <span className='flex relative'>
                        <img
                            className='rounded-full w-[80px] h-[80px] object-cover'
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt='avatar' />

                    </span>
                    <div className='text-base font-semibold text-center sm:text-left space-y-2'>
                        <div className='text-xl font-semibold'>Michael Smith</div>
                        <div className='text-[#6F7889] flex'>ID: 2895 <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M14.7764 7V7C14.7764 6.06812 14.7764 5.60218 14.6241 5.23463C14.4211 4.74458 14.0318 4.35523 13.5417 4.15224C13.1742 4 12.7083 4 11.7764 4H8.77637C6.89075 4 5.94794 4 5.36215 4.58579C4.77637 5.17157 4.77637 6.11438 4.77637 8V11C4.77637 11.9319 4.77637 12.3978 4.92861 12.7654C5.1316 13.2554 5.52094 13.6448 6.011 13.8478C6.37854 14 6.84448 14 7.77637 14V14" stroke="#6F7889" strokeWidth="1.6" />
                            <rect x="10.7764" y="10" width="10" height="10" rx="2" stroke="#6F7889" strokeWidth="1.6" />
                        </svg></span></div>

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

                <Link to="/about-us" className={`flex justify-between items-center px-4 py-4 ${currentPath === '/about-us' ? 'bg-primaryPurple text-white' : ''} `}>
                    <div className='flex gap-2 text-base font-semibold'>
                        <span>
                            {
                                currentPath === '/about-us' ?
                                    <AboutIconLight />
                                    :
                                    <AboutIconDark />
                            }
                        </span>
                        <span>About HilalFolio </span>
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
                <Link to="/subscription" className={`flex justify-between items-center px-5 py-4 border-[#D7D9E4] border-t-[1px] ${currentPath === '/subscription' ? 'bg-primaryPurple text-white' : ''}`}>
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
                <div className='flex justify-between items-center px-5 py-4 border-[#D7D9E4] border-t-[1px]'>
                    <div className='flex gap-2 text-base font-semibold'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <mask id="mask0_1657_9529" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                    <rect width="24" height="24" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_1657_9529)">
                                    <path d="M12 15C12.8333 15 13.5417 14.7083 14.125 14.125C14.7083 13.5416 15 12.8333 15 12C15 11.1666 14.7083 10.4583 14.125 9.87498C13.5417 9.29164 12.8333 8.99998 12 8.99998C11.1667 8.99998 10.4583 9.29164 9.875 9.87498C9.29167 10.4583 9 11.1666 9 12C9 12.8333 9.29167 13.5416 9.875 14.125C10.4583 14.7083 11.1667 15 12 15ZM12 16.5C10.7513 16.5 9.68913 16.0621 8.81348 15.1865C7.93784 14.3109 7.50003 13.2487 7.50003 12C7.50003 10.7513 7.93784 9.6891 8.81348 8.81345C9.68913 7.93782 10.7513 7.5 12 7.5C13.2487 7.5 14.3109 7.93782 15.1865 8.81345C16.0622 9.6891 16.5 10.7513 16.5 12C16.5 13.2487 16.0622 14.3109 15.1865 15.1865C14.3109 16.0621 13.2487 16.5 12 16.5ZM2 12.75C1.7875 12.75 1.60938 12.6781 1.46565 12.5343C1.32188 12.3904 1.25 12.2122 1.25 11.9997C1.25 11.7871 1.32188 11.609 1.46563 11.4654C1.60936 11.3218 1.78747 11.25 1.99998 11.25H4.25C4.46248 11.25 4.6406 11.3219 4.78435 11.4657C4.92812 11.6095 5 11.7877 5 12.0003C5 12.2129 4.92812 12.391 4.78437 12.5346C4.64062 12.6782 4.46251 12.75 4.25003 12.75H2ZM19.75 12.75C19.5375 12.75 19.3594 12.6781 19.2156 12.5343C19.0719 12.3904 19 12.2122 19 11.9997C19 11.7871 19.0719 11.609 19.2156 11.4654C19.3594 11.3218 19.5375 11.25 19.75 11.25H22C22.2125 11.25 22.3906 11.3219 22.5344 11.4657C22.6781 11.6095 22.75 11.7877 22.75 12.0003C22.75 12.2129 22.6781 12.391 22.5344 12.5346C22.3906 12.6782 22.2125 12.75 22 12.75H19.75ZM11.9997 4.99998C11.7871 4.99998 11.609 4.9281 11.4654 4.78435C11.3218 4.6406 11.25 4.46248 11.25 4.25V1.99998C11.25 1.78748 11.3219 1.60935 11.4657 1.4656C11.6095 1.32187 11.7877 1.25 12.0003 1.25C12.2129 1.25 12.391 1.32187 12.5346 1.4656C12.6782 1.60935 12.75 1.78748 12.75 1.99998V4.25C12.75 4.46248 12.6781 4.6406 12.5343 4.78435C12.3905 4.9281 12.2123 4.99998 11.9997 4.99998ZM11.9997 22.75C11.7871 22.75 11.609 22.6781 11.4654 22.5343C11.3218 22.3906 11.25 22.2125 11.25 22V19.75C11.25 19.5375 11.3219 19.3594 11.4657 19.2156C11.6095 19.0719 11.7877 19 12.0003 19C12.2129 19 12.391 19.0719 12.5346 19.2156C12.6782 19.3594 12.75 19.5375 12.75 19.75V22C12.75 22.2125 12.6781 22.3906 12.5343 22.5343C12.3905 22.6781 12.2123 22.75 11.9997 22.75ZM6.0058 7.04033L4.7481 5.81725C4.59938 5.67878 4.52758 5.50475 4.5327 5.29515C4.53783 5.08553 4.61061 4.90317 4.75102 4.74805C4.90419 4.59292 5.08398 4.51535 5.29038 4.51535C5.49679 4.51535 5.67243 4.59292 5.8173 4.74805L7.05 5.99615C7.19487 6.15128 7.2673 6.32693 7.2673 6.52308C7.2673 6.71923 7.19647 6.89486 7.0548 7.04998C6.91315 7.20509 6.74168 7.27848 6.5404 7.27015C6.33912 7.26182 6.16092 7.18519 6.0058 7.04033ZM18.1827 19.2519L16.95 18.0038C16.8051 17.8487 16.7327 17.6705 16.7327 17.4692C16.7327 17.2679 16.8051 17.0948 16.95 16.95C17.0852 16.7949 17.2543 16.7215 17.4572 16.7298C17.6601 16.7381 17.8391 16.8147 17.9942 16.9596L19.2519 18.1827C19.4006 18.3211 19.4724 18.4952 19.4673 18.7048C19.4622 18.9144 19.3894 19.0968 19.249 19.2519C19.0958 19.407 18.916 19.4846 18.7096 19.4846C18.5032 19.4846 18.3276 19.407 18.1827 19.2519ZM16.95 7.05478C16.7949 6.91313 16.7215 6.74166 16.7298 6.54038C16.7382 6.33909 16.8148 6.16089 16.9596 6.00578L18.1827 4.74808C18.3212 4.59936 18.4952 4.52756 18.7048 4.53268C18.9144 4.53781 19.0968 4.61058 19.2519 4.751C19.407 4.90417 19.4846 5.08395 19.4846 5.29035C19.4846 5.49677 19.407 5.67241 19.2519 5.81728L18.0038 7.04998C17.8487 7.19484 17.673 7.26728 17.4769 7.26728C17.2808 7.26728 17.1051 7.19644 16.95 7.05478ZM4.7481 19.254C4.59297 19.0975 4.5154 18.916 4.5154 18.7096C4.5154 18.5032 4.59297 18.3275 4.7481 18.1827L5.99618 16.95C6.15131 16.8051 6.32951 16.7327 6.53077 16.7327C6.73206 16.7327 6.90513 16.8051 7.05 16.95C7.19872 17.0852 7.26891 17.2543 7.26058 17.4572C7.25224 17.6601 7.17884 17.8391 7.04037 17.9942L5.8173 19.2519C5.67243 19.407 5.49679 19.482 5.29038 19.4769C5.08398 19.4718 4.90322 19.3975 4.7481 19.254Z" fill="#6F7889" />
                                </g>
                            </svg>
                        </span>
                        <span>Dark Mode</span>
                    </div>
                    <div>
                        <IOSSwitch />

                    </div>
                </div>
                <Link to="/settings" className={`flex justify-between items-center px-5 py-4 border-[#D7D9E4] border-t-[1px] ${currentPath === '/settings' ? 'bg-primaryPurple text-white' : ''}`}>
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
                <div className='flex justify-between items-center px-5 py-4 border-[#D7D9E4] border-t-[1px]'>
                    <div className='flex gap-2 text-base font-semibold'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <mask id="mask0_1616_6788" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                    <rect width="24" height="24" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_1616_6788)">
                                    <path d="M11.989 17.6153C12.2745 17.6153 12.5157 17.5168 12.7125 17.3196C12.9093 17.1225 13.0077 16.8811 13.0077 16.5956C13.0077 16.31 12.9091 16.0689 12.7119 15.8721C12.5148 15.6753 12.2734 15.5769 11.9879 15.5769C11.7024 15.5769 11.4612 15.6755 11.2644 15.8726C11.0676 16.0698 10.9692 16.3111 10.9692 16.5967C10.9692 16.8822 11.0678 17.1234 11.265 17.3202C11.4621 17.5169 11.7034 17.6153 11.989 17.6153ZM12.0016 21.5C10.6877 21.5 9.45268 21.2506 8.29655 20.752C7.1404 20.2533 6.13472 19.5765 5.2795 18.7217C4.42427 17.8669 3.74721 16.8616 3.24833 15.706C2.74944 14.5504 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45268 3.248 8.29655C3.74667 7.1404 4.42342 6.13472 5.27825 5.2795C6.1331 4.42427 7.13834 3.74721 8.29398 3.24833C9.44959 2.74944 10.6844 2.5 11.9983 2.5C13.3122 2.5 14.5473 2.74933 15.7034 3.248C16.8596 3.74667 17.8652 4.42342 18.7205 5.27825C19.5757 6.1331 20.2527 7.13834 20.7516 8.29398C21.2505 9.44959 21.5 10.6844 21.5 11.9983C21.5 13.3122 21.2506 14.5473 20.752 15.7034C20.2533 16.8596 19.5765 17.8652 18.7217 18.7205C17.8669 19.5757 16.8616 20.2527 15.706 20.7516C14.5504 21.2505 13.3156 21.5 12.0016 21.5ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76664 19.225 7.87498 17.675 6.32498C16.125 4.77498 14.2333 3.99998 12 3.99998C9.76664 3.99998 7.87498 4.77498 6.32498 6.32498C4.77498 7.87498 3.99998 9.76664 3.99998 12C3.99998 14.2333 4.77498 16.125 6.32498 17.675C7.87498 19.225 9.76664 20 12 20ZM12.081 7.7192C12.5424 7.7192 12.9416 7.86444 13.2788 8.15493C13.616 8.44541 13.7846 8.80851 13.7846 9.24423C13.7846 9.61089 13.6769 9.93909 13.4615 10.2288C13.2461 10.5186 13 10.7885 12.7231 11.0385C12.3601 11.3605 12.0405 11.7147 11.7643 12.1011C11.4881 12.4875 11.3404 12.9179 11.3211 13.3923C11.3147 13.5743 11.3788 13.7269 11.5135 13.85C11.6481 13.973 11.8051 14.0346 11.9846 14.0346C12.1769 14.0346 12.3397 13.9705 12.4731 13.8423C12.6064 13.7141 12.6916 13.557 12.7288 13.3711C12.7955 13.0275 12.9375 12.7215 13.1548 12.4529C13.3721 12.1843 13.6075 11.9289 13.861 11.6867C14.2254 11.3314 14.5435 10.9441 14.8153 10.5247C15.0871 10.1052 15.223 9.63738 15.223 9.12115C15.223 8.32885 14.9109 7.67789 14.2865 7.16828C13.6622 6.65866 12.9333 6.40385 12.1 6.40385C11.5051 6.40385 10.9442 6.53558 10.4173 6.79905C9.89038 7.0625 9.48013 7.44679 9.18653 7.95193C9.09551 8.10704 9.06629 8.27032 9.09888 8.44175C9.13146 8.61317 9.21943 8.74333 9.3628 8.83223C9.54528 8.93381 9.73268 8.9628 9.92498 8.9192C10.1173 8.87562 10.2807 8.76601 10.4154 8.59038C10.6179 8.32754 10.8631 8.11664 11.1509 7.95768C11.4387 7.79869 11.7488 7.7192 12.081 7.7192Z" fill="#6F7889" />
                                </g>
                            </svg>
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
                </div>
                <div className='flex justify-between items-center px-5 py-4 border-[#D7D9E4] border-t-[1px]'>
                    <div className='flex gap-2 text-base font-semibold'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="8" r="4" stroke="#747474" strokeWidth="1.6" strokeLinecap="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0003 15.9386C15.9393 15.9146 15.8779 15.8912 15.8161 15.8684C14.2785 15.2997 12.5616 15.0889 10.8775 15.2552C9.19389 15.4214 7.59492 15.9595 6.2859 16.8205C4.9767 17.6816 3.997 18.8414 3.51951 20.1779C3.37086 20.594 3.58765 21.0518 4.00372 21.2004C4.41979 21.3491 4.87759 21.1323 5.02624 20.7162C5.36778 19.7602 6.09513 18.8611 7.16513 18.1573C8.2353 17.4534 9.58082 16.991 11.0347 16.8474C11.4879 16.8027 11.9431 16.7898 12.3943 16.8078C12.7588 16.3176 13.3424 16 14.0003 16L16.0003 16V15.9386Z" fill="#747474" />
                                <path d="M18 14L18 22" stroke="#747474" strokeWidth="1.6" strokeLinecap="round" />
                                <path d="M22 18L14 18" stroke="#747474" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                        </span>
                        <span>Share with friends</span>
                    </div>
                    <div>

                        <RightArrowDark />

                    </div>
                </div>
                <div className='flex justify-between items-center px-5 py-4 '>
                    <div className='flex gap-2 text-base font-semibold'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <mask id="mask0_1616_6807" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                                    <rect y="0.000244141" width="24" height="24" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_1616_6807)">
                                    <path d="M5.3077 20.5002C4.80257 20.5002 4.375 20.3252 4.025 19.9752C3.675 19.6252 3.5 19.1976 3.5 18.6925V5.30795C3.5 4.80281 3.675 4.37524 4.025 4.02524C4.375 3.67524 4.80257 3.50024 5.3077 3.50024H11.2596C11.4724 3.50024 11.6506 3.57204 11.7942 3.71564C11.9378 3.85923 12.0096 4.03743 12.0096 4.25024C12.0096 4.46306 11.9378 4.64126 11.7942 4.78485C11.6506 4.92843 11.4724 5.00022 11.2596 5.00022H5.3077C5.23077 5.00022 5.16024 5.03227 5.09612 5.09637C5.03202 5.16049 4.99997 5.23101 4.99997 5.30795V18.6925C4.99997 18.7694 5.03202 18.84 5.09612 18.9041C5.16024 18.9682 5.23077 19.0002 5.3077 19.0002H11.2596C11.4724 19.0002 11.6506 19.072 11.7942 19.2156C11.9378 19.3592 12.0096 19.5374 12.0096 19.7502C12.0096 19.963 11.9378 20.1412 11.7942 20.2848C11.6506 20.4284 11.4724 20.5002 11.2596 20.5002H5.3077ZM17.6173 12.7502H9.84612C9.63331 12.7502 9.45511 12.6784 9.31152 12.5348C9.16792 12.3912 9.09612 12.213 9.09612 12.0002C9.09612 11.7874 9.16792 11.6092 9.31152 11.4656C9.45511 11.322 9.63331 11.2502 9.84612 11.2502H17.6173L15.6942 9.32717C15.5558 9.1887 15.4849 9.0198 15.4817 8.82045C15.4785 8.6211 15.5494 8.44385 15.6942 8.28872C15.8391 8.1336 16.0147 8.05348 16.2211 8.04834C16.4275 8.04321 16.6083 8.11821 16.7634 8.27334L19.8576 11.3675C20.0384 11.5483 20.1288 11.7592 20.1288 12.0002C20.1288 12.2412 20.0384 12.4521 19.8576 12.6329L16.7634 15.7271C16.6147 15.8758 16.4381 15.9492 16.2336 15.9473C16.0292 15.9454 15.8494 15.8668 15.6942 15.7117C15.5494 15.5566 15.4795 15.3784 15.4846 15.1771C15.4898 14.9758 15.5648 14.8028 15.7096 14.6579L17.6173 12.7502Z" fill="#CD0000" />
                                </g>
                            </svg>
                        </span>
                        <span className='text-[#CD0000]'>Logout</span>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default SideBar