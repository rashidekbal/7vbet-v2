import axios from "axios";
import { io } from "socket.io-client";
import { createContext, useEffect, useState } from "react";
//for production
// const host = "https://sevenvbetserver.onrender.com";
// const websiteLink = "https://7vbet.vercel.app";
// //for local
const host = "http://localhost:8000";
const websiteLink = "http://localhost:3000";
const ws = io(host);
let safeRevenue = 0.1;
let totalrevenuesafe = 0.0;
const currentintrestrate = 5;
let names = "MemberNNGU7Y28";
let exp = 500;
export const data = createContext([]);
let accumulated = 45;
export default function Contextprovider({ children }) {
  const [uid, changeuid] = useState("");
  const [userfinance, changeuserfinance] = useState({});
  let [WingoServerData1min, change1minWingo] = useState([]);
  let [WingoServerData3min, change3minWingo] = useState([]);
  let [WingoServerData5min, change5minWingo] = useState([]);
  let [WingoServerData30s, change30s] = useState([]);
  let [Wingouserbethistory1min, changeWingouserbethistory1min] = useState([]);
  let [Wingouserbethistory3min, changeWingouserbethistory3min] = useState([]);
  let [Wingouserbethistory5min, changeWingouserbethistory5min] = useState([]);
  let [Wingouserbethistory30sec, changeWingouserbethistory30sec] = useState([]);
  const [k3data, setK3Data] = useState([
    {
      period: 91234819,
      pips: 14,
      size: "Big",
      oddEven: "Even",
      result: "5,5,4",
    },
    {
      period: 91234819,
      pips: 9,
      size: "Small",
      oddEven: "Odd",
      result: "1,5,3",
    },
    {
      period: 91234819,
      pips: 3,
      size: "Small",
      oddEven: "Odd",
      result: "1,1,1",
    },
  ]);
  function setuid(uid, token) {
    window.sessionStorage.setItem("uid", uid);
    sessionStorage.setItem("uid", uid);
    sessionStorage.setItem("token", token);
    // console.log(token);
  }
  const api = axios.create({
    baseURL: host,
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });
  // change wingo 1 min result
  function get1minwingo() {
    api
      .get(`/wingoOneMin`)
      .then((res) => {
        change1minWingo(res.data);
      })
      .catch((res) => {
        console.log("error getting data");
      });
  }
  function get30secwingo() {
    api
      .get(`/wingo30sec`)
      .then((res) => {
        change30s(res.data);
      })
      .catch((res) => {
        console.log("error getting data");
      });
  }
  function getwingo3min() {
    api
      .get(`/wingo3min`)
      .then((res) => {
        change3minWingo(res.data);
      })
      .catch((res) => {
        console.log("error getting data");
      });
  }
  function getwingo5min() {
    api
      .get(`/wingo5min`)
      .then((res) => {
        change5minWingo(res.data);
      })
      .catch((res) => {
        console.log("error getting data");
      });
  }
  function getUserfinances(uid) {
    api
      .get(`/userfinances`)
      .then((res) => {
        if (res.status.toString === "401") {
          window.location.replace(websiteLink);
        }
        if (res.status.toString() === "403") {
          window.location.replace(websiteLink);
        }
        if (res.status.toString() === "200") {
          changeuserfinance(res.data);
        }
      })
      .catch((err) => {
        window.location.replace(websiteLink);
      });
  }

  function setWingo30secbet(packet, setShowLoader) {
    setShowLoader(true);
    api
      .post(`setWingo30secbet`, { packet })
      .then((res) => {
        if (res.data == "done") {
          getUserfinances(uid);
          GetWingobetHistory30sec(uid);
          setShowLoader(false);
        } else {
          alert("bet failed");
          setShowLoader(false);
        }
      })
      .catch((res) => {
        setShowLoader(false);
        console.log("err bet not set", res.data);
      });
  }
  function setWingo1minbet(packet, setShowLoader) {
    setShowLoader(true);
    api
      .post(`setWingo1minbet`, { packet })
      .then((res) => {
        if (res.data == "done") {
          getUserfinances(uid);
          GetWingobetHistory1min(uid);
          setShowLoader(false);
        } else {
          alert("bet failed");
          setShowLoader(false);
        }
      })
      .catch((res) => {
        console.log("err bet not set", res.data);
        setShowLoader(false);
      });
  }
  function setWingo3minbet(packet, setShowLoader) {
    setShowLoader(true);
    api
      .post(`/setWingo3minbet`, { packet })
      .then((res) => {
        if (res.data == "done") {
          getUserfinances(uid);
          GetWingobetHistory3min(uid);
          setShowLoader(false);
        } else {
          alert("bet failed");
          setShowLoader(false);
        }
      })
      .catch((res) => {
        console.log("err bet not set", res.data);
        setShowLoader(false);
      });
  }
  function setWingo5minbet(packet, setShowLoader) {
    setShowLoader(true);
    api
      .post(`/setwingo5min`, { packet })
      .then((res) => {
        if (res.data == "done") {
          getUserfinances(uid);
          GetWingobetHistory5min(uid);
          setShowLoader(false);
        } else {
          alert("bet failed");
          setShowLoader(false);
        }
      })
      .catch((res) => {
        console.log("err bet not set", res.data);
        setShowLoader(false);
      });
  }
  function GetWingobetHistory1min(id) {
    api
      .get(`/wingobethistory1min`)
      .then((res) => {
        changeWingouserbethistory1min(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function GetWingobetHistory3min(id) {
    api
      .get(`${host}/wingobethistory3min`)
      .then((res) => {
        changeWingouserbethistory3min(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function GetWingobetHistory30sec(id) {
    api
      .get(`${host}/wingobethistory30sec`)
      .then((res) => {
        changeWingouserbethistory30sec(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function GetWingobetHistory5min(id) {
    api
      .post(`${host}/wingobethistory5min`)
      .then((res) => {
        changeWingouserbethistory5min(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  let rechargehistory = [
    {
      status: "pending",
      balance: "200.00",
      channel: "HHPay QR",
      time: "2024-09-28 13:00:50",
      orderid: "Rc2024092813005007730775f",
    },
    {
      status: "complete",
      balance: "500.00",
      channel: "HHPay QR",
      time: "2024-09-28 13:00:50",
      orderid: "Rc2024092813005007730775f",
    },
    {
      status: "complete",
      balance: "100000.00",
      channel: "HHPay QR",
      time: "2024-09-28 13:00:50",
      orderid: "Rc2024092813005007730775f",
    },
  ];
  let withdrawlhistroy = [
    {
      status: "failed",
      balance: "999550",
      channel: "Bank card",
      time: "2024-09-28 13:00:50",
      orderid: "Rc2024092813005007730775f",
    },
    {
      status: "complete",
      balance: "451565",
      channel: "Bank card",
      time: "2024-09-28 13:00:50",
      orderid: "Rc2024092813005007730775f",
    },
    {
      status: "complete",
      balance: "10000",
      channel: "Bank card",
      time: "2024-09-28 13:00:50",
      orderid: "Rc2024092813005007730775f",
    },
    {
      status: "complete",
      balance: "6560",
      channel: "Bank card",
      time: "2024-09-28 13:00:50",
      orderid: "Rc2024092813005007730775f",
    },
  ];

  let tobeBet = 0;
  let WithdrawlReamining = 3;

  function copydata(args) {
    navigator.clipboard.writeText(args);
  }
  return (
    <>
      <data.Provider
        value={{
          names,
          withdrawlhistroy,
          rechargehistory,
          WingoServerData1min,
          WingoServerData3min,
          WingoServerData5min,
          WingoServerData30s,
          websiteLink,
          accumulated,
          tobeBet,
          WithdrawlReamining,
          copydata,
          exp,
          safeRevenue,
          totalrevenuesafe,
          currentintrestrate,
          host,
          uid,
          get1minwingo,
          changeuid,
          getUserfinances,
          userfinance,
          setWingo5minbet,
          get30secwingo,
          getwingo3min,
          getwingo5min,
          setWingo1minbet,
          setWingo3minbet,
          setWingo30secbet,
          ws,
          GetWingobetHistory1min,
          GetWingobetHistory3min,
          GetWingobetHistory5min,
          GetWingobetHistory30sec,
          Wingouserbethistory1min,
          Wingouserbethistory3min,
          Wingouserbethistory5min,
          Wingouserbethistory30sec,
          setuid,
          k3data,
        }}
      >
        {children}
      </data.Provider>
    </>
  );
}
