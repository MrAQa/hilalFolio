import React, { useEffect, useState } from 'react';
import NavBar from '../Component/Navbar';
import Footer from '../Component/Footer,';
import HomeODR from '../Component/ODR/HomeODR';
import CryptoAssets from '../Component/ODR/CryptoAssets';
import { GetCmcData } from '../service/service';
import { useLocation } from 'react-router-dom';
import Payment from '../Component/ODR/Payment';



const ODR = () => {

    const [showAssets, setShowAssets] = useState(false);
    const [CoinsData, setCoinsData] = useState([])
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [selectedRank, setSelectedRank] = useState('All');
    const [selectedPercentage, setSelectedPercentage] = useState('All');
    const [isLoading, setIsLoading] = useState(false)
    const [showPayement, setshowPayement] = useState(false)
    const [noDataFlag, setNoDataFlag] = useState(false)
    const [refresh, setReresh]= useState(false)
    const { state } = useLocation();
    useEffect(() => {
      if(state){
        state?.showAssets && setShowAssets(true)
        state?.showPayment && setshowPayement(true)
      }
    }, []);
    useEffect(() => {
        setIsLoading(true)
        let number = null;
        if (selectedRank !== 'All') {
          number = parseInt(selectedRank.match(/\d+/)[0], 10);
        }
        GetCmcData(selectedStatus, number, selectedPercentage).then((result) => {
          setIsLoading(false)
          if (result.success) {
            
            const sortedData = result?.body?.cmcData?.sort((a, b) => a.cmc_rank - b.cmc_rank);
           
            setCoinsData(sortedData)
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
      }, [selectedStatus, selectedRank, selectedPercentage])
    return (
        <>
            <div className="min-h-full bg-[#F2F2F2]">
                <NavBar 
                refresh={refresh}
                setShowAssets={setShowAssets}
                setshowPayement={setshowPayement}
                />
                {
                  showPayement ?
                  <Payment
                  setshowPayement={setshowPayement}
                  />
                  :
                <>
                {
                    showAssets?
                    <CryptoAssets
                    setShowAssets={setShowAssets}
                    CoinsData={CoinsData}
                   setReresh={setReresh}
                   isLoadingCoins={isLoading}
                    />
                    :
                    <HomeODR
                    setShowAssets={setShowAssets}
                    />
                }
                </>
                }
                <Footer/>
            </div>
        </>
    );
}

export default ODR;
