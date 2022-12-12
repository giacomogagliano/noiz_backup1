import { Box, Text, useInput } from "ink";
import React, { Component } from "react";

class Other extends Component<{
  conto: number;
  handleConto: (conto: number) => void;
}> {
  constructor(props: {
    conto: number;
    handleConto: (conto: number) => void;
  }) {
    super(props);
    this.handle = this.handle.bind(this);
  }

  handle(conto: number) {
    this.props.handleConto(conto);
  }

  Hook = (props: { currentConto: number }) => {
    useInput((input, key) => {
      console.log(input, key.return);
      let newCont = props.currentConto + 1;
      this.handle(newCont);
    });
    return <Text>ccccc</Text>;
  };

  override componentDidMount(): void {}

  override render() {
    return (
      <this.Hook
        currentConto={this.props.conto}
      ></this.Hook>
    );
  }
}

export class Noiz_v3 extends Component<
  {},
  { conto: number }
> {
  constructor(props: {}) {
    super(props);
    this.state = { conto: 0 };
    this.handleConto = this.handleConto.bind(this);
  }

  handleConto(conto: number) {
    this.setState({ conto });
  }

  override render() {
    return (
      <Box flexDirection="column">
        <Other
          conto={this.state.conto}
          handleConto={this.handleConto}
        ></Other>
        <Text>{this.state.conto}</Text>
      </Box>
    );
  }
}
