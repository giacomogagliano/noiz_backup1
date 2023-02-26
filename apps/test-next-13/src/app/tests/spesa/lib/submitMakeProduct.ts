import { handleOnSubmitCb } from "../page.types";

export const submitMakeProduct: handleOnSubmitCb = ({
  id,
  inputs,
  setActive,
  spesaApp,
}) => {
  const product = spesaApp.createProduct({
    name: "",
    price: 0,
    categorie: [""],
    link: "",
    store: { type: "e-commerce", value: { link: "", name: "" } },
  });
  product.value[id] = inputs.get(id);
  let editedSpesaApp = spesaApp.saveProduct(product);
  setActive(product.value.name);
  return editedSpesaApp;
};
