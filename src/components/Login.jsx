import { useContext, useState } from "react";
import style from "../css/login.module.css";
import { data } from "../store/Contextprovider";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import { MdOutlineCancel } from "react-icons/md";
export default function Login() {
  const [password, changepassword] = useState("");
  const [phone, changephone] = useState("");
  const [phoneWarnign, changeWarning] = useState("no");
  const { host } = useContext(data);
  const [showdialog, changedialog] = useState("no");
  const [passerr, changepasserr] = useState("no");
  const [servererr, changeservererr] = useState("no");
  const [usererr, changeusererr] = useState("no");
  const [showloader, setShowloader] = useState(false);
  let { changeuid, setuid, websiteLink } = useContext(data);
  function submit(e) {
    e.preventDefault();
    if (String(phone).length !== 10) {
      changeWarning("yes");
    } else {
      changeWarning("no");
      setShowloader(true);
      axios
        .post(`${host}/loginV2`, {
          phone,
          password,
        })
        .then((res) => {
          let response = res.data;
          if (response.msg !== "err") {
            if (response.msg !== "null") {
              if (response.msg !== "passerr") {
                setShowloader(false);
                let uid = String(phone).slice(2);
                setuid(uid, response.token);
                setTimeout(() => {
                  window.location.replace(`${websiteLink}/home`);
                }, 100);

                changepassword("");
                changephone("");
              } else {
                setShowloader(false);
                changedialog("yes");
                changepasserr("yes");
              }
            } else {
              setShowloader(false);
              console.log(res.data);
              changedialog("yes");
              changeusererr("yes");
            }
          } else {
            setShowloader(false);
            console.log(res.data);
            changedialog("yes");
            changeservererr("yes");
          }
        })
        .catch((res) => {
          setShowloader(false);
          changedialog("yes");
          changeservererr("yes");
        });
    }
  }

  return (
    <>
      <div
        style={{
          maxWidth: "412px",
          margin: "0 auto",
          backgroundColor: "#f7f7f7",
          height: "800px",
        }}
      >
        {showloader && <Loader />}
        <Header />
        <div className={style.mainview}>
          <div
            className={
              showdialog == "yes" ? style.register_Info : style.hidden_dialog
            }
          >
            <div style={{ textAlign: "center" }}>
              <MdOutlineCancel
                className={style.infoImage}
                style={{ color: "red" }}
              />
            </div>
            <div className={style.message}>
              {servererr == "yes" ? (
                <p style={{ color: "red" }}>Internal err</p>
              ) : usererr == "yes" ? (
                <p style={{ color: "red" }}>User dosen't exist </p>
              ) : (
                passerr == "yes" && (
                  <p style={{ color: "red" }}>Wrong password </p>
                )
              )}
            </div>
            <div className={style.Next}>
              <button
                style={{ backgroundColor: "red" }}
                onClick={() => {
                  changedialog("no");
                }}
              >
                TryAgain
              </button>
            </div>
          </div>
          <div className={style.punch}>
            <p id="page_notice">Please login by phone number</p>
            <p>If you forgot your password , please contact customer service</p>
          </div>

          <div className={style.loginform}>
            <div className={style.login}>
              <p>Login by your credentials </p>
            </div>
            <form
              id="register"
              onSubmit={(e) => {
                submit(e);
              }}
            >
              <p className={style.p2}>
                <svg
                  data-v-50aa8bb0=""
                  class="svg-icon icon-phone"
                  className={style.icons}
                >
                  <use xlinkHref="#icon-phone"></use>
                </svg>
                <span className={style.phonenumberholder}>Phone number</span>
              </p>
              <input
                className={style.input}
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
              {phoneWarnign == "yes" && (
                <p className={style.warning}>
                  Please enter 10 digit mobile number !
                </p>
              )}
              <p className={style.p1}>
                <svg
                  data-v-ea5b66c8=""
                  class="svg-icon icon-editPswIcon passwordInput__container-label__icon passwordInput__container-label__icon"
                  className={style.icons}
                >
                  <use xlinkHref="#icon-editPswIcon"></use>
                </svg>
                <span className={style.passwordholder}>Enter password</span>
              </p>
              <input
                className={style.input}
                type="text"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => {
                  changepassword(e.target.value);
                }}
              />

              <input
                type="submit"
                value="login"
                className={style.inputsubmit}
              />
            </form>
            <NavLink to="register" className={style.register}>
              Registrartion page
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
