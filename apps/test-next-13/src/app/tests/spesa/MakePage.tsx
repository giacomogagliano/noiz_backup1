import { ChangeEvent, MouseEvent } from "react";
import { SpesaApplication } from "../../../pages/api/spesa/Spesa";
import { SpesaList } from "../../../pages/api/spesa/Spesa/SpesaList";
import { Input } from "./Input";
import { ProductsArea } from "./MakePage.style";
import { Page } from "./page.style";
import { pages } from "./page.types";

export let MakePage = ({
  handleOnChange,
  handleOnSubmit,
  handleAddProduct,
  spesaApp,
  active,
}: {
  handleOnChange: (id: string) => (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (
    page: pages
  ) => (id: string) => (e: MouseEvent<HTMLButtonElement>) => void;
  handleAddProduct: (
    page: string
  ) => (e: MouseEvent<HTMLButtonElement>) => void;
  spesaApp: SpesaApplication;
  active: string;
}) => {
  const PAGE = "makelist";
  const NAME = "name";
  let hasProducts = false;
  let products = null;
  let _spesalist: SpesaList;
  if (active) {
    _spesalist = spesaApp.lists.get(active);
    window.spesalist = _spesalist;
    hasProducts = _spesalist.value.products.size > 0;
    if (hasProducts) products = _spesalist.value.products;
  }
  return (
    <Page>
      make page
      {!_spesalist && (
        <div>
          <Input
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            id={NAME}
            message="submit"
            page={PAGE}
          ></Input>
        </div>
      )}
      {_spesalist && (
        <div>
          <div>list name: {_spesalist.value.name}</div>
          <ProductsArea>
            <>
              <div id="heading">
                <p>name</p>
                <p>qty</p>
              </div>
              {hasProducts && <div>hell</div>}
            </>
          </ProductsArea>
          <button onClick={handleAddProduct(PAGE)}>add product</button>
        </div>
      )}
    </Page>
  );
};
