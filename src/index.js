import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import OriginalLottery from "./components/OriginalLottery";
import Wingo from "./components/Wingo";
import { K3 } from "./components/K3";
import D5 from "./components/D5";
import { ActivityPage } from "./components/ActivityPage";
import { PromotionPage } from "./components/PromotionPage";
import { WalletPage } from "./components/WalletPage";
import { AccountPage } from "./components/AccountPage";
import Gifts from "./components/Gifts";
import Attendance from "./components/Attendance";
import Deposit from "./components/Deposit";
import Widthdrawlpage from "./components/Widthdrawlpage";
import DepositHistoryPage from "./components/DepositHistoryPage";
import WithdrawlHistoryPage from "./components/WithdrawlHistoryPage";
import Vip from "./components/Vip";
import Safe from "./components/Safe";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/ajax",
    element: <App></App>,
    children: [
      {
        path: "",
        element: <OriginalLottery />,
      },
      {
        path: "wingo",
        element: <Wingo />,
      },
      {
        path: "k3",
        element: <K3 />,
      },
      {
        path: "5d",
        element: <D5></D5>,
      },
      {
        path: "trx",
        element: "/trx",
      },
      {
        path: "activity",
        element: <ActivityPage />,
      },
      {
        path: "promotion",
        element: <PromotionPage />,
      },
      {
        path: "wallet",
        element: <WalletPage />,
      },
      {
        path: "account",
        element: <AccountPage />,
      },
      {
        path: "gifts",
        element: <Gifts />,
      },
      {
        path: "attandance",
        element: <Attendance />,
      },
      {
        path: "Deposite",
        element: <Deposit />,
      },
      {
        path: "widthdrawl",
        element: <Widthdrawlpage />,
      },
      {
        path: "depositHistory",
        element: <DepositHistoryPage />,
      },
      {
        path: "withdrawlhistory",
        element: <WithdrawlHistoryPage />,
      },
      {
        path: "Vip",
        element: <Vip />,
      },
      {
        path: "safe",
        element: <Safe />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();