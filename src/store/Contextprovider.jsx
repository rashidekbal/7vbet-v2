import axios from "axios";
import { createContext, useState } from "react";
const host = "http://192.168.57.240:8000";

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
  function getUserfinances(userid) {
    axios
      .post(`${host}/userfinances`, {
        uid: userid,
      })
      .then((res) => {
        changeuserfinance(res.data);
      })
      .catch((err) => console.log(err));
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
        }}
      >
        {children}
      </data.Provider>
    </>
  );
}
