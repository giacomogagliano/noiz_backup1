import { ReactNode } from "react";
import {
  textBigSubStateA,
  textBigSubStateB,
} from "../classes/TextBigSub.style";
import { NewLoader } from "../lib/client/NewLoader";

export const AppearFromBottomLoader = ({
  children,
  triggerKey,
}: {
  children?: ReactNode;
  triggerKey: string;
}) => (
  <NewLoader
    stateB={textBigSubStateB as unknown as string}
    stateA={textBigSubStateA as unknown as string}
    triggerKey={triggerKey}
    threshold={1}
  >
    {children}
  </NewLoader>
);
