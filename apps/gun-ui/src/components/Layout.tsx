import Head from "next/head";
import Footer from "./Footer";

export default ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="icon"
        type="image/png"
        href="static/favicon-96x96.png"
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/png"
        href="static/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="static/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href="static/favicon-128.png"
        sizes="128x128"
      />
      <title>{"zaion"}</title>
    </Head>
    {children}
    <Footer />
  </div>
);
