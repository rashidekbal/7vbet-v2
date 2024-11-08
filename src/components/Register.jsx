import { useContext, useState } from "react";
import style from "../css/Register.module.css";
import { data } from "../store/Contextprovider";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { GrStatusGood } from "react-icons/gr";
import { MdOutlineCancel } from "react-icons/md";
function Register() {
  function submit(e) {
    e.preventDefault();
    if (String(phone).length !== 10) {
      changeNumberWarning("yes");
    } else {
      changeNumberWarning("no");
      let code = invite_Code.toString();
      if (cnfpassword !== password) {
        changepasswordWarning("yes");
      } else {
        changepasswordWarning("no");
        if (code.length !== 8) {
          chnageInviteWarning("yes");
        } else {
          chnageInviteWarning("no");
          axios
            .post(`${host}/register`, {
              phone: String(phone),
              password: password,
              refferedBy: code,
            })
            .then((res) => {
              changedialog("yes");
              if (String(res.data) == "ok") {
                changeRegistered("yes");
              } else if (String(res.data) == "user_Exists") {
                changeRegistered("no");
              }
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
  }
  const [numberWarning, changeNumberWarning] = useState("no");
  const [passwordWarning, changepasswordWarning] = useState("no");
  const { host } = useContext(data);
  const [phone, changephone] = useState("");
  const [password, changepassword] = useState("");
  const [cnfpassword, changecnfpassword] = useState("");
  const [invite_Code, changeInviteCode] = useState("");
  const [invite_warning, chnageInviteWarning] = useState("no");
  const [showdialog, changedialog] = useState("no");
  const [registered, changeRegistered] = useState("no");

  return (
    <>
      <Header />
      <div className={style.mainview}>
        <div
          className={
            showdialog == "yes" ? style.register_Info : style.hidden_dialog
          }
        >
          <div style={{ textAlign: "center" }}>
            {registered == "yes" ? (
              <GrStatusGood className={style.infoImage} />
            ) : (
              <MdOutlineCancel
                className={style.infoImage}
                style={{ color: "red" }}
              />
            )}
          </div>
          <div className={style.message}>
            {registered == "yes" ? (
              <p>Registered Sucessfully</p>
            ) : (
              <p style={{ color: "red" }}>User already exist </p>
            )}
          </div>
          <div className={style.Next}>
            {registered == "yes" ? (
              <button
                onClick={() => {
                  window.location.replace("http://192.168.57.240:3000/");
                  changedialog("no");
                }}
              >
                Login
              </button>
            ) : (
              <button
                style={{ backgroundColor: "red" }}
                onClick={() => {
                  changedialog("no");
                }}
              >
                TryAgain
              </button>
            )}
          </div>
        </div>
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
              <svg
                data-v-50aa8bb0=""
                class="svg-icon icon-phone"
                className={style.icons}
              >
                <use xlinkHref="#icon-phone"></use>
              </svg>
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
              <svg
                data-v-ea5b66c8=""
                class="svg-icon icon-editPswIcon passwordInput__container-label__icon passwordInput__container-label__icon"
                className={style.icons}
              >
                <use xlinkHref="#icon-editPswIcon"></use>
              </svg>
              <span className={style.span2}>Create password</span>
            </p>
            <input
              className={style.input}
              type="text"
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
              <svg
                data-v-ea5b66c8=""
                class="svg-icon icon-editPswIcon passwordInput__container-label__icon passwordInput__container-label__icon"
                className={style.icons}
              >
                <use xlinkHref="#icon-editPswIcon"></use>
              </svg>
              <span className={style.span3}>Re-enter your password</span>
            </p>
            <input
              className={style.input}
              type="text"
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
              <svg
                data-v-e26f70e7=""
                class="svg-icon icon-invitation"
                className={style.icons}
              >
                <use xlinkHref="#icon-invitation"></use>
              </svg>
              <span className={style.span5}>Invite code</span>
            </p>
            <input
              className={style.input}
              type="number"
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
            <p
              className={invite_warning == "yes" ? style.warning : style.hidden}
            >
              {" "}
              invalid Invite code
            </p>
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
