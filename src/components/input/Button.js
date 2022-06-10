import React, { useState, useEffect, useRef } from "react";

import "./styles/Button.css";

function Button({
  topLabel = "Button",
  bottomLabel = "Hello",
  disabled,
  additionalClass,
  func,
}) {
  const labelTopRef = useRef();
  const labelBottomRef = useRef();
  const [textWidth, setTextWidth] = useState(0);
  const [textHeight, setTextHeight] = useState(0);

  useEffect(() => {
    // find the width and height of the text
    // and adjust the width of the button accordingly
    //
    // This is necessary because the insides are absolutely positioned
    let w1 = labelTopRef.current.getBoundingClientRect().width;
    let w2 = labelBottomRef.current.getBoundingClientRect().width;

    let h = labelTopRef.current.getBoundingClientRect().height;

    setTextWidth(Math.max(w1, w2) + "px");
    setTextHeight(h + "px");
  }, []);

  return (
    <button
      className={`button ${additionalClass || ""} ${
        disabled ? "disabled" : ""
      }`}
      style={{
        // change these if you change the padding in the css
        width: `calc(${textWidth} + 6rem)`,
        height: `calc(${textHeight} + 2rem)`,
      }}
      onClick={() => console.log("Hello")}
    >
      <div className="button-inner" id="bottom">
        <span ref={labelBottomRef}>{bottomLabel}</span>
      </div>
      <div className="button-inner" id="top">
        <span ref={labelTopRef}>{topLabel}</span>
      </div>
    </button>
  );
}

export default Button;
