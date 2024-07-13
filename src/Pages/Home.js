import React, {useState } from "react";
import NavBar from "../Component/Navbar";
import CoinSecton from "../Component/Home/coin-section";
import Footer from "../Component/Footer,";
import { useGlobalState } from "../context/context";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const {isLogedin,setIsLogedin} =useGlobalState();
  return (
    <>
      <div className="min-h-full bg-lightThemebg">
        <NavBar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        setIsLoginValue={setIsLogedin}
        />
          <div className="bg-lightThemebg">
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
