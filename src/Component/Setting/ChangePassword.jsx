
import React, { useState } from 'react'
import PasswordInput from '../PasswordInput/PasswordInput';

import CircleIcon from '@mui/icons-material/Circle';
import DoneIcon from '@mui/icons-material/Done';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SetNewPassword } from '../../service/service';
const getPasswordStrength = (password) => {
  let strength = 0;
  if (password.length >= 8) strength += 1;
  if (password.match(/\d|[\W_]/)) strength += 1;
  if (password.match(/[a-z]/)) strength += 1;
  if (password.match(/[A-Z]/)) strength += 1;
  return strength; // This will be a value between 0 and 4
};

const PasswordStrengthBar = ({ password }) => {
  const strength = getPasswordStrength(password);
  const strengthBarColor = (strength) => {
    switch (strength) {
      case 1:
        return 'red'; // Color for weak password
      case 2:
      case 3:
        return '#f1c40f'; // Color for average password
      case 4:
        return '#2ecc71'; // Color for strong password
      default:
        return '#dddddd'; // Color for no password or very weak password
    }
  };

  const strengthLabel = (strength) => {
    switch (strength) {
      case 1:
        return 'Weak';
      case 2:
      case 3:
        return 'Average';
      case 4:
        return 'Strong';
      default:
        return ''; // No label for no password
    }
  };
  const hasMinLength = password.length >= 8;
  const hasNumberOrSymbol = /\d|[\W_]/.test(password);
  const hasLowerAndUpperCase = /[a-z]/.test(password) && /[A-Z]/.test(password);

  return (
    <div style={{ width: '50%', padding: '5px', borderRadius: '5px' }}>
      <div style={{ paddingBottom: '5px', color: strengthBarColor(strength) }}>
        {strengthLabel(strength)}
      </div>
      <div style={{ width: '100%', backgroundColor: '#ddd', borderRadius: '5px' }}>

        <div style={{ width: `${strength * 25}%`, backgroundColor: strengthBarColor(strength), height: '6px', borderRadius: '5px', transition: 'width 0.3s' }}></div>
      </div>
      <div style={{ fontSize: '0.8rem' }}>
        <div style={{ color: hasMinLength ? 'green' : 'gray' }}>
          {hasMinLength ? <DoneIcon style={{ width: '15px' }} /> : <CircleIcon style={{ width: '10px' }} />} At least 8 characters
        </div>
        <div style={{ color: hasNumberOrSymbol ? 'green' : 'gray' }}>
          {hasNumberOrSymbol ? <DoneIcon style={{ width: '15px' }} /> : <CircleIcon style={{ width: '10px' }} />} At least one number (0-9) or symbol
        </div>
        <div style={{ color: hasLowerAndUpperCase ? 'green' : 'gray' }}>
          {hasLowerAndUpperCase ? <DoneIcon style={{ width: '15px' }} /> : <CircleIcon style={{ width: '10px' }} />} Lowercase (a-z) and uppercase (A-Z)
        </div>
      </div>
    </div>
  );
};

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