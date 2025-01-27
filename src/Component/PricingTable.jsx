import React from 'react';
import { TickIcon } from '../assets/custom-icon';
import { useNavigate } from 'react-router-dom';

const PricingTable = ({plan,handlePaymentIntent}) => {
  const [userData, setUserData] = React.useState(localStorage.getItem('user_Data') ? JSON.parse(localStorage.getItem('user_Data')) : null);
  const navigation = useNavigate();
    return (
        <div className="container mx-auto px-4 pb-8">
          <table className="w-full text-left border-separate border-spacing-y-4 border-[#E9E9E9] border-b-[1px]">
            <thead>
              <tr>
                <th className="text-sm font-semibold text-primaryPurple px-6">Overview</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody className="bg-tableRow text-sm text-[#79747E]">
            {plan?.benefits.map((benefit) => (
              <tr key={benefit._id}>
                <td className="p-6 font-medium text-gray-900">{benefit.key}</td>
                <td className="p-6 text-center">N/A</td>
                <td className="p-6 text-center">{benefit.value || <div className='flex justify-center'><TickIcon/></div>}</td>
              </tr>
             ))}
            </tbody>
          </table>
    
          {/* Buttons */}
          <div className="flex justify-end space-x-[48px] mt-8">
            <button onClick={()=>navigation('/')} className="bg-primaryPurple w-[253px] text-white font-semibold py-3 px-[18px] rounded-lg">
              Get started
            </button>
            {userData?.subscriptionPlanName == plan?.name &&   <button onClick={(e) => handlePaymentIntent(e, plan.productId)} className="bg-primaryPurple w-[253px] text-white font-semibold py-3 px-[18px] rounded-lg">
              { 'Subscribe'}
            </button>}
            {userData?.subscriptionPlanName !== plan?.name &&
            <button onClick={()=>navigation('/')}  className="bg-primaryPurple w-[253px] text-white font-semibold py-3 px-[18px] rounded-lg">
               Get started
            </button>
    
                      }          </div>
        </div>
      );
}

export default PricingTable;
