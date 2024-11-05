import lottery from "../icons/lottery.png";
import slots from "../icons/slots.png";
import sports from "../icons/sports.png";
import casino from "../icons/casino.png";
import pvc from "../icons/pvc.png";
import fishing from "../icons/fishing.png";
import mini_games from "../icons/mini_games.png";
import popular from "../icons/popular.png";
import style from "../css/OtherGames.module.css";

function OtherGames() {
  return (
    <>
      <div className={style.OtherGames}>
        <div className={style.objectContainer}>
          <div id='lottery' className={style.objects}>
            <div className={style.link}>
              <img src={lottery} alt='lottery' className={style.menuImage} />

              <p className={style.gameDetails}>Lottery</p>
            </div>
          </div>
          <div id='slots' className={style.objects}>
            <div className={style.link}>
              <img src={slots} alt='slots' className={style.menuImage} />

              <p>Slots</p>
            </div>
          </div>
          <div id='sports' className={style.objects}>
            <div className={style.link}>
              <img src={sports} alt='Sports' className={style.menuImage} />

              <p>Sports</p>
            </div>
          </div>
          <div id='casino' className={style.objects}>
            <div className={style.link}>
              <img src={casino} alt='Casino' className={style.menuImage} />

              <p>Casino</p>
            </div>
          </div>
        </div>
        <div className={style.objectContainer}>
          <div id='pvc' className={style.objects}>
            <div className={style.link}>
              <img src={pvc} alt='pvc' className={style.menuImage} />

              <p>pvc</p>
            </div>
          </div>
          <div id='fishing' className={style.objects}>
            <div className={style.link}>
              <img src={fishing} alt='fishing' className={style.menuImage} />

              <p>Fishing</p>
            </div>
          </div>
          <div id='mini' className={style.objects}>
            <div className={style.link}>
              <img
                src={mini_games}
                alt='mini_games'
                className={style.menuImage}
              />

              <p>Mini</p>
            </div>
          </div>
          <div id='popular' className={style.objects}>
            <div className={style.link}>
              <img src={popular} alt='popular' className={style.menuImage} />

              <p>Popular</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default OtherGames;
