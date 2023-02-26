"use client";
import React, { useState } from "react";
import { spesaApp as sa } from "../../../pages/api/spesa";
import { SpesaApplication } from "../../../pages/api/spesa/Spesa";
import { handleAddProduct as hap } from "./lib/handleAddProduct";
import { handleOnChange as hoc } from "./lib/handleOnChange";
import { handleOnClick as hocl } from "./lib/handleOnClick";
import { handleOnSubmit as hos } from "./lib/handleOnSubmit";
import { MakePage } from "./MakePage";
import { MakeProduct } from "./MakeProduct";
import { AppContainer } from "./page.style";
import { actions } from "./page.types";
import { SideBarMenu } from "./SideBarMenu";

export default function page() {
  const [content, setContent] = useState<actions>("home");
  const [spesaApp, setSpesaApp] = useState<SpesaApplication>(sa);
  const [active, setActive] = useState<string>(null);
  const [inputs, setInputs] = useState(new Map<string, string>());

  const handleOnClick = hocl({ setContent });

  const handleOnChange = hoc({ inputs, setInputs });

  const handleOnSubmit = hos({ setActive, spesaApp, inputs, setSpesaApp });

  const handleAddProduct = hap({ spesaApp, setSpesaApp, active });

  return (
    <AppContainer>
      <SideBarMenu handleOnClick={handleOnClick} />
      {content === "makelist" && (
        <MakePage
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          handleAddProduct={handleAddProduct}
          spesaApp={spesaApp}
          active={active}
        ></MakePage>
      )}
      {content === "products" && (
        <MakeProduct
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
        ></MakeProduct>
      )}
    </AppContainer>
  );
}
