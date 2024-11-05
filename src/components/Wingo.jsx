import { useState } from "react";
import Notice from "./Notice";
import WalletDataForGames from "./WalletDataForGames";
import { WalletViewEffect } from "./WalletViewEffect";
import WingoTimerSetting from "./WingoTimerSetting";
import Wingo1min from "./Wingo1min";
import Wingo3min from "./Wingo3min";
import Wingo5min from "./Wingo5min";
import Wingo10min from "./Wingo10min";
import Footer from "./Footer";

export default function Wingo({ taber }) {
  const [currenttimer, changecurrenttimer] = useState("1");
  return (
    <>
      <div>
        <WalletViewEffect>
          <WalletDataForGames></WalletDataForGames>
          <Notice></Notice>
          <WingoTimerSetting
            currenttimer={currenttimer}
            changecurrenttimer={changecurrenttimer}
          />
        </WalletViewEffect>
        {currenttimer === "1" ? (
          <Wingo1min currenttimer={currenttimer}></Wingo1min>
        ) : currenttimer === "3" ? (
          <Wingo3min currenttimer={currenttimer}></Wingo3min>
        ) : currenttimer === "5" ? (
          <Wingo5min currenttimer={currenttimer}></Wingo5min>
        ) : (
          currenttimer === "10" && (
            <Wingo10min currenttimer={currenttimer}></Wingo10min>
          )
        )}
        <Footer></Footer>
      </div>
    </>
  );
}
