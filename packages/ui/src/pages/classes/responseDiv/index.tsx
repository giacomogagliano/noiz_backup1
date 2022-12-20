import { useState } from "react";
import { ResponseDiv } from "../../../HTML/React/classes";

export default function index(props: any) {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true);
    setTimeout(() => setShow(false), 2000);
    console.log("clicked");
  };
  return (
    <div id="outer">
      <ResponseDiv
        validation="negated"
        clicked={show}
        {...props}
      />
      <button onClick={handleClick}>DO IT</button>
    </div>
  );
}
