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
    stateB={textBigSubStateB as unknown as string}
    stateA={textBigSubStateA as unknown as string}
    triggerKey={triggerKey}
    threshold={1}
  >
    {children}
  </Loader>
);
