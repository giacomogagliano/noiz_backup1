import { ChangeEvent, MouseEvent } from "react";
import { pages } from "./page.types";

export let Input = ({
  handleOnChange,
  handleOnSubmit,
  id,
  message,
  page,
}: {
  handleOnChange: (id: string) => (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (
    page: pages
  ) => (id: string) => (e: MouseEvent<HTMLButtonElement>) => void;
  id: string;
  message: string;
  page: "makelist" | "makeproduct";
}) => {
  return (
    <div>
      <input type="text" id={page + id} onChange={handleOnChange(page + id)} />
      <label htmlFor={page + id}>{id}</label>
      <button type="submit" onClick={handleOnSubmit(page)(id)}>
        {message}
      </button>
    </div>
  );
};
