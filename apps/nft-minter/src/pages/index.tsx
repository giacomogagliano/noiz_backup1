import Link from "next/link";
import styled from "styled-components";
import Layout from "../components/layout";
import MDContent from "../components/MDContent";
import { fetchMd } from "../lib/fetchMd";
import { BasePropsFromApp } from "./_app";

const SRC =
  "https://raw.githubusercontent.com/newsbubbles/elsewhere/main/README.md";

interface NewLanding {
  (
    props: BasePropsFromApp & { data: string }
  ): JSX.Element;
}

export async function getStaticProps(): Promise<{
  props: { data: string };
}> {
  const data = await fetchMd({ src: SRC });
  return { props: { data } };
}

const Feed = styled.div``;

const NewLanding: NewLanding = function Landing({
  data,
  layout,
}) {
  return (
    <Layout landing {...layout}>
      <MDContent contentHtml={data}></MDContent>
      <Feed>
        <h1>Feed</h1>
        <Link href="/collection">Collection</Link>
      </Feed>
    </Layout>
  );
};

export default NewLanding;
