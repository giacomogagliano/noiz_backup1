import React from "react";
import { Md } from "../../HTML/React/classes";
import { getAllPostIds, getPostData } from "./posts";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: { postData },
  };
}

export default function Post(props) {
  const { postData } = props;
  const { matterResult, id } = postData;
  const { data, content } = matterResult;

  return (
    <Md
      article
      datas={[
        {
          contentString: content,
          matterResult: matterResult,
          md_raw_react: true,
        },
      ]}
    />
  );
}
