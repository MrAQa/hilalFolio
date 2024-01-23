import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CancelIcon from "@mui/icons-material/Cancel";
import Divider from "@mui/material/Divider";
import { MenuItem, Select, InputLabel } from "@mui/material";

import Button from "@mui/material/Button";
import { LoadingButton } from "@mui/lab";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n"; // Import your i18n configuration

import { Link } from "react-router-dom";
import { ReactComponent as DownloadIcon } from "../../assets/Logo.svg";
import { ReactComponent as FacebookIcon } from "../../assets/Facebook.svg";

import InputAdornment from "@mui/material/InputAdornment";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { url } from "../../environment";
const Login = () => {
  const [email, setEmail] = useState("");
  const [Loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState([]);
  const [provider, setProvider] = useState("");
  // const [profile, setProfile] = useState();

  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  useEffect(() => {
    console.log(user);
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          // setProfile(res.data);
          // handleLoginFunctionFromSocailAUth(res?.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // const REDIRECT_URI =
  // "https://plenty-planets-beam-42-118-51-2.loca.lt/account/login";
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

  const newFu = (res) => {
    setUser(res);
  };

  const navigate = useNavigate();

  const onSubmit = (values, actions) => {
    // Handle form submission logic here

    console.log("Form submitted with values:", values);
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
          navigate("/home");
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
          navigate("/home");
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

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    // Add more languages as needed
  ];

  const handleChangeLanguage = (code) => {
    // Implement language change logic (e.g., update i18n configuration)
    console.log(`Language changed to ${code.target.value}`);
    i18n.changeLanguage(code.target.value);
  };
  const handleGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse, "codeResponse");
      // newFu(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const handleLogin = (user) => {
    console.log(user);
  };

  const handleSuccess = (response) => {
    // Access user information and access token
    console.log(response.profileObj);
    console.log(response.tokenObj.access_token);
  };

  const handleFailure = (error) => {
    // Handle login errors
    console.error(error);
  };
  return (
    <>
      <div class="flex h-screen justify-center items-center">
        <ToastContainer />
        <div class="w-1/2 h-100 hidden md:block">
          <div className="bg-gray-100 h-[95vh] m-4 rounded-lg"></div>
        </div>
        <div class="w-1/2 min-h-full">
          {" "}
          <div className=" h-[95vh] m-4 rounded-lg">
            <div className="relative inline-block text-left">
              {/* <div>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: "20ch",
                    },
                  }}
                >
                  {options.map((option) => (
                    <MenuItem
                      key={option}
                      selected={option === "Pyxis"}
                      onClick={handleClose}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
                <FormControl>
                  <InputLabel id="language-select-label">Language</InputLabel>
                  <Select
                    labelId="language-select-label"
                    id="language-select"
                    value={selectedLanguage}
                    label="Language"
                    onChange={handleChangeLanguage}
                  >
                    <MenuItem value="">Select Language</MenuItem>
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="es">Spanish</MenuItem>
                    {/* Add more languages as needed */}
              {/* </Select>
                </FormControl> */}
              {/* </div> */}

              {/* <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleChangeLanguage(lang.code)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div> */}
            </div>
            <div className="flex justify-center mt-1">
              <img src="Logo.png" width={120} />
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
                    <div class="mb-3">
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 text-start"
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
                    <div class="mb-2">
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium heading text-start"
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
                          aria-autocomplete="off"
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
                        <div class="flex items-center h-5">
                          <input
                            id="remember"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                          />
                        </div>
                        <label
                          for="remember"
                          class="ms-2 text-sm font-medium remember-information "
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
                        onLoginStart={onLoginStart}
                        onLogoutSuccess={onLogoutSuccess}
                        redirect_uri={REDIRECT_URI}
                        onResolve={({ provider, data }: IResolveParams) => {
                          setProvider(provider);
                          setProfile(data);
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
