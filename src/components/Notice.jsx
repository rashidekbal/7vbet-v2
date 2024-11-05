import style from "../css/Notice.module.css";
function Notice() {
  return (
    <>
      <div className={style.notification_center}>
        <div className={style.actuator}>
          <p className={style.notice}>
            Please use our offical site only, for Safety
          </p>
        </div>

        <p className={style.details}>Details</p>
      </div>
    </>
  );
}
export default Notice;
