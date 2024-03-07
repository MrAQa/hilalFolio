import React, {
  useCallback,
  useState,
  //  useEffect
} from "react";
// import axios from "axios";
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

import InputAdornment from "@mui/material/InputAdornment";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { url } from "../../environment";
import { GetProfileData } from "../../service/service";
const Login = () => {
  const [Loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [provider, setProvider] = useState("");

  console.log(provider);
  const onLoginStart = useCallback(() => {
    // alert("login start");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    // setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const REDIRECT_URI = "http://localhost:3000/login";
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
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
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
      ),
  });

  const navigate = useNavigate();

  const onSubmit = (values, actions) => {
    // Handle form submission logic here

    // console.log("Form submitted with values:", values);
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
          GetProfileData()
            .then((result) => {
              const data = result?.body?.user;
              localStorage.setItem("user_Data", JSON.stringify(data));
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

  const googleLogin = (e) => {
    console.log(e);
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

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <ToastContainer />
        <div className="w-1/2 h-100 hidden md:block">
          <div className="bg-gray-100 h-[95vh] m-4 rounded-lg"></div>
        </div>
        <div className="w-1/2 min-h-full">
          {" "}
          <div className=" h-[95vh] m-4 rounded-lg">
            <div className="relative inline-block text-left"></div>
            <div className="flex justify-center mt-1">
              <img src={imglOGO} width={120} alt="logo" />
            </div>
            <div className="flex flex-col justify-center items-center mt-3 text-center ">
              <p className="text-35 Welcome-text">Welcome back!</p>
              <span className="small-text">
                Enter your credential to login.
                {t("greeting")}
              </span>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ touched, errors }) => (
                  <Form className="max-w-sm mt-3">
                    <div className="mb-3">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 text-start"
                      >
                        Email
                      </label>
                      <FormControl
                        sx={{ m: 1, width: "43ch" }}
                        variant="outlined"
                        className="password-input"
                      >
                        <Field
                          as={OutlinedInput}
                          name="email"
                          error={touched.email && errors.email}
                          autoComplete="off"
                          placeholder="Enter your email"
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
                          className={`text-red-700 text-start text-xs	`}
                        />
                      </FormControl>
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium heading text-start"
                      >
                        Password
                      </label>
                      <FormControl
                        sx={{ m: 1, width: "43ch" }}
                        variant="outlined"
                        className="password-input"
                      >
                        <Field
                          as={OutlinedInput}
                          type={showPassword ? "text" : "password"}
                          error={touched.password && errors.password}
                          // aria-autocomplete="off"
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
                          className={`text-red-700 ${
                            touched.email && "visible"
                          } text-start text-xs	mb-10`}
                        />
                      </FormControl>
                    </div>
                    <div
                      className={`flex justify-between w-full mb-4 ${
                        errors.password && "mt-6"
                      } `}
                    >
                      <div className="flex">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                          />
                        </div>
                        <label
                          htmlFor="remember"
                          className="ms-2 text-sm font-medium remember-information "
                        >
                          Remember information
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
                      style={{ marginRight: "1rem", spinnerColor: "white" }}
                      type="submit"
                      disabled={errors.email && errors.password}
                      loading={Loading}
                    >
                      {Loading ? "Adding ..." : "Login"}
                    </LoadingButton>
                    {/* <button type="submit" className="submit-button mb-2 ">
                      Login
                    </button> */}
                    <Divider orientation="horizontal" flexItem>
                      <span className="small-text">or login with</span>
                    </Divider>
                    <div className="flex justify-center items-center space-x-4 mt-2 mb-2">
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
                        onResolve={({ provider, data }: IResolveParams) => {
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
                    <span className="small-text mt-1">
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
      </div>
    </>
  );
};
export default Login;
