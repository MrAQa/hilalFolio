import React, { useEffect, useState } from "react";
import NavBar from "../Component/Navbar";
import CoinSecton from "../Component/Home/coin-section";
import Footer from "../Component/Footer,";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLogedin, setIsLogedin] = useState(false);
  useEffect(() => {

    const token = localStorage.getItem('user_token');
    if (token) {
      setIsLogedin(true)

    }
    else {
      setIsLogedin(false)
    }
  }, [])
  return (
    <>
      <div className="min-h-full bg-[#F2F2F2]">
        <NavBar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        setIsLoginValue={setIsLogedin}
        />
          <div className="bg-[#F2F2F2]">
           <CoinSecton 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery}
            isLogedin={isLogedin}
           />
          </div>
          <Footer/>
      </div>
    </>
  );
};
export default Home;
