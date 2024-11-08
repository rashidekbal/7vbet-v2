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

  let WingoServerData1min = [
    {
      period: "20240618010732",
      number: "4",
      res: "Small",
      color: "greenviolet",
    },
    { period: "20240618010732", number: "4", res: "Small", color: "red" },
    { period: "20240618010732", number: "4", res: "Small", color: "red" },
    { period: "20240618010732", number: "4", res: "Small", color: "red" },
    { period: "20240618010732", number: "4", res: "Small", color: "red" },
    { period: "20240618010732", number: "4", res: "Small", color: "red" },
  ];
  let WingoServerData3min = [
    { period: "20240618010732", number: "4", res: "Small", color: "red" },
    { period: "20240618010732", number: "4", res: "Small", color: "red" },
    { period: "20240618010732", number: "4", res: "Small", color: "red" },
    { period: "20240618010732", number: "4", res: "Small", color: "red" },
    { period: "20240618010732", number: "4", res: "Small", color: "red" },
    { period: "20240618010732", number: "4", res: "Small", color: "red" },
  ];
  let WingoServerData5min = [
    { period: "20240618010732", number: "4", res: "Small", color: "red" },
    { period: "20240618010732", number: "4", res: "Small", color: "red" },
    { period: "20240618010732", number: "4", res: "Small", color: "red" },
    { period: "20240618010732", number: "4", res: "Small", color: "red" },
    { period: "20240618010732", number: "4", res: "Small", color: "red" },
    { period: "20240618010732", number: "4", res: "Small", color: "red" },
  ];
  let WingoServerData10min = [
    { period: "20240618010732", number: "4", res: "Small", color: "red" },
    { period: "20240618010732", number: "4", res: "Small", color: "red" },
    { period: "20240618010732", number: "4", res: "Small", color: "red" },
    { period: "20240618010732", number: "4", res: "Small", color: "red" },
    { period: "20240618010732", number: "4", res: "Small", color: "red" },
    { period: "20240618010732", number: "4", res: "Small", color: "red" },
  ];
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
  let account_balance = 99999;
  let takenout = 27000;
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
          WingoServerData10min,
          takenout,
          account_balance,
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

          changeuid,
        }}
      >
        {children}
      </data.Provider>
    </>
  );
}
