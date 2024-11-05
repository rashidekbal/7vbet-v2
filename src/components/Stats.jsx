import style from "../css/Stats.module.css";
import logo from "../icons/f.png";
import logo2 from "../icons/9-6d772f2c.png";
import rank from "../icons/ranks.jpg";
export const Stats = () => {
  return (
    <>
      <div className={style.statsSection}>
        <div className={style.statsName}>
          <span className={style.sidebar}></span>
          <h3 style={{ display: "inline-block", marginLeft: "10px" }}>
            Winning Information
          </h3>
        </div>
        <div className={style.statsData}>
          <div className={style.test}>
            <div className={style.stats}>
              <img className={style.dataAvatar} src={logo2} />
              <p className={style.avatarName}>Memo****f56</p>
              <img className={style.winingI} src={logo} />
              <p className={style.winMoney}>
                Received Rs:196.00
                <br />
                <span style={{ color: "darkgray" }}>winning amount</span>
              </p>
            </div>
            <div className={style.stats}>
              <img className={style.dataAvatar} src={logo2} />
              <p className={style.avatarName}>Memo****f56</p>
              <img className={style.winingI} src={logo} />
              <p className={style.winMoney}>
                Received Rs:196.00
                <br />
                <span style={{ color: "darkgray" }}>winning amount</span>
              </p>
            </div>
            <div className={style.stats}>
              <img className={style.dataAvatar} src={logo2} />
              <p className={style.avatarName}>Memo****f56</p>
              <img className={style.winingI} src={logo} />
              <p className={style.winMoney}>
                Received Rs:196.00
                <br />
                <span style={{ color: "darkgray" }}>winning amount</span>
              </p>
            </div>
            <div className={style.stats}>
              <img className={style.dataAvatar} src={logo2} />
              <p className={style.avatarName}>Memo****f56</p>
              <img className={style.winingI} src={logo} />
              <p className={style.winMoney}>
                Received Rs:196.00
                <br />
                <span style={{ color: "darkgray" }}>winning amount</span>
              </p>
            </div>
            <div className={style.stats}>
              <img className={style.dataAvatar} src={logo2} />
              <p className={style.avatarName}>Memo****f56</p>
              <img className={style.winingI} src={logo} />
              <p className={style.winMoney}>
                Received Rs:196.00
                <br />
                <span style={{ color: "darkgray" }}>winning amount</span>
              </p>
            </div>
            <div className={style.stats}>
              <img className={style.dataAvatar} src={logo2} />
              <p className={style.avatarName}>Memo****f56</p>
              <img className={style.winingI} src={logo} />
              <p className={style.winMoney}>
                Received Rs:196.00
                <br />
                <span style={{ color: "darkgray" }}>winning amount</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.winingRank}>
        <span className="sidebar"></span>
        <h3 style={{ display: "inline-block", marginLeft: "10px" }}>
          Today's earnings chart
        </h3>
        <div className={style.ranks}>
          <img
            src={rank}
            width="100%"
            height="auto"
            style={{ display: "block", marginTop: "5px" }}
          />
          <div style={{ top: "100px", left: "20px" }} className={style.ranksU}>
            <p id="nd_member">Memo****f76</p>
            <p
              style={{
                borderRadius: "15px",
                backgroundColor: "rgb(207, 207, 207)",
                color: "white",
                marginTop: "5px",
              }}
              id="ndWin"
            >
              25000
            </p>
          </div>
          <div className={style.ranksU} style={{ top: "90px", left: "132px" }}>
            <p id="st_member">Memo****f76</p>
            <p
              style={{
                borderRadius: "15px",
                backgroundColor: "rgb(255, 142, 142)",
                color: "white",
                marginTop: "5px",
              }}
              id="stWin"
            >
              25000
            </p>
          </div>
          <div className={style.ranksU} style={{ top: "100px", right: "16px" }}>
            <p id="rd_member">Memo****f76</p>
            <p
              style={{
                borderRadius: "15px",
                backgroundColor: "rgb(241, 193, 148)",
                color: "white",
                marginTop: "5px",
              }}
              id="rdWin"
            >
              25000
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
