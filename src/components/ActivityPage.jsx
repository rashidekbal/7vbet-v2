import style from "../css/Activity.module.css";
import gift from "../icons/gift.png";
import attendance from "../icons/attendance.png";
import { GeneralHomeFooter } from "./GeneralHomeFooter";
import { NavLink } from "react-router-dom";
import Header from "./Header";
export const ActivityPage = () => {
  return (
    <>
      {" "}
      <Header></Header>
      <div className={style.fix}>
        <div className={style.activityInfo} style={{ marginTop: "-5px" }}>
          <h4>Activity</h4>
          <p>Please remember to follow the event page</p>
          <p>We will launch user feedback activity time totime</p>
        </div>
        <div className={style.Attendancegiftscontainer}>
          <NavLink to="/gifts" className={style.giftsattendence}>
            <img
              src={gift}
              height="97.23px"
              width="168.95px"
              style={{ borderRadius: "5px" }}
            />

            <h4 style={{ padding: "4px" }}> Gifts</h4>
            <p style={{ fontSize: "11px", padding: "4px" }}>
              Enter the redemption code to
              <br /> recieve gift rewards
            </p>
          </NavLink>

          <NavLink
            to="/attandance"
            style={{ right: "10px" }}
            className={style.giftsattendence}
          >
            <img
              src={attendance}
              height="97.23px"
              width="168.95px"
              style={{ borderRadius: "5px" }}
            />
            <h4 style={{ padding: "4px" }}>Attendence bonus</h4>
            <p style={{ fontSize: "11px", padding: "2px" }}>
              The more consecutive days you <br />
              sign in, the higher the reward will be.{" "}
            </p>
          </NavLink>
        </div>
      </div>
      <GeneralHomeFooter page="activity" />
    </>
  );
};
