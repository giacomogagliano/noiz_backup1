import React, {
  Dispatch,
  FC,
  SetStateAction,
} from "react";
import {
  DefaultTheme,
  ThemeProvider,
} from "styled-components";
import { GlobalStyle } from "../../../style/Global";
import { darkTheme, lightTheme } from "../../../themes";
import styled from "styled-components";
import {
  detectEthereumProvider,
  EVMweb,
  IEVMweb,
  MetaMaskEthereumProvider,
} from "@zionstate/database/EVM";
import { ethers } from "ethers";
import {
  detect,
  getSignerAddress,
  handleAccountsChangedCallbackFactory,
  handleAccountsChangedFactory,
  handleNetworkChange,
  listAccounts,
  listAccountsCallbacksFactory,
  requestAccounts,
} from "../../../lib/hooks";
import { WindowEthRequired } from "../../../lib/hooks/useEthereum/useEthereum_v2";
import { dataGuard } from "@zionstate/zionbase/utils";

////////ETH

// type useEthereumData_v2 = {
//   contractAddress: string;
//   connectMetamaskMessage: string;
//   metamaskNotInstalled: string;
// };

//////////

const theme = lightTheme;
// const dark = darkTheme;

enum layouts {
  main = "main",
  istia = "istia",
  test = "test",
}
enum styles {
  defaultStyle = "defaultStyle",
}
enum themes {
  dark = "dark",
  light = "light",
}

export type DefaultThemizeUnion<T extends string> = {
  [props in T]: DefaultTheme;
};

type layoutTypes = keyof typeof layouts;
type styleTypes = keyof typeof styles;
type themeTypes = keyof typeof themes;
type Themes = DefaultThemizeUnion<themeTypes>;

interface DefaultNextApp {
  Component: FC;
  pageProps: any;
}

export interface NoizApp_v2Props
  extends BaseNoizProps<layoutTypes, styleTypes>,
    DefaultNextApp {}

export class NoizApp_v2Props extends BaseNoizProps<
  layoutTypes,
  styleTypes
> {}

export interface NoizApp_v2State
  extends BaseNoizState<NoizApp_v2Props> {
  theme: DefaultTheme;
  prefersColorScheme: keyof Themes;
  // metamask
  isMetamask: boolean;
  isConnected: boolean;
  buttonMess: string;
  signerAddress: string | null;
  contractAddress: string | null;
  contract: ethers.Contract | null;
  contractFactory:
    | EVMweb["contractFactories"][number]
    | null;
  provider: ethers.providers.Web3Provider | null;
  metamask: MetaMaskEthereumProvider | null;
  evm: IEVMweb | null;
  handleClick: () => void;
}

export class NoizApp_v2State extends BaseNoizState<NoizApp_v2Props> {}

export interface NoizApp_v2
  extends BaseNoiz<
    layoutTypes,
    styleTypes,
    NoizApp_v2Props,
    NoizApp_v2State
  > {
  themes: Themes;
}

export class NoizApp_v2 extends BaseNoiz<
  layoutTypes,
  styleTypes,
  NoizApp_v2Props,
  NoizApp_v2State
