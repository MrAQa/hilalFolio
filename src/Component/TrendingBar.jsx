import React, { useEffect, useRef, useState } from 'react';
import { GetCmcData } from '../service/service';


const TrendingBar = () => {
  const isRequestPending = useRef(false);
    const [CoinsData, setCoinsData] = useState([])
    const currentPath = location.pathname;
    const excludedPaths = ['/sign-in', '/sign-up', '/forget-password', '/otp-verification', '/new-password'];
    const isPathExcluded = !excludedPaths.includes(currentPath);
    useEffect(() => {
      if(isPathExcluded){

        fetchData()
      }
        const interval = setInterval(fetchData, 100000);
        return () => clearInterval(interval);
        
       // eslint-disable-next-line
      }, [])
      
      const fetchData = async() => {
        if (isRequestPending.current) return;  // Don't proceed if a request is already pending

        isRequestPending.current = true;  // Set pending state to true
        
        try{
          await GetCmcData('All', 10, '24h').then((result) => {
          
             if (result.success) {
         
               const sortedData = result?.body?.cmcData?.sort((a, b) => a.cmc_rank - b.cmc_rank);
               const formattedCoins = sortedData.map(item => {
                 const price = item?.quote?.USD?.price?.toFixed(2);
                 const high = item?.periods?.['24h']?.quote?.USD?.high?.toFixed(2);
                 const low = item?.periods?.['24h']?.quote?.USD?.low?.toFixed(2);
                 const percentChange = item?.periods?.['24h']?.quote?.USD?.percent_change?.toFixed(2);
               
                 return {
                   ...item,
                   formattedPrice: `$${numberWithCommas(price)}`,
                   formattedHigh: high !== undefined ? `$${numberWithCommas(high)}` : 'N/A',
                   formattedLow: low !== undefined ? `$${numberWithCommas(low)}` : 'N/A',
                   percentChange: percentChange !== undefined ? `${numberWithCommas(percentChange)}%` : 'N/A'
                 };
               });
               setCoinsData(formattedCoins)
              
             }
           }).catch((err) => {
             console.log(err)
           })
        }
        catch (error) {
          console.error(error);
        } finally {
          isRequestPending.current = false;  // Reset pending state after request completes
        }
      }
      const numberWithCommas = (number) => {
        if (typeof (number) === "string") {
          return parseFloat(number)?.toLocaleString()
        }
        else {
      
          return number?.toLocaleString();
        }
      };
    return (
        <div className='flex gap-4 h-[50px] items-center'>
            {CoinsData?.map((item,index)=>(
              <div  key={index + '-item'} className={`flex gap-x-4 items-center ${CoinsData.length-1===index ? '':'border-r-[1px]'}  border-lightThemeOutline pr-4 text-base font-semibold`}>
                 <span className="">
               {item?.symbol}
             </span>
             <span className="text-lightThemeSuccess">
               {item?.formattedPrice}
             </span>
              </div>
            ))}
        </div>
    );
}

export default TrendingBar;
