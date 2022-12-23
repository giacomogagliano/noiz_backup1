import React, { useState } from "react";
import { Image } from "../../../HTML/React/classes";

export default function index() {
  const [src, setSrc] = useState("");
  // let src = "";
  setTimeout(() => {
    setSrc(
      "https://biografieonline.it/img/bio/b/Bob_Marley.jpg"
    );
  }, 2000);
  return <Image src={src}></Image>;
}
