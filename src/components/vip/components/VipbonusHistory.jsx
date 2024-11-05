import React, { useState } from "react";
import style from "../css/Vipbonushistory.module.css";
function VipbonusHistory() {
  const [tab, changetab] = useState("history");
  return (
    <div className={style.Navigation}>
      <div>
        <p
          className={tab == "history" ? style.history : style.historyNormal}
          onClick={() => {
            changetab("history");
          }}
        >
          History
        </p>
      </div>
      <div>
        <p
          className={tab == "rules" ? style.rules : style.normalrule}
          onClick={() => {
            changetab("rules");
          }}
        >
          Rules
        </p>
      </div>
    </div>
  );
}

export default VipbonusHistory;
