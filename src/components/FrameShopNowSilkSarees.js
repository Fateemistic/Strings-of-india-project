import { useMemo } from "react";
import "./FrameShopNowSilkSarees.css";

const FrameShopNowSilkSarees = ({
  rectangle4,
  silkSarees,
  propPadding,
  propBackgroundImage,
  propTextAlign,
}) => {
  const frameShopNowSilkSareesStyle = useMemo(() => {
    return {
      padding: propPadding,
      backgroundImage: propBackgroundImage,
    };
  }, [propPadding, propBackgroundImage]);

  const silkSareesStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div
      className="frame-shop-now-silk-sarees"
      style={frameShopNowSilkSareesStyle}
    >
      <img
        className="frame-shop-now-silk-sarees-child"
        alt=""
        src={rectangle4}
      />
      <h1 className="silk-sarees" style={silkSareesStyle}>
        {silkSarees}
      </h1>
      <button className="frame-button">
        <div className="shop-now3">Shop Now</div>
      </button>
    </div>
  );
};

export default FrameShopNowSilkSarees;
