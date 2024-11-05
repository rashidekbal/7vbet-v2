import { useContext } from "react";
import style from "../css/Register.module.css";
import { data } from "../store/Contextprovider";
import Header from "./Header";
import { NavLink } from "react-router-dom";
function Register() {
  const context = useContext(data);
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
          <form id="register" action="test.php" method="post">
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
            />
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
            />
            <p className={style.p4}>
              <img
                src="axjhqhsdgdsbhj/src/svgs/invite-friends-svgrepo-com.svg"
                height="25.59px"
              />
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
            ></input>
            <p className={style.p5}>
              <input
                className={style.checkbox}
                type="checkbox"
                required
                id="check_box"
                value="yes"
                name="consent"
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
