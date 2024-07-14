import React from 'react'
import SideBar from '../Component/Setting/SideBar'
import NavBar from '../Component/Navbar'
import logo from "../assets/Logo-new.png";

import Footer from '../Component/Footer,'

function AboutPage() {
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
                                <div className="border-[1px] border-lightThemeOutline rounded-3xl px-4 sm:px-8 py-6 bg-white h-full">
                                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-32">
                                    <img className="h-auto  w-[200px]" src={logo} alt="Shariah" />
                        </h2>
                                    <div className='pt-6 flex flex-col text-lg gap-4'>

                                        <p className='text-lightThemeText'>"Our Crypto App is committed to offering a halal & ethical approach to managing digital assets in accordance with Islamic principles. With a focus on transparency and integrity, we provide users with a secure platform to engage in halal cryptocurrency transactions. Whether you're seeking to invest, save, or transact, our app ensures compliance with Islamic finance principles, distinguishing between halal and haram activities.</p>
                                        <p className='font-semibold'>Join us in embracing Islamic values as we revolutionize the world of digital web 3 cryptocurrency with integrity and faith-based guidance."</p>
                                        <p className='text-xl font-semibold'>
                                        Our Socials!
                                        </p>
                                        <div className='flex gap-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <path d="M31.9906 16.0006C31.9906 24.0816 26.0022 30.7623 18.2229 31.8464C17.4955 31.9473 16.7513 32 15.9959 32C15.1239 32 14.2676 31.9305 13.4337 31.796C5.81688 30.5695 0 23.9638 0 16.0006C0 7.16393 7.16182 0 15.9947 0C24.8276 0 31.9906 7.16393 31.9906 16.0006Z" fill="#1877F2" />
                                                <path d="M18.2228 12.8472V16.3327H22.5333L21.8508 21.028H18.2228V31.8456C17.4954 31.9465 16.7512 31.9992 15.9958 31.9992C15.1238 31.9992 14.2675 31.9297 13.4337 31.7952V21.028H9.45825V16.3327H13.4337V12.068C13.4337 9.42218 15.5777 7.27637 18.2239 7.27637V7.27861C18.2318 7.27861 18.2385 7.27637 18.2463 7.27637H22.5345V11.337H19.7325C18.8997 11.337 18.2239 12.0131 18.2239 12.8461L18.2228 12.8472Z" fill="white" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <path d="M16.0222 0H15.9493C7.13551 0 -0.00952148 7.14713 -0.00952148 15.9636V16.0364C-0.00952148 24.8529 7.13551 32 15.9493 32H16.0222C24.836 32 31.9811 24.8529 31.9811 16.0364V15.9636C31.9811 7.14713 24.836 0 16.0222 0Z" fill="url(#paint0_linear_1657_7530)" />
                                                <path d="M20.9366 6.51074H11.0378C8.30313 6.51074 6.07837 8.73616 6.07837 11.4717V20.5303C6.07837 23.2658 8.30313 25.4912 11.0378 25.4912H20.9366C23.6713 25.4912 25.8961 23.2658 25.8961 20.5303V11.4717C25.8961 8.73616 23.6713 6.51074 20.9366 6.51074ZM7.82792 11.4717C7.82792 9.70144 9.26812 8.2608 11.0378 8.2608H20.9366C22.7063 8.2608 24.1466 9.70144 24.1466 11.4717V20.5303C24.1466 22.3005 22.7063 23.7412 20.9366 23.7412H11.0378C9.26812 23.7412 7.82792 22.3005 7.82792 20.5303V11.4717Z" fill="white" />
                                                <path d="M15.9874 20.6145C18.5305 20.6145 20.6006 18.5449 20.6006 16C20.6006 13.4551 18.5316 11.3855 15.9874 11.3855C13.4432 11.3855 11.3743 13.4551 11.3743 16C11.3743 18.5449 13.4432 20.6145 15.9874 20.6145ZM15.9874 13.1367C17.5666 13.1367 18.851 14.4215 18.851 16.0011C18.851 17.5808 17.5666 18.8656 15.9874 18.8656C14.4082 18.8656 13.1238 17.5808 13.1238 16.0011C13.1238 14.4215 14.4082 13.1367 15.9874 13.1367Z" fill="white" />
                                                <path d="M21.0269 12.1307C21.7117 12.1307 22.2698 11.5735 22.2698 10.8874C22.2698 10.2012 21.7128 9.64404 21.0269 9.64404C20.341 9.64404 19.7839 10.2012 19.7839 10.8874C19.7839 11.5735 20.341 12.1307 21.0269 12.1307Z" fill="white" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_1657_7530" x1="4.66415" y1="27.3249" x2="27.314" y2="4.68284" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#FAAD4F" />
                                                        <stop offset="0.35" stopColor="#DD2A7B" />
                                                        <stop offset="0.62" stopColor="#9537B0" />
                                                        <stop offset="1" stopColor="#515BD4" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                                <path d="M32.9706 16.0006C32.9706 24.0816 26.9823 30.7623 19.2029 31.8464C18.4755 31.9473 17.7313 32 16.9759 32C16.104 32 15.2477 31.9305 14.4138 31.796C6.79807 30.5695 0.981201 23.9638 0.981201 16.0006C0.981201 7.16393 8.14302 0 16.977 0C25.8111 0 32.9729 7.16393 32.9729 16.0006H32.9706Z" fill="#1C1C1B" />
                                                <path d="M7.46856 7.05688L14.8456 16.9227L7.42261 24.9443H9.0937L15.5931 17.9216L20.844 24.9443H26.5298L18.7381 14.5235L25.6477 7.05688H23.9766L17.9916 13.5246L13.1554 7.05688H7.46967H7.46856ZM9.92532 8.28787H12.5368L24.0708 23.7133H21.4593L9.92532 8.28787Z" fill="white" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                                <path d="M17.0046 0H16.9318C8.11793 0 0.9729 7.14713 0.9729 15.9636V16.0364C0.9729 24.8529 8.11793 32 16.9318 32H17.0046C25.8185 32 32.9635 24.8529 32.9635 16.0364V15.9636C32.9635 7.14713 25.8185 0 17.0046 0Z" fill="#00E510" />
                                                <path d="M20.086 20.6802C15.9918 20.6802 12.6608 17.3472 12.6597 13.2517C12.6608 12.2136 13.5059 11.3694 14.5415 11.3694C14.6479 11.3694 14.7533 11.3784 14.8542 11.3963C15.0761 11.4333 15.2868 11.5084 15.4807 11.6216C15.5087 11.6385 15.5278 11.6654 15.5322 11.6968L15.9649 14.4244C15.9705 14.4569 15.9604 14.4883 15.9391 14.5119C15.7004 14.7765 15.3955 14.967 15.0559 15.0623L14.8923 15.1083L14.9539 15.2664C15.5121 16.688 16.6485 17.8236 18.0708 18.3842L18.2289 18.447L18.2748 18.2833C18.3701 17.9436 18.5606 17.6387 18.8251 17.3999C18.8442 17.3819 18.8699 17.373 18.8957 17.373C18.9013 17.373 18.9069 17.373 18.9137 17.3741L21.6405 17.8068C21.673 17.8124 21.6999 17.8304 21.7167 17.8584C21.8288 18.0524 21.9039 18.2642 21.942 18.4862C21.96 18.5849 21.9678 18.6891 21.9678 18.7979C21.9678 19.8349 21.1238 20.6791 20.086 20.6802Z" fill="#FDFDFD" />
                                                <path d="M27.3459 15.1014C27.1251 12.6058 25.9819 10.2907 24.127 8.5832C22.2609 6.86565 19.84 5.91943 17.3082 5.91943C11.7513 5.91943 7.23008 10.442 7.23008 16.0005C7.23008 17.866 7.74451 19.6834 8.71847 21.2664L6.54639 26.076L13.5009 25.3349C14.7102 25.8304 15.9901 26.0816 17.307 26.0816C17.6534 26.0816 18.0087 26.0636 18.3651 26.0266C18.6789 25.993 18.9961 25.9437 19.3077 25.8809C23.9612 24.9403 27.3583 20.809 27.3852 16.0543V16.0005C27.3852 15.6978 27.3717 15.3951 27.3448 15.1014H27.3459ZM13.7687 23.2238L9.92108 23.6342L11.0699 21.0881L10.8401 20.7798C10.8233 20.7574 10.8065 20.735 10.7874 20.7092C9.78995 19.3313 9.26317 17.7035 9.26317 16.0016C9.26317 11.5642 12.8721 7.95426 17.3082 7.95426C21.464 7.95426 24.9867 11.1976 25.3263 15.3379C25.3442 15.5599 25.3543 15.783 25.3543 16.0027C25.3543 16.0655 25.3532 16.1272 25.3521 16.1933C25.2669 19.9053 22.6745 23.0579 19.0476 23.8606C18.7708 23.9223 18.4872 23.9694 18.2048 23.9997C17.9112 24.0333 17.6097 24.0501 17.3104 24.0501C16.2445 24.0501 15.2089 23.8438 14.2305 23.4357C14.1218 23.392 14.0153 23.3449 13.9156 23.2967L13.7699 23.2261L13.7687 23.2238Z" fill="#FDFDFD" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                                <path d="M16.9951 0H16.9222C8.10839 0 0.963379 7.14713 0.963379 15.9636V16.0364C0.963379 24.8529 8.10839 32 16.9222 32H16.9951C25.8089 32 32.9539 24.8529 32.9539 16.0364V15.9636C32.9539 7.14713 25.8089 0 16.9951 0Z" fill="#00B0F2" />
                                                <path d="M7.02216 15.4547C7.06699 15.4323 7.11184 15.411 7.15555 15.3908C7.91545 15.0388 8.68543 14.7092 9.45428 14.3795C9.49575 14.3795 9.56522 14.3313 9.60445 14.3156C9.66385 14.2899 9.72327 14.2652 9.78267 14.2394L10.1245 14.0925C10.3532 13.995 10.5807 13.8975 10.8093 13.7999C11.2655 13.6049 11.7216 13.4098 12.1778 13.2136C13.0901 12.8234 14.0036 12.4322 14.9159 12.042C15.8282 11.6519 16.7416 11.2606 17.6539 10.8705C18.5663 10.4803 19.4797 10.089 20.392 9.69889C21.3043 9.30874 22.2178 8.91747 23.1301 8.52732C23.333 8.43988 23.5526 8.30983 23.7701 8.27171C23.9528 8.2392 24.131 8.17642 24.3148 8.14166C24.6633 8.07552 25.0478 8.04861 25.3818 8.19323C25.4972 8.24368 25.6037 8.31431 25.6922 8.40288C26.1159 8.82218 26.0565 9.51054 25.9668 10.1002C25.3425 14.2103 24.7182 18.3214 24.0928 22.4314C24.0077 22.9953 23.8911 23.6142 23.4462 23.9707C23.0696 24.2723 22.5338 24.3059 22.0687 24.1781C21.6036 24.0492 21.1934 23.779 20.791 23.5133C19.1222 22.4079 17.4522 21.3024 15.7834 20.197C15.3866 19.9347 14.945 19.5916 14.9495 19.1151C14.9517 18.8281 15.1232 18.5725 15.298 18.3449C16.7483 16.4525 18.8409 15.152 20.3976 13.347C20.6173 13.0925 20.7899 12.6329 20.4884 12.486C20.3091 12.3985 20.1028 12.5174 19.9392 12.6306C17.8814 14.06 15.8248 15.4906 13.7671 16.92C13.0957 17.3864 12.3919 17.8662 11.5827 17.9806C10.8586 18.0837 10.1301 17.8819 9.42963 17.6756C8.84234 17.503 8.25615 17.3258 7.67222 17.1431C7.36176 17.0467 7.04121 16.9424 6.80137 16.7238C6.56152 16.5052 6.42368 16.1375 6.56826 15.846C6.65905 15.6632 6.83501 15.5477 7.01994 15.4536L7.02216 15.4547Z" fill="#FEFFFC" />
                                            </svg>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutPage