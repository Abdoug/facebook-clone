import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import SideBar from "./components/sidebar";
import Feed from "./components/feed";
import Widget from "./components/widget";
import Login from "./components/login";
import { useStateValue } from "./contextApi/stateProvider";
import { auth } from "./config/firebase";
import { actionTypes } from "./contextApi/reducer";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    try {
      auth.onAuthStateChanged((res) => {
        if (res) {
          console.log("U: ", res);
          dispatch({
            type: actionTypes.SET_USER,
            user: res,
          });
        } else {
          dispatch({
            type: actionTypes.SET_USER,
            user: null,
          });
        }
        setIsLoading(false);
      });
    } catch (e) {
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });
      console.log("Error getting user: ", e);
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="app">
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {isLoading ? null : !user ? (
        <Login />
      ) : (
        <>
          {" "}
          <Header />
          <div className="app__body">
            <SideBar />
            <Feed />
            <Widget />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
