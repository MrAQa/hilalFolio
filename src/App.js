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
import LoginRoutes from "./routes/LoginRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import Favorites from "./Component/Favorites";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/sign-in" element={<LoginRoutes><Login /></LoginRoutes>} />
        <Route path="/sign-up" element={<LoginRoutes><SignUp /></LoginRoutes>} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<PrivateRoutes><Favorites/></PrivateRoutes>} />
        <Route path="/profile" element={<PrivateRoutes><Profile/></PrivateRoutes>} />
        <Route path="/about-us" element={<PrivateRoutes><AboutPage/></PrivateRoutes>} />
        <Route path="/subscription" element={<PrivateRoutes><SubscriptionPage/></PrivateRoutes>} />
        <Route path="/settings" element={<PrivateRoutes><Settings/></PrivateRoutes>} />
        <Route path="/btc-chart" element={<BtcChart/>} />
      </Routes>
    </div>
  );
}

export default App;
