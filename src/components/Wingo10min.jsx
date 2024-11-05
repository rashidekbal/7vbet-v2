import StatsWingo from "./StatsWingo";
import Timer10min from "./Timer10min";
import WingoTimerOption from "./WingoColorOptions";

export default function Wingo10min({ currenttimer }) {
  return (
    <>
      <Timer10min></Timer10min>
      <WingoTimerOption></WingoTimerOption>
      <StatsWingo currenttimer={currenttimer}></StatsWingo>
    </>
  );
}
