
import React, { useState } from 'react'
import PasswordInput from '../PasswordInput/PasswordInput';


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SetNewPassword } from '../../service/service';
 import {PasswordStrengthBar} from '../../service/passwordStrengthCheck'

function ChangePassword() {
  const [isLoading, setIsLoading] = useState(false)
  const [inputData, setInputData] = useState({
    password: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({
    password: '',
    newPassword: '',
    confirmPassword: ''
  });
  const HandleSubmit = (event) => {
    event.preventDefault();

    // Perform validation before submitting the form
    const { password, newPassword, confirmPassword } = inputData;
    let passwordError = !password ? 'Please enter your current password.' : '';
    let newPasswordError = !newPassword ? 'Please enter a new password.' : '';
    let confirmPasswordError = !confirmPassword ? 'Please confirm your new password.' : (confirmPassword === newPassword ? '' : 'Passwords do not match.');

    if (passwordError || newPasswordError || confirmPasswordError) {
      setErrors({
        password: passwordError,
        newPassword: newPasswordError,
        confirmPassword: confirmPasswordError
      });
      return;
    }

    // Proceed with form submission if all validations pass
    setIsLoading(true);
    SetNewPassword({password:newPassword}).then((result)=>{
      if(result.success){
        setIsLoading(false);
        setInputData({
          password: '',
          newPassword: '',
          confirmPassword: ''
        });
        setErrors({
          password: '',
          newPassword: '',
          confirmPassword: ''
        });
        toast.success(result.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
      }else{
        setIsLoading(false);
        toast.error(result.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
      }
    }).catch((error)=>{
      setIsLoading(false);
      console.log('error',error)
    })

  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });

    let errorMessage = '';
    switch (name) {
      case 'password':
        errorMessage = value ? '' : 'Please enter your current password.';
        break;
      case 'newPassword':
        errorMessage = value ? '' : 'Please enter a new password.';
        break;
      case 'confirmPassword':
        errorMessage = value ? (value === inputData.newPassword ? '' : 'Passwords do not match.') : 'Please confirm your new password.';
        break;
      default:
        break;
    }
    setErrors({
      ...errors,
      [name]: errorMessage
    });
  }

  return (
    <>
     <ToastContainer/>
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
            {errors.password && <span className="text-red-500">{errors.password}</span>}
          </div>

          <div className='text-sm font-semibold flex flex-col'>
            <label htmlFor="">Enter new password</label>
            <PasswordInput
              onChange={handleChange}
              value={inputData?.newPassword}
              placeholder='Password'
              name='newPassword'
            />
            {errors.newPassword && <span className="text-red-500">{errors.newPassword}</span>}
          </div>
          {/* Password strength bar */}
          <PasswordStrengthBar password={inputData.newPassword} />
          <div className='text-sm font-semibold flex flex-col'>
            <label htmlFor="">Confirm new password</label>
            <PasswordInput
              onChange={handleChange}
              value={inputData?.confirmPassword}
              placeholder='Password'
              name='confirmPassword'
            />
            {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword}</span>}
          </div>
        </div>

        <div className='pt-6 '>
          <div className='text-sm font-semibold flex flex-col '>
            <button disabled={isLoading} type='submit' className='bg-primaryPurple text-white hover:bg-opacity-90 py-3 px-2 rounded-lg disabled:opacity-50 '>Confirm change password</button>
          </div>

        </div>

      </div>

    </form>
    </>
  )
}

export default ChangePassword