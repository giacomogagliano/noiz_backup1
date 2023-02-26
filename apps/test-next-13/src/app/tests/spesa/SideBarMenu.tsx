import { MouseEvent } from "react";
import { SideBarMenuStyle } from "./SideBarMenu.style";

let Button = ({
  children,
  handleOnClick,
}: {
  children: string;
  handleOnClick: (e: MouseEvent<HTMLButtonElement>) => void;
}) => (
  <button id={children} onClick={handleOnClick}>
    {children}
  </button>
);

export let SideBarMenu = ({
  handleOnClick,
}: {
  handleOnClick: (e: MouseEvent<HTMLButtonElement>) => void;
}) => (
  <SideBarMenuStyle>
    <div>
      <Button handleOnClick={handleOnClick}>makelist</Button>
    </div>
    <div>
      <Button handleOnClick={handleOnClick}>products</Button>
    </div>
    {/* <div>
      <Button handleOnClick={handleOnClick}>get</Button>
    </div>
    <div>
      <Button handleOnClick={handleOnClick}>update</Button>
    </div>
    <div>
      <Button handleOnClick={handleOnClick}>delete</Button>
    </div>
    <div>
      <Button handleOnClick={handleOnClick}>close</Button>
    </div>
    <div>
      <Button handleOnClick={handleOnClick}>get-all</Button>
    </div> */}
  </SideBarMenuStyle>
);
