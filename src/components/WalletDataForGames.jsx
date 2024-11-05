import { useContext } from "react";
import style from "../css/WalletDataForGames.module.css";
import wallet from "../icons/wallet-3f0340b6.png";
import { data } from "../store/Contextprovider";
export default function WalletDataForGames() {
  let getData = useContext(data);
  return (
    <>
      <div className={style.WalletSection}>
        <h2 className={style.BalanceView}>
          <span>Rs </span>
          <span id="balance">{getData.account_balance}</span>
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
