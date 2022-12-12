import React, { Component } from "react";
import {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { robotoGoogleQuery } from "../HTML/React/style/Global";

export class Document_v3 extends Component {
  render(): React.ReactNode {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href={robotoGoogleQuery}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export const Document = Document_v3;

export default Document;
