import logo from "./logo.svg";
import "./App.css";
import Login from "./Authentication/Login/login";
import SignUp from "./Authentication/Sign-Up/sign-up";
import ForgetPassword from "./Authentication/Forget-passowrd/forget-password";
import OtpVerification from "./Authentication/Otp-verification/Otp-verification";
import NewPassword from "./Authentication/new-password/new-passwpord";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
