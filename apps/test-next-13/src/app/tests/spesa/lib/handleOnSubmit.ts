import { MouseEvent } from "react";
import { SpesaApplication } from "../../../../pages/api/spesa/Spesa";
import { handleOnSubmitProps, pages } from "../page.types";
import { clone } from "./clone";
import { submitMakeList } from "./submitMakeList";
import { submitMakeProduct } from "./submitMakeProduct";

export const handleOnSubmit =
  ({ inputs, setActive, spesaApp, setSpesaApp }: handleOnSubmitProps) =>
  (page: string) =>
  (id: string) =>
  (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let edited: SpesaApplication;
    let submitProps: handleOnSubmitProps = {
      page,
      id,
      spesaApp,
      inputs,
      setActive,
    };

    if (page === "makelist") edited = submitMakeList(submitProps);
    else if (page === "makeproduct") submitMakeProduct(submitProps);
    setSpesaApp(clone("new", edited));
  };
