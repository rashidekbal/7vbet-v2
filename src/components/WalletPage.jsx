import walleticon from "../icons/wallet.png";
import widthdrawlblue from "../icons/widthdrawBlue-80197e64.png";
import rechargeHistory from "../icons/rechargeHistory-b5a853c0.png";
import widthdrawHistory from "../icons/withdrawHistory-fb2bafcf.png";
import style from "../css/walletpage.module.css";
import { useContext } from "react";
import { data } from "../store/Contextprovider";
import { FaRupeeSign } from "react-icons/fa";
import { GeneralHomeFooter } from "./GeneralHomeFooter";
import { NavLink } from "react-router-dom";
import Header from "./Header";
export const WalletPage = () => {
  let getData = useContext(data);
  return (
    <>
      {" "}
      <Header></Header>
      <div className={style.walletview}>
        <div className={style.walletInfo}>
          <div className={style.walleticonamount}>
            <img src={walleticon} style={{ width: "50px" }} />
            <h1 id="balance">
              <span>
                {" "}
                <FaRupeeSign style={{ height: "25px" }} />
              </span>
              <span class="balance">{getData.account_balance}</span>
            </h1>
            <p>Total balance</p>
          </div>
          <div className={style.history}>
            <div className={style.totalWidthdrawl}>
              <h5 id="total_widthdrawl_amount">
                {" "}
                <FaRupeeSign style={{ height: "10px" }} />
                270000
              </h5>{" "}
              <p>Total widthdrawl</p>
            </div>
            <div className={style.totalDeposite}>
              <h5 id="total_deposit_amount">
                <FaRupeeSign style={{ height: "10px" }} />
                10
              </h5>
              <p>Total deposit amount</p>
            </div>
          </div>
        </div>

        <div className={style.typewallet}>
          <div id="main_wallet" className={style.typewallets}>
            <div class={style.outerline}>
              <div className={style.innerline}>
                <h5>100%</h5>
              </div>
            </div>
            <h5>
              <FaRupeeSign style={{ height: "10px" }} />
              <span id="main_amount">{getData.account_balance}</span>
            </h5>
            <p>Main Wallet</p>
          </div>
          <div id="third_party_wallet" className={style.typewallets}>
            <div class={style.outerline}>
              <div className={style.innerline}>
                <h5>0%</h5>
              </div>
            </div>
            <h5>
              <FaRupeeSign style={{ height: "10px" }} />
              <span id="third_party_amount">0</span>
            </h5>
            <p>Third party wallet</p>
          </div>
          <button className={style.transfermain}>Main wallet transfer</button>

          <div style={{ margin: "0 auto", textAlign: "center" }}>
            <div className={style.diffwallets}>
              <NavLink to="/ajax/Deposite">
                {" "}
                <img
                  src={walleticon}
                  style={{ height: "65px", borderRadius: "7px" }}
                />
                <p className={style.widthslogan}>Deposit</p>
              </NavLink>
            </div>
            <div className={style.diffwallets}>
              <NavLink to="/ajax/widthdrawl">
                <img
                  src={widthdrawlblue}
                  style={{ height: "65px", borderRadius: "7px" }}
                />
                <p className={style.widthslogan}>Widthdraw</p>
              </NavLink>
            </div>
            <div
              className={style.diffwallets}
              style={{ height: "90px", position: "relative", top: "12px" }}
            >
              <NavLink to="/ajax/depositHistory">
                <img
                  src={rechargeHistory}
                  style={{
                    height: "65px",
                    position: "absolute",
                    top: "-20px",
                    left: "7%",
                  }}
                  className={style.oversize}
                />
                <p
                  className={style.widthslogan}
                  style={{
                    display: "block",
                    margin: "10px 0 0 0",
                    marginTop: "45px",
                  }}
                >
                  Deposit
                  <br />
                  history
                </p>
              </NavLink>
            </div>
            <div
              className={style.diffwallets}
              style={{
                height: "90px",
                position: "relative",
                top: "12px",
                right: "14px",
              }}
            >
              <NavLink to="/ajax/withdrawlhistory">
                <img src={widthdrawHistory} style={{ height: "65px" }} />
                <p className={style.widthslogan}>
                  Widthdrawl
                  <br />
                  history
                </p>
              </NavLink>
            </div>
          </div>
        </div>
        <div className={style.grid}>
          <div className={style.gridlinear}>
            <div className={style.griditems}>0</div>
            <div className={style.griditems}>0</div>
            <div className={style.griditems}>0</div>
          </div>
          <div className={style.gridlinear}>
            <div className={style.griditems}>0</div>
            <div className={style.griditems}>0</div>
            <div className={style.griditems}>0</div>
          </div>
          <div className={style.gridlinear}>
            <div className={style.griditems}>0</div>
            <div className={style.griditems}>0</div>
            <div className={style.griditems}>0</div>
          </div>
        </div>
      </div>
      <GeneralHomeFooter page="wallet" />
    </>
  );
};
