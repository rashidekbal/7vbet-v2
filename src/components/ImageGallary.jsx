import logo1 from "../icons/slide1.jpg";
import logo2 from "../icons/slide2.jpg";
import logo3 from "../icons/slide3.jpg";
import style from "../css/ImageGallary.module.css";
import { useEffect, useState } from "react";

function ImageGallary() {
  let item = [logo1, logo2, logo3];
  const [key, changekey] = useState(item[0]);
  function change() {
    let newkey = Math.floor(Math.random() * item.length);
    changekey(item[newkey]);
  }
  useEffect(() => {
    setInterval(() => {
      change();
    }, 4000);
  }, []);
  return (
    <>
      <div className={style.Gallary}>
        <div>
          <img src={key} alt="img" className={style.img} />
        </div>
      </div>
    </>
  );
}
export default ImageGallary;
