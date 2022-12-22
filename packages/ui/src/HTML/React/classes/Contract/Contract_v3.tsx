import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Label, LabelProps } from "../Basic";
import { Form } from "../Form";

enum layouts {
  main = "main",
}
enum styles {
  defaultStyle = "defaultStyle",
}
type layoutTypes = keyof typeof layouts;
type styleTypes = keyof typeof styles;

export interface Contract_v3PropsType
  extends BaseNoizProps<layoutTypes, styleTypes> {}

export interface Contract_v3Props
  extends BaseNoizProps<layoutTypes, styleTypes> {
  contractAddr: string;
  supply: number;
  owner: string;
  price: number;
  currency?: string;
}

export class Contract_v3Props extends BaseNoizProps<
  layoutTypes,
  styleTypes
> {}
export interface Contract_v3State
  extends BaseNoizState<Contract_v3Props> {}
export class Contract_v3State extends BaseNoizState<Contract_v3Props> {}

export interface Contract_v3
  extends BaseNoiz<
    layoutTypes,
    styleTypes,
    Contract_v3Props,
    Contract_v3State
  > {}

export class Contract_v3 extends BaseNoiz<
  layoutTypes,
  styleTypes,
  Contract_v3Props,
  Contract_v3State
> {
  static defaultProps: Contract_v3Props = {
    layout: layouts.main,
    style: styles.defaultStyle,
    contractAddr: "",
    owner: "",
    price: 10,
    supply: 1000,
  };

  constructor(props: Contract_v3Props) {
    super(props);
    let state = new Contract_v3State();
    state.layout = () => <></>;
    state.style = styled(this.Html)``;
    this.state = state;
  }
  useForm() {
    const [form, setForm] = useState({
      input1: { value: "string" },
      input2: { value: "string" },
    });
    const [value, setValue] = useState(0);
    const [amountToPay, setAmountToPay] = useState(0);
    return {
      value,
      setValue,
      form,
      setForm,
      amountToPay,
      setAmountToPay,
    };
  }

  main = (props: Contract_v3Props) => {
    const { contractAddr, owner, supply, price } = props;
    const { currency } = props;
    const { amountToPay, setAmountToPay } = this.useForm();

    const label1: LabelProps = {
      name: "quantity:",
      placeholder: "quantity",
      type: "number",
      handleChange: e => {
        let numberValue = new Number(
          e.target.value
        ).valueOf();
        setAmountToPay(numberValue * price);
      },
      min: 50,
      max: 100,
      step: 50,
    };
    const labels = {
      datas: [label1],
    };
    const datas = [{ Label: labels }];
    datas;

    const Section = this.Section;

    return (
      <div className={props.className}>
        <p>welcome to my contract</p>
        <h2>this is contract n°: {contractAddr}</h2>
        <div id="description">
          <p>
            Questi token sono creati come forma di
            pagamento per la prevendita degli NFT della
            discografia di Gotek. Il minting (la stampa),
            del token costerà 50USDC. Questi token avranno
            lo stesso valore. Per semplicità questi token
            non hanno virgole, e possono essere comprati a
            "pacchetti" di 50. Il costo di ogni token è
            reso piu basso dell'equivalenza di 1 USDC, in
            questo modo chi acquisisce i token ottiene uno
            sconto sul minting. Acquisendo questi token si
            potranno effetturare due azioni:
          </p>
          <ul>
            <li>minare gli NFT Propaganda</li>
            <li>
              ritirare un valore pari all'equivalenza 1
              Token = 1 USDC dal contratto in cui vengono
              depositati gli USDC del minting
            </li>
          </ul>
        </div>
        <div id="container">
          <Section id="supply:" value={supply}></Section>
          <Section id="owner:" value={owner}></Section>
          <Section
            id="price:"
            value={price}
            currency={currency}
          ></Section>
          <Form>
            <Label {...label1}></Label>
          </Form>
          <Section
            id="amount to pay:"
            value={amountToPay}
            currency={currency}
          ></Section>
        </div>
      </div>
    );
  };

  Section = (props: {
    id: string;
    value: string | number;
    currency?: string;
    children?: React.ReactNode;
  }) => (
    <section id={props.id}>
      <p>{props.id}</p>
      <p>{props.value}</p>
      {props.currency && <p>{props.currency}</p>}
    </section>
  );

  layouts = [
    new this.Layout({
      name: layouts.main,
      component: this.main,
    }),
  ];

  defaultStyle = styled(this.Html)`
    position: relative;
    text-align: center;

    #container {
      /* height: 100%; */
      margin-top: 4rem;
      display: grid;
      grid-auto-columns: max-content;
      place-content: center;
    }

    #description {
      margin-top: 1rem;

      ul {
        margin-top: 0.5rem;
        text-align: left;
        list-style-position: inside;
      }
    }

    section {
      display: inline;

      p:first-child {
        margin-right: 1rem;
      }

      p:nth-child(3) {
        margin-left: 0.3rem;
      }

      p {
        display: inline;
      }
    }
  `;

  styledlayouts = [
    new this.Style({
      name: styles.defaultStyle,
      style: this.defaultStyle,
    }),
  ];
}
