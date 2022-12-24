import { BooleanizeUnions } from "../../utility";

export type NavBarType_v1 = BooleanizeUnions<
  "icon" | "text" | "key-value"
>;
