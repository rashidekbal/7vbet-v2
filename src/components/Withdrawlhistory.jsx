import React, { useContext } from "react";
import { data } from "../store/Contextprovider";
import Withdrawlcard from "./Withdrawlcard";

function Withdrawlhistory() {
  let { withdrawlhistroy } = useContext(data);
  return (
    <div>
      {withdrawlhistroy.map((item) => (
        <Withdrawlcard data={item}></Withdrawlcard>
      ))}
    </div>
  );
}

export default Withdrawlhistory;
