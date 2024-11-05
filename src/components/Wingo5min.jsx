import StatsWingo from "./StatsWingo";
import Timer5min from "./Timer5min";
import WingoTimerOption from "./WingoColorOptions";

export default function Wingo5min({ currenttimer }) {
  return (
    <>
      <Timer5min></Timer5min>
      <WingoTimerOption></WingoTimerOption>
      <StatsWingo currenttimer={currenttimer}></StatsWingo>
    </>
  );
}
