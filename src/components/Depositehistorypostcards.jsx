import React from "react";
import style from "../css/Depositehistorypostcards.module.css";
import Histrorycards from "./Histrorycards";

function Depositehistorypostcards({ data }) {
  return (
    <div className={style.container}>
      {data.map((item) => (
        <Histrorycards data={item} />
      ))}
    </div>
  );
}

export default Depositehistorypostcards;
