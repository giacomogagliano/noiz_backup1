import React from "react";
import JSXStyle from "styled-jsx/style";
import { project } from "../..";

export function getStaticPaths() {
  return {
    paths: project.budget.getProductList().map(p => {
      return { params: { id: p } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(params);

  // ottenere i dati del prodotto in base all'ID del prodotto passato come parametro
  const product = project.budget.products.get(params.id);
  return {
    props: {
      product: JSON.stringify(product),
    },
  };
}

export default function index({ product }) {
  return <div>{JSON.parse(product).name}</div>;
}
