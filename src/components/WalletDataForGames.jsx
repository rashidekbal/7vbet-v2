import { useContext, useEffect } from "react";
import style from "../css/WalletDataForGames.module.css";
import wallet from "../icons/wallet-3f0340b6.png";
import { data } from "../store/Contextprovider";
import { FaRupeeSign } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import { NavLink } from "react-router-dom";
export default function WalletDataForGames() {
  let getData = useContext(data);

  useEffect(() => {
    getData.changeuid(window.sessionStorage.getItem("uid"));
    getData.getUserfinances();
  }, []);
  return (
    <>
      <div className={style.WalletSection}>
        <h2 className={style.BalanceView}>
          <span>
            <FaRupeeSign style={{ height: "17px", width: "14px" }} />
          </span>
          <span id="balance">{getData.userfinance.balance}</span>
          <span
            className={style.refresh}
            onClick={() => {
              getData.getUserfinances(
                String(window.sessionStorage.getItem("uid"))
              );
            }}
          >
            <FiRefreshCcw />
          </span>
        </h2>

        <p className={style.WalletSlogan}>
          <img className={style.WalletImage} src={wallet} />
          <span className={style.WalletSloganSpan}>Wallet balance</span>
        </p>

        <div className={style.Wid}>
          <span className={style.WidthdrawlButton}>
            <NavLink to="/widthdrawl" className={style.widthdrawlAction}>
              Widthdraw
            </NavLink>
          </span>
          <span
            className={style.WidthdrawlButton}
            style={{
              backgroundColor: " green",
              float: "right",
              marginRight: "10px",
            }}
          >
            <NavLink style={{ color: "white " }} to="/Deposite">
              Deposit
            </NavLink>
          </span>
        </div>
      </div>
    </>
  );
}
