import StatsWingo from "./StatsWingo";
import Timer1min from "./Timer1min";
import WingoTimerOption from "./WingoColorOptions";

export default function Wingo1min({ currenttimer }) {
  return (
    <>
      <Timer1min></Timer1min>
      <WingoTimerOption></WingoTimerOption>
      <StatsWingo currenttimer={currenttimer}></StatsWingo>
    </>
  );
}
