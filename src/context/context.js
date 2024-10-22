// StateContext.js
import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { GetCmcData, UpdateProfileData } from '../service/service';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
 const [cartItem, setCartItems] = useState([]) 
 const [CoinsData, setCoinsData] = useState([])
 const [selectedStatus, setSelectedStatus] = useState('All');
 const [selectedRank, setSelectedRank] = useState('Top 10');
 const [selectedPercentage, setSelectedPercentage] = useState('24h');
 const [isLoading, setIsLoading] = useState(false)
 const [noDataFlag, setNoDataFlag] = useState(false)
 const [isLogedin, setIsLogedin] = useState(false);
 const [userData, setuserData] = useState({})
 const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
 const [themeToggle, setThemeToggle] = useState(false); // New state to force re-render
 const isRequestPending = useRef(false);

 useEffect(() => {
   const token = localStorage.getItem('user_token');
   if (token) {
     setIsLogedin(true)

   }
   else {
     setIsLogedin(false)
   
   }
 
 }, [])
 const theme = useMemo(
  () =>
    createTheme({
      palette: {
        mode: isDarkMode ? 'dark' : 'light',
        primary: {
          main: isDarkMode ? '#2ECA45' : '#7147B4',
        },
      },
    }),
  [isDarkMode]
);
 const toggleTheme = () => {
  setIsDarkMode((prev) => {
    const newMode = !prev;
    localStorage.setItem('darkMode', newMode);
    const data={
      darkMode:newMode
    }
    if(isLogedin){
      UpdateProfileData(data).then((result)=>{
        if (result.success) {
        console.log(result);
        }
      }).catch((error) => {
         console.error(error);
        });
    }
    return newMode;
  });
  setThemeToggle((prev) => !prev); // Force re-render
};
useEffect(() => {
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [isDarkMode]);
 useEffect(() => {
  const currentPath = location.pathname;
  const excludedPaths = ['/sign-in', '/sign-up', '/forget-password', '/otp-verification', '/new-password'];
  const isPathExcluded = !excludedPaths.includes(currentPath);
  setIsLoading(true)
  if(isPathExcluded){
    fetchData()
  }

  const interval = setInterval(fetchData, 100000);

  return () => clearInterval(interval);
  
 // eslint-disable-next-line
}, [selectedStatus, selectedRank,selectedPercentage])

const fetchData = async () => {
  if (isRequestPending.current) return;  // Don't proceed if a request is already pending

  isRequestPending.current = true;  // Set pending state to true
  try {
    let number = null;
    if (selectedRank !== 'All') {
      number = parseInt(selectedRank.match(/\d+/)[0], 10);
    }
    let shariastatus=null;
    if(selectedStatus==='Halal'){
      shariastatus='Compliant'
    }
    else if(selectedStatus==='Haram'){
      shariastatus='Not Compliant'
    }else{
      shariastatus='All'
    }
    const currentPath = location.pathname;
    const excludedPaths = ['/sign-in', '/sign-up', '/forget-password', '/otp-verification', '/new-password'];
    const isPathExcluded = !excludedPaths.includes(currentPath);
    // console.log('fetch data',isPathExcluded);
   if(isPathExcluded){
   await GetCmcData(shariastatus, number, selectedPercentage).then((result) => {
      setIsLoading(false)
      if (result.success) {
  
        const sortedData = result?.body?.cmcData
        ?.sort((a, b) => a.cmc_rank - b.cmc_rank);
        const formattedCoins = sortedData.map(item => {
          
          const price = item?.quote?.USD?.price?.toFixed(5);
          const high = item?.periods?.['24h']?.quote?.USD?.high?.toFixed(5);
          const low = item?.periods?.['24h']?.quote?.USD?.low?.toFixed(5);
          let percentChange='';
          if(selectedPercentage==='1h'){
            percentChange= item?.quote?.USD?.percent_change_1h?.toFixed(5)
          }
          else if(selectedPercentage==='24h'){
            percentChange= item?.quote?.USD?.percent_change_24h?.toFixed(5)
          }
          else if(selectedPercentage==='7d') {
            percentChange= item?.quote?.USD?.percent_change_7d?.toFixed(5)
          }
          // const percentChange = item?.periods?.['24h']?.quote?.USD?.percent_change?.toFixed(2);
        
          return {
            ...item,
            
            formattedPrice: `$${numberWithCommas(price)}`,
            formattedHigh: high !== undefined ? `$${numberWithCommas(high)}` : 'N/A',
            formattedLow: low !== undefined ? `$${numberWithCommas(low)}` : 'N/A',
            percentChange: percentChange !== undefined ? `${numberWithCommas(percentChange)}` : 'N/A'
          };
        });
       
        setCoinsData(formattedCoins)
        if (result?.body?.cmcData?.length === 0) {
          setNoDataFlag(true)
        }
        else {
          setNoDataFlag(false)
        }
      }
    }).catch((err) => {
      console.log(err)
    })
   }
  } catch (error) {
    console.error(error);
  } finally {
    isRequestPending.current = false;  // Reset pending state after request completes
  }

}
// const numberWithCommas = (number) => {
//   if (typeof (number) === "string") {
//     return parseFloat(number)?.toLocaleString()
//   }
//   else {

//     return number?.toLocaleString();
//   }
// };
const numberWithCommas = (number) => {
  // Ensure the input is converted to a number
  let num = typeof number === "string" ? parseFloat(number) : number;

  // Check if the number is valid
  if (isNaN(num)) {
    return '';
  }

  // Format the number with commas and at least 5 decimal places
  return num.toLocaleString(undefined, {
    minimumFractionDigits: 5,
    maximumFractionDigits: 5
  });
};
  return (
    <StateContext.Provider value={{cartItem, setCartItems,CoinsData, setCoinsData,selectedStatus, setSelectedStatus,selectedRank, setSelectedRank,selectedPercentage,setSelectedPercentage,isLoading, noDataFlag,isLogedin, setIsLogedin,userData,setuserData ,fetchData, isDarkMode, toggleTheme ,setIsDarkMode}}>
       <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StateContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(StateContext);
};
