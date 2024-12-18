import { useContext, useEffect } from "react";
import style from "../css/WalletDataForGames.module.css";
import wallet from "../icons/wallet-3f0340b6.png";
import { data } from "../store/Contextprovider";
import { FaRupeeSign } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
export default function WalletDataForGames() {
  let getData = useContext(data);

  useEffect(() => {
    getData.changeuid(window.sessionStorage.getItem("uid"));
    getData.getUserfinances(String(window.sessionStorage.getItem("uid")));
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
            <a className={style.widthdrawlAction}>Widthdraw</a>
          </span>
          <span
            className={style.WidthdrawlButton}
            style={{
              backgroundColor: " green",
              float: "right",
              marginRight: "10px",
            }}
          >
            <a style={{ color: "white " }}>Deposit</a>
          </span>
        </div>
      </div>
    </>
  );
}
