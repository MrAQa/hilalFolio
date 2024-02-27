import "./App.css";
import Login from "./Authentication/Login/login";
import SignUp from "./Authentication/Sign-Up/sign-up";
import ForgetPassword from "./Authentication/Forget-passowrd/forget-password";
import OtpVerification from "./Authentication/Otp-verification/Otp-verification";
import NewPassword from "./Authentication/new-password/new-passwpord";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import BtcChart from "./Pages/BtcChart";
import Profile from "./Pages/ProfilePage";
import AboutPage from "./Pages/AboutPage";
import SubscriptionPage from "./Pages/SubscriptionPage";
import Settings from "./Pages/Settings";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/about-us" element={<AboutPage/>} />
        <Route path="/subscription" element={<SubscriptionPage/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/btc-chart" element={<BtcChart/>} />
      </Routes>
    </div>
  );
}

export default App;
