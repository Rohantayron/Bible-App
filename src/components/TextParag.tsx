import React from "react";

function TextParag(props: { text: string; nmr: number }) {
  return (
    <span className="leading-loose  ">
      <sup>{props.nmr}</sup>
      <span>{props.text}</span>
    </span>
  );
}

export default TextParag;
