import { RoughNotation } from "react-rough-notation";

function Highlighter({ text, color, type, animationDelay, strokeWidth }) {
  return (
    <RoughNotation
      type={type}
      show={true}
      color={color}
      animationDelay={animationDelay}
      strokeWidth={strokeWidth}
    >
      {text}
    </RoughNotation>
  );
}

export default Highlighter;
