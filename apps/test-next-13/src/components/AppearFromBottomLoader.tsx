import { ReactNode } from "react";
import {
  textBigSubStateA,
  textBigSubStateB,
} from "../classes/TextBigSub.style";
import { Loader } from "../lib/client/Loader";

export const AppearFromBottomLoader = ({
  children,
  triggerKey,
}: {
  children?: ReactNode;
  triggerKey: string;
}) => (
  <Loader
    stateB={textBigSubStateB}
    stateA={textBigSubStateA}
    triggerKey={triggerKey}
    threshold={1}
  >
    {children}
  </Loader>
);
