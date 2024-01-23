import React, { useState } from 'react'
import NavBar from "../Component/Navbar";
import Banner from "../Component/Setting/Banner";
import SideBar from "../Component/Setting/SideBar";
import { useEffect } from 'react';
import { GetProfileData, UpdateProfileData } from '../service/service';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Settings() {
const [isLoading ,setIsLoading]= useState(false)
    const [userData, setUserData]= useState({
        fullName:'',
        dob:'',
        phoneNo:'',
        gender:''
    })

    useEffect(() => {
        GetProfileData().then((result)=>{
            console.log(result.body)
            setUserData(result?.body?.user)
        }).catch((err)=>{
            console.log(err.message)
        })
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const HandleSubmit=(event)=>{
        event.preventDefault();
        setIsLoading(true)
        const data={
            fullName: userData.fullName,
            phoneNo: userData.phoneNo,
            gender: userData.gender,
            dob: userData.dob
        }
        UpdateProfileData(data).then((result)=>{
            if(result.success){
                // console.log(result.message)
                toast.success(result.message, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                  });
            }
            else{
                toast.error(result.message, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                  });
            }
            setIsLoading(false)
        }).catch((error)=>{
            setIsLoading(false)
            toast.error(error.message, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
              });
        })
    }
    return (
        <div>
            <ToastContainer />
            <NavBar />
            <div className="bg-[#FAFAFA]">
                <Banner />
                <section>
                    <div className='2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md sm:max-w-sm mx-auto px-3 lg:px-0'>
                        <div className='flex flex-col md:flex-row gap-6 text-[#0C0F14]'>
                            <div className='lg:w-[390px]'>
                                <SideBar />
                            </div>
                            <div className='flex-1 pt-10'>
                                <form onSubmit={HandleSubmit}>
                                <div className="border-[2px] border-[#D7D9E4] rounded-3xl px-4 sm:px-8 py-6 bg-[#fff]">
                                    <h2 className="text-2xl font-bold tracking-tight text-[#0C0F14] sm:text-32">
                                        Profile
                                    </h2>
                                    <div className='pt-6 flex flex-col sm:flex-row items-center gap-4'>
                                        <span className='flex relative'>
                                            <img
                                                className='rounded-full w-[96px] h-[96px] object-cover'
                                                src="https://s3-alpha-sig.figma.com/img/de80/5927/12bfb2a09a0147e9de9b29bb4e58c272?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WOx5oD7ySj-8bCR2NyhA9JY~lInJFV~V19bKASNMBolFWvQoFxstVdx4WFjD9httma7oIvQwmIJhc9IHIPcecOvREy3bQQfeWK1LJYfiBut3AA1kadKD8WLO82eTNwKpncOyC9UzK~N9xnRvMcIWR2mecYae9h53qxonfwLDNow-RKUjWImZb0BqpSP~O0X15wn57O0WE5nIMEiBrkBrF3ERYV2sguQ7p3nL1raDPp3SKtXXW973bpsYfQt95yCBdifXdqwwOY8mdHgKqKJnAykiANKUkoBHehqzXtu76hjiFI6ryC1yMx-jUlBzvzBoplGmwyj9QzVAtKPnBuL3pw__" alt="prfoile-icon" />

                                            <div className='w-[28px] h-[28px] rounded-full border-[2px] border-white bg-primaryPurple absolute right-0 bottom-0 flex items-center justify-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                    <path d="M6 9.7334H10.2" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M8.10078 2.0336C8.28643 1.84795 8.53823 1.74365 8.80078 1.74365C8.93078 1.74365 9.05951 1.76926 9.17962 1.81901C9.29972 1.86876 9.40886 1.94168 9.50078 2.0336C9.59271 2.12553 9.66562 2.23466 9.71537 2.35476C9.76512 2.47487 9.79073 2.6036 9.79073 2.7336C9.79073 2.8636 9.76512 2.99233 9.71537 3.11244C9.66562 3.23255 9.59271 3.34168 9.50078 3.4336L3.66745 9.26693L1.80078 9.7336L2.26745 7.86693L8.10078 2.0336Z" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </span>
                                        <div className='text-base font-semibold text-center sm:text-left'>
                                            <div>User ID: 328656</div>
                                            <div>Referral ID: 123321</div>
                                            <div>Email: {userData?.email}</div>
                                        </div>
                                    </div>
                                    <div className='pt-6 flex flex-col lg:flex-row gap-5'>
                                        <div className='text-sm font-semibold flex flex-col lg:w-1/2'> 
                                            <label htmlFor="">Display Name</label>
                                            <input 
                                            value={userData?.fullName}
                                            name='fullName'
                                            onChange={handleChange}
                                            className='p-4 outline-none border-[1px] border-[#D7D9E4] rounded-lg bg-transparent mt-2' placeholder='Michael Smith' type="text" />
                                        </div>
                                        <div className='text-sm font-semibold flex flex-col lg:w-1/2'> 
                                            <label htmlFor="">User Name</label>
                                            <input 
                                             value={userData?.fullName}
                                            className='p-4 outline-none border-[1px] border-[#D7D9E4] rounded-lg bg-transparent mt-2' placeholder='@MichaelSmith2140' type="text" />
                                        </div>
                                    </div>
                                    <div className='pt-6 flex flex-col lg:flex-row gap-5'>
                                        <div className='text-sm font-semibold flex flex-col lg:w-1/2'> 
                                            <label htmlFor="">Date of Birth</label>
                                            <input
                                             value={userData?.dob}
                                                name='dob'
                                                onChange={handleChange}
                                            className='p-4 outline-none border-[1px] border-[#D7D9E4] rounded-lg bg-transparent mt-2' placeholder='18-01-1995' type="text" />
                                        </div>
                                        <div className='text-sm font-semibold flex flex-col lg:w-1/2'> 
                                            <label htmlFor="">Phone Number</label>
                                            <input 
                                            value={userData?.phoneNo}
                                            onChange={handleChange}
                                            name='phoneNo'
                                            className='p-4 outline-none border-[1px] border-[#D7D9E4] rounded-lg bg-transparent mt-2' placeholder='+1 717-676-2047' type="text" />
                                        </div>
                                    </div>
                                    <div className='pt-6 flex flex-col lg:flex-row gap-5'>
                                        <div className='text-sm font-semibold flex flex-col lg:w-1/2'> 
                                            <label htmlFor="">Gender</label>
                                            <input
                                            value={userData?.gender}
                                            onChange={handleChange}
                                            name='gender'
                                            className='p-4 outline-none border-[1px] border-[#D7D9E4] rounded-lg bg-transparent mt-2' placeholder='Male' type="text" />
                                        </div>
                                        
                                    </div>
                                    <div className='pt-6 flex flex-col lg:flex-row gap-5'>
                                        <div className='text-sm font-semibold flex flex-col lg:w-1/2'> 
                                           <button disabled={isLoading} type='submit' className='bg-primaryPurple text-white hover:bg-opacity-90 py-3 px-2 rounded-lg disabled:opacity-50 '>Update Profile</button>
                                        </div>
                                        
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Settings