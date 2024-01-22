import React from "react";
import NavBar from "../Component/Navbar";
import CoinSecton from "../Component/Home/coin-section";

const Home = () => {
  return (
    <>
      <div class="min-h-full ">
        <NavBar />
          <div className="bg-[#FAFAFA]">
           <CoinSecton />
          </div>
      </div>
    </>
  );
};
export default Home;
