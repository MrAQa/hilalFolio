
import React, { useState } from 'react'
import PasswordInput from '../PasswordInput/PasswordInput';

function ChangePassword() {
    const [isLoading, setIsLoading] = useState(false)
    const [inputData, setInputData] = useState({
        password: '',
        newPassword: '',
        confirmPassword: ''
    })
    const HandleSubmit = () => {

    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({
            ...inputData,
            [name]: value,
        });
    }
    return (
        <form onSubmit={HandleSubmit}>
            <div className="border-[1px] border-[#D7D9E4] rounded-3xl px-4 sm:px-8 py-6 bg-[#fff]">
                <h2 className="text-2xl font-bold tracking-tight text-[#0C0F14] sm:text-32">
                    Change password
                </h2>

                <div className='pt-6 flex flex-col  gap-5'>
                    <div className='text-sm font-semibold flex flex-col'>
                        <label htmlFor="">Current password</label>
                        <PasswordInput
                            onChange={handleChange}
                            value={inputData?.password}
                            placeholder='Password'
                            name='password'
                        />
                    </div>
                    <div className='text-sm font-semibold flex flex-col'>
                        <label htmlFor="">Enter new password</label>
                        <PasswordInput
                            onChange={handleChange}
                            value={inputData?.newPassword}
                            placeholder='Password'
                            name='newPassword'
                        />
                    </div>
                    <div className='text-sm font-semibold flex flex-col'>
                        <label htmlFor="">Confirm new password</label>
                        <PasswordInput
                            onChange={handleChange}
                            value={inputData?.confirmPassword}
                            placeholder='Password'
                            name='confirmPassword'
                        />

                    </div>
                </div>

                <div className='pt-6 '>
                    <div className='text-sm font-semibold flex flex-col '>
                        <button disabled={isLoading} type='submit' className='bg-primaryPurple text-white hover:bg-opacity-90 py-3 px-2 rounded-lg disabled:opacity-50 '>Confirm change password</button>
                    </div>

                </div>

            </div>

        </form>
    )
}

export default ChangePassword