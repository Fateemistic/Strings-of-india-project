import { useMemo } from "react";
import "./RectangleGroup.css";

const RectangleGroup = ({ rectangle8, propHeight, propGap }) => {
  const rectangleGroupStyle = useMemo(() => {
    return {
      height: propHeight,
      gap: propGap,
    };
  }, [propHeight, propGap]);

  return (
    <div className="rectangle-group1" style={rectangleGroupStyle}>
      <img
        className="rectangle-group-child"
        loading="eager"
        alt=""
        src={rectangle8}
      />
      <div className="saree-rectangle">
        <div className="yellow-leheriya-print">{`Yellow Leheriya Print `}</div>
        <div className="classic-kurta">128.08$</div>
      </div>
    </div>
  );
};

export default RectangleGroup;
