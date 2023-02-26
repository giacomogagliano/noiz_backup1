import { MouseEvent } from "react";
import { handleAddProductProps, pages } from "../page.types";
import { clone } from "./clone";

export const handleAddProduct =
  ({ spesaApp, setSpesaApp, active }: handleAddProductProps) =>
  (page: pages) =>
  (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (page === "makelist") {
      console.log("i am adding a product");

      let spesalist = spesaApp.lists.get(active);

      spesalist.addProduct("some", 1);
      window.spesa = spesaApp;
      setSpesaApp(clone("new", spesaApp));
    }
  };
