import { EVMweb } from "@zionstate/database/EVM";
import { types } from "@zionstate/database/Blockchain";
import { BigNumber } from "ethers";
import React, { MouseEvent } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Label, LabelProps } from "../Basic";
import { Form } from "../Form";
import { dataGuard } from "@zionstate/zionbase/utils";

type USDC = types.contracts.USDC;
type Propaganda_presale =
  types.contracts.Propaganda_Presale;

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
  evm?: EVMweb;
}

export class Contract_v3Props extends BaseNoizProps<
  layoutTypes,
  styleTypes
> {}
export interface Contract_v3State
  extends BaseNoizState<Contract_v3Props> {
  max_supply: number;
  supply: number;
  owner: string;
  price: number;
  signer_address: string;
  signer_allowance: number;
  isAllowance?: boolean | null;
  usdc: USDC | null;
  propaganda_presale: Propaganda_presale | null;
  txLogMess: string;
  isTxLoading: boolean;
}
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
    state.max_supply = Infinity;
    state.supply = 0;
    state.owner = "";
    state.price = props.price;
    state.signer_address = "";
    state.isAllowance = null;
    state.usdc = null;
    state.propaganda_presale = null;
    state.txLogMess = "not for sale";
    state.isTxLoading = false;
    this.state = state;
  }
  setMax_supply = (max_supply: number) =>
    this.setState({ max_supply });

  setSupply = (supply: number) =>
    this.setState({ supply });

  setOwner = (owner: string) => this.setState({ owner });

  setPrice = (price: number) => this.setState({ price });

  setSigner_address = (signer_address: string) =>
    this.setState({ signer_address });

  setSigner_allowance = (signer_allowance: number) =>
    this.setState({ signer_allowance });

  setIsAllowance = (isAllowance: boolean) =>
    this.setState({ isAllowance });

  setUsdc = (usdc: USDC) => this.setState({ usdc });

  setPropa = (propaganda_presale: Propaganda_presale) =>
    this.setState({ propaganda_presale });

  setTxLogMess = (txLogMess: string) =>
    this.setState({ txLogMess });

  setIsTxLoading = (isTxLoading: boolean) =>
    this.setState({ isTxLoading });

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

  usdc_address =
    "0x338f4f701bf4d4175ace7d79c27d71cd998f12dc";
  user1 = "0x215872786B467B23E788F482461382bd3047731e";
  user2 = "0x152A530E4B9a76ba83fb2Ec1992187329E16a30A";
  propa_presale =
    "0xb78663a2fD1Ed91e6df2a06910508d2b1F1A1AC5";

  formatUsdc = (big: BigNumber) => {
    return new Number(big._hex).valueOf() / 1000000;
  };

  formatPropa = (big: BigNumber) =>
    new Number(big._hex).valueOf();

  handleDeployUscd =
    (evm?: EVMweb) =>
    (e: MouseEvent<HTMLButtonElement>) => {
      this.setIsTxLoading(true);
      this.setTxLogMess("loading the usdc contract");
      e.preventDefault();
      if (!evm) throw new Error("no evm");
      const Usdc = evm.contractFactories.USDC;
      Usdc.deploy().then(usdc => {
        const tx = usdc.deployTransaction;
        if (tx) {
          console.log(tx);
          this.setIsTxLoading(false);
          this.setTxLogMess(tx.confirmations.toString());
          setTimeout(() => {
            this.setTxLogMess("not for sale");
          }, 5000);
        }
        this.setUsdc(usdc);
      });
    };

  handleMintUsdc =
    (recipient: string, amount: number) =>
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const usdc = this.state.usdc;
      if (usdc === null)
        throw new Error("no usdc contract");
      usdc.on("Transfer", e => {
        console.log("trasnferred:", e);
      });
      usdc
        .mint(recipient, BigNumber.from(amount))
        .then(e => {
          console.log("transaction", e);
        })
        .catch(() => this.setTxLogMess("tx rejected"));
    };

  handleAttachUsdc =
    (evm?: EVMweb) =>
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      evm = dataGuard(evm, "no evm");
      const Usdc = evm.contractFactories.USDC;
      const res = Usdc.attach(this.usdc_address);
      console.log(res);
      this.setUsdc(res);
    };

  handleDeployProps =
    (evm?: EVMweb) =>
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      evm = dataGuard(evm, "no evm");
      const Propa =
        evm.contractFactories.Propaganda_presale;
      Propa.deploy(
        this.usdc_address,
        this.user1,
        BigNumber.from(700_000)
      ).then(e => {
        console.log(e);
      });
    };

  script = async () => {
    const evm = this.props.evm;
    console.log(evm);

    if (evm) {
      console.log(evm);
      const factories = evm.contractFactories;
      const Usdc = factories.USDC;
      const Propag = factories.Propaganda_presale;
      const usdc = Usdc.attach(this.usdc_address);
      this.setUsdc(usdc);
      usdc.on("Transfer", e => console.log(e));
      const balance = await usdc.balanceOf(this.user1);
      const balance2 = await usdc.balanceOf(this.user2);
      console.log(
        this.formatUsdc(balance),
        this.formatUsdc(balance2)
      );
      const prop = Propag.attach(this.propa_presale);
      this.setPropa(prop);
      prop.on("Purchase", e => console.log("Purchase", e));
      const price = await prop.price();
      this.setPrice(this.formatUsdc(price));
      const supply = await prop.totalSupply();
      this.setSupply(this.formatPropa(supply));
      const max_supply = await prop.cap();
      this.setMax_supply(this.formatPropa(max_supply));
      const owner = await prop.owner();
      this.setOwner(owner);
      const signerAddres = await evm.signer.getAddress();
      this.setSigner_address(signerAddres);
      const signerAllowance = await usdc.allowance(
        signerAddres,
        this.propa_presale
      );
      this.setSigner_allowance(
        this.formatUsdc(signerAllowance)
      );
      console.log(signerAllowance);
    }
  };

  handleAllowance = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const evm = this.props.evm;
    if (evm) {
      const Usdc = evm.contractFactories.USDC;
      const usdc = Usdc.attach(this.usdc_address);
      usdc.approve(
        this.propa_presale,
        BigNumber.from(100_000_000)
      );
    }
  };

  handleBuy = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const evm = this.props.evm;
    if (evm) {
      const Propa =
        evm.contractFactories.Propaganda_presale;
      const propa = Propa.attach(this.propa_presale);
      propa.buy1();
    }
    console.log();
  };

  main = (props: Contract_v3Props) => {
    // const { price } = props;
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
        let amountToPay = numberValue * this.state.price;
        setAmountToPay(amountToPay);
        if (this.state.signer_allowance < amountToPay) {
          console.log("no cash");
          this.setIsAllowance(false);
        }
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
        <div id="tx">
          <p>{this.state.txLogMess}</p>
        </div>
        <div id="overlay">
          <button
            onClick={this.handleDeployUscd(this.props.evm)}
            id="dep-usdc"
            disabled={this.state.usdc ? true : false}
          >
            deploy usdc
          </button>
          <button
            onClick={this.handleAttachUsdc(this.props.evm)}
            id="attach-usdc"
            disabled={this.state.usdc ? true : false}
          >
            attach usdc
          </button>
          <button
            onClick={this.handleMintUsdc(
              this.user2,
              100_000_000
            )}
          >
            mint to user2
          </button>
          <button
            onClick={this.handleDeployProps(
              this.props.evm
            )}
          >
            deploy propa
          </button>
        </div>
        <p>welcome to my contract</p>
        <h2>this is contract n??: {this.propa_presale}</h2>
        <div id="description">
          <p>
            Questi token sono creati come forma di
            pagamento per la prevendita degli NFT della
            discografia di Gotek. Il minting (la stampa),
            di un NFT "Gotek - Propaganga" coster?? 50USDC.
            Questi token avranno lo stesso valore. Per
            semplicit?? questi token non hanno virgole, e
            possono essere comprati a "pacchetti" di 50. Il
            costo di ogni token ?? reso piu basso
            dell'equivalenza di 1 USDC, in questo modo chi
            acquisisce i token ottiene uno sconto sul
            minting pari al 30%. Acquisendo questi token si
            potr?? effettuare una delle seguenti azioni:
          </p>
          <ul>
            <li>minare gli NFT Propaganda</li>
            <li>
              ritirare un valore pari al valore del minting
              di un token dalla cassa dello contratto che
              si occuper?? della vendita
            </li>
          </ul>
        </div>
        <div id="container">
          <Section
            id="max supply:"
            value={this.state.max_supply}
          ></Section>
          <Section
            id="supply:"
            value={this.state.supply}
          ></Section>
          <Section
            id="owner:"
            value={this.state.owner}
          ></Section>
          <Section
            id="price:"
            value={this.state.price}
            currency={currency}
          ></Section>
          <div id="allowance">
            <p>i will stalk your allowance</p>
            <button onClick={this.handleAllowance}>
              allow
            </button>
          </div>
          <Form>
            <Label {...label1}></Label>
          </Form>
          <Section
            id="amount to pay:"
            value={amountToPay}
            currency={currency}
          ></Section>
          <button id="buy-btn" onClick={this.handleBuy}>
            Buy
          </button>
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
    display: grid;
    width: fit-content;
    #tx {
      width: 7rem;
      padding: 0.5rem;
      background-color: ${props => {
        return this.state.isTxLoading
          ? props.theme.palette_ryb.orange[60]
          : props.theme.palette_ryb.blue_green[60];
      }};
      position: absolute;
    }
    #overlay {
      margin-top: 1rem;
      display: grid;
      position: fixed;
      right: 5px;
      > *:not(:last-child) {
        margin-bottom: 0.3rem;
      }
      #dep-usdc:disabled,
      #attach-usdc:disabled {
        background-color: red;
        cursor: default;
      }
      button {
        padding: 0.5rem;
        border: none;
        border-radius: 1rem;
        cursor: pointer;
      }
    }
    #container {
      /* height: 100%; */
      > *:not(:last-child) {
        margin-bottom: 0.5rem;
      }
      place-self: center;
      padding: 2rem;
      margin-top: 4rem;
      border-radius: 1rem;
      background-color: ${props =>
        props.theme.palette_ryb.blue_green[10]};
      border: 0.1rem solid
        ${props => props.theme.palette_ryb.blue_green[20]};
      display: grid;
      grid-auto-columns: max-content;
      place-content: center;
      #buy-btn {
        place-self: center;
        padding-top: 0.5rem;
        min-width: 10rem;
        padding-bottom: 0.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
        border-radius: 2rem;
        border: 0.1rem solid
          ${props => props.theme.palette_ryb.orange[40]};
        background-color: ${props =>
          props.theme.palette_ryb.orange[30]};
        color: ${props => props.theme.textColor};
        cursor: pointer;
      }
      form {
        place-self: center;
      }
      #allowance {
        place-self: center;
        place-items: center;
        color: ${props =>
          props.theme.palette_ryb.blue_green
            .setSaturation(20)
            .setBrightness(70).value};
        font-size: 12px;
        display: ${() => {
          if (this.state.isAllowance === null)
            return "none";
          if (this.state.isAllowance === false)
            return "flex";
        }};
        button {
          display: inline;
          margin-left: 0.2rem;
          padding-top: 0.1rem;
          padding-bottom: 0.1rem;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          border: none;
          border-radius: 1rem;
          background-color: #ffffff56;
          cursor: pointer;
        }
      }
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

  didMount = () => {
    if (this.state.usdc) this.script();
    if (!this.state.usdc) {
      const storedAdd = this.usdc_address;
      const evm = this.props.evm;
      const Usdc = evm?.contractFactories.USDC;
      const res = Usdc?.attach(storedAdd);
      console.log("i will do what you want", res);
      res
        ?.balanceOf(this.user1)
        .then(() => {
          // in questo caso far partire lo script
          this.script();
        })
        .catch(e => {
          console.log(e);
        });
    }
  };
  didUpdate = (p: Contract_v3Props) => {
    const curr = this.props.evm;
    const prev = p.evm;
    const cond = curr !== prev;
    const cond2 = this.state.usdc !== null;
    if (cond) {
      if (cond2) this.script();
      else {
        // check if contract exists at stored address
        const storedAdd = this.usdc_address;
        const evm = this.props.evm;
        const Usdc = evm?.contractFactories.USDC;
        const res = Usdc?.attach(storedAdd);
        console.log("i will do what you want", res);
        res
          ?.balanceOf(this.user1)
          .then(() => {
            // in questo caso far partire lo script
            this.script();
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  };
}
