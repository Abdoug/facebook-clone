import React from "react";
import "./App.css";
import Header from "./components/header";
import SideBar from "./components/sidebar";
import Feed from "./components/feed";
import Widget from "./components/widget";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <SideBar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;
