import React from "react";

const titleStyle = {
  width: "fith-content",
  fontVariant: "small-caps",
  position: "relative",
  display: "grid",
  placeItem: "center",
};

function Title({ text }) {
  return (
    <div style={titleStyle}>
      <h4>{text || "Titolo"}</h4>
      <div className="underline"></div>
    </div>
  );
}

export default Title;
