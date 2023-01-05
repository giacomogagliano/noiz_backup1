import React from "react";
import styled from "styled-components";
import { project } from "../index";

const COLOR = 196;

const Area = styled.div`
  font-family: "Futura";
  font-weight: 100;
  background-color: hsl(${COLOR}, 65%, 95%);
  padding: 1rem;
  border-radius: 1rem;
  display: grid;
  grid-auto-columns: 1fr;
  h1,
  h4,
  h5 {
    margin: 0;
  }
  h1 {
    padding-left: 0.5rem;
    margin-bottom: 0.2rem;
  }
  @media (max-aspect-ratio: 4/3) {
    font-size: 90%;
    div:nth-child(3) > {
      border-radius: 1rem 1rem 0 0;
    }
  }
  @media (min-aspect-ratio: 4/3) {
    font-size: 70%;
    div:nth-child(2) > {
      border-radius: 1rem 1rem 0 0;
    }
  }
`;

const Product = styled.div`
  background-color: hsl(${COLOR}, 60%, 98%);
  border-bottom: 0.1rem solid hsl(${COLOR}, 100%, 50%);
  padding: 0.5rem;
  &:last-child {
    border-radius: 0 0 1rem 1rem;
  }

  @media (max-aspect-ratio: 4/3) {
    &:nth-child(3) {
      border-radius: 1rem 1rem 0 0;
    }
    div {
      display: grid;
      grid-template-columns: 1fr 2fr;
    }
  }
  @media (min-aspect-ratio: 4/3) {
    &:nth-child(2) {
      border-radius: 1rem 1rem 0 0;
    }
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    /* p {
      display: inline;
      margin: 0;
      padding-right: 0.5rem;
    } */
    #table-title {
      display: none;
    }
    #num {
      text-align: end;
      padding-right: 0.5rem;
    }
    #totale {
      place-self: end;
    }
    #spazio {
      grid-column: span 3;
    }
  }
`;
const Key = styled.p`
  @media (max-aspect-ratio: 4/3) {
    display: inline;
    margin: 0;
    padding-right: 0.5rem;
    place-self: end;
    font-weight: bold;
    color: gray;
  }

  @media (min-aspect-ratio: 4/3) {
    display: none;
  }
`;
const Value = styled.p<{ num?: string }>`
  display: inline;
  margin: 0;
`;

const Head = styled(Product)`
  @media (max-aspect-ratio: 4/3) {
    display: none;
  }
`;

const Total = styled(Product)`
  background-color: hsl(${COLOR}, 38%, 60%);
  font-weight: bold;
  margin: 0;
  p {
    margin: 0;
  }
  @media (max-aspect-ration: 4/3) {
    display: none;
  }
`;
export default function index() {
  const products = project.budget.products;
  const budgetEntities = project.budget.budgetEntities;
  const productsonsale = project.income.products;

  return (
    <div>
      <Area>
        <h1>Budget</h1>
        <Head>
          <h4>Product</h4>
          <h4>Title</h4>
          <h4 id="num">Amount</h4>
          <h4 id="num">Unit price</h4>
          <h4 id="num">Sub-total</h4>
          <h4>Scope</h4>
        </Head>
        {(() => {
          let Elements = [];
          for (let entity of budgetEntities) {
            Elements.push(
              <Product>
                <h4 id="table-title">{entity[1].title}</h4>
                <div>
                  <Key>Product</Key>
                  <Value>{entity[1].product.name} </Value>
                </div>
                <div>
                  <Key>Title</Key>
                  <Value>{entity[1].title} </Value>
                </div>
                <div id="num">
                  <Key>Amount</Key>
                  <Value>{entity[1].amount.toLocaleString()} </Value>
                </div>
                <div id="num">
                  <Key>Unit Price</Key>
                  <Value>
                    {entity[1].product.unit_price.toLocaleString()}$
                  </Value>
                </div>
                <div id="num">
                  <Key>Sub-total</Key>
                  <Value>
                    {(
                      entity[1].product.unit_price * entity[1].amount
                    ).toLocaleString()}
                    $
                  </Value>
                </div>
                <div>
                  <Key>Scope</Key>
                  <Value>{entity[1].scope}</Value>
                </div>
              </Product>
            );
          }
          return <>{Elements}</>;
        })()}
        <Total>
          <p id="spazio"></p>
          <p id="totale">TOTAL</p>
          <p id="num">{project.budget.totalBudget().toLocaleString()}$</p>
        </Total>
      </Area>
      <br />
      <Area>
        <h1>Income</h1>
        <Head>
          <h4>Product</h4>
          <h4></h4>
          <h4 id="num">Stock</h4>
          <h4 id="num">Sale Price</h4>
          <h4 id="num">Sub-total</h4>
          <h4 id="num">MarkUp</h4>
        </Head>
        {(() => {
          let Elements = [];
          for (let prod of productsonsale) {
            Elements.push(
              <Product>
                <h4 id="table-title">{prod[1].product.name}</h4>
                <div>
                  <Key>Product</Key>
                  <Value>{prod[1].product.name} </Value>
                </div>
                <div>
                  <p></p>
                </div>
                <div id="num">
                  <Key>Stock</Key>
                  <Value>{prod[1].stock}</Value>
                </div>
                <div id="num">
                  <Key>Sale Price</Key>
                  <Value>{prod[1].sale_price}$</Value>
                </div>
                <div id="num">
                  <Key>Sub-total</Key>
                  <Value>{prod[1].sale_price * prod[1].stock}$</Value>
                </div>
                <div>
                  <Key>MarkUp</Key>
                  <Value>{prod[1].markup_perc}</Value>
                </div>
              </Product>
            );
          }
          return <>{Elements}</>;
        })()}
        <Total>
          <p id="spazio"></p>
          <p id="totale">TOTAL</p>
          <p id="num">{project.income.gross.toLocaleString()}$</p>
        </Total>
      </Area>
    </div>
  );
}
