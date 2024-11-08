import ImageGallary from "./ImageGallary";
import Lottery from "./Lottery";
import Notice from "./Notice";
import OtherGames from "./OtherGames";
import { Stats } from "./Stats";

import { GeneralHomeFooter } from "./GeneralHomeFooter";
import Header from "./Header";
import { useContext, useEffect } from "react";
import { data } from "../store/Contextprovider";
export default function OriginalLottery() {
  return (
    <>
      {" "}
      <Header></Header>
      <ImageGallary />
      <Notice></Notice>
      <OtherGames></OtherGames>
      <Lottery></Lottery>
      <Stats></Stats>
      <GeneralHomeFooter page={"home"} />
    </>
  );
}
