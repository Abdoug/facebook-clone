import React from "react";
import "./App.css";
import Header from "./components/header";
import SideBar from "./components/sidebar";
import Feed from "./components/feed";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <SideBar />
        <Feed />
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;
