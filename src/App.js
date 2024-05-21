import "./App.css";
import Login from "./Authentication/Login/login";
import SignUp from "./Authentication/Sign-Up/sign-up";
import ForgetPassword from "./Authentication/Forget-passowrd/forget-password";
import OtpVerification from "./Authentication/Otp-verification/Otp-verification";
import NewPassword from "./Authentication/new-password/new-passwpord";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import BtcChart from "./Pages/BtcChart";
import Profile from "./Pages/ProfilePage";
import AboutPage from "./Pages/AboutPage";
import SubscriptionPage from "./Pages/SubscriptionPage";
import Settings from "./Pages/Settings";
import LoginRoutes from "./routes/LoginRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import Favorites from "./Component/Favorites";
import ReportPage from "./Pages/ReportPage";
import ScrollToTopButton from "./Pages/ScrollTopButton";
import Hilalbot from "./Pages/Hilalbot";
import ODR from "./Pages/ODR";
import { StateProvider } from "./context/context";
import NewsPage from "./Pages/NewsPage";
import HelpCenter from "./Pages/HelpCenter";
import TrendingBar from "./Component/TrendingBar";
function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
    {
      currentPath !==('/sign-in' || '/sign-up') &&

      <div className='bg-white hidden lg:block'>
        <div style={{ overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'end' }}>
          <div className="trending-bar-container">
            <TrendingBar />
          </div>
        </div>

      </div>
    }
      <StateProvider>
        <Routes>
          <Route path="/sign-in" element={<LoginRoutes><Login /></LoginRoutes>} />
          <Route path="/sign-up" element={<LoginRoutes><SignUp /></LoginRoutes>} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<PrivateRoutes><Favorites /></PrivateRoutes>} />
          <Route path="/profile" element={<PrivateRoutes><Profile /></PrivateRoutes>} />
          <Route path="/about-us" element={<PrivateRoutes><AboutPage /></PrivateRoutes>} />
          <Route path="/subscription" element={<PrivateRoutes><SubscriptionPage /></PrivateRoutes>} />
          <Route path="/settings" element={<PrivateRoutes><Settings /></PrivateRoutes>} />
          <Route path="/help-center" element={<PrivateRoutes><HelpCenter /></PrivateRoutes>} />
          <Route path="/btc-chart" element={<BtcChart />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/review" element={<ReportPage />} />
          <Route path="/hilalbot" element={<PrivateRoutes><Hilalbot /></PrivateRoutes>} />
          <Route path="/odr" element={<PrivateRoutes><ODR /></PrivateRoutes>} />

        </Routes>
        <ScrollToTopButton />
      </StateProvider>
    </>
  );
}

export default App;
