import React, { useState } from "react";
// import "./new-passwpord.css";
import IconButton from "@mui/material/IconButton";
import { LoadingButton } from "@mui/lab";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import imglOGO from "../../assets/Logo-new.png";
import PasswordStrengthBar from "../../Component/passwordStrengthCheck";

import OutlinedInput from "@mui/material/OutlinedInput";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  // useFormik
} from "formik";
import { useNavigate } from "react-router-dom";

import * as Yup from "yup";
import { url } from "../../environment";

import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const SignUp = () => {
  // const [email, setEmail] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  // const [isValidEmail, setIsValidEmail] = useState(false);
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);

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
    let token = "Bearer " + localStorage.getItem("token");

    setLoading(true);
    fetch(`${url}/api/auth/new-password`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
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
          navigate("/sign-in");
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

  const validationSchema = Yup.object({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Invalid password")
      .matches(/[A-Z]/, "Invalid password")
      .test("num-or-special", "Invalid confirm password", (value) => {
        return (
          /\d/.test(value) || /[!@#$%^&*()_+=[\]{};':"\\|,.<>/?-]+/.test(value)

        );
      }),

    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Invalid confirm password")
      .matches(/[A-Z]/, "Invalid confirm password")
      .test("num-or-special", "Invalid confirm password", (value) => {
        return (
          /\d/.test(value) || /[!@#$%^&*()_+=[\]{};':"\\|,.<>/?-]+/.test(value)
        );
      }),
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <div className="flex">
        <div className="w-full min-h-full ">
          <ToastContainer />{" "}
          <div className=" m-4 rounded-lg overflow-auto h-[94vh] flex flex-col justify-center items-center mt-3 text-center">
            <div className="flex justify-center mt-1">
              <img src={imglOGO} width={120} alt="logo" />
            </div>
            <div className="flex flex-col justify-center items-center mt-3 text-center ">
              <p className="text-35 Welcome-text">Reset Password</p>
              <span className="small-text">
                Your new password must be different from <br />
                previous used passwords.
              </span>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ values, touched, errors }) => (
                  <Form className="max-w-sm mt-3">
                    <div className="mb-2">
                      <label
                        for="password"
                        className="block mb-2 text-sm font-medium heading text-start"
                      >
                        New password
                      </label>
                      <FormControl
                        sx={{ m: 1, width: "43ch" }}
                        variant="outlined"
                        className="password-input"
                      >
                        <Field
                          as={OutlinedInput}
                          type={showPassword ? "text" : "password"}
                          // aria-autocomplete="off"
                          error={touched.password && errors.password}
                          name="password"
                          placeholder="Enter your new password"
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
                          className={`text-red-700 ${errors.password && "visible"
                            } text-start text-xs	mb-10`}
                        />
                      </FormControl>
                    </div>
                    {/* Password strength bar */}
                    <PasswordStrengthBar password={values.password} />
                    <div className={`mb-2  `}>
                      <label
                        for="password"
                        className="block mb-2 text-sm font-medium heading text-start"
                      >
                        Confirm new password
                      </label>
                      <FormControl
                        sx={{ m: 1, width: "43ch" }}
                        variant="outlined"
                        className="password-input"
                      >
                        <Field
                          as={OutlinedInput}
                          type={showPassword1 ? "text" : "password"}
                          error={
                            touched.confirmPassword && errors.confirmPassword
                          }
                          // aria-autocomplete="off"
                          name="confirmPassword"
                          placeholder="Enter your confirm password"
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword1}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword1 ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="confirmPassword"
                          component="div"
                          className={`text-red-700 ${touched.confirmPassword && "visible"
                            } text-start text-xs	mb-10`}
                        />
                      </FormControl>
                    </div>
                    <div
                      className={` mb-2 ${errors.confirmPassword ? "mt-6" : ""
                        }  `}
                    >
                      <LoadingButton
                        variant="contained"
                        className="submit-button"
                        disabled={errors.confirmPassword && errors.password}
                        style={{ marginRight: "1rem" }}
                        type="submit"
                        loading={Loading}
                      >
                        {Loading ? "Adding ..." : "Submit"}
                      </LoadingButton>
                    </div>
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
