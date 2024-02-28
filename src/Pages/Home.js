import React from "react";
import NavBar from "../Component/Navbar";
import CoinSecton from "../Component/Home/coin-section";

const Home = () => {
  return (
    <>
      <div className="min-h-full ">
        <NavBar />
          <div className="bg-[#F2F2F2]">
           <CoinSecton />
          </div>
      </div>
    </>
  );
};
export default Home;
