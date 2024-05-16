import React, {
  useState, useCallback,
} from 'react';
import { ReactComponent as DownloadIcon } from "../../assets/Logo.svg";
import { ReactComponent as FacebookIcon } from "../../assets/Facebook.svg";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Divider from "@mui/material/Divider";
import { url } from "../../environment";
import { useNavigate } from "react-router-dom";

import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Link } from "react-router-dom";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ isOpen, closeModal, setIsOpen }) {
  const [provider, setProvider] = useState("");
  const navigate = useNavigate()
  const onLoginStart = useCallback(() => {
    // alert("login start");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    // setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);
  const REDIRECT_URI = `${window.location.origin}/login`;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
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
  return (
    <>
      <React.Fragment>

        <Dialog
          open={isOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Important Message"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description" >
              <span className='text-red-600'>This email is already connected to social account</span>

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
              <Divider orientation="horizontal" flexItem className="!my-4">

                <span className="small-text">or </span>
              </Divider>
              <button onClick={() => navigate('/forget-password')} className="social-button social-button-text">
                Create a password instead
              </button>
            </DialogContentText>

          </DialogContent>

        </Dialog>
      </React.Fragment>
    </>
  );

}