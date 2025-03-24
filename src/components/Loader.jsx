import FadeLoader from "react-spinners/FadeLoader";
export default function Loader() {
  return (
    <div
      style={{
        backgroundColor: "transparent",
        width: "100%",
        height: window.innerHeight,
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
      }}
      onScroll={(e) => {
        e.preventDefault();
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          height: 200,
          width: 200,
          borderRadius: 16,
          boxShadow: "0 0 1000px grey",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FadeLoader color="#ED4000" size={15} />
      </div>
    </div>
  );
}
