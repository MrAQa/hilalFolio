import React, { useState } from "react";
// import ".//forget-password.css";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Link, useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CancelIcon from "@mui/icons-material/Cancel";

import { Formik, Form, Field, ErrorMessage,
  //  useFormik 
  } from "formik";
import * as Yup from "yup";
import InputAdornment from "@mui/material/InputAdornment";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { url } from "../../environment";
import FormControl from "@mui/material/FormControl";
const ForgetPassword = () => {
  // const [email, setEmail] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // const [isValidEmail, setIsValidEmail] = useState(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   event.preventDefault();
  // };

  // const handleChange = (event) => {
  //   const newEmail = event.target.value;
  //   setEmail(newEmail);

  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   setIsValidEmail(emailRegex.test(newEmail));
  // };

  const initialValues = {
    email: "",
    // password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address")
      .required("Email is required"),
  });

  const onSubmit = (values, actions) => {
    // Handle form submission logic here

    console.log("Form submitted with values:", values);
    sendOtp(values);
    actions.setSubmitting(false);
  };

  const sendOtp = (e) => {
    console.log(e);
    setLoading(true);
    fetch(`${url}/api/auth/forgot-password`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email: e.email,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.success === true) {
          localStorage.setItem("token", res.body.token);

          toast.success(res.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
          navigate("/otp-verification", {
            state: { email: e.email, component: "forget" },
          });

          setLoading(false);
        } else {
          toast.error(res.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
          setLoading(false);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <div className="flex h-screen">
        <ToastContainer />

        <div className="w-full">
          {" "}
          <div className=" h-[95vh] m-4 rounded-lg flex flex-col justify-center items-center">
            {/* <div className="flex justify-center items-center mt-1">
              <img src="Logo.png" width={120} />
            </div> */}
            <div className="flex flex-col justify-center items-center mt-3 text-center ">
              <p className="text-35 Welcome-text mb-2">Forgot password</p>
              <span className="small-text">
                It was popularised in the 1960s with the
                <br /> release of Lorem Ipsum.
              </span>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ touched, errors }) => (
                  <Form className="max-w-sm mt-3">
                    <div className="mb-5">
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
                          error={touched.email && !!errors.email}
                          spellCheck={false}
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
                    <LoadingButton
                      variant="contained"
                      className="submit-button mb-2 "
                      style={{ marginRight: "1rem" }}
                      type="submit"
                      disabled={!!errors.email}
                      loading={Loading}
                    >
                      {Loading ? "Adding ..." : "Send OTP"}
                    </LoadingButton>
                    <span className="small-text mt-1">
                      Remember password?{" "}
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
export default ForgetPassword;
