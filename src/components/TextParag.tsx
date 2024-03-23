import React from "react";

function TextParag(props: { text: string; nmr: number }) {
  return (
    <div className="flex">
      <span>{props.nmr}</span>
      <div>{props.text}</div>
    </div>
  );
}

export default TextParag;
