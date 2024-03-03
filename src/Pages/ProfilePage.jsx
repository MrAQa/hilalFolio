import React, { useState } from 'react'
import NavBar from "../Component/Navbar";
// import Banner from "../Component/Setting/Banner";
import SideBar from "../Component/Setting/SideBar";
import { useEffect } from 'react';
import { GetProfileData, UpdateProfileData, UpdateProfileImage } from '../service/service';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import avatar from '../assets/avatar-img.svg'
import Footer from '../Component/Footer,';

function Profile() {
    const UserData = JSON.parse(localStorage.getItem('user_Data'))
    const [isLoading, setIsLoading] = useState(false);
    const [isShowBtn, setIsShowBtn] = useState(false);
    const [userImg, setUserImg] = useState(null)
    const [Imgfile, setImgFile] = useState(null)
    const [userData, setUserData] = useState({
        fullName: '',
        dob: '',
        phoneNo: '',
        gender: '',
        email: '',
        referralCode: '',
    })

    useEffect(() => {
        fetchdata()
    }, [])
    const fetchdata = () => {
        GetProfileData().then((result) => {
            setUserData(result?.body?.user)
            const data = result?.body?.user;
            localStorage.setItem('user_Data', JSON.stringify(data));
        }).catch((err) => {
            console.log(err.message)
        })
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
    
       
            setUserData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        
        setIsShowBtn(true)
       
    };
    const HandleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true)
      


            const date = new Date(userData.dob);

            const day = date.getDate();
            const month = date.getMonth() + 1; // Note: Month starts from 0 (January is 0)
            const year = date.getFullYear();

            const formattedDay = day < 10 ? `0${day}` : day;
            const formattedMonth = month < 10 ? `0${month}` : month;


            const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;

          
    
        const data = {
            fullName: userData.fullName,
            phoneNo: userData.phoneNo,
            gender: userData.gender,
            dob: formattedDate
        }
        UpdateProfileData(data).then((result) => {
            if (result.success) {
                // console.log(result.message)
                toast.success(result.message, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                });
                setIsShowBtn(false)
            }
            else {
                toast.error(result.message, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                });
            }
            setIsLoading(false)
        }).catch((error) => {
            setIsLoading(false)
            toast.error(error.message, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
            });
        })
        if (Imgfile) {

            UpdateProfileImage(Imgfile).then((result) => {
                if (result.success) {
                    fetchdata()
                }
            })
        }
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImgFile(file)
        if (file) {
            setIsShowBtn(true)
            const reader = new FileReader();
            reader.onloadend = () => {
                setUserImg(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    // const chnageformatdata =(inputDate)=>{
      
    //    if(inputDate!==''){
    //     const [day, month, year] = inputDate?.split("-");

    //     const date = new Date(year, month - 1, day);

    //     const formattedDate = date.toISOString()?.split("T")[0];
    //     return formattedDate
    //    }
    //    else{
    //     return ''
    //    }
        

    // }
    return (
        <div>
            <ToastContainer />
            <NavBar />
            <div className="bg-[#FAFAFA]">
                {/* <Banner /> */}
                <section className=''>
                    <div className='2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md sm:max-w-sm mx-auto px-3 lg:px-0'>
                        <div className='flex flex-col md:flex-row gap-6 text-[#0C0F14]'>
                            <div className='lg:w-[390px] pt-10 '>
                                <SideBar />
                            </div>
                            <div className='flex-1 pt-10'>
                                <form onSubmit={HandleSubmit}>
                                    <div className="border-[1px] border-[#D7D9E4] rounded-3xl px-4 sm:px-8 py-6 bg-[#fff]">
                                        <h2 className="text-2xl font-bold tracking-tight text-[#0C0F14] sm:text-32">
                                            Profile
                                        </h2>
                                        <div className='pt-6 flex flex-col sm:flex-row items-center gap-4'>
                                            <label htmlFor='profile_image' className='flex relative'>
                                                {userImg ? (
                                                    <img className='rounded-full w-[96px] h-[96px] object-cover' src={userImg} alt='avatar' />
                                                ) :

                                                    (

                                                        UserData?.image ?

                                                            <img className='rounded-full w-[96px] h-[96px] object-cover' src={UserData?.image} alt='avatar' />
                                                            :
                                                            <img className='rounded-full w-[96px] h-[96px] object-cover' src={avatar} alt='avatar' />

                                                    )}
                                                <div className='w-[28px] h-[28px] rounded-full border-[2px] border-white bg-primaryPurple absolute cursor-pointer right-0 bottom-0 flex items-center justify-center'>
                                                    <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'>
                                                        <path d='M6 9.7334H10.2' stroke='white' strokeWidth='1.4' strokeLinecap='round' strokeLinejoin='round' />
                                                        <path
                                                            d='M8.10078 2.0336C8.28643 1.84795 8.53823 1.74365 8.80078 1.74365C8.93078 1.74365 9.05951 1.76926 9.17962 1.81901C9.29972 1.86876 9.40886 1.94168 9.50078 2.0336C9.59271 2.12553 9.66562 2.23466 9.71537 2.35476C9.76512 2.47487 9.79073 2.6036 9.79073 2.7336C9.79073 2.8636 9.76512 2.99233 9.71537 3.11244C9.66562 3.23255 9.59271 3.34168 9.50078 3.4336L3.66745 9.26693L1.80078 9.7336L2.26745 7.86693L8.10078 2.0336Z'
                                                            stroke='white'
                                                            strokeWidth='1.4'
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                        />
                                                    </svg>
                                                </div>
                                                <input type='file' className='hidden' accept=".png, .jpg" name='profile_image' id='profile_image' onChange={handleFileChange} />
                                            </label>

                                        </div>
                                        <div className='pt-6 flex flex-col lg:flex-row gap-5'>
                                            <div className='text-sm font-semibold flex flex-col lg:w-1/2'>
                                                <label htmlFor="">Name</label>
                                                <input
                                                    value={userData?.fullName}
                                                    name='fullName'
                                                    onChange={handleChange}
                                                    className='p-4 outline-none border-[1px] border-[#D7D9E4] rounded-lg bg-transparent mt-2' placeholder='Michael Smith' type="text" />
                                            </div>
                                            <div className='text-sm font-semibold flex flex-col lg:w-1/2'>
                                                {/* <label htmlFor="">User Name</label>
                                                <input
                                                    defaultValue={userData?.fullName}
                                                    readOnly
                                                    className='p-4 outline-none border-[1px] border-[#D7D9E4] rounded-lg bg-transparent mt-2' placeholder='@MichaelSmith2140' type="text" /> */}
                                                <label htmlFor="">{`Gender (Optional)`}</label>
                                                <input
                                                    value={userData?.gender}
                                                    onChange={handleChange}
                                                    name='gender'
                                                    className='p-4 outline-none border-[1px] border-[#D7D9E4] rounded-lg bg-transparent mt-2' placeholder='Male' type="text" />

                                            </div>
                                        </div>
                                        <div className='pt-6 flex flex-col lg:flex-row gap-5'>
                                            <div className='text-sm font-semibold flex flex-col lg:w-1/2'>
                                                <label htmlFor="">Email</label>
                                                <input
                                                    // value={userData?.email}
                                                    defaultValue={userData?.email}
                                                    name='email'
                                                    // onChange={handleChange}
                                                    readOnly
                                                    className='p-4 outline-none border-[1px] border-[#D7D9E4] rounded-lg bg-[#F2F2F2] mt-2' placeholder='gottlieb.eldridge@hamill.com' type="email" />
                                            </div>
                                            <div className='text-sm font-semibold flex flex-col lg:w-1/2'>
                                                <label htmlFor="">Referral Code</label>
                                                <input
                                                    value={userData?.referralCode}
                                                    readOnly
                                                    className='p-4 outline-none border-[1px] border-[#D7D9E4] rounded-lg bg-[#F2F2F2] mt-2' placeholder='12rXCbRN5w' type="text" />
                                            </div>
                                        </div>
                                        <div className='pt-6 flex flex-col lg:flex-row gap-5'>
                                            <div className='text-sm font-semibold flex flex-col lg:w-1/2'>
                                                <label htmlFor="">{`Date of Birth (Optional)`}</label>
                                                <input
                                                    value={userData?.dob}
                                                    name='dob'
                                                    onChange={handleChange}
                                                    className='p-4 outline-none border-[1px] border-[#D7D9E4] rounded-lg bg-transparent mt-2' placeholder='18-01-1995' type="date" />
                                            </div>
                                            <div className='text-sm font-semibold flex flex-col lg:w-1/2'>
                                                <label htmlFor="">{`Phone Number (Optional)`}</label>
                                                <input
                                                    value={userData?.phoneNo}
                                                    onChange={handleChange}
                                                    name='phoneNo'
                                                    className='p-4 outline-none border-[1px] border-[#D7D9E4] rounded-lg bg-transparent mt-2' placeholder='+1 717-676-2047' type="text" />
                                            </div>
                                        </div>
                                        {/* <div className='pt-6 flex flex-col lg:flex-row gap-5'>
                                            <div className='text-sm font-semibold flex flex-col lg:w-1/2'>
                                                <label htmlFor="">{`Gender (Optional)`}</label>
                                                <input
                                                    value={userData?.gender}
                                                    onChange={handleChange}
                                                    name='gender'
                                                    className='p-4 outline-none border-[1px] border-[#D7D9E4] rounded-lg bg-transparent mt-2' placeholder='Male' type="text" />
                                            </div>

                                        </div> */}

                                    </div>
                                    {
                                        isShowBtn &&
                                        <div className='pt-6 flex flex-col lg:flex-row gap-5 justify-end'>
                                            <div className='text-sm font-semibold flex flex-col lg:w-1/4'>
                                                <button
                                                    onClick={() => setIsShowBtn(false)}
                                                    disabled={isLoading} type='button' className='text-primaryPurple border-primaryPurple border-[1px] hover:bg-opacity-90 py-3 px-2 rounded-lg disabled:opacity-50 '>Cancel</button>
                                            </div>
                                            <div className='text-sm font-semibold flex flex-col lg:w-1/4'>
                                                <button disabled={isLoading} type='submit' className='bg-primaryPurple text-white hover:bg-opacity-90 py-3 px-2 rounded-lg disabled:opacity-50 '>Save Changes</button>
                                            </div>

                                        </div>
                                    }
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}

export default Profile