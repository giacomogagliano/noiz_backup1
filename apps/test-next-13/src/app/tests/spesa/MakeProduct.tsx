import { ChangeEvent, FC, MouseEvent } from "react";
import { spesaApp } from "../../../pages/api/spesa";
import { Input } from "./Input";
import { MakeProductPage } from "./MakeProduct.style";
import { Page } from "./page.style";
import { pages } from "./page.types";

export let MakeProduct = ({
  handleOnChange,
  handleOnSubmit,
}: {
  handleOnChange: (id: string) => (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (
    page: pages
  ) => (id: string) => (e: MouseEvent<HTMLButtonElement>) => void;
}) => {
  const PAGE = "makeproduct";
  const NAME = "name";
  const PRICE = "price";
  const CATEGORIE = "categorie";
  const LINK = "link";
  const STORE = "store";
  let allprods = spesaApp.products;
  let hasProducts = allprods.size > 0;
  let Products: FC;
  if (hasProducts) {
    Products = () => <div>got prods</div>;
  } else Products = () => <div>no prods yet, add one</div>;
  let datas = [NAME, PRICE, LINK, STORE, CATEGORIE];
  return (
    <Page>
      prod
      {!hasProducts && (
        <MakeProductPage>
          {datas.map((data, idx) => (
            <Input
              key={idx}
              handleOnChange={handleOnChange}
              handleOnSubmit={handleOnSubmit}
              id={data}
              message="submit"
              page={PAGE}
            ></Input>
          ))}
        </MakeProductPage>
      )}
      <Products></Products>
      <button>add product</button>
    </Page>
  );
};
