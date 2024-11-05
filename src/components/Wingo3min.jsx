import StatsWingo from "./StatsWingo";
import Timer3min from "./Timer3min";
import WingoTimerOption from "./WingoColorOptions";

export default function Wingo3min({ currenttimer }) {
  return (
    <>
      <Timer3min></Timer3min>
      <WingoTimerOption></WingoTimerOption>
      <StatsWingo currenttimer={currenttimer}></StatsWingo>
    </>
  );
}
