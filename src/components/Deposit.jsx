import React, { useContext } from "react";
import style from "../css/Deposite.module.css";
import balance from "../icons/balance-e39ce400.png";
import { FaRupeeSign } from "react-icons/fa";
import refresh from "../icons/refresh-8e0efe26.png";
import { data } from "../store/Contextprovider";
import paytm from "../icons/paytm.png";
import upi from "../icons/upi.png";
import upi2 from "../icons/upi2nd.png";
import bankcard from "../icons/bankcard.png";
import usdt from "../icons/usdt.png";
import { MdOutlineCancel } from "react-icons/md";
import rechargeHistory from "../icons/rechargeHistory-b5a853c0.png";
import Depositehistorypostcards from "./Depositehistorypostcards";
import BalanceView from "./BalanceView";

function Deposit() {
  let info = useContext(data);
  return (
    <>
      <div className={style.header}>
        <p>Deposit</p>
        <p>deposit history</p>
      </div>
      <BalanceView />
      <div className={style.paymentOptions}>
        <div className={style.inner}>
          <div className={style.paymentOptionsrow}>
            <div
              className={style.paymentcolumn}
              style={{ backgroundColor: "orange" }}
            >
              <div className={style.paymenticons}>
                <img src={upi} />
              </div>
              <div className={style.paymentOptionsname}>
                <p style={{ color: "white" }}>UPI x QR</p>
              </div>
            </div>
            <div className={style.paymentcolumn}>
              <div className={style.paymenticons}>
                <img src={upi2} />
              </div>
              <div className={style.paymentOptionsname}>
                <p>UPI x APPS</p>
              </div>
            </div>

            <div className={style.paymentcolumn}>
              <div className={style.paymenticons}>
                <img src={upi} />
              </div>
              <div className={style.paymentOptionsname}>
                <p>UPI x PAYTM</p>
              </div>
            </div>
          </div>
          <div className={style.paymentOptionsrow}>
            <div className={style.paymentcolumn}>
              <div className={style.paymenticons}>
                <img src={paytm} />
              </div>
              <div className={style.paymentOptionsname}>
                <p>E-WALLET</p>
              </div>
            </div>
            <div className={style.paymentcolumn}>
              <div className={style.paymenticons}>
                <img src={bankcard} />
              </div>
              <div className={style.paymentOptionsname}>
                <p>BANK CARD</p>
              </div>
            </div>
            <div className={style.paymentcolumn}>
              <div className={style.paymenticons}>
                <img src={usdt} />
              </div>
              <div className={style.paymentOptionsname}>
                <p>USDT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.paymtchannelholder}>
        <div className={style.channelholder}>
          <div className={style.slogan} style={{ backgroundColor: "white" }}>
            <img src={balance} />
            <p style={{ color: "black" }}>Select channel</p>
          </div>
          <div className={style.channelrow}>
            <div
              className={style.channelcolumn}
              style={{
                backgroundColor: "orange",
                color: "white",
              }}
            >
              <p>MahaPayINR</p>
              <p>Balance:500-50k</p>
              <p>8% Bonus</p>
            </div>
            <div className={style.channelcolumn}>
              <p>MahaPayINR</p>
              <p>Balance:500-50k</p>
              <p>8% Bonus</p>
            </div>
          </div>
          <div className={style.channelrow}>
            <div className={style.channelcolumn}>
              {" "}
              <p>MahaPayINR</p>
              <p>Balance:500-50k</p>
              <p>8% Bonus</p>
            </div>
            <div className={style.channelcolumn}>
              {" "}
              <p>MahaPayINR</p>
              <p>Balance:500-50k</p>
              <p>8% Bonus</p>
            </div>
          </div>
          <div className={style.channelrow}>
            <div className={style.channelcolumn}>
              <p>MahaPayINR</p>
              <p>Balance:500-50k</p>
              <p>8% Bonus</p>
            </div>
            <div className={style.channelcolumn}>
              <p>MahaPayINR</p>
              <p>Balance:500-50k</p>
              <p>8% Bonus</p>
            </div>
          </div>
          <div className={style.channelrow}>
            <div className={style.channelcolumn}>
              <p>MahaPayINR</p>
              <p>Balance:500-50k</p>
              <p>8% Bonus</p>
            </div>
            <div className={style.channelcolumn}>
              <p>MahaPayINR</p>
              <p>Balance:500-50k</p>
              <p>8% Bonus</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.depositeholder}>
        <div className={style.depositeInner}>
          <div className={style.slogan} style={{ backgroundColor: "white" }}>
            <img src={balance} />
            <p style={{ color: "black" }}>Deposit amount</p>
          </div>
          <div className={style.depositerow}>
            <div className={style.depositecolumn}>
              <p>
                <FaRupeeSign
                  className={style.logo}
                  style={{ float: "left", color: "grey" }}
                />
                500
              </p>
            </div>
            <div className={style.depositecolumn}>
              <p>
                <FaRupeeSign
                  className={style.logo}
                  style={{ float: "left", color: "grey" }}
                />
                1k
              </p>
            </div>
            <div className={style.depositecolumn}>
              <p>
                <FaRupeeSign
                  className={style.logo}
                  style={{ float: "left", color: "grey" }}
                />
                3k
              </p>
            </div>
          </div>
          <div className={style.depositerow}>
            {" "}
            <div className={style.depositecolumn}>
              <p>
                <FaRupeeSign
                  className={style.logo}
                  style={{ float: "left", color: "grey" }}
                />
                5k
              </p>
            </div>{" "}
            <div className={style.depositecolumn}>
              <p>
                <FaRupeeSign
                  className={style.logo}
                  style={{ float: "left", color: "grey" }}
                />
                10k
              </p>
            </div>{" "}
            <div className={style.depositecolumn}>
              <p>
                <FaRupeeSign
                  className={style.logo}
                  style={{ float: "left", color: "grey" }}
                />
                20k
              </p>
            </div>
          </div>
          <div className={style.depositerow}>
            {" "}
            <div className={style.depositecolumn}>
              <p>
                <FaRupeeSign
                  className={style.logo}
                  style={{ float: "left", color: "grey" }}
                />
                50k
              </p>
            </div>
          </div>
          <div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div className={style.depositeintput}>
                <div className={style.rupee}>
                  <FaRupeeSign className={style.logo} />
                </div>
                <div className={style.inputbox}>
                  <input
                    className={style.input}
                    type="number"
                    max="50000"
                    placeholder="Please enter the amount"
                    required
                  />
                </div>
                <div className={style.cross}>
                  <MdOutlineCancel className={style.div} />
                </div>
              </div>
              <div className={style.submitholder}>
                <input type="submit" value="Deposite" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={style.rechargeInstructions}>
        <div className={style.instructions}>
          {" "}
          <img src={balance} />
          <p>Recharge instructions</p>
        </div>
        <div className={style.instructionscontainer}>
          <ul>
            <li>
              If the transfer time is up, please fill out the deposit form
              again.
            </li>
            <li>
              The transfer amount must match the order you created, otherwise
              the money cannot be credited successfully
            </li>
            <li>
              If you transfer the wrong amount, our company not be responsible
              for the lost amount!
            </li>
            <li>
              Note : do not cancel the deposit after the money has been
              transferred
            </li>
          </ul>
        </div>
      </div>
      <div className={style.depositehistorylogo}>
        <img
          src={rechargeHistory}
          style={{
            height: "65px",
            top: "-20px",
            left: "7%",
            display: "inline-block",
            verticalAlign: "middle",
          }}
        />
        <p style={{ display: "inline-block", verticalAlign: "middle" }}>
          Deposit history
        </p>
      </div>
      <div className={style.postcardholder}>
        <Depositehistorypostcards data={info.rechargehistory} />
      </div>
    </>
  );
}

export default Deposit;
