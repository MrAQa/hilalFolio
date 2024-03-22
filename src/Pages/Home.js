import React from "react";
import NavBar from "../Component/Navbar";
import CoinSecton from "../Component/Home/coin-section";
import Footer from "../Component/Footer,";

const Home = () => {
  return (
    <>
      <div className="min-h-full bg-[#F2F2F2]">
        <NavBar />
          <div className="bg-[#F2F2F2]">
           <CoinSecton />
          </div>
          <Footer/>
      </div>
    </>
  );
};
export default Home;
