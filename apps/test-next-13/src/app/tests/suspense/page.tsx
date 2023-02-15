import React from "react";
// import styled from "styled-components";

// const Style = styled.div`
//   color: red;
// `;

async function getData() {
  await new Promise(res => setTimeout(res, 3000));
  return "top";
}

export default async function page() {
  const data = await getData();
  return <div>{data}</div>;
}
