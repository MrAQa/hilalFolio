import React, {
  useCallback,
  useState,
} from "react";

import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  //  useFormik
} from "formik";
// import { GoogleLogin } from "@react-oauth/google";
// import { useGoogleLogin } from "@react-oauth/google";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from 'react-router-dom';

import CancelIcon from "@mui/icons-material/Cancel";
import Divider from "@mui/material/Divider";
// import { MenuItem, Select, InputLabel } from "@mui/material";

import Button from "@mui/material/Button";
import imglOGO from "../../assets/Logo-new.png";

import { LoadingButton } from "@mui/lab";
import { useTranslation } from "react-i18next";
// import i18n from "../../i18n"; // Import your i18n configuration

import { Link } from "react-router-dom";
import { ReactComponent as DownloadIcon } from "../../assets/Logo.svg";
import { ReactComponent as FacebookIcon } from "../../assets/Facebook.svg";
import SocialPopup from './SocialPopup'
import InputAdornment from "@mui/material/InputAdornment";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { url } from "../../environment";
import { GetProfileData } from "../../service/service";
import bg from '../../assets/Loginpage-section.png'
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { useGlobalState } from "../../context/context";
const Login = () => {
  const [Loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  } const [provider, setProvider] = useState("");
  const { param1, param2 } = useParams();

  const { setIsLogedin, setuserData } = useGlobalState();
  const onLoginStart = useCallback(() => {
    // alert("login start");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    // setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const REDIRECT_URI = `${window.location.origin}/login`;
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
  });

  const navigate = useNavigate();

  const onSubmit = (values, actions) => {

    submitLogin(values);
    actions.setSubmitting(false);
  };

  const submitLogin = (e) => {
    setLoading(true);
    fetch(`${url}/api/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email: e.email,
        password: e.password,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.success === true) {
          toast.success("Login Successfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
          navigate("/");
          setLoading(false);
          localStorage.setItem("user_token", res?.body?.token);
          localStorage.setItem('socialLogin', res.socialLogin)

          setIsLogedin(true)
          GetProfileData()
            .then((result) => {
              const data = result?.body?.user;
              localStorage.setItem("user_Data", JSON.stringify(data));
              const userSettings = result?.body?.userSettings;
              localStorage.setItem("user_Setting", JSON.stringify(userSettings));
              setuserData(data)
            })
            .catch((err) => {
              console.log(err.message);
            });
        } else {
          toast.error(res.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
          if (res.socialLogin) {
            setIsOpen(true)

          }

          setLoading(false);
        }
      })
      .catch((error) => {
        toast.error(error, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
        setLoading(false);
      });
  };

  const googleLogin = (e) => {
    // console.log(e);
    setLoading(true);
    fetch(`${url}/api/auth/social-login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email: e.email,
        name: e.name,
        socialLoginType: "google",
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.success === true) {
          toast.success("Login Successfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
          navigate("/");
          setLoading(false);
          localStorage.setItem("user_token", res?.body?.token);
          localStorage.setItem('socialLogin', res.socialLogin)
          setIsLogedin(true)
          GetProfileData()
            .then((result) => {
              const data = result?.body?.user;
              localStorage.setItem("user_Data", JSON.stringify(data));
              const userSettings = result?.body?.userSettings;
              localStorage.setItem("user_Setting", JSON.stringify(userSettings));
              setuserData(data)
            })
            .catch((err) => {
              console.log(err.message);
            });
        } else {
          toast.error(res.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
          setLoading(false);
        }
      })
      .catch((error) => {
        toast.error(error, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
        setLoading(false);
      });
  };

  const { t } = useTranslation();

  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#7147B4',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

  return (
    <>
      <div className="flex md:h-screen justify-center items-center">
        <ToastContainer />
        <div className="w-full md:w-1/2 min-h-full bg-white  flex items-center justify-center">
          {" "}
          <div className="m-4 rounded-lg">
            {/* <div className="relative inline-block text-left"></div> */}
            <div className="flex justify-center mt-1">
              <img src={imglOGO} alt="logo" className="h-[44px]" />
            </div>
            <div className="flex flex-col justify-center items-center mt-6 text-center ">
              <p className="Welcome-text mb-3">Welcome back!</p>
              <span className="small-text">
                Welcome back! Please enter your details.
                {/* {t("greeting")} */}
              </span>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ touched, errors }) => (
                  <Form className="max-w-sm mt-8 w-[360px]">
                    <div className="mb-5">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 text-start"
                      >
                        Email
                      </label>
                      <FormControl
                        sx={{ m: 1, width: "100%" }}
                        variant="outlined"
                        className="password-input"
                      >
                        <Field
                          as={OutlinedInput}
                          name="email"
                          error={touched.email && !!errors.email}
                          autoComplete="off"
                          placeholder="Enter your email"
                          sx={{ borderRadius: '8px', height: '50px' }}
                          spellCheck={false}
                          endAdornment={
                            <InputAdornment position="end">
                              {touched.email && !errors.email ? (
                                <CheckCircleOutlineIcon
                                  sx={{ color: "green" }}
                                />
                              ) : touched.email && errors.email ? (
                                <CancelIcon sx={{ color: "#CD0000" }} />
                              ) : null}
                            </InputAdornment>
                          }
                          inputProps={{
                            autoComplete: "off",
                          }}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className={`text-red-700 text-start text-xs	py-[6px]`}
                        />
                      </FormControl>
                    </div>
                    <div className="mb-7">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium heading text-start"
                      >
                        Password
                      </label>
                      <FormControl
                        sx={{ m: 1, width: "100%" }}
                        variant="outlined"
                        className="password-input"
                      >
                        <Field
                          as={OutlinedInput}
                          type={showPassword ? "text" : "password"}
                          error={touched.password && !!errors.password}
                          // aria-autocomplete="off"
                          sx={{ borderRadius: '8px', height: '50px' }}
                          placeholder="Enter your password"
                          name="password"
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          autoComplete="off"
                          spellCheck={false}
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className={`text-red-700 ${touched.email && "visible"
                            } text-start text-xs py-[6px]`}
                        />
                      </FormControl>
                    </div>
                    <div
                      className={`flex justify-between w-full mb-7 ${errors.password && "mt-6"
                        } `}
                    >
                      <div className="flex">
                        <div className="flex items-center h-5">
                          {/* <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                          /> */}
                          <IOSSwitch />
                        </div>
                        <label
                          htmlFor="remember"
                          className="ms-2 text-sm font-medium remember-information "
                        >
                          Remember Me
                        </label>
                      </div>
                      <div>
                        <Link className="forget-text" to="/forget-password">
                          Forgot password?
                        </Link>
                      </div>
                    </div>

                    <LoadingButton
                      variant="contained"
                      className="submit-button mb-2 "
                      style={{ marginRight: "1rem", spinnerColor: "white", color: 'white', fontSize: '16px', fontWeight: '600', height: '50px', borderRadius: '8px', textTransform: 'capitalize', fontFamily: 'Open Sans' }}
                      type="submit"
                      disabled={!!errors.email && !!errors.password}
                      loading={Loading}
                    >
                      {Loading ? "Adding ..." : "Login"}
                    </LoadingButton>

                    <Divider orientation="horizontal" flexItem className="!my-4">
                      <span className="small-text">or login with</span>
                    </Divider>
                    <div className="flex justify-center items-center space-x-4 mt-2 mb-2 social-btn-container">
                      <LoginSocialGoogle
                        // client_id={process.env.CLIENT_ID}
                        client_id={
                          "662749198952-rfvupgjdptea3k7apdjgnsch72m9e153.apps.googleusercontent.com"
                        }
                        onLoginStart={onLoginStart}
                        // redirect_uri={"http://localhost:3000/"}
                        scope="openid profile email"
                        // discoveryDocs="claims_supported"
                        // access_type="offline"
                        onResolve={({ data }) => googleLogin(data)}
                        onReject={(provider, data) =>
                          console.log(provider, data)
                        }
                      >
                        <Button
                          variant="outlined"
                          className="social-button"
                          //   onClick={handleGoogle}
                          startIcon={<DownloadIcon />}
                        >
                          <span className="social-button-text">Google</span>
                        </Button>
                      </LoginSocialGoogle>
                      <LoginSocialFacebook
                        appId={
                          process.env.REACT_APP_FB_APP_ID || "1447040019557218"
                        }
                        fieldsProfile={
                          "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
                        }
                        onLoginStart={onLoginStart}
                        onLogoutSuccess={onLogoutSuccess}
                        redirect_uri={REDIRECT_URI}
                        onResolve={({ provider, data }) => {
                          setProvider(provider);
                          // setProfile(data);
                        }}
                        onReject={(err) => {
                          console.log(err);
                        }}
                      >
                        <Button
                          variant="outlined"
                          className="social-button"
                          startIcon={<FacebookIcon />}
                        >
                          <span className="social-button-text">Facebook</span>
                        </Button>
                      </LoginSocialFacebook>
                    </div>
                    <button onClick={() => navigate('/')} className="social-button social-button-text mt-4 mb-8">
                      Continue as Guest
                    </button>
                    <span className="small-text">
                      Don’t have an account?{" "}
                      <Link className="forget-text" to={"/sign-up"}>
                        Sign Up
                      </Link>
                    </span>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="w-1/2 min-h-full items-center justify-center hidden md:flex">
          <div className="bg-gray-100 rounded-lg w-full flex justify-end">
            <img src={bg} alt="background" className="h-screen" />
          </div>
        </div>
        <SocialPopup
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          closeModal={closeModal}
        />
      </div>

    </>
  );
};
export default Login;
