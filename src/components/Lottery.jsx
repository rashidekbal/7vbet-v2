import style from "../css/Lottery.module.css";
import logo1 from "../icons/f.png";
import logo2 from "../icons/s.png";
import logo3 from "../icons/rd.png";
import logo4 from "../icons/frt.png";
import avatar from "../icons/avatar.png";
import { NavLink } from "react-router-dom";
function Lottery({ taber }) {
  let newstyle = { textDecoration: "none" };
  return (
    <>
      <div className={style.maingames}>
        <div className={style.games} id="wingo">
          <NavLink to="/wingo" style={newstyle}>
            <div className={style.openerUpper1}>
              <div className={style.gamelogo}>
                <img className={style.gamelogoimg} src={logo1} alt="wingo" />
              </div>
              <h2 style={{ color: "white" }}>Win Go</h2>
              <div className={style.discription}>
                <p style={{ color: "white" }}>Guess Number</p>
                <p style={{ color: "white" }}>Green/Red/Violet to win</p>
              </div>
            </div>
            <div className={style.openerlower}>
              <img className={style.openerloweri} src={avatar} alt="avatar" />
              <p
                className={style.openerlowerp}
                style={{
                  color: "black",
                  left: "40px",
                }}
              >
                Memberxytzjhodpur
              </p>
              <p
                className={style.openerlowerp}
                style={{
                  color: "black",
                  right: "20px",
                }}
              >
                Winning amount 189.25rs
              </p>
            </div>
          </NavLink>
        </div>
        <div className={style.games} id="k3">
          <NavLink to="/k3" style={newstyle}>
            <div className={style.openerUpper2}>
              <div className={style.gamelogo}>
                <img className={style.gamelogoimg} src={logo2} alt="k3" />
              </div>
              <h2 style={{ color: "white" }}>K3 Lotre</h2>
              <div className={style.discription}>
                <p style={{ color: "white" }}>Guess Number</p>
                <p style={{ color: "white" }}>Big/Small/Odd/Even</p>
              </div>
            </div>
            <div className={style.openerlower}>
              <img src={avatar} alt="avatar" className={style.openerloweri} />
              <p
                className={style.openerlowerp}
                style={{
                  color: "black",
                  left: "40px",
                }}
              >
                Memberxytzjhodpur
              </p>
              <p
                className={style.openerlowerp}
                style={{
                  color: "black",
                  right: "20px",
                }}
              >
                Winning amount 189.25rs
              </p>
            </div>
          </NavLink>
        </div>
        <div className={style.games} id="5d">
          <NavLink to="/5d" style={newstyle}>
            <div className={style.openerUpper3}>
              <div className={style.gamelogo}>
                <img className={style.gamelogoimg} src={logo3} alt="5D" />
              </div>
              <h2 style={{ color: "white" }}>5D Lotre</h2>
              <div className={style.discription}>
                <p style={{ color: "white" }}>Guess Number</p>
                <p style={{ color: "white" }}>Big/Small/Odd/Even</p>
              </div>
            </div>
            <div className={style.openerlower}>
              <img src={avatar} alt="avatar" className={style.openerloweri} />
              <p
                className={style.openerlowerp}
                style={{
                  color: "black",
                  left: "40px",
                }}
              >
                Memberxytzjhodpur
              </p>
              <p
                className={style.openerlowerp}
                style={{
                  color: "black",
                  right: "20px",
                }}
              >
                Winning amount 189.25rs
              </p>
            </div>
          </NavLink>
        </div>
        <div className={style.games} id="trx" style={{ margin: "0 0 5px 0;" }}>
          <NavLink to="/trx" style={newstyle}>
            <div className={style.openerUpper4}>
              <div className={style.gamelogo}>
                <img className={style.gamelogoimg} src={logo4} alt="Trx" />
              </div>
              <h2 style={{ color: "white" }}>Trx Win</h2>
              <div className={style.discription}>
                <p style={{ color: "white" }}>Guess Number</p>
                <p style={{ color: "white" }}>Green/Red/Violet to win</p>
              </div>
            </div>
            <div className={style.openerlower}>
              <img src={avatar} className={style.openerloweri} alt="avatar" />
              <p
                className={style.openerlowerp}
                style={{
                  color: "black",
                  left: "40px",
                }}
              >
                Memberxytzjhodpur
              </p>
              <p
                className={style.openerlowerp}
                style={{
                  color: "black",
                  right: "20px",
                }}
              >
                Winning amount 189.25rs
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
export default Lottery;
