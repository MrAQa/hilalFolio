import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { LoadingButton } from "@mui/lab";
import { Link } from "react-router-dom";
import { ReactComponent as DownloadIcon } from "../../assests/Logo.svg";
import { ReactComponent as FacebookIcon } from "../../assests/Facebook.svg";

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

  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
            <div className="flex justify-center mt-1">
              <img src="Logo.png" width={120} />
            </div>
            <div className="flex flex-col justify-center items-center mt-3 text-center ">
              <p className="text-35 Welcome-text">Welcome back!</p>
              <span className="small-text">
                Enter your credential to login.
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
                          autoComplete="off"
                          placeholder="Enter your email"
                          spellCheck={false}
                          endAdornment={
                            <InputAdornment position="end">
                              {touched.email && !errors.email ? (
                                <CheckCircleOutlineIcon
                                  sx={{ color: "green" }}
                                />
                              ) : (
                                <ErrorOutlineIcon sx={{ color: "red" }} />
                              )}
                            </InputAdornment>
                          }
                          inputProps={{
                            autoComplete: "off",
                          }}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className={`text-red-500 text-start text-xs	`}
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
                          sx={{
                            borderColor: "red",
                            "& input:valid + fieldset": {
                              borderColor: "red",
                            },
                            "& input:invalid + fieldset": {
                              borderColor: !errors.password ? "green" : "red",
                            },
                          }}
                          // sx={{
                          //   borderColor:
                          //     touched.password && errors.password
                          //       ? "red"
                          //       : undefined, // Set border color to red if there's an error
                          // }}
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className={`text-red-500 ${
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
                      {}
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
                    <div className="flex space-x-4 mt-2 mb-2">
                      <Button
                        variant="outlined"
                        className="social-button"
                        startIcon={<DownloadIcon />}
                      >
                        <span className="social-button-text">Google</span>
                      </Button>
                      <Button
                        variant="outlined"
                        className="social-button"
                        startIcon={<FacebookIcon />}
                      >
                        <span className="social-button-text">Facebook</span>
                      </Button>
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
