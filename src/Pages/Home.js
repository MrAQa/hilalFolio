import React, { useState } from "react";
import NavBar from "../Component/Navbar";
import CoinSecton from "../Component/Home/coin-section";
import Footer from "../Component/Footer,";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <>
      <div className="min-h-full bg-[#F2F2F2]">
        <NavBar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        />
          <div className="bg-[#F2F2F2]">
           <CoinSecton 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery}
           />
          </div>
          <Footer/>
      </div>
    </>
  );
};
export default Home;
