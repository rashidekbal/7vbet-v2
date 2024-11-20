import { useContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Contextprovider, { data } from "./store/Contextprovider";
import { Outlet } from "react-router-dom";
// src/socket.js
import { io } from "socket.io-client";

function App() {
  const [front, changefront] = useState("login");
  const [mainLogin, changeMain] = useState("login");
  let innerheight = window.innerHeight;

  return (
    <>
      <Contextprovider
        front={front}
        changefront={changefront}
        mainLogin={mainLogin}
        changeMain={changeMain}
      >
        <div id="main" style={{ minHeight: innerheight }}>
          <Outlet></Outlet>
        </div>
      </Contextprovider>
    </>
  );
}

export default App;
