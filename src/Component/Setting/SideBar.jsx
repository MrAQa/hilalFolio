import React from 'react'

function SideBar() {
    return (
        <div className='border-[#D7D9E4] border-x-[1px]'>
            <div className='pt-6'>
                <h3 className='text-sm text-[#747474] px-[38px]'>Privacy</h3>
                <div className='flex justify-between items-center px-[38px] py-4'>
                    <div className='flex gap-2 text-base'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18.6667 19.451C18.2734 18.2697 17.4069 17.2259 16.2016 16.4814C14.9962 15.7369 13.5193 15.3333 12 15.3333C10.4807 15.3333 9.00379 15.7369 7.79843 16.4814C6.59306 17.2259 5.72657 18.2697 5.33333 19.451M15.3333 9.77778C15.3333 11.6187 13.8409 13.1111 12 13.1111C10.1591 13.1111 8.66667 11.6187 8.66667 9.77778C8.66667 7.93683 10.1591 6.44444 12 6.44444C13.8409 6.44444 15.3333 7.93683 15.3333 9.77778ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#747474" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                        </span>
                        <span>Profile</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                            <path d="M9 8C9 7.79248 8.91699 7.60156 8.75928 7.45215L2.18506 1.01074C2.03564 0.869629 1.85303 0.794922 1.63721 0.794922C1.21387 0.794922 0.881836 1.11865 0.881836 1.55029C0.881836 1.75781 0.964844 1.94873 1.09766 2.08984L7.14062 8L1.09766 13.9102C0.964844 14.0513 0.881836 14.2339 0.881836 14.4497C0.881836 14.8813 1.21387 15.2051 1.63721 15.2051C1.85303 15.2051 2.03564 15.1304 2.18506 14.981L8.75928 8.54785C8.91699 8.39014 9 8.20752 9 8Z" fill="#747474" />
                        </svg>
                    </div>
                </div>
                <div className='flex justify-between items-center px-[38px] py-4 border-[#D7D9E4] border-t-[1px]'>
                    <div className='flex gap-2 text-base'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12.8245 3.15322L19.2082 4.85553C19.6751 4.98005 20 5.40293 20 5.88618V12.3082C20 14.448 18.9306 16.4463 17.1501 17.6333L12.5917 20.6722C12.2334 20.9111 11.7666 20.9111 11.4083 20.6722L6.84992 17.6333C5.06945 16.4463 4 14.448 4 12.3082V5.88618C4 5.40293 4.32489 4.98005 4.79183 4.85553L11.1755 3.15322C11.7157 3.00916 12.2843 3.00916 12.8245 3.15322Z" stroke="#747474" strokeWidth="1.70667" strokeLinecap="round" />
                                <path d="M9.33353 11.4667L11.2783 13.4115C11.3824 13.5156 11.5513 13.5156 11.6554 13.4115L15.2002 9.8667" stroke="#747474" strokeWidth="1.70667" strokeLinecap="round" />
                            </svg>
                        </span>
                        <span>Security</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                            <path d="M9 8C9 7.79248 8.91699 7.60156 8.75928 7.45215L2.18506 1.01074C2.03564 0.869629 1.85303 0.794922 1.63721 0.794922C1.21387 0.794922 0.881836 1.11865 0.881836 1.55029C0.881836 1.75781 0.964844 1.94873 1.09766 2.08984L7.14062 8L1.09766 13.9102C0.964844 14.0513 0.881836 14.2339 0.881836 14.4497C0.881836 14.8813 1.21387 15.2051 1.63721 15.2051C1.85303 15.2051 2.03564 15.1304 2.18506 14.981L8.75928 8.54785C8.91699 8.39014 9 8.20752 9 8Z" fill="#747474" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className='pt-[14px]'>
                <h3 className='text-sm text-[#747474] px-[38px]'>Finance</h3>
                <div className='flex justify-between items-center px-[38px] py-4'>
                    <div className='flex gap-2 text-base'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M8.23047 12.5386L15.7689 12.5386" stroke="#747474" strokeWidth="1.72308" strokeLinecap="round" />
                                <path d="M8.23047 15.7693L12.5382 15.7693" stroke="#747474" strokeWidth="1.72308" strokeLinecap="round" />
                                <path d="M5 5.43081C5 4.52611 5 4.07376 5.17607 3.72821C5.33094 3.42425 5.57806 3.17713 5.88202 3.02226C6.22757 2.84619 6.67992 2.84619 7.58462 2.84619H12.5448C12.9399 2.84619 13.1375 2.84619 13.3234 2.89082C13.4882 2.9304 13.6458 2.99566 13.7903 3.08423C13.9533 3.18413 14.093 3.32382 14.3724 3.60321L18.243 7.47379C18.5224 7.75317 18.6621 7.89287 18.762 8.05588C18.8505 8.20042 18.9158 8.35799 18.9554 8.52282C19 8.70873 19 8.90628 19 9.30139V18.5693C19 19.474 19 19.9263 18.8239 20.2719C18.6691 20.5758 18.4219 20.8229 18.118 20.9778C17.7724 21.1539 17.3201 21.1539 16.4154 21.1539H7.58462C6.67992 21.1539 6.22757 21.1539 5.88202 20.9778C5.57806 20.8229 5.33094 20.5758 5.17607 20.2719C5 19.9263 5 19.474 5 18.5693V5.43081Z" stroke="#747474" strokeWidth="1.72308" />
                                <path d="M12.5381 2.84619V6.72311C12.5381 7.62781 12.5381 8.08016 12.7142 8.42571C12.869 8.72967 13.1161 8.97679 13.4201 9.13166C13.7657 9.30773 14.218 9.30773 15.1227 9.30773H18.9996" stroke="#747474" strokeWidth="1.72308" />
                            </svg>
                        </span>
                        <span>History</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                            <path d="M9 8C9 7.79248 8.91699 7.60156 8.75928 7.45215L2.18506 1.01074C2.03564 0.869629 1.85303 0.794922 1.63721 0.794922C1.21387 0.794922 0.881836 1.11865 0.881836 1.55029C0.881836 1.75781 0.964844 1.94873 1.09766 2.08984L7.14062 8L1.09766 13.9102C0.964844 14.0513 0.881836 14.2339 0.881836 14.4497C0.881836 14.8813 1.21387 15.2051 1.63721 15.2051C1.85303 15.2051 2.03564 15.1304 2.18506 14.981L8.75928 8.54785C8.91699 8.39014 9 8.20752 9 8Z" fill="#747474" />
                        </svg>
                    </div>
                </div>
                <div className='flex justify-between items-center px-[38px] py-4 border-[#D7D9E4] border-t-[1px]'>
                    <div className='flex gap-2 text-base'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.51074 16.3275C5.83276 16.8104 6.20924 17.2583 6.63471 17.6615C7.72884 18.6986 9.10005 19.3963 10.5824 19.6704C12.0648 19.9444 13.5949 19.783 14.9875 19.2057C16.38 18.6284 17.5755 17.66 18.4292 16.4175C19.2829 15.175 19.7583 13.7117 19.7978 12.2047C19.8373 10.6978 19.4392 9.2116 18.6518 7.92609C17.8644 6.64059 16.7213 5.61081 15.3608 4.96134C14.4601 4.53135 13.4897 4.28026 12.503 4.21655L12.9468 5.873C13.5415 5.96486 14.1228 6.14328 14.6715 6.40524C15.7529 6.92148 16.6615 7.74003 17.2874 8.76184C17.9133 9.78365 18.2297 10.965 18.1983 12.1628C18.1669 13.3607 17.7891 14.5238 17.1105 15.5114C16.4319 16.499 15.4817 17.2688 14.3747 17.7277C13.2678 18.1866 12.0516 18.3149 10.8733 18.097C9.695 17.8792 8.60507 17.3246 7.73537 16.5003C7.53151 16.307 7.3418 16.1009 7.16719 15.8836L5.51074 16.3275Z" fill="#747474" />
                                <path d="M5.91239 4.06647C6.68924 3.47037 7.54796 2.99272 8.46042 2.64739C8.87978 2.48868 9.08946 2.40932 9.28694 2.51053C9.48442 2.61174 9.54649 2.84338 9.67063 3.30667L11.7412 11.0341C11.8632 11.4894 11.9242 11.7171 11.8206 11.8964C11.7171 12.0758 11.4894 12.1368 11.0341 12.2588L3.30667 14.3294C2.84338 14.4535 2.61174 14.5156 2.42535 14.3952C2.23896 14.2747 2.20284 14.0535 2.13061 13.6109C1.97344 12.6481 1.95774 11.6656 2.08555 10.6947C2.25696 9.39275 2.68314 8.13728 3.33975 7C3.99636 5.86272 4.87054 4.8659 5.91239 4.06647Z" stroke="#747474" strokeWidth="1.6" />
                            </svg>
                        </span>
                        <span>Limits</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                            <path d="M9 8C9 7.79248 8.91699 7.60156 8.75928 7.45215L2.18506 1.01074C2.03564 0.869629 1.85303 0.794922 1.63721 0.794922C1.21387 0.794922 0.881836 1.11865 0.881836 1.55029C0.881836 1.75781 0.964844 1.94873 1.09766 2.08984L7.14062 8L1.09766 13.9102C0.964844 14.0513 0.881836 14.2339 0.881836 14.4497C0.881836 14.8813 1.21387 15.2051 1.63721 15.2051C1.85303 15.2051 2.03564 15.1304 2.18506 14.981L8.75928 8.54785C8.91699 8.39014 9 8.20752 9 8Z" fill="#747474" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className='pt-[14px]'>
                <h3 className='text-sm text-[#747474] px-[38px]'>Account</h3>
                <div className='flex justify-between items-center px-[38px] py-4'>
                    <div className='flex gap-2 text-base'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z" stroke="#747474" strokeWidth="1.6" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9992 13.8677L18.8665 13.735L18.8427 13.7112C18.449 13.3174 18.1181 12.9866 17.8247 12.7393C17.5178 12.4806 17.197 12.2647 16.8088 12.1476C16.2813 11.9885 15.7187 11.9885 15.1912 12.1476C14.803 12.2647 14.4822 12.4806 14.1753 12.7393C13.8819 12.9866 13.551 13.3174 13.1573 13.7112L13.1335 13.735C12.8295 14.039 12.6411 14.2262 12.492 14.3495C12.4151 14.413 12.3727 14.4386 12.3565 14.4474C12.3182 14.4511 12.2797 14.4436 12.2456 14.426C12.2338 14.4119 12.2039 14.3723 12.1561 14.2848C12.0635 14.1149 11.9581 13.8711 11.7887 13.476L11.7353 13.3514L11.717 13.3087L11.717 13.3087C11.3578 12.4704 11.0626 11.7815 10.7721 11.2654C10.4745 10.7364 10.1192 10.27 9.58019 9.9998C9.11933 9.76876 8.60363 9.66945 8.08992 9.7128C7.48914 9.7635 6.98604 10.0646 6.51324 10.4452C6.08155 10.7927 5.58977 11.279 5 11.8685V12.9998C5 13.4053 5.00019 13.7808 5.00161 14.1296L5.97557 13.1556C6.66147 12.4697 7.13058 12.0022 7.51645 11.6916C7.89868 11.384 8.09642 11.3179 8.22447 11.3071C8.44463 11.2886 8.66564 11.3311 8.86315 11.4301C8.97803 11.4877 9.13711 11.6225 9.37774 12.0501C9.62066 12.4817 9.88258 13.0901 10.2647 13.9816L10.3181 14.1062L10.332 14.1387C10.4831 14.4913 10.6181 14.8063 10.7515 15.0509C10.8903 15.3054 11.08 15.587 11.39 15.7788C11.7655 16.0113 12.2134 16.0976 12.6485 16.0212C13.0076 15.9582 13.2883 15.7672 13.5116 15.5825C13.7263 15.4049 13.9687 15.1626 14.2399 14.8913L14.2399 14.8913L14.2649 14.8663C14.6886 14.4426 14.9714 14.1608 15.2064 13.9627C15.4337 13.7712 15.5605 13.7074 15.6534 13.6794C15.8794 13.6112 16.1206 13.6112 16.3466 13.6794C16.4395 13.7074 16.5663 13.7712 16.7936 13.9627C17.0286 14.1608 17.3114 14.4426 17.7351 14.8663L18.9592 16.0904C18.989 15.4838 18.9971 14.759 18.9992 13.8677Z" fill="#747474" />
                                <circle cx="16.5" cy="7.5" r="1.5" fill="#747474" />
                            </svg>
                        </span>
                        <span>Theme</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                            <path d="M9 8C9 7.79248 8.91699 7.60156 8.75928 7.45215L2.18506 1.01074C2.03564 0.869629 1.85303 0.794922 1.63721 0.794922C1.21387 0.794922 0.881836 1.11865 0.881836 1.55029C0.881836 1.75781 0.964844 1.94873 1.09766 2.08984L7.14062 8L1.09766 13.9102C0.964844 14.0513 0.881836 14.2339 0.881836 14.4497C0.881836 14.8813 1.21387 15.2051 1.63721 15.2051C1.85303 15.2051 2.03564 15.1304 2.18506 14.981L8.75928 8.54785C8.91699 8.39014 9 8.20752 9 8Z" fill="#747474" />
                        </svg>
                    </div>
                </div>
                <div className='flex justify-between items-center px-[38px] py-4 border-[#D7D9E4] border-t-[1px]'>
                    <div className='flex gap-2 text-base'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6.44784 8.96942C6.76219 6.14032 9.15349 4 12 4V4C14.8465 4 17.2378 6.14032 17.5522 8.96942L17.804 11.2356C17.8072 11.2645 17.8088 11.279 17.8104 11.2933C17.9394 12.4169 18.3051 13.5005 18.8836 14.4725C18.8909 14.4849 18.8984 14.4973 18.9133 14.5222L19.4914 15.4856C20.0159 16.3599 20.2782 16.797 20.2216 17.1559C20.1839 17.3946 20.061 17.6117 19.8757 17.7668C19.5971 18 19.0873 18 18.0678 18H5.93223C4.91268 18 4.40291 18 4.12434 17.7668C3.93897 17.6117 3.81609 17.3946 3.77841 17.1559C3.72179 16.797 3.98407 16.3599 4.50862 15.4856L5.08665 14.5222C5.10161 14.4973 5.10909 14.4849 5.11644 14.4725C5.69488 13.5005 6.06064 12.4169 6.18959 11.2933C6.19123 11.279 6.19283 11.2645 6.19604 11.2356L6.44784 8.96942Z" stroke="#747474" strokeWidth="1.6" />
                                <path d="M9.10222 18.4059C9.27315 19.1501 9.64978 19.8077 10.1737 20.2767C10.6976 20.7458 11.3396 21 12 21C12.6604 21 13.3024 20.7458 13.8263 20.2767C14.3502 19.8077 14.7269 19.1501 14.8978 18.4059" stroke="#747474" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                        </span>
                        <span>Push Notifications</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                            <path d="M9 8C9 7.79248 8.91699 7.60156 8.75928 7.45215L2.18506 1.01074C2.03564 0.869629 1.85303 0.794922 1.63721 0.794922C1.21387 0.794922 0.881836 1.11865 0.881836 1.55029C0.881836 1.75781 0.964844 1.94873 1.09766 2.08984L7.14062 8L1.09766 13.9102C0.964844 14.0513 0.881836 14.2339 0.881836 14.4497C0.881836 14.8813 1.21387 15.2051 1.63721 15.2051C1.85303 15.2051 2.03564 15.1304 2.18506 14.981L8.75928 8.54785C8.91699 8.39014 9 8.20752 9 8Z" fill="#747474" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className='pt-[14px]'>
                <h3 className='text-sm text-[#747474] px-[38px]'>More</h3>
                <div className='flex justify-between items-center px-[38px] py-4'>
                    <div className='flex gap-2 text-base'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="9" stroke="#747474" strokeWidth="1.6" />
                                <circle cx="12" cy="18.5" r="1" fill="#747474" />
                                <path d="M12 16V15.1432C12 14.429 12.357 13.762 12.9512 13.3659L13.5497 12.9669C14.4558 12.3628 15 11.3459 15 10.2569V10C15 8.34315 13.6569 7 12 7V7C10.3431 7 9 8.34315 9 10V10" stroke="#747474" strokeWidth="1.6" />
                            </svg>
                        </span>
                        <span>Support</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                            <path d="M9 8C9 7.79248 8.91699 7.60156 8.75928 7.45215L2.18506 1.01074C2.03564 0.869629 1.85303 0.794922 1.63721 0.794922C1.21387 0.794922 0.881836 1.11865 0.881836 1.55029C0.881836 1.75781 0.964844 1.94873 1.09766 2.08984L7.14062 8L1.09766 13.9102C0.964844 14.0513 0.881836 14.2339 0.881836 14.4497C0.881836 14.8813 1.21387 15.2051 1.63721 15.2051C1.85303 15.2051 2.03564 15.1304 2.18506 14.981L8.75928 8.54785C8.91699 8.39014 9 8.20752 9 8Z" fill="#747474" />
                        </svg>
                    </div>
                </div>
                <div className='flex justify-between items-center px-[38px] py-4 border-[#D7D9E4] border-t-[1px]'>
                    <div className='flex gap-2 text-base'>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                            <path d="M9 8C9 7.79248 8.91699 7.60156 8.75928 7.45215L2.18506 1.01074C2.03564 0.869629 1.85303 0.794922 1.63721 0.794922C1.21387 0.794922 0.881836 1.11865 0.881836 1.55029C0.881836 1.75781 0.964844 1.94873 1.09766 2.08984L7.14062 8L1.09766 13.9102C0.964844 14.0513 0.881836 14.2339 0.881836 14.4497C0.881836 14.8813 1.21387 15.2051 1.63721 15.2051C1.85303 15.2051 2.03564 15.1304 2.18506 14.981L8.75928 8.54785C8.91699 8.39014 9 8.20752 9 8Z" fill="#747474" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar