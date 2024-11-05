import style from "../css/Promotion.module.css";
import invite from "../svgs/invite-friends-svgrepo-com.svg";
import copy from "../svgs/copy-svgrepo-com.svg";
import dataanalysis from "../svgs/data-analysis-svgrepo-com.svg";
import commision from "../svgs/commission-svgrepo-com.svg";
import customersupport from "../svgs/customer-support-svgrepo-com.svg";

import { GeneralHomeFooter } from "./GeneralHomeFooter";
import Header from "./Header";
import { useContext } from "react";
import { data } from "../store/Contextprovider";
export const PromotionPage = () => {
  const { copydata } = useContext(data);
  var refferal_code = " 789185941252";
  return (
    <>
      {" "}
      <Header></Header>
      <div>
        <div className={style.alpha}>
          <h1 className={style.todaysCommission}>0</h1>
          <div className={style.commissionHeader}>
            <h4>Yesterday's Commision</h4>
            <p style={{ paddingTop: "10px" }}>
              Upgrade the level to increase commission income
            </p>
          </div>
          <div className={style.PromotionalData}>
            <div className={style.headingCommission}>
              <p>Direct subordinates</p>
              <p style={{ marginLeft: "0.5px", borderRadius: " 0 5px 0 0" }}>
                Team subordinates
              </p>
            </div>
            <div class="number_reffers">
              <div className={style.data}>
                <p>0</p>
                <p>number of registers</p>
              </div>
              <div className={style.data}>
                <p>0</p>
                <p>number of registers</p>
              </div>
            </div>

            <div class="number_reffers">
              <div className={style.data}>
                <p style={{ color: "rgb(36, 250, 36)" }}>0</p>
                <p>Deposit numbers</p>
              </div>
              <div className={style.data}>
                <p style={{ color: "rgb(36, 250, 36)" }}>0</p>
                <p>Deposit numbers</p>
              </div>
            </div>

            <div class="number_reffers">
              <div className={style.data}>
                <p style={{ color: "rgb(248, 187, 20)" }}>0</p>
                <p>Deposit amount</p>
              </div>
              <div className={style.data}>
                <p style={{ color: "rgb(248, 187, 20)" }}>0</p>
                <p>Deposit amount</p>
              </div>
            </div>

            <div class="number_reffers">
              <div className={style.data}>
                <p>0</p>
                <p>Number of people making first deposit</p>
              </div>
              <div className={style.data}>
                <p>0</p>
                <p>Number of people making first deposit</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.inviteLink}>
          <h3>
            <a href="h">INVITATION LINK</a>
          </h3>
        </div>

        <div className={style.list} style={{ marginTop: "40px" }}>
          <img
            src={invite}
            width="25px"
            height="25px"
            class="list_items"
            style={{ marginBottom: "-6px" }}
          />
          <p className={style.listItems} style={{ marginLeft: "5px" }}>
            Copy invitation code
          </p>
          <p
            className={style.listItems}
            id="refferal_code"
            style={{ marginLeft: "20px" }}
          >
            {refferal_code}
          </p>
          <img
            onClick={() => {
              copydata(refferal_code);
            }}
            src={copy}
            height="15px"
            width="15px"
            style={{ marginBottom: "-2.5px", marginLeft: "4px" }}
          />
        </div>

        <div className={style.list}>
          <a href="#">
            <img
              src={dataanalysis}
              width="25px"
              height="25px"
              className={style.listItems}
              style={{ marginBottom: "-6px" }}
            />
            <p className={style.listItems} style={{ marginLeft: "5px" }}>
              Subordinate data
            </p>
          </a>
        </div>

        <div className={style.list}>
          <a href="#">
            <img
              src={commision}
              width="25px"
              height="25px"
              className={style.listItems}
              style={{ marginBottom: "-6px" }}
            />
            <p className={style.listItems} style={{ marginLeft: "5px" }}>
              Commission details
            </p>
          </a>
        </div>

        <div className={style.list}>
          <a href="#">
            <img
              src={invite}
              width="25px"
              height="25px"
              className={style.listItems}
              style={{ marginBottom: "-6px" }}
            />
            <p className={style.listItems} style={{ marginLeft: "5px" }}>
              Invitation rules
            </p>
          </a>
        </div>
        <div className={style.list} style={{ marginBottom: "80px" }}>
          <a href="#">
            <img
              src={customersupport}
              width="25px"
              height="25px"
              className={style.listItems}
              style={{ marginBottom: "-6px" }}
            />
            <p className={style.listItems} style={{ marginLeft: "5px" }}>
              Agent line customer service
            </p>
          </a>
        </div>
      </div>
      <GeneralHomeFooter page="promotion" />
    </>
  );
};
