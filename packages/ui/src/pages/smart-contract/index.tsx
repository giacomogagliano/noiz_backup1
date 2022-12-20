import { EVMweb } from "@zionstate/database/dist/EVM";
import React, {
  ChangeEvent,
  Component,
  FC,
  FormEvent,
  MouseEvent,
} from "react";
import styled from "styled-components";
import { Icon } from "../../HTML/React/classes";

// TODO ricevere da smart contract
// TODO risolvere problema styled chiamato in component

enum StateMutabilities {
  view = "view",
  nonpayable = "nonpayable",
}
type StateMutabilitieTypes =
  keyof typeof StateMutabilities;

interface CollapsableId {
  id: number | null;
  isCollapsed?: boolean;
}

interface HandleCollapse {
  handleCollapse: (
    e: MouseEvent<HTMLButtonElement>
  ) => void;
}

interface AbiItem {
  name?: string;
  inputs?: {
    internalType?: string;
    name: string;
    type: string;
  }[];
  stateMutability?: string;
  type?: string;
}

interface CollapsableAbiItem
  extends CollapsableId,
    AbiItem,
    HandleCollapse {
  hasInputs?: boolean;
  isWrite?: boolean;
}
class CollapsableAbiItem {
  constructor(props?: AbiItem) {
    if (!props) return;
    this.inputs = props.inputs;
    this.name = props.name;
    this.stateMutability = props.stateMutability;
    this.hasInputs = props.inputs?.length! > 0;
    this.isWrite =
      props.stateMutability === "view" ? false : true;
  }
}

type SmartContractProps = {
  className?: string;
  children?: React.ReactNode;
  contract?: typeof EVMweb["prototype"]["newNoizContractFactories"]["SimpleStorage"]["abi"];
};

interface SmartContractState {
  input: string;
  number: string;
  isCollapsed?: boolean;
  contract?: CollapsableAbiItem[];
  AbiItems?: JSX.Element[];
  Content: FC;
}
class SmartContractState {}

class SmartContract extends Component<
  SmartContractProps,
  SmartContractState
