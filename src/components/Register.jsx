import { useContext, useState } from "react";
import style from "../css/Register.module.css";
import { data } from "../store/Contextprovider";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import axios from "axios";
function Register() {
  function submit(e) {
    e.preventDefault();
    if (String(phone).length !== 10) {
      changeNumberWarning("yes");
    } else {
      changeNumberWarning("no");

      if (cnfpassword !== password) {
        alert(`${cnfpassword}, ${password}`);
        changepasswordWarning("yes");
      } else {
        let code = invite_Code;
        changeNumberWarning("no");
        axios
          .post(`http://localhost:8000/register`, {
            phone: String(phone),
            password: password,
            refferedBy: code,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        changeInviteCode("");
        changepassword("");
        changecnfpassword("");
        changephone("");
      }
    }
  }
  const [numberWarning, changeNumberWarning] = useState("no");
  const [passwordWarning, changepasswordWarning] = useState("no");

  const [phone, changephone] = useState("");
  const [password, changepassword] = useState("");
  const [cnfpassword, changecnfpassword] = useState("");
  const [invite_Code, changeInviteCode] = useState("");

  return (
    <>
      <Header />
      <div className={style.mainview}>
        <div className={style.punch}>
          <p>Please register by phone number</p>
        </div>
        <div className={style.registerform}>
          <div className={style.register} id="reg">
            {/*icons */}
            <p>Register your phone </p>
          </div>
          <form
            id="register"
            onSubmit={(e) => {
              submit(e);
            }}
          >
            <p className={style.p1}>
              {/*icons */}
              <span className={style.span1}>Phone number</span>
            </p>
            <input
              className={style.input}
              name="phone"
              type="number"
              placeholder="enter your phone number"
              required
              minlength="10"
              maxlength="10"
              value={phone}
              onChange={(e) => {
                changephone(e.target.value);
              }}
            />
            <p
              className={numberWarning == "yes" ? style.warning : style.hidden}
            >
              {" "}
              Please enter 10 digit mobile number
            </p>
            <p className={style.p2}>
              <img
                src="axjhqhsdgdsbhj/src/svgs/padlock-lock-svgrepo-com.svg"
                height="25.59px"
              />
              <span className={style.span2}>Create password</span>
            </p>
            <input
              className={style.input}
              type="password"
              placeholder="Create your password"
              required
              minlength="6"
              maxlength="10"
              name="pass"
              value={password}
              onChange={(e) => {
                changepassword(e.target.value);
              }}
            />
            <p className={style.p3}>
              <img
                src="axjhqhsdgdsbhj/src/svgs/padlock-lock-svgrepo-com.svg"
                height="25.59px"
              />
              <span className={style.span3}>Re-enter your password</span>
            </p>
            <input
              className={style.input}
              type="passwrod"
              placeholder="Re-enter password"
              required
              minlength="6"
              maxlength="10"
              value={cnfpassword}
              onChange={(e) => {
                changecnfpassword(e.target.value);
              }}
            />
            <p
              className={
                passwordWarning == "yes" ? style.warning : style.hidden
              }
            >
              {" "}
              both enterd password must match
            </p>
            <p className={style.p4}>
              <img
                src="axjhqhsdgdsbhj/src/svgs/invite-friends-svgrepo-com.svg"
                height="25.59px"
              />
              <span className={style.span5}>Invite code</span>
            </p>
            <input
              className={style.input}
              type="text"
              placeholder="enter invitation_code"
              required
              minlength="8"
              maxlength="8"
              name="reff"
              value={invite_Code}
              onChange={(e) => {
                changeInviteCode(e.target.value);
                console.log(invite_Code);
              }}
            ></input>
            <p className={style.p5}>
              <input
                className={style.checkbox}
                type="checkbox"
                required
                id="check_box"
                value="yes"
                name="consent"
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
              <span className={style.span6}>
                I have read and agree{" "}
                <span>
                  <a className={style.ancor1}>Privacy-polity</a>
                </span>
              </span>
            </p>
            <input type="submit" value="Register" className={style.submit} />
          </form>
          <NavLink to="/" className={style.login}>
            Login page
          </NavLink>
        </div>
      </div>
    </>
  );
}
export default Register;
