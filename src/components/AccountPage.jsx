import avatar from "../icons/avatar.png";
import gift from "../svgs/gift-svgrepo-com.svg";
import setting from "../svgs/setting-1-svgrepo-com.svg";
import language from "../svgs/language-svgrepo-com.svg";
import feedback from "../svgs/feedback-svgrepo-com.svg";
import customer from "../svgs/customer-support-svgrepo-com.svg";
import guide from "../svgs/guide-svgrepo-com.svg";
import about from "../svgs/about-filled-svgrepo-com.svg";
import style from "../css/Accountpage.module.css";
import { useContext, useEffect } from "react";
import { data } from "../store/Contextprovider";
import { GeneralHomeFooter } from "./GeneralHomeFooter";
import { FaRupeeSign } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export const AccountPage = () => {
  let getData = useContext(data);
  useEffect(() => {
    getData.changeuid(window.sessionStorage.getItem("uid"));
  }, []);
  return (
    <>
      <div>
        <div className={style.accountinfo}>
          <div className={style.userlogo}>
            <img src={avatar} width="100%" />
          </div>
          <div className={style.userinfo}>
            <h4>MEMBERAXhafsT6</h4>
            <p className={style.uid}>
              <span>UID</span>
              <span> |</span>
              <span id="user-id"> {getData.uid}</span>
              <span onclick="copy_user_id()">
                {" "}
                <svg
                  style={{
                    height: "10px",
                    display: "inline-block",
                    width: "10px",
                    marginLeft: "5px",
                  }}
                  data-v-5bd44e74=""
                  class="svg-icon icon-copy"
                >
                  <use xlinkHref="#icon-copy"></use>
                </svg>{" "}
              </span>
            </p>
            <p style={{ fontSize: "small" }}>
              Last login: <span id="last_login_date"> 2024-06-20 </span>
              <span id="last_login_time"> 10:16:29</span>
            </p>
          </div>
        </div>
        <div className={style.AccountSection}>
          <div className={style.section1}>
            <p style={{ color: "grey" }}> Total balance</p>
            <h4 id="total_balance_view" style={{ padding: "5px" }}>
              <FaRupeeSign style={{ height: "12px" }} />
              <span id="total_balance">{getData.account_balance}</span>{" "}
              <span>
                <svg
                  style={{
                    height: "18.86px",
                    width: "18.86px",
                    paddingTop: "5px",
                  }}
                  data-v-7d799898=""
                  class="svg-icon icon-refreshBalance"
                >
                  <use xlinkHref="#icon-refreshBalance"></use>
                </svg>
              </span>
            </h4>
          </div>

          <div className={style.section2}>
            <div className={style.subSections}>
              <NavLink to="/wallet">
                <svg
                  style={{ height: "40px", width: "40px" }}
                  data-v-7d799898=""
                  class="svg-icon icon-wallets"
                >
                  <use xlinkHref="#icon-wallets"></use>
                </svg>
              </NavLink>
              <p>Wallet</p>
            </div>

            <div className={style.subSections}>
              <NavLink to="/Deposite">
                <svg
                  style={{ height: "40px", width: "40px" }}
                  data-v-7d799898=""
                  class="svg-icon icon-rechargeIcon"
                >
                  <use xlinkHref="#icon-rechargeIcon"></use>
                </svg>
              </NavLink>
              <p>Deposit</p>
            </div>

            <div className={style.subSections}>
              <NavLink to="/widthdrawl">
                <svg
                  data-v-7d799898=""
                  style={{ height: "40px", width: "40px" }}
                  class="svg-icon icon-widthdrawBlue"
                >
                  <use xlinkHref="#icon-widthdrawBlue"></use>
                </svg>
              </NavLink>
              <p>Widthdrawl</p>
            </div>

            <div className={style.subSections}>
              <NavLink to="/Vip">
                <svg
                  style={{ height: "40px", width: "40px" }}
                  data-v-7d799898=""
                  class="svg-icon icon-VipIcon"
                >
                  <use xlinkHref="#icon-VipIcon"></use>
                </svg>
              </NavLink>
              <p>VIP</p>
            </div>
          </div>
        </div>

        <div className={style.safe}>
          <NavLink to="/safe">
            <div className={style.vaultimage}>
              <svg
                style={{ height: "60px", width: "60px" }}
                data-v-acd6d46f=""
                class="svg-icon icon-vault"
              >
                <use xlinkHref="#icon-vault"></use>
              </svg>
            </div>
            <div className={style.safeInfo}>
              <p>Safe</p>
              <p style={{ fontSize: "smaller" }}>
                {" "}
                Daily intrest rate 0.1% + VIP extra income safe, calculated
                every 1 minute
              </p>
            </div>
          </NavLink>
        </div>
        <div className={style.historycontainer}>
          <div className={style.historycontainersections}>
            <NavLink to="/deposithistory">
              <div style={{ display: "inline-block", paddingTop: "13px" }}>
                <svg
                  data-v-acd6d46f=""
                  style={{
                    height: "30px",
                    width: "30px",
                    verticalAlign: "bottom",
                    marginLeft: "10px",
                    marginRight: "5px",
                  }}
                  class="svg-icon icon-rechargeHistory"
                >
                  <use xlinkHref="#icon-rechargeHistory"></use>
                </svg>
              </div>
              <div style={{ display: "inline-block", fontSize: "small" }}>
                <p
                  style={{
                    color: "lightgrey",
                    fontSize: "smaller",
                    verticalAlign: "middle",
                    paddingTop: "5px",
                  }}
                >
                  <span style={{ color: "black", fontSize: "12px" }}>
                    Deposit history
                  </span>
                  <br></br> MY deposit history
                </p>
              </div>
            </NavLink>
          </div>
          <div className={style.historycontainersections}>
            <NavLink to="/withdrawlhistory">
              <div style={{ display: "inline-block", paddingTop: "13px" }}>
                <svg
                  data-v-acd6d46f=""
                  style={{
                    height: "30px",
                    width: "30px",
                    verticalAlign: "bottom",
                    marginLeft: "10px",
                    marginRight: "5px",
                  }}
                  class="svg-icon icon-myWithdrawHistory"
                >
                  <use xlinkHref="#icon-myWithdrawHistory"></use>
                </svg>
              </div>
              <div style={{ display: "inline-block", fontSize: "small" }}>
                <p style={{ color: "lightgrey", fontSize: "smaller" }}>
                  <span style={{ color: "black", fontSize: "12px" }}>
                    {" "}
                    Widthdrawl history
                  </span>
                  <br />
                  MY Widthdrawl history
                </p>
              </div>
            </NavLink>
          </div>
        </div>

        <div className={style.accountfunctioncontainer}>
          <div className={style.accountfunctions}>
            <a href="#">
              <div className={style.functionlogo}>
                <svg
                  style={{
                    height: "40.86px",
                    width: "40.86px",
                    paddingTop: "5px",
                  }}
                  data-v-a30d19b1=""
                  class="svg-icon icon-notification"
                >
                  <use xlinkHref="#icon-notification"></use>
                </svg>
              </div>
              <div className={style.functioninfo}>
                <p>Notification</p>
              </div>
            </a>
          </div>
          <div className={style.accountfunctions}>
            <a href="#">
              <div className={style.functionlogo}>
                <img
                  src={gift}
                  style={{
                    height: "40.86px",
                    width: "40.86px",
                    paddingTop: "5px",
                  }}
                />
              </div>
              <div className={style.functioninfo}>
                <p>Gifts</p>
              </div>
            </a>
          </div>

          <div className={style.accountfunctions}>
            <a href="#">
              <div className={style.functionlogo}>
                <img
                  style={{
                    height: "40.86px",
                    width: "40.86px",
                    paddingTop: "5px",
                  }}
                  src={language}
                />
              </div>
              <div className={style.functioninfo}>
                <p>language</p>
              </div>
            </a>
          </div>
        </div>

        <div className={style.servicecenter}>
          <h5
            style={{
              display: "block",
              width: "90%",
              margin: "0 auto",
              paddingTop: "10px",
            }}
          >
            Service center
          </h5>
          <div>
            <div className={style.servicetabs}>
              <a href="#">
                <img
                  style={{
                    height: "40.86px",
                    width: "40.86px",
                    paddingTop: "5px",
                  }}
                  src={setting}
                />
              </a>
              <p>Settings</p>
            </div>
            <div className={style.servicetabs}>
              <a href="#">
                {" "}
                <img
                  style={{
                    height: "40.86px",
                    width: "40.86px",
                    paddingTop: "5px",
                  }}
                  src={feedback}
                />
              </a>
              <p>Feedback</p>
            </div>
            <div className={style.servicetabs}>
              <a href="#">
                <svg
                  style={{
                    height: "40.86px",
                    width: "40.86px",
                    paddingTop: "5px",
                  }}
                  data-v-a30d19b1=""
                  class="svg-icon icon-notification"
                >
                  <use xlinkHref="#icon-notification"></use>
                </svg>
              </a>
              <p>Feedback</p>
            </div>
          </div>
          <div>
            <div className={style.servicetabs}>
              <a href="#">
                {" "}
                <img
                  style={{
                    height: "40.86px",
                    width: "40.86px",
                    paddingTop: "5px",
                  }}
                  src={customer}
                />
              </a>
              <p>24/7 service</p>
            </div>
            <div className={style.servicetabs}>
              <a href="#">
                <img
                  style={{
                    height: "40.86px",
                    width: "40.86px",
                    paddingTop: "5px",
                  }}
                  src={guide}
                />
              </a>
              <p>Guide</p>
            </div>
            <div className={style.servicetabs}>
              <a href="#">
                <img
                  style={{
                    height: "40.86px",
                    width: "40.86px",
                    paddingTop: "5px",
                  }}
                  src={about}
                />
              </a>
              <p>About us</p>
            </div>
          </div>
        </div>
        <button
          className={style.logout}
          onClick={() => {
            window.sessionStorage.removeItem("uid");
            window.location.replace("http://192.168.57.240:3000/");
          }}
        >
          Logout
        </button>
      </div>
      <GeneralHomeFooter page="account" />
    </>
  );
};
