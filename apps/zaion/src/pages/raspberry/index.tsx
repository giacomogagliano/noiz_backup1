import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Key, Value } from "..";
import { project } from "../..";

const COLOR = 196;

const Area = styled.div`
  font-family: "Futura";
  height: 100vh;
  font-weight: 100;
  box-sizing: border-box;
  display: grid;
  border-radius: 1rem;
  background-color: hsl(${COLOR}, 65%, 95%);
  > *:not(:last-child) {
    margin-bottom: 0.2rem;
  }
`;

const PageProduct = styled.div`
  border: 0.1rem solid hsl(${COLOR}, 100%, 50%);
  max-width: 30rem;
  place-self: center;
  h4 {
    text-align: center;
  }
  #infos {
    padding: 0.5rem;
    div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      p {
        padding-right: 2rem;
      }
    }
  }
  &:last-child {
    border-radius: 1rem;
  }
`;
const RaspyImgBox = styled.div`
  container-type: inline-size;
  grid-template-columns: 1fr;
  margin: 0;
  padding: 2rem;
  img {
    grid-column: span 2;
    width: 100cqw;
  }
`;

export default function index() {
  const budget = project.budget;
  budget.getProductList();
  const rasp = budget.products.get("rasp");
  rasp.brand;
  rasp.description;
  rasp.unit_price;
  rasp.url;
  return (
    <Area>
      <PageProduct>
        <h4>{rasp.name}</h4>
        <div id="infos">
          <div>
            <Key>Product</Key>
            <Value>{`${rasp.name} ${rasp.model}`}</Value>
          </div>
          <div>
            <Key>Brand</Key>
            <Value>
              <Link href={rasp.brand_url}>{rasp.brand}</Link>
            </Value>
          </div>
          <div>
            <Key>Description</Key>
            <Value>{rasp.description}</Value>
          </div>
          <div>
            <Key>Price</Key>
            <Value>{rasp.unit_price.toLocaleString()}$</Value>
          </div>
          <div>
            <Key>Reseller</Key>
            <Link href={rasp.url}>
              <a>{rasp.url.hostname}</a>
            </Link>
          </div>
        </div>
        <RaspyImgBox>
          <img
            src="https://ae01.alicdn.com/kf/Hfc3ebd946279412099cf69bf0850c792S/Raspberry-Pi-4-18650-UPS-Shield-X703-UPS-Ultra-compatto-solo-per-Raspberry-Pi-4-modello.jpg_Q90.jpg_.webp"
            alt="raspberry Pi4"
          ></img>
        </RaspyImgBox>
      </PageProduct>
    </Area>
  );
}
