import React, { useState, useCallback } from "react";
// import "./sign-up.css";
import IconButton from "@mui/material/IconButton";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";
import imglOGO from "../../assets/Logo-new.png";
// import { ReactComponent as drop_up } from "../../assets/arrow_drop.svg";
// import { ReactComponent as Drop_down } from "../../assets/arrow_drop_down.svg";

import OutlinedInput from "@mui/material/OutlinedInput";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  //  useFormik
} from "formik";
import * as Yup from "yup";
import { url } from "../../environment";
import { LoadingButton } from "@mui/lab";
import CancelIcon from "@mui/icons-material/Cancel";

import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { ReactComponent as DownloadIcon } from "../../assets/Logo.svg";
import { ReactComponent as FacebookIcon } from "../../assets/Facebook.svg";

import InputAdornment from "@mui/material/InputAdornment";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CircleIcon from "@mui/icons-material/Circle";
import DoneIcon from "@mui/icons-material/Done";
import { GetProfileData } from "../../service/service";
const getPasswordStrength = (password) => {
  let strength = 0;
  if (password.length >= 8) strength += 1;
  if (password.match(/\d|[\W_]/)) strength += 1;
  if (password.match(/[a-z]/)) strength += 1;
  if (password.match(/[A-Z]/)) strength += 1;
  return strength; // This will be a value between 0 and 4
};

const PasswordStrengthBar = ({ password }) => {
  const strength = getPasswordStrength(password);
  const strengthBarColor = (strength) => {
    switch (strength) {
      case 1:
        return "red"; // Color for weak password
      case 2:
      case 3:
        return "#f1c40f"; // Color for average password
      case 4:
        return "#2ecc71"; // Color for strong password
      default:
        return "#dddddd"; // Color for no password or very weak password
    }
  };

  const strengthLabel = (strength) => {
    switch (strength) {
      case 1:
        return "Weak";
      case 2:
      case 3:
        return "Average";
      case 4:
        return "Strong";
      default:
        return ""; // No label for no password
    }
  };
  const hasMinLength = password.length >= 8;
  const hasNumberOrSymbol = /\d|[\W_]/.test(password);
  const hasLowerAndUpperCase = /[a-z]/.test(password) && /[A-Z]/.test(password);

  return (
    <div style={{ width: "100%", padding: "5px", borderRadius: "5px",textAlign:'left' }}>
      <div style={{ paddingBottom: "5px", color: strengthBarColor(strength) }}>
        {strengthLabel(strength)}
      </div>
      <div
        style={{ width: "100%", backgroundColor: "#ddd", borderRadius: "5px" }}
        className="mb-3"
      >
        <div
          style={{
            width: `${strength * 25}%`,
            backgroundColor: strengthBarColor(strength),
            height: "6px",
            borderRadius: "5px",
            transition: "width 0.3s",
          }}
        ></div>
      </div>
      <div style={{ fontSize: "0.8rem" }}>
        <div style={{ color: hasMinLength ? "green" : "gray" }}>
          {hasMinLength ? (
            <DoneIcon style={{ width: "15px" }} />
          ) : (
            <CircleIcon style={{ width: "10px" }} />
          )}{" "}
          At least 8 characters
        </div>
        <div style={{ color: hasNumberOrSymbol ? "green" : "gray" }}>
          {hasNumberOrSymbol ? (
            <DoneIcon style={{ width: "15px" }} />
          ) : (
            <CircleIcon style={{ width: "10px" }} />
          )}{" "}
          At least one number (0-9) or symbol
        </div>
        <div style={{ color: hasLowerAndUpperCase ? "green" : "gray" }}>
          {hasLowerAndUpperCase ? (
            <DoneIcon style={{ width: "15px" }} />
          ) : (
            <CircleIcon style={{ width: "10px" }} />
          )}{" "}
          Lowercase (a-z) and uppercase (A-Z)
        </div>
      </div>
    </div>
  );
};

const SignUp = () => {
  // const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [showPassword1, setShowPassword1] = useState(false);
  // const [isValidEmail, setIsValidEmail] = useState(false);
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  // const handleClickShowPassword1 = () => setShowPassword1((show) => !show);

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
        console.log('error', err)
        setLoading(false);
      });
  };

  const onLoginStart = useCallback(() => {
    alert(" start");
  }, []);

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
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
      ),
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
                {({ touched, errors,values }) => (
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
                        // className="password-input"
                      >
                        <Field
                          as={OutlinedInput}
                          type={showPassword ? "text" : "password"}
                          // aria-autocomplete="off"
                          error={touched.password && !!errors.password}
                          name="password"
                          // value={values.password}
                          // onChange={(e)=>setPassword()}
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
                          className={`text-red-700 ${touched.email && "visible"
                            } text-start text-xs`}
                        />
                      </FormControl>
                    </div>

                    {/* Password strength bar */}
                    <PasswordStrengthBar password={values.password} />
                    <div className={`mb-2  ${errors.password && "mt-6"} `}>
                      <label
                        htmlFor="referal"
                        className="block mb-2 text-sm font-medium heading text-start"
                      >
                        Referral code (Optional)
                      </label>
                      {/* <Drop_down /> */}
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
                    </div>
                    <div className={`flex justify-between w-full mb-4`}>
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
                        !!errors.confirmPassword &&
                        !!errors.password &&
                        !!errors.email
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
                        // onLoginStart={onLoginStart}
                        // onLogoutSuccess={onLogoutSuccess}
                        redirect_uri={REDIRECT_URI}
                        onResolve={({ provider, data }) => {
                          console.log(provider, data)
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
                    <span className="already-text mt-1">
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
