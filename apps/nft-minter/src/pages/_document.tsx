// @ts-nocheck
import {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import styled from "styled-components";
import LoadingPage from "../components/LoadingPage";

function Document_v1() {
  // ritorna un errore. capire da dove proviene il bug.
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,500;1,600;1,700;1,900&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

const Absolute = styled.div<{ loading: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: red;
  z-index: 3;
  display: ${props => (props.loading ? "block" : "none")};
`;

const Absolute2 = styled.div`
  #cazzo {
    width: 100vw;
    height: 100vh;
    background-color: red;
    z-index: 3;
  }
`;

function Document_v2() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,500;1,600;1,700;1,900&display=swap"
        />
      </Head>
      <body>
        <Absolute2 id="cazzo"></Absolute2>
        {/* <LoadingPage id="loading-page" /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export const Document = Document_v2;

export default Document;
