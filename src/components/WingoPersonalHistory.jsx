import { useContext } from "react";
import UserbetHistorycard from "./UserbetHistorycard";
import { data } from "../store/Contextprovider";

export default function WingoPersonalHistory({ currenttimer }) {
  const { Wingouserbethistory1min, Wingouserbethistory3min } = useContext(data);
  return <></>;
}