> {
  constructor(props: SmartContractProps) {
    super(props);
    let abiItem = new CollapsableAbiItem();
    abiItem.id = null;
    let state = new SmartContractState();
    state.input = "";
    state.number = "";
    state.isCollapsed = true;
    state.contract = [abiItem];
    state.AbiItems = [<></>];
    state.Content = () => <></>;
    this.state = state;
  }

  setInput = (input: string) => this.setState({ input });

  setNumber = (number: string) =>
    this.setState({ number });

  setIsCollapsed = (isCollapsed: boolean) =>
    this.setState({ isCollapsed });

  setIsCollapsedById = (id: number) => {
    if (!this.state.contract) return;
    let contractClone = [...this.state.contract];
    const prevState = this.state.contract[id].isCollapsed;
    contractClone[id].isCollapsed = !prevState;
    this.setState({ contract: contractClone });
  };

  setContract = (contract: CollapsableAbiItem[]) =>
    this.setState({ contract });

  setAbiItems = (AbiItems: JSX.Element[]) =>
    this.setState({ AbiItems });

  setContent = (Content: FC) => this.setState({ Content });

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setInput(e.target.value);
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setNumber(this.state.input);
  };

  handleCollapseById =
    (id: number) => (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      this.setIsCollapsedById(id);
    };

  handleCollapse = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.setIsCollapsed(!this.state.isCollapsed);
  };

  Collapsed = (
    props: SmartContractProps &
      CollapsableAbiItem &
      HandleCollapse
  ) => {
    return (
      <form
        onSubmit={this.handleSubmit}
        className={props.className}
      >
        <div id="write-function">
          <div id="input-clpsd">
            <button id="field">{props.name}</button>
            {props.inputs && (
              <input
                id="argument"
                type="number"
                onChange={this.handleChange}
              />
            )}
          </div>
          <button
            id="expand-button"
            onClick={props.handleCollapse}
          >
            {props.inputs && <Icon arrowBack></Icon>}
          </button>
        </div>
      </form>
    );
  };

  orange = 27;
  complementar = 180 + this.orange;
  primary2 = this.orange + 120;
  primary3 = this.orange + 240;
  writeColor = `hsl(${this.orange}, 85%, 54%)`;
  writeBorderColor = `hsl(${this.orange}, 85%, 61%)`;
  readColor = `hsl(${this.complementar},78%,8%)`;
  readBorderColor = `hsl(${this.complementar}, 78%, 11%)`;
  areaBgColor = `hsl(${this.complementar}, 74%, 12%)`;
  hover = `hsl(${this.orange}, 56%, 77%)`;
  focus = `hsl(${this.orange}, 98%, 50%)`;
  active = `hsl(${this.complementar}, 72%, 31%)`;

  StyledCollapsed = styled(this.Collapsed)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    #write-function:not(:first-child) {
      padding-top: 0.5rem;
    }
    #write-function {
      position: relative;
      display: inline-flex;
      width: 100%;
      justify-content: space-between;
      #input-clpsd:not(:last-child) {
        padding: 0.3rem;
      }
      #input-clpsd {
        * {
          padding: 0.7rem;
        }
        width: 100%;
        #field {
          width: 30%;
          background-color: ${props => {
            return props.isWrite
              ? this.writeColor
              : this.readColor;
          }};
          border-radius: 0.3rem 0 0 0.3rem;
          color: #eef2f2;
          border-color: #f3f1ef;
          border-right: none;
          border-left: 0.1rem solid
            ${props => {
              return props.isWrite
                ? this.writeBorderColor
                : this.readBorderColor;
            }};
          border-top: 0.1rem solid
            ${props => {
              return props.isWrite
                ? this.writeBorderColor
                : this.readBorderColor;
            }};
          border-bottom: 0.1rem solid
            ${props => {
              return props.isWrite
                ? this.writeBorderColor
                : this.readBorderColor;
            }};
          font-size: 100%;
          ${props =>
            props.isWrite || props.hasInputs
              ? ""
              : `border-right: 0.1rem solid ${props => {
                  return props.isWrite
                    ? this.writeBorderColor
                    : this.readBorderColor;
                }};
                border-radius: 0.3rem 0.3rem 0.3rem 0.3rem;
              `}
        }
        #field:hover  {
          background-color: ${this.hover};
          color: #0b0b0b;
        }
        #field:focus {
          background-color: ${this.focus};
        }
        #field:active {
          background-color: ${this.active};
        }
        #argument {
          width: 62%;
          border: none;
          border-radius: 0 0.3rem 0.3rem 0;
        }
      }
      svg {
        height: 24px;
        width: 24px;
      }
      #expand-button {
        padding: 0;
        background-color: transparent;
        border: none;
      }
    }
  `;

  ExpandedInput = (props: {
    name: string;
    type: string;
    handleChange: (
      e: ChangeEvent<HTMLInputElement>
    ) => void;
  }) => {
    let type: "text" | "number";
    switch (props.type) {
      case "address":
        type = "text";
        break;
      case "string":
        type = "text";
        break;
      case "uint256":
        type = "number";
        break;
      default:
        type = "text";
        break;
    }
    return (
      <div id="input-exp">
        <p>{props.type}</p>
        <div id="field-exp">{props.name}</div>
        <input
          id="argument-exp"
          type={type}
          onChange={props.handleChange}
        ></input>
      </div>
    );
  };

  Expanded = (
    props: SmartContractProps &
      CollapsableAbiItem &
      HandleCollapse
  ) => {
    const ExpandedInput = this.ExpandedInput;
    return (
      <form
        onSubmit={this.handleSubmit}
        className={props.className}
      >
        <div id="write-function-exp">
          <div id="title-exp">
            <p id="title-text">{props.name}</p>
            <button
              id="expand-button"
              onClick={props.handleCollapse}
            >
              <Icon arrowBack></Icon>
            </button>
          </div>
          {props.inputs!.map((e, idx) => {
            const props = {
              name: e.name,
              handleChange: this.handleChange,
              type: e.type,
            };
            return (
              <ExpandedInput
                {...props}
                key={idx + e.name}
              />
            );
          })}
          <div id="button-exp">
            <button id="transact-btn">transact</button>
          </div>
        </div>
      </form>
    );
  };

  StyledExpanded = styled(this.Expanded)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    #write-function-exp {
      width: 100%;
      height: 100%;
      color: #617279;
      #title-exp {
        display: flex;
        justify-content: space-between;
        place-items: center;
        padding-bottom: 0.5rem;
        p {
          padding-left: 0.5rem;
        }
        #title-text {
          grid-area: title;
        }
        #expand-button {
          padding: 0;
          background-color: transparent;
          border: none;
        }
        svg {
          width: 24px;
          height: 24px;
        }
      }
      #input-exp {
        display: flex;
        justify-content: flex-end;
        padding-bottom: 0.5rem;
        * {
          padding: 0.7rem;
        }
        #field-exp {
          grid-area: smallTitle;
        }
        #argument-exp {
          grid-area: input;
        }
      }
      #button-exp {
        display: flex;
        justify-content: flex-end;
        #transact-btn {
          border: none;
          padding-left: 1rem;
          padding-right: 1rem;
          font-size: 100%;
          background-color: #ef830f;
          padding: 0.7rem;
          border-radius: 0.3rem;
          color: #f3f1ef;
        }
      }
    }
  `;

  Layout = (props: SmartContractProps) => (
    <div className={props.className}>
      <div id="area">{props.children}</div>
    </div>
  );

  Style = styled(this.Layout)`
    #area {
      width: 30em;
      padding: 2rem;
      border: 0.1rem solid;
      border-color: hsl(197, 84%, 16%);
      background-color: hsl(197, 84%, 12%);
      border-radius: 0.3rem;
    }
  `;

  sort = (a: AbiItem, b: AbiItem) => {
    let level = 2;
    const isAWrite = a.stateMutability !== "view";
    const hasAInputs = a.inputs
      ? a.inputs.length > 0
        ? true
        : false
      : false;
    const hasBInputs = b.inputs
      ? b.inputs.length > 0
        ? true
        : false
      : false;
    const isBWrite = b.stateMutability !== "view";
    const condition1 = isAWrite === isBWrite;
    const condition2 = hasAInputs === hasBInputs;

    if (condition1) level - 1;
    if (condition2) level - 1;

    return condition1 && condition2 ? 1 : -1;
  };

  filterUndefNames = (e: AbiItem) => {
    const cond = e.name !== undefined;
    return cond ? true : false;
  };

  filterUndefMutability = (e: AbiItem) => {
    const cond2 = e.stateMutability === undefined;
    return cond2 ? false : true;
  };

  collapsableItems = (a: AbiItem, idx: number) => {
    var itm = new CollapsableAbiItem(a);
    itm.isCollapsed = true;
    itm.handleCollapse = this.handleCollapseById(idx);
    itm.id = idx;
    return itm;
  };

  makeCollapsableItems = (propsContract: AbiItem[]) => {
    propsContract.sort(this.sort);
    propsContract = propsContract
      .filter(this.filterUndefNames)
      .filter(this.filterUndefMutability);
    const contract = propsContract.map(
      this.collapsableItems
    );
    return contract;
  };

  componentDidUpdate(
    p: SmartContractProps,
    s: SmartContractState,
    sn
  ) {
    if (p.contract !== this.props.contract) {
      if (this.state.contract) {
        if (!this.props.contract) return;
        const mkCollItems = this.makeCollapsableItems;
        let propsContract = this.props.contract;
        const contract = mkCollItems(propsContract);
        this.setContract(contract);
      }
    }
    if (s.contract !== this.state.contract) {
      if (this.state.contract) {
        const abiItems = this.state.contract;
        const AbiItems: JSX.Element[] = abiItems.map(
          (i, idx) => {
            const isColl = i.isCollapsed;
            const hasInputs = i.hasInputs;
            const coll_key = i.id + i.name! + "_c";
            const exp_key = i.id + i.name! + "_e";
            const StyledCollapsed = this.StyledCollapsed;
            const StyledExpanded = this.StyledExpanded;
            i.inputs = hasInputs ? i.inputs : undefined;
            return isColl ? (
              <StyledCollapsed key={idx} {...i} />
            ) : (
              <StyledExpanded key={idx} {...i} />
            );
          }
        );

        this.setAbiItems(AbiItems);
        this.setContent(() => <>{AbiItems}</>);
      }
    }
  }

  render() {
    const AbiItems = this.state.AbiItems;
    let Content = this.state.Content;
    return (
      <this.Style>
        <Content></Content>
      </this.Style>
    );
  }
}

export default function index(props) {
  return (
    <SmartContract
      contract={props.contract}
    ></SmartContract>
  );
}
