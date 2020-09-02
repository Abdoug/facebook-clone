import React from "react";
import "./App.css";
import Header from "./components/header";
import SideBar from "./components/sidebar";
import Feed from "./components/feed";
import Widget from "./components/widget";
import Login from "./components/login";
import { useStateValue } from "./contextApi/stateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
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
