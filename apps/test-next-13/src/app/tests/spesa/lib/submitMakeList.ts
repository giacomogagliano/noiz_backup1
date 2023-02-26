import { handleOnSubmitCb } from "../page.types";

export let submitMakeList: handleOnSubmitCb = ({
  page,
  id,
  spesaApp,
  inputs,
  setActive,
}) => {
  let spesalist = spesaApp.makelist();
  spesalist.value[id] = inputs.get(page + id);
  let editedSpesaApp = spesaApp.saveList(spesalist);
  setActive(spesalist.value.name);
  return editedSpesaApp;
};
