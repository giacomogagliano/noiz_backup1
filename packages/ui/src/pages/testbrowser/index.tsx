import React from "react";

export default function Element() {
  function handleClick(event) {
    console.log(event);
  }

  return <div onClick={handleClick}>Hello World</div>;
}

export { Element };
