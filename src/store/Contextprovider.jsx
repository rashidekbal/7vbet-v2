import axios from "axios";
import { io } from "socket.io-client";
import { createContext, useEffect, useState } from "react";
const host = "http://192.168.43.240:8000";
const ws = io(host);

let safeRevenue = 0.1;
let totalrevenuesafe = 0.0;
const currentintrestrate = 5;
let names = "MemberNNGU7Y29";
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

  // change wingo 1 min result
  function get1minwingo() {
    axios
      .get(`${host}/wingoOneMin`)
      .then((res) => {
        change1minWingo(res.data);
      })
      .catch((res) => {
        console.log("error getting data");
      });
  }
  function get30secwingo() {
    axios
      .get(`${host}/wingo30sec`)
      .then((res) => {
        change30s(res.data);
      })
      .catch((res) => {
        console.log("error getting data");
      });
  }
  function getwingo3min() {
    axios
      .get(`${host}/wingo3min`)
      .then((res) => {
        change3minWingo(res.data);
      })
      .catch((res) => {
        console.log("error getting data");
      });
  }
  function getwingo5min() {
    axios
      .get(`${host}/wingo5min`)
      .then((res) => {
        change5minWingo(res.data);
      })
      .catch((res) => {
        console.log("error getting data");
      });
  }
  function getUserfinances(uid) {
    axios
      .post(`${host}/userfinances`, {
        uid,
      })
      .then((res) => {
        changeuserfinance(res.data);
      })
      .catch((err) => console.log(err));
  }

  function setWingo30secbet(packet) {
    axios
      .post(`${host}/setWingo30secbet`, { packet })
      .then((res) => {
        if (res.data == "done") {
          getUserfinances(uid);
        } else {
          alert("bet failed");
        }
      })
      .catch((res) => {
        console.log("err bet not set", res.data);
      });
  }
  function setWingo1minbet(packet) {
    axios
      .post(`${host}/setWingo1minbet`, { packet })
      .then((res) => {
        if (res.data == "done") {
          getUserfinances(uid);
        } else {
          alert("bet failed");
        }
      })
      .catch((res) => {
        console.log("err bet not set", res.data);
      });
  }
  function setWingo3minbet(packet) {
    axios
      .post(`${host}/setWingo3minbet`, { packet })
      .then((res) => {
        if (res.data == "done") {
          getUserfinances(uid);
        } else {
          alert("bet failed");
        }
      })
      .catch((res) => {
        console.log("err bet not set", res.data);
      });
  }
  function setWingo5minbet(packet) {
    axios
      .post(`${host}/setwingo5min`, { packet })
      .then((res) => {
        if (res.data == "done") {
          getUserfinances(uid);
        } else {
          alert("bet failed");
        }
      })
      .catch((res) => {
        console.log("err bet not set", res.data);
      });
  }
  function GetWingobetHistory1min(id) {
    axios
      .post(`${host}/wingobethistory1min`, { id })
      .then((res) => {
        changeWingouserbethistory1min(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function GetWingobetHistory3min(id) {
    axios
      .post(`${host}/wingobethistory3min`, { id })
      .then((res) => {
        changeWingouserbethistory3min(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function GetWingobetHistory5min(id) {
    axios
      .post(`${host}/wingobethistory1min`, { id })
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
          Wingouserbethistory1min,
          Wingouserbethistory3min,
          Wingouserbethistory5min,
        }}
      >
        {children}
      </data.Provider>
    </>
  );
}
