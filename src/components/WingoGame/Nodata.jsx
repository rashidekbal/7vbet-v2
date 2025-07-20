import style from "./css/Nodata.module.css";
export default function Nodata({ msg }) {
  return (
    <>
      <div className={style.mainFrame}>
        <h1>{msg}</h1>
      </div>
    </>
  );
}
