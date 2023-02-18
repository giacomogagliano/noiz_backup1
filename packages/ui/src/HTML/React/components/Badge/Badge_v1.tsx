import { Icon } from "../../classes";
import { BadgeStyle } from "./Badge.style";

export interface Badge_v1 {
  ({ size }: BadgeStyle): JSX.Element;
}

export const Badge_v1: Badge_v1 = ({ size }) => {
  return (
    <BadgeStyle size={size}>
      <div id="logo">
        <div id="badge-circle">
          <Icon logoZion></Icon>
        </div>
      </div>
      <div id="badge-infos">
        <p>ZION 2</p>
        <h3>SILVER</h3>
      </div>
    </BadgeStyle>
  );
};
