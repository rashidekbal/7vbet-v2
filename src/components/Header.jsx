import logo from "../icons/main-logo-white-transparent.png";
import style from "../css/Header.module.css";
import { useContext } from "react";
import { data } from "../store/Contextprovider";
function Header() {
  return (
    <>
      <header className={style.main}>
        <div className={style.logoContainer}>
          <a href="#">
            <img src={logo} alt="buisness" className={style.logo} />
          </a>
        </div>
      </header>
    </>
  );
}
export default Header;
