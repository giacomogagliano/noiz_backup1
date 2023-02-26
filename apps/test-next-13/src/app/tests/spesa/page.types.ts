import { SpesaApplication } from "../../../pages/api/spesa/Spesa";

export type actions =
  | "home"
  | "makelist"
  | "get"
  | "products"
  | "update"
  | "delete"
  | "close"
  | "get-all";

export type pages = "makelist" | "makeproduct";

export type handleOnSubmitProps = {
  page?: string;
  id?: string;
  spesaApp: SpesaApplication;
  inputs: Map<string, string>;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  setSpesaApp?: React.Dispatch<React.SetStateAction<SpesaApplication>>;
};
export type handleOnSubmitCb = (props: handleOnSubmitProps) => SpesaApplication;

export type handleOnChangeProps = {
  inputs: Map<string, string>;
  setInputs: React.Dispatch<React.SetStateAction<Map<string, string>>>;
};

export type handleOnClickProps = {
  setContent: React.Dispatch<React.SetStateAction<actions>>;
};

export type handleAddProductProps = {
  spesaApp: SpesaApplication;
  setSpesaApp?: React.Dispatch<React.SetStateAction<SpesaApplication>>;
  active: string;
};

type cloneTypes = "assign" | "new";

export interface clone {
  (type: cloneTypes, source: any): any;
}
