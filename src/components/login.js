import React from "react";
import "../assets/styles/login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../config/firebase";
import { actionTypes } from "../contextApi/reducer";
import { useStateValue } from "../contextApi/stateProvider";

function Login() {
  const [{ user }, dispatch] = useStateValue();
  const onSubmit = () => {
    auth
      .signInWithPopup(provider)
      .then(res => {
        dispatch({
          type: actionTypes.SET_USER,
          user: res.user
        });
      })
      .catch(err => {
        console.log("Error when logging");
      });
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://en.facebookbrand.com/wp-content/uploads/2019/06/f_logo_RGB-Blue_512.png"
          alt=""
        />
        <img src="/assets/images/facebook_typo.png" alt="" />
      </div>
      <Button type="submit" onClick={() => onSubmit()}>
        Login
      </Button>
    </div>
  );
}

export default Login;