> {
  static BUTTON_MESSAGE1 = "no connected";
  static CONNECT_METAMASK = "connect metamask";
  static METAMASK_NOT_INSTALLED =
    "no metamask installed, plase install";
  // static getDerivedStateFromProps(props, state) {}
  static defaultProps = {
    layout: layouts.main,
    style: styles.defaultStyle,
  };

  themes: Themes = { dark: darkTheme, light: lightTheme };

  constructor(props: NoizApp_v2Props) {
    super(props);
    const state = new NoizApp_v2State();
    state.prefersColorScheme = "light";
    state.layout = () => <></>;
    state.style = styled(this.Html)``;
    state.isMetamask = false;
    state.isConnected = false;
    state.buttonMess = NoizApp_v2.BUTTON_MESSAGE1;
    state.signerAddress = null;
    state.contract = null;
    state.contractAddress =
      "0x3DEABA8Ab7192FEa543539C4A717b94022862d34";
    state.contractFactory = "ERC1155IndividualURI";
    state.provider = null;
    state.metamask = null;
    state.evm = null;
    state.handleClick = () => console.log("anvedi");

    this.state = state;
  }
  main = (props: { Component: FC }) => {
    const { Component } = props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component></Component>
      </ThemeProvider>
    );
  };

  test = (props: NoizApp_v2Props) => (
    <div className={props.className}>
      test
      <props.Component></props.Component>
    </div>
  );

  istia({ Component, pageProps }: NoizApp_v2Props) {
    const Layout = this.standard1;
    return (
      <ThemeProvider theme={this.state.theme}>
        <GlobalStyle />
        <Layout>
          <header>
            I am the header
            <button onClick={this.state.handleClick}>
              {this.state.buttonMess}
            </button>
            <button onClick={this.toggleTheme}>
              {this.state.prefersColorScheme === "dark"
                ? "light"
                : "dark"}
            </button>
          </header>
          <section id="content">
            <Component {...pageProps}></Component>
          </section>
          <footer>I am the footer</footer>
        </Layout>
      </ThemeProvider>
    );
  }

  layouts = [
    new this.Layout({
      name: layouts.main,
      component: this.main.bind(this),
    }),
    new this.Layout({
      name: layouts.istia,
      component: this.istia.bind(this),
    }),
    new this.Layout({
      name: layouts.test,
      component: this.test.bind(this),
    }),
  ];

  defaultStyle = styled(this.Html)``;

  bgcolor = `hsl(${210 + 90}, 55%, 75%)`;

  standard1 = styled.div`
    display: grid;
    grid-template-rows: 10vh 80vh 10vh;
    overflow: auto;
    grid-template-areas:
      "h"
      "content"
      "f";
    header {
      background-color: ${this.bgcolor};
    }
    #content {
      container-type: size;
      grid-area: content;
      place-items: center;
      width: 100%;
      overflow: auto;
      display: grid;
      background-color: ${() =>
        this.state.theme.backgroundColor};
    }
    footer {
      background-color: ${this.bgcolor};
    }
  `;

  styledlayouts = [
    new this.Style({
      name: styles.defaultStyle,
      style: this.defaultStyle,
    }),
  ];

  setTheme(theme: DefaultTheme) {
    this.setState({ theme });
  }

  setPrefersColorScheme(prefersColorScheme: themeTypes) {
    this.setState({
      prefersColorScheme,
    });
  }

  handleToggleTheme(prop: [themeTypes, themeTypes]) {
    const prefersColorScheme1 = prop[0];
    const prefersColorScheme2 = prop[1];

    this.state.prefersColorScheme == prefersColorScheme1
      ? this.setPrefersColorScheme(prefersColorScheme2)
      : this.setPrefersColorScheme(prefersColorScheme1);
  }

  toggleTheme = () => {
    this.state.prefersColorScheme === "dark"
      ? this.setPrefersColorScheme("light")
      : this.setPrefersColorScheme("dark");
  };

  setMetamask = (metamask: MetaMaskEthereumProvider) => {
    this.setState({ metamask });
    return this;
  };

  setIsConnected = (isConnected: boolean) => {
    this.setState({ isConnected });
    return this;
  };

  setIsMetamask = (isMetamask: boolean) => {
    this.setState({ isMetamask });
    return this;
  };

  setButtonMess = (buttonMess: string) => {
    this.setState({ buttonMess });
    return this;
  };

  setEvm = (evm: EVMweb) => {
    this.setState({ evm });
    return this;
  };

  setProvider = (
    provider: ethers.providers.Web3Provider
  ) => {
    this.setState({ provider });
    return this;
  };

  setHandleClick = (handleClick: () => void) => {
    this.setState({ handleClick });
    return this;
  };

  setContract = (contract: ethers.Contract) => {
    this.setState({ contract });
    return this;
  };

  setSignerAddress = (signerAddress: string) => {
    this.setState({ signerAddress });
    return this;
  };

  EVMweb = EVMweb;

  handleConnection = () => {
    const isConnected = this.state.isConnected;
    const metamask = this.state.metamask;
    const connectMess = NoizApp_v2.CONNECT_METAMASK;
    const setButtonMess = this.setButtonMess;
    const evm = this.state.evm;
    const setSignerAddress = this.setSignerAddress;
    if (!isConnected && metamask && connectMess)
      setButtonMess(connectMess);
    if (isConnected && evm)
      getSignerAddress(evm.signer, [
        setButtonMess,
        setSignerAddress,
      ]);
  };

  listAccounts = (metamask: MetaMaskEthereumProvider) => {
    const provider = this.state.provider;
    const setIsConnected = this.setIsConnected;
    const setButtonMess = this.setButtonMess;
    const handleAccountsChangedCallbacks =
      handleAccountsChangedCallbackFactory(
        setIsConnected as Dispatch<
          SetStateAction<boolean>
        >,
        setButtonMess as Dispatch<SetStateAction<string>>,
        provider
      );
    const handleAccountsChanged =
      handleAccountsChangedFactory(
        listAccounts,
        provider,
        handleAccountsChangedCallbacks
      );
    const listAccountsCallbacks =
      listAccountsCallbacksFactory(
        this.setIsConnected as Dispatch<
          SetStateAction<boolean>
        >
      );
    listAccounts(this.state.provider, [
      listAccountsCallbacks,
    ]);
    metamask.on("accountsChanged", handleAccountsChanged);
  };

  initizalizeWeb3 = () => {
    const isMetamask = this.state.metamask;
    const contract = this.state.contractFactory;

    if (!isMetamask) return;
    if (!contract) throw new Error("no contract factory");
    const evm = new this.EVMweb({
      window: window as WindowEthRequired,
    });
    const contractAddress = this.state.contractAddress;
    const factory = evm.contractFactories[contract];
    const provider = evm.provider;
    provider.on("network", this.handleNetworkChange);
    this.setEvm(evm)
      .setProvider(provider)
      .setHandleClick(requestAccounts(provider))
      .setContract(factory.attach(contractAddress));
  };

  handleNetworkChange = handleNetworkChange;

  handleMetamaskDetected = (metamask: any) => {
    this.setMetamask(metamask);
    this.setIsMetamask(true);
  };

  handleMetamaskNotDetected = () =>
    this.setButtonMess(NoizApp_v2.METAMASK_NOT_INSTALLED);

  detectEth = () => {
    const metamaskDetected = this.handleMetamaskDetected;
    detect(window, detectEthereumProvider)
      .then(metamaskDetected)
      .catch(this.handleMetamaskNotDetected);
  };

  hasUpdated<T>(prev: T, curr: T) {
    return prev !== curr;
  }

  UpdateHandler = class<T> {
    current?: T;
    previous?: T;
    has(current: T) {
      this.current = current;
      return this;
    }
    changedFrom(previous: T) {
      this.previous = previous;
      if (!this.current) return false;
      if (!this.previous) return true;
      return this.previous !== this.current;
    }
  };
  updateHandler = new this.UpdateHandler();

  didUpdate = (
    _: Readonly<NoizApp_v2Props>,
    prevState: Readonly<NoizApp_v2State>,
    __?: any
  ) => {
    const SimpleStorage =
      this.state.evm?.contractFactories.SimpleStorage;
    if (SimpleStorage) {
      const foos = SimpleStorage.interface.functions;
      console.log(foos["getNumber()"]);
    }
    const hasUpdated = this.hasUpdated;
    const initizalizeWeb3 = this.initizalizeWeb3;
    const listAccounts = this.listAccounts;
    const updateHandler = this.updateHandler;
    const has = this.updateHandler.has.bind(updateHandler);
    const themes = this.themes;
    const currMtmsk = this.state.metamask;
    const prevMtmsk = prevState.metamask;
    const currScheme = this.state.prefersColorScheme;
    const prevScheme = prevState.prefersColorScheme;
    const currIsConn = this.state.isConnected;
    const prevIsConn = prevState.isConnected;
    const currPrvdr = this.state.provider;
    const prevPrvdr = prevState.provider;
    // statechanges
    const prefScheme = hasUpdated(prevScheme, currScheme);
    const metamask = hasUpdated(prevMtmsk, currMtmsk);
    const provider = hasUpdated(prevPrvdr, currPrvdr);
    const isConn = has(currIsConn).changedFrom(prevIsConn);
    // EXECUTIONS
    prefScheme && this.setTheme(themes[currScheme]);
    metamask && initizalizeWeb3();
    provider && listAccounts(dataGuard(currMtmsk, ""));
    isConn && this.handleConnection();
  };

  isDarkColorScheme = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)")
      .matches;

  handleColorSchemeChange = (
    event: MediaQueryListEvent
  ) => {
    const newColorScheme = event.matches
      ? themes.dark
      : themes.light;
    this.setPrefersColorScheme(newColorScheme);
  };

  didMount() {
    const isDark = this.isDarkColorScheme();

    const handleClrScheme = this.handleColorSchemeChange;
    this.detectEth();
    if (isDark) this.setPrefersColorScheme(themes.dark);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleClrScheme);
  }
  // debugState = true;
  // debugUpdate = true;
}
