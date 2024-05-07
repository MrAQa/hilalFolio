import React, { useEffect, useState } from 'react';
import NavBar from '../Component/Navbar';
import Footer from '../Component/Footer,';
import HomeODR from '../Component/ODR/HomeODR';
import CryptoAssets from '../Component/ODR/CryptoAssets';
import { GetCmcData } from '../service/service';
import { useLocation } from 'react-router-dom';
import Payment from '../Component/ODR/Payment';
import ReportedCoins from '../Component/ODR/ReportedCoins';
import { CircularProgress } from '@mui/material';



const ODR = () => {

  const [showAssets, setShowAssets] = useState(false);
  const [CoinsData, setCoinsData] = useState([]);
  const [reportedCoins, setReportedCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [showPayement, setshowPayement] = useState(false)
  // const [noDataFlag, setNoDataFlag] = useState(false)
  const [refresh, setReresh] = useState(false)
  const { state } = useLocation();
  const selectedStatus = 'All';
  const selectedRank = 'All';
  const selectedPercentage = 'All';
  useEffect(() => {
    if (state) {
      state?.showAssets && setShowAssets(true)
      state?.showPayment && setshowPayement(true)
    }
    // eslint-disable-next-line
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
        const reportedCoins = sortedData.filter((item) => item.reportGenerated)
        console.log(reportedCoins);
        setReportedCoins(reportedCoins)
        // if (result?.body?.cmcData?.length === 0) {
        //   setNoDataFlag(true)
        // }
        // else {
        //   setNoDataFlag(false)
        // }
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
                showAssets ?
                  <CryptoAssets
                    setShowAssets={setShowAssets}
                    CoinsData={CoinsData}
                    setReresh={setReresh}
                    isLoadingCoins={isLoading}
                  />
                  :
                  <>
                    {
                      isLoading ?
                        <div className="bg-[#F2F2F2]">
                          <section className='pt-6 sm:pt-8'>
                            <div className='2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md mx-auto px-3 lg:px-0'>
                              <div className="rounded-2xl px-4 sm:px-8 py-8 bg-white h-screen max-h-[500px]">
                                <div className='flex justify-center items-center h-full'>
                                  <div className='flex flex-col items-center text-center gap-4'>

                                    <CircularProgress size={40} color='primary' />

                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                        :
                        <>
                          {
                            reportedCoins.length > 0 ?
                              <ReportedCoins
                                CoinsData={reportedCoins}
                                isLoadingCoins={isLoading}
                              />
                              :
                              <HomeODR
                                setShowAssets={setShowAssets}
                              />
                          }
                        </>
                    }
                  </>
              }
            </>
        }
        <Footer />
      </div>
    </>
  );
}

export default ODR;
