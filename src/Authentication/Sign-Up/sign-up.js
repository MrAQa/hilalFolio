import React, { useState, useCallback } from "react";
// import "./sign-up.css";
import IconButton from "@mui/material/IconButton";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";

import OutlinedInput from "@mui/material/OutlinedInput";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { url } from "../../environment";
import { LoadingButton } from "@mui/lab";
import CancelIcon from "@mui/icons-material/Cancel";
import { GetProfileData } from "../../service/service";

import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { ReactComponent as DownloadIcon } from "../../assets/Logo.svg";
import { ReactComponent as FacebookIcon } from "../../assets/Facebook.svg";
import { ReactComponent as DropDown } from "../../assets/arrow_drop.svg";
import { ReactComponent as DropUp } from "../../assets/arrow_drop_down.svg";

import InputAdornment from "@mui/material/InputAdornment";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import imglOGO from "../../assets/Logo-new.png";

import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PasswordStrengthBar from "../../Component/passwordStrengthCheck";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [ShowReferralCode, setShowReferralCode] = useState(false);
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values, actions) => {
    // Handle form submission logic here

    console.log("Form submitted with values:", values);
    submitLogin(values);
    actions.setSubmitting(false);
  };

  const submitLogin = (e) => {
    setLoading(true);
    fetch(`${url}/api/auth/register`, {
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
        console.log(res.success);
        if (res.success === true) {
          localStorage.setItem("token", res.body.token);
          toast.success(res.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
          navigate("/otp-verification", {
            state: { email: e.email, component: "signUp" },
          });

          console.log("sds");
          setLoading(false);
        } else {
          toast.error(res.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const onLoginStart = useCallback(() => {
    alert(" start");
  }, []);

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

  const REDIRECT_URI = "http://localhost:3000/sign-in";

  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Invalid password")
      .matches(/[A-Z]/, "Invalid password")
      .test("num-or-special", "Invalid password", (value) => {
        return (
          /\d/.test(value) || /[!@#$%^&*()_+=[\]{};':"\\|,.<>/?-]+/.test(value)
        );
      }),


  });

  return (
    <>
      <div className="flex justify-center items-center">
        <ToastContainer />
        <div className="w-1/2 h-100 hidden md:block">
          <div className="bg-gray-100 h-screen rounded-lg"></div>
        </div>
        <div className=" w-1/2 min-h-full ">
          {" "}
          <div className="  rounded-lg md:overflow-auto h-[94vh] ">
            <div className="flex justify-center mt-1">
              <img src={imglOGO} width={120} alt="logo" />
            </div>
            <div className="flex flex-col justify-center items-center mt-3 text-center ">
              <p className="text-25 sm:text-35 Welcome-text">Create account</p>
              <span className="small-text">Sign up to get started!</span>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ touched, errors, values }) => (
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
                          autoComplete="off"
                          spellCheck={false}
                          error={touched.email && !!errors.email}
                          placeholder="Enter your email"
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
                          name="password"
                          placeholder="Enter password"
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
                          sx={{
                            borderColor:
                              touched.password && errors.password
                                ? "red"
                                : undefined, // Set border color to red if there's an error
                          }}
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className={`text-red-700 ${touched.password && "visible"
                            } text-start text-xs	mb-10`}
                        />
                      </FormControl>
                    </div>
                    {/* Password strength bar */}
                    {values.password && (
                      <PasswordStrengthBar password={values.password} />
                    )}


                    <div className={`mb-2   `}>
                      <div className="flex justify-between cursor-pointer" onClick={() => setShowReferralCode(ShowReferralCode ? false : true)}>
                        <label
                          htmlhtmlFor="referal"
                          className="block mb-2 text-sm font-medium heading text-start cursor-pointer"
                        >
                          Referral code (Optional)
                        </label>
                        {ShowReferralCode ? (<DropUp onClick={() => setShowReferralCode(false)} className="cursor-pointer" />) : (<DropDown onClick={() => setShowReferralCode(true)} className="cursor-pointer" />)}
                      </div>

                      {/* <Drop_down /> */}
                      {ShowReferralCode &&
                        <FormControl
                          sx={{ m: 1, width: "43ch" }}
                          variant="outlined"
                          className="password-input"
                        >
                          <Field
                            as={OutlinedInput}
                            type={"text"}
                            // aria-autocomplete="off"
                            name="referalCode"
                            placeholder="Enter referral code"
                            autoComplete="off"
                            spellCheck={false}
                          />
                        </FormControl>
                      }
                    </div>
                    <div className={`flex justify-between w-full mb-4 `}>
                      { }
                      <div className="flex">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            type="checkbox"
                            value=""
                            required
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                          />
                        </div>
                        <label
                          htmlFor="remember"
                          className="ms-2 text-sm font-medium remember-information "
                        >
                          I agree to{" "}
                          <span className="forget-text">
                            terms and conditions
                          </span>{" "}
                          & <span className="forget-text">privacy </span>policy
                          by Hilalfolio.
                        </label>
                      </div>
                    </div>
                    <LoadingButton
                      variant="contained"
                      className="submit-button mb-2 "
                      disabled={
                        errors.confirmPassword &&
                        errors.password &&
                        errors.email
                      }
                      style={{ marginRight: "1rem" }}
                      type="submit"
                      loading={Loading}
                    >
                      {Loading ? "Adding ..." : "Sign Up"}
                    </LoadingButton>
                    {/* <button type="submit" className="submit-button mb-2 ">
                      Sign Up
                    </button> */}
                    <Divider orientation="horizontal" flexItem>
                      <span className="small-text">Or Sign up with </span>
                    </Divider>
                    <div className="flex justify-center items-center space-x-4 mt-2 mb-2">
                      <LoginSocialGoogle
                        client_id={
                          "662749198952-rfvupgjdptea3k7apdjgnsch72m9e153.apps.googleusercontent.com"
                        }
                        onLoginStart={onLoginStart}
                        // redirect_uri={"http://localhost:3000/home"}
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
                        // onLoginStart={onLoginStart}
                        // onLogoutSuccess={onLogoutSuccess}
                        redirect_uri={REDIRECT_URI}
                        onResolve={({ provider, data }) => {
                          // setProvider(provider);
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
                      Already a member?{" "}
                      <Link className="forget-text" to={"/sign-in"}>
                        Login
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
export default SignUp;
