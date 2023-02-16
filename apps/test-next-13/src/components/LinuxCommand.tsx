import React from "react";
import { LinuxCommandComponent } from "../lib/style/StylesSheet";

export const LinuxCommand = () => (
  <LinuxCommandComponent>
    <div id="linux-command-container">
      <div id="linux-command">curl -L https://zion.sh | bash</div>
    </div>
  </LinuxCommandComponent>
);
